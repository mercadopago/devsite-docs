# Create a MercadoPagoV2 gateway affiliation

A gateway affiliation is a set of configurations that represent the processing of your payments, in this case, with Mercado Pago. 

The **MercadoPagoV2 affiliation** will allow you to process payments with ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ and Checkout Pro, where you can offer credit and debit card payments, ----[mla, mlm, mlb]---- installments without a card ------------ or account money payments. 

> WARNING 
> 
> Important
> 
> The MercadoPagoV1 gateway affiliation will be discontinued. If you already have a MercadoPagoV1 gateway affiliation, you'll need to [migrate to MercadoPagoV2](/developers/en/docs/vtex/how-tos/migrate-v1-v2). 

To create a **MercadoPagoV2 gateway affiliation**, follow the steps below: 

1. In your VTEX store admin panel, go to **Payments>Settings**. 
2. At the top of the screen, go to the "Gateway affiliations" tab and click the "+" button to create a new affiliation. 
3. Look for the **MercadoPagoV2** connector and select it. This will take you to a new screen. 
4. On said screen, choose the **Affiliation Name** within the store. Also, make sure you have enabled the **Live/Production** slider button, even if you are using test accounts. 
5. Then, fill in the corresponding fields: 
  * **Application Key:** Refers to your [production credentials](/developers/en/docs/vtex/additional-content/your-integrations/credentials) of Mercado Pago. Complete with your Public Key. 
  * **Application Token:** Refers to your [credentials](/developers/en/docs/vtex/additional-content/your-integrations/credentials) of Mercado Pago. Complete with your Access Token. 
  * **Prazo de vencimento do boleto - Período de vencimiento del ticket:** Deadline, in business days, for the purchase order to expire. If the customer makes the payment after the deadline, the money will be deposited into their Mercado Pago account. 
  * **Nome da loja - Nombre para resúmenes:** Store name. The value of this field will appear on the customer's credit card statement. 
  * **Parcelamento máximo - Cuotas máximas:** Maximum number of installments available to make the payment. With Mercado Pago, you can offer payments up to 12 installments.
  * **Categoría principal da loja - Categoría principal de la tienda:** Store's line of business. 
  * **Compartilhamento da categoria (loja ou produto) por transação - Categoría (tienda o producto) compartida por transacción:** To assist our fraud prevention system, you have the option to share the store's or product's category data for each transaction. We recommend selecting the "Store category" option. 
  * **Reembolso automático / manual:** In case of cancellation, you can choose whether you want Mercado Pago to automatically refund the money or if you want to hold the paid amount so the customer can use it for future purchases in the same store. 
  * **Modo binário - binario:** Configure whether you want the store to accept pending payments. If you select the "No" option, the transaction will be pending for 48 hours or until the payment is made, and the inventory involved in that purchase will be held for the same period of time. If you select "Yes", pending transactions will be rejected and the inventory will be released automatically. 
  * **Métodos de pagamento excluídos - Métodos de pago excluído:** If you want to offer payments with Checkout Pro, you can exclude payment methods so they won't be available at the time of purchase. You'll need to enter the names of each one, as shown in the [Exlude payment types and methods section](/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Keep in mind that you are excluding specific payment methods (visa, ----[mlb]---- Pix, ------------ amex, among others). 
  * **Tipos de pagamento excluídos - Tipos de pago excluídos:** When integrating with Checkout Pro, you can also exclude complete payment types, such as credit card (`credit_card`), debit card (`debit_card`), and boleto (`ticket`). You can check the available options in the [Exclude payment types and methods](/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods) section. Make sure to enter the names exactly as listed to ensure proper exclusion. 

    > WARNING 
    > 
    > Important 
    > 
    > Please note that during the payment configuration process, you'll need to individually select the payment methods you want to offer. Excluding payment methods and types at this stage will limit these options only in the case of integrating with Checkout Pro. If you integrate with  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ , these settings will not have an impact. Be sure to carefully choose the desired payment methods during the setup process to ensure they are available for your customers. 

  * **Modo de processamento - Modo de procesamiento:** Select the **Aggregator** option. 
  * **Integrator ID:** If you are a developer, fill in with your Mercado Pago identification. 
  * **Moeda - Moneda:** Configure the store's currency (**USD** or **Local**). 
  * **Plazo de captura de pagamento aprobado - Plazo de captura de pagos aprobados:** this field identifies the merchant account. There's no need to fill it.
  * **Approved payment capture deadline:** You can configure a delay in VTEX's automatic capture of a payment by selecting from the drop-down options. If you don't want to configure it, select "desativado"/"desactivado".
  * **Tempo para cancelar carrito abandonado - Fecha para cancelar compras de un carrito abandonado:** Set a range of time in which the payment methods will no longer be available for the purchase. You can select a time range from the drop-down options, or choose "não cancelar”/"no cancelar".


After filling out all the fields, click on **Save** and you're done! Your affiliation with MercadoPagoV2 is now activated. 

> NOTE
>
> Note
> 
> If you encounter difficulties during your integration, please check our [list of errors](/developers/en/guides/vtex/additional-content/possible-errors) and our document on [VTEX logs](/developers/en/guides/vtex/how-tos/logs). 

![Creating a MercadoPagoV2 gateway affiliation](devsite-docs/images/vtex/vtex-admin-gateway-es.gif)