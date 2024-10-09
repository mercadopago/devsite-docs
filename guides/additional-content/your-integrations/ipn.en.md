# IPN

Instant Payment Notification (IPN) is a mechanism that allows your application to receive notifications from Mercado Pago informing about the status of a specific payment, chargeback, or `merchant_order`, through an `HTTP POST` call to report on your transactions.

> WARNING
>
> Important
>
> IPN notifications will be discontinued. Additionally, despite receiving the `x-Signature` header, they do not allow validation through the secret key to confirm they were sent by Mercado Pago. If you wish to perform this origin validation, we recommend migrating to [Webhooks notifications](/developers/en/docs/your-integrations/notifications/webhooks), which now also send the `merchant_order` and `chargebacks` topics.   

IPN notifications can be configured in two ways: 

| Configuration mode | Description |
|---|---|
| [Description configuration through Your integrations](/developers/en/docs/your-integrations/notifications/ipn#bookmark_configuration_through_your_integrations) | Only **one notification URL** can be configured per account (depending on the application, more than one application can use this URL). |
| [Configuration during the creation of a payment, preference or order](/developers/en/docs/your-integrations/notifications/ipn#bookmark_configuration_during_payment_creation) | This can be done using the `notification_url` field. The URL can be different for each object.  |

In this documentation, we will explain the necessary configurations for receiving IPN notifications, as well as the required actions to ensure that Mercado Pago validates that the messages were properly received.

## Configuration through Your integrations

Configure notifications directly in Your integrations efficiently and securely.

### Specify URLs and configure events

To configure IPN notifications via Your integrations, it is necessary to specify the URLs where they will be received and specify the events for which you wish to receive notifications.

> WARNING
>
> Important
>
> When configuring IPN notifications via Your integrations, you are setting up the URL and Events for **all applications within your Mercado Pago account**.

To configure URLs and events, follow these steps:

1. Access [Your integrations](/developers/panel/app) and select the application to enable notifications for your account. If you haven't created an application yet, access the [Developer Dashboard documentation](/developers/en/docs/your-integrations/dashboard) and follow the instructions to do so.
2. In the left menu, click on **IPN** and configure the **production URL** that will be used to receive notifications. Keep in mind that you can also experiment and test whether the indicated URL is correctly receiving notifications, allowing you to verify the request, server response, and event description.

![ipn](/images/dashboard/ipn_es_.png)

> NOTE
>
> Note
>
> If you need to identify multiple accounts, you can add the parameter `?cliente=(sellersname)` to the endpoint URL to identify the sellers.

3. Select the **events** from which you want to receive notifications in JSON format via an HTTP POST to the URL specified earlier. An event can be any type of update on the reported object, including status changes or attributes. Refer to the table below to see the events that can be configured, considering the integrated Mercado Pago solution and its business specifics.


| Events | Name in Your Integrations | Topic | Associated products |
|---|---|---|---|
| Creation and update of payments | Payments | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Subscriptions<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Wallet Connect |
----[mla, mlm, mlb]----| Completion and cancellation of payment attempt, or error processing payment attempt from Mercado Pago Point devices. | Point Integrations | `point_integration_ipn` | Mercado Pago Point |------------
| Fraud alerts after order processing | Fraud alerts | `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro |
| Creation, closure, or expiration of commercial orders | Commercial orders | `merchant_order` | Checkout Pro<br>QR Code  |
| Opening of chargebacks, status changes, and modifications related to the release of funds | Chargebacks | `chargebacks` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |

> WARNING
>
> Important
>
> If you have any questions about the topics to activate or the events that will be notified, consult the documentation [Additional information about notifications](/developers/en/docs/your-integrations/notifications/additional-info). 

4. Finally, click on **Save**.  

## Configuration during payment creation

During the process of creating a payment, preference or order, it's possible to configure the notification URL more specifically for each payment using the `notification_url` field and implementing the necessary notification receiver.  

----[mlm, mlb, mla]----

> WARNING
>
> Important
>
> It's not possible to configure notifications for the `point_integration_wh` topic using this method. To activate these topics, use [Your integrations settings](/developers/en/docs/your-integrations/notifications/ipn#bookmark_configuration_through_your_integrations).
------------
 
Next, we explain how to do this with the help of the SDKs.

1. In the `notification_url` field, specify the URL where notifications will be received, as shown in the example below. To receive notifications exclusively via Webhooks and not via IPN, you can add the parameter `source_news=ipn` to the `notification_url`. For example: `https://www.yourserver.com/notifications?source_news=ipn`.


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

2. Implement the notification receiver using the following code as an example:

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

3. Once the configurations are done, Mercado Pago will notify that URL with two parameters every time a resource is created or updated. For example, if you set up the URL `https://www.yoursite.com/notifications`, you will receive payment notifications like this: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.

| Field | Description |
| --- | --- |
| `topic` | Identifies what the resource is, which could be `payment`, `chargebacks`, `merchant_order ` o `point_integration_ipn`. |
| `id` | It is a unique identifier of the notified resource. |

## Necessary actions after receiving a notification

When you receive a notification on your platform, Mercado Pago expects a response to validate that you received it correctly. To do this, you need to return an `HTTP STATUS 200 (OK)` or `201 (CREATED)` status.

The **waiting time** for that confirmation is **22 seconds**. If this confirmation is not sent, the system will understand that the notification was not received and will **retry sending every 15 minutes** until a response is received. After the third attempt, the interval will be extended, but the attempts will continue.

After responding to the notification and confirming its receipt, you can obtain the complete information of the notified resource by making a request to the corresponding API endpoint. To identify which endpoint to use, check the table below:

| Topic | URL | Documentation |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Get payment](/developers/en/reference/payments/_payments_id/get)  |
| point_integration_ipn| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Search payment intent](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Get chargeback](/developers/en/reference/chargebacks/_chargebacks_id/get) |

With this information, you will be able to make the necessary updates to your platform, such as updating an approved payment.