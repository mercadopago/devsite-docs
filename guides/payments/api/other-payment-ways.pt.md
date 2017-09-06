# Outros meios de pagamento

Existem outros meios de pagamento em cada país, além de cartões de crédito ou débito, com os quais você pode receber pagamentos. A maioria deles são o que chamamos de meios de pagamento “off-line” ou “em dinheiro”.

Os tipos de meio de pagamento disponíveis são:

	•	ticket.
	•	atm.
	•	bank_transfer.
	•	prepaid_card.


## Obtenha os meios de pagamento disponíveis

Obtenha uma lista dos meios de pagamento disponíveis fazendo uma requisição `HTTP GET`:

[[[
```php
<?php

  require_once ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")
```
]]]

O resultado será uma _array_ com os meios de pagamento e suas propriedades:

```json
[
    {
        "id": "rapipago",
        "name": "Rapipago",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2002.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2002.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "redlink",
        "name": "RedLink",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2003.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2003.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

## Receba pagamentos com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro, você só precisa obter o e-mail do comprador. Em seguida, você precisa fazer uma requisição `HTTP POST` enviando o `transaction_amount`, `payment_method_id` e o `email` obtidos:

[[[
```php
<?php  

  require_once ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Title of what you are paying for";
  $payment->payment_method_id = "rapipago";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Title of what you are paying for',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = 'Title of what you are paying for'
payment.payment_method_id = "rapipago"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
]]]

Resposta:

```json
{
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
```
Você receberá uma resposta com o `status` **pending** até que o comprador efetue o pagamento.

O campo `external_resource_url` possui uma URL que contém as instruções para que o comprador possa pagar. Você pode redirecioná-lo ou enviar o link para acesso.

> NOTE
>
> Nota
>
> O comprador tem de **3** a **5** dias para pagar, dependendo do meio de pagamento. Após essas datas, **você deve** cancelá-lo.

## Cancele um pagamento

Somente é possível cancelar pagamentos que se encontrem com status `pending` ou `in_process`.

As opções de pagamento em dinheiro devem ser pagas no prazo de 3 a 7 dias dependendo de cada caso.

O vencimento não é automático, então é necessário que efetue o [cancelamento do pagamento](/guides/manage-account/cancellations-and-refunds.es.md) logo após o vencimento.

Veja a [lista completa de vencimentos](https://www.mercadopago.com.ar/activities).

## Prazo de aprovação dos pagamentos

Cada meio de pagamento tem a sua própria data de aprovação, em alguns casos é imediata e, em outros a espera é de até 3 dias úteis.

Recomendamos que verifique os [prazos de aprovação por meio de pagamento](https://www.mercadopago.com.ar/ayuda/medios-de-pago-vendedores_221).

## Devoluções

Se for preciso devolver dinheiro ao comprador, utilize a API de Refunds. Todas as devoluções dos meios de pagamento em dinheiro são feitas na conta do MercadoPago do seu comprador.

Caso o comprador não possua uma, ele receberá um e-mail no endereço enviado no pagamento com instruções sobre como resgatar seu dinheiro.

Para mais informações, consulte a seção sobre [devoluções](/guides/manage-account/cancellations-and-refunds.es.md).


----[mcl, global]----

## Integrar o Webpay (Chile)

O Webpay é um dos meios de pagamento disponíveis no Chile. Para processar os pagamentos com Webpay, é necessário enviar o **RUT**, o **tipo de pessoa**, o **endereço de IP** do comprador e a **instituição financeira** que processará o pagamento.

> NOTE
>
> Nota
>
> Veja todas as instituições financeiras (_financial\_institutions_) disponíveis por meio do recurso [payment_methods](#obten-los-medios-de-pago-disponibles):

```json
{
  "id": "webpay",
  "name": "RedCompra (Webpay)",
  "payment_type_id": "bank_transfer",
  ...
  "financial_institutions": [
    {
      "id": "1234",
      "description": "Transbank"
    }
  ]
}
```

Para gerar o pagamento utilizando Webpay envie o `payment_method_id` **webpay**, o `identification number` e a `financial_institution`:

```php
<?php

require_once ('mercadopago.php');
MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 10000;
$payment->description = "Title of what you are paying for";
$payment->payer = array (
		"email" => "test_user_19653727@testuser.com",
		"identification" => array(
			"type" => "RUT",
			"number" => "76262349"
		),
		"entity_type" => "individual"
	);
$payment->transaction_details = array(
		"financial_institution" => 1234
	);
$payment->additional_info = array(
		"ip_address" => "127.0.0.1"
	);
$payment->callback_url = "http://www.your-site.com";
$payment->payment_method_id = "webpay";

$payment->save();

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_19653727@testuser.com");
payer.setIdentification(new Identification("RUT", 76262349));
payer.setEntityType("individual");

TransactionDetails transactionDetails = new TransactionDetails();
transactionDetails.financialInstitution = 1234;

AdditionalInfo additionalInfo = new AdditionalInfo();
additionalInfo.ipAddress = "127.0.0.1";

Payment payment = new Payment();
payment.setTransactionAmount(10000)
      .setDescription('Title of what you are paying for')
      .setPayer(payer)
      .setTransactionDetails(transactionDetails)
      .additionalInfo(additionalInfo)
      .callbackUrl("http://www.your-site.com")
      .setPaymentMethodId("webpay");

payment.save();

```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
  ransaction_amount: 10000,
  description: 'Title of what you are paying for',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: "URL",
      number: "76262349"
    },
    entity_type: "individual"
  },
  transaction_details: {
    financial_institution: 1234
  },
  additional_info: {
    ip_address: "127.0.0.1"
  },
  callback_url: "http://www.your-site.com",
  payment_method_id: "webpay"
}

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 10000
payment.description = 'Title of what you are paying for'
payment.payer = {
  email: 'test_user_3931694@testuser.com',
  identification: {
    type: "URL",
    number: "76262349"
  },
  entity_type: "individual"
}
payment.transaction_details = {
  financial_institution: 1234
}
payment.additional_info = {
  ip_address: "127.0.0.1"
}
payment.callback_url = "http://www.your-site.com"
payment.payment_method_id = "webpay"

payment.save();
```

> NOTE
>
> Nota
>
> Os `entity_type` esperados são `individual` (Pessoa Física) ou `association` (Pessoa Jurídica).

A resposta que receberá:

```json
{
	"id": 3692089,
	"date_created": "2017-04-27T16:53:03.000-04:00",
	"date_approved": null,
	"date_last_updated": "2017-04-27T16:53:03.000-04:00",
	"money_release_date": null,
	"operation_type": "regular_payment",
	"issuer_id": null,
	"payment_method_id": "webpay",
	"payment_type_id": "bank_transfer",
	"status": "pending",
	"status_detail": "pending_waiting_transfer",
	...
	"transaction_details": {
		...
		"external_resource_url": "https://www.mercadopago.com/mlc/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=251027719",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
}
```

Direcione seu cliente para a URL que encontrará no atributo `external_resource_url` dentro do `transaction_details` da resposta. Ao finalizar o pagamento, você será redirecionado a `callback_url` que indicar, e obterá o resultado do pagamento via [Webhooks](/guides/notifications/webhooks.pt.md).

------------
