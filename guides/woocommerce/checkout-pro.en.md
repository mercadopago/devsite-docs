# Checkout Pro

When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.

## Activate and configure payment method

1. To activate Checkout Pro, go to the settings in the WooCommerce panel (**WooCommerce > Mercado Pago**).
2. Click on **3. Activate and configure payment methods**.
3. In the option "Your saved cards or money in Mercado Pago", click on **Configure**.

![Activate and Configure](/images/woocomerce/cho-pro-active-configure-es.png)

4. The "Activate checkout" option allows you to enable or disable Checkout Pro on your store. To activate it, click on the switch.
5. In the **Title on the store checkout** field, enter the name by which this payment method will be identified in the store. For example, you can name it "Mercado Pago".

![Activate and Configure](/images/woocomerce/cho-pro-activate-title-es.png)

6. The **Convert currency** option allows the currency value configured in WooCommerce to be compatible with the currency value you use in Mercado Pago. To activate it, click on the switch.
7. In the **Choose the accepted payment methods in the store** section, choose which types and payment methods will be accepted in the store through Checkout Pro, which can be:
----[mlb]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance or bank receipt)**.
    - **Bank transfer (Pix and PEC)**. The Pix payment option will only be shown if there is a Pix key registered in Mercado Pago.
    - **Installments without a card**. By setting up Checkout Pro, you can offer the option to pay up to 12 installments without a card. If you also want to show this option at the checkout of your store, read the [documentation](/developers/en/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-convert-payments-methods-pt.png)

------------
----[mla]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance)**.
    - **Wire transfer**.
    - **Installments without a card**. By setting up Checkout Pro, you can offer the option to pay up to 12 installments without a card. If you also want to show this option at the checkout of your store, read the [documentation](/developers/en/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-es.gif)

------------
----[mlm]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance)**.
    - **Wire transfer**.
    - **Installments without a card**. By setting up Checkout Pro, you can offer the option to pay up to 12 installments without a card. If you also want to show this option at the checkout of your store, read the [documentation](/developers/en/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-es.gif)
    
------------
----[mpe, mco, mlu, mlc]----
    - **Debit and credit cards**.
    - **Cash (Mercado Pago account balance)**.
    - **Wire transfer**.

> To find out which types and payment methods are accepted in each country, access the [documentation](/developers/en/docs/sales-processing/payment-methods).

------------
8. In the **Maximum installments** field, select the maximum number of installments you want to offer to your customers through Mercado Pago. You can choose to offer between 1 and 24 installments.

![Installments](/images/woocomerce/cho-pro-installment-es.png)

To save the changes in the configuration, click on the **Save changes** button.

### Advanced settings

You can customize the options in the advanced settings section of the payment method, providing a more personalized experience in the store. To access these options, click on the **Advanced settings** title, and the following options will be displayed:

- **Payment experience**: Choose whether the payment experience will be within the store or redirecting customers to the Mercado Pago site.
- **Return to store**: Slide the button to choose whether you want the customer to return to the store once the payment is completed or if you prefer their shopping experience to end on the Mercado Pago site.
- **Success URL**: Enter a custom success URL to redirect customers once they have completed the purchase.
- **Rejected payment URL**: Enter a custom URL to redirect customers if the payment has been rejected.
- **Pending payment URL**: Enter a custom URL to redirect customers if the payment is pending approval.
- **Automatic rejection of payments without instant approval**: Activate this option to automatically reject payments that are not approved instantly. To activate it, slide the button.
- **Discount on Mercado Pago payments**: Enter a percentage discount for customers paying with this payment method. To activate it, enter a discount percentage and check the "Activate and show this information on the Mercado Pago checkout" option.
- **Commission on Mercado Pago payments**: Enter an additional percentage value you want to charge as a commission to customers choosing this payment method. To activate it, enter a discount percentage and check the "Activate and show this information on the Mercado Pago checkout" option.

![Advanced settings](/images/woocomerce/cho-pro-advanced-settings-es.gif)

To save the changes in the configuration, click on the **Save Changes** button.

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