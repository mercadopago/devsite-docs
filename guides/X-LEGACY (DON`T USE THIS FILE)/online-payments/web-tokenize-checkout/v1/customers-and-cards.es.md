

# Clientes y tarjetas almacenadas

> WARNING
>
> Pre-requisitos
>
> * Tener implementada la [captura de datos de tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card#captura_los_datos_de_la_tarjeta).

Los clientes y tarjetas (*customers & cards*) son la forma de almacenar datos de tarjeta de tus clientes de **manera segura** para mejorar la experiencia de compra.

Esto permitiría que tus clientes finalicen sus compras mucho más rápido y de forma más sencilla, ya que no deberán completar nuevamente sus datos de tarjeta.

Los *customers* representan a tus clientes. Las tarjetas que almacenes serán para este cliente específico.

## Creación de un customer y una card

Para crear un `Customer` y una `Card` al mismo tiempo es necesario enviar por lo menos los campos `email` y `token`.

El `token` es el que capturas cuando haces el [manejo de la respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/handling-responses) del *Web Tokenize Checkout*.


> NOTE
>
> Nota
>
> Recomendamos almacenar los datos de tarjeta luego de que hayas realizado un pago de forma exitosa, para asegurarte de que los mismos sean correctos.



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
customer.setEmail("john@yourdomain.com");
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
    "customer_id": customer.body.id 
  }

  mercadopago.card.create(card_data).then(function (card) {

  }).catch(function (error) {
   // Do Stuff...
  });

}).catch(function (error) {
 // Do Stuff...
});

```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

customer_data = {
  email: 'test@test.com',
}
customer_response = sdk.customer.create(customer_data)
customer = customer_response[:response]

card_data = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  customer_id: customer['id']
}
card_response = sdk.card.create(card_data)
card = card_response[:response]

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test@test.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test@test.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]
```
]]]

Respuesta del Servidor:

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

> NOTE
>
> Nota
>
> Para las tarjetas `master` también se debe enviar el campo `issuer_id` a la hora de crearle la tarjeta a un customer.

## Recibir un pago de un Customer

> WARNING
>
> Importante
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión nueva, ve a la [sección de Clientes y tarjetas almacenadas con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/customers-and-cards).

Para que puedas recibir un pago utilizando una tarjeta almacenada, es necesario incluir en el código HTML el ID del customer y los IDs de las tarjetas del usuario a través de los atributos `data-customer-id` y `data-card-ids`. Por ejemplo:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-tokenize-checkout.js"
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
> Los IDs de tarjetas deberán separarse por coma.

### 1. Obtener los IDs de las tarjetas almacenadas

Puedes listar las tarjetas almacenadas en el *Web Tokenize Checkout* para que tu cliente elija con cuál quiere pagar.

Puedes obtener el listado completo de `Cards` de un cliente realizando un request `HTTP GET`:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.findById(customerId);
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp
var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");
```
```python
cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]
```
]]]

Datos de una tarjeta guardada:

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

### 2. Usar los IDs de las tarjetas en el checkout

Con esta información de tarjetas puedes invocar el *Web Tokenize Checkout*.

Por ejemplo:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-tokenize-checkout.js"
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


## Agregar nuevas tarjetas a un Customer

Es posible agregar nuevas tarjetas a tu `Customer`. Para esto debes crear un `token` y hacer un request `HTTP POST` al `Customer`.


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

Customer customer = Customer.findById("247711297-jxOV430go9fx2e");

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

mercadopago.customers.search({
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
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_data = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  customer_id: customer['id']
}
card_response = sdk.card.create(card_data)
card = card_response[:response]

puts card

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var customerClient = new CustomerClient();
Customer customer = await customerClient.GetAsync("247711297-jxOV430go9fx2e");

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

Console.WriteLine(card.Id);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_response = sdk.customer().get("247711297-jxOV430go9fx2e")
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)
```
]]]


Respuesta:

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

## Buscar un Customer

En el caso en el que no sepas cuál es el `id` de tu `Customer`, puedes utilizar la API de `Customer Search` realizando un request `HTTP GET`. El parámetro requerido para esto es `email`:

[[[
```php
<?php

  $filters = array(
    "email"=>"test@test.com"
  );

  $customers = MercadoPago\Customer::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = Customer.search(filters, false).resources();


```
```node

  var filters = {
    email: "test@test.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test@test.com' })
customer = customer_response[:response]

```
```csharp
var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test@test.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;
```
```python
filters = {
    "email": "test@test.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]
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

## Obtener las Cards de un Customer

Puedes obtener el listado completo de `Cards` de un cliente realizando un request `HTTP GET`:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.findById(customerId);
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp
var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");
```
```python
cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]
```
]]]

Respuesta:

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
