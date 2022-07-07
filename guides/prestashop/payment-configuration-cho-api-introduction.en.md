# Configure payments with Checkout API

With the [Checkout API](/developers/en/guides/checkout-api/introduction), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

See below which payment methods are available for the store when integrating the Checkout API.

* [Cards](/developers/en/docs/prestashop/payment-configuration/checkout-api/cards): credit and debit cards.
----[mlb]----
* [Ticket checkout](/developers/en/docs/prestashop/payment-configuration/checkout-api/ticket-checkout): cash payments (Mercado Pago account or boleto bancário) and lottery payment without a boleto bancário (with CPF) .
* [Pix](/developers/en/docs/prestashop/payment-configuration/checkout-api/pix): bank transfer available 24 hours a day. The Pix payment option will only be displayed if there is a [Pix key registered](/developers/en/guides/checkout-api-v2/integrate-pix) on Mercado Pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
* [Ticket checkout](/developers/en/docs/prestashop/payment-configuration/checkout-api/ticket-checkout): cash (Mercado Pago account or cash).
------------

> NOTE
>
> Important
>
> When using the [Checkout API](/developers/en/guides/checkout-api/landing) to receive payments, it is important to configure the sending of emails that will notify the user of their transactions. See the section [How to customize payment notification for Checkout API](/developers/en/docs/prestashop/how-tos/checkout-api/email-customization) for details on how to do this. <br>
> </br> <br/>
> If you would like to use Checkout Pro to receive in-store payments, see the section [Configuring payments with Checkout Pro](/developers/en/docs/prestashop/payment-configuration/checkout-pro).

> PREV_STEP_CARD_EN
>
> Payment configuration
>
> Learn how to configure Mercado Pago checkouts to receive payments from your store.
>
> [Payment configuration](/developers/en/docs/prestashop/payment-configuration)

----[mlb]----
> NEXT_STEP_CARD_EN
>
> Configure payments with cards
>
> See how to set up Checkout Transparente to receive card payments in your store.
>
> [Configure payments with cards](/developers/en/docs/prestashop/payment-configuration/checkout-api/cards)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_EN
>
> Configure payments with cards
>
> See how to set up Checkout API to receive card payments in your store.
>
> [Configure payments with cards](/developers/en/docs/prestashop/payment-configuration/checkout-api/cards)
------------