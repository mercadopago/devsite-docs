# Como integrar 3DS com Checkout Transparente

Nesta documentação você encontrará toda a informação necessária para realizar a integração com 3DS com Checkout Transparente. Para mais informações sobre como esse tipo de autenticação funciona, veja [3DS 2.0](/developers/pt/docs/checkout-api/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Importante
>
> Para realizar a integração com 3DS, é preciso atender a determinados requisitos. Antes de avançar para os próximos passos, revise a seção [Pré-requisitos](/developers/pt/docs/checkout-api/prerequisites) e certifique-se de que todos sejam cumpridos.

## Integrar com 3DS

A autenticação 3DS pode ser feita através de dois fluxos diferentes: **com e sem _Challenge_**, sendo estas etapas adicionais que o comprador deve cumprir para garantir sua identidade. A decisão de incluir ou não o _Challenge_ depende do emissor do cartão e do perfil de risco da transação que está sendo realizada.

> Conheça também as integrações via [Checkout Bricks,](/developers/pt/docs/checkout-bricks/how-tos/integrate-3ds) uma forma de pagamento modular, segura e personalizável, que automatiza vários dos processos descritos a seguir.

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
--header 'Authorization: <ENV_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "<BUYER_EMAIL>"
    },
    "additional_info": {
        "items": [
            {
                "quantity": <ITEM_QUANTITY>,
                "category_id": <CATEGORY_ID>,
                "title": <ITEM_TITLE>,
                "unit_price": <TRANSACTION_AMOUNT>
            }
        ]
    },
    "payment_method_id": <PAYMENT_METHOD_ID>,
    "marketplace": "NONE",
    "installments": <INSTALLLMENTS_NUMBER>,
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "description": "<DESCRIPTION>",
    "token": "CARD_TOKEN",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("<ENV_ACCESS_TOKEN>");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(<TRANSACTION_AMOUNT>))
            .token("<CARD_TOKEN>")
            .description("<DESCRIPTION>")
            .installments(<INSTALLLMENTS_NUMBER>)
            .paymentMethodId("<PAYMENT_METHOD_ID>")
            .payer(
               PaymentPayerRequest.builder()
                 .email("<BUYER_EMAIL>")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "<ENV_ACCESS_TOKEN>";
var request = new PaymentCreateRequest
{
    TransactionAmount = <TRANSACTION_AMOUNT>,
    Token = "<CARD_TOKEN>",
    Description = "<DESCRIPTION>",
    Installments = <INSTALLLMENTS_NUMBER>,
    Payer = new PaymentPayerRequest
    {
        Email = "<BUYER_EMAIL>",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => <TRANSACTION_AMOUNT>,
    "token" => "CARD_TOKEN",
    "description" => "<DESCRIPTION>",
    "installments" => <INSTALLMENTS_NUMBER>,
    "payment_method_id" => "<PAYMENT_METHOD_ID>",
    "issuer_id" => "<ISSUER_ID>",
    "payer" => [
      "email" => $_POST['email']
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const payment = new Payment(client);

const body = {
  transaction_amount: <TRANSACTION_AMOUNT>,
  token: '<CARD_TOKEN>',
  description:  '<DESCRIPTION>',
  installments: <INSTALLMENTS_NUMBER>,
  payment_method_id: '<PAYMENT_METHOD_ID>',
  issuer_id: '<ISSUER_ID>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional'
}
payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('<ENV_ACCESS_TOKEN>')
payment_request = {
  token: '<CARD_TOKEN>',
  installments: <INSTALLLMENTS_NUMBER>,
  transaction_amount: <TRANSACTION_AMOUNT>,
  description: '<DESCRIPTION>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("<ENV_ACCESS_TOKEN>")
payment_data = {
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "token": "<CARD_TOKEN>",
    "description": "<DESCRIPTION>",
    "installments": <INSTALLLMENTS_NUMBER>,
    "payer": {
        "email": "<BUYER_EMAIL>",
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
> Quando o _Challenge_ é iniciado, o usuário tem cerca de 5 minutos para completá-lo. Se não for concluído, o banco recusará a transação e o Mercado Pago considerará o pagamento cancelado. Enquanto o usuário não completar o _Challenge_, o pagamento ficará como `pending_Challenge`.

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

Uma transação com 3DS pode retornar diferentes status dependendo do tipo de autenticação realizada (com ou sem _Challenge_). Em um pagamento **sem _Challenge_**, o status da transação será diretamente `approved` ou `rejected`.

Em um pagamento **com _Challenge_**, a transação ficará com status `pending` e o processo de autenticação junto ao banco será iniciado. Somente após esta etapa o status final será exibido.

Veja abaixo a tabela com os possíveis status e suas respectivas descrições.

| Status     | Status_detail                 | Descrição                                                         |
|------------|-------------------------------|-------------------------------------------------------------------|
| "approved" | "accredited"                  | Transação aprovada sem autenticação.                               |
| "rejected" | -                            | Transação rejeitada sem autenticação. Para conferir os motivos, consulte a [lista padrão de status detail](https://mercadopago.com.br/developers/pt/docs/checkout-api/response-handling/collection-results).                              |
| "pending"  | "pending_challenge"           | Transação pendente de autenticação ou _timeout_ do _Challenge_.       |
| "rejected" | "cc_rejected_3ds_challenge"   | Transação rejeitada devido a falha no _Challenge_.                  |

## Teste de integração

Para que seja possível validar pagamentos com 3DS, disponibilizamos um ambiente de testes do tipo *sandbox* que retorna resultados falsos apenas para simulação e validação da implementação.

> WARNING
>
> Lembre-se de utilizar as credenciais de teste da sua aplicação. 

Para realizar testes de pagamento em um ambiente *sandbox*, é necessário utilizar cartões específicos que permitem testar a implementação do _Challenge_ com os fluxos de sucesso e falha. A tabela a seguir apresenta os detalhes desses cartões:

| Cartão    | Fluxo                    | Número             | Código de segurança | Data de vencimento |
|-----------|--------------------------|--------------------|---------------------|--------------------|
| Mastercard | Challenge com sucesso    | 5483 9281 6457 4623 | 123                 | 11/25              |
| Mastercard | Challenge não autorizado | 5361 9568 0611 7557 | 123                 | 11/25              |

Os passos para criar o pagamento são os mesmos. Em caso de dúvida sobre como criar pagamentos com cartão, consulte a [documentação sobre Cartões](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform). 

> NOTE
>
> Para garantir que o pagamento seja criado com 3DS, lembre-se de incluir o atributo three_d_secure_mode com o valor optional.
 
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
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
transaction_amount: req.transaction_amount,
  token: req.token,
  description: req.description,
  installments: req.installments,
  payment_method_id: req.paymentMethodId,
  issuer_id: req.issuer,
  payer: {
    email: req.email,
    identification: {
      type: req.identificationType,
      number: req.number
    }
  },
  three_d_secure_mode: 'optional' 
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
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

Em ambos os fluxos (sucesso e falha), o _Challenge_, que é uma tela semelhante à mostrada abaixo, deve ser exibido dentro do *iframe*:

![Challenge](/images/api/sandbox-v1-pt.png)

O código de verificação fornecido é apenas ilustrativo. Para concluir o fluxo de teste, basta clicar no botão **Confirmar**. Após concluir essa ação, siga as instruções detalhadas na seção **Verificar o Status da Transação** para identificar quando o _Challenge_ foi concluído e como verificar a atualização do pagamento. 