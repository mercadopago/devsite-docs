# Integrate checkout in Split Payment (marketplace)

If you choose to sell through a Marketplace, it is possible to integrate **two types of Mercado Pago checkout** to process payments made.

* [Checkout Pro](/developers/en/guides/checkout-pro/landing): In this checkout model, the buyer is directed to a Mercado Pago page to complete the payment.
* [Checkout API](/developers/en/guides/checkout-api/introduction): This checkout model allows the buyer to make the payment within the marketplace environment.

Both checkouts automatically split the amounts between the seller and the marketplace through the _split_ payment

> NOTE
>
> Important
>
> The Mercado Pago commission is deducted from the amount received by the seller. In other words, the Mercado Pago commission is deducted first and the Marketplace commission is deducted from the remaining amount.

To perform the integration you will need to follow the usual integration flow of the chosen checkout necessarily using an access token for each seller, obtained through OAuth. Below we list the steps required to integrate a checkout with the marketplace.

1. Follow the steps described in the [OAuth documentation](/developers/en/guides/additional-content/security/oauth/introduction) to get each `access_token`. This information will be needed during the checkout integration process into the marketplace.
2. Choose the type of checkout you want ([Checkout Pro](/developers/en/guides/checkout-pro/landing) or [Checkout API](/developers/en/guides/checkout-api/introduction) and follow the entire onboarding flow.
3. In the checkout integration, use the `public_key` of your integrator account in the frontend and insert the seller's `access_token` obtained in step 1, in the backend or in the request header.
4. To determine the marketplace commission percentage:

    - If the checkout is Pro, fill the `marketplace_fee` parameter with the amount to be charged for each payment preference created in the **/checkout/preferences** API.
    - If the checkout is ----[mla, mlu, mpe, mco, mlc, mlm]----API------------ ----[mlb]----Transparente------------, fill the `application_fee` parameter with the amount to be charged for each payment created in the **/payments** API.

Upon completing these steps, the checkout will have been integrated into the marketplace and will be ready to process payments.
