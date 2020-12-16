---
  indexable: false
---

# Flexible release

At the time of the integration, a range of days is set in which the Sellers’ money can be released.

This release is set in each payment with the field `money_release_days` and can be modified later.

> NOTE
>
> Note
>
> If this field is not sent, the maximum number of days of the release range configured in the Marketplace is set by default.

```json
{
  ...
  "disbursements": [
    {
      ...
      "money_release_days": 15
    },
    {
      ...
      "money_release_days": 30
    }
  ],
  ...
}
```

Once created, you can change the release date of either the full Advanced Payment or an individual `disbursement`.

> NOTE
>
> Note
>
> This date must be within the range of releases defined above.

#### Request: Change of date for a full Advanced Payment

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disburses' \
    -d '{...}'
```

#### Request: Change of date for an individual Disbursement

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/disburses' \
    -d '{...}'
```

In the `body` we must set the new release date.

```json
{
  "money_release_date": "2018-07-10T10:23:18.000-04:00"
}
```  

Once the change is requested, a asynchronous process will begin and it will be notified via webhook when it finishes.

> NOTE
>
> Note
>
> Remember: in order to receive notifications about this event, you have to [previously configure an URL to which Mercado Pago has access](https://www.mercadopago.com/mla/account/webhooks).
