# Configure payments with Checkout Pro (Checkout Mercado Pago)
 
When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.

At checkout, when buyers choose to pay with Mercado Pago, the displayed information highlights the exclusive advantages of paying with a Mercado Pago account, such as:

----[mlb]----

* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster and in many ways**: use saved cards, Pix or available balance in the Mercado Pago account.
* **Purchase protection**: get your money back if the product is not delivered.

<center>

![woo-chopro-en-mlb](/images/nuvemshop/nuvemshop-chopro-en-mlb.png)

</center>

------------

----[mla]----

* **Pay faster**: use saved cards or available balance in your Mercado Pago account.
* **Installment**: pay in installments with or without a credit card.
* **Mercado Pago support**: receive help if you have any problems with your purchase.

<center>

![woo-chopro-en-mla](/images/nuvemshop/nuvemshop-chopro-en-mla.png)

</center>

------------

----[mlm]----

* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster and in different ways**: use saved cards, cash, offline means or available balance in your Mercado Pago account.
* **Purchase protection**: get your money back if the product is not delivered.

<center>

![woo-chopro-en-mlm](/images/nuvemshop/nuvemshop-chopro-en-mlm.png)

</center>

------------

----[mpe, mco, mlu, mlc]----

* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster**: use cash or available balance in your Mercado Pago account.
* **Installment**: interest-free installments at selected banks.

<center>

![woo-chopro-en-all](/images/nuvemshop/nuvemshop-chopro-en-all.png)

</center>

------------
 
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
  * **Credit card**. Also indicate the maximum number of installments allowed.
  * **Debit card**.
  * **Other payment methods**. Also indicate the number of days for the invoice to expire. Furthermore, the Pix payment option will only be displayed if there is a Pix key registered with Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and see the step by step.

  ------------
----[mla, mlm, mpe, mco, mlu, mlc]----
  * **Credit card**.
  * **Debit card**.
  * **Other payment methods**. Also indicate the number of days for the invoice to expire.
   ------------
6. Finally, click on **Save settings**.

Ready! Mercado Pago Checkout Pro is ready to receive payments from your store.