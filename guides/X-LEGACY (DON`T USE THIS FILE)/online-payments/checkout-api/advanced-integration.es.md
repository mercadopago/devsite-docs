# Integración avanzada

## Recuerda tus clientes y sus tarjetas

Usa nuestras APIs para guardar la referencia de las tarjetas de tus clientes y poder brindarles una mejor experiencia. De esta manera, tus clientes no tienen que completar sus datos cada vez y pueden finalizar sus pagos más rápido.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crear un cliente y una tarjeta

Para crear un cliente y asociarlo a su tarjeta tienes que enviar el campo del e-mail, el tipo de medio de pago, el ID del banco emisor y el token generado.
Vas a sumar a cada cliente con el valor `customer` y a la tarjeta como `card`.

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "test_payer_12345@testuser.com";
  $customer->save();

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id();
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { "email": "test_payer_12345@testuser.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  var card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer_id": customer.id,
    "issuer_id": "23",
    "payment_method_id": "debit_card"
  }

  mercadopago.card.create(card_data).then(function (card) {
    console.log(card);
  });

});

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

CustomerRequest customerRequest = CustomerRequest.builder()
   .email("john@test.com")
   .build();
Customer customer = customerClient.create(customerRequest);

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'john@yourdomain.com'
}
customer_response = sdk.customer.create(customer_request)
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
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
  "email": "test_payer_12345@testuser.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
```curl

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers' \
    -d '{"email": "test_payer_12345@testuser.com"}'

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer": {"id": "3245612"}, "payment_method_id":"debit_card"}'

```
]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

```json
{
    "id": "123456789-jxOV430go9fx2e",
    "email": "test_payer_12345@testuser.com",
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
> Te recomendamos almacenar los datos de tarjeta luego de realizar un pago de forma exitosa para guardar datos correctos.


> WARNING 
> 
> Importante
> 
> - Si recibes un mensaje de error del tipo `"invalid parameter"` con código de estado HTTP 400, asegúrate de estar completando correctamente los campos `payment_method_id` e `issuer_id`.
> - Cuando estés utilizando tus credenciales de prueba, recuerda respetar el siguiente formato para el email del cliente: `test_payer_[0-9]{1,10}@testuser.com`. Por ejemplo: `test_payer_12345@testuser.com`.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agrega nuevas tarjetas a un cliente

Para agregar nuevas tarjetas a un cliente, debes crear un token y hacer un `HTTP POST` al `customer`.

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
    "customer_id": customer.id,
    "issuer_id": "3245612",
    "payment_method_id": "debit_card"
  }

  mercadopago.card.create(card_data).then(function (card) {
    console.log(card);
  });
});


```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

puts card
```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

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
  "issuer_id": "3245612",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer": {"id": "3245612"}, "payment_method_id":"debit_card"}'

```
]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta


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

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usa las tarjetas guardadas para un pago

Para que un cliente pueda hacer un pago con sus datos guardados, es necesario volver a capturar el código de seguridad. Mercado Pago no puede almacenar esa información por cuestiones de seguridad.

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Muestra las tarjetas guardadas a tu cliente

Primero, obtén el listado de guardadas para que tu cliente pueda elegir con cuál quiere pagar:

[[[

```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");
customerClient.listCards(customer.getId());

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
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
```
]]]

Respuesta de datos de una tarjeta guardada:

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

Y puedes armar el formulario de la siguiente manera:

```html
<li>
   <label>Payment Method:</label>
   <select id="cardId" name="cardId"></select>
</li>
<li id="cvv">
   <label for="cvv">Security code:</label>
   <input type="text" id="cvv" placeholder="123" />
