# Notificaciones IPN para pagos online

## Configuración del Dashboard
 
A continuación explicaremos cómo indicar las URLs que serán notificadas y cómo configurar los eventos para los que se recibirán notificaciones.

![ipn](/images/notifications/ipn__es.png)

1. Accede a la pantalla [Notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. A continuación, configura la **URL** de **producción** donde se recibirán las notificaciones.
3. También podrás experimentar y probar si la URL indicada está recibiendo notificaciones correctamente, pudiendo verificar la solicitud, la respuesta dada por el servidor y la descripción del evento.
4. Si necesitas identificar varias cuentas, al final de la URL indicada puedes especificar el parámetro `?cliente=(nombredelvendedor) endpoint` para identificar a los vendedores.
5. Selecciona los **eventos** de los que recibirás notificaciones en formato `json` usando `HTTP POST` a la URL especificada anteriormente. Te notificamos de los eventos relacionados con tus pedidos (`merchant_orders`), devoluciones de cargo recibidas (`chargebacks`), pagos recibidos (`payment`) o intentos de pago (`point_integration_ipn`).
 
## Configuración al crear pagos

Es posible configurar la URL de notificación de forma más específica para cada pago utilizando el campo `notification_url`. Ve a continuación cómo hacer esto usando los SDK.

1. En el campo `notification_url`, indica la URL desde lo que se recibirán las notificaciones, como se muestra abajo.

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
 
3. Una vez realizada la configuración, Mercado Pago notificará esta URL con dos parámetros cada vez que se cree o actualice un recurso:
 
| Campo | Descripción |
| --- | --- |
| `topic` | Identifica cuál es el recurso, puede ser `payment`, `chargebacks`, `merchant_order ` o `point_integration_ipn`. |
| `id` | Es un identificador único del recurso notificado. |
 
Por ejemplo, si configuras la URL: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago como esta:` https://www.yoursite.com/notifications?topic=payment&id=123456789`.

4. Si deseas recibir notificaciones solo de IPN y no de Webhooks, puedes agregar en el `notification_url` el parámetro `source_news=ipn`. Por ejemplo: https://www.yourserver.com/notifications?source_news=ipn
 
## Acciones necesarias después de recibir la notificación

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Después de devolver la notificación, obtendrás la información completa del recurso notificado yendo al punto final de la API correspondiente:

| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) |
| point_integration_ipn | - | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/introduction) |

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado o un pedido cerrado.