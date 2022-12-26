----[mlb]----

# Boleto bancario

Con el Checkout Transparente de Mercado Pago, es posible ofrecer, además de tarjeta y Pix, **pagos vía boleto bancario**. También puedes crear **boletos bancarios con descuentos, multas e intereses** para los pagos que se realicen o bien por adelantado, o bien por fuera del plazo estipulado en la fecha de vencimiento.

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


Para ofrecer **pagos vía boleto bancario**, sigue las siguientes etapas.


## Importar MercadoPago.js

Para realizar la integración de Checkout Transparente, es necesario capturar los datos necesarios para procesar el pago.

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


## Enviar pago

Al finalizar la inclusión del formulario de pago y obtener los tipos de documentos, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado y el detalle del importe a pagar utilizando nuestra API de Pagos o uno de nuestros SDKs.

Para configurar **pagos vía boleto bancario**, envía un **POST** con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.


| Tipo de pago  | Parámetro  | Valor  |
| --- | --- | --- |
| Boleto  | `payment_method_id`  | `bolbradesco`  |


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
 $payment->payment_method_id = "bolbradesco";
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
  payment_method_id: 'bolbradesco',
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
       .paymentMethodId("bolbradesco")
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
  payment_method_id: 'bolbradesco',
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
    PaymentMethodId = "bolbradesco",
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
    "payment_method_id": "bolbradesco",
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
      "payment_method_id": "bolbradesco",
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
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
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


## Crear boleto con multas, intereses y descuentos

Si quieres ofrecer **boletos bancarios con descuentos, multas e intereses**, ya sea para los pagos que se realicen por adelantado, como para los pagos que se realicen por fuera de la fecha de vencimiento, puedes crearlos directamente vía la API de Mercado Pago, o bien utilizando los siguientes SDKs:

[[[
```php

require_once 'vendor/autoload.php';

MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->description = "Titulo do produto";
$payment->date_of_expiration = "2022-12-24T22:59:59.000-04:00";
$payment->payment_method_id = "bolbradesco";
$payment->transaction_amount = 100;

$payer = new MercadoPago\Payer();
$payer->first_name = "Test";
$payer->last_name = "user";
$payer->email = "test_user_123456@testuser.com";
$payer->identification = array(
  "type" => "CPF",
  "number" => "19119119100"
);
$payment->payer = $payer;

$payment->payment_method = array(
  "data" => array(
    "rules" => array(
      "discounts" => array(
        array(
          "value" => 5,
          "type" => "fixed",
          "limit_date" => "2022-12-10"
        )
      ),
      "fine" => array(
        "value" => 2,
        "type" => "percentage"
      ),
      "interest" => array(
        "value" => 0.03,
        "type" => "percentage"
      )
    )
  )
);

$payment->save();
echo 'URL Boleto: ' . $payment->transaction_details->external_resource_url;

```
```nodeJS
var mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: 'YOUR_ACCESS_TOKEN'
});

var payment = {
  description: 'Título do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

mercadopago.payment.create(payment).then(function (data) {
  console.log('URL boleto: ' + data.body.transaction_details.external_resource_url);
}).catch(function (error) {
  console.log(error);
});
```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

LocalDateTime dateOfExpiration = LocalDateTime.of(2022, 12, 24, 23, 59, 59);
PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Título do produto")
        .dateOfExpiration(OffsetDateTime.of(dateOfExpiration, ZoneOffset.UTC))
        .paymentMethodId("bolbradesco")
        .transactionAmount(new BigDecimal("100"))
        .payer(PaymentPayerRequest.builder()
            .firstName("Test")
            .lastName("User")
            .email("test_user_123456@testuser.com")
            .identification(IdentificationRequest.builder()
                .type("CPF")
                .number("19119119100")
                .build())
            .build())
        .paymentMethod(PaymentMethodRequest.builder()
            .data(PaymentDataRequest.builder()
                .rules(PaymentRulesRequest.builder()
                     .discounts(Collections.singletonList(
                          PaymentDiscountRequest.builder()
                               .value(new BigDecimal("5"))
                               .type("fixed")
                               .limitDate(LocalDate.of(2022, 12, 10))
                               .build()))
                     .fine(PaymentFeeRequest.builder()
                          .value(new BigDecimal("2"))
                          .type("percentage")
                          .build())
                     .interest(PaymentFeeRequest.builder()
                          .value(new BigDecimal("0.03"))
                          .type("percentage")
                          .build())
                     .build())
                 .build())
             .build())
         .build();

Payment payment = client.create(createRequest);
System.out.printf("URL boleto: %s", payment.getTransactionDetails().getExternalResourceUrl());
```
```ruby
require_relative 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
  description: 'Titulo do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

result = sdk.payment.create(payment_data)
puts result[:response]["transaction_details"]["external_resource_url"]
```
```csharp
using System;
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest {
    Description = "Titulo do produto",
    DateOfExpiration = new DateTime(2022, 12, 24, 23, 59, 59, 000, DateTimeKind.Local),
    PaymentMethodId = "bolbradesco",
    TransactionAmount = 100,
    Payer = new PaymentPayerRequest
    {
        FirstName = "Test",
        LastName = "User",
        Email = "test_user_123456@testuser.com",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "19119119100"
        }
    },
    PaymentMethod = new PaymentMethodRequest
    {
        Data = new PaymentDataRequest
        {
            Rules = new PaymentRulesRequest
            {
                Discounts = new List<PaymentDiscountRequest>()
                {
                    new PaymentDiscountRequest
                    {
                        Value = 5,
                        Type = "fixed",
                        LimitDate = new DateTime(2022, 12, 1)
                    }
                },
                Fine = new PaymentFeeRequest
                {
                    Value = 2,
                    Type = "percentage"
                },
                Interest = new PaymentFeeRequest
                {
                    Value = 1m,
                    Type = "percentage"
                }
            }
        }
    }
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.TransactionDetails.ExternalResourceUrl);
```
```python
import mercadopago

sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

payment_data = {
    "description": "Titulo do produto",
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "transaction_amount": 100,
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}

result = sdk.payment().create(payment_data)
print(result["response"]["transaction_details"]["external_resource_url"])
```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "description": "Titulo do produto",
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}'
```
]]]


