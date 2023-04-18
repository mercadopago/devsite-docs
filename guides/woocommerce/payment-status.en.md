# Payment status

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

