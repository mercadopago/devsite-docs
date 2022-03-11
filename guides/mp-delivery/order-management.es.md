# Administración de órdenes

La gestión de órdenes se realiza a través de API REST, con las que podrá realizar acciones en función del estado actual de la orden.

Los cambios en el estado de la orden, desde el momento de la creación hasta la finalización de la entrega, se notificarán a través de un webhook que contiene el recurso y el `user_id` en su body.

El atributo resource devuelve el `shipment_id` que se utilizará para cualquier operación relacionada con la orden y el atributo `user_id` devuelve el ID de usuario de la tienda que recibió la orden.

Con `shipping_id` en la mano, puede:

* Obtener datos de la orden.
* Aceptar pedidos.
* Imprime el recibo del pedido.
* Cancelar el pedido.

> NEXT_STEP_CARD_ES
>
> Obtener datos del pedido
>
> Conoce cómo obtener datos de pedidos con Mercado Pago Delivery.
>
> [Obtener datos del pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/order-data)