# Reservar, capturar e cancelar valores

Veja abaixo como gerenciar as transações realizadas para processar os pagamentos da sua loja.

## Reserva de valores

Uma reserva de valores acontece quando uma compra é realizada e seu montante é reservado do limite total do cartão, garantindo que o valor fique guardado até a conclusão do processamento.

Para realizar uma autorização de reserva de valores, envie um **POST** com todos os atributos necessários, incluindo `type_config.capture_mode` definido como `manual` ao endpoint [/v1/orders](/developers/pt/reference/order/online-payments/create/post). Visite nossa [Referência de API](/developers/pt/reference/order/online-payments/create/post) para mais informações.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100.0,
    "token" => "123456",
    "description" => "My product",
    "installments" => 1,
    "payment_method_id" => "visa",
    "payer" => [
      "email" => "my.user@example.com",
    ],
    "capture" => false
  ], $request_options);
  echo implode($payment);
?>
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .token("ff8080814c11e237014c1ff593b57b4d")
       .description("Título do produto")
       .installments(1)
       .paymentMethodId("visa")
       .payer(PaymentPayerRequest.builder().email("test_user_19653727@testuser.com").build())
       .capture(false)
       .build();

client.create(request);

```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
transaction_amount: 100,
token: '123456',
description: 'My product',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'my.user@example.com',
},
capture: false
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  description: 'Título do produto',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_19653727@testuser.com'
  },
  capture: false
}

payment_response = sdk.payment.create(payment_request)
payment = payment[:response]
```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "Título do produto",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
    Capture = false,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "description": "Title of what you are paying for",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "capture": False
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: 100,
   Token: "ff8080814c11e237014c1ff593b57b4d",
   Description: "My product",
   Installments: 1,
   PaymentMethodID:  "visa",
      Payer: &payment.PayerRequest{
      Email: "test_user_12345@testuser.com",
      Identification: &payment.IdentificationRequest{
         Type: "CPF",
         Number: "01234567890",
      },
   },
   Capture: false,
}


resource, err := client.Create(context.Background(), request)
if err != nil {
   fmt.Println(err)
}


fmt.Println(resource)
```
```curl

curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '
{
   "transaction_amount":100,
   "token":"ff8080814c11e237014c1ff593b57b4d",
   "description":"Product title",
   "installments":1,
   "payment_method_id":"visa",
   "payer":{
      "email":"test_user_3931694@testuser.com"
   },
   "capture":false
}'

```
]]]


A resposta indica que o pagamento se encontra autorizado e pendente de captura.


[[[
```json
{
  "id": PAYMENT_ID,
  ...
  "status": "authorized",
  "status_detail": "pending_capture",
  ...
  "captured": false,
  ...
}
```
]]]

Além disso, também é possível retornar como `rejeitado` ou `pendente`. Caso retorne como 'pendente', você deverá ficar atento às notificações para saber qual o status final do pagamento.

Tenha em conta que os valores autorizados não poderão ser utilizados pelo seu cliente até que não sejam capturados. Recomendamos realizar a captura o quanto antes.

> WARNING
>
> Importante
>
> A reserva terá validade de ----[mla, mlm, mlc]----7 dias------------ ----[mlb]---- 5 dias ------------. Se não capturá-la nesse período, será cancelada. Além disso, é necessário guardar o ID do pagamento para poder finalizar o processo.

## Captura de pagamento autorizado

A finalização de um pagamento acontece após a captura do pagamento autorizado, o que significa que o valor reservado para a compra pode ser debitado do cartão. 

Por enquanto, temos uma possibilidade de **captura posterior**, na qual se captura o valor integral do pagamento reservado.

> WARNING
>
> Importante
>
> O prazo para capturar o pagamento autorizado é de ----[mla, mlm, mlc]----7 dias------------ ----[mlb]---- 5 dias ------------ a partir da sua criação.

Para realizar a captura do valor total de uma reserva, é necessário enviar uma requisição ao endpoint [/v1/orders/{order_id}/capture](/developers/pt/reference/order/online-payments/capture/post), onde você deve substituir `{order_id}` pelo ID da ordem cuja captura total deseja efetuar. Visite nossa [Referência de API](/developers/pt/reference/order/online-payments/capture/post) para mais informações.

## Cancelamento de reserva

O cancelamento de uma reserva ocorre quando, por algum motivo, o pagamento de uma compra não é aprovado e a reserva do valor precisa retornar para o limite do cartão do cliente ou quando um comprador desiste da compra.

Para cancelar uma reserva, você deve enviar uma requisição ao endpoint [/v1/orders/{order_id}/cancel](/developers/pt/reference/order/online-payments/cancel-order/post). Certifique-se de substituir `{order_id}` pelo ID da ordem que deseja cancelar. Visite nossa [Referência de API](/developers/pt/reference/order/online-payments/capture/post) para mais informações.

> NOTE
>
> Nota
>
> Para mais informações sobre reembolsos e cancelamentos de pagamentos, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/order/online-payments/payment-management/cancellations-and-refunds).