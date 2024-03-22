# Pix

Pix é um meio de pagamento eletrônico instantâneo oferecido pelo Banco Central do Brasil a pessoas físicas e jurídicas. Através do Checkout Transparente, é possível oferecer esta opção de pagamento por meio de código QR ou código de pagamento.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar **pagamentos com Pix** utilizando o **Brick de Payment**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para mais detalhes. 

Para integrar pagamentos via Pix, siga as etapas abaixo, mas caso você já tenha integrado pagamentos via cartão, inicie a integração a partir da etapa [Adicionar formulário de pagamento](/developers/pt/docs/checkout-api/integration-configuration/integrate-with-pix#bookmark_Adicionar_formulário_de_pagamento).

## Importar MercadoPago.js

Após a criação das chaves Pix, é preciso realizar a captura de dados para pagamento. Esta captura é feita a partir da inclusão da biblioteca MercadoPago.js em seu projeto, seguida do formulário de pagamento. Utilize o código abaixo para importar a biblioteca MercadoPago.js antes de adicionar o formulário de pagamento.

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


## Configurar credencial

As credenciais são chaves únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.

Esta é a primeira etapa de uma estrutura completa de código que deverá ser seguida para a correta integração do pagamento via Pix. Atente-se aos blocos abaixo para adicionar aos códigos conforme indicado.

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

Com a biblioteca MercadoPago.js incluída e a credencial configurada, adicione o formulário de pagamento abaixo ao seu projeto para garantir a captura segura dos dados dos clientes.


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

Após configurar a credencial e adicionar o formulário de pagamento, é preciso obter os tipos de documento que farão parte do preenchimento do formulário para pagamento. 

Ao incluir o elemento do tipo `select` com o id: `form-checkout__identificationType` que está no formulário, será possível preencher automaticamente as opções disponíveis quando chamar a função a seguir:

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

Ao finalizar a inclusão do formulário de pagamento, é preciso enviar o e-mail do comprador, tipo e número de documento, o meio de pagamento utilizado (pix) e o detalhe do valor.

> NOTE
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo `X-Idempotency-Key`. Seu preenchimento é importante para garantir a execução e reexecução de requisições sem que haja situações indesejadas como, por exemplo, pagamentos em duplicidade.

Para configurar pagamento com Pix, envie um POST ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, faça a requisição utilizando nossos SDKs.

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
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const payment = new Payment(client);

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        description: req.description,
        payment_method_id: req.paymentMethodId,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título do produto")
       .paymentMethodId("pix")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("PAYER_EMAIL")
               .firstName("Test")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

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
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL',
    identification: {
      type: 'CPF',
      number: '19119119100',
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
    PaymentMethodId = "pix",
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
    "payment_method_id": "pix",
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
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título do produto",
      "payment_method_id": "pix",
      "payer": {
        "email": "PAYER_EMAIL",
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

A resposta mostrará o estado pendente do pagamento e todas as informações que você precisa para mostrar ao comprador. O valor `transaction_data` retornará os dados para código QR.

```json
{
  ...,
 "id": 5466310457,
 "status": "pending",
 "status_detail": "pending_waiting_transfer",
 ...,
 "transaction_details": {
     "net_received_amount": 0,
     "total_paid_amount": 100,
     "overpaid_amount": 0,
     "external_resource_url": null,
     "installment_amount": 0,
     "financial_institution": null,
     "transaction_id": null
 },
 "point_of_interaction": {
     "type": "PIX",
     "sub_type": null,
     "application_data": {
       "name": "NAME_SDK",
       "version": "VERSION_NUMBER"
     },
     "transaction_data": {
       "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABRQAAAUUCAYAAACu5p7oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAIABJREFUeJzs2luO3LiWQNFmI+Y/Zd6vRt36KGNXi7ZOBtcagHD4kNLeiLX33v8DAAAAABD879sDAAAAAAA/h6AIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCAAAAAJmgCAAAAABkgiIAAAAAkAmKAAAAAEAmKAIAAAAAmaAIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCA...",
       "qr_code": "00020126600014br.gov.bcb.pix0117john@yourdomain.com0217additional data520400005303986540510.005802BR5913Maria Silva6008Brasilia62070503***6304E2CA",
       "ticket_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000",
       "transaction_id": null
     }
 }
 ...,
}
```

Com Pix, você também pode escolher o prazo que o cliente terá para pagar a compra, definindo a validade do código de pagamento enviado a ele após a realização do pedido.

> NOTE
>
> Importante
>
> Por padrão, a data de vencimento para pagamentos com Pix é de **24 horas**, mas você pode alterá-la enviando o campo `date_of_expiration` na solicitação de criação de pagamento. A data configurada deve estar entre **30 minutos até 30 dias** a partir da data de emissão do pagamento.

## Visualização de pagamento

Para o usuário efetuar o pagamento, você deve escolher a forma de abertura do mesmo, que pode ser através de um botão ou de um código QR que deve ser renderizado. 

Selecione a opção que mais se adéqua ao seu modelo de negócio e siga as etapas descritas abaixo.

* **Adicionar Link ou botão**: Ao optar por adicionar um link ou botão para pagamento com Pix, o comprador será direcionado a uma nova janela contendo todas as informações para pagamento, como QR Code, Pix Copia e Cola e as instruções de pagamento.

Para oferecer esta opção, utilize o atributo `ticket_url`, que mostra um Pix em uma nova janela com todas as informações de QR Code, Pix Copia e Cola e instruções de pagamentos. 

[[[
```html

<a href="https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pagar com Pix</a>
```
]]]

* **Renderizar código QR**: É possível renderizar o código QR vigente, que deverá ser utilizado somente uma vez, na própria tela. Além disso, também é possível adicionar uma opção para copiar e colar o código de pagamento, o que permitirá realizar a transação a partir de um Internet Banking.

Siga as etapas abaixo para renderizar o QR code e disponibilizar o recurso copia e cola.

1. Adicione o `qr_code_base64` para exibir o código QR.

[[[
```html
<img src={`data:image/jpeg;base64,${qr_code_base64}}`/>

```
]]]

2. Para apresentar a opção que permitirá copiar e colar o código de pagamento, adicione o qr_code da seguinte forma:

[[[
 ```html
    <label for="copiar">Copiar Hash:</label>
    <input type="text" id="copiar" value={qr_code} readonly/>
```
]]]

Ao concluir essas etapas, o código QR terá sido renderizado e será exibido para o comprador no momento do pagamento.