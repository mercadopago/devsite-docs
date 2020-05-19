# Integre outros meios de pagamento

Com a API de pagamentos do Mercado Pago você pode oferecer **outras alternativas de meios de pagamento para seus clientes**.

----[mla]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Provincia NET Pagos |
| `ticket` | Carga Virtual |
| `ticket` | Cobro Express |
| `atm` | Red Link |

## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título do produto')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título do produto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

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
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mlm]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | OXXO |
| `atm` | Citibanamex |
| `atm` | Santander |
| `atm` | BBVA Bancomer |
| `prepaid_card` | Tarjeta Mercado Pago |

## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título do produto')
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título do produto",
    PaymentMethodId = "oxxo",
    Payer = new Payer(){
        Email = "test_user_82045343@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "oxxo",
  payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24304329",
        "verification_code": "882430432923032000100001",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlm/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
    }
  }
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

## Comunique onde seus clientes podem pagar

Ao finalizar, é importante que compartilhe com seus clientes a informação dos distintos lugares em que pode realizar o pagamento.

| Meio de pagamento | Lojas disponíveis
| --- | ---|
| OXXO | OXXO
| BBVA Bancomer | 7-Eleven |
| BBVA Bancomer | K |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mlu]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | Abitab |
| `ticket` | Redpagos |

## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título do produto')
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título do produto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_84162205@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "abitab",
  payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308188",
        "verification_code": "24308188",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlu/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mco]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | Efecty |
| `ticket` | Davivienda |
| `ticket` | Baloto |
| `bank_transfer` | PSE |


## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 5000;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(5000f)
      .setDescription('Título do produto')
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("5000"),
    Description = "Título do produto",
    PaymentMethodId = "efecty",
    Payer = new Payer(){
        Email = "test_user_19549678@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 5000,
  description: "Título do produto",
  payment_method_id: "efecty",
  payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24308386",
        "verification_code": "24308386",
        "net_received_amount": 0,
        "total_paid_amount": 5000,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mco/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Receba com PSE

Para receber pagamentos PSE, é preciso enviar a instituição financeira que processa o pagamento.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título do produto";
$payment->payer = array (
"email" => "test_user_19549678@testuser.com",
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
$payment->callback_url = "http://www.sua-loja.com";
$payment->payment_method_id = "pse";

$payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
transaction_amount: 5000,
description: 'Título do produto',
payer: {
email: 'test_user_19549678@testuser.com',
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
callback_url: "http://www.sua-loja.com",
payment_method_id: "pse"
}

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_19549678@testuser.com");
payer.setIdentification(new Identification("CC", 76262349));
payer.setEntityType("individual");

TransactionDetails transactionDetails = new TransactionDetails();
transactionDetails.financialInstitution = 1234;

AdditionalInfo additionalInfo = new AdditionalInfo();
additionalInfo.ipAddress = "127.0.0.1";

Payment payment = new Payment();
payment.setTransactionAmount(5000f)
.setDescription('Título do produto')
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.sua-loja.com")
.setPaymentMethodId("pse");
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Título do produto'
payment.payer = {
email: 'test_user_19549678@testuser.com',
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
payment.callback_url = "http://www.sua-loja.com"
payment.payment_method_id = "pse"

payment.save();
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments?access_token=<access_token>' \
    -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 5000,
  description: "Título do produto",
  payment_method_id: "pse",
  payer: { email: "test_user_19549678@testuser.com" },
  transaction_details: { financial_institution: 1234 }
}'
```
]]]

A resposta mostrará o estado pendente até que o comprador realize o pagamento.

```json
[
 {
    ...,
	"status": "pending",
	"status_detail": "pending_waiting_transfer"
    ...,
	"transaction_details": {
		...,
		"external_resource_url": "https://www.mercadopago.com/mco/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
 }
]
```
No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

Ao concluir o pagamento, o cliente será redirecionado para o `callback_url` que você especificar.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mlc]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | Sucursales Servipag |
| `bank_transfer` | Redcompra Webpay |


## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'servipag',
  payer: {
    email: 'test_user_15748052@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título do produto')
      .setPaymentMethodId("servipag")
      .setPayer(new Payer("test_user_15748052@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título do produto",
    PaymentMethodId = "servipag",
    Payer = new Payer(){
        Email = "test_user_15748052@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "servipag",
  payer: { email: "test_user_15748052@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308616",
        "verification_code": "24308615",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlc/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Receba com Webpay

Para receber pagamentos com Webpay, você deve enviar o endereço IP do comprador, a instituição financeira que processa o pagamento e, opcionalmente, a RUT e o tipo de pessoa.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 100;
$payment->description = "Título do produto";
$payment->payer = array (
"email" => "test_user_15748052@testuser.com",
"entity_type" => "individual"
);
$payment->transaction_details = array(
"financial_institution" => 1234
);
$payment->additional_info = array(
"ip_address" => "127.0.0.1"
);
$payment->callback_url = "http://www.sua-loja.com";
$payment->payment_method_id = "webpay";

$payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
ransaction_amount: 100,
description: 'Título do produto',
payer: {
email: 'test_user_15748052@testuser.com',
entity_type: "individual"
},
transaction_details: {
financial_institution: 1234
},
additional_info: {
ip_address: "127.0.0.1"
},
callback_url: "http://www.sua-loja.com",
payment_method_id: "webpay"
}

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_15748052@testuser.com");
payer.setEntityType("individual");

TransactionDetails transactionDetails = new TransactionDetails();
transactionDetails.financialInstitution = 1234;

AdditionalInfo additionalInfo = new AdditionalInfo();
additionalInfo.ipAddress = "127.0.0.1";

Payment payment = new Payment();
payment.setTransactionAmount(100f)
.setDescription('Título do produto')
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.sua-loja.com")
.setPaymentMethodId("webpay");

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
payment.payer = {
email: 'test_user_15748052@testuser.com',
entity_type: "individual"
}
payment.transaction_details = {
financial_institution: 1234
}
payment.additional_info = {
ip_address: "127.0.0.1"
}
payment.callback_url = "http://www.sua-loja.com"
payment.payment_method_id = "webpay"

payment.save();
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments?access_token=<access_token>' \
    -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "webpay",
  payer: {
    email: "test_user_15748052@testuser.com",
    identification: {
    type: "RUT",
    number: 76262349
},
  entity_type: "individual"
},
  transaction_details: {
    financial_institution: 1234
},
  additional_info: {
  ip_address: “127.0.0.1”
},
  callback_url: "http://www.sua-loja.com"
}'
```
]]]

