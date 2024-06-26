# Responses

This section details the different responses that can be received when creating a discount promise without a pre-added coupon. The responses are categorized based on the outcome of the request, ranging from success in creating the discount promise to different types of errors.

## Success

1. Response with discount applied

* Status code: 200 (Success)
* Description: Returns the transaction value with the discount applied, detailed information about the discount, and a link to the discount's legal terms.
* Response Body:

```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {
    "amount": 55.0,
    "detail": {
      "value": 10.0,
      "type": "percent",
      "cap": 1000.0
    },
    "legal_terms": "https://mercadopago.com/legal/terms"
  }
}
```

2. Response for user/campaign without discounts

* Status code: 200 (Success)
* Description: indicates that the transaction was processed without a discount applied.
* Response body:

```Json
{
  "transaction_amount": 150.0,
  "currency_id": "ARS",
  "discount": {}
}
```

## Error

1. Response for incorrect request

* Status code: 400 (Bad Request)
* Description: occurs when the request is malformed or incomplete.
* Response body:

```Json
{
  "error": "bad_request",
  "message": "<bad_request_message>",
  "status": 400
}
```

2. Response for resource not found

* Status code: 404 (Not Found)
* Description: means that the requested resource does not exist on the server.
* Response body:

```Json
{
   "error": "not_found",
   "message": "Not found manual input code",
   "status": 404
}
```

3. Response for internal server error

* Status code: 500 (Internal Server Error)
* Description: indicates a generic server error, suggesting problems on the Mercado Pago server side.
* Response body:

```Json
{
  "error": "internal_error",
  "message": "internal server error",
  "status": 500
}
```