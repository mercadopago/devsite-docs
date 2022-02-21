# Eventos de notificación

Un evento es cualquier tipo de actualización sobre el objeto notificado, incluyendo cambios de estado o de atributos.

Notificamos eventos referidos a tus órdenes (`merchant_order`) o pagos recibidos (`payment`).

Las `merchant_order` son una entidad que agrupa tanto pagos como retiros. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación usando `HTTP POST` a la `notification_url` que especificaste.

Se notifican los siguientes eventos:

1. **Registrar la Merchant Order (MO).** Al escanear un QR que contenga un monto, este creará una merchant order automáticamente, enviando una notificación. Resulta preciso tener en cuenta el siguiente escenario: si se escanea varias veces el mismo QR, cada uno creará una merchant order distinta y, por lo tanto, una nueva notificación.
2. **Actualización de Payments.** Cada intento de pago por parte del cliente, actualizará la información de la merchant order y enviará una notificación
3. **Cierre de la MO.** Una vez que se realice un pago aprobado, el status de la MO aparecerá closed y se enviará una notificación 

**Si el servidor no está disponible o demora en responder más de 22 segundos**, Mercado Pago reintentará notificar periódicamente siguiendo el siguiente esquema:

|Evento|Plazo después del primer envío|Tiempo de espera de confirmación|
|---|---|---|
|Envío| - |22 segundos|
|Primer intento|30 segundos|5 segundos|
|Segundo intento|5 minutos|5 segundos|
|Tercer intento|30 minutos|5 segundos|

Mercado Pago informará a esta `notification_url` tanto en la creación como actualización de los estados de pagos u órdenes con dos parámetros:

|Campo|Descripción|
|---|---|
|`topic`|Identifica de qué se trata. Puede ser `payment` o `merchant_order`.|
|`id`|Es un identificador único del recurso notificado.|


> **Ejemplo:** Si configuraste la `notification_url`: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago de esta manera: `https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`


## Al recibir una notificación

**Cuando recibas una notificación en tu PDV, Mercado Pago espera una respuesta para validar que la recibiste correctamente**. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Para pagos presenciales, te recomendamos utilizar notificaciones IPN de topic `merchant_order` ya que están optimizadas para este tipo de productos. Para ello, ten en cuenta las siguientes reglas:

1. El campo `status` de la `merchant_order` permanecerá en **opened** cuando aún no tenga pagos asociados, o los tenga y estén rechazados o aprobados por un monto menor al total de la orden.
2. El campo `status` de la `merchant_order` será **closed** cuando la suma de los pagos aprobados sea igual al total de la orden.

Dentro de la orden, en el objeto payments, encontrarás todos los pagos de la misma. Es importante obtener el id de los pagos con `status` = **approved** para poder realizar devoluciones

> WARNING
>
> Importante
>
> Mercado Pago indica a las integraciones que utilicen este método de notificación IPN como método principal para recibir notificaciones de pago.

> PREV_STEP_CARD_ES
>
> Configura notificaciones de pagos presenciales
>
> Configura las notificaciones de pago con código QR.
>
> [Configura notificaciones de pagos presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-configuration)

> NEXT_STEP_CARD_ES
>
> Consulta de la orden
>
> Consulta los estados de las órdenes.
>
> [Consulta de la orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-order-query)