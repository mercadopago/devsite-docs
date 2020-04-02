# Integra otros medios de pago

Con la API de pagos de Mercado Pago puedes sumar **otras alternativas de medios de pago para ofrecer a tus clientes a la hora de realizar el pago**.

----[mla]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Provincia NET Pagos |
| `ticket` | Carga Virtual |
| `ticket` | Cobro Express |
| `atm` | Red Link |

## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods"); 

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

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

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "rapipago";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
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
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Título del producto')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "rapipago"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
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
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.ar/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mlm]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `ticket` | OXXO |
| `atm` | Citibanamex |
| `atm` | Santander |
| `atm` | BBVA Bancomer |
| `prepaid_card` | Tarjeta Mercado Pago |

## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

```json
[
  {
        "id": "oxxo",
        "name": "OXXO",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/oxxo.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/oxxo.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 10000,
        "accreditation_time": 2880,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "banamex",
        "name": "Citibanamex",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/banamex.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/banamex.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "serfin",
        "name": "Santander",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/serfin.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/serfin.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "bancomer",
        "name": "BBVA Bancomer",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bancomer.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bancomer.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 10,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "mercadopagocard",
        "name": "Tarjeta MercadoPago",
        "payment_type_id": "prepaid_card",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "deferred_capture": "supported",
        "settings": [
            {
                "card_number": {
                    "validation": "standard",
                    "length": 16
                },
                "bin": {
                    "pattern": "^539978",
                    "installments_pattern": "^539978",
                    "exclusion_pattern": null
                },
                "security_code": {
                    "length": 3,
                    "card_location": "back",
                    "mode": "mandatory"
                }
            }
        ],
        "additional_info_needed": [
            "cardholder_name"
        ],
        "min_allowed_amount": 5,
        "max_allowed_amount": 300000,
        "accreditation_time": 1440,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "oxxo";
  $payment->payer = array(
    "email" => "test_user_82045343@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Título del producto')
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "oxxo"
payment.payer = {
  email: "test_user_82045343@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "oxxo",
    Payer = new Payer(){
        Email = "test_user_82045343@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "oxxo",
  payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24304329",
        "verification_code": "882430432923032000100001",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlm/payments/sandbox/ticket/helper?payment_id=24304328&payment_method_reference_id=24304329&caller_id=514522042&hash=00658b9b-8bce-4f6d-a4f6-35f68731eeb3",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
    }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.mx/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.mx/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

## Comunica dónde pueden pagar tus clientes

Al finalizar, es importante que compartas con tus clientes la información de los distintos lugares en los que puede pagar.

Medio de pago | Tiendas disponibles
---------------- | ------------------
OXXO | OXXO
BBVA Bancomer | 7-Eleven
BBVA Bancomer | Extra
BBVA Bancomer | K
BBVA Bancomer | Círculo K
BBVA Bancomer | Farmacias del Ahorro
BBVA Bancomer | Casa Ley
BBVA Bancomer | BBVA Bancomer
Citibanamex| Chedraui
Citibanamex| Telecomm
Citibanamex| Citibanamex

------------

----[mlu]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `ticket` | Abitab |
| `ticket` | Redpagos |

## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods"); 

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

```json

