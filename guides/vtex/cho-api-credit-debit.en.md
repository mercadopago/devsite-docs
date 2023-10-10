# Credit and Debit Cards 

When setting up ----[mla, mlu, mlc, mlm, mpe, mco]----Checkout API------------ ----[mlb]----Checkout Transparente------------ in VTEX stores, you can offer payments with debit and/or credit cards. 

To configure these payment methods, access the administration panel of your VTEX platform > **Payments > Configuration > Payment Plans**. Then, follow the steps below: 

1. Click on the "+ (Add new payment plan for...)" button. 
2. Within the **Debit Card** or **Credit Card** categories, you will find the different card brands that you can offer. Click on them and configure each one individually to enable them. You can get more information about this configuration in the [VTEX tutorials section](https://help.vtex.com/en/tutorial/payment-conditions--tutorials_455#interest-free-installments). 
3. After selecting the card brand you want to offer, fill in the fields displayed on the next screen: 
 * Enter the **Rule name**, which will allow you to identify this payment method. 
 * In **Affiliation process**, select **MercadoPagoV2**. 
 * Activate the payment condition in the **Status** field, using the sliding button. 
 * To enable installment payments, select the **Automatic** option. The financing option previously configured in the Mercado Pago seller's account will be offered. Refer to the "Installments and interest" section for more information. 

> NOTE 
>
> Note 
> 
> You can also configure **special payment conditions**. Click [here](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456?&utm_source=admin) for more information. 

4. Click **Save** to activate the configuration for this card, and if desired, repeat the process to configure other brands. 

![Configure payment conditions with credit card](/images/vtex/paymentconditions-cc-image-v2-en.gif) 


## Installments and Interest 

Currently, Mercado Pago only offers the option of interest-free installments within the VTEX platform. 

Similarly, you have the option to configure installment payments and interest directly from your Mercado Pago seller account. To do this, follow the steps described below. 

1. Click on the **Set Installments and Interest** button and log in to your Mercado Pago seller account. 
2. Select the **QR Code and online payments** option, enable installment payments, and select the number of installments you want to offer at checkout. The options range from 1 to 12 installments. 

![Installment and interest](/images/adobe-commerce/installment.gif) 

Once these steps are completed, installment payments in the checkout will be configured and ready to process sales.


> WARNING 
> 
> Important
> 
> Changes to payment conditions may take up to 10 minutes to be applied.