# Integrate the QR buyer model

To use this model, you must read the QR and send the code and the order information (value, items and quantity). This way, the transaction will be processed automatically in the Mercado Pago application.

> For more information about this billing model, please refer to the documentation [Payments with QR Buyer model.](/developers/en/docs/qr-code/qr-buyer/qr-buyer-part-a)

## Pre-requirements 

For this integration to work correctly, you need to:

- Crete [Stores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/stores-and-pos).
- Greate[QR](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/stores-and-pos).
- Have a QR CODE reader.
- Enable your Mercado Pago account for this type of charge.

## Model flow

The buyer model works as follows:

![Sell flow QR buyer](/images/mobile/flujo-qrc-EN.png)

1. The Integrator will read the QR CODE using a reader.
2. With the order billing information and QR code reading, the integrator sends the billing data to API.
3. In the API response, the integrator gets a return about the payment approval or denial.

## Order creation

In this model, an API sends the order information obtained from the QR reading to Mercado Pago allowing the transaction amount to be charged.
Before publishing the order, you will need to collect 2 pieces of information: 

-**payment_token**
Information obtained by reading/scanning the QR Buyer code (do not modify token information)
This token is encrypted in base64, as per the EMVCo standard. 

-**X-Idempotency-Key**
A unique key created by the integrator that will identify the order. To prevent the key from being duplicated, just use: timestamp+external_pos_id. 

Then, make the order key by passing the above data into the fields indicated inside the code body.

```curl
curl --location --request POST
 'https://api.mercadopago.com/instore/qr/buyer/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: 92022242-f08a-11e9-81b4-2a2a12' \
--data-raw ' {
    "external_reference" : "order-id-1234",
   "total_amount": 100.0,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "title": "Title",
    "description": "Mercado Pago",
 "scan_timestamp": 1581356798,
"payment_token":"PAYMENT_TOKEN"
   }'
```
| Atributo | Tipo (_type_) | Descripción |
| --- | --- | --- |
| `external_reference` | _string (256)_ | Order collector identifier (mandatory) |
| `total_amount` | _double_ | total amount to be charged from the payer. (mandatory) |
| `items.sku_number` | _string (256)_ | Item code |
| `items.category` | _string (256)_ | Item category. (typed) |
| `items.title` | _string (256)_ | Item name. (mandatory) |
| `items.description` | _string (256)_ |  Item description |
| `items.unit_price` | _double_ | item unit price. (mandatory) |
| `items.quantity` | _float_ | Number of item units. (mandatory)|
| `items.unit_measure` | _string (256)_ | Item unit of measurement. (mandatory).  |
| `items.total_amount` | _double_ | Item total amount for the indicated value. (mandatory) |
| `title` | _string (256)_ | Order tittle |
| `description` | _string (256)_ | Order description |
| `scan_timestamp` | _string (256)_ | Date and time of the period in which the scan was performed at the POS.  |
| `payment_token` | _string (256)_ | Code captured from the payer's phone. **This attribute is in Base64 and has variable length. There is no character limit.** (mandatory) |

## Additional information for request

After using the combination between X-Idempotency-key and the payer's token for the first time, it is possible to use them in different ways, as shown in the table below: 

Use case | Connection loss between POS and Mercado Pago | Avoid double payment (Ex: POS cashier error) | Avoid double payment (Ex: POS cashier error) | Process payment from another customer
----------------- | ----------------- | ----------------- | ----------------- | -----------------
Idempotency-key | Same | Same | Different | Different
Payer token | Same | Different | Same | Different
MP Answer | Shows you the previous payment | CInvalid key (already used) | Invalid key (already used) | Payment completed

The request returns a response as follows:

```json
{
   "id": 2574846382,
   "status": "approved",
   "items": [
       {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "payments": [
       {
           "id": 14527153428,
           "status": "approved",
           "status_detail": "accredited",
           "payment_type_id": "account_money",
           "payment_method_id": "account_money",
           "token": null,
           "transaction_amount": 100,
           "installments": 1,
           "processing_mode": null,
           "issuer_id": null,
           "coupon_amount": 0,
           "campaign_id": null,
           "coupon_code": null,
           "description": "Mercado Pago",
           "external_reference": "order-id-1234",
           "statement_descriptor": null,
           "date_of_expiration": null,
           "merchant_account_id": null,
           "payment_method_option_id": null,
           "additional_info": null,
           "net_amount": null,
           "transaction_details": {
               "external_resource_url": null,
               "total_paid_amount": 100
           },
```