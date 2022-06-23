# Glossary

We know, some terms are technical and you may not be familiar with all of them. Use this glossary to not get lost!

| Name on the report column | What it means |
| --- | --- |
| EXTERNAL_REFERENCE | <br/> ID that helps identify the origin of the operation. For example, it can be the sale through the order ID or the shipment (if it is a cart purchase) or the own ID provided by the seller in case of an external integration. <br/><br/> Keep in mind that it is possible that this field is empty for some cases such as ticket payment or money transfer, among others. <br/> <br/> |
| SOURCE_ID | Operation ID in Mercado Pago (for example, the payment of a sale). |
| USER_ID | Seller account code (Cust ID). |
| PAYMENT_METHOD | Review the ----[mla]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_perú)  ------------ ----[mco]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [available payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_chile) ------------ according to the country with which you operate in Mercado Pago. |
| PAYMENT_METHOD_TYPE | Payment method type. <br><br> It can be: <br><br> *credit_card*: credit card.<br>*debit_card*: debit card.<br>*bank_transfer*: transfer.<br>*atm*: ATM. <br>*ticket*: cash.<br>*account_money*: account money. <br><br>|
| SITE | Country that the Mercado Pago account belongs to: <br><br> MLA: Argentina <br> MLB: Brasil <br> MLM: México <br> MLV: Venezuela <br> MLC: Chile <br> MCO: Colombia <br> MLU: Uruguay <br> MPE: Peru <br><br>|
| TRANSACTION_TYPE | Transaction type. <br><br>It can be:<br><br> *SETTLEMENT*: approved payment.<br> ----[mlu, mla, mlm, mco, mlc, mlb]---- *REFUND*: payment returned in whole or in part.------------ ----[mpe]---- *REFUND*: payment fully returned.------------ <br>*CHARGEBACK*: the buyer made a chargeback (unrecognized payment) on his credit card.<br>*DISPUTE*: the buyer initiated a claim for that payment. <br>*WITHDRAWAL*: withdrawal to a bank account.<br>*WITHDRAWAL_CANCEL*: canceled withdrawal to a bank account.<br>*PAYOUT*: money withdrawal available at Mercado Pago. ----[mlb]----  <br>*TRAVA_DE_RECEBIVEL*: block receivable. ------------ <br><br>|
| TRANSACTION_AMOUNT | Gross amount of the transaction. |
| TRANSACTION_CURRENCY | You can take some of these values as appropriate: <br><br> MXN (Mexican Peso) <br> CLP (Chilean Peso) <br> ARS (Argentine Peso) <br> BRL (Brazilian Real) <br> COP (Colombian Peso) <br> PEN (Peruvian Sun) <br> UYU (Uruguayan Peso) <br> VES (Venezuelan Bolivar) <br><br> |
| SELLER_AMOUNT | Amount received for split purchases. |
| TRANSACTION_DATE | Date of transaction accreditation. |
| FEE_AMOUNT | Sum of processing fees, shipments, financing and coupons if assumed by the seller. |
| SETTLEMENT_NET_AMOUNT | Net amount of the transaction that impacted the account balance. All commissions involved from `TRANSACTION_AMOUNT` were discounted. |
| SETTLEMENT_CURRENCY | You can take some of these values as appropriate: <br><br> MXN (Mexican Peso) <br> CLP (Chilean Peso) <br> ARS (Argentine Peso) <br> BRL (Brazilian Real) <br> COP (Colombian Peso) <br> PEN (Peruvian Sun) <br> UYU (Uruguayan Peso) <br> VES (Venezuelan Bolivar) <br><br> |
| SETTLEMENT_DATE | Date the transaction money was credited. |
| REAL_AMOUNT | Net amount of the transaction, if it is a settlement, the amounts for chargebacks, claims or returns are discounted. |
| COUPON_AMOUNT | Discount coupon amount. **Only the gross amount** (`TRANSACTION_AMOUNT`) **is discounted if provided by the seller**. |
| METADATA | ----[mlu, mla, mlm, mco, mlc, mlb]---- Extra data such as the ID of partial returns or data provided by the seller in case of having an external integration. ------------ ----[mpe]---- Extra data such as data provided by the seller in case of having an external integration. ------------ ----[mlb]---- Extra Text. ------------ |
| MKP_FEE_AMOUNT | Mercado Libre Fee. |
| FINANCING_FEE_AMOUNT | Cost for offering interest-free installments. |
| SHIPPING_FEE_AMOUNT | Shipping cost. |
| TAXES_AMOUNT | ----[mla]---- Tax collected for withholdings of Gross Income, VAT, Profits; and taxes on Credits and Debits, among others. [Learn more about withholdings and perceptions.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------  ----[mlm, mlc, mlu, mlb, mco, mpe]---- Taxes charged for gross income withholdings. ------------ |
| INSTALLMENTS | Number of installments in which the operation was carried out. |
| TAX_AMOUNT_TELCO | The value of the tax on telecommunications companies that is deducted from the gross value. |
| TAX_DETAIL | Description of the tax withheld by operation in `TAXES_AMOUNT`. ----[mla]---- <br><br>You can consider the following values depending on the jurisdiction: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ <br><br> |
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
| POI_ID | Point ID if payment is made through a physical retailer. |
| POI_WALLET_NAME | Name of the digital wallet that a virtual payment comes from. Allows you to identify the origin of a transaction when you charge with a Mercado Pago QR Code.|
| POI_BANK_NAME | Name of the bank that a virtual payment comes from. Allows you to identify the origin of a transaction when you charge with a Mercado Pago QR Code.|
| CARD_INITIAL_NUMBER | It corresponds to the first digits of the credit or debit card that you used to make the purchase. |
| OPERATION_TAGS | These are labels to categorize and/or segment different aspects of the transaction, such as the channels used to make a payment. They are identified as:<br>WHATSAPP_PAY: This label indicates that the payment was made via WhatsApp<br>QR: This label indicates that the payment was made with a QR code<br>PO: This label indicates that the payment was made with Point<br>MARKETPLACE: This label indicates that the payment was made directly in Mercado Libre. | ----[mla]---- 
| PAYER_NAME* | Name of who is making a payment or donation. | ------------ ----[mla]----
| PAYER_ID_TYPE* | Type of identification of who is making a payment or donation. | ------------ ----[mla]----
| PAYER_ID_NUMBER* | Identification number of who is making a payment or donation. | ------------

----[mla]----
> INFO
>
> (*) This information can only be used for reconciliation purposes, will be treated according to the applicable 
> personal data protection laws and will be available when payments via QR code or transfers are received, as well as
> when a donation is received by an NGO.
------------
