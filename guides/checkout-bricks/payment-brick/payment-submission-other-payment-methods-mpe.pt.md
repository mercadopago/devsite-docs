> SERVER_SIDE
>
> h1
>
> Outros meios de pagamento

Para configurar pagamentos com **PagoEfectivo**, envie um POST com os seguintes parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> NOTE
>
> Importante
>
> Lembre-se que o Brick já resolve a maioria dos parâmetros para enviar o POST. O retorno das informações vem no callback `onSubmit`, dentro do objeto `formData`, onde você poderá encontrar parâmetros como: `payment_method_id`, `payer.email` e `amount`.

| Tipo de pagamento  | Parâmetro  | Valor  |
| --- | --- | --- |
| PagoEfectivo  | `payment_method_id`  | `pagoefectivo_atm`  |

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

PaymentClient client = new PaymentClient();
PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Product title")
       .paymentMethodId("pagoefectivo_atm")
       .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
       )
	.metadata(
          Map.of("payment_mode", "online")
       )
      .build();
client.create(paymentCreateRequest, requestOptions);
```
```ruby
require 'mercadopago'
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  transaction_amount: 100,
  description: 'Product title',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_mode: 'online',
  }
}
payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Product title",
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
Payment payment = await client.CreateAsync(request, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "description": "Product title",
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_mode": "online",
    }
}
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Product title",
      "payment_method_id": "pagoefectivo_atm",
      "payer": {
        "email": "PAYER_EMAIL_HERE",
      },
"metadata": {
        "payment_mode": "online",
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
        "external_resource_url": "https://www.mercadopago.com.pe/payments/123456/ticket?caller_id=123456&payment_method_id=pagoefectivo_atm&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Mostre o status do pagamento

Após criar o pagamento pelo backend utilizando a SDK do Mercado Pago, utilize o **id** recebido na resposta para instanciar o Status Screen Brick e mostrar para o comprador.

Além de exibir o status do pagamento, o Status Screen Brick também exibirá o código de barras para o comprador copiar e colar, ou escanear e assim fazer o pagamento. Saiba como é simples integrar [clicando aqui](/developers/pt/docs/checkout-bricks/status-screen-brick/default-rendering).

<center>

![payment-submission-other-payment-methods-status-mpe](checkout-bricks/payment-submission-other-payment-methods-status-mpe-pt.png)

</center>

> NOTE
>
> Importante
>
> A data de vencimento do boleto pode ser configurada através do envio de requisição POST com parâmetro `data_of_expiration` ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post). Após o vencimento, o boleto será cancelado.