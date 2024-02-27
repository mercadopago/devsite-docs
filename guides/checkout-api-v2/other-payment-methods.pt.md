# Outros meios de pagamento

----[mlb]----
Com o Checkout Transparente do Mercado Pago, é possível oferecer, além de cartão e Pix, **pagamentos através de boleto bancário e pagamento em lotérica**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

------------
----[mla]----
Com o Checkout Transparente do Mercado Pago, também é possível oferecer pagamentos com **Rapipago** e/ou **Pago Fácil**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

------------
----[mlm]----
Com o Checkout Transparente do Mercado Pago, também é possível oferecer pagamentos com **OXXO**, **Paycash**,  **Citibanamex**,  **Santander**, **BBVA Bancomer** e **Cartão Mercado Pago**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

------------
----[mpe]----
Com o Checkout Transparente do Mercado Pago, também é possível oferecer pagamentos através do **PagoEfectivo**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes.  

------------
----[mco]----
Com o Checkout Transparente do Mercado Pago, também é possível oferecer pagamentos com **Efecty**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

------------
----[mlu]----
Com o Checkout Transparente do Mercado Pago, também é possível oferecer pagamentos com **Abitab** e **Redpagos**.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **outros meios de pagamento** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

------------

Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um **GET** com seu _Access token_ ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição ou, se preferir, faça a requisição utilizando os SDKs abaixo.

