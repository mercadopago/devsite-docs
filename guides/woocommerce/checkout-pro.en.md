# Configure payments Checkout Pro

When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.

At checkout, when buyers choose to pay with Mercado Pago, information is displayed that highlights the exclusive advantages of paying with a Mercado Pago account, such as:

----[mlb]----
* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster and in many ways**: use saved cards, Pix or available balance in the Mercado Pago account.
* **Purchase protection**: get your money back if the product is not delivered.

<center>

![woo-chopro-en-mlb](/images/woocomerce/woo-chopro-en-mlb.png)

</center>
------------

----[mla]----
* **Pay faster**: use saved cards or available balance in your Mercado Pago account.
* **Installment**: pay in installments with or without a credit card.
* **Mercado Pago support**: receive help if you have any problems with your purchase.

<center>

![woo-chopro-en-mla](/images/woocomerce/woo-chopro-en-mla.png)

</center>
------------

----[mlm]----
* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster and in different ways**: use saved cards, cash, offline means or available balance in your Mercado Pago account.
* **Purchase protection**: get your money back if the product is not delivered.

<center>

![woo-chopro-en-mlm](/images/woocomerce/woo-chopro-en-mlm.png)

</center>
------------

----[mpe, mco, mlu, mlc]----
* **Easy login**: login with the same e-mail and password as Mercado Libre.
* **Pay faster**: use cash or available balance in your Mercado Pago account.
* **Installment**: interest-free installments at selected banks.

<center>

![woo-chopro-en-all](/images/woocomerce/woo-chopro-en-all.png)

</center>
------------

## Configure the payment method

1. To activate the checkout, you must click on the slider button.
2. In the field **Title in the store checkout** you can choose the name with which this payment method will be displayed in the store. For example, you can name it **Mercado Pago**.
3. The option **Convert currency** allows the value of the currency configured in WooCommerce to be compatible with the value of the currency you use in Mercado Pago. If you want to activate it, you just have to click on the slider button.
4. In **Choose the payment methods accepted in the store** you can choose which payment methods you will accept in the store through Mercado Pago Checkout Pro. These might be:
----[mlb]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance or bank receipt)**.
    - **Bank transfer (Pix and PEC)**. The Pix payment option will only be shown if there is a Pix key registered in Mercado Pago.
    - Installments without a card: by setting up Checkout Pro, you can offer the option to pay up to 12 installments without a card. If you also want to show this option at the checkout of your store, click [here](/developers/en/docs/woocommerce/payments-configuration/mercado-credito).
------------
----[mla, mlm]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance)**.
    - **Wire transfer**.
    - Installments without a card: by setting up Checkout Pro, you can offer the option to pay up to 12 installments without a card. If you also want to show this option at the checkout of your store, click [here](/developers/en/docs/woocommerce/payments-configuration/mercado-credito).
------------
----[mpe, mco, mlu, mlc]----
    - **Debit and credit cards**.
    - Cash (Mercado Pago account balance).
    - Wire transfer.
------------
5. In the field **Maximum installments** you can choose how many installments you want to offer to customers through Mercado Pago. You can choose between 1 and 24 installments.

To save your changes to your settings, click the **Save Changes** button.

## Advanced configuration

If you wish, you can change the options in the advanced settings of the payment method to offer a more personalized experience in the store. To access these options, click on the heading **Advanced Settings** and the options described below will be displayed:

- **Payment experience**: this option allows you to choose whether the payment experience will be within the store or by redirecting customers to the Mercado Pago site.
- **Return to the store**: click on the slider button to choose if you want the customer to return to the store once the payment is complete or if you prefer that their shopping experience ends on the Mercado Pago site.
- **Success URL**: This field allows you to place a custom success URL where you can redirect customers once they complete their purchase.
- **Declined payment URL**: this option allows you to place a custom URL where you can redirect customers in case the payment has been refused.
- **Pending payment URL**: this field allows you to place a custom URL to which customers will be redirected if their payment is pending approval.
- **Automatic rejection of payments without instant approval**: activate this option with the slider button to automatically reject payments that are approved instantly.
- **Discount on Mercado Pago checkouts**: allows you to choose a discount percentage value that you want to offer to customers paying using this payment method. To activate it, you must enter a percentage and select the button _Activate and show this information at the Mercado Pago checkout_.
- **Commissions in Mercado Pago checkouts**: allows you to choose an additional percentage value that you want to charge as a commission to customers who choose this payment method. To activate it, you must enter a percentage and select the button _Activate and show this information at the Mercado Pago checkout_.

To save your changes to your settings, click the **Save Changes** button.

