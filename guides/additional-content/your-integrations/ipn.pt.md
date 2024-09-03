# IPN

IPN (Instant Payment Notification) é um mecanismo que permite que uma aplicação receba notificações do Mercado Pago sobre o status de um pagamento, _chargebacks_ e `merchant_orders`. Essas notificações são enviadas através de uma chamada HTTP POST, informando sobre as transações.

> WARNING
>
> Importante
>
> As notificações IPN serão descontinuadas. Além disso, apesar de receber o _header_ `x-Signature`, elas não permitem a validação por meio da chave secreta para confirmar que foram enviadas pelo Mercado Pago. Para realizar essa validação de origem, recomendamos migrar para as [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks), que agora também enviam os tópicos `merchant_order` e `chargebacks`.   

As notificações IPN podem ser configuradas de duas maneiras: 

| Modo de configuração | Descrição |
|---|---|
| [Configuração através de Suas integrações](/developers/pt/docs/your-integrations/notifications/ipn#configuraoviasuasintegraes) | Poderá ser configurada apenas **uma URL de notificação** por conta (dependendo da aplicação, mais de uma aplicação pode usar essa URL). |
| [Configuração durante a criação de pagamentos, preferências ou ordens comerciais](/developers/pt/docs/your-integrations/notifications/ipn#configuraoduranteacriaodepagamentos) | Isso pode ser realizado a partir do campo `notification_url`. A URL poderá ser diferente para cada objeto.  |

Nesta documentação explicaremos as configurações necessárias para o recebimento das notificações IPN, além de apresentar quais são as ações necessárias para que o Mercado Pago valide o correto recebimento das mensagens.

## Configuração via Suas integrações

Configure notificações diretamente via Suas integrações de forma eficiente e segura. 

### Indicar URLs e configurar eventos

Para configurar as notificações IPN via Suas integrações, é necessário indicar as URLs onde elas serão recebidas e especificar os eventos para os quais deseja receber notificações. 

> WARNING
>
> Importante
>
> Ao configurar as notificações IPN via Suas integrações, você está configurando a URL e os Eventos de **todos os aplicativos da sua conta do Mercado Pago**. 

Para configurar URLS e eventos, siga as etapas descritas abaixo:

1. Acesse [Suas integrações](/developers/panel/app) e selecione uma das aplicações para configurar as notificações para toda a sua conta. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard) e siga as instruções para fazê-lo.
2. No menu à esquerda, clique em **IPN** e configure a **URL de produção** que será usada para receber as notificações. Leve em consideração que é possível testar se a URL indicada está recebendo as notificações corretamente. Isso permite verificar a solicitação, a resposta do servidor e a descrição do evento.

![ipn](/images/dashboard/ipn_pt_.png)

> NOTE
>
> Nota
>
> Caso seja necessário identificar múltiplas contas, adicione o parâmetro `?cliente=(nomedovendedor)` ao final da URL indicada para identificar os vendedores.

3. Selecione os **eventos** para os quais deseja receber notificações em formato `JSON` através de um `HTTP POST` para a URL especificada anteriormente. Um evento pode ser qualquer atualização no objeto relatado, incluindo alterações de status ou atributos. Consulte a tabela abaixo para ver os eventos configuráveis, considerando a solução do Mercado Pago integrada e suas necessidades de negócio.

| Nome em Suas integrações | Eventos | Tópico | Produtos associados |
|---|---|---|---|
| Criação e atualização de pagamentos | Pagos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Wallet Connect |
----[mla, mlm, mlb]----| Finalização, cancelamento ou erro ao processar tentativas de pagamento nos dispositivos Mercado Pago Point. | Integrações Point | `point_integration_ipn` | Mercado Pago Point |------------
| Alertas de fraude após o processamento de um pedido | Alertas de fraude | `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout PRO |
| Criação, fechamento ou expiração de pedidos. |  Ordens comerciais | `merchant_order` | Checkout Pro<br>Código QR  |
| Abertura de estornos, alterações de status e modificações relacionadas às liberações de dinheiro.   |   Estornos | `chargebacks`  | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------ <br>Checkout Bricks |

> WARNING
>
> Importante
>
> Em caso de dúvidas sobre quais tópicos ativar ou quais eventos serão notificados, consulte a documentação [Informações adicionais sobre notificações](/developers/pt/docs/your-integrations/notifications/additional-info). 

4. Por fim, clique em **Salvar**. 

## Configuração durante a criação de pagamentos

Durante o processo de criação de pagamentos, preferências ou ordens comerciais, é possível configurar a URL de notificação de maneira específica para cada pagamento. Para isso, utilize o campo `notification_url` e implemente o receptor de notificações necessário.  

----[mla, mlb, mlm]----
> WARNING
>
> Importante
>
> Este método não permite configurar notificações para o tópico `point_integration_ipn`. Para ativá-lo, utilize as [configurações via Suas integrações](/developers/pt/docs/your-integrations/notifications/ipn#configuraoviasuasintegraes).

------------
 
A seguir, explicamos como realizar esta configuração utilizando nossoss SDKs.

1. No campo `notificaction_url`, indique a URL do qual serão recebidas as notificações como exemplificado abaixo. Para receber notificações exclusivamente via IPN e não via Webhooks, adicione o parâmetro `source_news=ipn` à `notification_url`. Por exemplo: `https://www.yourserver.com/notifications?source_news=ipn`.


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

2. Implemente o receptor de notificações utilizando o seguinte código como exemplo:

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

3. Após realizar as configurações, o Mercado Pago notificará essa URL com dois parâmetros sempre que um recurso for criado ou atualizado. Por exemplo, se configurar a URL `https://www.yoursite.com/notifications`, você receberá as notificações de pagamento desta maneira: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.

| Campo | Descrição |
| --- | --- |
| `topic` | Identifica o tipo de recurso, podendo ser `payment`, `chargebacks`, `merchant_order ` ou `point_integration_ipn`. |
| `id` | Identificador único do recurso notificado. |


## Ações necessárias após receber uma notificação

Ao receber uma notificação em sua plataforma, o Mercado Pago aguarda uma resposta para validar se você a recebeu corretamente. Para isso, é necessário retornar um status `HTTP STATUS 200 (OK)` ou `201 (CREATED)`. 

O **tempo de espera** para a confirmação da recepção das notificações será de **22 segundos**. Se essa confirmação não for enviada, o sistema entenderá que a notificação não foi recebida e realizará **novas tentativas de envio a cada 15 minutos**, até receber uma resposta. Após a terceira tentativa, o prazo será prorrogado, mas os envios continuarão acontecendo.

Após responder à notificação e confirmar seu recebimento, é possível obter as informações completas do recurso notificado fazendo uma requisição ao endpoint correspondente da API. Para identificar qual endpoint utilizar, confira a tabela abaixo:

| Tópico | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obter pagamento](/developers/pt/reference/payments/_payments_id/get)  |
| point_integration_ipn| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obter intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get) |

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.