</li>
<script>
   const customerCards = [{
       "id": "3502275482333",
       "last_four_digits": "9999",
       "payment_method": {
           "name": "amex",
       },
       "security_code": {
           "length": 4,
       }
   }];

   // Append customer cards to select element
   const selectElement = document.getElementById('cardId');
   const tmpFragment = document.createDocumentFragment();
   customerCards.forEach(({id, last_four_digits, payment_method}) => {
       const optionElement = document.createElement('option');
       optionElement.setAttribute('value', id)
       optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`
       tmpFragment.appendChild(optionElement);
   })
   selectElement.appendChild(tmpFragment)
</script>
```
<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Captura el código de seguridad

El cliente tiene que ingresar el código de seguridad en un flujo similar al que realizaste para la [captura de los datos de la tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card/#bookmark_captura_los_datos_de_la_tarjeta). Debes crear un token enviando el formulario con el ID de la tarjeta y el código de seguridad.

```javascript
(async function createToken() {
       try {
           const token = await mp.createCardToken({
               cardId: document.getElementById('cardId').value,
               securityCode: document.getElementById('cvv').value,
           })

            // Use the received token to make a POST request to your backend
           console.log('token received: ', token.id)
       }catch(e) {
           console.error('error creating token: ', e)
       }
   })()
```

----[mla, mlm, mpe, mco, mlu, mlc]----
> Esta documentación utiliza la nueva versión de MercadoPago.js. Para ver la versión anterior, ve a la [sección de Checkout API antigua](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/advanced-integration).
------------
----[mlb]----
> Esta documentación utiliza la nueva versión de MercadoPago.js. Para ver la versión anterior, ve a la [sección de Checkout Transparente antigua](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/advanced-integration).
------------

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Crea el pago

Una vez obtenido el token, puedes generar el pago por el monto correspondiente. Al ser un pago con tarjeta guardada, debes enviar el ID del cliente junto al token.

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->installments = 1;
  $payment->payer = array(
        "type" => "customer",
        "id" => "123456789-jxOV430go9fx2e"
    );

  $payment->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  payer: {
    type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request = PaymentCreateRequest.builder()
   .transactionAmount(new BigDecimal("100"))
   .installments(1)
   .token("ff8080814c11e237014c1ff593b57b4d")
   .payer(PaymentPayerRequest.builder()
       .type("customer")
       .id("247711297-jxOV430go9fx2e")
       .build())
   .build();

client.create(request);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  transaction_amount: 100,
  payer: {
    type: 'customer',
    id: '123456789-jxOV430go9fx2e'
  }
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Type = "customer",
        Email = "test_payer_12345@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "installments": 1,
    "payer": {
        "type": "customer",
        "id": "123456789-jxOV430go9fx2e"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/payments' \
  -d '{
  transaction_amount: 100,
  token: "ff8080814c11e237014c1ff593b57b4d",
  installments: 1,
  payer: {
      type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
}'

```
]]]


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Busca un cliente creado

Puedes buscar información sobre tu cliente si lo necesitas. Por ejemplo, en el caso que no sepas cuál es el ID asignado. El parámetro requerido para obtenerlo es el e-mail.

[[[

```php

<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>

```
```node

  var filters = {
    email: "test_payer_12345@testuser.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test_payer_12345@testuser.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test_payer_12345@testuser.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
    "email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/search' \
  -d '{
    "email": "test_payer_12345@testuser.com"
}'
```
]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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
            "email": "test_payer_12345@testuser.com",
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

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consulta el listado de tarjetas de un cliente

[[[
```php

<?php
    $customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");
customerClient.listCards(customer.getId());

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
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/' \

```
]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modificar un cliente

Para modificar un cliente es necesario enviar el `customer_id` y los campos que se quieran actualizar en una solicitud `HTTP PUT`. 

Los campos que se pueden modificar de un cliente son:
| Atributo | Descripción |
| -------- | ----------- |
| `address` | Dirección. |
| `default_address` | Dirección por defecto. |
| `default_card` | Tarjeta por defecto. |
| `description` | Descripción. |
| `email` | E-mail de la cuenta. |
| `first_name` | Nombre. |
| `last_name` | Apellido. |
| `phone` | Teléfono registrado. |
| `identification` | Tipo de documento y número. |

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "user@user.com";
  $customer->first_name = "john";
  $customer->last_name = "wagner";
  $customer->phone = array("area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]", "number" => "001234567");
  $customer->identification = array("type" => "[FAKER][IDENTIFICATION][TYPE]", "number" => "12341234");
  $customer->default_address = "Casa";
  $customer->address = array("zip_code" => "[FAKER][ADDRESS][ZIP_CODE]", "street_name" => "[FAKER][ADDRESS][STREET_NAME]", "street_number" => "2");
  $customer->description = "Información del cliente";
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
  "email": "test_payer_12345@testuser.com",
  "first_name": "john" ,
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  }, 
  "default_address": "Casa",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "description": "Información del cliente",
  "default_card": "None
 }

mercadopago.customers.update(customer_data).then(function (customer) {
 // code ...
});

```

```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient client = new CustomerClient();

CustomerRequest request = CustomerRequest.builder()
   .email("user@user.com")
   .firstName("John")
   .lastName("Wagner")
   .defaultAddress("Casa")
   .phone(PhoneRequest.builder()
       .areaCode("11")
       .number("001234567")
       .build())
   .identification(IdentificationRequest.builder()
       .type("CPF")
       .number("12341234")
       .build())
   .description("Informações do cliente")
   .defaultCard("None")
   .address(CustomerAddressRequest.builder()
       .zipCode("52")
       .streetName("Av. das Nações Unidas")
       .streetNumber(2)
       .build())
   .build();

client.update("247711297-jxOV430go9fx2e", request);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'user@user.com',
  first_name: 'john',
  last_name: 'wagner',
  default_address: 'Casa',
  phone: {
    area_code: '[FAKER][PHONE_NUMBER][AREA_CODE]',
    number: '001234567'
  },
  identification: {
    type: '[FAKER][IDENTIFICATION][TYPE]',
    number: '12341234'
  },
  address: {
    zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
    street_name: '[FAKER][ADDRESS][STREET_NAME]',
    street_number: '2'
  },
  description: 'Información del cliente',
  default_card: 'None'
}
customer_response = sdk.customer.update(customer_id ,customer_request)
customer = customer_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var phoneRequest = new PhoneRequest
{
  AreaCode = "[FAKER][PHONE_NUMBER][AREA_CODE]",
  Number = "001234567"
};

var identificationRequest = new IdentificationRequest
{
  Type = "[FAKER][IDENTIFICATION][TYPE]",
  Number = "12341234"
};

var addressRequest = new AddressRequest
{
  ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
  StreetName = "[FAKER][ADDRESS][STREET_NAME]",
  StreetNumber = "2"
};

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
    FirstName = "john",
    LastName = "wagner",
    DefaultAddress = "Casa",
    Description = "Información del cliente",
    DefaultCard = "None",
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
  "default_address": 'Casa',
  "phone": {
    "area_code": '[FAKER][PHONE_NUMBER][AREA_CODE]',
    "number": '001234567'
  },
  "identification": {
    "type": '[FAKER][IDENTIFICATION][TYPE]',
    "number": '12341234'
  },
  "address": {
    "zip_code": '[FAKER][ADDRESS][ZIP_CODE]',
    "street_name": '[FAKER][ADDRESS][STREET_NAME]',
    "street_number": '2'
  },
  "description": 'Información del cliente',
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
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  },
  "description": "Información del cliente" 
}'

```
]]]

Ejemplo de respuesta con el envío del `customer_id`:
```json
{
  "id": "xxxxxxxxxxxxxxxxxxxxx",
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": 001234567
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": 12341234
  },
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": 2
  },
  "description": "Información del cliente",
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
Ejemplo de respuesta sin incluir el parámetro `customers_id`:
```json
{
  "message": "missing customer id"
}
```
> NOTE
>
> Nota
>
> Si no tienes el `customer_id`, [consulta la API de Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get) y genera una solicitud `HTTP GET` utilizando el parámetro `email` para obtenerlo. 

## Cancelaciones y devoluciones

----[mla, mlm, mco, mlu, mlb, mlc]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
------------

----[mpe]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo totalmente.
------------

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).

---
### Próximos pasos

> LEFT_BUTTON
>
> Otras funcionalidades
>
> Adapta la integración a las necesidades específicas de tu negocio.
>
> [Otras funcionalidades](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-features)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
