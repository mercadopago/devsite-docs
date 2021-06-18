

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

Para crear un `Customer` y una `Card` al mismo tiempo es necesario enviar por lo menos los campos `email`,`payment_method_id`, `issuer_id` y `token`.

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
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("john@yourdomain.com");
customer.save();

Issuer issuer = new Issuer();
issuer.setId("3245612");

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.setIssuer(issuer);
card.setPaymentMethodId("debit_card");
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
    "customer_id": customer.body.id,
    "issuer_id": "2353146",
    "payment_method_id": "debit_card"  
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
  customer_id: customer['id'],
  issuer_id: '2353146',
  payment_method_id: 'debit_card'
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
    Token = "9b2d63e00d66a8c721607214cedaecda"
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
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "2353146",
  "payment_method_id": "debit_card"
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

> WARNING 
> 
> Importante
> 
> Si recibes un mensaje de error del tipo `"invalid parameter"` con código de estado HTTP 400, asegúrate de estar completando correctamente los campos `payment_method_id` e `issuer_id`.

## Recibir un pago de un Customer

Para que puedas recibir un pago utilizando una tarjeta almacenada, es necesario incluir en el código de integración el ID del customer y los ID de las tarjetas del usuario a través de los atributos `customerId` y `cardIds` dentro del parámetro `savedCards`.

Por ejemplo:

```html
<script>
  mp.checkout({
    tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://www.mi-sitio.com/process',
        savedCards: {
            cardIds: '1518023392627,1518023332143' // IDs de las tarjetas
            customerId: '209277402-FqRqgEc3XItrxs' // Tu customer ID
        }
    },
    render: {
        container: ‘.tokenizer-container’,
        label: ‘Pagar’
    }
  });
</script>
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

  Customer customer = Customer.load(customerId)
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
<script>
// Obtén los IDs de las cards obtenidas al llamar a la API en el paso anterior
  const customerCardIds = cardsResponse.map(card => card.id);

// Inicializa  el checkout
  mp.checkout({
    tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://www.mi-sitio.com/process',
        savedCards: {
            cardIds: customerCardIds, // cardIds obtenidos
            customerId: '209277402-FqRqgEc3XItrxs' // Tu customer id
        }
    },
    render: {
        container: ‘.tokenizer-container’,
        label: ‘Pagar’
    }
  });
</script>
```

> Esta documentación utiliza la nueva versión de la librería. Para ver la versión anterior, ve a la [sección de Clientes y tarjetas almacenadas con MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/v1/customers-and-cards).


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
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

  print_r($card);

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = Customer.load("247711297-jxOV430go9fx2e")

Issuer issuer = new Issuer();
issuer.setId("3245612");

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getID());
card.setIssuer(issuer);
card.setPaymentMethodId("debit_card");
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
    "customer": customer.id,
    "issuer_id": "2332451",
    "payment_method_id": "debit_card"
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
  customer_id: customer['id'],
  issuer_id: '2332451',
  payment_method_id: 'debit_card'
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
    Token = "9b2d63e00d66a8c721607214cedaecda"
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
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "2332451",
  "payment_method_id": "debit_card"
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

> WARNING 
> 
> Importante
> 
> Si recibes un mensaje de error del tipo `"invalid parameter"` con código de estado HTTP 400, asegúrate de estar completando correctamente los campos `payment_method_id` e `issuer_id`. 
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

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


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

  Customer customer = Customer.load(customerId)
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
## Modificar un Customer

Para modificar un customer es necesario enviar el customer_id, el token y los campos que se vayan a modificar. Realizando un solicitud `HTTP PUT`.

Campos que pueden modificarse:
Atributo | Información
-------- | -----------
address | Información sobre la dirección por defecto del cliente
default_address | Dirección por defecto del cliente
default_card | Tarjeta por defecto del cliente
description | Descripción del cliente
email | Email del cliente
first_name | Nombre del cliente
last_name | Apellido del cliente
phone | Teléfono del cliente
identification | Tipo de Documentación y Numero

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "user@user.com";
  $customer->first_name = "john";
  $customer->last_name = "wagner";
  $customer->phone = array("area_code" => "11", "number" => "001234567");
  $customer->identification = array("type" => "DNI", "number" => "12341234");
  $customer->default_address = "Home";
  $customer->address = array("zip_code" => "12345678", "street_name" => "street_name", "street_number" => "2");
  $customer->description = "esta es mi informacion";
  $customer->default_card = "None";
  $customer->update();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { 
  "email": "test@test.com",
  "first_name": ,
  "last_name": ,
  "phone": {
    "area_code": "11",
    "number": "001234567"
  },
  "identification": {
    "type": "DNI",
    "number": "12341234"
  }, 
  "default_address": "Home",
  "address": {
    "zip_code": "12345678"
    "street_name": "street_name"
    "street_number": "2"
  },
  "description": "esta es mi informacion"
  "default_card": "None
 }

