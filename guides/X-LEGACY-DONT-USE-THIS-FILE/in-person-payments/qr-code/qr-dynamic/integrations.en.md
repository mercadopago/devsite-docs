# How to integrate the QR dynamic model

For collection using the QR code dynamic model, you should create both an order and a code with an external service, based on the relevant response.

## Model flow

Find below how this model works:

1. An order with all required payment data is created.
2. The response will include a data string under the attribute `qr_data`.
3. A QR code with the received attribute is generated.
4. Finally, the QR code is made available to the customer, at your choice, to make the payment.

## Create an order

First, generate the order publication. Once data is sent to Mercado Pago, a data string with [EMVCo](https://www.emvco.com/emv-technologies/qrcodes) standard will be made available.

Execute the following API call to create an order. The response will include the data required to create the QR code.

```curl
curl -X POST \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

----[mco]----
> If you must pay IVA for the products in your order, visit the [Considerations IVA Colombia section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/iva-colombia).
------------

For further information, refer to [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

> NOTE
>
> Note
>
> The model does not include a **delete order** option. Therefore, we recommend setting an expiration date using the `expiration_date` attribute.

Response

```json
{
   "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```
The response will be a string with the [EMVCo](https://www.emvco.com/emv-technologies/qrcodes) standard. Use the `qr_data` to make the QR code available using either a generator or your application.

----[mlb]----

If you have a **Pix key configured in your Mercado Pago account**, the data string structure will have Pix-related data. 
For example:

```json
{
   "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------


## Associate the order with a Point of Sale

In addition to generating the QR code, you also have the option to create and assign the same command to the Point of Sale’s fixed QR code.

Execute the following API call to create an order and assign the Point of Sale. The response will include the data required to create the QR code.


```curl
curl -X PUT \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

## Receive notifications of your orders

IPN notifications are an **automatic way of receiving notifications for order creation and status updates**. I.e.: when orders are approved, rejected or pending.

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
