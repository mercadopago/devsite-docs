# Capturar pagamento autorizado

A finalização de um pagamento acontece após a captura do pagamento autorizado, o que significa que o valor reservado para a compra pode ser debitado do cartão. 

Existem duas formas de capturar um pagamento autorizado:

* **Captura do valor total de uma reserva**: na qual se captura o valor integral do pagamento reservado.
* **Captura de um valor inferior ao reservado:** na qual se captura o valor parcial do pagamento reservado.

> WARNING
>
> Importante
>
> O prazo para capturar o pagamento autorizado é de ----[mla, mlm]----7 dias-------- ----[mlb]---- 5 dias ------------ ----[mpe]---- 22 dias----------- a partir de sua criação.

Abaixo descrevemos o detalhe de cada uma das opções e como executá-las.

## Capturar valor total 

Para fazer a captura do valor total de uma reserva, envie o valor que deve ser capturado ao parâmetro `transaction_amount` e execute a requição através dos códigos disponíveis abaixo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->capture($payment_id, $request_options);
?>
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

payment.capture({
id: '<PAYMENT_ID>',
transaction_amount: 12.34,
requestOptions: {
idempotencyKey: '<IDEMPOTENCY_KEY>'
}
}).then(console.log).catch(console.log);
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.capture(paymentId);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

request = {
  capture: true
}

payment_response = sdk.payment.update(payment_id, request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentClient();
Payment payment = await client.CaptureAsync(paymentId);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = { "capture": True }
payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	// Create payment.
	request := payment.Request{
		TransactionAmount: 105.1,
		Payer: &payment.PayerRequest{
			Email: "{{EMAIL}}",
		},
		Token:        "{{CARD_TOKEN}}",
		Installments: 1,
		Capture:      false,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Capture.
	resource, err = client.Capture(context.Background(), resource.ID)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{"capture": true}'
```
]]]

A resposta devolverá que o pagamento se encontra aprovado e creditado.

[[[
```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "captured": true,
  ...
}
```
]]]

----[mla]----
## Capturar valor parcial

Para capturar um valor inferior ao reservado, envie o valor que deve ser capturado ao parâmetro `transaction_amount` e execute a requição através dos códigos disponíveis abaixo.

> WARNING
>
> Importante
>
> Este recurso está disponível apenas para os cartões das bandeiras Visa, Cabal, Master e American Express.
> <br><br>
> Não é possível capturar um valor superior ao reservado, sendo necessário cancelar a reserva e gerar uma nova.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->transaction_amount = 75;
  $payment->capture = true;
  $payment->update();
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.capture(paymentId, new BigDecimal("75"));
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

let captureInfo = {id: 123, transaction_amount: 5}

mercadopago.payment.capturePartial(captureInfo, mercadopago, (error, response) => {
    if (error){
        console.log(error);
    }else{
        console.log(response)
    }
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

request = {
  transaction_amount: 75,
  capture: true
}

payment_response = sdk.payment.update(payment_id, request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentClient();
Payment payment = await client.CaptureAsync(paymentId, 75);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 75,
    "capture": True
}

payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	// Create payment.
	request := payment.Request{
		TransactionAmount: 105.1,
		Payer: &payment.PayerRequest{
			Email: "{{EMAIL}}",
		},
		Token:        "{{CARD_TOKEN}}",
		Installments: 1,
		Capture:      false,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Capture.
	resource, err = client.Capture(context.Background(), resource.ID)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl

curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
          "transaction_amount": 75,
          "capture": true
}'
```
]]]

A resposta trará o seguinte resultado:

[[[
```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "transaction_amount": 75,
  ...
  "captured": true,
  ...
}
```
]]]

------------
----[mlb, mlu, mlc, mco, mpe, mlm]----
## Capturar valor parcial

Para capturar um valor inferior ao reservado, envie o valor que deve ser capturado ao parâmetro `transaction_amount` e execute a requição através dos códigos disponíveis abaixo.

> WARNING
>
> Importante
>
> Não é possível capturar um valor superior ao reservado, sendo necessário cancelar a reserva e gerar uma nova.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->transaction_amount = 75;
  $payment->capture = true;
  $payment->update();
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.capture(paymentId, new BigDecimal("75"));
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

let captureInfo = {id: 123, transaction_amount: 5}

mercadopago.payment.capturePartial(captureInfo, mercadopago, (error, response) => {
    if (error){
        console.log(error);
    }else{
        console.log(response)
    }
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

request = {
  transaction_amount: 75,
  capture: true
}

payment_response = sdk.payment.update(payment_id, request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentClient();
Payment payment = await client.CaptureAsync(paymentId, 75);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 75,
    "capture": True
}

payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	// Create payment.
	request := payment.Request{
		TransactionAmount: 105.1,
		Payer: &payment.PayerRequest{
			Email: "{{EMAIL}}",
		},
		Token:        "{{CARD_TOKEN}}",
		Installments: 1,
		Capture:      false,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Capture.
	resource, err = client.Capture(context.Background(), resource.ID)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl

curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
          "transaction_amount": 75,
          "capture": true
}'
```
]]]

A resposta trará o seguinte resultado:

[[[
```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "transaction_amount": 75,
  ...
  "captured": true,
  ...
}
```
]]]

------------