# Como integrar 3DS com Checkout Transparente?

3DS 2.0 é uma tecnologia que permite a autenticação de transações com cartão de crédito e débito em e-commerces, ou seja, permite validar que a pessoa que realiza a compra é realmente o titular do cartão ou tem acesso às contas do titular para concluir o pagamento.

Uma transação autenticada tem vários benefícios, incluindo uma maior probabilidade de aprovação, evitando perdas por chargeback para o vendedor, menor risco de fraude para o comprador, entre outros.

> NOTE
>
> Importante
>
> Para realizar a integração com 3DS, é preciso atender a determinados requisitos. Antes de avançar para os próximos passos, revise a seção [Pré-requisitos](/developers/pt/docs/checkout-api/prerequisites) e certifique-se de que todos sejam cumpridos.

Nesta documentação você encontrará toda a informação necessária para realizar a integração com 3DS.


## Integrar com 3DS

A autenticação 3DS pode ser feita através de dois fluxos diferentes: **com e sem _Challenge_**, sendo esses etapas adicionais que o comprador deve cumprir para garantir sua identidade. A decisão de incluir ou não o _Challenge_ depende do emissor do cartão e do perfil de risco da transação que está sendo realizada.

Para **transações de baixo risco**, as informações enviadas na finalização da compra são suficientes e as etapas adicionais do _Challenge_ **não são necessárias**. Porém, **para casos de alto risco de fraude**, o _Challenge_ é necessário para **verificar a identidade do comprador**, o que aumenta a conversão das transações com cartão.

Abaixo estão as etapas para realizar uma integração com 3DS.


