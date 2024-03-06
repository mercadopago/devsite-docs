# Crear una validación Zero Dollar Auth

En tu frontend, utiliza nuestra biblioteca **Mercado Pago SDK JS** para capturar los datos de la tarjeta y generar el token.

> NOTE
>
> Importante
>
> También es posible generar un token de tarjeta utilizando el Brick de CardPayment. Consulta la documentación [Renderización por defecto](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering) de CardPayment para obtener más detalles.


```JavaScript
   const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```

A continuación, completa los campos necesarios según la siguiente tabla. Luego, envía los datos, junto con el token de la tarjeta, al backend, realizando una solicitud al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post).

| Parámetro | Tipo | Descripción | Ejemplo |
|---|---|---|----|
| token | String | Token de la tarjeta | 12346622341 |
| payment_method_id | String | Indica el identificador del medio de pago seleccionado para efectuar el pago | master |
| payer.email | String | Email del pagador | buyer@examplemail.com |
| payer.type | String | Tipo de identificación del pagador asociado | guest |
| description | String | Descripción de la validación | "validación de tarjeta con valor zero dollar master crédito con cvv" |
| transaction_amount | Number | Costo de la validación | Siempre cero (0) para Zero Dollar Auth |

[[[
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Card-Validation: card_validation' \
--data-raw '{
    "token": "TOKEN",
    "payment_method_id": "master",
    "payer": {
        "email": "{{payer_email}}",
        "type" : "guest",
    },
    "description": "validação de cartão com valor zero dollar master",
    "transaction_amount": 0
}'
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Card-Validation: card_validation"]);

  $payment = $client->create([
    "token" => $_POST['token'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "payer" => [
      "email" => $_POST['email'],
      "type" => $_POST['type']
    ],
    "description" => $_POST['description'],
    "transaction_amount" => (float) $_POST['transactionAmount']
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        token: req.token,
        payment_method_id: req.payment_method_id,
        payer: {
            id: req.email,
            type: req.type
        },
        description: req.description,
        transaction_amount: req.transaction_amount,
    },
    requestOptions: { 
        X-Card-Validation: 'card_validation' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("X-Card-Validation", "card_validation");
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .type(request.getPayer().getType())
               .build())
       .build();

client.create(paymentCreateRequest, requestOptions);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'X-Card-Validation': 'card_validation'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: 'params[:email]',
   type: params[:type]
 }
}
 
payment_response = sdk.payment.create(payment_data, custom_request_options)
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

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("X-Card-Validation", "card_validation");

var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Type = Request["type"]
   },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
 
Console.WriteLine(payment.Status);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'X-Card-Validation': 'card_validation'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "type": request.POST.get("type")
   }
}
 
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
 
print(payment)
```
]]]

Al realizar las solicitudes, es posible que se devuelvan diferentes respuestas y estados. Para obtener más detalles sobre las respuestas recibidas, consulta la sección de "Respuestas de la API".


