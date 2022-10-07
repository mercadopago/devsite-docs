# Order management

Order management is done through REST APIs, with which you can perform actions depending on the current status of the order.

Changes in the status of the order, from the moment of creation to the completion of delivery, will be notified via webhook containing the `resource` and the `user_id` in its body.

The `resource` attribute returns the `shipment_id` that will be used for any operation involving the order and the `user_id` attribute returns the user ID of the store that received the order.

With `shipment_id` in hand you can:

* Get order data.
* Accept orders.
* Print the order receipt.
* Cancel the order.

## State flow diagram

On Mercado Pago Delivery there are two types of logistics. In this way, the flow of states may vary according to the type of logistics that will be linked to the order. Below there is a description of those two flows.

## Flex logistics modality

![flowchart](/images/mpdelivery/flowchart_delivery_en.png)

This type of logistics is generally used in restaurants that have their own delivery men. Deliverers must have access to the Mercado Envios Flex mobile application to scan the QR code to register and make the delivery. By scanning this QR code, buyers will be notified that the order is on its way. It is possible to use the QR code present in the pdf available in the API or generate the QR code in its integration. The information, which must be contained in the QR code, can be obtained through the Mercado Pago Delivery API using the consult endpoint, where this data will be returned in the “extension.qr” attribute. It is important that the QR code is available on the order ticket so that the delivery flow can be carried out correctly. The following is a description of the status of all notifications that will reach the webhook of orders linked to this type of logistics:

  * **ready_to_ship/ready_to_print:** Initial status of an order. In this Status, some action must be performed (accept or cancel) within a maximum of 5 minutes, otherwise the order will be canceled by timeout.
  * **cancelled/cancelled_manually:** Status indicating that a cancel operation was performed on the order.
  * **cancelled/time_expired:** In this Status, the order was canceled due to timeout. It occurs when no operations have been performed in the first five minutos since the creation of the order.
  * **ready_to_ship/printed:** Status indicating that the order has been accepted.
  * **shipped/out_for_delivery:** Status that indicates the order is on its way to its destination location. This Status is generated right after the delivery person scans the order's QR code, using the Mercado Envios Flex application.
  * **shipped/delivery_failed:** Status that indicates that there was a problem during the delivery of the order. This is generated through the Mercado Envios Flex application when the delivery person is unable to deliver.
  * **delivered:** Delivery was completed successfully. This Status is generated through the Mercado Envios Flex application by the delivery person shortly after the delivery is completed.

## Dropoff logistics modality

![flowchart](/images/mpdelivery/flowchart-1_delivery_en.png)

This type of logistics is used by restaurants that have agreed that logistics companies, which are integrated with Mercado Pago, carry out the delivery of orders. In this flow, shortly after accepting an order, a notification will be sent that a courier will be on the way to receive the order. It is important to note that, unlike the flow mentioned above, in this Dropoff modality, orders will not have a QR code, and because of this, when consulting the order using the Mercado Pago Delivery API, the "extension.qr" attribute " will be empty. The following is a description of the status of all notifications that will reach the webhook of orders linked to this logistics modality:
  
  * **ready_to_ship/ready_to_print:** Initial status of an order. In this Status, some action must be performed (accept or cancel) within a maximum of 5 minutes, otherwise the order will be canceled by timeout.
  * **cancelled/cancelled_manually:** Status indicating that a cancel operation was performed on the order.
  * **cancelled/time_expired:** In this Status, the order was canceled due to timeout. It occurs when no operations have been performed in the first five minutos since the creation of the order.
  * **ready_to_ship/printed:** Status indicating that an order has been accepted.
  * **ready_to_ship/on_route_to_pickup:** Once an order is accepted, the logistics company will be informed of the need to deliver the order. This way, a delivery person will be sent on their way to the restaurant, and this status indicates that.
  * **ready_to_ship/picking_up:** The Status indicates that the delivery person has arrived at the restaurant and is picking up the order.
  * **shipped/out_for_delivery:** Indicates that the delivery person has already left to deliver the order.
  * **shipped/at_the_door:** Indicates that the delivery person has arrived at the order's destination.
  * **delivered:** Delivery was successful.
  * **not_delivered:** There was a problem and the delivery person was unable to complete the delivery.