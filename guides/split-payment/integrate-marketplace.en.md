# Integrate checkout in Split payments (marketplace)

If you choose to sell through a marketplace, it is possible to integrate **two types of Mercado Pago checkout** to process payments.

* [Checkout Pro](/developers/en/guides/checkout-pro/landing): In this checkout model, the buyer is directed to a Mercado Pago page to complete the payment.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/en/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/en/guides/checkout-api/introduction)------------: This checkout model allows the buyer to make the payment within the marketplace environment.

Both checkouts automatically split the amounts between the seller and the marketplace through the _split_ payments.

> NOTE
>
> Important
>
> The Mercado Pago commission is deducted from the amount received by the seller. In other words, the Mercado Pago commission is deducted first and the Marketplace commission is deducted from the remaining amount.

To perform the integration, you will need to follow the usual integration flow of the chosen checkout, necessarily using an access token for each seller, obtained through OAuth. Below we list the steps required to integrate a checkout with the marketplace.

1. Follow the steps described in the [OAuth documentation](/developers/en/guides/additional-content/security/oauth/introduction) to get each `access_token`. This information will be needed during the checkout integration process into the marketplace.
2. Choose the type of checkout you want ([Checkout Pro](/developers/en/guides/checkout-pro/landing) or ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/en/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/en/guides/checkout-api/introduction)------------) and follow the entire onboarding flow.
3. In the checkout integration, use the `public_key` of your integrator account in the frontend and insert the seller's `access_token` (obtained in step 1) in the backend or in the request header.
4. To determine the marketplace commission percentage:

  - If it's Checkout Pro, fill the `marketplace_fee` parameter with the amount to be charged for each payment preference created in the **/checkout/preferences** API.

<br>

#### Example

```json
    {
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Meu produto",
            "currency_id": "BRL",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "marketplace_fee": 10
    }
```
    
  - If it's Checkout ----[mla, mlu, mpe, mco, mlc, mlm]----API------------ ----[mlb]----Transparente------------, fill the `application_fee` parameter with the amount to be charged for each payment created in the **/payments** API.

<br>

#### Example

```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{oauth_access_token}}' \
--data-raw '{
    "description": "Test payment 3",
    "installments": 1,
    "token": "{{card_token}}",
    "payer": {
        "email": "{{payer_email}}"
    },
    "payment_method_id": "master",
    "transaction_amount": 25,
    "application_fee": 10
}'
```

Upon completing these steps, the checkout will have been integrated into the marketplace and will be ready to process payments.

> WARNING
>
> Important
>
> In case of a refund, the amount due to the final customer will be divided and subtracted from the seller's account and the Marketplace's account, in a **proportional** way to the parties involved. Additionally, in 1:1 models, the Marketplace cannot issue a full refund if the seller does not have sufficient funds in their account. In this case, the Marketplace's account must refund the equivalent of its share and decide whether to return the remaining amount, which is the seller's responsibility, by other means of payment.