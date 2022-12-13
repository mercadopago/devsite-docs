# Exemplo de código (outros meios de pagamento)
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo de como incluir **pagamento em dinheiro** como meio de pagamento com o Payment Brick.

> CLIENT_SIDE
>
> h2
>
> Configure a integração

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         amount: 100, // valor total a ser pago
       },
       customization: {
         paymentMethods: {
           ticket: 'all',
           atm: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           // callback chamado quando o Brick estiver pronto
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback chamado ao clicar no botão de submissão dos dados
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
             })
               .then((response) => {
                 // receber o resultado do pagamento
                 resolve();
               })
               .catch((error) => {
                 // lidar com a resposta de erro ao tentar criar o pagamento
                 reject();
               })
           });
         },
         onError: (error) => {
           // callback chamado para todos os casos de erro do Brick
         },
       },
     };
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
 </script>
</body>
 
</html>
```

> SERVER_SIDE
>
> h2
>
> Enviar pagamento ao Mercado Pago

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "oxxo";
 $payment->payer = array(
     "email" => "test@test.com",
   );
$payment->metadata = array(
     "payment_point" => "oxxo",
   );
 
 $payment->save();
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment_data = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_point: 'oxxo',
  },
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
      .description("Título do produto")
      .paymentMethodId("oxxo")
      .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
      .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
      )
      .metadata(
          Map.of('payment_point', 'oxxo')
      )
      .build()
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
 
payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_point: 'oxxo',
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
    Description = "Título do produto",
    PaymentMethodId = 'oxxo',
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
    },
    Metadata = new Dictionary<string, object>
    {
	["payment_point"] = "oxxo",
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
    "description": "Título do produto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_point": "oxxo",
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
      "description": "Título do produto",
      "payment_method_id": "oxxo",
      "payer": {
        "email": "test@test.com",
      }
"metadata": {
        "payment_point": "oxxo",
      }
 
    }'
```
]]]

### Resposta

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
        "external_resource_url": "https://www.mercadopago.com.mx/payments/123456/ticket?caller_id=123456&payment_method_id=oxxo&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

> NOTE
>
> Importante
>
> A data de vencimento do ticket pode ser configurada através do envio de requisição POST com parâmetro `data_of_expiration` ao endpoint [/v1/payments.](/developers/pt/reference/payments/_payments/post) Após o vencimento, o ticket será cancelado.