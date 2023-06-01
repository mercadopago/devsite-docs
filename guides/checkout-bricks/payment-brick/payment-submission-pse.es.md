> SERVER_SIDE
>
> h1
>
> PSE

Para realizar el pago con PSE, es necesario obtener los datos que el frontend envía y agregar algunas propiedades adicionales antes de crear el pago con los SDKs de backend, son:

| Propiedades adicionales | Descripción |
| --- | --- |
| description | Descripción del producto o compra. |
| additional_info.ip_address | Dirección IP del comprador, donde se genera el pago. |
| callback_url | Pantalla donde se redirecciona al comprador por defecto, luego de realizar el pago dentro de la pantalla del banco. |

A continuación se muestran algunos ejemplos de cómo enviar pagos con PSE a Mercado Pago.

[[[
```php
<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 10000;
$payment->description = "Título del producto";
$payment->payment_method_id = "pse";
$payment->additional_info = array(
  "ip_address" => "<PAYER_IP_ADDRESS>"
);
$payment->transaction_details = array(
  "financial_institution" => '1009'
);
$payment->callback_url = "<YOUR_WEB_SITE>";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->identification = array(
  "type" => $_POST['identificationType'],
  "number" => $_POST['identificationNumber']
);
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
  'status' => $payment->status,
  'status_detail' => $payment->status_detail,
  'id' => $payment->id
);
echo json_encode($response);
?>
```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
var payment = req.body;

var payment_data = {
 transaction_amount: 10000,
 description: 'Título del producto',
 payment_method_id: 'pse',
 payer: {
   entity_type: 'individual',
   email: payment.email,
   identification: {
     type: payment.identificationType,
     number: payment.identificationNumber
   }
 },
 additional_info: {
   ip_address: '<PAYER_IP_ADDRESS>'
 },
 transaction_details: {
   financial_institution: '1009'
 },
 callback_url: '<YOUR_WEB_SITE>'
};

mercadopago.payment.save(payment_data)
 .then(function(response) {
   res.status(response.status).json({
     status: response.body.status,
     status_detail: response.body.status_detail,
     id: response.body.id,
   });
 })
 .catch(function(error) {
   res.status(error.status).send(error);
 });
```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

IdentificationRequest identification =
 IdentificationRequest.builder()
 .type(request.getPayer().getIdentification().getType())
 .number(request.getPayer().getIdentification().getNumber())
 .build();

PaymentPayerRequest payer =
 PaymentPayerRequest.builder()
 .email("<PAYER_EMAIL>")
 .entityType("individual")
 .firstName("<PAYER_FIRST_NAME>")
 .lastName("<PAYER_LAST_NAME>")
 .identification(identification)
 .build();

PaymentAdditionalInfoRequest additionalInfo =
 PaymentAdditionalInfoRequest.builder()
 .ipAddress("<PAYER_IP_ADDRESS>")
 .build();

PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
 .financialInstitution("1009")
 .build();

PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
 .transactionAmount(new BigDecimal(10000))
 .description("description")
 .paymentMethodId("pse")
 .additionalInfo(additionalInfo)
 .transactionDetails(transactionDetails)
 .notificationUrl("<YOUR_WEB_SITE>")
 .payer(payer)
 .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

 transaction_amount: 5000,
 description: "description",
 payment_method_id: "pse",
 additional_info: {
   ip_address: "<PAYER_IP_ADDRESS>"
 },
 transaction_details: {
   financial_institution: "1009"
 },
 callback_url: "<YOUR_WEB_SITE>"
 payer: {
   email: "<PAYER_EMAIL>",
   entity_type: "individual",
   first_name: "<PAYER_FIRST_NAME>",
   last_name: "<PAYER_LAST_NAME>",
   identification: {
     type: params[: identificationType],
     number: params[: identificationNumber]
   }
 }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]
```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var identification = new IdentificationRequest() {
 Type = request.Payer.Identification.Type,
   Number = request.Payer.Identification.Number
};

var payer = new PaymentPayerRequest() {
   Email = "<PAYER_EMAIL>",
   EntityType = "individual",
   FirstName = "<PAYER_FIRST_NAME>",
   LastName = "<PAYER_LAST_NAME>",
   Identification = identification
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
 IpAddress = "<PAYER_IP_ADDRESS>"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
 FinancialInstitution = "1009"
};

var paymentCreateRequest = new PaymentCreateRequest() {
 TransactionAmount = 10000,
   Description = "description",
   PaymentMethodId = "pse",
   AdditionalInfo = additionalInfo,
   TransactionDetails = transactionDetails,
   CallbackUrl = "<YOUR_WEB_SITE>",
   Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
payment_data = {
  "transaction_amount": 10000,
  "description": "description",
  "payment_method_id": "pse",
  "additional_info": {
     "ip_address": "<PAYER_IP_ADDRESS>"
  },
  "transaction_details": {
     "financial_institution": "1009"
  },
  "callback_url": "<YOUR_WEB_SITE>"
  "payer": {
      "email": "<PAYER_EMAIL>",
      "entity_type": "individual",
      "first_name": "<PAYER_FIRST_NAME>",
      "last_name": "<PAYER_LAST_NAME>",
      "identification": {
          "type": request.POST.get("type"),
          "number": request.POST.get("number")
      }
  }
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
--d '{
   "transaction_amount": 5000,
   "description": "Título del producto",
   "payment_method_id": "pse",
   "payer": {
       "email": "<PAYER_EMAIL>",
       "entity_type": "individual",
       "identification": {
           "type": "<PAYER_IDENTIFICATION_TYPE>",
           "number": "<PAYER_IDENTIFICATION_NUMBER>"
       }
   },
   "additional_info": {
       "ip_address": "<PAYER_IP_ADDRESS>"
   },
   "transaction_details": {
       "financial_institution": "1009"
   },
   "callback_url": "<YOUR_WEB_SITE>"
}'
```
]]]

A continuación se muestra un ejemplo de la respuesta:

```json
{
   "id": 1312147735,
    ...,
   "operation_type": "regular_payment",
   "payment_method_id": "pse",
   "payment_type_id": "bank_transfer",
   "payment_method": {
       "id": "pse",
       "type": "bank_transfer"
   },
   "status": "pending",
   "status_detail": "pending_waiting_transfer",
    ...,
   "description": "Título del producto",
    ...,
   "callback_url": "http://www.your-site.com",
   "installments": 1,
   "transaction_details": {
    ...,
       "total_paid_amount": 10000,
    ...,
       "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
    ...,
       "financial_institution": "1009",
    ...,
       "bank_transfer_id": 129229,
       "transaction_id": "10022214"
   },
}
```

La respuesta, como puede ver en el `json` anterior, mostrará el status pendiente hasta que el comprador realice el pago.

## Redirigir al comprador a PSE

Luego de crear el pago en tu backend con el SDK de Mercado Pago, debes redirigir al comprador a la plataforma PSE para realizar la transferencia bancaria. Después de realizar el pago, el comprador será redirigido a su sitio web. Para ejecutar este flujo, simplemente siga estos pasos:

1. Después de crear el pago en su backend, use el campo **id** recibido en la respuesta para representar el [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/introduction) en su interfaz. Este Brick le informará al usuario que lo llevaremos a la página de PSE y unos segundos después se realizará la redirección de forma automática.

2. Cuando el comprador complete el pago en la plataforma PSE, será redirigido a su sitio web a través de la `callback_url` que se nos envió al crear el pago. Además, el campo `payment_id` se agregará como un parámetro de URL en este callback. De esta forma, puede volver a representar el Status Screen Brick para que el comprador pueda ver el estado del pago final en su sitio web.

![payment-loading-pse-redirect](checkout-bricks/payment-brick-pse-redirect-es.jpg)

## Mostrar estado de pago

Una vez que el pago ya se ha completado, también es posible continuar usando el Status Screen Brick para mostrar el estado del pago al usuario en su sitio web, por ejemplo. Simplemente cree la instancia de Status Screen utilizando el ID de pago.

![payment-status-pse](checkout-bricks/payment-status-pse-es.jpg)