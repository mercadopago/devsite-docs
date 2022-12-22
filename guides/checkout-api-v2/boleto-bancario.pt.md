----[mlb]----

# Boleto bancário

Com o Checkout Transparente do Mercado Pago, é possível oferecer, além de cartão e  Pix, **pagamentos através de boleto bancário**. Além disso, você pode **criar boletos bancários com descontos, multas e juros** para pagamentos antecipados ou fora do prazo estipulado na data de vencimento.

Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um **GET** com seu _Access token_ ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição. Se preferir, faça a requisição utilizando os SDKs abaixo:

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

Para oferecer **pagamentos com boleto bancário**, siga as etapas abaixo.

## Importar MercadoPago.js

Para realizar a integração do Checkout Transparente é preciso capturar os dados necessários para processar o pagamento.

Esta captura é feita a partir da inclusão da biblioteca MercadoPago.js em seu projeto, seguida do formulário de pagamento. Utilize o código abaixo para importar a biblioteca MercadoPago.js antes de adicionar o formulário de pagamento.

[[[
```html

<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]

## Configurar credencial

As credenciais são senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.

Esta é a primeira etapa de uma estrutura completa de códigos que deverá ser seguida para a correta integração dos pagamentos. Atente-se aos blocos abaixo e adicione aos códigos conforme indicado.


[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
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

## Enviar pagamento

Ao finalizar a inclusão do formulário de pagamento e obter os tipos de documento, é necessário encaminhar o e-mail do comprador, tipo e número de documento, o meio de pagamento utilizado e o detalhe do valor a ser pago utilizando nossa API de Pagamentos ou um de nossos SDKs.

Para configurar **pagamentos com boleto bancário**, envie um POST com os seguintes parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

| Tipo de pagamento  | Parâmetro  | Valor  |
| --- | --- | --- |
| Boleto  | `payment_method_id`  | `bolbradesco`  |

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "pec";
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
  payment_method_id: 'pec',
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
       .paymentMethodId("pec")
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
  payment_method_id: 'pec',
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
    PaymentMethodId = "pec",
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
    "payment_method_id": "pec",
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
      "payment_method_id": "pec",
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


A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento. Veja abaixo um exemplo de retorno.

[[[
```json
[
 {
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com.br/payments/1234567890/ticket?caller_id=12345678&hash=f7a2ac1e-7802-4bc9-9c4b-f70867b1d4a2",
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


## Criar boletos com multas, juros e descontos

Se você deseja oferecer **boletos bancários com descontos, multas e juros**, seja para pagamentos antecipados, seja para pagamentos efetuados após o vencimento, você pode criá-los diretamente via API do Mercado Pago, ou utilizando os seguintes SDKs:

[[[
```php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->description = "Titulo do produto";
 $payment->date_of_expiration = "2022-12-24T22:59:59.000-04:00";
 $payment->payment_method_id = "bolbradesco";
 $payment->transaction_amount = 100;

 $payer = new MercadoPago\Payer();
 $payer->first_name = "Test";
 $payer->last_name = "user";
 $payer->email = "test_user_123456@testuser.com";
 $payer->identification = array(
   "type" => "CPF",
   "number" => "19119119100"
 );
 $payment->payer = $payer;

 $payment->payment_method = array(
   "data" => array(
     "rules" => array(
       "discounts" => array(
         array(
          "value" => 5,
          "type" => "fixed",
          "limit_date" => "2022-12-10"
         )
       ),
       "fine" => array(
         "value" => 2,
         "type" => "percentage"
       ),
       "interest" => array(
         "value" => 0.03,
         "type" => "percentage"
       )
     )
   )
 );

 $payment->save();
 echo 'URL Boleto: ' . $payment->transaction_details->external_resource_url;

```
```nodeJS
var mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: 'YOUR_ACCESS_TOKEN'
});

var payment = {
  description: 'Título do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

mercadopago.payment.create(payment).then(function (data) {
  console.log('URL boleto: ' + data.body.transaction_details.external_resource_url);
}).catch(function (error) {
  console.log(error);
});

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

LocalDateTime dateOfExpiration = LocalDateTime.of(2022, 12, 24, 23, 59, 59);
PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Título do produto")
        .dateOfExpiration(OffsetDateTime.of(dateOfExpiration, ZoneOffset.UTC))
        .paymentMethodId("bolbradesco")
        .transactionAmount(new BigDecimal("100"))
        .payer(PaymentPayerRequest.builder()
            .firstName("Test")
            .lastName("User")
            .email("test_user_123456@testuser.com")
            .identification(IdentificationRequest.builder()
                .type("CPF")
                .number("19119119100")
                .build())
            .build())
        .paymentMethod(PaymentMethodRequest.builder()
            .data(PaymentDataRequest.builder()
                .rules(PaymentRulesRequest.builder()
                     .discounts(Collections.singletonList(
                          PaymentDiscountRequest.builder()
                               .value(new BigDecimal("5"))
                               .type("fixed")
                               .limitDate(LocalDate.of(2022, 12, 10))
                               .build()))
                     .fine(PaymentFeeRequest.builder()
                          .value(new BigDecimal("2"))
                          .type("percentage")
                          .build())
                     .interest(PaymentFeeRequest.builder()
                          .value(new BigDecimal("0.03"))
                          .type("percentage")
                          .build())
                     .build())
                 .build())
             .build())
         .build();

Payment payment = client.create(createRequest);
System.out.printf("URL boleto: %s", payment.getTransactionDetails().getExternalResourceUrl());
```
```ruby
require_relative 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
  description: 'Titulo do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

result = sdk.payment.create(payment_data)
puts result[:response]["transaction_details"]["external_resource_url"]
```
```csharp
using System;
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest {
    Description = "Titulo do produto",
    DateOfExpiration = new DateTime(2022, 12, 24, 23, 59, 59, 000, DateTimeKind.Local),
    PaymentMethodId = "bolbradesco",
    TransactionAmount = 100,
    Payer = new PaymentPayerRequest
    {
        FirstName = "Test",
        LastName = "User",
        Email = "test_user_123456@testuser.com",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "19119119100"
        }
    },
    PaymentMethod = new PaymentMethodRequest
    {
        Data = new PaymentDataRequest
        {
            Rules = new PaymentRulesRequest
            {
                Discounts = new List<PaymentDiscountRequest>()
                {
                    new PaymentDiscountRequest
                    {
                        Value = 5,
                        Type = "fixed",
                        LimitDate = new DateTime(2022, 12, 1)
                    }
                },
                Fine = new PaymentFeeRequest
                {
                    Value = 2,
                    Type = "percentage"
                },
                Interest = new PaymentFeeRequest
                {
                    Value = 1m,
                    Type = "percentage"
                }
            }
        }
    }
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.TransactionDetails.ExternalResourceUrl);
```
```python
import mercadopago

sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

payment_data = {
    "description": "Titulo do produto",
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "transaction_amount": 100,
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}

result = sdk.payment().create(payment_data)
print(result["response"]["transaction_details"]["external_resource_url"])
```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "description": "Titulo do produto",
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}'
```
]]]


Você deve preencher os campos para enviar um pagamento seguindo as especificações das tabelas abaixo:

|      CAMPO     |  TIPO  |                               DESCRIÇÃO                              |                           VALIDAÇÕES                          |
|:--------------:|:------:|:--------------------------------------------------------------------:|:-------------------------------------------------------------:|
| payment_method | Objeto | Objeto para manter as informações relacionadas ao meio de pagamento. | -                                                             |
| data           | Objeto | Objeto para manter os dados relacionados ao meio de pagamento.       | -                                                             |
| rules          | Objeto | Objeto para manter as regras relacionadas ao meio de pagamento.      | -                                                             |
| discounts      | Lista  | Lista com os descontos a serem praticados.                           | Atualmente apenas o primeiro desconto da lista será aplicado. |
| fine           | Objeto | Objeto para manter as informações relacionadas a multa.              | -                                                             |
| interest       | Objeto | Objeto para manter as informações relacionadas ao juros.             | -                                                             |

Dentro do campo **"Discounts"**, você deve substituir os valores seguindo as especificações abaixo:

|    CAMPO   |    TIPO    |                                                        DESCRIÇÃO                                                        |                                                               VALIDAÇÕES                                                              |
|:----------:|:----------:|:-----------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------:|
| value      | BigDecimal | Propriedade para definir o valor do desconto a ser aplicado quando o pagamento for efetuado até a data limite definida. | **Número de casas decimais**: 0 - 2. **Valor máximo**: Deve ser **positivo** e **menor ou igual** ao valor informado em "transaction_amount". |
| type       | String     | Propriedade para definir o tipo de cálculo sobre o valor informado em "value".                                          | **Valores possíveis**: "fixed".                                                                                                           |
| limit_date | Date       | Propriedade para definir a data limite para considerar o desconto.                                                      | **Formato**: yyyy-MM-dd. Data limite deve ser menor que data informada em "date_of_expiration".                                           |

Dentro do campo **"Fine"**, você deve substituir os valores seguindo as especificações abaixo:

| CAMPO |    TIPO    |                                                     DESCRIÇÃO                                                     |                                VALIDAÇÕES                                |
|:-----:|:----------:|:-----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|
| value | BigDecimal | Propriedade para definir o valor da multa a ser aplicada quando o pagamento for efetuado após data de vencimento. | **Número de casas decimais**: 0 - 2. **Valor máximo**: "2%" |
| type  | String     | Propriedade para definir o tipo de cálculo sobre o valor informado em "value".                                    | **Valores possíveis**: "percentage".                                         |

Dentro do campo **"Interest"**, você deve substituir os valores seguindo as especificações abaixo:

| CAMPO |    TIPO    |                                                           DESCRIÇÃO                                                          |                                   VALIDAÇÕES                                  |
|:-----:|:----------:|:----------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------:|
| value | BigDecimal | Propriedade para definir o valor de juros mensal a serem aplicados quando o pagamento for efetuado após data de vencimento. | **Número de casas decimais**: 0 - 2. **Valor máximo**:  "1%". |
| type  | String     | Propriedade para definir o tipo de cálculo sobre o valor informado em "value".                                               | Valores possíveis: "percentage".                                              |


A resposta retornará o seguinte resultado:

[[[
```json
{
  "id": 123456789,
  "status": "pending",
  "status_detail": "pending_waiting_payment",
  "payment_method": {
    "id": "bolbradesco",
    "type": "ticket",
    "data": {
      "rules": {
        "discounts": [
          {
            "value": 1,
            "type": "fixed",
            "limit_date": "2022-12-12"
          }
        ],
        "fine": {
          "value": 2,
          "type": "percentage"
        },
        "interest": {
          "value": 0.03,
          "type": "percentage"
        }
      }
    }
  },
  "transaction_details": {
    "net_received_amount": 0,
    "total_paid_amount": 100,
    "overpaid_amount": 0,
    "external_resource_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=e10c4695-49a0-475e-8adc-29a8055b9167",
    "installment_amount": 0,
    "financial_institution": null,
    "payment_method_reference_id": "1234567890"
  }
}
```
]]]

Nas tabelas a seguir você encontra as especificações de cada campo retornado no envio do pagamento:

|      CAMPO     |  TIPO  |                               DESCRIÇÃO                              |
|:--------------:|:------:|:--------------------------------------------------------------------:|
| payment_method | Objeto | Objeto para manter as informações relacionadas ao meio de pagamento. |
| id             | String | Identificador do meio de pagamento                                   |
| data           | Objeto | Objeto para manter os dados relacionados ao meio de pagamento        |
| rules          | Objeto | Objeto para manter as regras relacionadas ao meio de pagamento       |
| discounts      | Lista  | Lista com os descontos praticados                                    |
| fine           | Objeto | Objeto para manter as informações relacionadas a multa               |
| interest       | Objeto | Objeto para manter as informações relacionadas ao juros              |


Para o valor **“Discounts”** as especificações são as seguintes:

|      CAMPO     |    TIPO    |                                                                                                                             DESCRIÇÃO                                                                                                                             |
|:--------------:|:----------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propriedade com o valor do desconto a ser aplicado quando o pagamento for efetuado até a data limite definida.                                                                                                                                                    |
| type           | String     | Propriedade com o tipo de cálculo sobre o valor informado em "value".                                                                                                                                                                                               |
| limit_date     | Date       | Propriedade com a data limite para considerar o desconto.                                                                                                                                                                                                         |

Para o valor **“Fine”** as especificações são as seguintes:

|      CAMPO     |    TIPO    |                                                                                                                                  DESCRIÇÃO                                                                                                                                  |
|:--------------:|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propriedade com o valor da multa a ser aplicada quando o pagamento for efetuado após data de vencimento.                                                                                                                                                                    |
| type           | String     | Propriedade com o tipo de cálculo sobre o valor informado em "value".                                                                                                                                                                                                         |

Para o valor **“Interest”** as especificações são as seguintes:

|      CAMPO     |    TIPO    |                                                                                                                                                                                                                     DESCRIÇÃO                                                                                                                                                                                                                     |
|:--------------:|:----------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Propriedade para definir o valor de juros diários a serem aplicados quando o pagamento for efetuado após data de vencimento.                                                                                                                                                                                                                                                                                                                      |
| type           | String     | Propriedade para definir o tipo de cálculo sobre o valor informado em "value".                                                                                                                                                                                                                                                                                                                                                                      |


## Data de vencimento
A data de vencimento padrão para pagamentos com boleto é de 3 dias.Opcionalmente, é possível alterar essa data enviando o campo `date_of_expiration` na requisição de criação do pagamento definindo um período entre 1 e 30 dias a partir da data de emissão do boleto.

Para alterar a data de vencimento, utilize um dos códigos disponíveis abaixo.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

O prazo de aprovação do boleto é de até 48h úteis. Por isso, configure a data de expiração com no mínimo 3 dias para garantir que o pagamento seja abonado.

> WARNING
>
> Importante
>
> Caso o boleto seja efetuado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.

## Cancelar pagamento

Para evitar problemas de cobrança, é importante cancelar os pagamentos vencidos. Além disso, tenha em conta que **é possível cancelar apenas os pagamentos que se encontram pendentes ou em processo**. Se o vencimento de um pagamento ocorre em 30 dias, o cancelamento é automático e o status final do mesmo será `cancelado` ou `expirado`.

Para mais informações, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

------------
