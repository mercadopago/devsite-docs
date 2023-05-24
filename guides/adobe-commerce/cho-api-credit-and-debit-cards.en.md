# Credit and debit cards

1. In the store Control Panel, go to **Stores > Configuration > Sales > Payment Methods**.
2. In the Mercado Pago plugin, click **Configure**.
3. Click on the **Checkout Transparent** tab and then click on **Credit and debit cards** and fill in the fields according to the descriptions below.
    1. In **Enabled**, choose between "Yes" or "No". This option sets whether the payment method will be available for use.
    2. In **Title**, set the title of how the payment method will be displayed on the store checkout.
    3. In **Enable vault**, select to allow the consumer to save or use the card in the future.
    4. In the **Payment Action** field, select between **Authorization for future capture** or **Authorization for immediate capture**. This setting will define the behavior of how Mercado Pago will process the order, with "Authorization for immediate capture" being a flow that requires no future action, in this scenario the customer pays and Mercado Pago already withdraws the amount from the card balance. For the option "Authorization for future capture" Mercado Pago will only sensitize the value in the customer's balance and only after their manual action will the value be captured in fact.
    5. In **Use Binary Mode**, select between **Yes, Processed Order Synchronous** or **No, Processed Order Asynchronous**. This field defines whether to accept only payments where the final status is received immediately.

![](/images/adobe-commerce/credito_e_debito.png)


----[mlb]----
## Capture of customer details in the payment form

This function allows capturing customer documents from an additional field in the payment form. If the store does not yet capture this information, simply select the **Enable** option in **Capture document identification**. 

Activating this feature automatically inserts the customer's CPF in the payment form, optimizing the data filling experience.


> WARNING
>
> Important
>
> Our module tries to capture the information of the `vat_id` field of your store, if it does not find it, we will overwrite your configuration as this is a mandatory value for payment.

------------

## Common payment method definitions

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Installment and interest

The installment and interest setting is made directly in your Mercado Pago account. To do so, follow the steps below.

1. Click on the **Set up installments and interest** button and log in to your Mercado Pago seller account.
2. Select the **QR Code and Online Payments** option, enable the installment and select the number of installments you want to offer at checkout. The options range from 1 to 12 times.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Done! After completing these steps, installment at checkout will be configured and ready to process sales.