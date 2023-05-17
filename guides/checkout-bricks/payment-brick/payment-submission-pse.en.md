> SERVER_SIDE
>
> h1
>
> PSE

To make the payment with PSE, it is necessary to get the data that the frontend sends and add some additional properties before creating the payment with the backend SDKs, they are:

| Additional properties | Description |
| --- | --- |
| description | Description of the product or purchase. |
| additional_info.ip_address | IP address of the buyer, where the payment is generated. |
| callback_url | Screen where the buyer is redirected by default, after making the payment within the bank screen. |

Below are some examples of how to send PSE payments to Mercado Pago.

[[[
```php
<?php
require '../vendor/autoload.php';


MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");


$payment = new MercadoPago\Payment();
$payment->transaction_amount = 10000;
$payment->description = "Product title";
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
 description: 'Product title',
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
   "description": "Product title",
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

Below is an example of the response:

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
   "description": "Product title",
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

The response, as you can see in the `json` above, will show the pending status until the buyer makes the payment.

## Show payment status

After creating the payment from the backend with the Mercado Pago SDK, use the **id** received in the response to create an instance of the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction) and show it to the buyer.

In addition to showing the status of the payment, the Status Screen Brick will also display information related to the purchase and a button that the user can click and be redirected to make the payment. Find out how easy it is to integrate [click here](/developers/en/docs/checkout-bricks/status-screen-brick/default-rendering).