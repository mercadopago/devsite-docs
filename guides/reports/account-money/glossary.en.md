
# Glossary


We know, some terms are technical and you may not be familiar with all of them. Use this glossary to not get lost!

| Name on the report column  | What it means |
| ----------------------------------- |	--------------- |
| EXTERNAL_REFERENCE | <br/> ID that helps identify the origin of the operation. For example, it can be the sale through the order ID or the shipment (if it is a cart purchase) or the own ID provided by the seller in case of an external integration. <br/><br/> Keep in mind that it is possible that this field is empty for some cases such as ticket payment or money transfer, among others. <br/> <br/> |
| SOURCE_ID | Operation ID in Mercado Pago (for example, the payment of a sale). |
| USER_ID | Seller account code (Cust ID). |
| PAYMENT_METHOD | Review the ----[mla]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_perú)  ------------ ----[mco]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [available payment methods](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/#bookmark_chile) ------------ according to the country with which you operate in Mercado Pago. |
| PAYMENT_METHOD_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Payment method type. <br/><br/> It can be: <br/><ul><li>*credit_card*: credit card.</li><li>*debit_card*: debit card.</li><li>*bank_transfer*: transfer.</li><li>*atm*: ATM. </li><li>*ticket*: cash.</li><li>*account_money*: account money. </li></ul></td></tr></table> |
| SITE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Country to which the Mercado Pago account belongs: <br/><ul><li> MLA: Argentina </li><li> MLB: Brasil </li><li> MLM: México </li><li> MLV: Venezuela </li><li> MLC: Chile </li><li> MCO: Colombia </li><li> MLU: Uruguay </li><li> MPE: Peru </li></ul></td></tr></table> |
| TRANSACTION_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Transaction type. It can be:<br/><ul><li> *SETTLEMENT*: Approved payment. </li><li>  *REFUND*: Payment returned in whole or in part. </li><li> *CHARGEBACK*: The buyer made a chargeback (unrecognized payment) on his credit card. </li><li> *DISPUTE*: The buyer initiated a claim for that payment. </li><li> *WITHDRAWAL*: Withdrawal to a bank account. </li><li> *WITHDRAWAL_CANCEL*: Canceled withdrawal to a bank account. </li></ul></td></tr></table> |
| TRANSACTION_AMOUNT | Gross amount of the transaction. |
| TRANSACTION_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> You can take some of these values as appropriate: <br/><ul><li> MXN (Mexican Peso) </li><li> CLP (Chilean Peso) </li><li> ARS (Argentine Peso) </li><li> BRL (Brazilian Real) </li><li>COP (Colombian Peso) </li><li> PEN (Peruvian Sun) </li><li> UYU (Uruguayan Peso) </li><li> VES (Venezuelan Bolivar)
</li></ul></td></tr></table> |
| TRANSACTION_DATE | Date of transaction accreditation. |
| FEE_AMOUNT | Sum of processing fees, shipments, financing and coupons if assumed by the seller. |
| SETTLEMENT_NET_AMOUNT | Net amount of the transaction that impacted the account balance. All commissions involved from `TRANSACTION_AMOUNT` were discounted. |
| SETTLEMENT_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> You can take some of these values as appropriate: <br/><ul><li> MXN (Mexican Peso) </li><li> CLP (Chilean Peso) </li><li> ARS (Argentine Peso) </li><li> BRL (Brazilian Real) </li><li>COP (Colombian Peso) </li><li> PEN (Peruvian Sun) </li><li> UYU (Uruguayan Peso) </li><li> VES (Venezuelan Bolivar)
</li></ul></td></tr></table> |
| SETTLEMENT_DATE | Date the transaction money was credited. |
| REAL_AMOUNT | Net amount of the transaction, if it is a settlement, the amounts for chargebacks, claims or returns are discounted. |
| COUPON_AMOUNT | Discount coupon amount. **Only the gross amount** (`TRANSACTION_AMOUNT`) **is discounted if provided by the seller**. |
| METADATA | Extra data such as the ID of partial returns or data provided by the seller in case of having an external integration. |
| MKP_FEE_AMOUNT | Mercado Libre Fee. |
| FINANCING_FEE_AMOUNT | Cost for offering interest-free installments. |
| SHIPPING_FEE_AMOUNT | Shipping cost. |
| TAXES_AMOUNT | Taxes charged for gross income withholdings. |
| INSTALLMENTS | Number of installments in which the operation was carried out. |
| TAX_AMOUNT_TELCO | The value of the tax on telecommunications companies that is deducted from the gross value. |
| TAX_DETAIL | Description of the tax withheld by operation in TAXES_AMOUNT.  |
| POS_ID | Cash ID if the payment is made through a physical commerce. |
| POS_NAME | Cash name for the payment made through a physical commerce. |
| EXTERNAL_POS_ID |  User-defined cashier ID for payment made through a physical commerce. |
| STORE_ID | Branch ID if payment is made through a physical commerce. |
| STORE_NAME |  Branch name for payment made through a physical commerce. |
| EXTERNAL_STORE_ID | User-defined branch ID for payment made through a physical commerce. |
| ORDER_ID | Purchase Order. |
| SHIPPING_ID | Shipping Identification. |
| SHIPMENT_MODE | Shipping Mode. |
| PACK_ID | Package identification in the cart. |
| TAXES_DISAGGREGATED | Taxes disaggregated in JSON format. |

<hr/>

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> How to use the report
>
> Learn the composition of the report and how to read it.
>
> [How to use the report](https://www.mercadopago.com.ar/developers/en/guides/reports/account-money/how-to-use/)

> RIGHT_BUTTON_REQUIRED_EN
>
> Generate your reports
>
> Learn the ways to generate a report and follow the steps to set your preferences.
>
> [Generate your reports](https://www.mercadopago.com.ar/developers/en/guides/reports/account-money/generate/)
