# Introducción

**IPN** (Instant Payment Notification) es un mecanismo que permite que tu aplicación reciba notificaciones de Mercado Pago, informando el estado de un determinado pago, contracargo y `merchant_order`, a través de una llamada HTTP POST para informar sobre sus transacciones.

En las notificaciones de IPN, solo se puede configurar una URL de notificación por cuenta de Mercado Pago (según la aplicación, más de una aplicación puede usar esta URL). Además, también existe la posibilidad de utilizar este tipo de notificación desde el campo `notification_url` del objeto, de esta forma la URL puede ser diferente para cada objeto o aplicación.

En esta documentación te explicaremos la configuración necesaria para recibir notificaciones de IPN (a través del Dashboard o al momento de crear pagos), y te mostraremos las acciones necesarias que debes realizar para que Mercado Pago valide que los mensajes fueron recibidos correctamente.

## Configuración de URLs y eventos

A continuación explicaremos cómo indicar las URLs que serán notificadas y cómo configurar los eventos para los que se recibirán notificaciones.

![ipn](/images/dashboard/ipn_es_.png)

1. Si aún no lo has hecho, crea una aplicación en el [Panel del desarrollador](/developers/panel/app).
2. Con la aplicación creada, ve a la sección IPN en la página de **Detalles de la aplicación**.
3. A continuación, configura la **URL** de **producción** donde se recibirán las notificaciones.
4. También podrás experimentar y probar si la URL indicada está recibiendo notificaciones correctamente, pudiendo verificar la solicitud, la respuesta dada por el servidor y la descripción del evento.
5. Si necesitas identificar varias cuentas, al final de la URL indicada puedes especificar el parámetro `?cliente=(nombredelvendedor) endpoint` para identificar a los vendedores.
6. Selecciona los **eventos** de los que recibirás notificaciones en formato `json` usando `HTTP POST` a la URL especificada anteriormente. Te notificamos de los eventos relacionados con tus pedidos (`merchant_orders`), devoluciones de cargo recibidas (`chargebacks`), pagos recibidos (`payment`), intentos de pago (`point_integration_ipn`) o alertas de fraude (`delivery_cancellation`).

## Configuración al crear pagos

Es posible configurar la URL de notificación de forma más específica para cada pago utilizando el campo `notification_url`. Ve a continuación cómo hacer esto usando los SDK.

1. En el campo `notification_url`, indica la URL desde la que se recibirán las notificaciones, como se muestra abajo.


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


2. Implementa el receptor de notificaciones usando el siguiente código como ejemplo:


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


3. Una vez realizadas las configuraciones, Mercado Pago notificará esa URL con dos parámetros cada vez que se cree o actualice un recurso:


| Campo | Descripción |
| --- | --- |
| `topic` | Identifica cuál es el recurso, puede ser `payment`, `chargebacks`, `merchant_order ` o `point_integration_ipn`. |
| `id` | Es un identificador único del recurso notificado. |


> Por ejemplo, si configuras la URL: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago como esta:` https://www.yoursite.com/notifications?topic=payment&id=123456789`.


4. Si deseas recibir notificaciones solo de IPN y no de Webhooks, puedes agregar en el `notification_url` el parámetro `source_news=ipn`. Por ejemplo: `https://www.yourserver.com/notifications?source_news=ipn`.


# Después de recibir la notificación

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Después de devolver la notificación, obtendrás la información completa del recurso notificado yendo al endpoint de la API correspondiente.

| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) |

Además, específicamente en las alertas de fraude, no deberás entregar el paquete y realizar la cancelación, para eso debes utilizar la [API de cancelaciones](/developers/es/reference/chargebacks/_payments_payment_id/put).

En la notificación recibirás un `JSON` con la siguiente información que contiene el payment id para realizar la cancelación.


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
> También puedes obtener más información de la orden utilizando la api [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get).

<br>

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado o un pedido cerrado.
