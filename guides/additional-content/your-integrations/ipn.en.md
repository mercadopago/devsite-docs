# Introduction

The **IPN** (Instant Payment Notification) is a mechanism that allows your application to receive notifications from Mercado Pago informing the status of a certain payment, chargeback and `merchant_order`, through a call HTTP POST to inform about your transactions.

In IPN notifications, only one notification URL can be configured per account (depending on the application, more than one application can use this URL). In addition, there is also the possibility of using this type of notification from the object's `notification_url` field, so the URL can be different for each object or application.

In this documentation, we will explain the necessary settings for receiving IPN notifications (through the Dashboard or when creating payments), as well as showing the necessary actions that you must take for Mercado Pago to validate that the messages were properly received.

## URLs and events configuration

Below we will explain how to indicate the URLs that will be notified and how to configure the events for which notification will be received.

![ipn](/images/notifications/ipn__pt.png)

1. If you haven't done so already, create an application in the [Developer Dashboard](developers/panel/app).
2. Once the application is created, navigate to the IPN section on the **Application Details** page.
3. Next, configure the **production URL** where the notifications will be received.
4. If you need to identify multiple accounts, at the end of the indicated URL you can specify the parameter `?customer=(sellername) endpoint` to identify the sellers.
5. Select the **events** from which you will receive notifications in `json` format using `HTTP POST` to the URL specified above. We notify you of events related to your orders (`merchant_orders`), chargebacks received (`chargebacks`), payments received (`payment`), payment attempts (`point_integration_ipn`) ou fraud alerts (`delivery_cancellation`).

## Configuration while creating payments

It is possible to configure the notification URL more specifically for each payment using the `notification_url` field. See below how to do this using the SDKs.

1. In the `notification_url` field, indicate the URL from which notifications will be received, as shown below.


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

2. Implement the notifications receiver using the following code as an example:

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

3. After the configurations are completed, Mercado Pago will notify this URL with two parameters every time a resource is created or updated:

| Field | Description |
| --- | --- |
| `topic` | Identifies what the resource is, it can be `payment`, `chargebacks`,  `merchant_order ` or `point_integration_ipn`. |
| `id` | It is a unique identifier of the notified resource. |

> For example, if you set the URL: `https://www.yoursite.com/notifications`, you will receive payment notifications like this: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.

4. If you want to receive notifications only from IPN and not from Webhooks, you can add in the `notification_url` the parameter `source_news=ipn`. For example: `https://www.yourserver.com/notifications?source_news=ipn`.

## After receiving the notification

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

After returning the notification, you will get the full information of the notified resource by going to the corresponding API endpoint:

| Type | URL | Documentation |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) |

Also, specifically in fraud alerts, the order must not be delivered and the cancellation needs to be done through the [cancellations API](/developers/en/reference/chargebacks/_payments_payment_id/put).

In the notification, you will receive a `JSON` with the following information containing the payment id to cancel.

[[[
```Json


 "description": ".....",
 "merchant_order": 4945357007,
 "payment_id": 23064274473


```
]]]

> NOTE
>
> Important
>
> You can also get more order information using the [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) API.

With this information, you will be able to carry out the necessary updates to your platform, such as updating an approved payment or a closed order.