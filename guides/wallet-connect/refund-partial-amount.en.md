# Refund partial amount


To refund a partial amount, that is, to refund only part of the amount paid, it is necessary to indicate the amount that must be returned directly in the `body` of the request. To do so, send a **POST** to the endpoint [/v1/advanced_payments/{advanced_payment_id}/refunds](/developers/enreference/wallet_connect/_advanced_payments_advanced_payment_id_refunds/post) with the appropriate information and execute the request or, if you prefer , use the `curl` below.

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID/refunds' \
  -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
        "amount":25
      }'

```
]]]

## Responses

When executing the request for a partial refund, different responses may be returned. Below you will find the details of each one of them, as well as the possible causes.

### Successful response

[[[
```Json
===
Status code: 200
===
[
    {
        "id": 1242469925,
        "payment_id": 51617407254,
        "amount": 25,
        "source": {
            "id": 783789745,
            "name": "Test Test",
            "type": "collector"
        },
        "date_created": "2022-11-18T08:48:06.768-04:00",
        "status": "approved"
    }
]

```
]]]

### Failed response: Bad request

This response returns when one of the request parameters is incorrect or not found. For example, this error will occur when an invalid id is submitted.

[[[
```Json
===
Status code: 400
===
{
   "status": "400",
   "error":  "bad_request",
   "message": "Invalid splitter id.",
   "cause": [
    {
      "code":"400048",
      "message": "Invalid splitter id",
      "data": null
    }
   ]
}

```
]]]

### Failed response: Not found

This is a common response that is returned when no prepayment created with the id provided in the request parameters is found.

[[[
```Json
===
Status code: 404
===
{
   "status": "404",
   "error":  "not_found",
   "message": "Advanced payment not found.",
   "cause": [
    {
      "code":"404002",
      "message": "Advanced payment not found",
      "data": null
    }
   ]
}

```
]]]

### Failed response: Internal error code

It is the response that indicates that a server error occurred while processing the request. This means that the client's request could not be completed due to an internal problem on the server.

[[[
```Json
===
Status code: 500
===
{
   "status": "500",
   "error":  "internal_server_error",
   "message": "Invalid splitter id.",
   "cause": [
    {
      "code":"500000",
      "message": "Internal server error",
      "data": null
    }
   ]
}

```
]]]
