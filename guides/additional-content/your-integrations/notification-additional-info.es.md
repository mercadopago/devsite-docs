# Información adicional sobre notificaciones

En esta documentación encontrarás información adicional sobre notificaciones, ya sean consideraciones especiales dependiendo de la solución que hayas integrado, aspectos específicos de ciertos tópicos, o ejemplos de notificaciones particulares para que puedas consultar. 

## Card Updater

Card Updater es una función para integraciones de productos con pagos recurrentes, que actualiza datos de tarjetas, ya sea vencidas o con datos incorrectos, y actualiza esta información dentro de Mercado Pago.

Este proceso se desencadena a partir de un pago rechazado, donde la verificación hecha por el Card Updater podrá o bien generar un nuevo `card_id` para un cliente (en casos de error en la inserción de datos o cambio de tarjeta), o bien mantener el `card_id` previamente generado, pero actualizando la base de datos con información correcta de la tarjeta. 

En cualquiera de los casos, se enviará una notificación Webhooks como la que se muestra a continuación:

```json

{
  "action": "card.updated",
  "api_version": "v1",
  "application_id": 8339021212080291,
  "data": {
    "customer_id": "12345678-aluyasdhfyt",
    "new_card_id": 50000102202,
    "old_card_id": 50000006036
  },
  "date_created": "2024-01-11T15:23:53-03:00",
  "id": "a47fc06844bf4e418a03aeab1479c496",
  "live_mode": true,
  "type": "automatic-payments",
  "user_id": 1197520450,
  "version": 1
}
```

| Campo | Descripción |
|---|---|
| `action` | `card.updated` es el único valor posible e indica cuando la tarjeta de un cliente fue actualizada. |
| `application_id` | Identificador de la aplicación sobre la que se está notificando. |
| `data` | Este campo es donde están los detalles de la actualización, como el `customer_id` (identificador del cliente), el nuevo `card_id`, y el antiguo.<br>En caso de que no se cree un nuevo `card_id`, se reenvía el original.  |
| `date_created` | Fecha de creación de la notificación. |
| `id` | Identificador exclusivo del evento, evita mensajes duplicados. |
| `live_mode` | Indica si la URL informada es válida |
| `type` | Este valor siempre será `automatic-payments` |
| `user_id` | Identificador del usuario para el que se envía la notificación. |

----[mla, mlm, mlb]----
## Integraciones Point

Este tópico permite recibir notificaciones sobre la actualización de los *status* en las intenciones de pago creadas para integraciones Point. Al activarlo, debes tener en cuenta:

* “Intención de pago” y “pago” no son lo mismo. Al activar este tópico, recibirás actualizaciones sobre las llamadas creadas para iniciar un pago. Para recibir notificaciones sobre el pago en sí mismo, debes activar el tópico `payments` mediante Tus integraciones.
* No es posible configurar este tópico al momento de crear un pago. Su configuración debe ser hecha por medio de Tus integraciones.
* Puedes consultar las notificaciones correspondientes a los distintos estados de las intenciones de pago accediendo a la [documentación específica de Mercado Pago Point](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications).

------------

## Suscripciones

Para activar las notificaciones de tu integración con Suscripciones, debes tener en cuenta:
* Si has integrado **Suscripciones con planes asociados**, debes activar el tópico `subscription_preapproval_plan` para recibir alertas sobre la creación o actualización de un Plan.
* Si has integrado **Suscripciones sin planes asociados**, debes activar el tópico `subscription_preapproval` para recibir alertas sobre la creación o actualización de una **suscripción de pago pendiente**, o bien el tópico `subscription_authorized_payment` para actualizaciones sobre **suscripciones con pago autorizado**.
* En todos los casos, deberás activar también el tópico `payments`, que te permitirá recibir notificaciones sobre los pagos asociados a esas suscripciones cuando sean efectuados.

## Checkout Pro

Si realizaste una integración con Checkout Pro y deseas recibir notificaciones, debes tener en cuenta: 
* La activación del tópico `merchant_orders` te permitirá recibir alertas sobre creación y actualizaciones de pedidos.
* Además, la activación del tópico `payments` será útil para mantener al día tu base de datos, ya que te notificará sobre las actualizaciones de los pagos correspondientes a esos pedidos generados. 


