# How to integrate QR attended model

To charge with a QR attended model, you’ll have to create an order and then associate it with a Point of Sale.

## Model flow

We explain how the *attended model* works:

![Payment flow at QR Mercado Pago Point of Sale](/images/mobile/qr-user-flow.en.png)

<span></span>

1. The Point of Sale registers an order (1a) and creates an order assigned to a checkout (1b). At this moment the order is available to be scanned (2).
2. When the customer scans the QR (3) with the order and makes the payment (5), an IPN notification (4a and 6b) is received to the seller's server. With this data, the order status (7a) is obtained, to validate that it is closed or is still open, pending payment.


## Create an order

```curl
curl -X PUT \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders \
-d \
{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1190,
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
            }----[mco]----,
    "taxes": [
        {
            "value": 190,
            "type": "IVA"
        }
    ]------------
}
```

Obtain more information in our [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> If you must pay IVA for the products in your order, visit the [Considerations IVA Colombia section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/iva-colombia).
------------

Once the order is created, it is available to be **scanned and paid**.


> NOTE
> 
> Note
> 
> Remember that if you haven’t previously provided your business name or logo in your [Mercado Pago account](https://www.mercadopago.com.ar/settings/account), the order title and image showcased to your client in the app will be taken from the first item uploaded.


## Eliminate an order

To delete a QR associated order before it’s closed or expired, you can use the following method:

```curl
curl -X DELETE \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders
```
The response will be `HTTP 204 No Content`.

## Receive notifications of your orders

[IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction) are an **automatic way of receiving notifications for order creation and status updates**. I.e.: when orders are approved, rejected or pending. 

Implement IPN `merchant_order` with an order search by `external_reference` as a contingency method.

[Receive IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction)

---
### Next steps


> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Learn the options to take your integration to the next level.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Try the most frequent use cases to validate your integration.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/integration-test)
