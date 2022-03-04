# Configuración

La **integración de pago con código QR** utiliza el objeto `merchant_order`, que es la identificación del pedido en función de cada lectura realizada en el QR.

En las notificaciones de IPN para pagos en persona, el campo `status` del objeto `merchant_order` permanecerá con el estado **opened** hasta que se identifiquen los pagos aprobados y el monto del pago sea igual o mayor que el total del pedido.

Dentro del pedido, en el objeto de pagos, encontrarás todos los pagos realizados, ya sean aprobados o rechazados. Es importante obtener el ID de los pagos con estado **aprobado** para poder realizar devoluciones de cargo/reembolsos.

Para cada escaneo de QR, se genera un `merchant_order` diferente. Recuerda que si el cliente hace más de un escaneo, un pedido estará **opened** indefinidamente y, para cerrar la transacción, el `merchant_order` debe tener `status` = **closed**.

**Para recibir las notificaciones de los eventos en tu plataforma**, puedes configurar previamente una URL a la cual Mercado Pago tenga acceso desde el atributo `notification_url` al crear la orden que deseas cobrar.

## Flujo de notificaciones

El proceso de confirmación de pago se divide en dos partes:

1. Eventos de notificación
2. Consulta de la orden

> PREV_STEP_CARD_ES
>
> Introducción a pagos presenciales
>
> IPN for in person payments using QR.
>
> [Introducción a pagos presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-introduction)

> NEXT_STEP_CARD_ES
>
> Eventos de notificación
>
> Aprende sobre eventos de notificación.
>
> [Eventos de notificación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-notification-events)