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

In order to process your IVA tax correctly, we allow you to sent the total amount (transaction_amount), the net amount (net_amount) and IVA tax (taxes) when you receive a payment through API integration.

In this example we show you how to send the data:

```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/payments?access_token=ACCESS_TOKEN' \
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
