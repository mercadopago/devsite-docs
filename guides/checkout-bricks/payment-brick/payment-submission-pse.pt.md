> SERVER_SIDE
>
> h1
>
> PSE

Para efetuar o pagamento com PSE, é necessário obter os dados que o frontend envia e adicionar algumas propriedades adicionais antes de efetuar o pagamento com os SDKs do backend, sendo elas:

| Propriedades adicionais | Descrição |
| --- | --- |
| descrição | Descrição do produto ou compra. |
| adicionais_info.ip_address | Endereço de IP do comprador em que o pagamento é gerado. |
| callback_url | Tela em que o comprador é redirecionado por padrão após efetuar o pagamento na da tela do banco. |

Abaixo estão alguns exemplos de como enviar pagamentos PSE para o Mercado Pago.

[[[
```php
<?php
require '../vendor/autoload.php';


MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");


$payment = new MercadoPago\Payment();
$payment->transaction_amount = 10000;
$payment->description = "Título do produto";
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
 description: 'Título do produto',
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
   "description": "Título do produto",
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

Veja abaixo um exemplo da resposta:

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
   "description": "Título do produto",
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
]]]

A resposta, como você pode ver no `json` acima, mostrará o status pendente até que o comprador efetue o pagamento.

## Mostrar status do pagamento

Após criar o pagamento do backend com o SDK do Mercado Pago, utilize o **id** recebido na resposta para criar uma instância do [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction) e mostre ao comprador.

Além de mostrar o status do pagamento, o Status Screen Brick também exibirá informações relacionadas à compra e um botão no qual o usuário pode clicar e ser redirecionado para efetuar o pagamento. Descubra como é fácil integrar [clique aqui](/developers/pt/docs/checkout-bricks/status-screen-brick/default-rendering).