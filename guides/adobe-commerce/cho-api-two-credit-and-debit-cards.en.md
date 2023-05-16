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

![Two cards](/images/adobe-commerce/dois_cartoes.png)

After filling in these fields, payment via card will have been enabled in Checkout Transparent. Click **Save Configuration** to save the changes made or, if you prefer, proceed to the next step and configure installment and interest for cards.


## Common payment method definitions

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Installment and interest

The installment and interest setting is made directly in your Mercado Pago account. To do so, follow the steps below.

1. Click on the **Set up installments and interest** button and log in to your Mercado Pago seller account.
2. Select the **QR Code and Online Payments** option, enable the installment and select the number of installments you want to offer at checkout. The options range from 1 to 12 times.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Done! After completing these steps, installment at checkout will be configured and ready to process sales.