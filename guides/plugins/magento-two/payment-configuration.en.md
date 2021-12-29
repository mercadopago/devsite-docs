# Configure the payment methods 

To configure the module and accept payments by credit card ----[mlb]----, Pix------------ and ticket in the Custom (Transparent), follow these steps:

## Configure your credentials

First, you must enter your credentials to enable the payment methods available in the country where the store is from.

1. Go to the menu Stores > Configuration > Sales > Payment Methods

2. For this step, we recommend that you have your [Credentials]([FAKER][CREDENTIALS][URL]). Then, access the option **Mercado Pago> Credentials**. There you will find the **Public key** and **Access token** fields, which you must complete with your credentials.

There are two types of credentials:

- **Sandbox Mode:** The credentials in this mode are used for testing.
- **Production Mode:** The credentials in this mode are used to receive payments in Production. To use the production mode credentials you must activate your credentials.
- Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials)

3. Once you've entered your credentials, click on the **Save Config** button located in the upper right corner. 

> It is important that you save your credentials before continuing, as this will enable the means of payment available for your country.

## Enable the payment methods

The next step is to enable the payment methods. To do that, you must navigate to the method you want to enable:

- To enable **credit card payments**, go to Checkout > Credit and Debit Card.
- To enable **ticket payments**, go to Custom Checkout > Offline Payment Methods (Ticket).
----[mlb]----
- To enable **Pix payments**, go to Custom Checkout > Pix.
------------

----[mlb]----
> WARNING
>
> Important
>
> Before setting up Pix as payment method, keep these steps in mind:<br><br>
> - [Verify the latest version](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) and update your Mercado Pago plugin.<br>
> - Register your key in Mercado Pago. If you don't, your customers won't be able to complete the purchase. Here we tell you [how to do it](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
> [Click here](https://www.mercadopago[FAKER][URL][DOMÍNIO]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-pix) to know more about payments with Pix in Transparent Checkout. 
------------

## Configure your Checkout for payments with credit and debit cards

The configuration of this payment method will offer the buyer the option to make payments with credit and debit cards available in the country the store was configured.
Here are the details of the different options that you will find to configure your Custom Checkout.

| Field | Description |
|---|---|
| Custom Checkout - Credit and Debit Cards | The configuration of this field will offer the buyer the option to make payments with a credit and debit card available in their country. By default, the card payment method is already activated. To deactivate it, just change the option **Enabled** from "Yes" to "No".  |
| Payment method title  | This option allows you to change the title of the payment method that will display for the buyer.  |
| Identification on the Credit Card Invoice | Text that will identify the payment in the card summary. This functionality is not available in all countries.  |
| Binario Mode  | When enabled, this processing mode will only result in the status of a payment as `approved` or `rejected`. There will be no intermediate states like `in_proccess` or `pending`.  |
| Banner Checkout | By default, the Mercado Pago module will configure a banner with the available methods according to their country. If you want you can customize it by changing the url of the image. |
| Payment method position | Allows you to change the position in which the payment method is available to the buyer in the checkout flow.  |
| Mercado Pago discount coupons | If you enable this option, a field will display in which the buyer can enter their discount coupon created in Mercado Pago. |

Then click "Save Config" to save your preferences.


## Configure the Custom Checkout for offline payment methods

The configuration of this payment method will offer the buyer the option to make payments with offline payment methods available in the country the store was configured.

Here are the details of the different options that you will find to configure your Custom Checkout:

| Field | Description |
|---|---|
| Custom Checkout - Payment Methods OFF (ticket) | The configuration of this field will offer the buyer the option to make payments with off payment methods available in their country. By default, the card payment method is already activated. To deactivate it, just change the option **Enabled** from "Yes" to "No".  |
| Payment method title  | This option allows you to change the title of the payment method that will display for the buyer.  |
| Banner Checkout | By default, the Mercado Pago module will configure a banner with the available methods according to their country. If you want you can customize it by changing the url of the image. |
| Exclude payment methods | By default, the module will show the buyer all the payment methods such as Ticket and ATM. You can select only the methods that you want to accept and leave those that you do not want to offer unselected. |
| Payment method position | Allows you to change the position in which the payment method is available to the buyer in the checkout flow.  |
| Mercado Pago discount coupons | If you enable this option, a field will display in which the buyer can enter their discount coupon created in Mercado Pago. |

Then click "Save Config" to save your preferences.

## Refunds and cancellations

**Refunds** are transactions carried out when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back the amount paid for the purchase of a certain product or service on their account or credit card statement.

**Cancellations** happen when a purchase is made but the payment has not yet been approved for some reason. In this case, considering that the transaction was not processed and the establishment did not receive any amount, the purchase is canceled and therefore, no charge takes place.

In the sections below you will find the necessary steps to accept returns and make cancellations in your store.

### Refunds

To accept payment refunds, you must activate the option in the configuration of your payment method by selecting the "Yes" option in the drop-down field.

By enabling this option, the module will make the partial or total refund of the payment in Mercado Pago when a credit memo is created in the order. The refund is only made on payments that have the status Approved.

> If the refund is made in the Mercado Pago panel, the module is not prepared to create a credit memo automatically. Due to this limitation, it is advisable that it is created from the store.

### Cancelations

To cancel payments made at your store, you must activate the option in the configuration of your payment method by selecting the "Yes" option in the drop-down field.

By enabling this option, the module will cancel the payment in Mercado Pago when the order is canceled.

The payment will be canceled when the status is `pending` or` in_process`, otherwise the module will return an error message.


> PREV_STEP_CARD_EN
>
> Plugin installation
>
> Follow the steps to install the plugin.
> 
> [Plugin installation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/magento-two/instalation)

> NEXT_STEP_CARD_EN
>
> Configure Checkout Pro
>
> Configure the module to accept payments with Checkout Pro.
>
> [Checkout Pro Configuration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/magento-two/checkout-pro-configuration)