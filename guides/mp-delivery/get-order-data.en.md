# Get order data

With the `shipment_id` number present in the "resource" field of the notification, it is possible to perform a GET to query the order data whose response contains the following information.

* **Shipping**: delivery data.
* **Status**: current status of the order.
  * **Pending**: initial status of the order. It means that the order is being created and will be handled later.
  * **Handling**: the order is being assembled and waiting for a response from the system, such as the completion of payment by the customer.
  * **Ready_to_ship**: this state has two substates that denote that an order is deliverable (because it has been received and can be accepted or because it has been accepted and can be printed).
  * **Shipped**: order on the way.
  * **Not_delivered**: order wasn't delivered.
  * **Delivered**: order delivered.
  * **Cancelled**: order canceled.
* **Substatus**: substate in which the order is. The substate relates directly to the state.
  * **Pending > creating_route**: order route being created.
  * **Handling > null**: will indicate the reason why the order is waiting for its acceptance.
  * **Ready_to_ship > ready_to_print**: waiting for order acceptance.
  * **Ready_to_ship > printed**: order accepted and printed.
  * **Out_for_delivery**: order went out for delivery. 
  * **Delivery_failed**: delivery not completed.
* **Orders**: order data.
* **Items**: order items data.
* **Payments**: payment details.
* **Stores**: store data.

> NEXT_STEP_CARD_EN
>
> Accept order
>
> Learn how to accept orders with Mercado Pago Delivery.
>
>[Accept order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/mp-delivery/accept-order)
