# Cards

With the [Checkout API](/developers/en/guides/checkout-api/landing), offer payments with **credit or debit cards** (available in the country where the store is installed) directly in your store, without the buyer needs to be redirected to make the payment.

To integrate the payment method, follow the steps below.

1. Go to the **Stores > Configuration > Sales > Payment Methods** menu.
2. To activate card payments, access the **Mercado Pago > Custom Checkout - Credit and Debit Card** section.
3. Select **Yes** to activate the Mercado Pago experience for card payments at your store checkout. By default, the card payment method is already activated.
4. If necessary, **change the title of the payment method** that will appear for the buyer.
5. In the **Statement Descriptor** field, enter the text that will identify the payment on the card statement. This feature is not available in all countries.
6. Enable **binary mode** to configure automatic decline of payments that are not instantly approved by banks or other acquirers. When enabled, this processing mode will only result in a payment status being `approved` or `rejected`. There will be no intermediate states like `in_proccess` or `pending`.
7. If you wish, you can customize a **banner** with the available payment methods by changing the URL of the image in question. By default, the Mercado Pago module will configure a banner with the available payment methods according to your country.
8. In **Checkout Position**, indicate the position in which the payment method will be available to the buyer in the checkout flow.
9. In the **Cards saved in Mercado Pago** field, indicate whether you want the buyer to have the option of saving their card information for future payments or using their balance on Mercado Pago to make payments. Customers pay faster and you increase conversion using this feature.
10. Click on **Set up installment and interest** to [set up in Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/costs-section#from-section=menu) the rate that will be paid in each purchase and also offer interest-free installments to your customers.
11. Then click** **Save Config** to save your preferences.