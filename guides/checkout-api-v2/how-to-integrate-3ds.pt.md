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

A autenticação 3DS pode ser feita através de dois fluxos diferentes: **com e sem _Challenge_**, sendo estas etapas adicionais que o comprador deve cumprir para garantir sua identidade. A decisão de incluir ou não o _Challenge_ depende do emissor do cartão e do perfil de risco da transação que está sendo realizada.

Para **transações de baixo risco**, as informações enviadas na finalização da compra são suficientes e as etapas adicionais do _Challenge_ **não são necessárias**. Porém, **para casos de alto risco de fraude**, o _Challenge_ é necessário para **verificar a identidade do comprador**, o que aumenta a aprovação das transações com cartão.

Abaixo estão as etapas para realizar uma integração com 3DS.


1. Utilize o Mercado Pago [SDK JS](/developers/pt/docs/sdks-library/client-side/mp-js-v2) no checkout para gerar o [token do cartão de crédito](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
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
    "token": "CARD_TOKEN",
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

Para os casos em que o _Challenge_ é necessário, o `status` mostrará o valor `pending`, e o `status_detail` será `pending_challenge`.

> NOTE
>
> Importante
>
> Neste último caso, a resposta mostrará um atributo de pagamento chamado `three_ds_info` com os campos `external_resource_url`, que contém a URL do _Challenge_, e `creq`, um identificador da solicitação do _Challenge_. Para exibi-lo e tratar seu resultado siga os passos abaixo.


### Visão geral da resposta (informação omitida)


[[[
```Json

{
    "id": 52044997115,
    ...
    "status": "pending",
    "status_detail": "pending_challenge",
    ...
    "three_ds_info":
    {
        "external_resource_url": "https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
        "creq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjc1RyYW5zSUQiOiI3MDAwYTI2YS1jYWQ1LTQ2NjQtOTM0OC01YmRlZjUwM2JlOWYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0"
    },
    "owner": null
}

```
]]]


4. Para **exibir o _Challenge_**, é necessário gerar um _iframe_ (altura mínima: 500px, largura mínima: 600px) que contenha um formulário com `method post`, `action` contendo a URL obtida no campo `external_resource_url`, e um input oculto com o valor obtido em `creq`. Em seguida, faça o post do formulário abaixo para iniciar o _Challenge_.

[[[
```javascript

function doChallenge(payment) {
  try {
    const {
      status,
      status_detail,
      three_ds_info: { creq, external_resource_url },
    } = payment;
    if (status === "pending" && status_detail === "pending_challenge") {
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

* **Notificações**: Uma notificação da alteração do status do pagamento será recebida por meio de Webhooks e o comprador deverá ser redirecionado para uma tela indicando que a transação foi bem-sucedida. Consulte a seção [Webhooks](/developers/es/docs/checkout-api/additional-content/your-integrations/notifications/webhooks) e saiba como realizar sua configuração..
* **API de pagamentos**: Será necessário fazer um _pooling_ em [Payments](/developers/pt/reference/payments/_payments/post) e, se o status mudar, redirecionar o comprador para uma tela de confirmação.
* **Tratar o evento iframe (recomendado)**: Tenha em mente que o evento apenas indica que o _Challenge_ terminou e não que o pagamento chegou a um status final, pois a atualização não é imediata e pode demorar alguns instantes. Faça uma consulta em [Payments](/developers/pt/reference/payments/_payments/post) e, caso o status mude, redirecione o comprador para uma tela indicando que a transação foi realizada com sucesso.

Para **tratar o evento iframe**, siga as etapas abaixo.

### Realizar implantação

Utilize o código Javascript a seguir para implementar e escutar o evento que indica que o _Challenge_ foi encerrado, assim é possível redirecionar o cliente para a tela de confirmação.


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


## Possíveis status de pagamento 

Uma transação com 3DS pode retornar diferentes status dependendo do tipo de integração realizada (com ou sem _Challenge_). Em um pagamento **sem _Challenge_**, o status da transação será diretamente `approved` ou `rejected`.

Em um pagamento **com _Challenge_**, a transação ficará com status `pending` e o processo de autenticação junto ao banco será iniciado. Somente após esta etapa o status final será exibido.

Veja abaixo a tabela com os possíveis status e suas respectivas descrições.

| Status     | Status_detail                 | Descrição                                                         |
|------------|-------------------------------|-------------------------------------------------------------------|
| "approved" | ""                            | Transação aprovada sem autenticação.                               |
| "rejected" | ""                            | Transação rejeitada sem autenticação.                              |
| "pending"  | "pending_challenge"           | Transação pendente de autenticação ou *timeout* do *challenge*.       |
| "rejected" | "cc_rejected_3ds_challenge"   | Transação rejeitada devido a falha no *challenge*.                  |

## Teste de integração

Antes de ir à produção, é possível testar a integração para garantir que o fluxo 3DS funcione corretamente e que os pagamentos sejam processados sem erros. Dessa forma, evita-se que os compradores abandonem a transação por não conseguirem concluí-la.

Para realizar uma compra de teste, será necessário ter em mãos as credenciais de teste do seu usuário de produção, além de um cartão de crédito de teste com 3DS habilitado.



> WARNING
>
> Importante
>
> Para a realização dos testes, recomendamos que você entre em contato com seu consultor do Mercado Pago.

## Testes em ambiente *sandbox*

Para que seja possível validar pagamentos com 3DS, disponibilizamos um ambiente de testes do tipo *sandbox* que retorna resultados falsos apenas para simulação e validação da implementação.

> NOTE
>
> Lembre-se de utilizar as credenciais de teste da sua aplicação. 

Para realizar testes de pagamento em um ambiente *sandbox*, é necessário utilizar cartões específicos que permitem testar a implementação do *challenge* com os fluxos de sucesso e falha. A tabela a seguir apresenta os detalhes desses cartões:

| Cartão    | Fluxo                    | Número             | Código de segurança | Data de vencimento |
|-----------|--------------------------|--------------------|---------------------|--------------------|
| Mastercard | Challenge com sucesso    | 5483 9281 6457 4623 | 123                 | 11/25              |
| Mastercard | Challenge não autorizado | 5361 9568 0611 7557 | 123                 | 11/25              |

Os passos para criar o pagamento são os mesmos. Em caso de dúvida sobre como criar pagamentos com cartão, consulte a [documentação sobre Cartões](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform). 

> NOTE
>
> Para garantir que o pagamento seja criado com 3DS, lembre-se de incluir o atributo `three_d_secure_mode` com o valor `optional`.
 
[[[
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "CARD_TOKEN",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "master",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         },
         "three_d_secure_mode": "optional"
   }'
```
```php
<?php
   require_once 'vendor/autoload.php';
 
   MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
 
   $payment = new MercadoPago\Payment();
   $payment->transaction_amount = (float)$_POST['transactionAmount'];
   $payment->token = $_POST['token'];
   $payment->description = $_POST['description'];
   $payment->installments = (int)$_POST['installments'];
   $payment->payment_method_id = $_POST['paymentMethodId'];
   $payment->issuer_id = (int)$_POST['issuer'];
 
   $payer = new MercadoPago\Payer();
   $payer->email = $_POST['email'];
   $payer->identification = array(
       "type" => $_POST['identificationType'],
       "number" => $_POST['identificationNumber']
   );
   $payment->payer = $payer;
   $payment->three_d_secure_mode = "optional";
 
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
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");
 
Var payment = req.body;
var payment_data = {
  transaction_amount: payment.transactionAmount,
  description: payment.description,
  token: payment.cardToken,
  installments: payment.installments,
  payment_method_id: payment.paymentMethodId,
  issuer_id: payment.issuer,
  payer: {
    email: payment.email
    identification: {
      type: payment.identificationType,
      number: payment.identificationNumber
    }
  },
  three_d_secure_mode: "optional"
};


mercadopago.payment.create(payment).then(function (data) {
console.log(data.response);
}).catch(function (error) {
console.log(error);
});
```
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .threeDSecureMode("optional")
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:email],
   identification: {
     type: params[:identificationType],
     number: params[:identificationNumber]
   }
 three_d_secure_mode: "optional",
 }
}
 
payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]
 
puts payment
```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {
           Type = Request["identificationType"],
           Number = Request["identificationNumber"],
       },
   },
ThreeDSecureMode = "optional",
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
 
Console.WriteLine(payment.Status);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
   }
   "three_d_secure_mode": "optional"
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
 
print(payment)
```
]]]

### Challenge

Em ambos os fluxos (sucesso e falha), o *challenge*, que é uma tela semelhante à mostrada abaixo, deve ser exibido dentro do *iframe*:

![Challenge](/images/api/sandbox.png)

O código de verificação fornecido é apenas ilustrativo. Para concluir o fluxo de teste, basta clicar no botão **Confirmar**. Após concluir essa ação, siga as instruções detalhadas na seção **Verificar o Status da Transação** para identificar quando o *challenge* foi concluído e como verificar a atualização do pagamento. 