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