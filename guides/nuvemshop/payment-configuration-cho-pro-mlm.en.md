# Configure payments with Checkout Pro (Checkout Mercado Pago)
 
When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.
 
To integrate Checkout Pro, follow the steps below.
 
1. In your store's Administrative Panel at Nuvemshop, access **Potencializar > My apps**.
2. Locate the Mercado Pago plugin in the list of applications and click on **Configure application**.
3. In the list of payment methods, locate the Mercado Pago plugin and click on **Edit**.
4. To apply a minimum amount of installments for payments, inform the amount in the available field.
----[mla, mlm, mpe, mco, mlu, mlc]----
5. If you want to apply discounts for payments with Checkout API, **enter the percentage** for payments in cash and cards (credit and debit).
------------
----[mlb]----
5. If you want to apply discounts for payments with Checkout API, **enter the percentage** for payments in boleto, credit card and Pix.
------------
6. If you want to apply discounts for payments with an external Checkout (Checkout Pro / Checkout Mercado Pago), **enter the percentage** in the available field.
7. To configure your store's payment experiences, click on **Edit on the Mercado Pago website**.
8. In Mercado Pago Checkout, choose the payment methods you want to offer in the Mercado Pago payment environment, which can be:
 ----[mlb]----
 * **Credit card**. Select the brands you want to enable in your store and also indicate the **maximum number of installments to be allowed for purchases in installments**. <br><br>
 * **Debit card**. Select the flags you want to enable in your store. <br><br>
 * **Other payment methods**. Select other types of payment methods you want to enable in your store, such as Pix, Cardless installments (if you want to display this option at your store checkout, click [here](/developers/en/docs/nuvemshop/payments-configuration/market-credit), bank slip (also indicate, in the field below, the **number of days for the slip to expire**), etc. The payment option with Pix will only be displayed if there is a Pix key registered in the Market Paid. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and see the step by step. 

 ------------
 ----[mla, mlm]----
 * **Credit card**. Select the brands you want to enable in your store and, just below, also indicate the **maximum number of installments to be allowed for purchases in installments**. <br><br>
 * **Debit card**. Select the flags you want to enable in your store. <br><br>
 * **Other payment methods**. Select other types of payment methods that you want to enable in your store, such as Installment without a card (if you want to display this option at your store's checkout, click [here](/developers/en/docs/nuvemshop/payments-configuration/mercado-credit), OXXO, Paycash, etc. Just below, also indicate the **number of days for the ticket to expire** of the means of payment that require it.

 ------------
6. Finally, click on **Save settings**.

Ready! Mercado Pago Checkout Pro is ready to receive payments from your store.