# How to migrate the gateway affiliation version

If you already registered a MercadoPagoV1 gateway affiliation, you should be aware that it will be discontinued soon and **the migration to MercadoPagoV2 will be mandatory** to continue processing payments on VTEX stores.

MercadoPagoV2 will allow you to offer the same payment methods and also cash or financed payments without a card. You will also be able to activate **3DS (3-D Secure)**, a protocol created to protect transactions in online stores by adding an extra layer of identity verification before the final authorization, making your transactions even more secure and increasing the approval rate of your payments.

To perform the migration from MercadoPagoV1 to MercadoPagoV2, follow these steps: 

## 1. Register a MercadoPagoV2 gateway affiliation 

If you already have a MercadoPagoV1 gateway affiliation, you will now need to create a **new MercadoPagoV2 affiliation**. The process is simple and similar to the process you followed when setting up the previous connector. Please pay close attention to the following process and field descriptions:

1. In your VTEX store admin panel, go to **Payments > Settings**. 
2. At the top of the screen, go to the **"Gateway affiliations"** tab and click the "+" button to create a new affiliation. 
3. Look for the **MercadoPagoV2** connector and select it. This will take you to a new screen. 
4. On said screen, choose the **Affiliation Name** within the store. Also, make sure you have enabled the **"Live/Production"** slider button. 
5. Then, fill in the corresponding fields: 

| Field | Description |
|---|---|
| Application Key  | Refers to your [production credentials](/developers/en/docs/vtex/additional-content/your-integrations/credentials) of Mercado Pago. Complete with your **Public Key**.  |
| Application Token | Refers to your [credentials](/developers/en/docs/vtex/additional-content/your-integrations/credentials) of Mercado Pago. Complete with your **Access Token**.  |
| Prazo de vencimento do boleto - Período de vencimiento del ticket  | Deadline, in business days, for the purchase order to expire. If the customer makes the payment after the deadline, the money will be deposited into their Mercado Pago account.  |
| Nome da loja - Nombre para resúmenes:  | Store name. The value of this field will appear on the customer's credit card statement.  |
| Parcelamento máximo - Cuotas máximas  | Maximum number of installments available to make the payment. With Mercado Pago, you can offer payments up to 12 installments. |
| Suporte 3DS 2.0 - Soporte 3DS 2.0 | 3-D Secure is a protocol created to protect transactions in e-commerce by adding an extra layer of identity verification before the final authorization. Only transactions rejected as High Risk are sent for 3-D Secure validation, which does not affect the shopping experience.<br>To activate it, **disable the Modo binário - binario** and choose the option **Yes**. <br>Make sure you have Mercado Pago Payment App installed so 3DS can work correctly. |
| Categoría principal da loja - Categoría principal de la tienda  | Store's line of business |
| Compartilhamento da categoría (loja ou produto) por transação - Categoría (tienda o producto) compartida por transacción | To assist our fraud prevention system, you have the option to share the store's or product's category data for each transaction. We recommend selecting the **"categoría da loja - categoría de tienda"** option.  |
| Reembolso automático / manual  | In case of cancellation, you can choose whether you want Mercado Pago to automatically refund the money or if you want to hold the paid amount so the customer can use it for future purchases in the same store.  |
| Modo binário - binario | Configure whether you want the store to accept pending payments. If you select the **"No"** option, the transaction will be pending for 48 hours or until the payment is made, and the inventory involved in that purchase will be held for the same period of time. If you select **"Yes"**, pending transactions will be rejected and the inventory will be released automatically.<br>**Important:** to use 3DS correctly, Modo binário-binario must be deactivated. |
| Métodos de pagamento excluídos - Métodos de pago excluídos  | If you want to offer payments with Checkout Pro, you can exclude payment methods so they won't be available at the time of purchase. You'll need to enter the names of each one, as shown in the [Exclude Payment Types and Methods](/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Keep in mind that you are excluding specific payment methods (visa, Pix, amex, etc.) documentation. <br>Please note that during the payment setup process, you'll need to individually select the payment methods you want to offer. Excluding payment methods and types at this stage will limit these options only in the case of integrating with Checkout Pro. If you integrate with  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ , these settings will not have an impact. |
| Tipos de pagamento excluídos - Tipos de pago excluidos  | When integrating with Checkout Pro, you can also exclude complete payment types, such as credit card (credit_card), debit card (debit_card), and boleto (ticket). You can check the available options in the [Exclude Payment Types and Methods](/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods) section. Make sure to enter the names exactly as listed to ensure proper exclusion. <br>Please note that during the payment setup process, you'll need to individually select the payment methods you want to offer. Excluding payment methods and types at this stage will limit these options only in the case of integrating with Checkout Pro. If you integrate with  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ , these settings will not have an impact. |
| Modo de processamento - Modo de procesamiento  | Select the **Aggregator** option. |
| Integrator ID |  If you are a developer, fill in with your **Mercado Pago identification**.  |
| Moeda - Moneda |  ----[mlu]---- Configure the store's currency (**USD** or **Local**). ------------ ----[mla, mlm, mlb, mco, mpe, mlc]---- This field identifies the store's currency. You don’t need to fill it. ------------ |
| Merchant Account | This field identifies the merchant account. You don’t need to fill it. |
| Plazo de captura de pagamento aprobado - Plazo de captura de pagos aprobado | You can configure a delay in VTEX's automatic capture of a payment by selecting from the drop-down options. If you don't want to configure it, select **"desativado"/"desactivado"**. |
| Tempo para cancelar carrito abandonado - Fecha para cancelar compras de un carrito abandonado | Set a range of time in which the payment methods will no longer be available for the purchase. You can select a time range from the drop-down options, or choose **"não cancelar”/"no cancelar"**. |

6. Click on **Save**, and you are done! Your MercadoPagoV2 gateway affiliation is set.

![Configure MercadoPagoV2](/images/vtex/vtex-v2-new-admin-es.gif) 

## 2. Configure Payment Methods

If you have already set up your payment methods with the MercadoPagoV1 affiliation, you will need to **migrate to MercadoPagoV2 for each of the available payment methods**. 

The V2 connector will allow you to offer the same payment methods, and also add new options such as ----[mco]----PSE or------------ ----[mla, mlb, mlm]----installments without a card or------------ payments using available money from Mercado Pago account. 

To change the configuration of your payment methods, follow the steps below:

1. Access the administration panel of your VTEX platform > **Payments > Configuration**.
2. On the upper panel, select  the **Payment plans** option, and choose the payment method you wish to configure.
3. On **Affiliation process**, change from MercadoPagoV1 to **MercadoPagoV2**.
4. Repeat the process with all the payment methods you have already made available on your platform.

![Configure v2 in payment methods](/images/vtex/migration-payment-conditions.gif) 

Upon completing the process, you will have your new MercadoPagoV2 gateway affiliation configured and you will be able to continue operating with Mercado Pago, benefiting from the new advantages that this connector offers.