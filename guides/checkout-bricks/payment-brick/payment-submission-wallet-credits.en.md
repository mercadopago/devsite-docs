> SERVER_SIDE
>
> h1
>
> Mercado Pago Wallet and Installments without card

Payments with **Mercado Pago Wallet and Installments without card**, the option to pay in installments without a credit card, do not need to be sent via the backend. 

If the user selects this option as a means of payment, the `preferenceId` sent at the initialization of the Brick is responsible for redirecting the buyer to the Mercado Pago website, where the payment will be made directly on our website. 

To redirect the buyer back to your site, you can configure the `back_urls` as described [in this article](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site).

# Marketplace

_Marketplace_ is an e-commerce website/platform that connects sellers and buyers in a single sales environment, allowing the sale of products and services online with greater scope and potential for conversion.

In addition to the necessary structure for conducting sales, some marketplaces take care of product arrangement, payment methods, and shipping, optimizing the sales process and facilitating business management.

The division of values between the seller and the marketplace is automatically done through payment _split_, without the need for any action from the seller.

> NOTE
>
> Important
>
> Mercado Pago's commission is deducted from the amount received by the seller. In other words, Mercado Pago's commission is deducted first, and then the commission from the marketplace is deducted from the remaining amount.

To configure the marketplace on Checkout Bricks, follow the steps listed below.

1. Create an `access_token` for each seller following the documentation on [OAuth](/developers/en/docs/checkout-bricks/additional-content/security/oauth/creation).
2. In the [initialization configuration](/developers/en/docs/checkout-bricks/common-initialization) of Bricks, add `marketplace: true`.

```javascript
const settings = {
  initialization : {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
    marketplace: true,
  },
};
```

3. Use the `public_key` from your integrator account on the **frontend** and insert the seller's `access_token`, obtained in step 1, in the **backend or request header**.
4. To determine the marketplace commission percentage, fill the `marketplace_fee` parameter with a value in the local currency (**its default is 0**) to be charged for each preference created in the API [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post). Remember to add the preference ID in the Brick initialization.

After completing these steps, Checkout Bricks will have been integrated into the marketplace and will be ready to process payments.

> WARNING
>
> Attention
>
> In the marketplace flow, it is not possible to enable installment payments without a credit card.