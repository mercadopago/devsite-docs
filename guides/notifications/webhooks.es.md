# Notificaciones Webhooks

Un **webhook** es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, debes [configurar previamente una URL a la cual Mercado Pago tenga acceso](https://www.mercadopago.com/mla/account/webhooks).

También puedes configurar la notificación cuando hagas el POST del pago, indicandola en el campo notificaction_url:

```json
{
	"transaction_amount":100,
	....
	"notification_url":"http://requestbin.fullcontact.com/1ogudgk1",
    ....
}
```


## Eventos

> WARNING
>
> Importante
>
> Un evento es cualquier tipo de actualización sobre el objeto notificado, incluyendo cambios de estado o de atributos.

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

Mercado Pago enviará las notificaciones con el siguiente esquema de reintentos y tiempos por los que espera tu confirmación. Deberás retornar un `HTTP STATUS 200 (OK)` ó `201 (CREATED)` antes de que se termine el tiempo correspondiente. Si no lo haces, se asumirá que no lo recibiste correctamente y se te volverá a notificar.

Si necesitas más información, consulta la sección [¿Qué debo hacer al recibir una notificación?](#bookmark_¿qué_debo_hacer_al_recibir_una_notificación?)

| Evento            | Tiempo después del primer envío | Tiempo de espera de confirmación |
|-------------------|---------------------------------|----------------------------------|
| Envío             | -                               | 22 segundos                      |
| Primer reintento  | 5 minutos                       | 5 segundos                       |
| Segundo reintento | 45 minutos                      | 5 segundos                       |
| Tercer reintento  | 6 horas                         | 5 segundos                       |
| Cuarto reintento  | 2 días                          | 5 segundos                       |
| Quinto reintento  | 4 días                          | 5 segundos                       |

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

Es recomendable que respondas a la notificación antes de ejecutar lógica de negocio o previo al acceso de recursos externos para no exceder los [tiempos estimados de respuesta](#bookmark_eventos).

Luego de esto, tienes que obtener la información completa del recurso notificado accediendo al endpoint correspondiente de la API:

Tipo         | URL                                                | Documentación
------------ | -------------------------------------------------- | --------------------
payment      | https://api.mercadopago.com/v1/payments/[ID]?access_token=[ACCESS_TOKEN]      | [Ver documentación](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_id/get/)
plan         | https://api.mercadopago.com/v1/plans/[ID]?access_token=[ACCESS_TOKEN]         | -
subscription | https://api.mercadopago.com/v1/subscriptions/[ID]?access_token=[ACCESS_TOKEN] | -
invoice      | https://api.mercadopago.com/v1/invoices/[ID]?access_token=[ACCESS_TOKEN]      | [Ver documentación](https://www.mercadopago.com.ar/developers/es/reference/invoices/_invoices_id/get/)


Con esta información puedes realizar las actualizaciones necesarias en tu plataforma, por ejemplo registrar un pago acreditado.

> WARNING
>
> Importante
>
> Ten en cuenta que si se exceden los tiempos de respuesta es posible recibir notificaciones duplicadas de un evento.

### Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

```php
 <?php

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

    switch($_POST["type"]) {
        case "payment":
            $payment = MercadoPago\Payment.find_by_id($_POST["id"]);
            break;
        case "plan":
            $plan = MercadoPago\Plan.find_by_id($_POST["id"]);
            break;
        case "subscription":
            $plan = MercadoPago\Subscription.find_by_id($_POST["id"]);
            break;
        case "invoice":
            $plan = MercadoPago\Invoice.find_by_id($_POST["id"]);
            break;
    }

?>
```

## Recibir un solo tipo de notificación

Si quieres recibir solamente las notificaciones de Webhooks, y no de IPN, puedes agregar en la *notification_url* el parámetro `source_news=webhooks`. Como por ejemplo:

`https://www.yourserver.com/notifications?source_news=webhooks`

> El cambio no afecta a los parámetros ya incluidos en la URL.
