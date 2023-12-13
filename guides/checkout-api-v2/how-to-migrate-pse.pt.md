----[mco]----

# Como migrar para a nova versão do PSE

O Checkout API conta com uma nova integração PSE, que permite aos compradores utilizar este meio de pagamento de forma mais simplificada.

Caso **você já tenha implementado uma integração PSE no Checkout API**, é possível atualizar para a nova versão, adicionando campos adicionais no processo de criação do pagamento. Para isso, siga as etapas descritas abaixo. 

> WARNING
>
> Importante
>
> Se você ainda não tem uma integração com o PSE e quer saber como desenvolvê-la, consulte o nosso [guia para novas integrações](/developers/pt/docs/checkout-api/integration-configuration/pse). 

> CLIENT_SIDE
>
> h2
>
> Adicionar novos campos ao formulário de pagamento

Para iniciar a migração, é necessário incluir novos campos obrigatórios ao formulário de pagamento já integrado ao seu projeto. Esses novos campos estão relacionados ao endereço e telefone do comprador, conforme detalhado na tabela abaixo:

| Campo | Descripción |
|---|---|
| `payer.address.zip_code` | Código postal do comprador |
| `payer.address.street_name` | Nome da rua onde o comprador reside. |
| `payer.address.street_number` | Número da residência do comprador. |
| `payer.address.neighborhood` | Nome do bairro onde o comprador reside. |
| `payer.address.city` | Cidade do comprador |
| `payer.phone.area_code` | Código de área do telefone do comprador. |
| `payer.phone.number` | Número de telefone do comprador |

No exemplo abaixo, você encontrará uma nova estrutura de código que inclui todos esses campos obrigatórios e os elementos `HTML` necessários nas próximas etapas.

```HTML
<form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="zipCode">Zip Code</label>
        <input id="form-checkout__zipCode" name="zipCode" type="text">
      </div>
      <div>
        <label for="streetName">Street Name</label>
        <input id="form-checkout__streetName" name="streetName" type="text">
      </div>
      <div>
        <label for="streetNumber">Street Number</label>
        <input id="form-checkout__streetNumber" name="streetNumber" type="text">
      </div>
      <div>
        <label for="neighborhood">Neighborhood</label>
        <input id="form-checkout__neighborhood" name="neighborhood" type="text">
      </div>
      <div>
        <label for="city">Ciudad</label>
        <input id="form-checkout__city" name="city" type="text">
      </div>
      <div>
        <label for="federalUnit">Unidad Federal</label>
        <input id="form-checkout__federalUnit" name="federalUnit" type="text">
      </div>
      <div>
        <label for="phoneAreaCode">PhoneAreaCode</label>
        <input id="form-checkout__phoneAreaCode" name="phoneAreaCode" type="text">
      </div>
      <div>
        <label for="phoneNumber">PhoneNumber</label>
        <input id="form-checkout__phoneNumber" name="phoneNumber" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="personType">Tipo de persona</label>
        <select id="form-checkout__personType" name="personType" type="text">
          <option value="natural">Natural</option>
          <option value="juridica">Jurídica</option>
        </select>
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>
    <div>
      <div>
        <label for="banksList">Banco</label>
        <div id="banksList"></div> 
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

> CLIENT_SIDE
>
> h2
>
> Obter tipos de documentos

Nesta integração com o PSE, é necessário coletar e enviar somente os documentos que correspondam ao tipo de pessoa - física ou jurídica - selecionada ao adicionar o formulário de pagamento.

Esta é uma mudança em relação à antiga integração, na qual esta diferenciação não era necessária.

Para obter os tipos de documentos automaticamente, utilize a seguinte função:


```javascript
document.getElementById('form-checkout__personType').addEventListener('change', e => {
    const personTypesElement = document.getElementById('form-checkout__personType');
    updateSelectOptions(personTypesElement.value);
});

