# Webhooks

Un **webhook** es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` al ocurrir un determinado evento.

Mercado Pago usa **webhooks** para comunicarte los eventos que ocurren en relación a tu aplicación. Por el momento notificamos eventos referidos a tus cobros o los de los usuarios que posees conectados; autorización o desautorización de tus usuarios a tu aplicación, y eventos referidos a suscripciones.

## ¿Cómo funciona?

1. Recibe una notificación POST con la información del evento, y responde con un HTTP Status 200 ó 201.
2. Solicita la información del recurso notificado y recibe los datos.

Para recibir las notificaciones de los eventos en tu plataforma, debes configurar previamente una URL a la cual Mercado Pago tenga acceso.

[Configura la URL para recibir las notificaciones](https://www.mercadopago.com/mla/account/webhooks)

## Eventos

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación en formato `json` usando `HTTP POST` a la URL que especificaste.

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
    "user_id": 44444,
    "api_version": "v1",
    "action": "payment.created",
    "data": {
        "id": "999999999"
    }
}
```

Esto indica que se creó el pago **999999999** para el usuario **44444** en modo productivo con la versión V1 de la API. Dicho evento ocurrió en **2015-03-25T10:04:58.396-04:00**.

Cuando uses [Marketplace](), el atributo `user_id` identifica al usuario en el nombre del cual se realizó el evento y por lo tanto la notificación. Esto te permitirá identificar qué `access_token` utilizar para recuperar el resto de los datos consultando la API correspondiente.

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Luego de esto, puedes obtener la información completa del recurso notificado accediendo a la API correspondiente en `https://api.mercadopago.com/`:

Tipo         | URL                                                | Documentación
------------ | -------------------------------------------------- | --------------------
payment      | /v1/payments/[ID]?access_token=[ACCESS_TOKEN]      | [ver documentación]()
marketplace  | /oauth/token?...                                   | [ver documentación]()
plan         | /v1/plans/[ID]?access_token=[ACCESS_TOKEN]         | [ver documentación]()
subscription | /v1/subscriptions/[ID]?access_token=[ACCESS_TOKEN] | [ver documentación]()
invoice      | /v1/invoices/[ID]?access_token=[ACCESS_TOKEN]      | [ver documentación]()

Para obtener tu access_token, revisa la documentación de [Autenticación]().

Con esta información puedes realizar las actualizaciones necesarias en tu plataforma, por ejemplo registrar un pago acreditado.

Ejemplo de recepción de notificaciones

Utiliza las credenciales de tu aplicación: 

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