1. Utilize o Mercado Pago [SDK JS](/developers/pt/docs/sdks-library/client-side/mp-js-v2) no checkout para gerar o [token do cartão de crédito](/developers/pt/docs/sdks-library/client-side/java/howto-migrate#bookmark_criar_token_do_cartão).

[[[
```Javascript

async function createCardToken(){ 
    const token = await mp.fields.createCardToken({
        cardholderName,
        identificationType, 
        identificationNumber, 
    });
    ...
}
```
]]]



2. Em seguida, envie os **dados do checkout** junto com o **token do cartão** para o backend.
3. Feito isso, faça uma chamada para criar um novo pagamento com os dados recebidos. O atributo `three_d_secure_mode` precisa ser enviado com um dos seguintes valores:
    1. `not_supported`: 3DS não deve ser usado (é o valor padrão).
    2. `opcional`: 3DS pode ou não ser exigido, dependendo do perfil de risco da operação.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "test_payer_12345@testuser.com"
    },
    "additional_info": {
        "items": [
            {
                "quantity": 1,
                "category_id": "MLA91058",
                "title": "Clases De Payments",
                "unit_price": 100
            }
        ]
    },
    "payment_method_id": "master",
    "marketplace": "NONE",
    "installments": 1,
    "transaction_amount": 100,
    "description": "description",
    "token": "your_cardtoken",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(100))
            .token("CARD_TOKEN")
            .description("description")
            .installments(1)
            .paymentMethodId("visa")
            .payer(
               PaymentPayerRequest.builder()
                 .email("test_payer_12345@testuser.com")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```dotnet
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "CARD_TOKEN",
    Description = "description",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Email = "test_payer_12345@testuser.com",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php

<?php
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->token = "CARD_TOKEN";
  $payment->description = "description";
  $payment->installments = 1;
  $payment->payer = array(
        "email" => "test_payer_12345@testuser.com"
    );
  $payment->three_d_secure_mode = "optional";
  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
var payment_data = {
  transaction_amount: 100,
  token: 'CARD_TOKEN',
  description: 'description',
  installments: 1,
  payer: {
    email: 'test_payer_12345@testuser.com'
  },
  three_d_secure_mode: 'optional'
};
mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
payment_request = {
  token: 'CARD_TOKEN',
  installments: 1,
  transaction_amount: 100,
  description: 'description',
  payer: {
    email: 'test_payer_12345@testuser.com',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
payment_data = {
    "transaction_amount": 100,
    "token": "CARD_TOKEN",
    "description": "description",
    "installments": 1,
    "payer": {
        "email": "test_payer_12345@testuser.com",
    },
    "three_d_secure_mode": "optional"
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
]]]


Caso não seja necessário utilizar o fluxo do _Challenge_, o campo `status` do pagamento terá valor `approved` e não será necessário exibi-lo, dessa forma, siga normalmente com o fluxo de sua aplicação. 

Para os casos em que o _Challenge_ é necessário, o `status` mostrará o valor `pending`, e o `status_detail` será `pending_Challenge`.

> NOTE
>
> Importante
>
> Neste último caso, a resposta mostrará um atributo de pagamento chamado `three_dsinfo` com os campos `external_resource_url`, que contém a URL do _Challenge_, e `creq`, um identificador da solicitação do _Challenge_. Para exibi-lo e tratar seu resultado siga os passos abaixo.


### Visão geral da resposta (informação omitida)


[[[
```Json

{
    "id": 52044997115,
    ...
    "status": "pending",
    "status_detail": "pending_Challenge",
    ...
    "internal_metadata":
    {
        ...
        "unified_processing": true,
        "3ds_disabled_reason": "none",
        "approval_optimization_context":
        [
            {
                ...
                "approval_decision":
                {
                    ...
                    "approval_flows":
                    [
                        "no_cvv",
                        "default",
                        "tokenization",
                        "threeds",
                        "data_only"
                    ],
                    "three_ds": true,
                    "remove_cvv": false,
                    "operation_mode": "sync",
                    "best_flows":
                    [
                        "threeds"
                    ]
                },
                ...
            }
        ],
        "g2": "on",
        "3ds_status": "Challenge",
        "3ds_Challenge": true,
        "3dsChallengedrop_reason": "none",
        ...
        "approval_decision":
        {
            "abtesting_flows": null,
            "deferred_retry": false,
            "data_only": false,
            "retry_after_time": null,
            "approval_flows":
            [
                "no_cvv",
                "default",
                "tokenization",
                "threeds",
                "data_only"
            ],
            "three_ds": true,
            "remove_cvv": false,
            "operation_mode": "sync",
            "best_flows":
            [
                "threeds"
            ]
        },
        "mcc_source": "DEFAULT"
    },
    ........
    "three_dsinfo":
    {
        "external_resource_url": "https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
        "creq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjc1RyYW5zSUQiOiI3MDAwYTI2YS1jYWQ1LTQ2NjQtOTM0OC01YmRlZjUwM2JlOWYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0"
    },
    "owner": null
}

```
]]]


4. Para **exibir o _Challenge_**, é necessário gerar um _iframe_ (altura mínima: 500px, largura mínima: 600px) que contenha um formulário com `method post` e `action`, que será a URL obtida no campo `external_resource_url`, e um input oculto com o valor obtido em `creq`. Em seguida, faça o post do formulário abaixo para iniciar o _Challenge_.

[[[
```javascript

function doChallenge(payment) {
  try {
    const {
      status,
      status_detail,
      three_dsinfo: { creq, external_resource_url },
    } = payment;
    if (status === "pending" && status_detail === "pending_Challenge") {
      var iframe = document.createElement("iframe");
      iframe.name = "myframe";
      iframe.id = "myframe";
      iframe.height = "500px";
      iframe.width = "600px";
      document.body.appendChild(iframe);

      var idocument = iframe.contentWindow.document;

      var myform = idocument.createElement("form");
      myform.name = "myform";
      myform.setAttribute("target", "myframe");
      myform.setAttribute("method", "post");
      myform.setAttribute("action", external_resource_url);

      var hiddenField = idocument.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "creq");
      hiddenField.setAttribute("value", creq);
      myform.appendChild(hiddenField);
      iframe.appendChild(myform);

      myform.submit();
    }
  } catch (error) {
    console.log(error);
    alert("Error doing Challenge, try again later.");
  }
}

