# Otros medios de pago

----[mlb]----
Con el Checkout API de Mercado Pago, es posible ofrecer, además de tarjeta, Pix y Boleto, **pagos en agencias de lotería**.
------------

----[mla]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos con **Rapipago** y/o **Pago Fácil**.
------------

----[mlm]----
Con el Checkout API de Mercado Pago, también se puede ofrecer pagos con **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** y **Tarjeta Mercado Pago**.
------------

----[mpe]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos a través de **PagoEfectivo**.
------------

----[mco]----
Con el Checkout API de Mercado Pago, también se puede ofrecer pagos con **Efecty** y **PSE**.
------------

----[mlu]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos con **Abitab** y **Redpagos**.
------------

Para obtener una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu _Access token_ al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecuta la solicitud o, si lo prefieres, haz la solicitud utilizando los siguientes SDKs.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

----[mlb]----
Para ofrecer **pagos en agencias de lotería**, sigue las siguientes etapas.
------------

----[mla]----
Para ofrecer pagos con **Rapipago** y/o **Pago Fácil**, sigue las siguientes etapas.
------------

----[mlm]----
Para ofrecer pagos con **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** o **Tarjeta Mercado Pago**, sigue las siguientes etapas.
------------

----[mpe]----
Para ofrecer pagos con **PagoEfectivo**, sigue las siguientes etapas.
------------

----[mco]----
Para ofrecer pagos con **Efecty** y/o **PSE**, sigue las siguientes etapas.
------------

----[mlu]----
Para ofrecer pagos con **Abitab** y/o **Redpagos**, sigue las siguientes etapas.
------------



## Importar MercadoPago.js

Para realizar la integración de Checkout API, es necesario capturar los datos necesarios para procesar el pago.

Esta captura se realiza incluyendo la biblioteca MercadoPago.js en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario de pago.

[[[
```html

<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]


## Configurar credencial

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente los pagos. Presta atención a los siguientes bloques para añadirlos a los códigos como se indica.


[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]


## Añadir formulario de pago

Con la biblioteca MercadoPago.js incluida, añade el siguiente formulario de pago a tu proyecto para garantizar la captura segura de los datos de los compradores. En esta etapa es importante utilizar la lista que consultaste para obtener los medios de pago disponibles para crear las opciones de pago que deseas ofrecer.

[[[
```html

  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
      </div>
    </div>
  </form>
```
]]]



----[mlb, mla, mpe, mco, mlu, mlc]----

## Obtener tipos de documentos

Después de configurar la credencial y añadir el formulario de pago, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento `select` con el id: `form-checkout__identificationType` que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función:

[[[
```javascript

function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```
]]]

------------


## Enviar pago

Al finalizar la inclusión del formulario de pago y obtener los tipos de documentos, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado y el detalle del importe a pagar utilizando nuestra API de Pagos o uno de nuestros SDKs.

----[mlb]----
Para configurar **pagos en agencia de lotería**, envía un POST con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.


| Tipo de pago  | Parámetro  | Valor  |
| --- | --- | --- |
| Pago en agencia de lotería  | `payment_method_id`  | `pec`  |



> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token.

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "pec";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "DNI",
         "number" => "19119119"
      ),
     "address"=>  array(
         "zip_code" => "1264",
         "street_name" => "Av. Caseros",
         "street_number" => "3039",
         "neighborhood" => "Parque Patricios",
         "city" => "Buenos Aires",
         "federal_unit" => "BA"
      )
   );

 $payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pec',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'DNI',
        number: '19119119'
    },
    address:  {
        zip_code: '1264',
        street_name: 'Av. Caseros',
        street_number: '3039',
        neighborhood: 'Parque Patricios',
        city: 'Buenos Aires',
        federal_unit: 'BA'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título del producto")
       .paymentMethodId("pec")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .firstName("Test")
               .lastName("User")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pec',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
      type: 'DNI',
      number: '19119119',
    },
    address: {
      zip_code: '1264',
      street_name: 'Av. Caseros',
      street_number: '3039',
      neighborhood: 'Parque Patricios',
      city: 'Buenos Aires',
      federal_unit: 'BA'
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = "pec",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "DNI",
            Number = "19119119",
        },
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
    "description": "Título del producto",
    "payment_method_id": "pec",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "pec",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
      }
    }'
```
]]]


La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador realice el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

[[[
```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```
]]]



> NOTE
>
> Importante
>
> El cliente dispone de entre 3 y 5 días para pagar, dependiendo de la forma de pago. Después de este tiempo, el pago debe ser cancelado.

## Fecha de vencimiento

La fecha de vencimiento predeterminada para los pagos en agencia de lotería es de 4 días. Opcionalmente, es posible cambiar esta fecha enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del boleto.

Para cambiar la fecha de vencimiento, utiliza uno de los códigos disponibles a continuación.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El tiempo para la aprobación del boleto es de 1 hora. Igualmente, establece la fecha de vencimiento en un mínimo de 4 días para asegurarte de que el pago se efectúe.


> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulta la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).



------------


----[mla]----

