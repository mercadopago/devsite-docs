----[mlb]----
# Installments without card

------------
----[mlm]----
# Compra ahora, paga después

------------
----[mla]----
# Installments without card

------------
----[mla, mlm]----
**Pagos sin Tarjeta** is Mercado Pago’s financing method that allows paying in installments without the need for a card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.
 
**Pagos sin Tarjeta** is currently offered in our [Checkout Pro](/developers/en/docs/checkout-pro/landing), and now it is also possible to access directly from the store checkout. If you haven't set up Checkout Pro yet, you must access the [Configure payments with Checkout Pro](/developers/en/docs/woocommerce/payments-configuration/checkout-pro) section.

If you want to show **Pagos sin Tarjeta** in your store's checkout, follow the steps below.

------------
----[mlb]----
**Linha de Crédito** is Mercado Pago’s financing method that allows paying in installments without the need for a card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.
 
**Linha de Crédito** is currently offered in our [Checkout Pro](/developers/en/docs/checkout-pro/landing), and now it is also possible to access directly from the store checkout. If you haven't set up Checkout Pro yet, you must access the [Configure payments with Checkout Pro](/developers/en/docs/woocommerce/payments-configuration/checkout-pro) section.

If you want to show **Linha de Crédito** in your store's checkout, follow the steps below.

------------
## Configure the payment method in your store's checkout
----[mla, mlm]----
> WARNING
>
> Attention
>
> In order to offer **Installments without card** as a payment method in your WooCommerce store, you must first **update the Mercado Pago plugin** to the most recent version available. To do so, in your store’s admin panel go to **Plugins > Installed plugins**, search for **Mercado Pago**, and click on **Update**.

------------
----[mlb]----
> WARNING
>
> Attention
>
> In order to offer **Installments without card** as a payment method in your WooCommerce store, you must first **update the Mercado Pago plugin** to the most recent version available. To do so, in your store’s admin panel go to **Plugins > Installed plugins**, search for **Mercado Pago**, and click on **Update**.

------------
1. In the option **Up to 12 installments without card through Mercado Pago**, click on **Configure** to access the payment method configuration page.
2. In **Activate the installments without cards in the checkout**, toggle the switch to enable this payment method. Ensure the status is **enabled**.
3. In the option **Title in the checkout**, choose the name that will be displayed for this payment method in your store. We recommend using the default title ----[mlb]----**Linha de Crédito Mercado Pago**------------ ----[mlm, mla]----**Pagos sin Tarjeta de Mercado Pago**------------.
4. In **Convert currency**, toggle the switch to convert the value of the currency set in WooCommerce to a value compatible with the currency you use in Mercado Pago.
5. In Promote payment of your products with Mercado Pago, enable the promotional banner to advertise the installment payment option on your product page. In this field, you can choose how to promote ----[mlb]----Linha de Crédito------------ ----[mlm, mla]----Pagos sin Tarjeta------------ in your store by selecting one of the following alternatives:

    - "Up to 12 installments without cards with Mercado Pago. Learn more."
    - "Buy now, pay later through Mercado Pago. Learn more."
    - "With Mercado Pago, get it now and pay month by month. Learn more."
    - "Pay in up to 12 installments without credit card. Learn more."

6. Click the **Save changes** button to complete the configuration.

![woo-credits-admin-pt](/images/woocomerce/pagos-sin-tarjeta-woo-2-en.png)