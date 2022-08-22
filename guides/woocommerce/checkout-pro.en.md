# Mercado Pago with Checkout Pro

With Checkout Pro, the buyer will be directed from the store to the Mercado Pago website, where they must complete the requested information and make the payment. In this way, the transaction is processed and completed outside of the store environment. It is not necessary for the buyer to have a Mercado Pago account and, at the end of the transaction, the buyer can be returned to the store.

## Configure the payment method

1. To activate the checkout, you must click on the slider button.
2. In the field **Title in the store checkout** you can choose the name with which this payment method will be displayed in the store. For example, you can name it **Mercado Pago**.
3. The option **Convert currency** allows the value of the currency configured in WooCommerce to be compatible with the value of the currency you use in Mercado Pago. If you want to activate it, you just have to click on the slider button.
4. In **Choose the payment methods accepted in the store** you can choose which payment methods you will accept in the store through Mercado Pago Checkout Pro. These might be:
----[mlb]----
    - Debit and credit cards.
    - Cash (Mercado Pago account balance or bank receipt).
    - Bank transfer (Pix and PEC). The Pix payment option will only be shown if there is a Pix key registered in Mercado Pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
    - Debit and credit cards.
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

