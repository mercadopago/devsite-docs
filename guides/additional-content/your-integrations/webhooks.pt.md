# Webhooks


O Webhooks (também conhecido como retorno de chamada web) é um método simples que facilita com que um app ou sistema forneça informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva através de um `HTTP POST`.


As notificações Webhooks poderão ser configuradas para uma ou mais aplicações criadas em seu [Painel do desenvolvedor](developers/panel/app).


Uma vez configurado, o Webhook será enviado sempre que ocorrer um ou mais eventos cadastrados, evitando que haja um trabalho de pesquisa a cada minuto em busca de uma resposta e, por consequência, que ocorra uma sobrecarga do sistema e a perda de dados sempre que houver alguma situação. Após receber uma notificação na sua plataforma, o Mercado Pago aguardará uma resposta para validar se você a recebeu corretamente.


Nesta documentação, explicaremos as configurações necessárias para o recebimento das mensagens (através do Painel do desenvolvedor ou durante a criação de pagamentos), além de apresentar quais são as ações necessárias que você deverá ter para que o Mercado Pago valide que as notificações foram devidamente recebidas.


## Configuração através do Painel do desenvolvedor


Abaixo explicaremos como indicar as URLs que serão notificadas e como configurar os eventos dos quais se receberá a notificação.


![webhooks](/images/notifications/webhooks_pt.png)


1. Caso ainda não tenha, crie uma aplicação no [Painel do desenvolvedor](developers/panel/app).
2. Com a aplicação criada, navegue até a seção Webhooks na página de Detalhes da aplicação e configure as URLs de **produção** e **teste** da qual serão recebidas as notificações.
3. Você também poderá experimentar e testar se a URL indicada está recebendo as notificações corretamente, podendo verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.
4. Caso seja necessário identificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para identificar os vendedores.
5. Em seguida, selecione os **eventos** dos quais você receberá notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo. Veja na tabela abaixo os eventos que poderão ser configurados.


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


## Configuração durante a criação de pagamentos


É possível configurar a URL de notificação de modo mais específico, para cada pagamento utilizando o campo `notification_url`. Veja abaixo como fazer isso com uso dos SDKs.


1. No campo `notificaction_url`, indique a URL da qual serão recebidas as notificações como exemplificado abaixo.


[[[
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
   $payment->notification_url = 'http://requestbin.fullcontact.com/1ogudgk1';
   ...
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


var payment_data = {
 transaction_amount: Number(req.body.transactionAmount),
 token: req.body.token,
 description: req.body.description,
 installments: Number(req.body.installments),
 payment_method_id: req.body.paymentMethodId,
 issuer_id: req.body.issuer,
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
 payer: {
   email: req.body.email,
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: req.body.docType,------------
     number: req.body.docNumber
   }
 }
};


mercadopago.payment.save(payment_data)
 .then(function(response) {
   res.status(response.status).json({
     status: response.body.status,
     status_detail: response.body.status_detail,
     id: response.body.id
≈    });
 })
 .catch(function(error) {
   res.status(response.status).send(error);
 });
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
> No caso do evento de `delivery`, também teremos alguns atributos diferentes na resposta. Veja na tabela abaixo quais são essas particularidades.


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
| **type** | Tipo de notificação recebida (payments, mp-connect, subscription, etc) |
| **date_created** | Data de criação do recurso (payments, mp-connect, subscription etc) |
| **user_id**| UserID de vendedor |
| **api_version** | Indica se é uma notificação duplicada ou não |
| **action** | Tipo de notificação recebida, indicando se se trata da atualização de um recurso ou da criação de um novo |
| **data - id** | ID do payment ou merchant_order |
| **attempts** (delivery) | Número de vezes que uma notificação foi enviada |
| **received** (delivery) | Data de criação do recurso |
| **resource** (delivery) | Tipo de notificação recebida, indicando se se trata da atualização de um recurso ou da criação de um novo |
| **sent** (delivery) | Data de envio da notificação |
| **topic** (delivery) | Tipo de notificação recebida  |
4. Caso deseje receber notificações apenas de Webhook e não de IPN, você pode adicionar na `notification_url` o parâmetro `source_news=webhook`. Por exemplo: https://www.yourserver.com/notifications?source_news=webhooks


## Ações necessárias após receber uma notificação


[TXTSNIPPET][/guides/snippets/test-integration/notification-response]


> NOTE
>
> Importante
>
> No caso do tipo de evento `delivery`, para evitar que o tópico de notificações realize novas tentativas de envio será necessário confirmar o recebimento das mensagens retornando um `HTTP STATUS 200 (OK)` em até **500 ms**. Caso não seja enviada uma mensagem confirmando o recebimento da notificação, **novas tentativas serão feitas em um período de 12 horas**.


Depois de dar um retorno à notificação e confirmar o seu recebimento, você obterá as informações completas do recurso notificado acessando o endpoint correspondente da API:


| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](/developers/pt/reference/payments/_payments_id/get) |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentação](/developers/pt/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/pt/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/pt/reference/subscriptions/_authorized_payments_id/get) |
| point_integration_wh | - | [ver documentação](/developers/pt/guides/mp-point/introduction) |
| delivery | - | [ver documentação](/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put) |


Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.
