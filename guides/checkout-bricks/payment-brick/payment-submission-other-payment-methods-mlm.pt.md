> SERVER_SIDE
>
> h1
>
> Outros meios de pagamento

Para configurar **pagamentos com dinheiro via ticket**, envie um POST com os seguintes parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> NOTE
>
> Importante
>
> Lembre-se que o Brick já resolve a maioria dos parâmetros para enviar o POST. O retorno das informações vem no callback `onSubmit`, dentro do objeto `formData`, onde você poderá encontrar parâmetros como: `payment_method_id`, `payer.email` e `amount`.

| Tipo de pagamento  | Ponto de Pagamento | Parâmetro  | Valor  |
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

Na criação de um pagamento, além de enviar o parâmetro `payment_method_id`, que é utilizado pela [API de pagamentos](/developers/pt/reference/payments/_payments/post), o Brick retorna ao integrador também o parâmetro metadata contendo o ponto de pagamento. Esse dado é útil para melhorar as instruções de pagamento específicas no [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction).

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

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento. Veja abaixo um exemplo de retorno. 

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

## Mostrar o status do pagamento

Após criar o pagamento pelo backend utilizando a SDK do Mercado Pago, utilize o **id** recebido na resposta para instanciar o [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction) e exibir o status do pagamento para o comprador. 

Além disso, o Status Screen também poderá redirecionar o comprador para o ticket com número da operação e código de barras para o comprador se dirigir a uma loja e assim fazer o pagamento.  Saiba como é simples integrar [clicando aqui](/developers/pt/docs/checkout-bricks/status-screen-brick/configure-integration).

![payment-submission-other-payment-methods-status-mlm](checkout-bricks/payment-submission-other-payment-methods-status-mlm-pt.jpg)

> NOTE
>
> Importante
>
> A data de vencimento do boleto pode ser configurada através do envio de requisição POST com parâmetro `data_of_expiration` ao endpoint [/v1/payments.](/developers/pt/reference/payments/_payments/post) Após o vencimento, o boleto será cancelado.