[
 {
        "id": "abitab",
        "name": "Abitab",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/abitab.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/abitab.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "redpagos",
        "name": "Redpagos",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/redpagos.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/redpagos.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "abitab";
  $payment->payer = array(
    "email" => "test_user_84162205@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Título del producto')
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "abitab"
payment.payer = {
  email: "test_user_84162205@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_84162205@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "abitab",
  payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308188",
        "verification_code": "24308188",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlu/payments/sandbox/ticket/helper?payment_id=24308187&payment_method_reference_id=24308188&caller_id=528372970&hash=f24ad377-9287-4fc5-a8f4-13786965b7b3",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.uy/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.uy/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mco]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `ticket` | Efecty |
| `ticket` | Davivienda |
| `ticket` | Baloto |
| `bank_transfer` | PSE |


## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods"); 

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

```json
[
  {
        "id": "efecty",
        "name": "Efecty",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/efecty.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/efecty.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5000,
        "max_allowed_amount": 4000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "davivienda",
        "name": "Davivienda",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/davivienda.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/davivienda.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1600,
        "max_allowed_amount": 150000000,
        "accreditation_time": 10080,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "baloto",
        "name": "Baloto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/baloto.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/baloto.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1500,
        "max_allowed_amount": 1000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "pse",
        "name": "PSE",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pse.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pse.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 1600,
        "max_allowed_amount": 30000000,
        "accreditation_time": 30,
        "financial_institutions": [
            …,
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 5000;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "efecty";
  $payment->payer = array(
    "email" => "test_user_19549678@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 5000,
  description: 'Título del producto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(5000)
      .setDescription('Título del producto')
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Título del producto'
payment.payment_method_id = "efecty"
payment.payer = {
  email: "test_user_19549678@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("5000"),
    Description = "Título del producto",
    PaymentMethodId = "efecty",
    Payer = new Payer(){
        Email = "test_user_19549678@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 5000,
  description: "Título del producto",
  payment_method_id: "efecty",
  payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24308386",
        "verification_code": "24308386",
        "net_received_amount": 0,
        "total_paid_amount": 5000,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mco/payments/sandbox/ticket/helper?payment_id=24308387&payment_method_reference_id=24308386&caller_id=537481120&hash=e9266f07-6ed0-40a1-b5f3-d905d2af3285",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.co/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.co/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mlc]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `ticket` | Sucursales Servipag |
| `bank_transfer` | Redcompra Webpay |


## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

```json
[
 {
        "id": "servipag",
        "name": "Sucursales Servipag",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/servipag.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/servipag.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1,
        "max_allowed_amount": 500000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
         ]
    },
 {
        "id": "webpay",
        "name": "Redcompra Webpay",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/webpay.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/webpay.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 50,
        "max_allowed_amount": 3000000,
        "accreditation_time": 20,
        "financial_institutions": [
            {
                "id": "1234",
                "description": "Transbank"
            }
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "servipag";
  $payment->payer = array(
    "email" => "test_user_15748052@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'servipag',
  payer: {
    email: 'test_user_15748052@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Título del producto')
      .setPaymentMethodId("servipag")
      .setPayer(new Payer("test_user_15748052@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "servipag"
payment.payer = {
  email: "test_user_15748052@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "servipag",
    Payer = new Payer(){
        Email = "test_user_15748052@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "servipag",
  payer: { email: "test_user_15748052@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308616",
        "verification_code": "24308615",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlc/payments/sandbox/ticket/helper?payment_id=24308615&payment_method_reference_id=24308616&caller_id=537486028&hash=ca6419f2-6f4f-4c67-a8ef-43124d195807",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

> WARNING
>
> Importante
>
> Ten en cuenta que Webpay cancela automáticamente si no se realiza el pago a los 30 minutos.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.cl/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.cl/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mpe]----

## Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| ----------------------------- | --------------------------------- |
| `atm` | PagoEfectivo |


## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

```json
[
  {
      "id": "pagoefectivo_atm",
      "name": "BCP, BBVA Continental u otros",
      "payment_type_id": "atm",
      "status": "active",
      "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "deferred_capture": "does_not_apply",
      "settings": [],
      "additional_info_needed": [],
      "min_allowed_amount": 5,
      "max_allowed_amount": 10000,
      "accreditation_time": 2880,
      "financial_institutions": [],
      "processing_modes": [
          "aggregator"
      ]
  }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "pagoefectivo_atm";
  $payment->payer = array(
    "email" => "test_user_42972582@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Título del producto')
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "pagoefectivo_atm"
payment.payer = {
  email: "test_user_42972582@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new Payer(){
        Email = "test_user_42972582@testuser.com"
  }
};

payment.Save();
//...
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "pagoefectivo_atm",
  payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
  {
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,

    "order": {},
    "external_reference": null,
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "payment_method_reference_id": "123457986",
        "verification_code": "24308767",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mpe/payments/sandbox/atm/helper?payment_id=24308766&payment_method_reference_id=24308767&caller_id=537490079&hash=c96a61b0-10f4-40f6-afff-82fc0f0923da",
        "installment_amount": 0,
        "financial_institution": "PagoEfectivo",
        "payable_deferral_period": null,
        "acquirer_reference": null
    }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.pe/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.pe/ayuda/Medios-de-pago-para-tus-compradores_2433) siempre que lo necesites.

------------

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago.com.ar/developers/es/guides/payments/api/advanced-integration)
