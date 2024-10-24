# How to integrate checkout in marketplace

Marketplace is an e-commerce site/platform that connects sellers and buyers in a single sales environment, allowing the sale of products and/or services online with greater scope and possibility of conversion.

In addition to the structure needed to make sales, some marketplaces take care of the arrangement of products, payment and shipping methods, optimizing the sales process and facilitating business management.

If you choose to sell through a marketplace, it is possible to integrate **two types of Mercado Pago checkout** to process payments.

* [Checkout Pro](/developers/en/guides/checkout-pro/landing): In this checkout model, the buyer is directed to a Mercado Pago page to complete the payment.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/en/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/en/guides/checkout-api/introduction)------------: This checkout model allows the buyer to make the payment within the marketplace environment.

Both checkouts automatically split the amounts between the seller and the marketplace through the _split_ payment

> NOTE
>
> Important
>
> The Mercado Pago commission is deducted from the amount received by the seller. In other words, the Mercado Pago commission is deducted first and the Marketplace commission is deducted from the remaining amount.

To perform the integration, you will need to follow the usual integration flow of the chosen checkout, necessarily using an access token for each seller, obtained through OAuth. Below we list the steps required to integrate a checkout with the marketplace.

1. Follow the steps described in the [OAuth documentation](/developers/en/guides/additional-content/security/oauth/introduction) to get each `access_token`. This information will be necessary during the checkout integration process with the _marketplace_.
2. Choose the type of checkout you want ([Checkout Pro](/developers/en/guides/checkout-pro/landing) or ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/en/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/en/guides/checkout-api/introduction)------------) and follow the entire onboarding flow.
3. In the checkout integration, use the seller's `public_key` and `access_token` (obtained in step 1) in the _backend_ or in the _header_ of the request.
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