```
]]]

Quando o _Challenge_ for concluído, o status do pagamento será atualizado para `approved` se a autenticação for bem-sucedida, e `rejected` se não for. Em situações nas quais a autenticação não é realizada, o pagamento permanece `pending`. Esta atualização não é imediata e pode levar alguns instantes.

> NOTE
>
> Importante
>
> Quando o _Challenge_ é iniciado, o usuário tem cerca de 5 minutos para completá-lo. Se não for concluído, o banco recusará a transação e o Mercado Pago considerará o pagamento cancelado. Se o usuário não completar o _Challenge_, o pagamento ficará como `pending_Challenge`.

Consulte a seção abaixo para obter mais detalhes sobre como verificar o status de cada transação.

## Verificar status da transação

Para saber qual é o resultado de cada transação, existem três opções:

* **Notificações**: Uma notificação da alteração do status do pagamento será recebida por meio de Webhooks e o comprador deverá ser redirecionado para uma tela indicando que a transação foi bem-sucedida. Consulte a seção [Webhooks](/developers/es/docs/checkout-api/additional-content/notifications/webhooks) e saiba como realizar sua configuração..
* **API de pagamentos**: Será necessário fazer um _pooling_ em [Payments](/developers/pt/reference/payments/_payments/post) e, se o status mudar, redirecionar o comprador para uma tela de confirmação.
* **Tratar o evento iframe (recomendado)**: Tenha em mente que o evento apenas indica que o _Challenge_ terminou e não que o pagamento chegou a um status final, pois a atualização não é imediata e pode demorar alguns instantes. Faça uma consulta em [Payments](/developers/pt/reference/payments/_payments/post) e, caso o status mude, redirecione o comprador para uma tela indicando que a transação foi realizada com sucesso.

Para **tratar o evento iframe**, siga as etapas abaixo.

### Realizar implantação

Utilize o código Javascript a seguir para implementar e escutar o evento que indica que o _Challenge_ foi encerrado e redirecionado para a tela de confirmação.


[[[
```javascript

window.addEventListener("message", (e) => {
     if (e.data.status === "COMPLETE") {
         window.open("congrats.html");
     }
});

```
]]]


### Buscar status de pagamento

O Javascript a seguir indica como buscar o status do pagamento atualizado e exibi-lo na tela de confirmação.



[[[
```javascript

document.addEventListener("DOMContentLoaded", async function (e) {
 init();
});

async function init() {
 const id = localStorage.getItem("paymentId");

 try {
   const response = await fetch("/get_payment/" + id, {
     method: "GET",
   });
   const result = await response.json();
   if (result.status != 200) throw new Error("error getting payment");
   document.getElementById("congrats-div").innerHTML =
     "Pagamento " + result.data.id + " -> Status: " + result.data.status;
 } catch (error) {
   alert("Unexpected error\n" + JSON.stringify(error));
 }
}

```
]]]


> NOTE
>
> Importante
>
> Caso o pagamento ainda esteja `pending` após o timeout do _Challenge_, será necessário redirecionar o comprador para uma tela informando que o pagamento expirou e que é necessário criar um novo (a atualização não é imediata, pode demorar alguns momentos).

Após seguir estes passos, sua integração está pronta para autenticar transações com 3DS.


# Possíveis status de pagamento com 3DS

Uma transação com 3DS pode retornar diferentes status dependendo do tipo de integração realizada (com ou sem _Challenge_). Em um pagamento **sem _Challenge_**, o status da transação será diretamente `approved` ou `rejected`.

Em um pagamento **com _Challenge_**, a transação ficará com status `pending` e o processo de autenticação junto ao banco será iniciado. Somente após esta etapa o status final será exibido.

Veja abaixo a tabela com os possíveis status e suas respectivas descrições.


| Status  | Descrição  |
| --- | --- |
| `pending` | Transação com autenticação pendente ou timeout do _Challenge_. |
| `approved` | Transação aprovada com autenticação. |
| `rejected` | Transação negada sem autenticação. |



# Teste de integração

Antes de ir à produção, é possível testar a integração para garantir que o fluxo 3DS funcione corretamente e que os pagamentos sejam processados sem erros. Dessa forma, evita-se que os compradores abandonem a transação por não conseguirem concluí-la.

Para realizar uma compra de teste, será necessário ter em mãos as credenciais de teste do seu usuário de produção, além de um cartão de crédito de teste com 3DS habilitado.



> WARNING
>
> Importante
>
> Para a realização dos testes, recomendamos que você entre em contato com seu consultor do Mercado Pago.
