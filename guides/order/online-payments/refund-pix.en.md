# Refund of transactions with Pix

When receiving payments with Pix, it is possible that the need to perform refund operations may arise. If necessary, it is possible that refunds remain in process (contingency) due to an error during transaction processing, for example, in communication with Bacen.

By default, these errors are reported to the person making the request as a `400 - Bad Request`, which can make it difficult to understand the status of the refund until the payment changes to the `refunded` status (if approved). 

For a clearer response, just send the header `X-Render-In-Process-Refunds: true` along with the refund creation request, that way, the response will include the status `201 - Created` and the field ` status` with value `in_process`.

The header can also be included in requests to [get refund list](/developers/en/reference/chargebacks/_payments_id_refunds/get) and to [search for a specific refund](/developers/en/reference/chargebacks/ _payments_id_refunds_refund_id/get). In those cases, if applicable, the response will bring the same status value as mentioned above.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentRefundClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new PaymentRefundClient();
  $refund = $client->refund($payment_id, 20);
  echo $refund->id;
?>
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
```dotnet

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

PaymentRefundClient client = new PaymentRefundClient();

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("X-Render-In-Process-Refunds", "true");

var refund = client.Refund(paymentId, 20, requestOptions);

```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/refund"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := refund.NewClient(cfg)

	resource, err := client.Create(context.Background(), <PAYMENT_ID>)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
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
]]]

## Response examples (some fields have been omitted)

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