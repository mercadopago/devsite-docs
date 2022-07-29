# CashOut

This functionality allows the operator to provide money to the customer, deducting the amount directly from the balance in the account of the buyer who carried out a transaction.

The main features are:
* Cashouts can be linked to a purchase or not and this process will depend on the need of the seller.
* The feature is compatible with **Buyer QR**, **Attended QR**, **Dynamic QR** and **Unattended QR** models.
* Can be added to an integration as long as it is supported.

> NOTE
>
> Important
>
> You can only integrate this product if your business contact shares all the necessary information.

## Include cashout

To include the cashout in your integration, send a PUT to the order creation endpoint [/instore/qr/seller/collectors/{user_id}/stores/{external_store_id}/pos/{external_pos_id}/orders](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) including in the `body` the total amount to be cashes out from the customer's account.

By including the object within the payment order, we will have a body as the one shown in the example below:

[[[
```json
​​{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1390,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 238,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 1190
        }
    ],
    "sponsor": {
    
            "id": 820480089
            },
    "cash_out": {
                "amount": 200
            }
}
```
]]]

| Attribute | Type | Description |
|---|---|--- |
| Amount | Double | Total amount to cash out from the customer's account (required).|

## Confirm cashout

To confirm the status of a cashout from the Mercado Pago balance, send a POST with a combination of information and attributes (“status” and “status _detail”) configured by the seller to the endpoint [/instore/orders/{merchant_order_id}/confirmation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cashout-qr/_instore_orders_merchant_order_id_confirmation/post).
 
When we make the cashout, the correct flow to complete depends on several factors, such as the amount of money available in the account, which is not visible until the transaction is completed. See below for possible combination options and API returns:
 
| Status | Status_detail | Return |
| --- | --- |--- |
| Confirm | confirmed | Confirm the cashout.|
| Cancelled | manually_cancelled <br/> confirmation_not_received <br/> other | Cash out cancelled. |
| Fail | internal_communication_error <br/> other | Error performing withdrawal. A refund is made to the customer referring to the withdrawal value, either from the purchase or the pure withdrawal.|