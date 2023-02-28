# Configure payments Checkout Pro
 
When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.

At checkout, when buyers choose to pay with Mercado Pago, information is displayed that highlights the exclusive advantages of paying with a Mercado Pago account, such as:

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
 
. In the Administrative Panel of your store on Tiendanube, access **Settings > Payment Methods**.
2. Locate the Mercado Pago plugin in the list of payment methods and click on **Edit**.
3. Select your store's **country of operation** and **currency**.
4. In the "Type of integration" field, change it to **Purchase process on the Mercado Pago website**.
5. Choose the payment methods you want to offer in the Mercado Pago payment environment, which can be:
  ----[mlb]----
  * **Credit card**.
  * **Bank slip (or Mercado Pago account balance)**.
  * **Pix**. The Pix payment option will only be displayed if there is a Pix key registered with Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and see the step by step.
  ------------
----[mla, mlm, mpe, mco, mlu, mlc]----
  * **Credit card**.
  * **Bank transfer**.
  * **Cash payment networks**.
   ------------
6. Finally, click on **Save Changes**.

> Tiendanube uses **installment payment information directly from your Mercado Pago account**. Changes made to the installment settings in your account will be reflected in your online store within 24 hours. <br/></br>
> <br/></br>
> To **synchronize your installment changes manually**, go to your store's "Administrative Panel", access **Settings > Payment Methods > Mercado Pago**, click on **Edit** and, on the item " Installments", click on **Activate now**.

Ready! Mercado Pago Checkout Pro is ready to receive payments from your store.