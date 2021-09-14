# Sales Processing

With all steps completed, your customers will be able to make purchases from your store. When performing a transaction, it is commom for some messages to return with specific information about the purchase. These informations are  available in **Notas do Pedido** section of the WooCommerce panel.

![Sales processing](/images/woocomerce/en_sales_processing.gif)

In this section, you will have access to details of the possible status and reasons for each return.

## Payment Status

Every sale generates a payment status that shows the status of the sale including confirmation, pending or denial of payment and other important information about the transaction. 

There are two statuses in a WooCommerce sale: _status do pedido_ and _status do pagamento_. In the table below you can check the details on how this information correlates.

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

For more information, access the [Activities](https://www.mercadopago.com.br/activities) section of your Mercado Pago account and the [WooCommerce order manual](https://docs.woocommerce.com/document/como-gerenciar-pedidos/).

In addition, you can have access to the details of each payment attempt that happened in your store. To do this, go to the WordPress panel, and then click **WooCommerce > Orders > Order Details**.

## Reasons for refusals 

Regarding the **approval of payments** in your store, there are three main reasons that can directly impact these results. 

Below, we detail the factors that influence a payment refusal.

| Reason | Situation | How to avoid |
|---|---|---|
| Buyer's mistakes | Errors in filling in address, CPF or card details. | Checkout with clear information in step-by-step purchase. |
| Banking refusals | Cards with expiration date, lack of limit, insufficient funds or disabled for online purchases. | Offer alternatives to other methods and/or payment terms. |
| Fraud prevention | Mercado Pago's anti-fraud system protects your business against malicious attacks that can generate losses.| This type of refusal is beneficial to your store. |

For more information on the reasons mentioned above, visit the articles:

* [Payment refusals](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
* [How to handle payment denials](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> LEFT_BUTTON_RECOMMENDED_EN
>
> FAQ
>
> Check the main doubts about the integration.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/faq)