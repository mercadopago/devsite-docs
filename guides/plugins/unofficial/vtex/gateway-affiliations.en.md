# Register gateway affiliations

A **gateway affiliation** is a set of settings that represent the processing of your payments with a gateway of your choice, in this case **Mercado Pago**. 

With this, it is possible to choose which payments gateway will process the different types of transactions from your VTEX store, using the **MercadoPagoV2 gateway affiliation** to process payments with Credit Card, Debit Card, Mercado Pago Offline and Checkout Pro.

## Creating a MercadoPagoV2 gateway affiliation

----[mlb]----

The MercadoPagoV2 affiliation processes payment conditions with Credit Card, Debit Card, Boleto Bancário, Pix, Mercado Pago Offline and Checkout Pro.

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
> If you have a MercadoPagoV1 affiliation, we recommend that you [migrate to MercadoPagoV2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/mp1-mp2-migration). for security reasons.

To create a **payment gateway affiliation with MercadoPagoV2**, follow the steps below:

1. In the administration panel of your store, go to **Settings** within the **Payments** module.
2. In the **Gateway affiliations** tab, click on the "+" button.
3. Click on the **MercadoPagoV2** connector.
4. Complete the following fields: 
   * **Application Key:** This refers to your Mercado Pago [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials). Complete this with your Public Key.
   * **Application Token:** This refers to your Mercado Pago [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials). Complete this with your Access Token.
   * **Prazo para finalizar pedido (dias) - Plazo para finalizar el pedido (días)** Term, in business days, for the expiration of the ticket. If the customer pays after the deadline, the money will be deposited into their own Mercado Pago account.
   * **Nome da loja - Nombre de la tienda:** Name of the store. The value of this field will appear on the customer's card invoice.
   * **Número máximo de parcelas - Número máximo de cuotas/mensualidades sin interés:** Maximum number of installments available.
   * **Categoría principal da loja - Categoría principal de la tienda:** Store's category.
   * **Reembolso em vendas canceladas - Reembolso de las ventas anuladas** Select whether you want Mercado Pago to automatically reimburse in case of cancellation, or if you want to retain the amount paid for the customer to use in future purchases.
   * **Anti-fraude totalmente automático - Antifraude totalmente automático:** Configure whether the payment can go through manual review or not.
   * **Métodos de pagamento excluídos - Métodos de pago excluidos (formato: visa, paypal, etc.)** Payment methods to be excluded at the time of purchase. [Here are the options](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/payment-methods).
   * **Tipos de pagamento excluídos - Tipos de pago excluidos (formato: credti_card, bank_transfer etc.):** Payment types to be excluded at the time of purchase. [Here are the options](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/payment-methods).
   * **Modo de processamento - Modo de procesamiento:** Configure if the payment will be gateway of aggregator.
   * **Insira seu Integrator ID - Introduce tu Integrator ID:** Para programadores o agencias que realizan la integración.
   * **Selecione a moeda das vendas - Seleccione la moneda de venta:** Currency to be configured (USD or Local).
   * **Prazo de captura de pagamento aprovado -  Plazo de captura de pagos aprobado:** If you use a complementary third-party Anti-Fraud, you can set an automatic capture deadline for approved transactions, to avoid unnecessary cancellations.
5. Click on **Save**.

And that's it! Your affiliation with MercadoPagoV2 is already active!

> NOTE
>
> Note
> 
> If you have difficulties during your integration, check our [errors list](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/common-errors), and our document about [VTEX logs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/logs).

![Creating a MercadoPagoV2 gateway affiliation](/images/vtex/affiliationV2-en.gif)

> LEFT_BUTTON_RECOMMENDED_EN
>
> Gateway version migration
>
> Learn how to migrate from MercadoPagoV1 to MercadoPagoV2.
>
> [Gateway version migration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/mp1-mp2-migration)

> RIGHT_BUTTON_REQUIRED_EN
>
> Payment conditions
>
> Lean how to configure payment conditions.
>
> [Payment conditions](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/configure-payment-conditions)
