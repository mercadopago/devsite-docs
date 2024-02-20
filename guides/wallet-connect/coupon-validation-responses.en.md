# Coupon validation responses

In this section, you will find the possible responses when validating coupons, with details about each type of response, including cases of success, pending, invalidity, and error.

| Status   | Description |
| --- | --- |
| success  | Coupon successfully validated. It is associated with a discount. |
| pending  | Coupon ready to be used to make a payment. |
| invalid  | Incorrect coupon. It is not associated with a discount.  |

## Success

1. Valid coupon with associated discount

* Status code: 200 (Success)
* Description: response indicating success in the validation of the coupon, which is linked to an active discount. Includes legal terms, discount value, type, maximum cap, and the minimum and maximum amounts applicable to the payment.
* Response body:

```Json
{
    "status": "success",
    "description": "Description of the coupon displayed to customers, for example, in interfaces, invoices, or receipts",
    "legal_terms": "URL of the terms and conditions for legal purposes",
    "details": {
       "value": 10.0,
       "type": "percent",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

2. Coupon with discount ready for use

* Status code: 200 (Success)
* Description: response confirming that the coupon is ready for use, awaiting application in a payment. Details of the discount and legal terms are included.
* Response body:

```Json
{
    "status": "pending",
    "description": "Description of the coupon, as displayed to customers in interfaces, invoices, or receipts.",
    "legal_terms": "URL of the terms and conditions for legal purposes.",
    "details": {
       "value": 10.0,
       "type": "percent",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

3. Coupon without associated discount

* Status code: 200
* Description: response indicating that the submitted coupon is invalid and does not have a discount associated with it.
* Response body: 

```Json
{
    "status": "invalid"
}
```

## Error

1. Malformed request

* Status code: 400 (Bad Request)
* Description: error response indicating that the request was poorly formulated. Includes a detailed error message with the corresponding status code.
* Response body: 

```Json
{
  "error": "bad_request",
  "message": "detailed error message",
  "status": 400
}
```

2. Invalid coupon_id

* Status code: 400 (Bad Request)
* Description: error response indicating that the `coupon_id` sent in the request is invalid.
* Response body:

```json
{
  "error": "bad_request",
  "message": "Invalid coupon_id.",
  "status": 400
}
```

3. Invalid payer_token

* Status code: 400 (Bad Request)
* Description: error response indicating that the `payer_token` sent in the request is invalid.
* Response body:

```json
{
  "error": "bad_request",
  "message": "Invalid payer token.",
  "status": 400
}
```