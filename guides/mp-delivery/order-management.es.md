# Administración de órdenes

La gestión de órdenes se realiza a través de API REST, con las que podrá realizar acciones en función del estado actual de la orden.

Los cambios en el estado de la orden, desde el momento de la creación hasta la finalización de la entrega, se notificarán a través de un webhook que contiene el `resource` y el `user_id` en su body.

El atributo `resource` devuelve el `shipment_id` que se utilizará para cualquier operación relacionada con la orden y el atributo `user_id` devuelve el ID de usuario de la sucursal que recibió la orden.

Con `shipping_id` en la mano, puede:

* Obtener datos de la orden.
* Aceptar órdenes.
* Imprimir el recibo de la orden.
* Cancelar la orden.

## Diagrama de flujo de estado

![flowchart](/images/mpdelivery/flowchart_delivery_es.png)

> PREV_STEP_CARD_ES
>
> Configuración de integración
>
> Aprende a configurar la integración con Mercado Pago Delivery.
>
> [Configuración de integración](/developers/es/docs/mp-delivery/integration-configuration)

> NEXT_STEP_CARD_ES
>
> Obtener datos de la orden
>
> Conoce cómo obtener datos de órdenes con Mercado Pago Delivery.
>
> [Obtener datos de la orden](/developers/es/docs/mp-delivery/order-management/get-order-data)
