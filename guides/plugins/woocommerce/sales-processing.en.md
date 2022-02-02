# Sales Processing

With all steps completed, your customers will be able to make purchases from your store. When performing a transaction, it is common for some messages to return with specific information about the purchase. This information is available in the **Order notes** section of the WooCommerce panel.

![Sales processing](/images/woocomerce/en_order_notes_03.png)

In this section, you will have access to details of the possible status and reasons for each return.

## Payment Status

Every sale generates a payment status that shows the condition of the purchase, including confirmation, pending, or denial of payment and other important information about the transaction.

There are two statuses in a WooCommerce sale: **payment status** and **order status**. In the following table, you can check the details on how this information correlates.

| Mercado Pago status (payment) | WooCommerce status (order) |
|---|---|
| Pending | Pending |
| Approved | Processing |
| Inprocess | On hold |
| Inmediation | On hold|
| Rejected | Failed |
| Cancelled | Cancelled |
| Refunded | Refunded |
| Chargedback| Refunded|

For more information, access the [Activities](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) section of your Mercado Pago account and the [WooCommerce order manual](https://docs.woocommerce.com/document/managing-orders/).

In addition, you can have access to the details of each payment attempt that happened in your store. To do this, go to the WordPress panel, and then click **WooCommerce > Orders > Order Details**.

## Reasons for refusals 

Regarding the **approval of payments** in your store, three main reasons can directly impact these results.  

Below, we detail the factors that influence a payment refusal.

| Reason | Situation | How to avoid |
|---|---|---|
| Buyer's mistakes | Errors in filling in address, CPF, or card details. | Checkout with clear information in the step-by-step purchase. |
| Banking refusals | Cards with an expiration date, lack of limit, insufficient funds, or disabled for online purchases. | Offer alternatives to other methods and/or payment terms. |
| Fraud prevention | Mercado Pago's anti-fraud system protects your business against malicious attacks that can generate losses.| This type of refusal is beneficial to your store. |

> NEXT_STEP_CARD_EN
>
> FAQ
>
> Check the main doubts about the integration.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/faq)