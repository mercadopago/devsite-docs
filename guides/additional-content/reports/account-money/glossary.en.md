# Glossary

If you have any doubts about the technical terms used, check the glossary below.

| Name on the report column | What it means |
|---|---|
| Reference code (`EXTERNAL_REFERENCE`) |  ID that helps identify the origin of the transaction. For example, it can be the sale through the order ID or the shipment (if it is a cart purchase) or the ID itself provided by the seller in case of an external integration. <br><br> Please note that this field might be empty in some cases such as the invoice payment, money transfer etc. <br>  |
| Mercado Pago transaction ID (`SOURCE_ID`) | Transaction ID in Mercado Pago (e.g an order payment). ----[mla, mlb]---- This field contains alphanumeric values. ------------ |
| Seller account code (`USER_ID`) | Seller account code. (Cust ID). |
| Payment method (`PAYMENT_METHOD`) | Check the [available payment methods](/developers/en/docs/sales-processing/payment-methods) according to the country you operate with Mercado Pago. |
| Payment method type (`PAYMENT_METHOD_TYPE`) | Payment method type. It can be: <br><br> *credit_card*: credit card.<br>*debit_card*: debit card.<br>*bank_transfer*: transfer.<br>*atm*: ATM. <br>*ticket*: cash.<br>*account_money*: account money. <br> |
| Country of origin of the Mercado Pago account (`SITE`) | Country that the Mercado Pago account belongs to: <br><br> MLA: Argentina <br> MLB: Brasil <br> MLM: México <br> MLV: Venezuela <br> MLC: Chile <br> MCO: Colombia <br> MLU: Uruguay <br> MPE: Peru <br> |
| Transaction type (`TRANSACTION_TYPE`) | Transaction type. It can be:<br><br> Approved payment (*SETTLEMENT*): payment approved.<br> ----[mlu, mla, mlm, mco, mlc, mlb, mpe]---- Money refund (*REFUND*): partial or total refund. <br>Chargeback (*CHARGEBACK*): the buyer has a chargeback (did not recognize the payment) in their credit card.<br>Complaint (*DISPUTE*): the buyer initiated a complaint for this payment. <br>Bank account transfer (*WITHDRAWAL*): transfer to a bank account.<br>Cancelled bank account transfer (*WITHDRAWAL_CANCEL*): cancel of a transfer to a bank account.<br>Cash withdrawal (*PAYOUT*): cash withdrawal from the money available in Mercado Pago. ------------ ----[mlb]----  <br>Receivable block (*TRAVA_DE_RECEBIVEL*): receivable block. ------------ |
| Purchase amount (`TRANSACTION_AMOUNT`) | Transaction net amount. |
| Currency (`TRANSACTION_CURRENCY`) | Can assume some of these values as appropriate: <br><br> MXN (Peso Mexicano) <br> CLP (Peso Chileno) <br> ARS (Peso Argentino) <br> BRL (Real Brasilero) <br> COP (Peso Colombiano) <br> PEN (Sol Peruano) <br> UYU (Peso Uruguayo) <br> VES (Bolivar Venezolano) <br> |
| Amount received for split purchases (`SELLER_AMOUNT`) | Amount received for split purchases. |
| Date of origin (`TRANSACTION_DATE`) | Transaction creation date. |
| Fees ----[mlu, mla, mlm, mco, mlc, mpe]---- + VAT ------------ (`FEE_AMOUNT`) | Sum of the processing, shipping, installments and coupon fees if it was at seller's expense.  ----[mlu, mla, mlm, mco, mlc, mpe]----Includes VAT. ------------ |
| Net amount of the transaction that impacted your balance (`SETTLEMENT_NET_AMOUNT`) | Net amount of the transaction that impacted the balance. All fees involved were deducted from the purchase amount `TRANSACTION_AMOUNT`. | 
| Settlement currency (`SETTLEMENT_CURRENCY`) | Can assume some of these values as appropriate: <br><br> MXN (Peso Mexicano) <br> CLP (Peso Chileno) <br> ARS (Peso Argentino) <br> BRL (Real Brasilero) <br> COP (Peso Colombiano) <br> PEN (Sol Peruano) <br> UYU (Peso Uruguayo) <br> VES (Bolivar Venezolano) <br> |
| Approval date (`SETTLEMENT_DATE`) | Transaction approval date. |
| Transaction net amount (`REAL_AMOUNT`) | Net amount of the transaction, if it is a approved payment (settlement), the amounts regarding chargebacks, complaints or returns are discounted. |
| Discount coupon (`COUPON_AMOUNT`) | Amount of the discount coupon. **It is only deducted from gross amount or purchase amount** (`TRANSACTION_AMOUNT`) **if provided by the seller.** |
| Additional details (`METADATA`) | ----[mlu, mla, mlm, mco, mlc, mlb]---- Additional details such as the ID of the partial refunds or details provided by the seller in case they have an external integration. ------------ ----[mpe]---- Additional details such as the ID of the partial refunds or details provided by the seller in case they have an external integration. ------------ ----[mlb]---- When "Fee discount" is displayed, it is understood as a reduction in the selling fee due to the participating in a commercial campaign. ------------ |
| Mercado Libre feed ----[mlu, mla, mlm, mco, mlc, mpe]---- + VAT ------------ (`MKP_FEE_AMOUNT`) | Mercado Libre Fee.  ----[mlu, mla, mlm, mco, mlc, mpe]----Includes VAT. ------------ |
| Fee for offering interest-free installments (`FINANCING_FEE_AMOUNT`) | Fee for offering interest-free installments. |
| Shipping cost (`SHIPPING_FEE_AMOUNT`) | Shipping cost. |
| ----[mlu, mla, mlm, mco, mlc, mpe]----Taxes collected for IIBB withholdings (`TAXES_AMOUNT`)------------ ----[mlb]---- Taxes collected for withholdings (TAXES_AMOUNT)------------ | ----[mla]---- Tax collected for withholdings of Gross Income, VAT, Profits; and taxes on Credits and Debits, among others. [Check further details about withholdings.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------  ----[mlu]---- Impuestos cobrados por retenciones de IVA. ------------ ----[mlm, mlc, mlb, mpe]---- Taxes collected ------------ ----[mco]---- Taxes collected for withholdings of VAT, ITT and source according to what is applicable------------ |
| Installments (`INSTALLMENTS`) | Number of installments in which the transaction was carried out. |
| ----[mco, mlu]----`TAX_AMOUNT_TELCO` ------------ | ----[mco]---- Description of the taxes collected by operation in the `TAXES_AMOUNT`. It can be:<br><br> fuente<br>iva<br>ica<br><br> ------------ ----[mlu]---- The value of the tax on telecommunications companies that is deducted from the gross value. ------------ |
| Tax details (`TAX_DETAIL`) | ----[mla, mlu, mlm, mlc, mco, mpe]----Description of the tax withheld for transaction in the taxes collected by IIBB withholdings `TAXES_AMOUNT`.------------ ----[mlb]----Description of the tax withheld for transaction in the taxes `TAXES_AMOUNT`. ------------ ----[mla]---- <br><br> It can assume the following values according to the jurisdiction: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ |
| Cashier ID (`POS_ID`) | Cashier ID if the payment is made at a physical store. |
| Cashier name (`POS_NAME`) | Name of the cashier for the payment made at a physical store. |
| Cashier ID defined by the user (`EXTERNAL_POS_ID`) | Cashier ID defined by the user for the payment made at a physical store. |
| Store ID (`STORE_ID`) | Store ID if the payment is made at a physical store. |
| Store name (`STORE_NAME`) | Store name if the payment is made at a physical store. |
| Store ID defined by the user (`EXTERNAL_STORE_ID`) | Store ID defined by the user for the payment made at a physical store. |
| Order ID (`ORDER_ID`) | Purchase Order. |
| Shipping ID (`SHIPPING_ID`) | Shipping Identification. |
| Shipping method (`SHIPMENT_MODE`) | Shipping Method. |
| Package ID (`PACK_ID`) | Package ID in the cart. |
| Detailed taxes (`TAXES_DISAGGREGATED`) | Detailed taxes in the JSON format. |
| POS machine series number (S/N) (`POI_ID`) | POS machine ID if the payment is made at a physical store. |
| Digital Wallet (`POI_WALLET_NAME`) | Name of the digital wallet from which a digital payment is originated. It allows to identify the origin of a transaction when the payment is made with a ----[mla]----[interoperable QR code](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----Mercado Pago QR Code------------. |
| Bank of origin (`POI_BANK_NAME`) | Name of the bank institution from which a digital payment is originated. It allows to identify the origin of a transaction when the payment is made with a ----[mla]----[interoperable QR code](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----Mercado Pago QR Code------------. |
| Description (`DESCRIPTION`) | It helps identify the register of the transactions or operations in a period of time.<br> When its a payment in installments, it will be "INSTALLMENT". |
| Money release date (`MONEY_RELEASE_DATE`) | Date in which each installment payment will be realeased. |
| Buyer card (`CARD_INITIAL_NUMBER`) | Corresponds to the first digits of the credit or debit card used in a purchase. |
| Transaction labels (`OPERATION_TAGS`) | These are labels used to categorize and/or segment different aspects of the transaction, such as the channels used to make a payment. They are identified as:<br>Payment via WhatsApp (WHATSAPP_PAY): this label indicates that the payment was made through WhatsApp. ----[mlb]----<br>Pix Saque (CASHOUT): this label indicates that the transaction corresponds to a Pix Saque.<br>Purchase and cash withdrawal at a store (EXTRACASHOUT): this label indicates that the transaction corresponds to a Pix Troco. <br> Pix (PIX): this label indicates that the transaction corresponds to a Pix payment.------------ | ----[mlb]----
| Installment number (`INSTALLMENT_NUMBER`*) | It is the installment number that will be payed within the total installments number. <br> This information will be available only when the purchase is financed in installments.<br> For example: 2 / 5 indicates that the 2nd installment will be payed, from a total of 5 installments.<br> When the payment is liberated in only one installment, this field will be empty. | 
| Installment net amount (`INSTALLMENT_NET_AMOUNT`*) | It shows the net value of the installment to be payed.<br> This information will be available when the client chooses to pay in monthly installments. | ----------------[mla]---- 
| Payer name (PAYER_NAME\*) | Name of the person who makes a payment or a donation. |
| Payer ID type (PAYER_ID_TYPE\*) | Type of identification of the person who makes a payment or a donation. |
| Payer ID number (PAYER_ID_NUMBER\*) | Identification number of the person who makes a payment or a donation. |   ------------ 
| Sales channel (`BUSINESS_UNIT`) | Corresponds to the channel through which an order was generated. The channels are Mercado Pago, Mercado Libre, Mercado Shops and Delivery. |
| Payment platform (`SUB_UNIT`) | It allows to identify the method used to collect a payment with Mercado Pago. |
| Product SKU Code (`PRODUCT_SKU`) | SKU code with which you will be able to identify your sold products. |
| Sale detail (`SALE_DETAIL`) | This column offers detailed information on the items sold in each delivery, making it easier to reconcile and control your sales. | 

> NOTE
>
> Note
>
> (*) This information can only be used for reconciliation purposes, will be treated according to the applicable personal data protection laws and will be available when payments via QR code or transfers are received, as well as when a donation is received by an NGO.

