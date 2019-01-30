# Clientes e cartões armazenados

> WARNING
>
> Pré-requisitos
>
> * Ter implementada a [captura de dados de cartão](/guides/payments/api/receiving-payment-by-card.pt.md#capturar-datos-de-tarjeta).

Os clientes e cartões (*customers & cards*) são uma forma de armazenar os dados do cartão **de maneira segura** para melhorar a experiência de compra.

Isto permitirá que seus clientes finalizem suas compras de forma muito mais rápida e simples, já que não deverão informar novamente seus dados de cartão.

Os *customers* representam seus clientes. Os cartões que armazenar serão deste cliente específico.

## Criação de um customer e card

Para criar um `Customer` e um `Card` ao mesmo tempo é necessário enviar pelo menos os campos `email` e `token`.

O `token` é o que captura quando esta [tratando o retorno](/guides/payments/api/handling-responses.pt.md) do *Web Tokenize Checkout*.


> NOTE
>
> Nota
>
> Recomendamos armazenar os dados de cartão logo que seja realizado um pagamento de forma bem sucedida, para certificar-se de que os mesmos sejam corretos.



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
customer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");
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

Retorno do Servidor:

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

## Receber pagamento de um Customer

Para que possa receber um pagamento utilizando um cartão armazenado, é necessário incluir no código HTML o ID do customer e os IDs dos cartões do usuário através dos atributos `data-customer-id` e `data-card-ids`. Por exemplo:

```html
<form action="/processar-pagamento" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-customer-id="209277402-FqRqgEc3XItrxs"
    data-card-ids="1518023392627,1518023332143">
  </script>
</form>
```

> NOTE
>
> Nota
>
> Os IDs dos cartões deverão ser separados por vírgula.

### 1. Obter os IDs dos cartões armazenados

Você pode listar os cartões armazenados no *Web Tokenize Checkout* para que seu cliente escolha com qual deseja pagar.

Podendo obter uma lista completa de `Cards` de um cliente realizando um request `HTTP GET`:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($id);
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

Dados de um cartão guardado:

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

### 2. Usar os ID do cartão no checkout

Com esta informação de cartão poderá chamar o *Web Tokenize Checkout*.

Por exemplo:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-customer-id="209277402-FqRqgEc3XItrxs"
    data-card-ids="<?php
      foreach ($cards["response"] as $card) {
        echo $card["id"];
      }
    ?>">
  </script>
</form>
```


## Adicione novos cartões a um Customer

É possível adicionar novos cartões ao seu `Customer`. Para isto deve criar um `token` e fazer um request `HTTP POST` ao `Customer`.


[[[
```php

<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = MercadoPago\Customer::find_by_id("247711297-jxOV430go9fx2e");

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id;
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


Retorno:

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

## Buscar um _Customer_

No caso em que não saiba qual é o `id` de seu `Customer`, poderá utilizar a API de `Customer Search` realizando um request `HTTP GET`. O parâmetro requerido para isto é o `email`:

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

Retorno:

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

## Obter os _Cards_ de um _Customer_

Poderá obter uma lista completa de `Cards` de um cliente realizando um request `HTTP GET`:

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

Retorno:

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
