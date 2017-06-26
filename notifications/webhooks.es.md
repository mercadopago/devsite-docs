# Notificaciones Webhooks

> WARNING
>
> Pre-requisitos:
>
> * Tener implementado [API](../payments/api/introduction.es.md).

Un **webhook** es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, debes [configurar previamente una URL a la cual Mercado Pago tenga acceso](https://www.mercadopago.com/mla/account/webhooks).


## Eventos

Siempre que suceda un evento, te enviaremos una notificación en formato `json` usando `HTTP POST` a la URL que especificaste.

Notificaremos los siguientes eventos:

| Tipo de notificación |           Acción           |         Descripción          |
| :------------------- | :------------------------- | :--------------------------- |
| `payment`            | `payment.created`          | Creación de un pago          |
| `payment`            | `payment.updated`          | Actualización de un pago     |
| `mp-connect`         | `application.deauthorized` | Desvinculación de una cuenta |
| `mp-connect`         | `application.authorized`   | Vinculación de una cuenta    |
| `plan`               | `application.authorized`   | Vinculación de una cuenta    |
| `subscription`       | `application.authorized`   | Vinculación de una cuenta    |
| `invoice`            | `application.authorized`   | Vinculación de una cuenta    |

Si la aplicación no está disponible o demora en responder, Mercado Pago reintentará la notificación mediante el siguiente esquema:

1. Reintento a los 5 minutos.
2. Reintento a los 45 minutos.
3. Reintento a las 6 horas.
4. Reintento a los 2 días.
5. Reintento a los 4 días.

La notificación enviada tiene el siguiente formato:

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

Esto indica que se creó el pago **999999999** para el usuario **44444** en **modo productivo** con la versión V1 de la API. Dicho evento ocurrió en la fecha **2016-03-25T10:04:58.396-04:00**.


## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Luego de esto, puedes obtener la información completa del recurso notificado accediendo a la API correspondiente en `https://api.mercadopago.com/`:

Tipo         | URL                                                | Documentación
------------ | -------------------------------------------------- | --------------------
payment      | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentación]()
marketplace  | /oauth/token?...                                   | [ver documentación]()
plan         | /v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | [ver documentación]()
subscription | /v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentación]()
invoice      | /v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentación]()

Para obtener tu access\_token, revisa la documentación de [Autenticación]().

Con esta información puedes realizar las actualizaciones necesarias en tu plataforma, por ejemplo registrar un pago acreditado.

### Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

```php
 <?php
require_once "mercadopago.php";

$mp = new MP("ACCESS_TOKEN");

$json_event = file_get_contents('php://input', true);
$event = json_decode($json_event);

if (!isset($event->type, $event->data) || !ctype_digit($event->data->id)) {
	http_response_code(400);
	return;
}

if ($event->type == 'payment'){
    $payment_info = $mp->get('/v1/payments/'.$event->data->id);

    if ($payment_info["status"] == 200) {
        print_r($payment_info["response"]);
    }
}
?>
```
