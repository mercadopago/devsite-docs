# Point of Sale (POS)

It is a **point of sale** that exists in a branch or physical store. Each POS will be linked with a unique QR code.

## How to create a Point of Sale?

Once you created your stores, the next step is to generate your POS. Some considerations:

| Term |  Description |
| --- | --- |
| `EXTERNAL_STORE_ID` | Links a Point of Sale (POS) to a store. This is a required field and same as the Store *external_id* previously created. |
| `EXTERNAL_ID` | Identifies each Point of Sale (POS). This is required and can’t be modified nor repeated on the same Mercado Pago account. |


[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/pos \
-d \
{
  "name":"Main Pos", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "POS0001"
}
```
]]]

Learn more with our [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos/post).

> WARNING 
> 
> Important
> 
> After April 20th, 2021, Point of Sales cannot be created without an assigned store.

Once the Point of Sale is created, you’ll be able to see the QR files in the _Response_ section, along with other relevant data. 