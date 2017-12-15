# Otros medios de pago

Existen otros medios de pago en cada país además de tarjetas de crédito o débito, con los que puedes recibir pagos. En su mayoría son lo que llamamos medios de pago "offline" o "en efectivo".

Los tipos de medio de pago disponibles son:

* ticket
* atm
* bank_transfer
* prepaid_card

## Obtén los medios de pago disponibles

Puedes obtener el listado de medios de pago disponibles realizando un _request_ `HTTP GET`:

[[[
```php
<?php

  require ('mercadopago.php');
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

El resultado será un _array_ con los medios de pago y sus propiedades:

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

## Recibir pagos con un medio de pago en efectivo

Para poder recibir pagos de medio en efectivo solamente debes recolectar el `email` del comprador. Luego es necesario hacer un request `HTTP POST` enviando el `transaction_amount`, `payment_method_id` y el `email` recolectado:

[[[
```php
<?php  

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
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
payment.description = 'Title of what you are paying for'
payment.payment_method_id = "rapipago"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
]]]

Respuesta:

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

Recibirás una respuesta con un `status` **pending** hasta que el comprador realice el pago.

En el campo `external_resource_url` tienes una url que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el _link_ para acceda.

> NOTE
>
> Nota
>
> Tu comprador tiene entre **3** a **5** días para pagar dependiendo del medio de pago. Luego de estas fechas **debes** cancelarlo.

## Cancelar un pago

Únicamente puedes cancelar pagos que se encuentren en un estado `pending` o `in_process`.

Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días dependiendo del vencimiento de cada uno.

El vencimiento de estos no es automático, por lo cuál es necesario que ejecutes la [cancelación del pago](/guides/manage-account/cancellations-and-refunds.es.md) luego del vencimiento.

Puedes ver el [listado de vencimientos completo](https://www.mercadopago.com.ar/activities).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos esta es inmediata y en otros la demora es de hasta 3 días hábiles.

Recomendamos revisar los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.ar/ayuda/medios-de-pago-vendedores_221).

## Devoluciones

Si necesitas devolver el dinero a tu comprador podrás hacerlo con la API de *Refunds*. Todas las devoluciones de medios de pago en efectivo son devueltas en la cuenta de Mercado Pago de tu comprador.

Si este no cuenta con una, recibirá un email en la dirección enviada en el pago con instrucciones de cómo retirar su dinero.

Para más información puedes ver el artículo sobre [devoluciones](/guides/manage-account/cancellations-and-refunds.es.md).

----[mcl, global]----

## Integrar Webpay (Chile)

Webpay es uno de los medios de pago disponibles en Chile. Para poder procesar pagos con ellos es necesario que envíes el **RUT**, **tipo de persona**, **dirección IP** del comprador, y la **institución financiera** que procesará el pago.

> NOTE
>
> Nota
>
> Consulta todas las instituciones financieras (_financial\_institutions_) que tienes disponibles a través del recurso [payment_methods](#obten-los-medios-de-pago-disponibles):


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

Para generar el pago utilizando Webpay debes enviar el `payment_method_id` **webpay**, el `identification number` y el `financial_institution`:

[[[
```php
<?php

require ('mercadopago.php');
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
]]]

> NOTE
>
> Nota
>
> Los `entity_type` esperados son `individual` (Personas) o `association` (Empresas).

La respuesta que recibirás:

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

Dirige a tu cliente a la URL que encontrarás en el atributo `external_resource_url` dentro de `transaction_details` de la respuesta. Al finalizar el pago, será redirigido a la `callback_url` que indiques, y te llegará el resultado del pago vía [Webhooks](/guides/notifications/webhooks.es.md).

------------


----[mco, global]----

## Integrar PSE (Colombia)

> NOTE
>
> Nota
>
> Consulta todas las instituciones financieras (_financial\_institutions_) que tienes disponibles a través del recurso [payment_methods](#obten-los-medios-de-pago-disponibles):

Para generar el pago utilizando PSE debes enviar el `payment_method_id` **pse** y el `financial_institution`:

```json
{
  "id": "pse",
  "name": "PSE",
  "payment_type_id": "bank_transfer",
  ...
  "financial_institutions": [
    {
      "id": "1234",
      "description": "financial_institution"
    }
  ]
}
```

Redirige a tu cliente a la URL que encontrarás en el atributo `external_resource_url` dentro de `transaction_details` de la respuesta. Al finalizar el pago en PSE, será redirigido a la `callback_url` que indiques, y te llegará el resultado del pago vía [Webhooks](/guides/notifications/webhooks.es.md).


> NOTE
>
> Nota
>
> Las preferencias de pago en PSE vencen a los 20 minutos si es que no se finalizó el flujo de pago, si ocurre esto, se informará mediante una notificación webhook.


[[[
```php
<?php

require ('mercadopago.php');
MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 10000;
$payment->description = "Title of what you are paying for";
$payment->payer = array (
		"email" => "test_user_19653727@testuser.com",
		"identification" => array(
			"type" => "CC",
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
$payment->payment_method_id = "pse";

$payment->save();

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_19653727@testuser.com");
payer.setIdentification(new Identification("CC", 76262349));
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
      .setPaymentMethodId("pse");

payment.save();

```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
  transaction_amount: 10000,
  description: 'Title of what you are paying for',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: "CC",
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
  payment_method_id: "pse"
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
    type: "CC",
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
payment.payment_method_id = "pse"

payment.save();
```
]]]

> NOTE
>
> Nota
>
> Los `entity_type` esperados son `individual` (Personas) o `association` (Empresas).

La respuesta que recibirás:

```json
{
	"id": 3692089,
	"date_created": "2017-04-27T16:53:03.000-04:00",
	"date_approved": null,
	"date_last_updated": "2017-04-27T16:53:03.000-04:00",
	"money_release_date": null,
	"operation_type": "regular_payment",
	"issuer_id": null,
	"payment_method_id": "pse",
	"payment_type_id": "bank_transfer",
	"status": "pending",
	"status_detail": "pending_waiting_transfer",
	...
	"transaction_details": {
		...
		"external_resource_url": "https://www.mercadopago.com/mco/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=251027719",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
}

------------
