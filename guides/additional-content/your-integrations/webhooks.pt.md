# Webhooks

O **Webhooks** (também conhecido como retorno de chamada web) é um método simples que facilita com que um app ou sistema forneça informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva através de um `HTTP POST`.

As notificações Webhooks poderão ser configuradas para uma ou mais aplicações criadas em seu [Painel do desenvolvedor](/developers/panel/app).

Uma vez configurado, o Webhook será enviado sempre que ocorrer um ou mais eventos cadastrados, evitando que haja um trabalho de pesquisa a cada minuto em busca de uma resposta e, por consequência, que ocorra uma sobrecarga do sistema e a perda de dados sempre que houver alguma situação. Após receber uma notificação na sua plataforma, o Mercado Pago aguardará uma resposta para validar se você a recebeu corretamente.

Nesta documentação, explicaremos as configurações necessárias para o recebimento das mensagens (através do Painel do desenvolvedor ou durante a criação de pagamentos), além de apresentar quais são as ações necessárias que você deverá ter para que o Mercado Pago valide que as notificações foram devidamente recebidas.

## Configuração através do Painel do desenvolvedor

Abaixo explicaremos como: indicar as URLs que serão notificadas, configurar os eventos dos quais se receberá a notificação, simular o recebimento de diversos tipos de notificações e validar que as notificações que recebe são enviadas pelo Mercado Pago.

![webhooks](/images/dashboard/webhooks-pt.png)

### Configurar URLs e Eventos

1. Caso ainda não tenha, crie uma aplicação no [Painel do desenvolvedor](/developers/panel/app).
2. Com a aplicação criada, navegue até a seção Webhooks na página de "Detalhes da aplicação" e configure as URLs de **produção** e **teste** da qual serão recebidas as notificações.
3. Caso seja necessário identificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para identificar os vendedores.
4. Em seguida, selecione os **eventos** dos quais você receberá notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo. Veja na tabela abaixo os eventos que poderão ser configurados.

| Tipo de notificação | Ação | Descrição |
| :--- | :--- | :--- |
| `payment` | `payment.created` | Criação de pagamento |
| `payment` | `payment.updated` | Atualização de pagamento |
| `mp-connect` | `application.deauthorized` | Desvinculação de conta |
| `mp-connect` | `application.authorized` | Vinculação de conta |
| `subscription_preapproval` | `created - updated` | Assinatura |
| `subscription_preapproval_plan` | `created - updated` | Plano de assinatura |
| `subscription_authorized_payment` | `created - updated` | Pagamento recorrente de uma assinatura |
| `point_integration_wh` | `state_FINISHED`| Processo de pagamento concluído |
| `point_integration_wh` | `state_CANCELED` | Processo de pagamento cancelado |
| `point_integration_wh` | `state_ERROR`| Ocorreu um erro ao processar a tentativa de pagamento |
| `delivery` | `delivery.updated`| Dados de envio e atualização do pedido |
| `delivery_cancellation` | `case_created`| Solicitação de cancelamento do envio |
| `topic_claims_integration_wh` | `updated`| Reclamações feitas pelas vendas |

5. Por fim, clique em **Salvar** para gerar uma **assinatura secreta** para a aplicação. A assinatura é um método de validação para garantir que notificações recebidas foram enviadas pelo Mercado Pago. 

> WARNING
>
> Importante
>
> O Mercado Pago sempre enviará essa assinatura nas notificações Webhooks. Sempre confira essa informação de autenticidade para evitar fraudes. </br></br>
> </br></br>
> A assinatura gerada não tem prazo de validade e, embora não seja obrigatório, recomendamos renovar periodicamente a **assinatura secreta**. Para isso, basta clicar no botão de redefinição ao lado da assinatura.

### Validar origem da notificação

1. Após configurar as URLs e os Eventos, **revele a assinatura secreta** gerada.
2. Em seguida, utilize a assinatura secreta para validar o *header* `x-signature-id`. O valor recebido no *header* deve coincidir com a chave obtida na etapa anterior. No exemplo mostrado abaixo, o valor `59f768b5fcd30f47764052992e42b0f8812d02ffa34ca9f8d9947f2dcb7027f1` deve coincidir com a chave secreta gerada.

```header
...
accept-encoding	*
content-type	application/json
accept	*/*
x-signature-id	59f768b5fcd30f47764052992e42b0f8812d02ffa34ca9f8d9947f2dcb7027f1
...
```

### Simular o recebimento da notificação

1. Após configurar as URLs e os Eventos, clique em **Simular** para experimentar e testar se a URL indicada está recebendo as notificações corretamente.
2. Na tela em questão, selecione a URL a ser testada, podendo ser **de teste ou de produção**. 
3. Em seguida, selecione o **tipo de evento** e insira a **identificação** que será enviada no corpo da notificação.
4. Por fim, cique em **Enviar teste** para verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.

## Configuração durante a criação de pagamentos

É possível configurar a URL de notificação de modo mais específico, para cada pagamento utilizando o campo `notification_url`. Veja abaixo como fazer isso com uso dos SDKs.

1. No campo `notificaction_url`, indique a URL da qual serão recebidas as notificações como exemplificado abaixo.