mercadopago.customers.update(customer_data).then(function (customer) {
 // code ...
});

```

```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Phone phone = new Phone();
phone.setAreaCode("11");
phone.setNumber("001234567");

DefaultAddress defaultAddress = new DefaultAddress();
defaultAddress.setZipCode("12345678");
defaultAddress.setStreetName("street_name");
defaultAddress.setStreetNumber(2);

Identification identification = new Identification();
identification.setType("DNI");
identification.setNumber(12341234)

Customer customer = new Customer();
customer.setEmail("user@user.com");
customer.setFirstName("john");
customer.setLastName("wagner");
customer.setDefaultAddress("Home");
customer.setPhone(phone);
customer.setIdentification(identification)
customer.setDescription("esta es mi informacion");
customer.setDefaultCard("None")
cusotmer.setAddress(defaultAddress)
customer.update();

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'user@user.com',
  first_name: 'john',
  last_name: 'wagner',
  default_address: 'home',
  phone: {
    area_code: '11',
    number: '001234567'
  },
  identification: {
    type: 'DNI',
    number: '12341234'
  },
  address: {
    zip_code: '12345678',
    street_name: 'street_name',
    street_number: '2'
  },
  description: 'esta es mi informacion',
  default_card: 'None'
}
customer_response = sdk.customer.update(customer_id ,customer_request)
customer = customer_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var phoneRequest = new PhoneRequest
{
  AreaCode = "11",
  Number = "001234567"
};

var identificationRequest = new IdentificationRequest
{
  Type = "DNI",
  Number = "12341234"
};

var addressRequest = new AddressRequest
{
  ZipCode = "12345678",
  StreetName = "street_name",
  StreetNumber = "2"
};

var customerRequest = new CustomerRequest
{
    Email = "test@test.com",
    FirstName = "john",
    LastName = "wagner",
    DefaultAddress = "home",
    Description = "esta es mi informacion",
    DefaultCard = "None"
    Phone = phoneRequest,
    Identification = identificationRequest,
    Address = addressRequest

};
var customerClient = new CustomerClient();
Customer customer = await customerClient.Update(customerRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": 'user@user.com',
  "first_name": 'john',
  "last_name": 'wagner',
  "default_address": 'home',
  "phone": {
    "area_code": '11',
    "number": '001234567'
  },
  "identification": {
    "type": 'DNI',
    "number": '12341234'
  },
  "address": {
    "zip_code": '12345678',
    "street_name": 'street_name',
    "street_number": '2'
  },
  "description": 'esta es mi informacion',
  "default_card": 'None'
}
customer_response = sdk.customer().update(customer_id, customer_data)
customer = customer_response["response"]

```
```curl

curl -X PUT \
    'https://api.mercadopago.com/v1/customers/{id}' \
    -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
    -d '{
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "default_address": 'home',
  "address": {
    "zip_code": "12345678",
    "street_name": "street_name",
    "street_number": "2"
  },
  "phone": {
    "area_code": "11",
    "number": "001234567"
  },
  "identification": {
    "type": "DNI",
    "number": "12341234"
  },
  "description": "esta es mi información",
  "default_card": 'None' 
}'

```
]]]

Ejemplo de respuesta:
```json
{
  "id": "xxxxxxxxxxxxxxxxxxxxx",
  "email": "user@user.com",
  "first_name": "nombre",
  "last_name": "surname",
  "phone": {
    "area_code": "11",
    "number": 001234567
  },
  "identification": {
    "type": "DNI",
    "number": 12341234
  },
  "address": {
    "zip_code": "12345678",
    "street_name": "street_name",
    "street_number": 2
  },
  "description": "esta es mi información",
  "date_created": "2021-05-25T15:36:23.541Z",
  "metadata": {},
  "cards": [
    {}
  ],
  "addresses": [
    {}
  ]
}
```
> NOTE
>
> Nota
>
> De no enviar el parametro customer_id, se obtendra como resultado el mensaje `missing customer id`, ó si el parametro es equivocado retornará `customer id not found`.(en caso de no pueder identificar el ID, recurra a la API de `Customer Search` generando un request `HTTP GET`, enviando el parametro `email`)