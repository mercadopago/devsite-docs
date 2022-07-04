# Configure payments with Pix

With the [Checkout API](/developers/en/guides/checkout-api/landing), offer **Pix** payments directly in your store. Pix is ​​an instant payment method available 24 hours a day.

> NOTE
>
> Important
>
> The Pix payment option will only be displayed if there is a [Pix key registered](/developers/en/guides/checkout-api-v2/integrate-pix) in Mercado Pago. <br>
> </br> <br/>
> In addition, there is a limit to the value of Pix, established by the Central Bank of Brazil, which can be moved during the night period (between 8 pm and 6 am) of R$1 thousand. For the daytime period (between 6 am and 8 pm), however, there is no movement limit.

To integrate the payment method, follow the steps below.

1. Select **Yes** to activate the Mercado Pago experience for Pix payments at your store checkout. You can always manage the Pix key(s) you registered in your account using the Mercado Pago app.
2. Indicate the expiration date that customers will have to make the transfer via Pix.
3. If desired, define a percentage discount amount for customers who pay with Pix. The defined percentage will be deducted from the total purchase amount.

Ready! Pix payment via Checkout API has been set up and is ready to receive payments in your store.

> PREV_STEP_CARD_EN
>
> Configure payments with ticket checkout
>
> Configure your store to receive cash payments using the Checkout API.
>
> [Ticket checkout](/developers/en/docs/prestashop/payment-configuration/checkout-api/ticket-checkout)

> NEXT_STEP_CARD_EN
>
> Test payments
>
> Learn how to make a test purchase and ensure the integration works.
>
> [Test payments](/developers/en/docs/prestashop/sales-processing/integration-test)