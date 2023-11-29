# Create Discount Promise with Pre-Added Coupon

The **discount promise with pre-added coupon** represents a simplified and efficient way to apply discounts on transactions. In this system, the seller can display the discounted price of a specific product before payment is made, that is, before checkout.

Creating a discount promise with a pre-added coupon is done in two steps:

* Validate the coupon before payment
* Add the coupon before proceeding to payment



## Validate Coupon Before Payment

To **validate a coupon before proceeding with payment**, it is important to send campaign data in the subsequent request. This request ensures that the customer can take advantage of the discount benefit before finalizing the purchase.

For this, use the curl below and insert the parameters according to the descriptive table. This request will verify the validity of the coupon and return detailed information about the applicable discount, if any.

| Parameter  | Description  | Type  | Example  |
| --- | --- | --- | --- |
| Authorization  | User's authorization token (Access token). This information can be obtained through the menu [your integrations](/developers/en/docs/wallet-connect/additional-content/your-integrations/credentials).  | String  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | This is a specific token of the payer, replace <PAYER_TOKEN> with the corresponding token. This information is obtained at the end of the [account linking flow](/developers/en/docs/wallet-connect/account-linking-flow/create-agreement) | String  | payer1-token2-test3-example4  |
| id  | Coupon ID: A code that identifies and associates its use with a specific promotional campaign  | String  | Black_Friday_20  |

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/coupons' \
--header 'Authorization: <Bearer YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "id": "<COUPON>"
 }'
```
]]]

> NOTE
>
> Important
>
> When a coupon is submitted for validation, the system checks whether it is correct and if there is a discount associated with it. Depending on the outcome of the verification, different responses can be received. See the section [Coupon Validation Responses](/developers/en/docs/wallet-connect/discounts/create-discount-promie-preadd-coupon/validation-responses) for more details.


## Add Coupon Before Proceeding to Payment

When the validation of a coupon code is necessary during checkout, that is, before making a payment, it is essential to send the campaign data in the subsequent request.

This step involves sending a request to the system to apply the coupon discount to the transaction that is about to be finalized.

> WARNING
>
> Important
>
> It is important that this request is made after the user enters the coupon and before confirming the payment.

Use the curl below to make the request and ensure that the parameters are filled in according to the following descriptive table.


| Parameter  | Description  | Example  |
| --- | --- | --- |
| Authorization  | User's authorization token (Access token). This information can be obtained through the menu [your integrations](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | This is a specific token of the payer, replace <PAYER_TOKEN> with the corresponding token. This information is obtained at the end of the [account linking flow](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement).  | payer1-token2-test3-example4  |
| amount  | Total value of the transaction  | 550.50  |
| coupon  | Code of the coupon to be applied. It is the code that the user enters and that refers to the discount campaign.  | discount20off  |

[[[
```curl

curl -X POST \
  'https://api.mercadopago.com/v2/wallet_connect/discounts' \
  --header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --header 'x-payer-token: <PAYER_TOKEN>' \
  --header 'Content-Type: application/json' \
  -d '{
      "amount": 550,
      "coupon": "<COUPON>"
  }'

```
]]]

When adding the coupon before proceeding to payment, different responses can be received (success/error). Below is a detailed explanation of each of these responses.

### Success

1. Successful Response when Adding Coupon

* Status Code: no code is returned in this request.
* Description: the response brings information related to the currency, discount value, legal terms, among others, which attests to the success of the transaction.
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
   "legal_terms":"https://mp.com/legal"
  }
}
```

### Error

1. Non-Existent Discount for User

* Status Code: no code is returned.
* Description: This error returns to inform that there is no discount available for the user.
* Response Body:

```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {}
}
```

2. Transaction_amount Must Be Greater Than 0

* Status Code: 400 (Bad Request).
* Description: This error returns when the `transaction_amount` field is filled with a value of 0. In this case, it is necessary to enter a value greater than 0 and make a new request.
* Response Body:

```Json
{
  "error": "bad_request",
  "message": "transaction_amount must be greater than 0",
  "status": 400
}
```

3. Transaction_amount Must Not Be Null

* Status Code: 400 (Bad Request).
* Description: This error returns when the `transaction_amount` field is left blank. In this case, it is necessary to enter a value greater than 0 and make a new request.
* Response Body:

```Json
{
  "error": "bad_request",
  "message": "transaction_amount must not be null.",
  "status": 400
}
```