Para configurar pagos con **Rapipago** y/o **Pago Fácil**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "rapipago";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription("Título del producto")
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_19653727@testuser.com',
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
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
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
    "description": "Título del producto",
    "payment_method_id": "rapipago",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Fecha de vencimiento

Opcionalmente, es posible cambiar la fecha de vencimiento para pagos con dinero enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del pago.

Para cambiar la fecha de vencimiento, utilice uno de los códigos disponibles a continuación.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El tiempo para la aprobación toma entre 1 y 2 días hábiles. Por lo tanto, establezca la fecha de vencimiento en un mínimo de 3 días para asegurarse de que se pague el pago.


> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).



------------

----[mlm]----

Para configurar pagos con **OXXO**, **Paycash**,  **Citibanamex**,  **Santander**, **BBVA Bancomer** y/o **Tarjeta  Mercado Pago**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "oxxo";
  $payment->payer = array(
    "email" => "test_user_82045343@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription("Título del producto")
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com',
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
    Description = "Título del producto",
    PaymentMethodId = "oxxo",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_82045343@testuser.com",
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
    "description": "Título del producto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test_user_82045343@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "oxxo",
  payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24304329",
        "verification_code": "882430432923032000100001",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlm/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
    }
  }
]
```


## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).


## Establecimientos de pago

Al finalizar la integración, es importante compartir con los compradores la información de los diferentes lugares en los que pueden realizar el pago. Consulta la siguiente tabla para conocer los datos de cada uno de ellos.

| Medio de pago | Tiendas disponibles
| --- | --- |
| OXXO | OXXO
| PayCash | 7-Eleven |
| PayCash | Circle K |
| PayCash | Soriana |
| PayCash | Extra |
| PayCash | Calimax |
| PayCash | Santander |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mpe]----

Para configurar pagos con **PagoEfectivo**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "pagoefectivo_atm";
  $payment->payer = array(
    "email" => "test_user_42972582@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription("Título del producto")
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
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
    TransactionAmount = 5000,
    Description = "Título del producto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_42972582@testuser.com",
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
    "description": "Título del producto",
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test_user_42972582@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "pagoefectivo_atm",
  payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

```json
[
  {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,

    "order": {},
    "external_reference": null,
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "payment_method_reference_id": "123457986",
        "verification_code": "24308767",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mpe/payments/sandbox/atm/helper?payment_id=24308766&payment_method_reference_id=24308767&caller_id=537490079&hash=c96a61b0-10f4-40f6-afff-82fc0f0923da",
        "installment_amount": 0,
        "financial_institution": "PagoEfectivo",
        "payable_deferral_period": null,
        "acquirer_reference": null
    }
  }
]
```


## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

------------

----[mco]----

Para configurar pagos con **Efecty** e/ou **PSE**, envie um **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Importante
>
> Para recibir pagos con **PSE** debes enviar, durante la creación del pago, el parámetro `financial_institution` con el número de la institución financiera encargada de procesar el pago. 

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 5000;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "efecty";
  $payment->payer = array(
    "email" => "test_user_19549678@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 5000,
  description: 'Título del producto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(5000f)
      .setDescription("Título del producto")
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 5000,
  description: 'Título del producto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com',
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
    TransactionAmount = 5000,
    Description = "Título del producto",
    PaymentMethodId = "efecty",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19549678@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "efecty",
    "payer": {
        "email": "test_user_19549678@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 5000,
  description: "Título del producto",
  payment_method_id: "efecty",
  payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]


La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24308386",
        "verification_code": "24308386",
        "net_received_amount": 0,
        "total_paid_amount": 5000,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mco/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

## Fecha de vencimiento

Opcionalmente, es posible cambiar la fecha de vencimiento para pagos con dinero enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del pago.

Para cambiar la fecha de vencimiento, utilice uno de los códigos disponibles a continuación.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El tiempo para la aprobación toma entre 1 y 2 días hábiles. Por lo tanto, establezca la fecha de vencimiento en un mínimo de 3 días para asegurarse de que se pague el pago.


> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).


------------

----[mlu]----

Para configurar pagos con **Abitab** y/o **Redpagos**, envía un POST con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "abitab";
  $payment->payer = array(
    "email" => "test_user_84162205@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription("Título del producto")
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com',
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
    Description = "Título del producto",
    PaymentMethodId = "abitab",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_84162205@testuser.com",
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
    "description": "Título del producto",
    "payment_method_id": "abitab",
    "payer": {
        "email": "test_user_84162205@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "abitab",
  payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308188",
        "verification_code": "24308188",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlu/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).


------------

> PREV_STEP_CARD_ES
>
> Requisitos Previos
>
> Consulta los requisitos previos que se necesitan para integrar Checkout API.
>
> [Integrar Checkout API](/developers/es/docs/checkout-api/prerequisites)


> NEXT_STEP_CARD_ES
>
> Prueba de integración
>
> Consulta cómo probar la integración de Checkout API en tu tienda.
>
> [Prueba de integración](/developers/es/docs/checkout-api/integration-test/make-test-purchase)
