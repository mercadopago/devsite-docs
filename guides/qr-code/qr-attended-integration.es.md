# Cómo integrar QR modelo atendido

Para cobrar a través de un código QR modelo atendido, deberás crear una orden y asociarla a la caja en la quieras cobrar.

## Flujo del modelo

En el diagrama a continuación puedes ver cómo funciona el modelo atendido:

![Flujo de pago en punto de venta QR Mercado Pago](/images/qr/qr-attended-workflow-es.png)

1. El punto de venta registra un pedido (1a) y crea una orden asignada a una caja (1b). En este momento la orden se encuentra disponible para ser escaneada (2).
2. Cuando el cliente escanea el QR (3) con la orden y realiza el pago (5), Mercado Pago envía una notificación del tópico `merchant_order` con `status:closed` al servidor del vendedor (5b). Este debe enviar una respuesta `HTTP STATUS 200 (OK)` o `201 (CREATED)` para confirmar su recepción (5c).
3. Con esos datos, el vendedor debe validar que la orden esté cerrada (6a y 6b), y proceder a la impresión del ticket (7).

> WARNING
>
> Importante
>
> Es posible que recibas notificaciones del tópico `merchant_order` con `status:opened` en momentos variables del flujo de pago. Por este motivo, no debes tomarlas como un indicador válido. Sólo debes considerar aquellas con `status:closed`.

## Crear una orden

Para obtener información sobre cómo crear órdenes accede a nuestra [Referencia de API](/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> Si debes pagar IVA para los productos de tu orden, visita la [sección de Consideraciones IVA Colombia](/developers/es/guides/additional-content/localization/iva-colombia).
------------
Una vez creada la orden, ya se encuentra disponible para ser **escaneada y pagada**.

> NOTE
>
> Nota
>
> Ten en cuenta que si no cargaste previamente el nombre de tu negocio o el logo en [tu cuenta de Mercado Pago,](https://www.mercadopago.com.ar/settings/account) el título y la imagen de la orden que el cliente vea en la app serán las del primer ítem cargado.

## Eliminar una orden

Para obtener información sobre cómo eliminar la orden asociada a un QR antes de que expire por vigencia, o se cierre, accede a nuestra [Referencia de API](/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete).

> La respuesta será un `HTTP 204 No Content`.

## Recibe notificaciones de tus órdenes

Las notificaciones son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Dirígete a [Notificaciones](/developers/es/docs/qr-code/additional-content/your-integrations/notifications) para saber cómo implementarlas. 

Específicamente, deberás activar las notificaciones del tópico `merchant_order`, que son aquellas asociadas a pedidos. Podrás identificar cada uno de ellos por medio del parámetro `external_reference`.

> NOTE
>
> Nota
>
> Si lo deseas, puedes ver el [video tutorial sobre cómo integrar un Código QR modelo atendido](/developers/es/docs/qr-code/resources/tutorial-videos/qr-videos-attended).