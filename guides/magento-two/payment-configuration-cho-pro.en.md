# Checkout Pro
 
With [Checkout Pro](/developers/en/guides/checkout-pro/landing), the buyer will be directed from the store to the Mercado Pago website where he must fill in the requested information and make the payment. This way, the transaction is processed and completed outside your store environment. It is not necessary for the buyer to have a Mercado Pago account and, at the end of the transaction, the buyer can be returned to your store.
 
To integrate Checkout Pro, follow the steps below.
 
1. Go to the **Stores > Configuration > Sales > Payment Methods** menu.
2. To activate card payments, access the **Mercado Pago > Checkout Pro** section.
3. Select **Yes** to activate the Mercado Pago experience for card payments at your store checkout. By default, the card payment method is already activated.
4. If necessary, **change the title of the payment method** that will appear for the buyer.
5. In **Auto Return**, indicate if the buyer will automatically return to your store at the end of the approved payment.
6. In the **Exclude Payment Methods** field, leave the payment methods you wish to accept in your store unchecked. By default, the module will show the buyer all available payment methods for their country.
7. Set the **maximum number of installments** accepted in the credit card payment flow.
8. In the **Statement Descriptor** field, enter the text that will identify the payment on the card statement. This feature is not available in all countries.
9. Enable **binary mode** to configure automatic decline of payments that are not instantly approved by banks or other acquirers. When enabled, this processing mode will only result in a payment status being `approved` or `rejected`. There will be no intermediate states like `in_proccess` or `pending`.
10. You can customize a **banner** with the available payment methods by changing the URL of the image in question. By default, the Mercado Pago module will configure a banner with the available payment methods according to your country.
11. In **Checkout Position**, indicate the position in which the payment method will be available to the buyer in the checkout flow.
12. Click on **Set up installment and interest** to [set up in Mercado Pago](https://www.mercadopago.com.br/costs-section#from-section=menu) the rate that will be paid in each purchase and also offer interest-free installments to your customers.
13. Click **Save Config** to save your preferences.