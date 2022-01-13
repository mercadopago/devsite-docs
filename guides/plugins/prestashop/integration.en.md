# Integration setup
 
To integrate with Mercado Pago, follow the procedures below.
 
1. On the Admin Panel of your Prestashop store, access the **Modules and Services** menu, find the Mercado Pago plugin and click on **configure**.
2. On the plugin management screen, fill in the required fields according to your business information.
3. In the `Location` field, select the country of operation of your Mercado Pago account.
4. In the **Credentials** section, confirm that the fields are properly filled in according to the [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) indicated in their [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/devpanel).  
5. Next, set up the necessary business information to identify your store.
 
* **Store Name:** enter your store name.
* **Store Category:** Enter your store's product category.
* **Integrator ID:** Enter your *integrator_id* as a member of the **&lt;dev&gt;program**, Mercado Pago. If you are not a member yet, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) for more information.
 
6. Finally, configure your store's payment experiences according to the type of checkout you've chosen to configure, which could be [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction), the [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction) and the **Ticket Checkout**.
 
* **Activate Checkout:** select **yes** to enable the Mercado Pago experience at your store's checkout.
* **Payment methods:** choose the payment methods you want to offer.
* **Max installments:** select the maximum installments you want to offer in your store.
* **Installment and interest:** [configure](https://www.mercadopago.com.br/costs-section#from-section=menu) the rate that will be paid on each purchase and also offer interest-free installments for your customers.
* **Return to the store:** select whether or not you want the customer to automatically return to your store after completing the payment.
* **Modal checkout:** define if customers will have access to the Mercado Pago payment form without leaving your store.
* **Binary mode:** enable when you don't want to leave payments in pending or review status. With binary mode, payments will be accepted or declined automatically.
* **Canceling payment preferences:** indicate the period in which the customer's payment preferences will be saved without the customer having to add them again.
* **Discount for buying with Mercado Pago:** set a percentage discount amount for customers who pay with Mercado Pago.
* **In-person payment methods:** select which payment methods will be offered for payments made via Ticket Checkout.
* **Payment due:** after selecting the means of payment in person, indicate how many days these will expire after they are issued.

> NOTE
>
> Important
>
> Remember that the availability of the settings described below depends on the type of checkout chosen.

7. Having selected the **Checkout Transparente** to receive payments from your store, it is important to configure the sending of emails that will notify the user of their transactions. See below how to customize the sending of the **transactional email** in the PrestaShop management panel.

* In the **Admin Panel** of your PrestaShop store, click on **International > Translation** and select the template you want to change.
* Once the necessary changes have been made, in **Shop Parameters > Order Settings > Statuses** you can define an email template for each order status.
* To configure the **SMTP server** and enable the sending of e-mails, access **Advanced Parameters > E-mails** and select the option "Set my own SMTP parameters (for advanced users ONLY)". Fill in the information of the server responsible for sending.
* Send a test email to ensure the platform is sending emails correctly.
 
Ready! Now the Mercado Pago plugin with PrestaShop is integrated into your store.
 
> NEXT_STEP_CARD_PT
>
> Payment test
>
> Find out how to carry out a test purchase and ensure the integration works.
>
> [Payment test](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/prestashop/testing)