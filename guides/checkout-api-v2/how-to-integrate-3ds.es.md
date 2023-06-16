# Cómo integrar 3DS con Checkout API?

3DS 2.0 es una tecnología que permite la autenticación de transacciones con tarjeta de crédito y débito en comercio electrónico. Es decir, permite validar que la persona que realiza la compra es realmente el titular de la tarjeta, o tiene acceso a las cuentas del titular para realizar el pago.

Una transacción autenticada tiene varios beneficios, que incluyen una mayor probabilidad de aprobación, evitar pérdidas por chargeback para el seller, menor riesgo de fraude para el buyer, entre otros.


> NOTE
>
> Importante
>
> Para llevar a cabo la integración con 3DS, debes cumplir con ciertos requisitos. Antes de avanzar a los siguientes pasos, revisa la sección de [Requisitos previos](/developers/es/docs/checkout-api/prerequisites) y asegúrate de que se cumplan todos.


En esta documentación encontrarás toda la información necesaria para realizar la integración con 3DS.


## Integrar con 3DS

La autenticación 3DS se puede realizar a través de dos flujos distintos: **con o sin _Challenge_**, que son pasos adicionales que el comprador debe completar para garantizar su identidad. La decisión de incluir o no el _Challenge_ depende del emisor de la tarjeta y del perfil de riesgo de la transacción que se realiza.  

Para **transacciones de bajo riesgo**, la información enviada en el momento del pago es suficiente y los pasos adicionales de _Challenge_ **no son necesarios**. Sin embargo, **para casos donde existe un alto riesgo de fraude**, _Challenge_ es requerido para **verificar la identidad del comprador**, lo que aumenta la conversión de las transacciones con tarjeta.

A continuación se presentan los pasos para realizar una integración con 3DS.



1. Debes usar el [SDK JS](/developers/es/docs/sdks-library/client-side/mp-js-v2) de Mercado Pago en el checkout para generar el [token de la tarjeta de crédito](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform). 
2. Después, postea los **datos del checkout** unto con el **token de la tarjeta** para su backend.
3. Allí, haz una llamada para crear un nuevo pago con los datos recibidos. Es necesario que sea enviado el atributo `three_d_secure_mode` con uno de los siguientes valores:
    1. `not_supported`: no se debe usar 3DS (es el valor por default).
    2. `optional`: se puede requerir 3DS o no, dependiendo del perfil de riesgo de la transacción.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "test_payer_12345@testuser.com"
    },
    "additional_info": {
        "items": [
            {
                "quantity": 1,
                "category_id": "MLA91058",
                "title": "Clases De Payments",
                "unit_price": 100
            }
        ]
    },
    "payment_method_id": "master",
    "marketplace": "NONE",
    "installments": 1,
    "transaction_amount": 100,
    "description": "description",
    "token": "CARD_TOKEN",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(100))
            .token("CARD_TOKEN")
            .description("description")
            .installments(1)
            .paymentMethodId("visa")
            .payer(
               PaymentPayerRequest.builder()
                 .email("test_payer_12345@testuser.com")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```dotnet
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "CARD_TOKEN",
    Description = "description",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Email = "test_payer_12345@testuser.com",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php

<?php
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->token = "CARD_TOKEN";
  $payment->description = "description";
  $payment->installments = 1;
  $payment->payer = array(
        "email" => "test_payer_12345@testuser.com"
    );
  $payment->three_d_secure_mode = "optional";
  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
var payment_data = {
  transaction_amount: 100,
  token: 'CARD_TOKEN',
  description: 'description',
  installments: 1,
  payer: {
    email: 'test_payer_12345@testuser.com'
  },
  three_d_secure_mode: 'optional'
};
mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
payment_request = {
  token: 'CARD_TOKEN',
  installments: 1,
  transaction_amount: 100,
  description: 'description',
  payer: {
    email: 'test_payer_12345@testuser.com',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
payment_data = {
    "transaction_amount": 100,
    "token": "CARD_TOKEN",
    "description": "description",
    "installments": 1,
    "payer": {
        "email": "test_payer_12345@testuser.com",
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
> En este último caso, la respuesta mostrará un atributo del pago llamado `three_ds_info` con los campos `external_resource_url`, que contiene la URL del challenge, y `creq`, un identificador del challenge request. Será necesario mostrar el challenge y tratar su resultado con los pasos siguientes.


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


4. Para **mostrar el _Challenge_**, es necesario que generes un _iframe_ (altura mínima: 500px, ancho mínimo: 600px) que contenga un formulario con `method post`, `action` que contenga la URL obtenida en el campo `external_resource_url`, y un input oculto con el valor obtenido en `creq`. Después, debes hacer el post del form a continuación para empezar el challenge.

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


Cuando el challenge es finalizado, el status del pago será actualizado. Será `approved` si la autenticación fue exitosa, `rejected` si no lo fue y, en caso de que la autenticación no fuera  hecha, el pago permanecerá `pending`. Esta actualización no es inmediata, puede tardar unos instantes. 

> NOTE
>
> Importante
>
> Cuando se inicia el proceso de challenge, el usuario tiene 5 minutos, aproximadamente, para realizarlo. En caso de que no sea hecho, el banco recusará la transacción y Mercado Pago considerará el pago cancelado. Si el usuario nunca realiza el challenge, el pago quedará como `pending_challenge`.

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

Una transacción con 3DS puede devolver diferentes status según el tipo de integración realizada (con o sin challenge). En un pago sin _Challenge_, el estado de la transacción será directamente "approved" o "rejected".

En un pago con _Challenge_, la transacción estará en status `pending` y se iniciará el proceso de autenticación con el banco. Solo después de esta etapa se mostrará el status final.

A continuación se muestra una tabla con los posibles status y sus descripciones correspondientes.


| Status  | Descrição  |
| --- | --- |
| “pending”  | Transacción pendiente de autenticación o timeout del challenge.  |
| “approved”  | Transacción aprobada con autenticación.  |
| “rejected”  | Transacción denegada sin autenticación.  |



## Prueba de integración

Antes de pasar a producción, es posible probar la integración para asegurarse de que el flujo de 3DS funcione correctamente y que los pagos se procesan sin errores. De esta manera, evitas que los compradores abandonen la transacción porque no pueden completar la compra.

Para realizar una compra de prueba, además de las credenciales de prueba de tu usuario de producción, es necesario utilizar una tarjeta de crédito de prueba con 3DS habilitado. 


> WARNING
>
> Importante
>
> Para la realización de pruebas, recomendamos que te pongas en contacto con tu consultor de Mercado Pago.


