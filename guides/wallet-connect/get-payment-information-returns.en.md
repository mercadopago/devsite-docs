# Responses

In this section you will find the details of each response to requests made to get payment information.

## Successful response

[[[
```Json
===
Status code: 200
===

{
  "id": 10267812,
  "wallet_payment": {
    "transaction_amount": 125.98,
    "description": "Payment for the purchase of furniture",
    "external_reference": "Payment_seller_123"
  },
  "payments": [
    {
      "id": 3870106238,
      "status_detail": "approved_id",
      "payment_method_id": "credit_card_id",
      "transaction_amount": 700.5,
      "installments": 1,
      "description": "Payment for the purchase of furniture",
      "capture": true,
      "external_reference": "payment_123"
    }
  ],
  "disbursements": {
    "collector_id": "collectorId"
  },
  "payer": {
    "id": 8879
  },
  "site_id": "MLB",
  "date_created": "2018-10-20T09:34:20.518-04:00",
  "date_last_updated": "2018-10-20T09:34:20.518-04:00"
}

```
]]]

## Failed due to payment not found

This is a failure that occurs when no payment created with the ID provided in the request parameters is found.

[[[
```Json
===
Status code: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "Payment not found."
}

```
]]]


## Failure due to Client ID not found in whitelist

This response returns when the `Client ID` is not whitelisted, therefore not enabled for processing.

[[[
```Json
===
Status code: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "Client ID not found in whitelist."
}

```
]]]

## Failure due to collector_id not found in merchant list

This response returns when the collector is not on the merchant list.


[[[
```Json
===
Status code: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "collector_id not found in the merchant list."
}

```
]]]
