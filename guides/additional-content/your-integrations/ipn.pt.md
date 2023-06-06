# Introdução

O **IPN** (Instant Payment Notification) é um mecanismo que permite que sua aplicação receba notificações do Mercado Pago informando o estado de um determinado pagamento, chargeback e `merchant_order`, mediante uma chamada HTTP POST para informar sobre suas transações.

Nas notificações por IPN poderá ser configurada apenas uma URL de notificação por conta (dependendo da aplicação, mais de uma aplicação pode usar essa URL). Além disso, também há a possibilidade de utilizar esse tipo de notificação a partir do campo `notification_url` do objeto, dessa forma a URL poderá ser diferente para cada objeto ou aplicação.

Nesta documentação explicaremos as configurações necessárias para o recebimento das notificações IPN (através do Painel do desenvolvedor ou durante a criação de pagamentos), além de apresentar quais são as ações necessárias que você deverá ter para que o Mercado Pago valide que as mensagens foram devidamente recebidas.

## Configuração de URLs e Eventos

Abaixo explicaremos como indicar as URLs que serão notificadas e como configurar os eventos dos quais se receberá a notificação.

![ipn](/images/dashboard/ipn_pt_.png)

1. Caso ainda não tenha, crie uma aplicação no [Painel do desenvolvedor](/developers/panel/app). 
2. Com a aplicação criada, navegue até a seção IPN na página de **Detalhes da aplicação**.
3. Em seguida, configure a **URL** de **produção** no qual serão recebidas as notificações.
4. Você também poderá experimentar e testar se a URL indicada está recebendo as notificações corretamente, podendo verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.
5. Caso seja necessário identificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para identificar os vendedores.
6. Selecione os **eventos** dos quais você receberá notificações em formato `json` utilizando `HTTP POST` para a URL especificada anteriormente. Notificamos eventos relacionados aos seus pedidos (`merchant_orders`), estornos recebidos (`chargebacks`), pagamentos recebidos (`payment`), tentativas de pagamento (`point_integration_ipn`) ou alertas de fraude (`delivery_cancellation`).

## Configuração ao criar pagamentos

É possível configurar a URL de notificação de modo mais específico para cada pagamento utilizando o campo `notification_url`. Veja abaixo como realizar essa configuração com uso dos SDKs.

1. No campo `notificaction_url`, indique a URL do qual serão recebidas as notificações como exemplificado abaixo.

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
   $payment->notification_url = `http://requestbin.fullcontact.com/1ogudgk1`;
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
   "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
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
  $merchant_order = null;
  switch($_GET["topic"]) {
      case "payment":
          $payment = MercadoPago\Payment::find_by_id($_GET["id"]);
          // Get the payment and the corresponding merchant_order reported by the IPN.
          $merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order->id);
          break;
      case "merchant_order":
          $merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
          break;
  }
  $paid_amount = 0;
  foreach ($merchant_order->payments as $payment) { 
      if ($payment['status'] == 'approved'){
          $paid_amount += $payment['transaction_amount'];
      }
  }
   // If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
  if($paid_amount >= $merchant_order->total_amount){
      if (count($merchant_order->shipments)>0) { // The merchant_order has shipments
          if($merchant_order->shipments[0]->status == "ready_to_ship") {
              print_r("Totally paid. Print the label and release your item.");
          }
      } else { // The merchant_order don't has any shipments
          print_r("Totally paid. Release your item.");
      }
  } else {
      print_r("Not paid yet. Do not release your item.");
  }
 ?>
```


3. Feitas as configurações, o Mercado Pago notificará essa URL com dois parâmetros a cada vez que um recurso for criado ou atualizado:


| Campo | Descrição |
| --- | --- |
| `topic` | Identifica do que se trata o recurso, podendo ser `payment`, `chargebacks`, `merchant_order ` ou `point_integration_ipn`. |
| `id` | É um identificador único do recurso notificado. |

> Por exemplo, se configurar a URL: `https://www.yoursite.com/notifications`, você receberá as notificações de pagamento desta maneira: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.


4. Caso deseje receber notificações apenas de IPN e não de Webhooks, você pode adicionar na `notification_url` o parâmetro `source_news=ipn`. Por exemplo: `https://www.yourserver.com/notifications?source_news=ipn`

## Após receber a notificação

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o endpoint correspondente da API:

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |

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

<br>
  
Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado ou um pedido fechado.