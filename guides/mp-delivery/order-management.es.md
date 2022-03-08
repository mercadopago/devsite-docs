# Administración de pedidos

La gestión de pedidos se realiza a través de API REST, con las que podrá realizar acciones en función del estado actual del pedido.

Los cambios en el estado del pedido, desde el momento de la creación hasta la finalización de la entrega, se notificarán a través de un webhook que contiene el recurso y el `user_id` en su cuerpo.

El atributo resource devuelve el `shipment_id` que se utilizará para cualquier operación relacionada con el pedido y el atributo `user_id` devuelve el ID de usuario de la tienda que recibió el pedido.

Con `shipping_id` en la mano, puede:

* Obtener datos del pedido.
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