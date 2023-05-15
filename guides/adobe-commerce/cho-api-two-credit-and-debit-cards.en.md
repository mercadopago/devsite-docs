# Two credit and debit cards

----[mlb]----
To enable payment via 2 credit and debit cards in Checkout Transparente, follow these steps:

------------

----[mla, mpe, mco, mlm, mco, mlu, mlc]----
To enable payment via 2 credit and debit cards in Checkout API, follow these steps:

------------

1. In the store Control Panel, go to **Stores > Configuration > Sales > Payment methods**.
2. In the Mercado Pago plugin, click **Configure**.
3. Select the **Checkout Transparent** tab.
4. Click on **Two debit and credit cards** and complete the fields according to the following descriptions:

    1. In **Enabled**, choose between "Yes" or "No". This option defines whether the payment method will be available for use.
    2. In **Title**, define the title of how the payment method will be displayed on the store checkout.
    3. In **Enable vault**, select to allow the consumer to save or use the card in the future.
    4. In the **Payment Action** field, select between **Authorization for future capture** or **Authorization for immediate capture**. This setting will define how Mercado Pago will process the order, with "Authorization for immediate capture" being a flow that does not require any future action, in this scenario, the customer pays and Mercado Pago already withdraws the amount from the card balance. For the option "Authorization for future capture", Mercado Pago will only sensitize the value in the customer's balance and only after their manual action will the value be captured effectively.

![Two cards](/images/magento-two/dois_cartoes.png)

After filling in these fields, payment via card will have been enabled in Checkout Transparent. Click **Save Configuration** to save the changes made or, if you prefer, proceed to the next step and configure installment and interest for cards.


## Common payment method definitions

In this section, you can define some general characteristics of the Mercado Pago Checkout Pro. Fill in each of the requested fields according to their respective descriptions.

1. Under **Minimum order total**, set the minimum amount for an order to be processed. In this field, enter integer values. The payment method will only be displayed to the customer if the order value is equal to or greater than what you entered.
2. Under **Maximum order amount**, set a maximum value for the order to be processed. In this field, enter integer values. The payment method will only be displayed to the customer if the order value is equal to or less than what you entered.
3. Under **Payment From Specific Countries**, select the countries that can use this payment method. Only customers whose payment address is from one of the selected countries can see this payment method.
4. Under **Sort Order**, set an ascending order of display for this payment method in the checkout. The lower the number you enter, the lower the position will be among all the other payment methods. For example, if it is 1, any other payment method with a higher order will be displayed after it.
5. Click on **Save Configuration** to save your settings.


## Installment and interest

The installment and interest setting is made directly in your Mercado Pago account. To do so, follow the steps below.

1. Click on the **Set up installments and interest** button and log in to your Mercado Pago seller account.
2. Select the **QR Code and Online Payments** option, enable the installment and select the number of installments you want to offer at checkout. The options range from 1 to 12 times.

![Installment and interest](/images/magento-two/parcelamento.gif)

Done! After completing these steps, installment at checkout will be configured and ready to process sales.