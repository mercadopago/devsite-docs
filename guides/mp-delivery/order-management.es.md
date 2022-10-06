# Administración de órdenes

La gestión de órdenes se realiza a través de API REST, con las que podrá realizar acciones en función del estado actual de la orden.

Los cambios en el estado de la orden, desde el momento de la creación hasta la finalización de la entrega, se notificarán a través de un webhook que contiene el `resource` y el `user_id` en su body.

El atributo `resource` devuelve el `shipment_id` que se utilizará para cualquier operación relacionada con la orden y el atributo `user_id` devuelve el ID de usuario de la sucursal que recibió la orden.

Con `shipping_id` en la mano, puede:

* Obtener datos de la orden.
* Aceptar órdenes.
* Imprimir el recibo de la orden.
* Cancelar la orden.

En Mercado Pago Delivery existen dos tipos de logística. De esta forma, el flujo de estados puede variar según el tipo de logística que estará ligada al pedido. A continuación hay una descripción de esos dos flujos.

## Diagrama de flujo de estado - Modalidad Logística Flex

![flowchart](/images/mpdelivery/flowchart_delivery_es.png)

Este tipo de logística se utiliza generalmente en restaurantes que cuentan con sus propios repartidores. Los repartidores deben tener acceso a la aplicación móvil de Mercado Envíos Flex para escanear el código QR para registrarse y realizar la entrega. Al escanear este código QR, se notificará a los compradores que el pedido está en camino. Es posible utilizar el código QR presente en el pdf disponible en la API o generar el código QR en su integración. La información, que debe estar contenida en el código QR, se puede obtener a través de la API de Mercado Pago Delivery utilizando el endpoint de consulta, donde estos datos serán devueltos en el atributo “extension.qr”. Es importante que el código QR esté disponible en el ticket del pedido para que el flujo de entrega se pueda realizar correctamente. A continuación se describe el estado de todas las notificaciones que llegarán al webhook de pedidos vinculados a este tipo de logística:

  * **ready_to_ship/ready_to_print:** Estado inicial de un pedido. En este Estado se debe realizar alguna acción (aceptar o cancelar) en un máximo de 5 minutos, de lo contrario la orden será cancelada por timeout.
  * **cancelled/cancelled_manually:** Estado que indica que se realizó una operación de cancelación en el pedido.
  * **cancelled/time_expired:** En este estado, el pedido se canceló debido al timeout. Se produce cuando no se han realizado operaciones en los primeros cinco minutos desde la creación de la orden.
  * **ready_to_ship/printed:** Estado que indica que el pedido ha sido aceptado.
  * **shipped/out_for_delivery:** Estado que indica que el pedido está en camino a su ubicación de destino. Este Estado se genera luego de que el repartidor escanea el código QR del pedido, utilizando la aplicación de Mercado Envíos Flex.
  * **shipped/delivery_failed:** Estado que indica que hubo un problema durante la entrega del pedido. Este se genera a través de la aplicación de Mercado Envíos Flex cuando el repartidor no puede entregar.
  * **delivered:** La entrega se completó con éxito. Este Estado es generado a través de la aplicación Mercado Envíos Flex por el repartidor poco tiempo después de que se completa la entrega.

## State flow diagram - Modalidad Logística Dropoff

![flowchart](/images/mpdelivery/flowchart-1_delivery_es.png)

Este tipo de logística es utilizada por los restaurantes que han acordado que las empresas de logística, que están integradas con Mercado Pago, realicen la entrega de los pedidos. En este flujo, poco después de aceptar un pedido, se enviará una notificación de que un repartidor estará en camino para recibir el pedido. Es importante señalar que, a diferencia del flujo mencionado anteriormente, es que en esta modalidad de Dropoff los pedidos no tendrán código QR, por lo que al consultar el pedido mediante la API de Mercado Pago Delivery, el atributo "extension.qr" estará vacío. A continuación se describe el estado de todas las notificaciones que llegarán al webhook de pedidos vinculados a esta modalidad logística:
  
  * **ready_to_ship/ready_to_print:** Estado inicial de un pedido. En este Estado se debe realizar alguna acción (aceptar o cancelar) en un máximo de 5 minutos, de lo contrario la orden será cancelada por timeout.
  * **cancelled/cancelled_manually:** Estado que indica que se realizó una operación de cancelación en el pedido.
  * **cancelled/time_expired:** En este estado, el pedido se canceló debido a un timeout. Se produce cuando no se han realizado operaciones en los primeros cinco minutos desde la creación de la orden.
  * **ready_to_ship/printed:** Estado que indica que se ha aceptado un pedido.
  * **ready_to_ship/on_route_to_pickup:** Una vez aceptado un pedido, se informará a la empresa logística de la necesidad de entregar el pedido. De esta forma, se enviará un repartidor de camino al restaurante, y este estado indica eso.
  * **ready_to_ship/picking_up:** El Estado indica que el repartidor ha llegado al restaurante y está recogiendo el pedido.
  * **shipped/out_for_delivery:** Indica que el repartidor ya ha salido a entregar el pedido.
  * **shipped/at_the_door:** Indica que el repartidor ha llegado al destino del pedido.
  * **delivered:** La entrega fue exitosa.
  * **not_delivered:** Hubo un problema y el repartidor no pudo completar la entrega.

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
