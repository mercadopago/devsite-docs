# Configure payments Checkout Pro
 
With [Checkout Pro](/developers/en/guides/checkout-pro/landing), the buyer will be directed from the store to the Mercado Pago website where he must fill in the requested information and make the payment. This way, the transaction is processed and completed outside your store environment. It is not necessary for the buyer to have a Mercado Pago account and, at the end of the transaction, the buyer can be returned to your store.
 
To integrate Checkout Pro, follow the steps below.
 
1. Select **Yes** to activate the Mercado Pago experience at your store checkout.
2. Choose the payment methods you want to offer in the Mercado Pago payment environment, which can be:
 ----[mlb]----
 * Debit and credit cards;
 * Cash (Mercado Pago account or boleto bancário);
 * Bank transfer (Pix and PEC). The Pix payment option will only be displayed if there is a [Pix key registered](/developers/en/guides/checkout-api-v2/integrate-pix) on Mercado Pago.
 ------------
----[mla, mlm, mpe, mco, mlu, mlc]----
 * Debit and credit cards;
 * Cash (Mercado Pago account or cash);
 * Bank transfer.
  ------------
3. Select the **maximum installments** you wish to offer in your store.
4. [Configure](https://www.mercadopago[FAKER][URL][DOMAIN]/costs-section#from-section=menu) the tariff that will be paid on each purchase and also offer interest-free installments to your customers .
5. Select whether or not you want the customer to **automatically return** to your store after completing payment.
6. Define whether customers will have access to **modal checkout**, a Mercado Pago payment form without leaving your store. If this option is disabled, buyers will be redirected to another page.
7. If desired, activate **binary mode** when you do not want to leave payments in a pending or review state. With binary mode, payments will be automatically accepted or declined.
8. Indicate the period in which the customer's payment preferences will be saved without the customer having to re-enter them.

Ready! Mercado Pago Checkout Pro is ready to receive payments from your store.

> If you want to use the Checkout API to receive payments in the store, see the section [Configure payments with Checkout API](/developers/en/docs/prestashop/payment-configuration/checkout-api/introduction)

> PREV_STEP_CARD_EN
>
> Payment configuration
>
> Learn how to configure Mercado Pago checkouts to receive payments from your store.
>
> [Payment configuration](/developers/en/docs/prestashop/payment-configuration)

> NEXT_STEP_CARD_EN
>
> Test payments
>
> Learn how to make a test purchase and ensure the integration works.
>
> [Test payments](/developers/en/docs/prestashop/sales-processing/integration-test)