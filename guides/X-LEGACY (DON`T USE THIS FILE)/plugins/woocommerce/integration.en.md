# Integration setup

Currently, there are four types of checkout available for WooCommerce. If you want to configure all payment methods offered, you must do the processes individually. Otherwise, choose the one that best suits your business and configure it as follows:

1. Access the WordPress **Panel**.
2. Click on **Plugins > Installed Plugins**.
3. Search for **Mercado Pago payments for WooCommerce** and click on **Set up**.
4. Select **1 or more checkouts/payment options** you want to offer and click on **Manage** to open the plugin management screen.

On the plugin management screen, fill in the required fields according to your business information. Take into account the information in the sections below: 

## Country of operation

In the **In which country does your Mercado Pago account operate?** field, you must choose the country in which your Mercado Pago account operates. 

## Credentials activation

In the **Add credentials to "Test Mode" or "Production Mode"** section, you must fill in your **production** and **test** credentials.

The **Production credential** will enable the store to process actual sales at the end of the initial tests. It is through this credential that the activation is complete.

The **Test credential** will be necessary at first to carry out tests to ensure the correct functioning of the purchase and payment flow.

To activate the credentials, follow the steps below.

1. Scroll down to the **Credentials** section.
2. On **Add credentials to "Test Mode"or "Production Mode"**, choose **Activate Test Mode for Mercado Pago checkouts**. (By keeping this field enabled, your store will be in **test mode**, which allows you to test the plugin before setting the store to production).
3. Enter your **test** and **production** credentials in the required fields. If you don't have this information, access the [Credentials](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) documentation and follow the required steps. 
4. When finished filling in, click on **Save changes**.

Set up the business information as shown in the next section once you fill in the credentials. 

## Business information

Business information is required to identify your store. Fill in the fields as shown below.

1. **Store name:** Enter the name of your store.
2. **Store Category:** Enter the category of your store's products.
3. **Store ID:** Use a number or prefix to identify orders and payments from your store.
4. **Integrator ID:** Enter your **integrator_id** as a Mercado Pago **&lt;dev&gt;program** member. If you are not a member yet, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) for more information.

In **Advanced Settings**, you can configure options related to saving information to a file for debugging technical issues, as well as configuring [IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction).

## Payment experience

In addition to the settings above, you will find different options related to your store's payment experience, depending on the type of checkout you have chosen to configure. Check below the main features you can offer.

> NOTE
>
> Important
>
> Remember that the availability of the settings described below is related to the type of checkout selected.

1. **Activate checkout:** Select **Yes** to enable the experience of Mercado Pago on your store's checkout.
2. **Title:** Keep the default text or change it to your own. This text will be displayed at the checkout, along with the payment options.
3. **Payment methods:** Choose the payment methods you want to offer.
4. **Convert Currency:** Activate this option so that the currency value configured in WooCommerce matches the currency value you use in Mercado Pago.
5. **Max of installments:** Select the maximum installments you want to offer in your store.
6. **Payment experience:** Select between **Redirect** and **Modal**. In **Redirect**, customers will be redirected to a Mercado Pago page with the payment form to complete the purchase. In **Modal**, customers will have access to the Mercado Pago payment form without leaving your store.
7. **Return to the store:** Select whether or not you want the customer to automatically return to your store after completing the payment.
8. **Success URL / Payment URL rejected / Payment URL peding:** If you want to build a URL and customize the return page for the 3 statuses informed, just enter them in the requested field.
9. **Binary mode:** Activate when you don't want to leave payments in pending or review status. With binary mode, payments will be accepted or declined automatically.
10. **Discount coupons:** Select whether or not you want to offer discount coupons in your store.
11. **Reduce inventory:** Select **Yes** if you want the product to be taken out of stock during order creation, regardless of whether the payment is approved or not. Otherwise, keep **No** to have the product withdrawn from stock only when payment is approved. 
12. **Discounts per purchase with Mercado Pago:** Set a percentage discount amount for customers who pay with Mercado Pago.
13. **Commission for purchase with Mercado Pago:** Set an additional percentage amount that you want to charge as a fee to your customers for paying with Mercado Pago.
----[mlb]----
14. **Pix:** If you want to offer Pix payments, you need to activate **Custom Checkout** **- Pay with Pix** and follow the steps described on the screen to complete the integration. **(Brazil only)**
15. **Vencimento do Pix:** The validity period of the code sent to the customer after placing the order. This will be the period the customer will have to pay for the purchase. **(Brazil only)**
------------
16. **Payment with saved cards**: Allows customers to buy with their card details saved at Mercado Pago, without having to fill in card details at the store checkout.

----[mlb]----
> WARNING
>
> Important
>
> Before configuring Pix as a payment method, we recommend [downloading the latest version](https://br.wordpress.org/plugins/woocommerce-mercadopago/#description) of the Mercado Pago plugin for WooCommerce and [registering your Pix key](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required) in Mercado Pago.
------------

## Notification email

Having selected **Checkout API** to receive payments from your store, it is important to configure the email notifications that will notify the user of their transactions. See below how to customize  **transactional email** notifications in the WooCommerce management panel.

1. In **E-mails**, enable the notifications to be configured by selecting the option ˜activate this notification e-mail".
2. Customize the email template with: recipients, email subject and header.
3. Enter the **content** to be sent and select the e-mail type.
4. Also indicate the sender's name and email address, as well as your store's logo and colors.
5. Once the necessary settings have been made, install and configure a **SMTP server** of your choice to enable e-mail notifications.
6. Send a **test email** to ensure the platform is sending emails correctly.

Done! The Mercado Pago plugin with WooCommerce is now integrated with your store and can be tested by making purchases that will only be for the purpose of validating the plugin's operation but will not charge any value.

> NEXT_STEP_CARD_EN
>
> Purchase test
>
> Learn how to perform a test purchase and ensure the integration works.
>
> [Purchase test](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/testing)