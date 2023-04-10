# Responses

In this section you will find the details of each response to requests made when using the **idempotency key** in the request header.

## Successful response

[[[
```Json
===
Status code: 200
===

{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123”
   },
   "payments":[
      {
         "id":3870106238,
         "status":”approved”,
         "status_detail":”accredited”,
         "payment_type_id":"credit_card",
         "payment_method_id":"visa",
         "transaction_amount":700.50,
         "installments":1,
         "description":"Payment Google",
         "capture":true,
         "external_reference":"Pago_123”
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   },
   "site_id": "MLM",
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}

```
]]]

## Failed response: Bad request

This response returns when any of the request parameters are incorrect or cannot be found. For example, this error will appear if one of the mandatory parameters is not sent at the time of the request.

[[[
```Json
===
Status code: 400
===
{
   "status": "400",
   "error":  "bad_request",
   "message": "Some parameters are invalid for search.",
}

```
]]]

## Failed due to conflict

This failure occurs when an Advanced Payment is created and it is being processed or has already been paid. In this case, the idempotency process is not fulfilled and therefore it is rejected.

[[[
```Json
===
Status code: 409
===
{
   "status": "409",
   "error":  "Conflict",
   "message": "The process has not been completed yet. Try again later.",
   "cause": [
    {
      "code":"401001",
      "message": "The process has not been completed yet. Try again later.",
      "data": null
    }
   ]
}

```
]]]

## Failed due to unprocessable entity

This failure occurs when creating an Advanced Payment, an error or some empty information is identified. When this happens, the idempotency process is not fulfilled, becoming an unprocessable entity and therefore it is rejected.

[[[
```Json
===
Status code: 422
===
{
   "status": "422",
   "error":  "Unprocessable entity",
   "message": "Idempotency key already used.",
   "cause": [
    {
      "code":"422001",
      "message": "Idempotency key already used.",
      "data": null
    }
   ]
}

```
]]]
