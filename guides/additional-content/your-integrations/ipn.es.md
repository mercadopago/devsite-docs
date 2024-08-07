# IPN

IPN (Instant Payment Notification) es un mecanismo que permite que tu aplicación reciba notificaciones de Mercado Pago, informando el estado de un determinado pago, contracargo y `merchant_order`, a través de una llamada HTTP POST para informar sobre sus transacciones.

> WARNING
>
> Importante
>
> Las notificaciones IPN van a ser descontinuadas. Además, a pesar de recibir el *header* `x-Signature`, no permiten la validación mediante la clave secreta para confirmar que las mismas fueron enviadas por Mercado Pago. Si deseas realizar esta validación, recomendamos migrar a [notificaciones Webhooks](/developers/es/docs/mp-point/additional-content/your-integrations/notifications/webhooks).   


Las notificaciones IPN pueden ser configuradas de dos maneras:

| Tipo de configuración | Descripción |
|---|---|
| [Configuración a través de Tus integraciones]() | Podrá ser configurada solo una URL de notificación por cuenta (dependiendo de la aplicación, más de una de ellas podrá usar la URL). |
| [Configuración durante la creación de pagos]() | Puede ser realizada a partir del campo `notification_url`. La URL podrá ser diferente para cada objeto o aplicación. |

En esta documentación explicaremos cómo realizar la configuración necesaria para recibir notificaciones IPN a través de Tus integraciones o al momento de crear pagos, y te mostraremos las acciones necesarias para que Mercado Pago valide que los mensajes fueron recibidos correctamente.


## Configuración a través de Tus integraciones

Puedes configurar notificaciones IPN directamente desde Tus integraciones de manera eficiente y segura.

### Indicar URLs y configurar eventos

Para configurar notificaciones IPN mediante Tus integraciones, es necesario indicar las URLs a las que las mismas serán enviadas y especificar los eventos para los cuales deseas recibirlas. 

> WARNING
>
> Importante
>
> Al configurar notificaciones IPN vía Tus integraciones, estarás configurando la URL y los Eventos de **todas las aplicaciones de tu cuenta de Mercado Pago**. 

Para confiruar URLs y eventos, sigue el paso a paso a continuación:

1. Ingresa a [Tus Integraciones](/developers/panel/app) y selecciona la aplicación para la que deseas activar las notificaciones. En caso de que aún no hayas creado una aplicación, accede a la [documentación sobre el Panel del Desarrollador](/developers/es/docs/woocommerce/additional-content/your-integrations/dashboard) y sigue las instrucciones para poder hacerlo.
2. En el menú de la izquierda, selecciona **IPN**, y configura la **URLs de producción** que será utilizada para recibir las notificaciones. También podrás probar si la URL indicada está recibiendo notificaciones correctamente, verificando la solicitud, la respuesta dada por el servidor y la descripción del evento.

![ipn](/images/dashboard/ipn_es_.png)

> NOTE
>
> Nota
>
> En caso de ser necesario identificar múltiples cuentas, agrega el parámetro `?cliente=(nombredelvendedor)` endpoint al final de la URL indicada, para identificar a los vendedores.

3. Selecciona los **eventos** para los cuales deseas recibir las notificaciones, que serán enviadas en formato `json` a través de un `HTTP POST` a la URL especificada anteriormente.  Un evento puede ser cualquier actualización sobre el tópico reportado, incluyendo cambios de status o atributos. Consulta la tabla a continuación para ver qué eventos pueden ser configurados teniendo en cuenta la solución de Mercado Pago integrada y las particularidades de negocio.

| Eventos | Nombre en Tus integraciones | Tópico | Productos asociados |
|---|---|---|---|
| Creación y actualización de pagos | Pagos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>----[mla, mlm, mlb]----MP Point------------<br>Wallet Connect |
----[mla, mlm, mlb]----| Finalización, cancelación o errores al procesar intenciones de pago de dispositivos Mercado Pago Point. | Integraciones Point | `point_integration_ipn` | Mercado Pago Point |------------
| Alertas de fraude luego del procesamiento de un pedido | Alertas de fraude | `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout PRO |
| Creación, actualización o cierre de órdenes comerciales |  Órdenes comerciales | `merchant_order` | Checkout Pro<br>Código QR  |
| Apertura de contracargos, cambios de status y modificaciones referentes a las liberaciones de dinero.   |   Contracargos | `chargebacks`  | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------ <br>Checkout Bricks |

> WARNING
>
> Importante
>
> En caso de dudas sobre los tópicos a activar o los eventos que serán notificados, consulta la documentación [Información adicional sobre notificaciones](). 

## Configuración durante la creación de un pago

Durante el proceso de creación de pagos, es posible configurar la URL de notificación de forma más específica para cada pago, utilizando el campo `notification_url` e implementando un receptor de notificaciones. 

> WARNING
>
> Importante
>
> Este método no permite configurar notificaciones para el tópico `point_integration_ipn` utilizando este método. Para activarlo, utiliza la configuración mediante Tus integraciones.
 
A continuación, explicamos cómo configurar notificaciones IPN al crear un pago usando los SDK.

1. En el campo `notification_url`, indica la URL desde la que se recibirán las notificaciones, como se muestra a continuación.

> NOTE
>
> Nota
> 
> Para recibir notificaciones exclusivamente vía IPN y no vía Webhooks, es posible agregar el parámetro `source_news=webhooks a la notification_url`. Por ejemplo: "https://www.yourserver.com/notifications?source_news=webhooks".


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
| `topic` | Identifica cuál es el recurso. Puede ser `payment`, `chargebacks`, `merchant_order ` o `point_integration_ipn`. |
| `id` | Es un identificador único del recurso notificado. |


# Después de recibir la notificación

## Acciones necesarias después de recibir la notificación

Cuando recibes una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que esa recepción fue correcta. Para eso, debes devolver un `HTTP STATUS 200 (OK)` o `201 (CREATED)`. 

El **tiempo de espera** para esa confirmación será de **22 segundos**. Si no se envía esta respuesta, el sistema entenderá que la notificación no fue recibida y realizará un **nuevo intento de envío cada 15 minutos**, hasta que reciba la respuesta. Después del tercer intento, el plazo será prorrogado, pero los envíos continuarán sucediendo.

Luego de responder la notificación, confirmando su recibimiento, puedes obtener toda la información sobre el recurso notificado haciendo una requisición al endpoint correspondiente. Para identificar qué endpoint debes utilizar, consulta la tabla debajo:

| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obtener pago](/developers/es/reference/payments/_payments_id/get)  |
| point_integration_ipn| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obtener intención de pago](/developers/es/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obtener pedido](/developers/es/reference/merchant_orders/_merchant_orders_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obtener contracargo](/developers/es/reference/chargebacks/_chargebacks_id/get) |

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado.
