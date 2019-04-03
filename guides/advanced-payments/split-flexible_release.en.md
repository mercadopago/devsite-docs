# Flexible Release

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
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disburses?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Request: Change of date for an individual Disbursement

```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/disburses?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

In the `body` we must set the new release date.

```json
{
  "money_release_date": "2018-07-10T10:23:18.000-04:00"
}
```  
