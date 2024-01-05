# Reembolso de transacciones con Pix

Al recibir pagos con Pix, es posible que necesites realizar operaciones de reembolso. En caso de ser necesario,  los reembolsos pueden permanecer en proceso (contingencia) debido a algún error durante el procesamiento de la transacción, por ejemplo, en la comunicación con el Bacen.

Por defecto, estos errores son reportados a quien hizo la solicitud como un `400 - Bad Request`, lo que puede dificultar la comprensión sobre el status en el que se encuentra el reembolso hasta que el pago pase al status `refunded` (en caso de ser aprobado).

Para obtener una respuesta más clara, basta con enviar el header `X-Render-In-Process-Refunds: true` junto con el request de creación de reembolso. De esta forma, la respuesta incluirá el `status 201 - Created` y el campo `status` con el valor `in_process`.

El header también puede ser incluido en requests para [obtener la lista de reembolsos](/developers/es/reference/chargebacks/_payments_id_refunds/get) y para la [búsqueda de un reembolso específico](/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get). En estos casos, cuando sea aplicable, la respuesta traerá el mismo valor de estado mencionado anteriormente.

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
import { MercadoPagoConfig, PaymentRefund } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const paymentRefund = new PaymentRefund(client);

refund.create({
payment_id: '<PAYMENT_ID>',
body: {
amount: 100
}
}).then(console.log).catch(console.log);
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

## Ejemplo de respuesta (se omitieron algunos campos) 

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
 "e2e_id": "D00000000202312220000abcdefghijklm",
 "partition_details": []
}
```