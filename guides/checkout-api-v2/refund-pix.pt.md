# Reembolsos de transações com Pix


Ao receber pagamentos com Pix, é possível que surja a necessidade de realizar operações de reembolso. Caso seja necessário, é possível que os reembolsos permaneçam em processo (contingência) devido a algum erro durante o processamento da transação, por exemplo, na comunicação com o Bacen. 

Por padrão, esses erros são reportados a quem fez a requisição como um `400 - Bad Request`, o que pode dificultar a compreensão sobre o status em que se encontra o reembolso até que o pagamento passe ao status `refunded` (caso seja aprovado). 

Para obter uma resposta mais clara, basta enviar o header `X-Render-In-Process-Refunds: true`  junto da requisição de criação do reembolso, dessa forma, a resposta incluirá o status  `201 - Created` e o campo `status` com valor `in_process`. 

O header também pode ser incluído em requisições para [obter a lista de reembolsos](/developers/pt/reference/chargebacks/_payments_id_refunds/get) e para a [busca de um reembolso específico](/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get). Nesses casos, quando for aplicável, a resposta trará o mesmo valor de status mencionado anteriormente.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments/{payment_id}/refunds \

-H 'X-Render-In-Process-Refunds: true' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: {idempotency_key}' \
--data-raw '{
    "amount": 20
}'
```
```java

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentRefundClient client = new PaymentRefundClient();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("X-Render-In-Process-Refunds", "true");

MPRequestOptions requestOptions = MPRequestOptions.builder()
   .customHeaders(customHeaders)
   .build();

PaymentRefund refund = client.refund(paymentId, new BigDecimal(20), requestOptions);

```
```dotnet

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

PaymentRefundClient client = new PaymentRefundClient();

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("X-Render-In-Process-Refunds", "true");

var refund = client.Refund(paymentId, 20, requestOptions);

```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const paymentRefunds = new PaymentRefunds(client);

paymentRefunds.refund({ id: '123', amount: 20 }).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentRefundClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new PaymentRefundClient();
  $refund = $client->refund($payment_id, 20);
  echo $refund->id;
?>
```
```python

sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')

refund_object = {
   'amount': 20
}

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
   'content-type': 'application/json',
   'X-Render-In-Process-Refunds': 'true'
}

sdk.refund().create('payment_id', refund_object, request_options)

```
```ruby

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

data = {
 amount: 20
}

custom_headers = {
 'X-Render-In-Process-Refunds': 'true'
}
custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

refund = sdk.refund.create(payment_id, refund_data: data, request_options: custom_request_options)

```
]]]

## Exemplo de resposta (alguns campos foram omitidos)

[[[
```Json

{
    "id": 1150873004,
    "payment_id": 23443394602,
    "amount": 20,
    "metadata": {},
    "source": {
        "id": "475845652",
        "name": "Test Test",
        "type": "collector"
    },
    "date_created": "2022-06-24T16:09:03.944-04:00",
    "unique_sequence_number": null,
    "refund_mode": "standard",
    "adjustment_amount": 0,
    "status": "in_process",
    "reason": "1",
    "labels": [
        "hidden",
        "contingency"
    ],
    "amount_refunded_to_payer": 20,
    "partition_details": []
}

```
]]]
