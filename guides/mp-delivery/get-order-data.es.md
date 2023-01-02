# Obtener datos de la orden

Para consultar los datos de una orden, realiza un GET enviando `shipment_id` y `access-token` (generados por el proceso de autenticación OAuth) al endpoint[/proximity-integration/v1/orders/{shipmentId}](/developers/es/reference/mp_delivery/_proximity-integrationorders_shipment_id/get). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.

* **Merchant**: información sobre el restaurante que recibió la orden.
* **Items**: descripción de los artículos y artículos adicionales en la orden.
* **OtherFees**: información de tarifas de transacción y envío.
* **Discounts**: descuentos aplicados a la orden.
* **Total**: importe total pagado en una orden.
* **Payments**: información sobre el método de pago de una orden.
* **Customer**: datos sobre el comprador.
* **Delivery**: información sobre el lugar de entrega.
* **Extension.status**: estado en el que se encuentra la orden.
  * **Pending**: estado inicial de una orden. Significa que la orden se está creando y se manejará más adelante.
  * **Handling**: la orden está siendo ensamblada y esperando una respuesta del sistema, como la finalización del pago por parte del cliente.
  * **Ready_to_ship**: este estado tiene dos subestados que indican que una orden se puede entregar (porque se ha recibido y se puede aceptar, o porque se ha aceptado y se puede imprimir).
  * **Shipped**: orden en camino.
  * **Not_delivered**: la orden no se entregó.
  * **Delivered**: orden entregada.
  * **Cancelled**: orden cancelada.
  <br/>
* **Extension.substatus**: subestado en que se encuentra la orden. El subestado se relaciona directamente con el estado.
  * **Pending > creating_route**: orden de ruta en creación.
  * **Handling > null**:  indicará el motivo por el cual la orden está a la espera de su aceptación.
  * **Ready_to_ship > ready_to_print**: esperando la aceptación la orden.
  * **Ready_to_ship > printed**: orden aceptada e impresa.
  * **Out_for_delivery**: la orden salió para su entrega.
  * **Delivery_failed**: entrega no completada.