[[[
```php
<?php
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");

  $client = new PaymentMethodClient();
  $payment_method = $client->get();

?>
```
```node
import { MercadoPagoConfig, PaymentMethods } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const paymentMethods = new PaymentMethods(client);

paymentMethods.get().then((result) => console.log(result))
  .catch((error) => console.log(error));
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

----[mlb]----
Para oferecer pagamentos com **boleto bancário** e/ou **pagamento em lotérica**, siga as etapas abaixo.

------------
----[mla]----
Para oferecer pagamentos com **Rapipago** e/ou **Pago Fácil**, siga as etapas abaixo.

------------
----[mlm]----
Para oferecer pagamentos com **OXXO**, **Paycash**,  **Citibanamex**,  **Santander**, **BBVA Bancomer** ou **Cartão Mercado Pago**, siga as etapas abaixo.

------------
----[mpe]----
Para oferecer pagamentos com **PagoEfectivo**, siga as etapas abaixo.

------------
----[mco]----
Para oferecer pagamentos com **Efecty**, siga as etapas abaixo.

------------
----[mlu]----
Para oferecer pagamentos com **Abitab** e/ou **Redpagos**, siga as etapas abaixo.

------------

## Importar MercadoPago.js

Para realizar a integração do Checkout Transparente é preciso capturar os dados necessários para processar o pagamento.

Esta captura é feita a partir da inclusão da biblioteca MercadoPago.js em seu projeto, seguida do formulário de pagamento. Utilize o código abaixo para importar a biblioteca MercadoPago.js antes de adicionar o formulário de pagamento.

[[[
```html

<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash

npm install @mercadopago/sdk-js
```
]]]

## Configurar credenciais

As credenciais são senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.

Esta é a primeira etapa de uma estrutura completa de código que deverá ser seguida para a correta integração dos pagamentos. Atente-se aos blocos abaixo para adicionar aos códigos conforme indicado.


[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript

import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

## Adicionar formulário de pagamento

Com a biblioteca MercadoPago.js incluída, adicione o formulário de pagamento abaixo ao seu projeto para garantir a captura segura dos dados dos compradores. Nesta etapa é importante utilizar a lista que você consultou para obter os meios de pagamento disponíveis para criar as opções de pagamento que deseja oferecer.

[[[
```html

  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nome</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Sobrenome</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número do documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
      </div>
    </div>
  </form>
```
]]]

----[mlb, mla, mpe, mco, mlu, mlc]----
## Obter tipos de documento

Após configurar a credencial, é preciso obter os tipos de documento que farão parte do preenchimento do formulário para pagamento. 

Incluindo o elemento do tipo `select` com o id: `id = docType` que está no formulário, será possível preencher automaticamente as opções disponíveis quando chamar a função a seguir:

[[[
```javascript

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }
```
]]]

------------

## Enviar pagamento

Ao finalizar a inclusão do formulário de pagamento e obter os tipos de documento, é necessário encaminhar o e-mail do comprador, tipo e número de documento, o meio de pagamento utilizado e o detalhe do valor a ser pago utilizando nossa API de Pagamentos ou um de nossos SDKs.

> NOTE
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo `X-Idempotency-Key`. Seu preenchimento é importante para garantir a execução e reexecução de requisições sem que haja situações indesejadas como, por exemplo, pagamentos em duplicidade.

----[mlb]----
Para configurar pagamentos com **boleto bancário** ou **pagamento em lotérica**, envie um POST com os seguintes parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Atenção
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

| Tipo de pagamento  | Parâmetro  | Valor  |
| --- | --- | --- |
| Boleto  | `payment_method_id`  | `bolbradesco`  |
| Pagamento em lotérica  | `payment_method_id`  | `pec`  | 

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\Client\Common\RequestOptions;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
 "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'PAYER_EMAIL',
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

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título do produto",
    PaymentMethodId = "bolbradesco",
    Payer = new PaymentPayerRequest
    {
        Email = "PAYER_EMAIL",
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
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "PAYER_EMAIL",
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

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
    "transaction_amount": 100,
    "description": "Titulo do produto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "test_user_12345@testuser.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "01234567890"
        }
    }
}'

```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento. Veja abaixo um exemplo de retorno.

[[[
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
]]]

> NOTE
>
> Nota
>
> O cliente tem entre 3 e 5 dias para pagar, dependendo do meio de pagamento. Após esse tempo, o pagamento deve ser cancelado.

## Data de vencimento

A data de vencimento padrão para pagamentos com boleto é de 3 dias. Opcionalmente, é possível alterar essa data enviando o campo `date_of_expiration` na requisição de criação do pagamento definindo um período entre 1 e 30 dias a partir da data de emissão do boleto. 

Para alterar a data de vencimento, utilize um dos códigos disponíveis abaixo. 

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

O prazo de aprovação do boleto é de até 48h úteis. Por isso, configure a data de expiração com no mínimo 3 dias para garantir que o pagamento seja abonado.

> WARNING
>
> Importante
>
> Caso o boleto seja pago depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar os pagamentos vencidos. Além disso, tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. Se o vencimento de um pagamento ocorre em 30 dias, o cancelamento é automático e o status final do mesmo será `cancelado` ou `expirado`.

Para mais informações, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------
----[mla]----

Para configurar pagamentos com **Rapipago** e/ou **Pago Fácil**, envie um **POST** com os parâmetros requeridos ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

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
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "rapipago",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

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

## Data de vencimento

É possível alterar a data de vencimento para pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação do pagamento. A data configurada deve ser entre 1 e 30 dias a partir da data de emissão do pagamento. 

Para alterar a data de vencimento, utilize um dos códigos disponíveis abaixo.

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

O prazo de creditação leva entre 1 e 2 dias úteis de acordo com o meio de pagamento. Por isso recomendamos que você defina a data de expiração com no mínimo 3 dias para garantir que o pagamento seja feito.

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar os pagamentos vencidos. Além disso, tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. 

Se o vencimento de um pagamento ocorre em 30 dias, o cancelamento é automático e o status final do mesmo será `cancelado` ou `expirado`. Para mais informações, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------
----[mlm]----

Para configurar pagamentos com  **OXXO**, **Paycash**,  **Citibanamex**,  **Santander**, **BBVA Bancomer** e/ou **Cartão Mercado Pago**, envie um **POST** com os devidos parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

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
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "oxxo",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

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

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar os pagamentos vencidos. Além disso, tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. 

Se o vencimento de um pagamento ocorre em 30 dias, o cancelamento é automático e o status final do mesmo será `cancelado` ou `expirado`. Para mais informações, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

## Locais de pagamento

Ao finalizar a integração, é importante compartilhar com os compradores a informação dos diferentes lugares em que podem realizar o pagamento. Veja o detalhe de cada um deles na tabela abaixo.

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
----[mpe]----

Para configurar pagamentos com **PagoEfectivo**, envie um **POST** com os parâmetros requeridos ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

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
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "pagoefectivo_atm",
  "payer": { "email": "test_user_12345@testuser.com" }
}'
```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

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

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar os pagamentos vencidos. Além disso, tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. 

Se o vencimento de um pagamento ocorre em 30 dias, o cancelamento é automático e o status final do mesmo será `cancelado` ou `expirado`. Para mais informações, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------
----[mco]----

Para configurar pagamentos com **Efecty**, envie um **POST** com os devidos parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar a sua Chave Privada (`access_token`). 

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

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
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 10000,
  "description": "Titulo del producto",
  "payment_method_id": "efecty",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

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

## Data de vencimento

É possível alterar a data de vencimento para pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação do pagamento. A data configurada deve estar entre 1 e 30 dias a partir da data de emissão. Para isso, utilize um dos códigos disponíveis abaixo.

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

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar pagamento

É importante cancelar um pagamento assim que o mesmo vencer para evitar problemas de cobrança. Os pagamentos em dinheiro devem ser pagos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que **apenas se pode cancelar os pagamentos que se encontram com estado pendente ou em processo**. Se a expiração de um pagamento ocorre aos 30 dias, o cancelamento é automático e o estado final será cancelado ou expirado.

Para mais detalhes sobre como cancelar um pagamento, veja seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------
----[mlu]----

Para configurar pagamentos com **Abitab** e/ou **Redpagos**, envie um POST com os seguintes parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

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
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "abitab",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

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

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar pagamentos assim que vencerem. Os pagamentos em dinheiro devem ser feitos entre 3 e 5 dias úteis de acordo com o tempo de cada um.

Tenha em conta que apenas se pode cancelar os pagamentos que se encontram com status 
`pendente` ou `em processo`. Se um pagamento vence dentro de 30 dias, o cancelamento é automático e o status final será `cancelado` ou `expirado`.

Para cancelar um pagamento, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------