function updateSelectOptions(selectedValue){
    
    const naturalDocTypes = [
        new Option('C.C', 'CC'),
        new Option('C.E.', 'CE'),
        new Option('Otro', 'Otro')
    ];
    const juridicaDocTypes = [
        new Option('NIT', 'NIT')
    ];
    const idDocTypes = document.getElementById('form-checkout__identificationType');
    
    if(selectedValue === 'natural') {
        idDocTypes.options.length = 0;
        naturalDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    } else {
        idDocTypes.options.length = 0;
        juridicaDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    }
}
```

> CLIENT_SIDE
>
> h2
>
> Listar bancos

Ao criar um pagamento com PSE, é necessário enviar o código do banco que será usado para fazer a transferência. Para isso, você deve listar os bancos disponíveis e oferecer as opções ao pagador, para que ele escolha o banco de sua preferência. 

Para acessar a lista de bancos disponíveis para PSE, é preciso inicialmente, a partir do backend, obter os meios de pagamento. Isso é feito enviando um **GET**, junto com seu _Access Token_, para o endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get). Alternativamente, pode-se utilizar [nossos SDKs](/developers/pt/docs/sdks-library/landing)  para adquirir essas informações e posteriormente encaminhá-las para o frontend. 

No exemplo a seguir, mostramos como enviar meios de pagamento através de um endpoint do aplicativo, `/payment_methods`. Uma vez chamado esse endpoint pelo frontend, a lista de bancos disponíveis para PSE retorna através do campo `financial_institutions` dentro do objeto com `id=pse`.

Para exibir a lista de bancos, crie um elemento `select` em javascript e enriqueça-o com os dados retornados na chamada da API.


```javascript
function setPse() {
    fetch('/payment_methods')
        .then(async function(response) {
            const paymentMethods = await response.json();
            const pse = paymentMethods.filter((method) => method.id === 'pse')[0];
            const banksList = pse.financial_institutions;
            const banksListElement = document.getElementById('banksList');
            const selectElement = document.createElement('select');
            selectElement.name = 'financialInstitution';

            banksList.forEach(bank => {
                const option = document.createElement('option');
                option.value = bank.id;
                option.textContent = bank.description;
                selectElement.appendChild(option);
            });

            banksListElement.appendChild(selectElement);

        }).catch(function(reason) {
            console.error('Failed to get payment methods', reason);
        });
}
```

> NOTE
>
> Nota
>
> Recomendamos que, ao exibir a lista de bancos, eles sejam dispostos em ordem alfabética, de maneira ascendente, começando da letra *A* até a letra *Z*.

Para que os elementos dinâmicos dos exemplos anteriores criados com estes javascript sejam carregados quando a página terminar de renderizar, utilize o seguinte código:

```javascript
(function initCheckout() {
    try {
        const docTypeElement = document.getElementById('form-checkout__identificationType');
        setPse();
        updateSelectOptions('natural')
    }catch(e) {
        return console.error('Error getting identificationTypes: ', e);
    }
 })();

``` 


> SERVER_SIDE
>
> h2
>
> Enviar pagamento

O envio de um pagamento com a nova implementação do PSE envolve apenas algumas alterações. 

Para isso, é necessário enviar um **POST** com os parâmetros essenciais para o endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post). Na execução da solicitação, deve-se incluir novos campos obrigatórios (`address` y `phone`).

Veja abaixo um exemplo completo para referência, seguido da descrição de cada campo a ser enviado:

[[[
```php

<?php
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;

MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
$client = new PaymentClient();
$payment = $client->create([
  "transaction_amount" => 5000,
  "description" => "Product description",
  "payment_method_id" => "pse",
  "additional_info" => [
    "ip_address" => "127.0.0.1"
  ],
  "transaction_details" => [
    "financial_institution" => $_POST['financialInstitution']
  ],
  "callback_url" => "http://www.your-site.com",
  "email" => $_POST['email'],
  "identification" => [
       "type" => $_POST['identificationType'],
       "number" => $_POST['identificationNumber']
  ],
  "address" => [
        "zip_code" => $_POST['zipCode'],
        "street_name": $_POST['streetName'],
        "street_number": $_POST['streetNumber'],
        "neighborhood": $_POST['neighborhood'],
        "city": $_POST['city'],
        "federal_unit": $_POST['federalUnit']
  ],

  "phone" => [
       "area_code" => $_POST['phoneAreaCode'],
       "number" => $_POST['phoneNumber']
  ],
  "entity_type" => "individual";
]);