[[[
```php
<?php 
$client = new PaymentClient();

        $body = [
            'transaction_amount' => 100,
            'token' => 'token',
            'description' => 'description',
            'installments' => 1,
            'payment_method_id' => 'visa',
            'notification_url' => 'http://test.com',
            'payer' => array(
                'email' => 'test@test.com',
                'identification' => array(
                    'type' => 'CPF',
                    'number' => '19119119100'
                )
            )
        ];

$client->create(body);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
 transaction_amount: '100',
  token: 'token',
  description: 'description',
  installments: 1,
  payment_method_id: 'visa',
  notification_url: 'http://test.com',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  }
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");


Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"))
      .setNotificationUrl("http://requestbin.fullcontact.com/1ogudgk1");


Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
             .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------


Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);


payment.save();


System.out.println(payment.getStatus());


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
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
 payer: {
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:docType],------------
     number: params[:docNumber]
   }
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
   NotificationUrl = "http://requestbin.fullcontact.com/1ogudgk1",


   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["docType"],------------
           Number = Request["docNumber"],
       },
   },
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
   "notification_url" =  "http://requestbin.fullcontact.com/1ogudgk1",
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}


payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]


print(payment)
```
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
         "payer": {
           "email": "test@test.com"


         }
   }'


```
]]]

2. Implemente o receptor de notificações usando o seguinte código como exemplo:

```php
<?php
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 switch($_POST["type"]) {
     case "payment":
         $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
         break;
     case "plan":
         $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
         break;
     case "subscription":
         $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
         break;
     case "invoice":
         $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
         break;
     case "point_integration_wh":
         // $_POST contém as informações relacionadas à notificação.
         break;
 }
?>
```

3. Feitas as devidas configurações, a notificação via Webhooks terá o seguinte formato:

> NOTE
>
> Importante
>
> Para o tipo de evento `point_integration_wh`, o formato da notificação muda. [Clique aqui](/developers/pt/docs/mp-point/landing) para consultar a documentação do **Mercado Pago Point**.
> <br/>
> No caso dos eventos de `delivery` e `topic_claims_integration_wh`, também teremos alguns atributos diferentes na resposta. Veja na tabela abaixo quais são essas particularidades.


```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```
Isso indica que foi criado o pagamento **999999999** para o usuário **44444** em modo de produção com a versão V1 da API e que esse evento ocorreu na data **2016-03-25T10:04:58.396-04:00**.

| Atributo | Descrição |
| --- | --- |
| **id** | ID de notificação |
| **live_mode** | Indica se a URL informada é valida |
| **type** | Tipo de notificação recebida (payments, mp-connect, subscription, claim, etc) |
| **date_created** | Data de criação do recurso |
| **user_id**| UserID de vendedor |
| **api_version** | Indica se é uma notificação duplicada ou não |
| **action** | Tipo de notificação recebida, indicando se se trata da atualização de um recurso ou da criação de um novo |
| **data - id** | ID do payment, do merchant_order ou da reclamação |
| **attempts** (delivery) | Número de vezes que uma notificação foi enviada |
| **received** (delivery) | Data de criação do recurso |
| **resource** (delivery) | Tipo de notificação recebida, indicando se trata-se da atualização de um recurso ou da criação de um novo |
| **sent** (delivery) | Data de envio da notificação |
| **topic** (delivery) | Tipo de notificação recebida  |
| **resource** (claims) | Tipo de notificação recebida, indicando notificações relacionadas à reclamações feitas por vendas |

4. Caso deseje receber notificações apenas de Webhook e não de IPN, você pode adicionar na `notification_url` o parâmetro `source_news=webhook`. Por exemplo: https://www.yourserver.com/notifications?source_news=webhooks

## Ações necessárias após receber uma notificação

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

> NOTE
>
> Importante
>
> No caso do tipo de evento `delivery`, para evitar que o tópico de notificações realize novas tentativas de envio será necessário confirmar o recebimento das mensagens retornando um `HTTP STATUS 200 (OK)` em até **500 ms**. Caso não seja enviada uma mensagem confirmando o recebimento da notificação, **novas tentativas serão feitas em um período de 12 horas**.

Depois de dar um retorno à notificação e confirmar o seu recebimento, você obterá as informações completas do recurso notificado acessando o endpoint correspondente da API:

----[mpe, mco, mlu, mlc]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](/developers/pt/reference/payments/_payments_id/get) |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentação](/developers/pt/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/pt/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/pt/reference/subscriptions/_authorized_payments_id/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentação](/developers/pt/developers/pt/reference/claims/_data_resource/get) |

------------
----[mlm, mlb]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](/developers/pt/reference/payments/_payments_id/get) |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentação](/developers/pt/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/pt/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/pt/reference/subscriptions/_authorized_payments_id/get) |
| point_integration_wh | - | [ver documentação](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) |
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentação](/developers/pt/developers/pt/reference/claims/_data_resource/get) |

------------
----[mla]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](/developers/pt/reference/payments/_payments_id/get) |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentação](/developers/pt/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/pt/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/pt/reference/subscriptions/_authorized_payments_id/get) |
| point_integration_wh | - | [ver documentação](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) |
| delivery | - | [ver documentação](/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put) |
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentação](/developers/pt/developers/pt/reference/claims/_data_resource/get) |

------------

Além disso, especificamente em alertas de fraude, o pedido não deve ser entregue e o cancelamento precisa ser realizado através da [API de cancelamentos](/developers/pt/reference/chargebacks/_payments_payment_id/put).

Na notificação, você receberá um `JSON` com as seguintes informações contendo o id de pagamento para efetuar o cancelamento.

[[[
```Json


 "description": ".....",
 "merchant_order": 4945357007,
 "payment_id": 23064274473


```
]]]


> NOTE
>
> Importante
>
> É possível obter mais detalhes sobre o pedido utilizando a API [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get).


Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.