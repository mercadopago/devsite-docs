# Webhooks

**Webhooks** (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas a través de un `HTTP POST`.

Las notificaciones Webhooks se pueden configurar para una o más aplicaciones creadas en tu [Panel del desarrollador](/developers/panel/app).

Una vez configurado, el Webhook se enviará siempre que se produzcan uno o más eventos registrados, evitando un trabajo de búsqueda cada minuto en busca de una respuesta y, en consecuencia, una sobrecarga del sistema y pérdida de datos siempre que se presente alguna situación. Luego de recibir una notificación en su plataforma, Mercado Pago esperará una respuesta para validar si la recibió correctamente.

En esta documentación, explicaremos las configuraciones necesarias para recibir los mensajes (a través del Panel del desarrollador o durante la creación de pagos), además de mostrar las acciones necesarias que debes realizar para que Mercado Pago valide que las notificaciones han sido recibidas correctamente.

## Configuración a través del Panel del desarrollador

A continuación explicaremos cómo: indicar las URL que serán notificadas, configurar los eventos de los cuales se recibirá la notificación, validar que las notificaciones que recibes son enviadas por Mercado Pago y simular la recepción de diversos tipos de notificaciones.

![webhooks](/images/dashboard/webhooks-es.png)

### Configurar URLs y Eventos

1. Caso aún no tengas una aplicación, crea una en el [Panel del desarrollador](/developers/panel/app).
2. Una vez creada la aplicación, navega hasta la sección de Webhooks en la página de "Detalles de la aplicación" y configura las URLs de **producción** y **prueba** a las cuales se recibirán las notificaciones.
3. Si necesitas identificar varias cuentas, al final de la URL indicada puedes indicar el parámetro `?cliente=(nommbredelvendedor) endpoint` para identificar a los vendedores.
4. A continuación, selecciona los **eventos** de los que recibirás notificaciones en formato `json` a través de un `HTTP POST` a la URL especificada anteriormente. Un evento es cualquier tipo de actualización del objeto informado, incluidos los cambios de estado o atributos. Vea los eventos que se pueden configurar en la siguiente tabla.

| Tipo de notificación | Acción | Descripción |
| :--- | :--- | :--- |
| `payment` | `payment.created` | Creación de pagos |
| `payment` | `payment.updated` | Actualización de pago |
| `mp-connect` | `application.deauthorized` | Desvinculación de cuenta |
| `mp-connect` | `application.authorized` | Vinculación de cuenta |
| `subscription_preapproval` | `created - updated` | Suscripción |
| `subscription_preapproval_plan` | `created - updated` | Plan de suscripción |
| `subscription_authorized_payment` | `created - updated` | Pago recurrente de una suscripción |
| `point_integration_wh` | `state_FINISHED`| Intento de pago finalizado |
| `point_integration_wh` | `state_CANCELED` | Intento de pago cancelado |
| `point_integration_wh` | `state_ERROR`| Ocurrió un error al procesar el intento de pago |
| `delivery` | `delivery.updated`| Datos de envío y actualización de pedidos |
| `delivery_cancellation` | `case_created`| Solicitud de cancelación de envío |
| `topic_claims_integration_wh` | `updated`| Reclamos hechos por las ventas |

5. Por último, haz clic en **Guardar** para generar una clave secreta para la aplicación.

> WARNING
> 
> Importante
> 
> Mercado Pago siempre enviará esta clave en las notificaciones Webhooks. Siempre verifica esta información de autenticidad para evitar fraudes. </br></br>
> </br></br>
> La clave generada no tiene fecha de caducidad y, aunque no es obligatorio, recomendamos renovar periódicamente la **clave secreta**. Para hacerlo, simplemente haz clic en el botón de restablecimiento junto a la clave.

### Validar origen de la notificación

1. Después de configurar las URLs y los Eventos, **revela la clave secreta** generada.
2. A continuación, utiliza la clave secreta para validar el encabezado `x-signature-id`. El valor del campo debe coincidir con la clave, como se muestra en el ejemplo a continuación.

```
accept-encoding	*
content-type	application/json
accept	*/*
x-signature-id	59f768b5fcd30f47764052992e42b0f8812d02ffa34ca9f8d9947f2dcb7027f1
```

### Simular la recepción de la notificación

1. Después de configurar las URLs y los Eventos, haz clic en **Simular** para experimentar y probar si la URL indicada está recibiendo las notificaciones correctamente.
2. En la pantalla correspondiente, selecciona la URL que se va a probar, que puede ser **la URL de prueba o la de producción**.
3. A continuación, elige el **tipo de evento** e ingresa la **identificación** que se enviará en el cuerpo de la notificación.
4. Por último, haz clic en **Enviar prueba** para verificar la solicitud, la respuesta proporcionada por el servidor y la descripción del evento.

## Configuración al crear pagos

Es posible configurar la URL de notificación de forma más específica para cada pago utilizando el campo `notification_url`. Ve a continuación cómo hacer esto usando los SDK.

1. En el campo `notification_url`, indica la URL desde la que se recibirán las notificaciones, como se muestra a continuación.

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

2. Implemente el receptor de notificaciones usando el siguiente código como ejemplo:

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
         // $_POST contiene la informaciòn relacionada a la notificaciòn.
         break;
 }
