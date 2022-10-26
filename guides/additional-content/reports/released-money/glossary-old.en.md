# Glossary

----[mlm, mla]----
> WARNING
>
> Important
>
> Learn the terms you need to analyze your report. Use this glossary to check the terms for the reports you generate with dates prior to October. For reports that include later dates, [please check this Glossary.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/subscriptions/additional-content/reports/released-money/report-fields)
------------

If you have any doubts about the technical terms used, check the glossary below.

| Name on the report column | What it means |
| --- | --- |
| DATE | Release, block or unlock date, as appropriate. |
| SOURCE_ID | Operation ID in Mercado Pago (for example, the payment of a sale). |
| EXTERNAL_REFERENCE | <br/> This information allows you to identify a transaction according to its origin. The code could be: <br/> - Order ID through the order or shipment (if it refers to a cart purchase). <br/> - Its own ID provided by the seller in case it is an external integration <br/>----[mla]---- - ID provided by Coelsa, institution that processes transfers to other account <br/><br/>------------ ----[mlc, mco, mlm, mlb]----<br/>------------This field may be empty for some cases, such as invoice payments, money transfers, among others. <br/><br/>|
| RECORD_TYPE | <br/> `initial_available_balance` → Money available from the previous period.<br/><br/> `block` → Money blocked by a complaint or chargeback. <br/><br/> `unblock` → Money released because a complaint or chargeback was resolved. <br/><br/> `release` → Money from a collection that was released. <br/><br/> `fullblock` → Money blocked by restriction. <br/><br/> `subtotal` → Sum of the amounts of each record type. <br/><br/> `total` → Total Net Amount. <br/><br/> `available_balance` → balance before and after a withdrawal or transfer, which explains the account balance.<br/><br/> |
| DESCRIPTION | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Possible values that the field can take: <br/><ul><li> For `block o unblock`: chargeback, dispute, shipping_return, credit_payment, reserve_for_payment, reserve_for_debt_payment, reserve_for_refund, reserve_for_bpp_shipping_return, reserve_for_cbk_cross_recovery, reserve_for_embargo_invested, restriction----[mlb]----, judgment_bacen, fraud ------------</li><li>For `release`: payment, withdrawal, refund, tax_payment_ibcf, tax_payment_ibcf_cancel, tax_payment_ibex, tax_payment_iibb, tax_payment_iibb_cancel, shipping, shipping_cancel, tax_withdholding, tax_withdholding_cancel, mediation,mediation_cancel, chargeback, fee_release_in_advance, asset_management_gain, asset_management_loss</li><li>For `fullblock`: restriction.</li><li>For `subtotal`: block, unblock o release.</li>----[mlm, mlb]----<li>For `available_balance`: the field will display the prefix "pre" or "pos" to indicate the balance before or after a withdrawal or transfer, as appropriate, followed by the type of transaction, in this case, a withdrawal or transfer (payout or withdrawal) and, finally, the identification number of the transaction or ID Source.<br/><br/>Prefix + transaction name + transaction number.  <br/><br/> Example: <br/> pre_payout_1948976543 <br/> pos_payout_1948976543 <br/><br/> pre_withdrawal_1945676549 <br/>  pos_withdrawal_1945676549 </li>------------ ----[mco, mlc, mpe, mlu, mla]----<li>For `available_balance`: the field will display the prefix "pre" or "pos" to indicate the balance before or after a withdrawal or transfer, as appropriate, followed by the type of transaction, in this case, a transfer (payout) and, finally, the identification number of the transaction or ID Source. <br/><br/>Prefix + transaction name + transaction number. <br/><br/> Example: pre_payout_ID source <br/><br/> pre_payout_1948976543 <br/>  pos_payout_1948976543 </li>------------</ul></td></tr><tr style="border:none;"><td style="border:none;">Definitions to consider: <br/><br/> `chargeback`:  appears when a chargeback associated with the referred payment is initiated or resolved. <br/><br/> `dispute`: appears when a mediation or complaint on the referred payment is initiated or resolved. It can occur before or after the payment has been released as available money and even withdrawn from the account. <br/><br/>`shipping_return`: appears when a payment made by express return is blocked or unlocked. <br/><br/>`payment`:  payment that is released in any of the channels in which the client operates. <br/><br/>`withdrawal`: withdrawal made from the available money. <br/><br/>`refund`: refund associated with the referred payment. <br/><br/>`tax_payment_ibcf`: perception of gross income in Federal Capital, it is calculated once a month according to the operations transacted. To reconcile by operation, see the detail in the [Invoice Reports in MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion).<br/><br/>`tax_payment_ibcf_cancel`: cancellation of the gross income tax in Federal Capital.<br/><br/>`tax_payment_ibex`: collection of gross income per subject exceeded by a simplified regime, it is calculated once a month according to the transactions traded. To reconcile by operation, see the detail in the [Invoice Reports in MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion). <br/><br/> `tax_payment_iibb`: collection of gross income in the province of Buenos Aires, it is calculated once a month according to the transactions transacted. To reconcile by operation, see the detail in the [Invoice Reports in MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion).<br/><br/> `tax_payment_iibb_cancel`: cancellation of the gross income tax. <br/><br/> `tax_payment_iibb_cre_[jurisdiction]`: Gross Income Tax - Mercado Crédito, in which `[jurisdiction]` is replaced by the name of the province where the tax is generated. <br/>Example 1: tax_payment_iibb_cre_misiones<br/>Example 2: tax_payment_iibb_cre_san_luis<br/> To reconcile by operation, see the detail in the [Invoice Reports in MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion).<br/><br/> `tax_iibb_[jurisdiction]`: Gross Income Tax, in which `[jurisdiction]` is replaced by the name of the province where the tax is generated. <br/>Example 1: tax_iibb_misiones<br/>Example 2: tax_iibb_san_luis<br/> To reconcile by operation, see the detail in the [Invoice Reports in MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion).<br/><br/> `tax_iva`: VAT - General Regime.`tax_iva_cre`: VAT - General Regime - Mercado Crédito.<br/><br/>`tax_credit_debit`: tax on Credits and Debits in force in Argentina as of August 1st, 2021 for legal entities. This tax applies to all transactions with third parties, deposits and cash withdrawals.[Learn more about this tax.](https://www.mercadopago.com.ar/ayuda/20783).<br/><br/>`tax_withdholding_cancel`: la cancelación de la retención tax_withdholding<br/><br/><br/><br/> `tax_withdholding`: the collection of withholdings that could not be transactionally executed to the associated payment. In Argentina they are only withholdings of Gross Revenue (perceptions are debited as another operation). In Uruguay they are VAT withholdings. In Colombia they are withholdings of VAT, ICA and Source as applicable. <br/><br/> `tax_withdholding_cancel`: the cancellation of the tax_withdholding retention. <br/><br/> `tax_withholding_payer`: tax on Credits and Debits on Payments.<br/><br/>`tax_withholding_collector`: tax on Credits and Debits on Payments.<br/><br/>`tax_withholding_payout`: tax on Credits and Debits on Withdrawals.<br/><br/>`tax_withholding_shipping`: tax on Credits and Debits on Money Transfers.<br/><br/> `shipping`: shipping commission for cart purchases that is not included in each cart payment. <br/><br/> `shipping_cancel`: cancellation of the shipping commission for cart purchases that is not included in each cart payment. <br/><br/> `mediation`: resolution of a mediation in favor of the buyer that ends up subtracting from the money available from the seller. <br/><br/> `mediation_cancel`: cancellation of mediation resolved in favor of the buyer. <br/><br/> `chargeback`: chargeback either for or against an operation. <br/><br/>`fee-release_in_advance`: advance fee. <br/><br/> `asset_management_gain`: positive return generated by the variation in the value of shares subscribed in the mutual fund.<br/><br/> `asset_management_loss`: negative return generated by the variation in the value of shares subscribed in the mutual fund.<br/><br/> `restriction`: occurs when you apply a restriction for fraudulent behavior. <br/><br/> `credit_payment`: appears when the fee for a loan granted is charged. <br/><br/> `payout`: money withdrawal available at Mercado Pago.<br/><br/> `reserve_for_embargo_invested`: blocking of your invested money. This value appears when there is a reserve of money in investment funds.<br/><br/> `reserve_for_bpp_shipping_return`: reserve for returns.<br/><br/> `reserve_for_debt_payment`: withheld for debt payment.<br/><br/> `reserve_for_refund`: withheld for approved returns.<br/><br/> `reserve_for_cbk_cross_recovery`: withheld for linked account chargeback.<br/><br/> `reserve_for_payment`: expenses pending confirmation. ----[mlb]---- <br/><br/>`judgment_bacen`: Central Bank court order. The money may be frozen in the account because of ongoing litigation. It may be associated with blocked amounts.<br/><br/> `fraud`: security patch.<br/><br/>`trava_de_recibibles`: block receivable. ------------</td></tr></table>|
| NET_DEBIT_AMOUNT | Accredited to the amount available. |
| NET_CREDIT_AMOUNT | Debited to the amount available. |
| SELLER_AMOUNT | Amount received for split purchases. |
| GROSS_AMOUNT | Gross operation amount. |
| METADATA | Extra data such as the ID of partial returns or data provided by the seller in case of having an external integration. ----[mlb]---- When "Fee discount" is shown it means the reduction in the selling fee for participating in a commercial campaign. ------------ |
| MP_FEE_AMOUNT | Commission Payment of Mercado Pago and/or Mercado Libre. ----[mla, mpe, mco, mlm, mlu, mlc]---- Includes VAT. ------------ |
| FINANCING_FEE_AMOUNT | Cost for offering interest-free installments. |
| SHIPPING_FEE_AMOUNT | Shipping cost. |
| TAXES_AMOUNT | ----[mla]---- Tax collected for withholdings of Gross Income, VAT, Profits; and taxes on Credits and Debits, among others. [Learn more about withholdings and perceptions.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber)------------  ----[mlm, mlc, mlu, mlb, mco, mpe]---- Taxes charged for gross income withholdings. ------------ |
| COUPON_AMOUNT | Discount coupon amount. Only the gross amount (`GROSS_AMOUNT`) is discounted if provided by the seller. |
| INSTALLMENTS | Number of installments in which the operation was carried out. |
| PAYMENT METHOD | [Payment methods available](/developers/en/docs/sales-processing/payment-methods) according to the country with which you operate in Mercado Pago. |
| TAX_DETAIL | <br/> Description of the tax withheld by operation in `TAXES_AMOUNT`. ----[mla]---- You can consider the following values depending on the jurisdiction: <br/>cordoba<br/>corrientes<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy ------------ ----[mco]---- You can consider the following values depending on the jurisdiction: <br/>fuente<br/>iva<br/>ica<br/>Tax 4x1000 (GMF)<br/>------------ <br/><br/> |
| TAX_AMOUNT_TELCO | It is the value of the tax on telecommunications companies that is deducted from the gross value. |
| TRANSACTION_APPROVAL_DATE | Date of approval of the operation. |
| POS_ID | Cash ID if the payment is made through a physical commerce. |
| POS_NAME | Cash name for the payment made through a physical commerce. |
| EXTERNAL_POS_ID | User-defined cashier ID for payment made through a physical commerce. |
| STORE_ID | Branch ID if payment is made through a physical commerce. |
| STORE_NAME | Branch name for payment made through a physical commerce. |
| EXTERNAL_STORE_ID | User-defined branch ID for payment made through a physical commerce. |
| ORDER_ID | Purchase Order. |
| SHIPPING_ID | Shipping Identification. |
| SHIPMENT_MODE | Shipping Mode. |
| PACK_ID | Package identification in the cart. |
| TAXES_DISAGGREGATED | Taxes disaggregated in JSON format. |
| EFFECTIVE_COUPON_AMOUNT | Cost for offering discount. |
| POI_ID | Point ID if payment is made through a physical retailer. |
| CARD_INITIAL_NUMBER | It corresponds to the first digits of the credit or debit card that you used to make the purchase. |
| OPERATION_TAGS | These are labels to categorize and/or segment different aspects of the transaction, such as the channels used to make a payment. They are identified as:<br>WHATSAPP_PAY: This label indicates that the payment was made via WhatsApp<br>QR: This label indicates that the payment was made with a QR code<br>PO: This label indicates that the payment was made with Point<br>MARKETPLACE: This label indicates that the payment was made directly in Mercado Libre. |
| ITEM_ID | Identifier of the product sold. | ----[mla]---- 
| PAYER_NAME* | Name of who is making a payment or donation. | ------------ ----[mla]----
| PAYER_ID_TYPE* | Type of identification of who is making a payment or donation. | ------------ ----[mla]----
| PAYER_ID_NUMBER* | Identification number of who is making a payment or donation. | ------------ ----[mla]----
| BUSINESS_UNIT | Corresponds to the channel through which an order was generated. The channels are Mercado Pago, Mercado Libre, Mercado Shops and Delivery.|
| SUB_UNIT | Allows you to identify the method that was used to collect the payment of an order with Mercado Pago.| ------------ ----[mco, mlc, mpe, mlu]----
| BALANCE_AMOUNT | This column shows the balance remaining in an account after a transaction that affects the total value is executed. |
> INFO
>
> (*) This information can only be used for reconciliation purposes, will be treated according to the applicable
> personal data protection laws and will be available when payments via QR code or transfers are received, as well as
> when a donation is received by an NGO.
------------

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> How to use this report
>
> Learn how the report is composed and how to analyze it to make your reconciliation. 
>
> [How to use this report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/how-to-use)

> RIGHT_BUTTON
>
> Generate your report
>
> Learn the ways to generate a report and follow the steps to set your preferences.
>
> [Generate your report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/generate)
