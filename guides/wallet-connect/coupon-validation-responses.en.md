# Coupon validation responses

In this section, you will find the possible responses when validating coupons, with details about each type of response, including cases of success, pending, invalidity, and error.

| Status   | Description |
| --- | --- |
| success  | Coupon successfully validated. It is associated with a discount. |
| pending  | Coupon ready to be used to make a payment. |
| invalid  | Incorrect coupon. It is not associated with a discount.  |

## Success

1. Valid Coupon with Associated Discount

* Status Code: 200 (Success)
* Description: Response indicating success in the validation of the coupon, which is linked to an active discount. Includes legal terms, discount value, type, maximum cap, and the minimum and maximum amounts applicable to the payment.
* Response Body:

```Json
{
    "status": "success",
    "description": "Description of the coupon displayed to customers, for example, in interfaces, invoices, or receipts",
    "legal_terms": "URL of the terms and conditions for legal purposes",
    "details": {
       "value": 10.0,
       "type": "percentage",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

2. Coupon with Discount Ready for Use

* Status Code: 200 (Success)
* Description: Response confirming that the coupon is ready for use, awaiting application in a payment. Details of the discount and legal terms are included.
* Response Body:

```Json
{
    "status": "pending",
    "description": "Description of the coupon, as displayed to customers in interfaces, invoices, or receipts.",
    "legal_terms": "URL of the terms and conditions for legal purposes.",
    "details": {
       "value": 10.0,
       "type": "percentage",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

3. Coupon Without Associated Discount

* Status Code: 200
* Description: Response indicating that the submitted coupon is invalid and does not have a discount associated with it.
* Response Body: 

```Json
{
    "status": "invalid"
}
```

## Error

1. Malformed Request

* Status Code: 400 (Bad Request)
* Description: Error response indicating that the request was poorly formulated. Includes a detailed error message with the corresponding status code.
* Response Body: 

```Json
{
  "error": "bad_request",
  "message": "detailed error message",
  "status": 400
}
```

2. Invalid Coupon_id

* Status Code: 400 (Bad Request)
* Description: Error response indicating that the coupon_id sent in the request is invalid.
* Response Body:

```json
{
  "error": "bad_request",
  "message": "Invalid coupon_id.",
  "status": 400
}
```

3. Invalid Payer_token

* Status Code: 400 (Bad Request)
* Description: Error response indicating that the payer_token sent in the request is invalid.
* Response Body:

```json
{
  "error": "bad_request",
  "message": "Invalid payer token.",
  "status": 400
}
```

