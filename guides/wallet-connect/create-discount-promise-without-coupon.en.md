# Create discount promise without pre-added coupon

The **discount promise without a pre-added coupon** is a method in which the discount is applied to a transaction without the need for a coupon already linked to the user's account or transaction.

In this case, the discount can be automatically applied based on certain criteria or actions, such as customer loyalty, total purchase value, or participation in a specific promotion.

Unlike the approach with a pre-added coupon, where the discount is guaranteed through a code already entered, here the discount is ensured through rules or conditions defined by the platform or the seller. This strategy allows customers to benefit from discounts without the need to enter codes.

To **create a discount promise without a pre-added coupon**, use the _curl_ below and insert the parameters according to the following descriptive table.

| Parameter  | Description  | Example  |
| --- | --- | --- |
| Authorization  | User's authorization token (Access token). This information can be obtained through the menu [your integrations](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | This is a specific token of the payer, replace <PAYER_TOKEN> with the corresponding token. This information is obtained at the end of the [account linking flow](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement)  | payer1-token2-test3-example4  |
| amount  | Total value of the transaction.  | 550.50  |

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/payment/discounts' \
--header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "amount": 550
}'

```
]]]

When creating a discount promise without a pre-added coupon, it is possible to receive different responses (success/error). See the [Responses](/developers/en/docs/wallet-connect/discounts/create-discount-promise-without-preadd-coupon/responses) section for details on each of them.