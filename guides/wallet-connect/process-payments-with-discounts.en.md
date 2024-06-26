# Process Payments with Discount

In this section, we detail the requests and necessary parameters to process payments with discount and the expected responses from each of them.

> NOTE
>
> Important
>
> The refund of the discount is not instantaneous; it may take about 200 milliseconds without a coupon and up to 10 seconds with a coupon. Therefore, we recommend creating the discount promise and proceeding immediately with the payment.

To process payments with discount, use the _curl_ below and ensure that the request parameters are filled in according to the information described in the following table.

| Parameter  | Type  | Description   | Example  |
| --- | --- | --- | --- |
| Authorization  | String  | User's authorization token (Access token). This information can be obtained through the menu [Your integrations](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| wallet_payment  | Object  | Object that groups information of payment processed via Wallet Connect.  | N/A  |
| transaction_amount  | Double  | Amount for which the payment is made.  | 550.0  |
| description  | String  | Generic description of the payment being made.  | "Payment Description"  |
| external_reference  | String  | Payment reference assigned by the seller. Accepts only numbers and letters.  | "Payment_123"  |
| discount  | Object  | Optional field that groups the data of the discount to be applied. This field is only mandatory if you want to create a payment with a discount. If sent empty, it will create a payment without a discount.  | N/A  |
| amount  | Double  | Value of the discount to be applied to the payment.  | 55.0  |
| description  | String  | Description of the discount.  | "Discount for Black Friday".  |
| detail  | Object  | Object that extends information on the characteristics of the discount.  | N/A  |
| value  | Double  | Amount of discount to be applied to the payment. This field corresponds to the `type` mentioned below, for example, 30 percent.  | 10.0  |
| type  | String  | Unit of measure of the discount value, can be percentage or a fixed amount.  | percent (for percentage) or fixed (for fixed values).  |
| cap  | Double  | Maximum value for which the discount can be applied on a payment.  | 5000  |
| payer  | Object  | Object that contains the payer's data.  | N/A  |
| token  | String  | Specific token of the payer, used to perform all the validation of the payment flow.  | payer1-token2-test3-example4  |
| type_token  | String  | Type of token to be used in payments.  | wallet-token (this is the only type of token accepted for payments via Wallet Connect).  |

[[[
```curl
curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments' \
--header 'Authorization: <YOUR_ACCESS_TOKEN>' \
--data '{
    "wallet_payment": {
        "transaction_amount": 550,
        "description": "Payment Description",
        "external_reference": "Pago_123",
        "discount": {
            "amount": 55.0,
            "description": "Pruebas wc",
            "detail": {
                "value": 10.0,
                "type": "percent",
                "cap": 5000
            }
        }
    },
    "payer": {
        "token": "PAYER_TOKEN",
        "type_token": "wallet-token"
    }
}'

```
]]]

## Responses

Below we detail the different responses that can be received when processing a payment with a discount. The responses are categorized based on the outcome of the request, ranging from success in processing to a specific error.

### Success

```Json
{
  "id": 1234567,
  "status": "approved",
  "marketplace": null,
  "sponsor_id": null,
  "payments": [
    {
      "id": "PAYMENT-ID",
      "status": "approved",
      "status_detail": "accredited",
      "payment_type_id": "account_money",
      "payment_method_id": "account_money",
      "token": null,
      "transaction_amount": 500,
      "installments": 1,
      "processing_mode": "aggregator",
      "issuer_id": null,
      "coupon_amount": 10.0,
      "campaign_id": "CAMPAIGN-ID",
      "coupon_code": null,
      "description": "Payment Wallet",
      "external_reference": null,
      "statement_descriptor": null,
      "date_of_expiration": null,
      "merchant_account_id": null,
      "payment_method_option_id": null,
      "additional_info": null,
      "transaction_details": null,
      "net_amount": null,
      "taxes": null
    }
  ],
  "disbursements": null,
  "payer": {
    "id": "PAYER-ID",
    "email": "PAYER-EMAIL",
    "address": null,
    "identification": null,
    "first_name": null,
    "last_name": null,
    "phone": null,
    "token": "PAYER-TOKEN",
    "external_payer_id": "EXTERNAL-PAYER-ID"
  },
  "external_reference": null,
  "description": null,
  "binary_mode": true,
  "capture": true,
  "date_created": "2023-07-24T14:30:45.574-04:00",
  "date_last_updated": "2023-07-24T14:30:46.517-04:00",
  "metadata": null,
  "additional_info": null,
  "wallet_payment": {
    "transaction_amount": 550,
    "description": "Payment Wallet",
    "external_reference": null,
    "subscription_data": null,
    "user_present": null,
    "discount": {
      "amount": 50.0,
      "description": "wallet connect test",
      "detail": {
        "value": 10.0,
        "type": "percent",
        "cap": 100000.0
      }
    },
    "payment_preference": {
      "active": true,
      "user_id": 1431302201,
      "payment_method": [
        {
          "priority": 1,
          "payment_method": "account_money"
        }
      ]
    }
  },
  "pos_id": null,
  "store_id": null,
  "wallet_connect_discount": {
    "amount": 10.0,
    "token": "DISCOUNT-TOKEN"
  }
}
```

### Error

If the discount applied to the payment is not valid or the amount indicated in the order does not correspond to the established discount value, an error will be generated, as described below.

```Json
{
  "error": "bad_request",
  "message": "discount doesn't exist or amount is incorrect",
  "status": 400,
  "cause": [
    {
      "code": 400136,
      "description": "discount doesn't exist or amount is incorrect",
      "data": null
    }
  ]
}
```