# Configure payments with Checkout API

With the [Checkout API](/developers/en/guides/checkout-api/introduction), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

See below which payment methods are available for the store when integrating the Checkout API.

* [Cards](/developers/en/docs/magento-two/payment-configuration/checkout-api/cards): credit and debit cards.
----[mlb]----
* [Ticket](/developers/en/docs/magento-two/payment-configuration/checkout-api/ticket): offline payments (boleto and ATM).
* [Pix](/developers/en/docs/magento-two/payment-configuration/checkout-api/pix): bank transfer available 24 hours a day. The Pix payment option will only be displayed if there is a [Pix key registered](/developers/en/guides/checkout-api/receiving-payment-by-pix) in Mercado Pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
* [Ticket](/developers/en/docs/magento-two/payment-configuration/checkout-api/ticket): offline payments (ticket and ATM).
* [Bank transfer](/developers/en/docs/magento-two/payment-configuration/checkout-api/bank-transfer): transfer between bank accounts within the time limit stipulated by the Central Bank of your country.
------------

> PREV_STEP_CARD_PT
>
> Payment configuration
>
> Learn how to configure Mercado Pago checkouts to receive payments from your store.
>
> [Payment configuration](/developers/en/docs/magento-two/payment-configuration)

> NEXT_STEP_CARD_PT
>
> Configure card payments
>
> Learn how to set up Checkout API to receive card payments at your store.
>
> [Configure card payments](/developers/en/docs/magento-two/payment-configuration/checkout-api/cards)