> O tipo de entidade esperado é `individual` (pessoas) ou `association` (empresas).

A resposta mostrará o estado pendente até que o comprador realize o pagamento.

```json
[
 {
    ...,
	"status": "pending",
	"status_detail": "pending_waiting_transfer"
    ...,
	"transaction_details": {
		...,
		"external_resource_url": "https://www.mercadopago.com/mlc/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
 }
]
```

No campo external_resource_url você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

Al concluir o pagamento, o cliente será redirecionado para o `callback_url` que você indica com os seguintes parâmetros `payment_id=6725591786&payment_status=approved&external_reference=null&payment_method_id=webpay`.


## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

> WARNING
>
> Importante
>
> Tenha em conta que Webpay cancelará automaticamente o pagamento caso não se realize em 30 minutos.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago.cl/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago.cl/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------


----[mpe]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `atm` | PagoEfectivo |


## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro envie o e-mail do seu cliente e o detalhe do valor e método de pagamento.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título do produto";
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
  description: 'Título do produto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título do produto')
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título do produto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título do produto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new Payer(){
        Email = "test_user_42972582@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "pagoefectivo_atm",
  payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

```json
[
  {
    ...,
    "id": 5466310457,
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

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-para-tus-compradores_2433) sempre que necessite.

------------

----[mlb]----

## Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | ---|
| `ticket` | Boleto |
| `ticket` | Pagamento em lotérica |

## Obtenha os meios de pagamento disponíveis

Consulte os meios de pagamento disponíveis sempre que necessite.

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

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

```json
[
    {
        "id": "bolbradesco",
        "name": "Boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bolbradesco.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bolbradesco.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "pec",
        "name": "Pagamento na lotérica sem boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/).

## Receba com boleto ou pagamento em lotérica

Para receber pagamentos em boleto ou pagamento em lotérica envie os detalhes de valor e meio de pagamento além dos dados de identificação e endereço do seu comprador.

[[[
```php
<?php  

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "bolbradesco";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
         "street_number" => "3003",
         "neighborhood" => "Bonfim",
         "city" => "Osasco",
         "federal_unit" => "SP"
      )
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
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
       .setDescription('Título do produto')
       .setPaymentMethodId("bolbradesco")
       .setPayer(new Payer()
           .setEmail("test@test.com")
           .setFirstName("Test")
           .setLastName("User")
           .setIdentification(new Identification()
               .setType("CPF")
               .setNumber("19119119100"))
           .setAddress(new Address()
               .setZipCode("06233200")
               .setStreetName("Av. das Nações Unidas")
               .setStreetNumber(3003)
               .setNeighborhood("Bonfim")
               .setCity("Osasco")
               .setFederalUnit("SP"))
);

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_data = {
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "bolbradesco",
  payer: {
    email: "test@test.com",
    first_name: "Test",
    last_name: "User",
    identification: {
        type: "CPF",
        number: "191191191-00"
    },
    address: {
        zip_code: "06233-200",
        street_name: "Av. das Nações Unidas",
        street_number: "3003",
        neighborhood: "Bonfim",
        city: "Osasco",
        federal_unit: "SP"
    }
  }
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("105"),
    Description = "Título do produto",
    PaymentMethodId = "bolbradesco",
    Payer = new Payer(){
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new Identification(){
            Type = "CPF",
            Number = "191191191-00"
        },
        Address = new Address(){
            ZipCode = "06233-200",
            StreetName = "Av. das Nações Unidas",
            StreetNumber = "3003",
            Neighborhood = "Bonfim",
            City = "Osasco",
            FederalUnit = "SP"

        }
    }
};

payment.Save();

```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
      "transaction_amount": 100,
      "description": "Título do produto",
      "payment_method_id": "bolbradesco",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
]]]

<br>
A resposta mostrará o estado pendente até que o comprador realize o pagamento. O ID do cupom de pagamento é igual ao ID da transação no Mercado Pago.

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
        "external_resource_url": "http://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
]
```

No campo `external_resource_url` você encontrará um endereço que contêm as instruções para que o comprador possa pagar. Você pode redirecioná-lo ao link para que acesse.

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 días para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 días úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 días, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/cancellations-and-refunds/).

## Prazo de aprovação de pagamento

Cada meio de pagamento possui sua própria data de aprovação, em alguns casos a aprovação é imediata e em outros pode demorar até 3 días úteis.

Revise os [tempos de aprovação por meio de pagamento](https://www.mercadopago.com.br/ajuda/meios-de-pagamento-parcelamento_265) sempre que necessite.

------------

---
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Teste sua integração
>
> Revise que esteja tudo bem com sua integração com usuários de teste.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integração avançada
>
> Otimize sua integração e melhore a gestão das suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/advanced-integration)
