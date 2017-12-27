# Clientes e cartões armazenados

> WARNING
>
> Pré-requisitos
>
> * Possuir a [captura de dados do cartão](/guides/payments/api/receiving-payment-by-card.es.md#captura-de-dados-do-cartão).

Clientes e cartões (*customers & cards*) são o modo de armazenar os dados de cartão de seus clientes de **forma segura** para melhorar a experiência de compra.

Isso permitirá que seus clientes finalizem suas compras de forma rápida e fácil, pois não precisarão preencher os dados do cartão novamente.

Os *customers* representam, como o próprio nome indica, seu cliente. Os cartões que armazenar serão para este cliente específico.

## Crie customers e cards

Para criar o `Customer` e o `Card` ao mesmo tempo, é necessário enviar pelo menos os campos email e token.

O `token` é o que capturou ao fazer a [captura de dados do cartão](/guides/payments/api/receiving-payment-by-card.es.md#captura-de-dados-do-cartão)).


> NOTE
>
> Nota
>
> Recomendamos armazenar os dados do cartão após efetuar um pagamento com sucesso, para garantir que estão corretos


[[[
```php

<?php  
 
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "test@test.com";
  $customer->save();

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id();
  $card->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("test@test.com");
customer.save();

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

customer_data = { "email": "test@test.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {

  }).catch(function (error) {
   // Do Stuff...
  });

}).catch(function (error) {
 // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.new()
customer.email = "test@test.com"
customer.save

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

```
]]]

Resposta esperada:

```json
{
	"id": "123456789-jxOV430go9fx2e",
	"email": "test@test.com",
	...
	"default_card": "1490022319978",
	"default_address": null,
	"cards": [{
		"id": "1490022319978",
		"expiration_month": 12,
		"expiration_year": 2020,
		"first_six_digits": "415231",
		"last_four_digits": "0001",
		...
	}],
	"addresses": [],
	"live_mode": false
}
```

## Receba o pagamento de um Customer

Para receber um pagamento utilizando um cartão armazenado, é necessário obter o **código de segurança** novamente, já que por motivos de segurança, o Mercado Pago não pode armazenar essa informação.

### 1. Exibir os cartões armazenados

Liste os cartões armazenados para que seu cliente escolha com qual deseja efetuar o pagamento.

Obtenha a lista completa de `Cards` de um cliente efetuando uma requisição `HTTP GET`

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customer = MercadoPago::Customer.load(customer_id);
  cards = customer.cards;

```
]]]

Dados de um cartão salvo:

```json
[{
	"id": "1490022319978",
	"expiration_month": 12,
	"expiration_year": 2020,
	"first_six_digits": "415231",
	"last_four_digits": "0001",
	...
}]
```

Com esta resposta, recomendamos elaborar um formulário:

```html
<li>
	<label>Payment Method:</label>
	<select id="cardId" name="cardId" data-checkout='cardId'>
	<?php foreach ($cards["response"] as $card) { ?>
		<option value="<?php echo $card["id"]; ?>"
			first_six_digits="<?php echo $card["first_six_digits"]; ?>"
			security_code_length="<?php echo $card["security_code"]["length"]; ?>">
				<?php echo $card["payment_method"]["name"]; ?> ended in <?php echo $card["last_four_digits"]; ?>
		</option>
	<?php } ?>
	</select>
</li>
<li id="cvv">
	<label for="cvv">Security code:</label>
	<input type="text" id="cvv" data-checkout="securityCode" placeholder="123" />
</li>
```

### 2. 2. Obtenha o código de segurança

O fluxo de captura é quase o mesmo utilizado para a [captura de dados do cartão](/guides/payments/api/receiving-payment-by-card.pt.md#captura-de-dados-do-cartão). Você deve criar um `card token`, enviando o `$form` com o `cardId` e o `securityCode`:

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'),'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

        return false;
    }
};
```

O método `createToken` retornará um `card_token` (a representação segura do cartão):

```json
{
    "id": "ff8080814cbd77a8014cc",
    ...
}
```

### 3. Criar um pagamento

Após obter o token na etapa anterior, você poderá gerar o pagamento pelo valor correspondente.

Por se tratar de um pagamento com cartão armazenado, você deverá enviar a ID do cliente associado ao token.

[[[
```php
<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->payer = array(
		"type" => "customer",
		"id" => "123456789-jxOV430go9fx2e"
	);

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.type = "customer";
payer.id = "123456789-jxOV430go9fx2e";

Payment payment = new Payment();
payment.setTransactionAmount(100);
payment.setToken('ff8080814c11e237014c1ff593b57b4d');
payment.setPayer(payer);

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  payer: {
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.payer = {
  type: "customer"
  id: "123456789-jxOV430go9fx2e"
}

payment.save()

```
]]]


Isso é tudo. A resposta indicará o status do pagamento  (`approved`, `rejected` ou `in_process`).

> Você pode consultar mais informações sobre [manipulação de respostas](#manipulação-de-respostas).


## Adicione novos cartões a um cliente

É possível adicionar novos cartões ao seu `Customer`. Para isso, você deve criar um `token` e fazer uma requisição `HTTP POST` ao `Customer`.

[[[
```php

<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = MercadoPago\Customer::find_by_id("247711297-jxOV430go9fx2e");

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customerId = $customer->getId;
  $card->save();

  print_r($card);

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = Customer.load("247711297-jxOV430go9fx2e")

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getID());
card.save();

System.out.print(card.toString());

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var filters = {
  id: "247711297-jxOV430go9fx2e"
};

mercadopago.searchCustomer({
  qs: filters
}).then(function (customer) {
  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  }).catch(function (error) {
   // Do Stuff...
  });
}).catch(function (error) {
  // Do Stuff...
});


```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.load("247711297-jxOV430go9fx2e")

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

puts card

```
]]]


Resposta:

```json
{
	"id": "1493990563105",
	"expiration_month": 12,
	"expiration_year": 2020,
	"first_six_digits": "503175",
	"last_four_digits": "0604",
	"payment_method": {
		"id": "master",
		"name": "master",
		"payment_type_id": "credit_card",
		"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif",
		"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif"
	},
	"security_code": {
		"length": 3,
		"card_location": "back"
	},
	"issuer": {
		"id": 3,
		"name": "Mastercard"
	},
	"cardholder": {
		"name": "Card holdername",
		"identification": {
			"number": "12345678",
			"type": "DNI"
		}
	},
	"date_created": "2017-05-05T09:22:30.893-04:00",
	"date_last_updated": "2017-05-05T09:22:30.893-04:00",
	"customer_id": "255276729-yLOTNHQjpDWw1X",
	"user_id": "255276729",
	"live_mode": false
}
```

## Buscar um cliente

Caso não saiba qual é a `id` do seu `Customer`, você pode utilizar a API de `Customer Search` fazendo uma requisição `HTTP GET`. O parâmetro necessário é o `email`:

[[[
```php
<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


```
```node

  var filters = {
    email: "test@test.com"
  };

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customers = MercadoPago::Customer.search(email: "test@test.com");

```
]]]

Respuesta:

```json
{
    "paging": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "results": [
        {
            "address": {
                "id": null,
                "street_name": null,
                "street_number": null,
                "zip_code": null
            },
            "addresses": [],
            "cards": [
                {
                    ...
                }
            ],
            "date_created": "2017-05-05T00:00:00.000-04:00",
            "date_last_updated": "2017-05-05T09:23:25.021-04:00",
            "date_registered": null,
            "default_address": null,
            "default_card": "1493990563105",
            "description": null,
            "email": "test@test.com",
            "first_name": null,
            "id": "123456789-jxOV430go9fx2e",
            "identification": {
                "number": null,
                "type": null
            },
            "last_name": null,
            "live_mode": false,
            "metadata": {},
            "phone": {
                "area_code": null,
                "number": null
            }
        }
    ]
}
```

## Obtenha os cartões de um cliente

Obtenha a lista completa de `Cards` de um cliente efetuando uma requisição `HTTP GET`:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customer = MercadoPago::Customer.load(customer_id);
  cards = customer.cards;

```
]]]

Resposta:

```json
[{
	"id": "1490022319978",
	"expiration_month": 12,
	"expiration_year": 2020,
	"first_six_digits": "415231",
	"last_four_digits": "0001",
	...
}]
```
