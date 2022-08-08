---
  sites_supported:
      - mco
---

# Considerations IVA Colombia

> NOTE
>
> Note
>
> This considerations only apply on Colombia.

IVA

The IVA (Value Added Tax) is a tax burden that applies to the sale of products or the provision of services within the Colombian territory. Some products as well as some services are excluded from IVA and others have reduced rates. Nowadays, the most common fee of this tax is 19%.

## Taxes on online payments

In order to process your IVA tax correctly, we allow you to sent the total amount (`transaction_amount`), the net amount (`net_amount`) and IVA tax (`taxes`) when you receive a payment through API integration.

In this example we show you how to send the data:

```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        -H 'Authorization: Bearer ACCESS_TOKEN' \
        'https://api.mercadopago.com/v1/payments' \
        -d '{
                "transaction_amount": 10000,
                "net_amount": 9500,
                "taxes":[{
                        "value": 500,
                        "type": "IVA"
                }],
                "token": "ff8080814c11e237014c1ff593b57b4d",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                        "email": "test_user_19653727@testuser.com"
                }
            }'
```

The IVA must be a certain amount, do not send a percentage. In case you do not send the net_amount and taxes attributes, the general IVA rate (19%) will be applied.

## Taxes on in person payments

If you are integrating in person payments, **you must inform the total amount of IVA to be paid on the total value of all the products listed in the item list**.

```curl
curl -X PUT \
    'https://api.mercadopago.com/instore/qr/seller/collectors/{user_id}/stores/{external_store_id}/pos/{external_pos_id}/orders' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    -H 'Content-Type: application/json' \
    -d '{
  "external_reference": 12345,
  "title": "Product order",
  "notification_url": "www.yourserver.com",
  "total_amount": 6000,
  "items": [
    {
      "sku_number": "A123K9191938",
      "category": "marketplace",
      "title": "Item 1",
      "description": "Item",
      "unit_price": 3000,
      "quantity": 2,
      "unit_measure": "unit",
      "total_amount": 6000
    }
  ],
  "taxes": [
    {
      "value": 1140,
      "type": "IVA"
    }
  ],
  "sponsor": {
    "id": 446566691
  }
}'
```

If you do not send the tax attributes, the general IVA (19%) will be applied on the total value of the order.