Deberás completar los campos para enviar un pago siguiendo las especificaciones de las siguientes tablas:

|      CAMPO     |  TIPO  |                              DESCRIPCIÓN                              |                          VALIDACIONES                         |
|:--------------:|:------:|:---------------------------------------------------------------------:|:-------------------------------------------------------------:|
| payment_method | Objeto | Objeto que conserva la información relacionada con el método de pago. | -                                                             |
| data           | Objeto | Objeto que conserva los datos relacionados a los medios de pago.      | -                                                             |
| rules          | Objeto | Objeto que conserva las reglas relacionadas al medio de pago.         | -                                                             |
| discounts      | Lista  | Lista de descuentos a aplicar.                                        | Actualmente solo se aplicará el primer descuento de la lista. |
| fine           | Objeto | Objeto que conserva la información relacionada con la multa.          | -                                                             |
| interest       | Objeto | Objeto que conserva la información relacionada con los intereses.      | -                                                             |


Dentro del campo **“Discounts”**, deberás reemplazar los valores siguiendo las especificaciones a continuación:

|    CAMPO   |    TIPO    |                                                  DESCRIPCIÓN                                                  |                                                           VALIDACIONES                                                          |
|:----------:|:----------:|:-------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|
| value      | BigDecimal | Propiedad para definir el importe del descuento a aplicar cuando el pago se realiza antes del plazo definido. | **Número de decimales**: 0 - 2. **Valor máximo**: Debe ser **positivo** y **menor o igual** al valor informado en "transaction_amount". |
| type       | String     | Propiedad para definir el tipo de cálculo sobre el valor informado en "value".                                | **Valores posibles**: "fixed".                                                                                                      |
| limit_date | Date       | Propiedad para definir el plazo para considerar el descuento.                                                 | **Formato**: yyyy-MM-dd. La fecha límite debe ser anterior a la fecha ingresada en "date_of_expiration".                            |



Dentro del campo **“Fine”**, deberás reemplazar los valores siguiendo las especificaciones a continuación:

| CAMPO |    TIPO    |                                                          DESCRIPCIÓN                                                         |                             VALIDACIONES                            |
|:-----:|:----------:|:----------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------:|
| value | BigDecimal | Propiedad para definir el valor de la multa a aplicar cuando el pago se realice con posterioridad a la fecha de vencimiento. | **Número de decimales**: 0 - 2. **Valor máximo**: "2%" |
| type  | String     | Propiedad para definir el tipo de cálculo sobre el valor informado en "value".                                               | **Valores posibles**: "percentage".                                     |


