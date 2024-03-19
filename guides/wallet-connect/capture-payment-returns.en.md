# Responses

In this section you will find the details of each response to the requests made to capture payments.

## Payment approved

[[[
```Json
===
Status code: 201
===
{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture",
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
         "description":"Payment for the purchase of furniture",
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

## Payment rejected

> NOTE
>
> Important
>
> For more information on why the payment was refused, check the `payment.status_detail` field.

[[[
```Json
===
Status code: 201
===
{
   "id":80458724,
   "status":"rejected",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture"
   },
   "payments":[
      {
         "id":3870106238,
         "status":”rejected”,
         "status_detail":”cc_rejected_other_reason”,
         "payment_type_id":"credit_card",
         "payment_method_id":"visa",
         "transaction_amount":700.50,
         "installments":1,
         "issuer_id":25,
         "description":"Payment for the purchase of furniture",
         "capture":true
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
   "binary_mode":true
}
```
]]]

## Payment rejected due to insufficient funds in the account

This response returns when an attempt is made to create a payment but the payer has no balance in his Mercado Pago account.

[[[
```Json
===
Status code: 201
===
{
   "id":90458724,
   "status":"rejected",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture"
   },
   "payments":[
      {
         "id":null,
         "status":”rejected”,
         "status_detail":”insufficient_money”,
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment for the purchase of furniture",
         "capture":true
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   }
   "site_id": "MLM",
   "binary_mode":true 
}
```
]]]

## Payment rejected due to lack of authorization

This error is returned when the client cancels the agreement.

[[[
```Json
===
Status code: 401
===
{
   "status": "401",
   "error":  "unauthorized",
   "message": "Invalid payer token.",
   "cause": [
    {
      "code":"401003",
      "message": "Invalid payer token",
      "data": null
    }
   ]
}

```
]]]