?>
```

3. Una vez que se hayan realizado los ajustes necesarios, la notificación a través de Webhook tendrá el siguiente formato:

> NOTE
>
> Importante
>
> Para el tipo `point_integration_wh` el formato de notificación cambia. [Haz clic aquí](/developers/es/guides/mp-point/introduction) para consultar la documentación de **Mercado Pago Point**.
> <br/>
> En el caso de los eventos `delivery` y `topic_claims_integration_wh`, también tendremos algunos atributos diferentes en la respuesta. Consulte la siguiente tabla para ver estas características.

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

Esto indica que el pago **999999999** fue creado para el usuario **44444** en modo de producción con API versión V1 y que este evento ocurrió en la fecha **2016-03-25T10: 04: 58.396-04: 00**.

| Atributo | Descripción |
| --- | --- |
| **id** | ID de la notificación |
| **live_mode** | Indica si la URL ingresada es válida.|
| **type** | Tipo de notificacion recebida (payments, mp-connect, subscription etc) |
| **date_created** | Fecha de creación del recurso |
| **user_id**| UserID del vendedor |
| **api_version** | Indica si es una notificación duplicada o no|
| **action** | Tipo de notificación recibida, indicando si es la actualización de un recurso o bien la creación de un nuevo |
| **data - id**  | ID del payment, merchant_order o del reclamo |
| **attempts** (delivery) | Número de veces que se envió una notificación|
| **received** (delivery) | Fecha de creación del recurso |
| **resource** (delivery) | Tipo de notificación recibida, indicando si se trata de una actualización de una característica o de la creación de una nueva |
| **sent** (delivery) | Fecha de envío de la notificación |
| **topic** (delivery) | Tipo de notificación recibida |
| **resource** (claims) | Tipo de notificación recibida, indicando notificaciones relacionadas con reclamos realizados por ventas |

4. Si deseas recibir notificaciones solo de Webhook y no de IPN, puedes agregar en el `notification_url` el parámetro`source_news=webhooks`. Por ejemplo: https://www.yourserver.com/notifications?source_news=webhooks

## Acciones necesarias después de recibir la notificación

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Luego de devolver la notificación y confirmar su recepción, obtendrás la información completa del recurso notificado accediendo al endpoint de la API correspondiente:

----[mpe, mco, mlu, mlc]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentación](/developers/es/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/es/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentación](/developers/es/developers/pt/reference/claims/_data_resource/get) |

------------
----[mlm, mlb]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentación](/developers/es/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/es/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| - | [ver documentación](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) |
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentación](/developers/es/developers/pt/reference/claims/_data_resource/get) |

------------
----[mla]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval` | [ver documentación](/developers/es/reference/subscriptions/_preapproval/post) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan` | [ver documentación](/developers/es/reference/subscriptions/_preapproval_plan/post)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments` | [ver documentación](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| - | [ver documentación](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) |
| delivery | - | [ver documentación](/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put)
| topic_claims_integration_wh | `https://api.mercadopago.com/claim_resource` | [ver documentación](/developers/es/developers/pt/reference/claims/_data_resource/get) |

------------

En el caso de las alertas de fraude, específicamente, no entregues el pedido, y utiliza la [API de Cancelaciones](/developers/es/reference/chargebacks/_payments_payment_id/put) para realizar su cancelación.

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
> También puedes obtener más información sobre la orden utilizando la API [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get).


Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado.