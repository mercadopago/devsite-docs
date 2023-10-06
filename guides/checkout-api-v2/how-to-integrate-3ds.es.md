# Cómo integrar 3DS con Checkout API

En esta documentación encontrarás toda la información necesaria para realizar la integración con 3DS con Checkout API. Para obtener más información sobre cómo funciona este tipo de autenticación, consulte [3DS 2.0](/developers/es/docs/checkout-api/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Importante
>
> Para integrarse con 3DS, se deben cumplir ciertos requisitos. Antes de continuar con los siguientes pasos, revise la sección [Requisitos previos](/developers/es/docs/checkout-api/prerequisites) y asegúrese de que se cumplan todos.

## Integrar con 3DS

La autenticación 3DS se puede realizar a través de dos flujos distintos: **con o sin _Challenge_**, que son pasos adicionales que el comprador debe completar para garantizar su identidad. La decisión de incluir o no el _Challenge_ depende del emisor de la tarjeta y del perfil de riesgo de la transacción que se realiza.

> Obtenga también información sobre las integraciones a través de [Checkout Bricks](/developers/es/docs/checkout-bricks/how-tos/integrate-3ds,) un método de pago modular, seguro y personalizable que automatiza varios de los procesos que se describen a continuación.

Para **transacciones de bajo riesgo**, la información enviada en el momento del pago es suficiente y los pasos adicionales de _Challenge_ **no son necesarios**. Sin embargo, **para casos donde existe un alto riesgo de fraude**, _Challenge_ es requerido para **verificar la identidad del comprador**, lo que aumenta la conversión de las transacciones con tarjeta.

A continuación se presentan los pasos para realizar una integración con 3DS.

1. Debes usar el [SDK JS](/developers/es/docs/sdks-library/client-side/mp-js-v2) de Mercado Pago en el checkout para generar el [token de la tarjeta de crédito](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform). 
2. Después, postea los **datos del checkout** junto con el **token de la tarjeta** para su backend.
3. Allí, haz una llamada para crear un nuevo pago con los datos recibidos. Es necesario que sea enviado el atributo `three_d_secure_mode` con uno de los siguientes valores:
    1. `not_supported`: no se debe usar 3DS (es el valor por default).
    2. `optional`: se puede requerir 3DS o no, dependiendo del perfil de riesgo de la transacción.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: <ENV_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "<BUYER_EMAIL>"
    },
    "additional_info": {
        "items": [
            {
                "quantity": <ITEM_QUANTITY>,
                "category_id": <CATEGORY_ID>,
                "title": <ITEM_TITLE>,
                "unit_price": <TRANSACTION_AMOUNT>
            }
        ]
    },
    "payment_method_id": <PAYMENT_METHOD_ID>,
    "marketplace": "NONE",
    "installments": <INSTALLLMENTS_NUMBER>,
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "description": "<DESCRIPTION>",
    "token": "CARD_TOKEN",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("<ENV_ACCESS_TOKEN>");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(<TRANSACTION_AMOUNT>))
            .token("<CARD_TOKEN>")
            .description("<DESCRIPTION>")
            .installments(<INSTALLLMENTS_NUMBER>)
            .paymentMethodId("<PAYMENT_METHOD_ID>")
            .payer(
               PaymentPayerRequest.builder()
                 .email("<BUYER_EMAIL>")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "<ENV_ACCESS_TOKEN>";
var request = new PaymentCreateRequest
{
    TransactionAmount = <TRANSACTION_AMOUNT>,
    Token = "<CARD_TOKEN>",
    Description = "<DESCRIPTION>",
    Installments = <INSTALLLMENTS_NUMBER>,
    Payer = new PaymentPayerRequest
    {
        Email = "<BUYER_EMAIL>",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => <TRANSACTION_AMOUNT>,
    "token" => "CARD_TOKEN",
    "description" => "<DESCRIPTION>",
    "installments" => <INSTALLMENTS_NUMBER>,
    "payment_method_id" => "<PAYMENT_METHOD_ID>",
    "issuer_id" => "<ISSUER_ID>",
    "payer" => [
      "email" => $_POST['email']
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import MercadoPago, { Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
  transaction_amount: <TRANSACTION_AMOUNT>,
  token: '<CARD_TOKEN>',
  description:  '<DESCRIPTION>',
  installments: <INSTALLMENTS_NUMBER>,
  payment_method_id: '<PAYMENT_METHOD_ID>',
  issuer_id: '<ISSUER_ID>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional' 
}, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('<ENV_ACCESS_TOKEN>')
payment_request = {
  token: '<CARD_TOKEN>',
  installments: <INSTALLLMENTS_NUMBER>,
  transaction_amount: <TRANSACTION_AMOUNT>,
  description: '<DESCRIPTION>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("<ENV_ACCESS_TOKEN>")
payment_data = {
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "token": "<CARD_TOKEN>",
    "description": "<DESCRIPTION>",
    "installments": <INSTALLLMENTS_NUMBER>,
    "payer": {
        "email": "<BUYER_EMAIL>",
    },
    "three_d_secure_mode": "optional"
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
]]]

En caso de que no sea necesario utilizar el flujo de _Challenge_, el campo `status` del pago tendrá valor `approved` y no será necesario mostrarlo, por lo que puedes seguir con el flujo de tu aplicación. 

Para casos en que el _Challenge_ es necesario, el `status` mostrará el valor `pending`, y el `status_detail` será `pending_challenge`.

> NOTE
>
> Importante
>
> En este último caso, la respuesta mostrará un atributo del pago llamado `three_ds_info` con los campos `external_resource_url`, que contiene la URL del _Challenge_, y `creq`, un identificador del _Challenge_ request. Será necesario mostrar el _Challenge_ y tratar su resultado con los pasos siguientes.

### Overview del response (se omitió información)

[[[
```Json

{
    "id": 52044997115,
    ...
    "status": "pending",
    "status_detail": "pending_challenge",
    ...
    "three_ds_info":
    {
        "external_resource_url": "https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
        "creq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjc1RyYW5zSUQiOiI3MDAwYTI2YS1jYWQ1LTQ2NjQtOTM0OC01YmRlZjUwM2JlOWYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0"
    },
    "owner": null
}

```
]]]

4. Para **mostrar el _Challenge_**, es necesario que generes un _iframe_ (altura mínima: 500px, ancho mínimo: 600px) que contenga un formulario con `method post`, `action` que contenga la URL obtenida en el campo `external_resource_url`, y un input oculto con el valor obtenido en `creq`. Después, debes hacer el post del form a continuación para empezar el _challenge_.

[[[
```javascript

function doChallenge(payment) {
  try {
    const {
      status,
      status_detail,
      _three_ds_info: { creq, external_resource_url },
    } = payment;
    if (status === "pending" && status_detail === "pending_challenge") {
      var iframe = document.createElement("iframe");
      iframe.name = "myframe";
      iframe.id = "myframe";
      iframe.height = "500px";
      iframe.width = "600px";
      document.body.appendChild(iframe);

      var idocument = iframe.contentWindow.document;

      var myform = idocument.createElement("form");
      myform.name = "myform";
      myform.setAttribute("target", "myframe");
      myform.setAttribute("method", "post");
      myform.setAttribute("action", external_resource_url);

      var hiddenField = idocument.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "creq");
      hiddenField.setAttribute("value", creq);
      myform.appendChild(hiddenField);
      iframe.appendChild(myform);

      myform.submit();
    }
  } catch (error) {
    console.log(error);
    alert("Error doing challenge, try again later.");
  }
}

```
]]]

Cuando el _Challenge_ es finalizado, el status del pago será actualizado. Será `approved` si la autenticación fue exitosa, `rejected` si no lo fue y, en caso de que la autenticación no fuera  hecha, el pago permanecerá `pending`. Esta actualización no es inmediata, puede tardar unos instantes. 

> NOTE
>
> Importante
>
> Cuando se inicia el proceso de _Challenge_, el usuario tiene 5 minutos, aproximadamente, para realizarlo. En caso de que no sea hecho, el banco recusará la transacción y Mercado Pago considerará el pago cancelado. Mientras el usuario no complete el _Challenge_, el pago quedará como `pending_challenge`.

Mira la sección a continuación para más detalles sobre cómo consultar el status de cada transacción.

## Consultar status de la transacción

Para saber cuál es el resultado de la transacción, hay tres opciones:

* **Notificaciones**: Recibirás la notificación del cambio del status del pago usando Webhooks y deberás redireccionar el buyer para una pantalla que indica que la transacción fue exitosa. Consulta la sección de [Webhooks](/developers/es/docs/checkout-api/additional-content/your-integrations/notifications/webhooks) y aprende cómo configurarlos.
* **API de Payments**: Deberás hacer un pooling en [Payments](/developers/es/reference/payments/_payments/post) y, si el status cambia, redireccionar el buyer para una pantalla de confirmación.
* **Tratar el evento del iframe (recomendado)**: debes recordar que el evento solo indica que finalizó el _Challenge_ y no que el pago pasó a un status final, dado que la actualización no es inmediata y puede tardar unos instantes. Deberás hacer una consulta en [Payments](/developers/es/reference/payments/_payments/post) y, si el status cambia, redireccionar al buyer para una pantalla que indica que la transacción fue exitosa. 

Para **tratar el evento del iframe**, sigue los pasos a continuación.

### Realizar implementación

Utilice el código JavaScript a continuación para implementar y escuchar el evento que indica que el _Challenge_ ha finalizado, de esta manera es posible redirigir al cliente a la pantalla de confirmación.

[[[
```javascript

window.addEventListener("message", (e) => {
     if (e.data.status === "COMPLETE") {
         window.open("congrats.html");
     }
});

```
]]]

### Buscar status del pago

El siguiente Javascript indica cómo se puede realizar la búsqueda del status de pago actualizado y mostrarlo en la pantalla de confirmación.

[[[
```javascript

document.addEventListener("DOMContentLoaded", async function (e) {
 init();
});

async function init() {
 const id = localStorage.getItem("paymentId");

 try {
   const response = await fetch("/get_payment/" + id, {
     method: "GET",
   });
   const result = await response.json();
   if (result.status != 200) throw new Error("error getting payment");
   document.getElementById("congrats-div").innerHTML =
     "Pagamento " + result.data.id + " -> Status: " + result.data.status;
 } catch (error) {
   alert("Unexpected error\n" + JSON.stringify(error));
 }
}

```
]]]

> NOTE
>
> Importante
>
> Si el pago continúa `pending` después del timeout del _Challenge_, entonces deberás redireccionar al buyer para una pantalla que informe que el pago expiró y que es necesario crear uno nuevo (la actualización no es inmediata, puede tardar unos instantes).

Después de seguir estos pasos, tu integración está lista para autenticar transacciones con 3DS.

## Posibles status del pago 

Una transacción con 3DS puede devolver diferentes status según el tipo de autenticación realizada (con o sin _Challenge_). En un pago sin _Challenge_, el estado de la transacción será directamente "approved" o "rejected".

En un pago con _Challenge_, la transacción estará en status `pending` y se iniciará el proceso de autenticación con el banco. Solo después de esta etapa se mostrará el status final.

A continuación se muestra una tabla con los posibles status y sus descripciones correspondientes.

| Status    | Status_detail               | Descripción                                                      |
|-----------|-----------------------------|------------------------------------------------------------------|
| "approved" | "accredited"                | Transacción aprobada sin autenticación.                          |
| "rejected" | -                          | Transacción denegada sin autenticación. Para verificar los motivos, consulta la [lista estándar de status detail](https://mercadopago.com.br/developers/es/docs/checkout-api/response-handling/collection-results).                          |
| "pending"  | "pending_challenge"         | Transacción pendiente de autenticación o _timeout_ del _Challenge_. |
| "rejected" | "cc_rejected_3ds_challenge" | Transacción denegada debido a falla en el _Challenge_.            |

## Prueba de integración

Para facilitar la validación de pagos con 3DS, hemos creado un entorno de pruebas tipo *sandbox*. Este entorno devuelve resultados ficticios que sólo se utilizan para simular y validar la implementación.

> WARNING
>
> Recuerda utilizar las credenciales de prueba de tu aplicación. 

Para probar pagos en un entorno *sandbox*, se deben usar tarjetas específicas que permitan probar la implementación del desafío con flujos de éxito y fallo, según la tabla a continuación:

| Tarjeta     | Flujo                   | Número             | Código de Seguridad | Fecha de Vencimiento |
|-------------|-------------------------|--------------------|---------------------|----------------------|
| Mastercard  | Challenge exitoso       | 5483 9281 6457 4623 | 123                 | 11/25                |
| Mastercard  | Challenge no autorizado | 5361 9568 0611 7557 | 123                 | 11/25                |

Los pasos para crear el pago son los mismos. En caso de duda sobre cómo crear pagos con tarjeta, consulta la [documentación sobre Tarjetas](https://www.mercadopago.com.br/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform). 

> NOTE
>
> Para asegurarte de que el pago se cree con 3DS, recuerda incluir el atributo three_d_secure_mode con el valor optional.

[[[
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "CARD_TOKEN",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "master",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         },
         "three_d_secure_mode": "optional"
   }'

```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import MercadoPago, { Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payments = new Payments(client);

payments.create({
  transaction_amount: req.transaction_amount,
  token: req.token,
  description: req.description,
  installments: req.installments,
  payment_method_id: req.paymentMethodId,
  issuer_id: req.issuer,
  payer: {
    email: req.email,
    identification: {
      type: req.identificationType,
      number: req.number
    }
  },
  three_d_secure_mode: 'optional' 
}, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .threeDSecureMode("optional")
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:email],
   identification: {
     type: params[:identificationType],
     number: params[:identificationNumber]
   }
 three_d_secure_mode: "optional",
 }
}
 
payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]
 
puts payment
```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {
           Type = Request["identificationType"],
           Number = Request["identificationNumber"],
       },
   },
ThreeDSecureMode = "optional",
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
 
Console.WriteLine(payment.Status);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
   }
   "three_d_secure_mode": "optional"
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
 
print(payment)
```
]]]


### Challenge

En ambos flujos (éxito y falla), el _Challenge_, que es una pantalla similar a la presentada a continuación, se mostrará dentro del *iframe*:

![Challenge](/images/api/sandbox-v1-es.png)

El código de verificación proporcionado es meramente ilustrativo. Para completar el flujo de prueba, simplemente haz clic en el botón **Confirmar**. 
Una vez que hayas completado esta acción, sigue las instrucciones detalladas en la sección **Verificar status de la Transacción** para determinar cuándo se ha finalizado el _Challenge_ y cómo verificar la actualización del pago.
