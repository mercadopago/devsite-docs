> SERVER_SIDE
>
> h1
>
> Otros medios de pago

Para configurar pagos en **efectivo** y **banca por internet**, envía un POST con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> NOTE
>
> Importante
>
> Recuerda que Brick ya resuelve la mayoría de parámetros para enviar el POST. La devolución de información viene en la devolución de llamada `onSubmit`, dentro del objeto `formData`, donde puede encontrar parámetros como: `payment_method_id`, `payer.email` y `amount`.

| Tipo de pago  | Parámetro  | Valor  |
| --- | --- | --- |
| PagoEfectivo  | `payment_method_id`  | `pagoefectivo_atm`  |

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Titulo del producto";
 $payment->payment_method_id = "pagoefectivo_atm";
 $payment->payer = array(
     "email" => "test@test.com",
 );
 $payment->metadata = array(
     "payment_mode" => "online",
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
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_mode: 'online',
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
       .paymentMethodId("pagoefectivo_atm")
       .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
       )
	.metadata(
          Map.of("payment_mode", "online")
       )
      .build();
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
payment_request = {
  transaction_amount: 100,
  description: 'Titulo del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_mode: 'online',
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
    TransactionAmount = 100,
    Description = "Titulo del producto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
    },
    Metadata = new Dictionary<string, object>
    {
	["payment_mode"] = "online",
    }
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
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_mode": "online",
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
      "payment_method_id": "pagoefectivo_atm",
      "payer": {
        "email": "test@test.com",
      },
"metadata": {
        "payment_mode": "online",
      }
    }'
```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador realice el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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
        "external_resource_url": "https://www.mercadopago.com.pe/payments/123456/ticket?caller_id=123456&payment_method_id=pagoefectivo_atm&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Mostrar estado de pago

Después de crear el pago desde backend con el SDK de Mercado Pago, use el **id** recibido en la respuesta para crear una instancia del Status Screen Brick y mostrárselo al comprador.

Además de mostrar el estado del pago, Status Screen Brick también mostrará el código de barras del ticket para copiar y pegar o para que el comprador lo escanee y pague. Descubra lo sencillo que es integrar [haga clic aquí](/developers/es/docs/checkout-bricks/status-screen-brick/default-rendering).

<center>

![payment-submission-other-payment-methods-status-mpe](checkout-bricks/payment-submission-other-payment-methods-status-mpe-es.jpg)

</center>

> NOTE
>
> Importante
>
> La fecha de vencimiento del boleto se puede configurar enviando una solicitud POST con el parámetro `data_of_expiration` al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post). Después del vencimiento, el boleto será cancelado.