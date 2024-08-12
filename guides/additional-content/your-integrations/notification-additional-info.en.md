# Additional information about notifications

In this documentation, you will find additional information about notifications, including special considerations depending on the solution you have integrated, specific aspects of certain topics, and examples of particular notifications for your reference.

## Card Updater

Card Updater is a feature for product integrations with recurring payments that updates card data, whether expired or incorrect, and updates this information within Mercado Pago.

This process is triggered by a rejected payment, where the verification done by Card Updater can either generate a new `card_id` for a customer (in cases of data entry errors or card changes) or keep the previously generated `card_id` while updating the database with the correct card information.

In either case, a Webhooks notification will be sent as shown below:

```json

{
  "action": "card.updated",
  "api_version": "v1",
  "application_id": 8339021212080291,
  "data": {
    "customer_id": "12345678-aluyasdhfyt",
    "new_card_id": 50000102202,
    "old_card_id": 50000006036
  },
  "date_created": "2024-01-11T15:23:53-03:00",
  "id": "a47fc06844bf4e418a03aeab1479c496",
  "live_mode": true,
  "type": "automatic-payments",
  "user_id": 1197520450,
  "version": 1
}
```

| Field | Description |
|---|---|
| `action` | `card.updated` is the only possible value and indicates when a customer's card was updated. |
| `application_id` | Identifier of the application being notified. |
| `data` | This field contains the update details, such as the `customer_id` (customer identifier), the new `card_id`, and the old `card_id`.
If a new card_id is not created, the original one is resent.  |
| `date_created` | Creation date of the notification. |
| `id` | Exclusive identifier of the event, prevents duplicate messages. |
| `live_mode` | Indicates if the informed URL is valid. |
| `type` | This value will always be `automatic-payments`. |
| `user_id` | Identifier of the user to whom the notification is sent.. |

----[mla, mlm, mlb]----
## Integrações Point

This topic allows you to receive notifications about status updates in payment intents created for Point integrations. When activating it, you should keep in mind:

* "Payment intent" and "payment" are not the same. By activating this topic, you will receive updates about the calls created to initiate a payment. To receive notifications about the `payment` itself, you must activate the payments topic through Your integrations.
* It is not possible to configure this topic at the moment of creating a payment. Its configuration must be done through Your integrations.
* You can check the notifications corresponding to the different statuses of payment intents by accessing the specific [Mercado Pago Point documentation](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications).

------------

## Subscriptions

To activate notifications for your Subscriptions integration, you should keep in mind:
* If you have integrated **Subscriptions with associated plans**, you must activate the `subscription_preapproval_plan` topic to receive alerts about the creation or update of a Plan.
* If you have integrated **Subscriptions without associated plans**, you must activate the `subscription_preapproval` topic to receive alerts about the creation or update of a **pending payment subscription**, or the `subscription_authorized_payment` topic for updates on **authorized payment subscriptions**.
* In **all cases, you should also activate the payments topic**, which will allow you to receive notifications about payments associated with those subscriptions when they are made.

## Checkout Pro

If you have integrated with Checkout Pro and want to receive notifications, you should keep in mind:
* Activating the  `merchant_orders` topic will allow you to receive alerts about the creation and updates of orders.
* Additionally, activating the `payments` topic will be useful for keeping your database up to date, as it will notify you about updates to the payments corresponding to those generated orders.

## Fraud alerts

If a fraud alert is detected, and you have the `stop_delivery_op_wh` topic activated, you will receive a notification like the following:

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

It includes the details of the order that triggered the alert, under the merchant_order parameter, and the payment_id associated with the payment. With this information, you should proceed to **cancel the order without delivering it** by making a requisition to the [cancellations API](/developers/en/reference/chargebacks/_payments_payment_id/put).

Please note that this type of notification does not adhere to the usual retry logic. If you do not respond with an `HTTP STATUS 200 (OK)` or `201 (CREATED)` upon receipt, the notification will be lost and will not be resent.

## Claims

In cases where notifications for the topic `topic_claims_integration_wh` have been activated, a Webhooks notification will be sent when a claim or chargeback is initiated, as shown below:

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

| Field | Description |
|---|---|
| `action` | Notification event, indicating whether it is the creation of a resource or its update. |
| `api_version` | Value indicating the API version sending the notification. |
| `data.id` | Unique identifier of the claim or chargeback. |
| `data.resource` | Tipo de notificação recebida. Neste caso, indica notificações relacionadas a reclamações.Type of notification received. In this case, it indicates notifications related to claims. |
| `date_created` | Notification creation date. |
| `id` | Received notification identifier. |
| `live_mode` | Indicates if the provided URL is valid. |
| `type` | Type of notification received, according to the previously selected topic. In this case, it will always be `claim`. |
| `user_id `| User identifier for whom the notification is sent. |

## Meios de pagamento offline

If you have integrated payments with offline payment methods and configured your notifications with the payments topic, you should know that all changes in payment status will be notified to you.

This also applies to **expired payments**: their status will change from `pending` to `cancelled`, and the corresponding alert will be sent to your system.

## QR Code

If you integrated with QR Code and wish to receive notifications, please note the following:
* Notifications cannot be configured through Your integrations. You must set them up when creating a payment.
* Consequently, it is not possible to validate the origin of notifications using the `x-Signature` header. For alternative methods to verify the origin of these notifications, please contact  [Mercado Pago Support](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/support/center).
* The activation of the `merchant_orders` topic will allow you to receive alerts about order creation and updates. While the topic sends a `status=opened`, it will be the notification with `status=closed` that will securely certify that the generated order has been paid.

----[mla]----
## Delivery

Below, you can see an example of a notification for the `Delivery` topic, along with descriptions of each notified field.

```json
{
    _id: "f9f08571-1f65-4c46-9e0a-c0f43faas1557e",
    topic: "delivery",
    resource: "/shipments/12345",
    user_id: 1793791954,
    application_id: "924152943338358",
    sent: "2021-11-01T02:02:02.002Z",
    attempts: 1,
    received: "2021-11-01T02:02:02.002Z",
    actions: []
}
```

| Field | Description |
|---|---|
| `_id `| Notification ID received. |
| `topic`  | Topic for which the notification is being received. |
| `resource` | Notified event. Indicates whether it's the creation of a resource or an update. |
| `user_id` | User identifier for whom the notification is sent. |
| `sent` | Notification sending date. |
| `attempts` | Number of times a notification has been sent. |
| `received` | Notification reception date. |

Furthermore, please note that upon receiving a notification from this topic, you must confirm its receipt by returning an `HTTP STATUS 200 (OK)` within 500 ms. Otherwise, the system will continue to send new notification attempts every 12 hours.

------------

## Payment links

It is not possible to configure notifications for Payment links generated through the Mercado Pago Panel.