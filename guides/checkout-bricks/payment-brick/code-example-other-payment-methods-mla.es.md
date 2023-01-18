# Otros medios de pago

Para facilitar y optimizar su proceso de integración, mira a continuación un ejemplo completo de cómo incluir **Rapipago** y **Pago Fácil** como medio de pago con Payment Brick. 

> CLIENT_SIDE
>
> h2
>
> Configurar la integración

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
         amount: 100, // monto a ser pago
       },
       customization: {
         paymentMethods: {
           ticket: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           /*
             Callback llamado cuando Brick está listo
             Aquí puedes ocultar loadings de su sitio, por ejemplo.
           */
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
             })
               .then((response) => {
                 // recibir el resultado del pago
                 resolve();
               })
               .catch((error) => {
                 // manejar la respuesta de error al intentar crear el pago
                 reject();
               })
           });
         },
         onError: (error) => {
           // callback llamado para todos los casos de error de Brick
           console.error(error);
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
> Enviar el pago a Mercado Pago

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Titulo del producto";
 $payment->payment_method_id = "rapipago";
 $payment->payer = array(
     "email" => "test@test.com",
   );
 
 $payment->save();
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment_data = {
  transaction_amount: 100,
  description: 'Titulo del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test@test.com',
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
       .description("Titulo del producto")
       .paymentMethodId("rapipago")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
       .build();
 
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
 
payment_request = {
  transaction_amount: 100,
  description: 'Titulo del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test@test.com',
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
    Description = "Titulo del producto",
    PaymentMethodId = 'rapipago',
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
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
    "description": "Titulo del producto",
    "payment_method_id": "rapipago",
    "payer": {
        "email": "test@test.com",
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
      "description": "Titulo del producto",
      "payment_method_id": "rapipago",
      "payer": {
        "email": "test@test.com",
      }
    }'
```
]]]

### Respuesta

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
        "external_resource_url": "https://www.mercadopago.com.ar/payments/123456/ticket?caller_id=123456&payment_method_id=rapipago&payment_id=123456&payment_method_reference_id=123456",
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
> La fecha de vencimiento del boleto se puede configurar enviando una solicitud POST con el parámetro `data_of_expiration` al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post). Después del vencimiento, el boleto será cancelado.