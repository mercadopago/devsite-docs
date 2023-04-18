> SERVER_SIDE
>
> h1
>
> Mercado Pago Wallet

Payments with **Mercado Pago Wallet** do not need to be sent via the backend. If the user selects this option as a means of payment, the `preferenceId` sent at the initialization of the Brick is responsible for redirecting the buyer to the Mercado Pago website, where the payment will be made directly on our website. To redirect the buyer back to your site, you can configure the `back_urls` as described [in this article.](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site)