## Alertas de fraude

En caso de detectarse un alerta de fraude, y si tienes activado el tópico `stop_delivery_op_wh`, recibirás una notificación como la siguiente: 

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

En ella, se incluyen los detalles del pedido que generó el alerta, bajo el parámetro `merchant_order`, y el `payment_id` asociado al pago. Con esos datos, deberás **efectuar la cancelación del pedido sin entregarlo**, realizando un llamado a la [API de cancelaciones](/developers/es/reference/chargebacks/_payments_payment_id/put).

Ten en cuenta que este tipo de notificaciones no funcionan con la lógica de reintento habitual. Si, al recibirla, no envías un `HTTP STATUS 200 (OK)` o `201 (CREATED)`, habrás perdido la notificación y no volverás a recibirla.

## Reclamos

En los casos en los que se hayan activado las notificaciones para el tópico `topic_claims_integration_wh`, se enviará una notificación Webhooks cuando se inicie un reclamo o contracargo, tal como se muestra a continuación:

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

| Campo | Descripción |
|---|---|
| `action` | Evento notificado, que indica si es la creación de un recurso o su actualización. |
| `api_version` | Valor que indica la versión de la API que envía la notificación. |
| `data.id` | Identificador exclusivo del reclamo o contracargo. |
| `data.resource` | Tipo de notificación recibida. En este caso, indica notificaciones relacionadas a reclamos. |
| `date_created` | Fecha de creación de la notificación. |
| `id` | Identificador de la notificación recibida. |
| `live_mode` | Indica si la URL informada es válida. |
| `type` | Tipo de notificación recibida, de acuerdo al tópico seleccionado previamente. En este caso, será siempre `claim`. |
| `user_id `| Identificador del usuario para el que se envía la notificación. |

## Medios de pago offline

En caso de haber integrado medios de pago offline y configurado tus notificaciones con el tópico `payments`, todos los cambios de estado de un pago te serán notificados.

Esto es válido también para el caso de **pagos expirados**: su estado pasará de `pending` a `cancelled`, y el alerta correspondiente será enviado a tu sistema. 


## Código QR

Si realizaste una integración con Código QR y deseas recibir notificaciones, debes tener en cuenta: 
* No es posible configurar notificaciones por medio de Tus integraciones. Debes hacerlo al momento de crear un pago. 
* Por este motivo, tampoco es posible validar el origen de las notificaciones a partir del *header* `x-Signature`. Para conocer vías alternativas para verificar el origen de estas notificaciones, puedes contactar a [Soporte de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support/center).
* La activación del tópico `merchant_orders` te permitirá recibir alertas sobre creación y actualizaciones de pedidos. Si bien el tópico envía un `status=opened`, será la notificación con `status=closed` aquella que certificará con seguridad que la orden generada fue pagada.

----[mla]----
## Delivery
A continuación, puedes ver un ejemplo de notificación para el tópico Delivery, junto con las descripciones de cada campo notificado.

```json
{
    _id: "f9f08571-1f65-4c46-9e0a-c0f43faas1557e",
    topic: "delivery",
    resource: "/shipments/12345",
    user_id: 1793791954,
    application_id: "924152943338358",
    sent: "2021-11-01T02:02:02.002Z",
    attempts: 1,
    received: "2021-11-01T02:02:02.002Z",
    actions: []
}
```

| Campo | Descripción |
|---|---|
| `_id `| Identificador de la notificación recibida. |
| `topic`  | Tópico sobre el cual se está recibiendo la notificación. |
| `resource` | Evento notificado. Indica si se trata de la creación de un recurso o una actualización. |
| `user_id` | Identificador del usuario para el que se envía la notificación. |
| `sent` | Fecha de envío de la notificación |
| `attempts` | Cantidad de veces en las que se envió una notificación |
| `received` | Fecha de recepción de la notificación |

Cuando recibes una notificación de este tópico, debes confirmar su recibimiento devolviendo un `HTTP STATUS 200 (OK)` en hasta 500 ms. De lo contrario, el sistema continuará enviando nuevos intentos de notificación cada 12 horas. 

------------


## Link de pago
No es posible configurar notificaciones para Links de pago generados a través del Panel de Mercado Pago.