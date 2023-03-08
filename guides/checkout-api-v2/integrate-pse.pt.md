----[mco]----
# PSE

Com o Checkout Transparente do Mercado Pago você pode oferecer pagamentos com **PSE - Pagos Seguros en Línea -**, serviço que permite fazer compras e pagamentos pela Internet debitando recursos online diretamente da poupança, conta corrente ou depósito eletrônico.

Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um **GET** com seu _Access token_ ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição ou, se preferir, faça a requisição utilizando nossos SDKs abaixo.

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

Para oferecer pagamentos com **PSE**, siga as etapas abaixo.

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

Esta é a primeira etapa de uma estrutura completa de código que deverá ser seguida para a correta integração dos pagamentos. Atente-se aos blocos abaixo para adicionar aos códigos conforme indicado.


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

Para configurar pagamentos com **PSE**, envie um **POST** com os devidos parâmetros ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

> WARNING
>
> Importante
>
> Para esta etapa, ao realizar a requisição via API ou SDKs, é necessário enviar sua Chave Privada - Access token.

[[[
```php

<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payment_method_id = "pse";
$payment->additional_info = array(
  "ip_address" => "127.0.0.1"
);
$payment->transaction_details = array(
  "financial_institution" => '1009'
);
$payment->callback_url = "http://www.your-site.com";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->identification = array(
     "type" => $_POST['identificationType'],
     "number" => $_POST['identificationNumber']
);
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
    'status' => $payment->status,
    'status_detail' => $payment->status_detail,
    'id' => $payment->id
);
echo json_encode($response);

?>
```
```node

const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment = req.body;


var payment_data = {
 	transaction_amount: 5000,
 	description: 'Título del producto',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: payment.email,
 		identification: {
 			type: payment.identificationType,
 			number: payment.identificationNumber
 		}
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: '1009'
 	},
 	callback_url: 'http://www.your-site.com'
};


mercadopago.payment.save(payment_data)
 	.then(function(response) {
 		res.status(response.status).json({
 			status: response.body.status,
 			status_detail: response.body.status_detail,
 			id: response.body.id,
 		});
 	})
 	.catch(function(error) {
 		res.status(error.status).send(error);
 	});

```
```java
  MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

  PaymentClient client = new PaymentClient();


  IdentificationRequest identification =
  	IdentificationRequest.builder()
  	.type(request.getPayer().getIdentification().getType())
  	.number(request.getPayer().getIdentification().getNumber())
  	.build();


  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.type("customer")
  	.email("test_payer_9999999@testuser.com")
  	.entityType("individual")
  	.firstName("Test")
  	.lastName("User")
  	.identification(identification)
  	.build();


  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();


  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution("1009")
  	.build();


  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("description")
  	.paymentMethodId("pse")
  	.additionalInfo(additionalInfo)
  	.transactionDetails(transactionDetails)
  	.notificationUrl("https://your-site.com")
  	.payer(payer)
  	.build();


  client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

  transaction_amount: 5000,
  description: "description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: "1009"
  },
  callback_url: "https://your-site.com"
  payer: {
    type: "customer",
    email: "test_payer_9999999@testuser.com",
    entity_type: "individual",
    first_name: "Test",
    last_name: "User",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]

```
```csharp

using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var identification = new IdentificationRequest() {
  Type = request.Payer.Identification.Type,
    Number = request.Payer.Identification.Number
};

var payer = new PaymentPayerRequest() {
  Type = "customer",
    Email = "test_payer_9999999@testuser.com",
    EntityType = "individual",
    FirstName = "Test",
    LastName = "User",
    Identification = identification
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = "1009"
};

var paymentCreateRequest = new PaymentCreateRequest() {
  TransactionAmount = 5000,
    Description = "description",
    PaymentMethodId = "pse",
    AdditionalInfo = additionalInfo,
    TransactionDetails = transactionDetails,
    CallbackUrl = "https://your-site.com",
    Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": 5000,
   "description": "description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": "1009"
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "type": "customer",
       "email": "test_payer_9999999@testuser.com",
       "entity_type": "individual",
       "first_name": "Test",
       "last_name": "User",
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "pse",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "identification": {
            "type": "CC",
            "number": "76262349"
        }
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "transaction_details": {
        "financial_institution": "1009"
    },
    "callback_url": "http://www.your-site.com"
}'

```
]]]

Os seguintes campos para enviar um pagamento são **obrigatórios** e você deve preenchê-los seguindo as especificações da tabela abaixo:

|                   Campo                   |                                                                                                         Descrição                                                                                                         | Possíveis valores /Validações | Chamado para obter os valores                                                                                      |
|:-----------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|------------------------------|--------------------------------------------------------------------------------------------------------------------|
| transaction_details.financial_institution | Banco informado no POST para efetuar a transferência eletrônica. A lista de bancos deve ser mostrada ao usuário e permitida a seleção. A lista é atualizada, por isso é recomendável consumir as informações a cada hora. | -                            | https://api.mercadolibre.com/v1/payment_methods/search?public_key=YOUR_PUBLIC_KEY                                  |
| payer.entity_type                         | Tipo de pessoa, física ou jurídica.                                                                                                                                                                                       | *individual* o *association*     | -                                                                                                                  |
| payer.identification                      | Tipo e número do documento do comprador.                                                                                                                                                                                  | -                            | curl -X GET \ 'https://api.mercadopago.com/v1/identification_types' \ -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' |
| additional_info.ip_address                | IP address do comprador, onde o pagamento é gerado.                                                                                                                                                                       | -                            | -                                                                                                                  |
| callback_url                              | Página onde o comprador é redirecionado por padrão após efetuar o pagamento dentro da página do banco, quando o comprador indica que deseja retornar à loja.                                                              | -                            | -                                                                                                                  |

A resposta mostrará o **status pendente** até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL que contém as instruções para que o comprador realize o pagamento. Você pode redirecioná-lo para este mesmo link para conclusão do fluxo de pagamento.

```json
{
    "id": 1312147735,
     ..., 
    "operation_type": "regular_payment",
    "payment_method_id": "pse",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "pse",
        "type": "bank_transfer"
    },
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
     ...,
    "description": "Título del producto",
     ..., 
    "callback_url": "http://www.your-site.com",
    "installments": 1,
    "transaction_details": {
     ...,
        "total_paid_amount": 5000,
     ...,
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     ...,
        "financial_institution": "1009",
     ...,
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    }, 
}

```

> WARNING
>
> Importante
>
> Caso receba um erro ao gerar um pagamento, você pode consultar a lista de possíveis erros na seção [Referência de API](/developers/pt/reference/payments/_payments/post).


## Expiração

O pagamento criado com **PSE** expira automaticamente em 15 minutos após a geração e seu status passa a ser rejeitado. Caso o usuário não acesse a web e efetue o pagamento dentro desse prazo, deverá ser gerado um novo. 

------------


