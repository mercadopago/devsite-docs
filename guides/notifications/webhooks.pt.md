# Notificações Webhooks

Para configurar as notificações Webhooks que você quiser receber através de um `HTTP POST` toda vez que houver um evento relacionado a suas transações, siga as informações abaixo.

## Configuração pelo painel

1. Primeiramente, uma aplicação deverá ser criada em seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/devpanel).
2. Caso seja necessário identificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para identificar os vendedores.
3. Com a aplicação criada, acesse a aba Notificações Webhooks em seu Dashboard e configure as [URLs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications) de **produção** e **teste** da qual serão recebidas as notificações.
4. Em seguida, selecione os **eventos** dos quais você receberá notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo. Veja na tabela abaixo os eventos que poderão ser configurados.

| Tipo de notificação | Ação | Descrição |
| :--- | :--- | :--- |
| `payment` | `payment.created` | Criação de pagamento |
| `payment` | `payment.updated` | Atualização de pagamento |
| `mp-connect` | `application.deauthorized` | Desvinculação de conta |
| `mp-connect` | `application.authorized` | Vinculação de conta |
| `plan` | `application.authorized` | Vinculação de conta |
| `subscription` | `application.authorized` | Vinculação de conta |
| `invoice` | `application.authorized` | Vinculação de conta |

![webhook](/images/notifications/webhook_pt.png)

## Configuração na criação do pagamento

Caso a integração necessite que seja enviada uma notificação para mais de um lugar em uma mesma aplicação, veja no passo a passo abaixo como utilizar os SDKs para configurar a notificação quando fizer o POST do pagamento

1. No campo `notificaction_url`, indique a URL da qual serão recebidas as notificações como exemplificado abaixo.

[[[
```php
===
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
    $payment->notification_url = "http://requestbin.fullcontact.com/1ogudgk1";

    $payer = new MercadoPago\Payer();
    $payer->email = $_POST['email'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['docType'],------------
        "number" => $_POST['docNumber']
    );
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
===

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
===

MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");

Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
       .setToken(request.getParameter("token"))
       .setDescription(request.getParameter("description"))
       .setInstallments(Integer.valueOf(request.getParameter("installments")))
       .setPaymentMethodId(request.getParameter("paymentMethodId"))
       .setNotificationUrl: "http://requestbin.fullcontact.com/1ogudgk1";

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
===
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
===
Encontre o estado do pagamento no campo _status_.
===
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
    Notification_url = Request["http://requestbin.fullcontact.com/1ogudgk1"],

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
===
Encontre o estado do pagamento no campo _status_.
===
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
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("type"), ------------
            "number": request.POST.get("number")
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
notification_url =  "http://requestbin.fullcontact.com/1ogudgk1"

print(payment)
```
```curl
===

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
  }
?>
```

2. Feitas as devidas configurações, a notificação via Webhook terá o seguinte formato:

```json
{
  "id": 12345,
  "live_mode": true,
  "type": "payment",
  "date_created": "2015-03-25T10:04:58.396-04:00",
  "application_id": 123123123,
  "user_id": 44444,
  "version": 1,
  "api_version": "v1",
  "action": "payment.created",
  "data": {
      "id": "999999999"
  }
}
```
 
Isso indica que foi criado o pagamento **999999999** para o usuário **44444** em modo de produção com a versão V1 da API e que esse evento ocorreu na data **2016-03-25T10:04:58.396-04:00**.

## Ações necessárias após receber uma notificação

Caso haja a necessidade de enviar uma notificação, o Mercado Pago enviará de acordo com um cronograma de novas tentativas e prazos para sua confirmação:

| Evento | Prazo após o primeiro envio | Tempo de espera de confirmação |
| --- | --- | --- |
| Envio | - | 22 segundos |
| Primeira tentativa | 5 minutos | 5 segundos |
| Segunda tentativa | 45 minutos | 5 segundos |
| Terceira tentativa | 6 horas | 5 segundos |
| Quarta tentativa | 2 dias | 5 segundos |
| Quinta tentativa | 4 dias | 5 segundos |

Quando você recebe uma notificação na sua plataforma, o Mercado Pago aguarda uma resposta para validar que você a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)` e, caso contrário, será entendido que você não o recebeu corretamente e você será notificado novamente.

É recomendável que você responda a notificação antes de executar a lógica de negócios ou antes de acessar recursos externos, a fim de evitar exceder os prazos de resposta estimados. Essa comunicação é exclusiva entre os servidores do Mercado Pago e, portanto, não haverá usuário físico vendo nenhum tipo de resultado.
 
> WARNING
>
> Importante
>
> Se os prazos de resposta forem excedidos, é possível receber notificações duplicadas de um evento.

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o terminal correspondente da [API](https://api.mercadopago.com/):

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| plan | `https://api.mercadopago.com/v1/plans/[ID]` | - |
| subscription | `https://api.mercadopago.com/v1/subscriptions/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post) |
| invoice | `https://api.mercadopago.com/v1/invoices/[ID]` | - |

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.