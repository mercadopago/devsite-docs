# Integre outros meios de pagamento

----[mlb]----
Com o Checkout Transparente do Mercado Pago você pode oferecer **outras alternativas de meios de pagamento para seus clientes**.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Com o Checkout API do Mercado Pago você pode oferecer **outras alternativas de meios de pagamento para seus clientes**.
------------

----[mla]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.


## Consulta os meios de pagamento disponíveis

### Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Carga Virtual |
| `ticket` | Cobro Express |
| `atm` | Red Link |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública
Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
      .setDescription("Título do produto")
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_19653727@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título do produto",
    PaymentMethodId = "rapipago",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "rapipago",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
        "external_resource_url": "https://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Data de expiração de meios de pagamento em dinheiro

Opcionalmente é possível alterar a data de vencimento por padrão para pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação do pagamento. A data configurada deve estar entre 1 e 30 dias a partir da data de emissão.

[[[
```php
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
A data usa o formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

O prazo de creditação está entre 1 e 2 dias úteis de acordo com o meio de pagamento. Por isso recomendamos que você defina a data de expiração com no mínimo 3 dias para garantir que o pagamento seja feito.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) para executar a configuração.

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mlm]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

## Consulta os meios de pagamento disponíveis

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | OXXO |
| `ticket` | Paycash |
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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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
    "id": "paycash",
    "name": "PayCash",
    "payment_type_id": "ticket",
    "status": "active",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/paycash.gif",
    "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/paycash.gif",
    "deferred_capture": "unsupported",
    "settings": [],
    "additional_info_needed": [
      "identification_type",
      "identification_number",
      "entity_type"
    ],
    "min_allowed_amount": 20,
    "max_allowed_amount": 60000,
    "accreditation_time": 0,
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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública

Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).


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
      .setDescription("Título do produto")
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título do produto",
    PaymentMethodId = "oxxo",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_82045343@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test_user_82045343@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

## Comunique onde seus clientes podem pagar

Ao finalizar, é importante que compartilhe com seus clientes a informação dos distintos lugares em que pode realizar o pagamento.

| Meio de pagamento | Lojas disponíveis
| --- | --- |
| OXXO | OXXO
| PayCash | 7-Eleven |
| PayCash | Circle K |
| PayCash | Soriana |
| PayCash | Extra |
| PayCash | Calimax |
| PayCash | Santander |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mlu]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.


## Consulta os meios de pagamento disponíveis

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | Abitab |
| `ticket` | Redpagos |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública
Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.
Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
      .setDescription("Título do produto")
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título do produto",
    PaymentMethodId = "abitab",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_84162205@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "abitab",
    "payer": {
        "email": "test_user_84162205@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mco]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

## Consulta os meios de pagamento disponíveis

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | Efecty |
| `ticket` | Baloto |
| `bank_transfer` | PSE |


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública
Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
      .setDescription("Título do produto")
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 5000,
  description: 'Título do produto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 5000,
    Description = "Título do produto",
    PaymentMethodId = "efecty",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19549678@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 5000,
    "description": "Título do produto",
    "payment_method_id": "efecty",
    "payer": {
        "email": "test_user_19549678@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Data de expiração de meios de pagamento em dinheiro

Opcionalmente é possível alterar a data de vencimento por padrão para pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação do pagamento. A data configurada deve estar entre 1 e 30 dias a partir da data de emissão.

[[[
```php
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
A data usa o formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

O prazo de creditação está entre 1 e 2 dias úteis de acordo com o meio de pagamento. Por isso recomendamos que você defina a data de expiração com no mínimo 3 dias para garantir que o pagamento seja feito.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) para executar a configuração.

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.


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
.setDescription("Título do produto")
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.sua-loja.com")
.setPaymentMethodId("pse");
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 5000,
  description: 'Título do produto',
  additional_info: {
    ip_address: '127.0.0.1'
  },
  payer: {
    email: 'test_user_19549678@testuser.com',
    entity_type: 'individual'
  },
  transaction_details: {
    financial_institution: 1234
  },
  callback_url: 'http://www.sua-loja.com',
  payment_method_id: 'pse'
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 5000
    "description": 'Título do produto'
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "identification": {
            "type": "CC",
            "number": "76262349"
        },
        "entity_type": "individual"
    },
    "transaction_details": {
        "financial_institution": 1234
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "callback_url": "http://www.your-site.com"
    "payment_method_id": "pse"
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------

----[mlc]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.


## Consulta os meios de pagamento disponíveis

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | Sucursales Servipag |
| `bank_transfer` | Redcompra Webpay |


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública

Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
      .setDescription("Título do produto")
      .setPaymentMethodId("servipag")
      .setPayer(new Payer("test_user_15748052@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  description: 'Título do produto',
  transaction_amount: 100,
  payment_method_id: 'servipag',
  payer: {
    email: 'test_user_15748052@testuser.com'
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 5000,
    Description = "Título do produto",
    PaymentMethodId = "servipag",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_15748052@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "servipag",
    "payer": {
        "email": "test_user_15748052@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Receba com Webpay

Para receber pagamentos com Webpay, você deve enviar o endereço IP do comprador, a instituição financeira que processa o pagamento e, opcionalmente, a RUT e o tipo de pessoa.

> WARNING
>
> Importante
>
> Em breve, a integração com o WebPay será descontinuada. Recomendamos **fortemente** que utilize [outra solução de pagamento](https://www.mercadopago.cl/developers/pt/guides/resources/localization/payment-methods#bookmark_chile) para evitar problemas futuros.

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
transaction_amount: 100,
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
.setDescription("Título do produto")
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.sua-loja.com")
.setPaymentMethodId("webpay");

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payer: {
    email: 'test_user_15748052@testuser.com',
    entity_type: 'individual'
  },
  transaction_details: {
    financial_institution: 1234
  },
  additional_info: {
    ip_address: '127.0.0.1'
  },
  callback_url: 'http://www.sua-loja.com',
  payment_method_id: 'webpay'
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100
    "description": 'Título do produto'
    "payer": {
        "email": "test_user_15748052@testuser.com",
        "entity_type": "individual
    },
    "transaction_details": {
        "financial_institution": 1234
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "callback_url": "http://www.your-site.com"
    "payment_method_id": "webpay"
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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

Ao concluir o pagamento, o cliente será redirecionado para o `callback_url` que você indica com os seguintes parâmetros `payment_id=6725591786&payment_status=approved&external_reference=null&payment_method_id=webpay`.


## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

> WARNING
>
> Importante
>
> Tenha em conta que Webpay cancelará automaticamente o pagamento caso não se realize em 30 minutos.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago.cl/ayuda/Medios-de-pago-y-acreditaci-n_221) sempre que necessite.

------------


----[mpe]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.
1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

## Consulta os meios de pagamento disponíveis

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meios de pagamento

Além de cartões, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `atm` | PagoEfectivo |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout API anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública
Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para receber pagamentos em dinheiro envie o e-mail e documento do seu cliente e o método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
      .setDescription("Título do produto")
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 5000,
    Description = "Título do produto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_42972582@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test_user_42972582@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
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
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, deve cancelá-lo.

## Cancelar um pagamento

É importante que possa cancelar pagamentos assim que vençam para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Tempos de creditação do pagamento

Cada meio de pagamento possui sua própria data de creditação, em alguns casos é imediata e em outros pode demorar até 3 dias úteis.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-para-tus-compradores_2433) sempre que necessite.

------------

----[mlb]----

## Como funciona?

Para receber outros meios de pagamento, é importante ter em conta duas instâncias:

1. Primeiro, é preciso um frontend para coletar as informações necessárias para realizar o pagamento.

1. Segundo, um backend que tome os dados do pagamento e pode confirmar e fazer o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

## Consulta os meios de pagamento disponíveis

### Meios de pagamento

Além de cartões e Pix, também existem outras opções de pagamento que podem ser oferecidas no seu site.

| Tipo de meio de pagamento | Meio de pagamento |
| --- | --- |
| `ticket` | Boleto |
| `ticket` | Pagamento em lotérica |

### Obtenha os meios de pagamento disponíveis

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

new PaymentMethod();
MPResourceArray methods = PaymentMethod.all();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

O resultado será uma lista com os meios de pagamento e suas propriedades. Por exemplo, os meios de pagamento do `payment_type_id` que tenham como valor `ticket` se referem aos meios de pagamento em dinheiro e as de `bank_transfer` para transferências bancárias.

Tenha em conta que essa resposta devolverá todos os meios de pagamento. Por isso você precisa filtrar as formas de pagamento que queira oferecer de acordo com a [lista de pagamentos disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_meios_de_pagamento).

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
]
```

> Obtenha mais informação nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>
<span></span>

> CLIENT_SIDE
>
> h2
>
> Capture os dados para pagamento

### 1. Usa a biblioteca MercadoPago.js

**Lembre-se usar nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

> Esta documentação utiliza a nova versão de MercadoPago.js V2. Para ver a versão anterior, vá para a [seção de Checkout Transparente anterior](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/other-payment-ways).

### 2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação.

Use a lista que você consultou em [Obtenha os meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtenha_os_meios_de_pagamento_disponíveis) para criar as opções de pagamento que deseja oferecer.

Adicione o seguinte formulário com os estilos que quiser.

```html
<form action="/process_payment" method="post" id="paymentForm">
    <h3>Forma de Pagamento</h3>
    <div>
      <select class="form-control" id="paymentMethod" name="paymentMethod">
        <option>Selecione uma forma de pagamento</option>

        <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
        <option value="--PaymentId--">--PaymentTypeName--</option>
      </select>
    </div>
    <h3>Detalhe do comprador</h3>
    <div>
    <div>
        <label for="payerFirstName">Nome</label>
        <input id="payerFirstName" name="payerFirstName" type="text" value="Nome">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome">
      </div>
      <div>
        <label for="payerEmail">E-mail</label>
        <input id="payerEmail" name="payerEmail" type="text" value="test@test.com">
      </div>
      <div>
        <label for="docType">Tipo de documento</label>
        <select id="docType" name="docType" data-checkout="docType" type="text"></select>
      </div>
      <div>
        <label for="docNumber">Número do documento</label>
        <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text">
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
        <br>
      </div>
  </div>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública

Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Obtenha os dados para seu formulário

#### Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

<br>

> SERVER_SIDE
>
> h2
>
> Receber pagamentos com boleto bancário ou em lotéricas

Após [capturar os dados](#bookmark_capture_os_dados_para_pagamento) com o formulário, para receber pagamentos em boleto ou pagamento em lotérica envie o e-mail e documento do seu cliente e a método de pagamento e detalhe do valor.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]).

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
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título do produto")
       .paymentMethodId("bolbradesco")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .firstName("Test")
               .lastName("User")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
      type: 'CPF',
      number: '19119119100',
    },
    address: {
      zip_code: '06233200',
      street_name: 'Av. das Nações Unidas',
      street_number: '3003',
      neighborhood: 'Bonfim',
      city: 'Osasco',
      federal_unit: 'SP'
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título do produto",
    PaymentMethodId = "bolbradesco",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "191191191-00",
        },
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "191191191-00"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
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
        "external_resource_url": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
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

## Data de vencimento para pagamentos

### Pagamentos com boleto

A data de expiração padrão para pagamentos com boleto é de 3 dias. Opcionalmente, é possível alterar essa data enviando o campo `date_of_expiration` na requisição de criação do pagamento. 

> NOTE
>
> Importante
> 
> A data configurada deve estar entre 1 e 30 dias a partir da data de emissão do boleto.

[[[
```php
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
A data usa o formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

O prazo de aprovação do boleto é de até 48h úteis. Por isso, recomenda-se configurar a data de expiração com no mínimo 3 dias para garantir que o pagamento seja abonado.

> WARNING
>
> Importante
>
> Caso o boleto seja pago depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar um pagamento

É importante que se possa cancelar pagamentos vencidos para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final do mesmo será cancelado ou expirado.

Encontre toda informação na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Prazo de aprovação de pagamento

Cada meio de pagamento possui sua própria data de aprovação, em alguns casos a aprovação é imediata e em outros pode demorar até 3 dias úteis.

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
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/testing)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integração avançada
>
> Otimize sua integração e melhore a gestão das suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/advanced-integration)