Dentro del campo **“Interest”**, deberás reemplazar los valores siguiendo las especificaciones a continuación:

| CAMPO |    TIPO    |                                                             DESCRIPCIÓN                                                             |                               VALIDACIONES                               |
|:-----:|:----------:|:-----------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|
| value | BigDecimal | Propiedad para definir el valor del intereses mensuales a ser aplicados cuando el pago se realice después de la fecha de vencimiento. | **Número de decimales**: 0 - 2. **Valor máximo**:  "1%". |
| type  | String     | Propiedad para definir el tipo de cálculo sobre el valor informado en "value".                                                      | **Valores posibles**: "percentage".                                          |


La respuesta devolverá el siguiente resultado:

[[[
```json
{
  "id": 123456789,
  "status": "pending",
  "status_detail": "pending_waiting_payment",
  "payment_method": {
    "id": "bolbradesco",
    "type": "ticket",
    "data": {
      "rules": {
        "discounts": [
          {
            "value": 1,
            "type": "fixed",
            "limit_date": "2022-12-12"
          }
        ],
        "fine": {
          "value": 2,
          "type": "percentage"
        },
        "interest": {
          "value": 0.03,
          "type": "percentage"
        }
      }
    }
  },
  "transaction_details": {
    "net_received_amount": 0,
    "total_paid_amount": 100,
    "overpaid_amount": 0,
    "external_resource_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=e10c4695-49a0-475e-8adc-29a8055b9167",
    "installment_amount": 0,
    "financial_institution": null,
    "payment_method_reference_id": "1234567890"
  }
}
```
]]]

En las siguientes tablas encontrarás las especificaciones para cada campo devuelto al enviar el pago:

|      CAMPO     |  TIPO  |                              DESCRIPCIÓN                              |
|:--------------:|:------:|:---------------------------------------------------------------------:|
| payment_method | Objeto | Objeto que conserva la información relacionada con el método de pago. |
| id             | String | Identificador del método de pago.                                     |
| data           | Objeto | Objeto que conserva los datos relacionados a los medios de pago.      |
| rules          | Objeto | Objeto que conserva las reglas relacionadas al medio de pago.         |
| discounts      | Lista  | Lista con los descuentos efectuados.                                  |
| fine           | Objeto | Objeto que conserva la información relacionada con la multa.          |
| interest       | Objeto | Objeto que conserva la información relacionada con los intereses.     |

Para el valor **“Discounts”**, las especificaciones son las siguientes:

|      CAMPO     |    TIPO    |                                                                                                                                        DESCRIPCIÓN                                                                                                                                        |
|:--------------:|:----------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propiedad para definir el importe del descuento a aplicar cuando el pago se realiza antes del plazo definido.                                                                                                                                                                             |
| type           | String     | Propiedad con el tipo de cálculo sobre el valor informado en “value”.                                                                                                                                                                                                                     |
| limit_date     | Date       | Propiedad con la fecha límite para considerar el descuento.                                                                                                                                                                                                                               |

Para el valor **“Fine”**, las especificaciones son las siguientes:

|      CAMPO     |    TIPO    |                                                                                                                                          DESCRIPCIÓN                                                                                                                                         |
|:--------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propiedad con el valor de la multa a ser aplicada cuando el pago se efectúe después de la fecha de vencimiento.                                                                                                                                                                              |
| type           | String     | Propiedad con el tipo de cálculo sobre el valor informado en “value”.                                                                                                                                                                                                                        |

Para el valor **“Interest”**, las especificaciones son las siguientes:

|      CAMPO     |    TIPO    |                                                                                                                                                                                                                                             DESCRIPCIÓN                                                                                                                                                                                                                                            |
|:--------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propiedad para definir el valor de los intereses diarios a ser aplicados cuando el pago fuera efectuado luego de la fecha de vencimiento.                                                                                                                                                                                                                                                                                                                                                          |
| type           | String     | Propiedad para definir el tipo de cálculo sobre el valor informado en “value”.                                                                                                                                                                                                                                                                                                                                                                                                                     |


## Fecha de vencimiento

La fecha de vencimiento predeterminada para los pagos de boletos es de 3 días. Opcionalmente, es posible cambiar esta fecha enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del boleto.

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

El tiempo para la aprobación del boleto es de 48 horas hábiles. Por lo tanto, establece la fecha de vencimiento en un mínimo de 3 días para asegurarte de que el pago se efectúe.


> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulta la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).


------------