echo implode($payment);
?>

```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const payment = new Payment(client);

payment.create({
      body: {
 	transaction_amount: 5000,
 	description: 'Product description',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: req.body.email,
 		identification: {
 			type: req.body.identificationType,
 			number: req.body.identificationNumber
 		}
            address: {
                 zip_code: req.body.zipCode,
                 street_name: req.body.streetName,
                 street_number: req.body.streetNumber,
                 neighborhood: req.body.neighborhood,
                 city: req.body.city,
                 Federal_unit: req.body.federalUnit
           },
           phone: {
                 area_code: req.body.phoneAreaCode,
                 number: req.body.phoneNumber
           }
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: req.body.financialInstitution
 	},
 	callback_url: 'http://www.your-site.com'
   }
}).then(function(response) {
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
  	.type(request.getIdentificationType())
  	.number(request.getIdentificationNumber())
  	.build();

  PaymentPayerAddressRequest address =
      PaymentPayerAddressRequest.builder()
      .zipCode(request.getZipCode())
      .streetName(request.getStreetName())
      .streetNumber(request.getStretNumber())
      .neighborhood(request.getNeighborhood())
      .city(request.getCity())
      .federalUnit(request.getFederalUnit())
      .build();

  PaymentPayerPhoneRequest phone =
      PaymentPayerPhoneRequest.builder()
      .areaCode(request.getPhoneAreaCode())
      .number(request.getPhoneNumber())
      .build();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.email(request.getEmail())
  	.entityType("individual")
  	.identification(identification)
      .address(address)
      .phone(phone)
  	.build();

  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();

  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution(request.getFinancialInstitution())
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("Product description")
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
  description: "Product description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: params[: financialInstitution]
  },
  callback_url: "https://your-site.com"
  payer: {
    email: params[:email],
    entity_type: "individual",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
    address: {
      zip_code: params[: zipCode],
      street_name: params[: streetName],
      street_number: params[: streetNumber],
      neighborhood: params[: neighborhood],
      city: params[: city],
      federal_unit: params[: federalUnit]
    }
    phone: {
      area_code: params[: phoneAreaCode],
      number: params[: phoneNumber]
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
  Type = request.IdentificationType,
    Number = request.IdentificationNumber
};

var address = new PaymentPayerAddressRequest() {
    ZipCode = request.ZipCode,
    StreetName = request.StreetName,
    StreetNumber = request.StreetNumber,
    Neighborhood = request.Neighborhood,
    City = request.City,
    FederalUnit = request.FederalUnit
};

var phone = new PaymentPayerPhoneRequest() {
    AreaCode = request.PhoneAreaCode,
    Number = request.PhoneNumber
};

var payer = new PaymentPayerRequest() {
    Email = request.Email,
    EntityType = "individual",
    Identification = identification,
    Address = address,
    Phone = phone
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = request.FinancialInstitution
};

var paymentCreateRequest = new PaymentCreateRequest() {
    TransactionAmount = 5000,
    Description = "Product description",
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
   "description": "Product description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": request.POST.get("financialInstitution")
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "email": request.POST.get("email"),
       "entity_type": "individual",
       "identification": {
           "type": request.POST.get("identificationType"), 
           "number": request.POST.get("identificationNumber")
       }
       "address": {
                 "zip_code": request.POST.get("zipCode"),
                 "street_name": request.POST.get("streetName"),
                 "street_number": request.POST.get("streetNumber"),
                 "neighborhood": request.POST.get("neighborhood"),
                 "city": request.POST.get("city"),
                 "federal_unit": request.POST.get("federalUnit")
       },
       "phone": {
                 "area_code": request.POST.get("phoneAreaCode"),
                 "number": request.POST.get("phoneNumber")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
 curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Product description",
    "payment_method_id": "pse",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "identification": {
            "type": "CC",
            "number": "76262349"
        }, 
        "address": {
          "zip_code": "111",
          "street_name": "siempre viva",
          "street_number": "111",
          "neighborhood": "sarasa",
          "city": "salto",
          "federal_unit": "1"
        },
        "phone": {
          "area_code": "011",
          "number": "2134242412"
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

A tabela a seguir tem a lista completa de campos obrigatórios para sua referência:

| Campo | Descrição | Possíveis valores/validações | Chamado para obter os valores |
|:---:|:---:|:---:|:---:|
| `transaction_details.financial_institution` | Banco informado no POST para efetuar a transferência eletrônica. A lista de bancos deve ser mostrada ao usuário e permitida a seleção. A lista é atualizada, por isso é recomendável consumir as informações a cada hora. | - | https://api.mercadopago.com/v1/payment_methods/search?site_id=MCO&id=pse&public_key=YOUR_PUBLIC_KEY  |
| `payer.entity_type` | Tipo de pessoa, física ou jurídica. | *individual* ou *association* | - |
| `payer.identification` | Tipo e número do documento do comprador. | - | curl -X GET \<br>'https://api.mercadopago.com/v1/identification_types' \<br>-H 'Authorization: Bearer **YOUR_PUBLIC_KEY**' |
| `additional_info.ip_address` | IP address do comprador, onde o pagamento é gerado. | - | - |
| `callback_url` | Página onde o comprador é redirecionado por padrão após efetuar o pagamento dentro da página do banco, quando o comprador indica que deseja retornar à loja.<br>Você pode ver sugestões de mensagens para mostrar ao comprador no subtítulo [Exemplos de mensagens para callback URL]((/developers/es/docs/checkout-api/how-tos/migrate-pse#bookmark_exemplos_de_mensagens_para_callback_url). | - | - |
| `payer.address.zip_code` | Código postal do comprador. | - | - |
| `payer.address.street_name` | Nome da rua onde o comprador reside. | - | - |
| `payer.address.street_number` | Núúmero da residência do comprador. | - | - |
| `payer.address.neighborhood` | Nome do bairro onde o comprador reside. | - | - |
| `payer.address.city` | Cidade do comprador | - | - |
| `payer.phone.area_code` | Código de área do telefone do comprador. | - | - |
| `payer.phone.number` | Número de telefone do comprador | - | - |


A resposta mostrará o status `pendente` até que o comprador realize o pagamento. Além disso, na resposta à requisição, o parâmetro `external_resource_url` retornará uma URL para a qual você deverá redirecionar o comprador para que ele conclua o fluxo de pagamento.


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
     ...
    "description": "Título del producto",
     ... 
    "callback_url": "http://www.your-site.com",
    "installments": 1,
    "transaction_details": {
     ...
        "total_paid_amount": 5000,
     ...
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     ...
        "financial_institution": "1009",
     ...
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    }, 
}

```

> NOTE
>
> Importante
>
> Caso receba um erro ao gerar um pagamento, consulte a lista de possíveis erros na seção [Referência de API](/developers/pt/reference/payments/_payments/post), ou acesse  [Erros em pagamentos com PSE](/developers/pt/docs/checkout-api/error-messages/pse-errors).

### Exemplos de mensagens para o callback URL

Após o comprador realizar o pagamento na plataforma do banco escolhido, haverá um redirecionamento para uma URL de callback. Nesta página, ele receberá informações sobre o status da transação.

Na nova versão, o **callback URL é um campo obrigatório**, por isso é importanteter em mente que é necessário tratar os diferentes estados da transação.

Abaixo, apresentamos exemplos de mensagens que você pode exibir, alinhadas aos três possíveis status em que o pagamento pode se encontrar.


#### Status aprovado

![imagem de transação bem-sucedida e redirecionamento](/images/api/pse-callback-approved.png)

#### Status pendente

![imagem de transação pendente](/images/api/pse-callback-pending.png)

#### Status rejeitado

![imagem de transação rejeitada](/images/api/pse-callback-rejected.png)


------------