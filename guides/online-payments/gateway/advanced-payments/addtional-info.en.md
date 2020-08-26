---
sites_supported:
  - mla
  - mco
indexable: false
---

# Additional Information

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

It is possible to send information that can improve the fraud prevention analysis. To do this, you must send the `additional_info` field with information about the payer and the shipping address. The more information that is sent, the better the conversion rate of the payments.
You can also send the `metadata` object with relevant information to your business that the seller wants to add. The information that this object can contain is of the key/value type.


#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=APPLICATION_TOKEN' \
```

#### Body
```json
{
  "payments": [
    ...
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  ...
  "additional_info": {
    "shipments": {
      "receiver_address": {
        "zip_code": "1111",
        "street_name": "AvenidaUnoytrescuartos",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    },
    "payer": {
      "address": {
        "street_name": "CalleCuatro",
        "street_number": "342"
      }
    }
  },
  "metadata": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
