# Consulta de la orden

Para poder consultar los estados de las órdenes mediante el topic `merchant_order` necesitarás hacer un GET usando el **ID** que recibiste en el servidor de notificaciones.

En nuestra [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) obtendrás la información que necesitas sobre los parámetros de solicitud y respuesta.

> NOTE
>
> Nota
>
> Recuerda que el campo `status` de la `merchant_order` será **closed** cuando la suma de los pagos aprobados sea igual al total de la orden.

Dentro de la MO, en el objeto de pagos, encontrarás todos los pagos realizados, ya sean aprobados o rechazados. Es importante obtener el ID de los pagos con estado aprobado para poder realizar devoluciones de cargo/reembolsos.

## Obtener un pago

En caso de requerir mayor información de los pagos puedes utilizar el **payment ID** para obtener una respuesta más detallada.

En nuestra [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) obtendrás la información que necesitas sobre los parámetros de solicitud y respuesta.

