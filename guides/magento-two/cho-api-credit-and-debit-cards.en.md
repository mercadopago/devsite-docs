# Credit and debit cards

1. In the store Control Panel, go to **Stores > Configuration > Sales > Payment Methods**.
2. In the Mercado Pago plugin, click **Configure**.
3. Click on the **Checkout Transparent** tab and then click on **Credit and debit cards** and fill in the fields according to the descriptions below.
    1. In **Enabled**, choose between "Yes" or "No". This option sets whether the payment method will be available for use.
    2. In **Title**, set the title of how the payment method will be displayed on the store checkout.
    3. In **Enable vault**, select to allow the consumer to save or use the card in the future.
    4. In the **Payment Action** field, select between **Authorization for future capture** or **Authorization for immediate capture**. This setting will define the behavior of how Mercado Pago will process the order, with "Authorization for immediate capture" being a flow that requires no future action, in this scenario the customer pays and Mercado Pago already withdraws the amount from the card balance. For the option "Authorization for future capture" Mercado Pago will only sensitize the value in the customer's balance and only after their manual action will the value be captured in fact.
    5. In **Use Binary Mode**, select between **Yes, Processed Order Synchronous** or **No, Processed Order Asynchronous**. This field defines whether to accept only payments where the final status is received immediately.

![](/images/magento-two/credito_e_debito.png)


----[mlb]----


------------


## Common payment method definitions

In this section, you can define some general characteristics of the platform for using the Checkout. Fill in each of the requested fields according to their respective descriptions.

1. In the **Minimum order total** option, set the minimum value for an order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or greater than what you inform.
2. In **Maximum order amount**, set a maximum value for the order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or less than what you inform.
3. In **Payment From Specific Countries**, select the countries that can use this payment method. Only consumers whose payment address is from one of the countries you selected can see this payment method.
4. In the **Sort Order** option, set an ascending order of display for this payment method on the checkout. The lower the number you enter, the lower the position of this payment method among all others. For example, if it is 1, any other payment method with a higher order will be displayed after it.

----[mlb]----
After completing these fields, payment by card will have been enabled in the Checkout Transparente. Click **Save Configuration** to save the changes made or, if you prefer, go to the next step and configure installment and interest for cards.

------------

----[mla, mpe, mco, mlm, mco, mlu, mlc]----
After completing these fields, payment by card will have been enabled in the Checkout API. Click **Save Configuration** to save the changes made or, if you prefer, go to the next step and configure installment and interest for cards.

------------


## Installment and interest

The installment and interest setting is made directly in your Mercado Pago account. To do so, follow the steps below.

1. Click on the **Set up installments and interest** button and log in to your Mercado Pago seller account.
2. Select the **QR Code and Online Payments** option, enable the installment and select the number of installments you want to offer at checkout. The options range from 1 to 12 times.

![Installment and interest](/images/magento-two/parcelamento.gif)

Done! After completing these steps, installment at checkout will be configured and ready to process sales.