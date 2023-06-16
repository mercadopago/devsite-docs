# Cómo integrar QR modelo atendido

Para cobrar a través de un código QR modelo atendido, deberás crear una orden y asociarla a la caja en la quieras cobrar.

## Flujo del modelo

Te explicamos cómo funciona el modelo atendido:

![Flujo de pago en punto de venta QR Mercado Pago](/images/mobile/qr-user-flow.es.png)

1. El punto de venta registra un pedido (1a) y crea una orden asignada a una caja (1b). En este momento la orden se encuentra disponible para ser escaneada (2).
2. Cuando el cliente escanea el QR (3) con la orden y realiza el pago (5), se recibe una notificación IPN (4a y 6b) al servidor del vendedor. Con esos datos, se obtiene el estado de la orden (7a), para validar que esté cerrada o siga abierta, pendiente de pago.

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
> Ten en cuenta que si no cargaste previamente el nombre de tu negocio o el logo en [tu cuenta de Mercado Pago](https://www.mercadopago.com.ar/settings/account), el título y la imagen de la orden que el cliente vea en la app serán las del primer ítem cargado.

## Eliminar una orden

Para obtener información sobre cómo eliminar la orden asociada a un QR antes de que expire por vigencia, o se cierre, accede a nuestra [Referencia de API](/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete).

> La respuesta será un `HTTP 204 No Content`.

## Recibe notificaciones de tus órdenes

Las notificaciones IPN **(Instant Payment Notification)** son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo, si fueron aprobados, rechazados o si se encuentran pendientes.

Implementa IPN de `merchant_order` junto con una búsqueda de la orden por `external_reference` como método de contingencia.

[Recibir notificaciones IPN](/developers/es/docs/qr-code/additional-content/your-integrations/notifications/ipn)