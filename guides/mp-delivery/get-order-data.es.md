# Obtener datos de la orden

Con el número `shipment_id` presente en el campo "recurso" de la notificación, es posible realizar un GET para consultar los datos de la orden cuya respuesta contiene la siguiente información.

* **Shipping**: datos de entrega.
* **Status**: estado en el que se encuentra la orden.
  * **Pending**: estado inicial de una orden. Significa que la orden se está creando y se manejará más adelante.
  * **Handling**: la orden está siendo ensamblada y esperando una respuesta del sistema, como la finalización del pago por parte del cliente.
  * **Ready_to_ship**: este estado tiene dos subestados que indican que un pedido se puede entregar (porque se ha recibido y se puede aceptar o porque se ha aceptado y se puede imprimir).
  * **Shipped**: orden en camino.
  * **Not_delivered**: el pedido no se entregó.
  * **Delivered**: orden entregada.
  * **Cancelled**: orden cancelada.
  <br/>
* **Substatus**: subestado en que se encuentra el pedido. El subestado se relaciona directamente con el estado.
  * **Pending > creating_route**: orden de ruta en creación.
  * **Handling > null**:  indicará el motivo por el cual la orden está a la espera de su aceptación.
  * **Ready_to_ship > ready_to_print**: esperando la aceptación del pedido.
  * **Ready_to_ship > printed**: pedido aceptado e impreso.
  * **Out_for_delivery**: el pedido salió para su entrega.
  * **Delivery_failed**: entrega no completada.
  <br/>
* **Orders**: datos la orden.
* **Items**: datos de los artículos la orden.
* **Payments**: detalles de pago.
* **Stores**: datos de la tienda.

> NEXT_STEP_CARD_ES
>
> Aceptar órdenes
>
> Conoce cómo aceptar órdenes con Mercado Pago Delivery.
>
> [Aceptar pedidos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/accept-order)
