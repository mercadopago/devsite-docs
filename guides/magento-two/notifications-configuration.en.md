# Payment notifications configuration

To configure the order status for payment notifications, follow these steps:

1. Navigate to the menu Stores > Configuration > Sales > Payment Methods.

2. To configure the status of the payments, access the ** Mercado Pago - Global Configuration ** option and navigate to the "Order Status Options" option.
For each payment status, you can select an order status. Then, when your store receives a payment notification, the module will automatically update the order with the configured status.

3. To save the settings, click the **Save Config** button.

> NOTE
>
> Note
>
> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or the module.
> <br/>
> [Click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/introduction) for more information on the types of notifications integrated by Mercado Pago.

Ready! Notification status has been configured successfully.

## Notification email

Having selected **Checkout API** to receive payments from your store, it is important to configure the email notifications that will notify the user of their transactions. See below how to customize sending **transactional email** in Magento 2 management panel.

1. Go to **Marketing > Communications > Email Templates > Add New Template** menu and create the new email template.
2. In **Stores > Settings > Configuration > Sales > Sales Emails**, add the template created in the event settings on the platform (example: "payment approved").
3. Once the necessary settings have been made, install and configure a **SMTP server** of your choice to enable the e-mail notifications.
4. Send a **test email** to ensure the platform is sending emails correctly.

Ready! email notifications have been successfully configured.