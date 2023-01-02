> SERVER_SIDE
>
> h1
>
> Enviar el pago (otros medios de pago)

Para configurar **pagos con dinero en efectivo via ticket**, envía un POST con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> NOTE
>
> Importante
>
> Recuerda que Brick ya resuelve la mayoría de parámetros para enviar el POST. La devolución de información viene en la devolución de llamada `onSubmit`, dentro del objeto `formData`, donde puede encontrar parámetros como: `payment_method_id`, `payer.email` y `amount`.

| Tipo de pago | Punto de pago | Parámetro | Valor |
| --- | --- | --- | --- |
| Paycash  | 7 Eleven | `payment_method_id`  | `paycash`  |
| Paycash  | Santander | `payment_method_id`  | `paycash`  |
| Paycash  | HSBC| `payment_method_id`  | `paycash`  |
| BBVA  | BBVA | `payment_method_id`  | `bancomer`  |
| Citibanamex  | Citibanamex | `payment_method_id`  | `banamex`  |
| Citibanamex  | Telecomm | `payment_method_id`  | `banamex`  |
| Paycash  | Farmacias Yza| `payment_method_id`  | `paycash`  |
| BBVA  | Farmacias del ahorro | `payment_method_id`  | `bancomer`  |
| OXXO  | OXXO | `payment_method_id`  | `oxxo`  |
| Paycash  | Circle K | `payment_method_id`  | `paycash`  |
| Paycash  | Extra | `payment_method_id`  | `paycash`  |
| Paycash  | Kiosko | `payment_method_id`  | `paycash`  |
| Paycash  | Soriana | `payment_method_id`  | `paycash`  |
| BBVA  | Casa Ley | `payment_method_id`  | `bancomer`  |
| Citibanamex  | Chedraul | `payment_method_id`  | `banamex`  |
| Paycash  | Calimax | `payment_method_id`  | `paycash`  |

Al crear un pago, además de enviar el parámetro `payment_method_id`, que utiliza la [API de pagos](/developers/es/reference/payments/_payments/post), el Brick también devuelve al integrador el parámetro de metadatos que contiene el punto de pago. Estos datos son útiles para mejorar instrucciones de pago específicas en el [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/introduction).

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
        "external_resource_url": "https://www.mercadopago.com.mx/payments/123456/ticket?caller_id=123456&payment_method_id=oxxo&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Mostrar estado de pago

Después de crear el pago desde backend con el SDK de Mercado Pago, usa el **id** recibido en la respuesta para crear una instancia del [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/introduction) y mostrárselo al comprador.

Además, el Status Screen Brick también puede redirigir al comprador al ticket con el número de transacción y código de barras para que el comprador vaya a una tienda y así realizar el pago. Descubre lo sencillo que es integrar [haz clic aquí](/developers/es/docs/checkout-bricks/status-screen-brick/configure-integration).

![payment-submission-other-payment-methods-status-mlm](checkout-bricks/payment-submission-other-payment-methods-status-mlm-es.jpg)

> NOTE
>
> Importante
>
> La fecha de vencimiento del boleto se puede configurar enviando una solicitud POST con el parámetro `data_of_expiration` al endpoint [/v1/payments.](/developers/es/reference/payments/_payments/post) Después del vencimiento, el boleto será cancelado.