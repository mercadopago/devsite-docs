# Register gateway affiliations

A **gateway affiliation** is a set of settings that represent the processing of your payments with a gateway of your choice, in this case **Mercado Pago**. 

With this, it is possible to choose which payments gateway will process the different types of transactions from your VTEX store, using the **MercadoPagoV2 gateway affiliation** to process payments with Credit Card, Debit Card, Mercado Pago Offline and Checkout Pro.

## Creating a MercadoPagoV2 gateway affiliation

----[mlb]----

The MercadoPagoV2 affiliation processes payment conditions with Credit Card, Boleto Bancário, Pix, Mercado Pago Offline and Checkout Pro.

------------
----[mla, mlm, mlu, mco, mpe]----

The MercadoPagoV2 affiliation processes payment conditions with Credit Card, Debit Card, Mercado Pago Offline and Checkout Pro.

------------
----[mlc]----

The MercadoPagoV2 affiliation processes payment conditions with Credit Card, Debit Card, and Checkout Pro.

------------

> WARNING
>
> Important
>
> If you have a MercadoPagoV1 affiliation, we recommend that you [migrate to MercadoPagoV2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/mp1-mp2-migration) for security reasons.

To create a **payment gateway affiliation with MercadoPagoV2**, follow the steps below:

1. In the administration panel of your store, go to **Settings** within the **Payments** module.
2. In the **Gateway affiliations** tab, click on the "+" button.
3. Click on the **MercadoPagoV2** connector.
4. Complete the following fields: 
   * **Application Key:** This refers to your Mercado Pago production [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/credentials/credentials). Complete this with your Public Key.
   * **Application Token:** This refers to your Mercado Pago [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/credentials/credentials). Complete this with your Access Token.
   * **Prazo de vencimento do boleto - Periodo de vencimiento del ticket:** Deadline, in business days, for the expiration of the purchase order. It will also define the deadline of the payment method. If the customer pays after the deadline, the money will be deposited in their Mercado Pago account.
   * **Nome da loja - Nombre para resúmenes:** Name of the store. The value of this field will appear on the customer's card invoice.
   * **Parcelamento máximo - Cuotas máximas** Maximum number of installments available.
   * **Categoría principal da loja - Categoría principal de la tienda:** Store's category.
   * **Reembolso automático / manual:** Select whether you want Mercado Pago to automatically reimburse in case of cancellation, or if you want to retain the amount paid for the customer to use in future purchases.
   * **Modo binário - binário:** Configure whether the payment can go through manual review or not.
   * **Métodos de pagamento excluídos - Métodos de pago excluídos (visa, paypal, bolbradesco, oxxo...):** Payment methods to be excluded at the time of purchase. [Here are the options](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/payment-methods). Applies only to MercadoPagoPRO, MercadoPagoWallet and MercadoPAgoOff.
   * **Tipos de pagamento excluídos - Tipos de pago excluidos (credit_card, bank_transfer, ticket...):** Payment types to be excluded at the time of purchase. [Here are the options](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/payment-methods). Applies only to MercadoPagoPRO, MercadoPagoWallet and MercadoPagoOff.
   * **Modo de processamento - Modo de procesamiento** Configure if the payment will be gateway of aggregator. To process payments in Gateway mode, contact your Mercado Pago Advisor.
   * **Integrator ID:** Para programadores o agencias que realizan la integración.
   * **Moeda - Moneda:** Currency to be configured (USD or Local).
5. Click on **Save**.

And that's it! Your affiliation with MercadoPagoV2 is already active!

> NOTE
>
> Note
> 
> If you have difficulties during your integration, check our [errors list](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/common-errors), and our document about [VTEX logs.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/logs)

![Creating a MercadoPagoV2 gateway affiliation](/images/vtex/affiliationV2-imagenv2-en.gif)