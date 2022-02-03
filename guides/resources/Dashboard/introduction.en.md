# Dashboard

The [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel) is your integration management environment automatically created with an user ID for you when you open a Mercado Pago account. In it you can create, edit and delete applications.

The Dashboard is made up of different sections, each with a different purpose.

* **Header**: summary of your personal information as an integrator of Mercado Pago.
* **Your applications**: your applications.
* **Accounts you integrate**: information regarding third-party accounts that you have been given permission to use.
* **Your certifications**: information about your certifications in our certified developer program (&lt;dev&gt; program).





Each application has a set of credentials and the possibility to configure its notifications. Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) and [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks) for more information.

> WARNING 
> 
> Warning
> 
> If you are not a developer, we recommend that you integrate Mercado Pago to your store through [plugins and platforms](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins) and retrieve your credentials through your Mercado Pago account in [Your business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials). Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information.

## Create application

To create an application, follow the steps below:

1. Select "New application" or "Create your first application".
2. Name your application.
3. Choose a solution to be integrated.
4. Accept our Terms and Conditions.
5. Create the application by clicking on the button "Create application".

To every application created, a new card containing the application's name, description and ID is automatically created on the Developer Panel's homepage.

## Application details

By clicking on an application card, you will have access to its details, including:

- **My credentials** - Unique passwords with which we identify an integration in your account. The passwords are responsible for capturing payments in online stores and other applications. Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information.
- **Webhook notifications** - Notifications received via HTTP POST calls whenever there is a transaction-related event in your application. Read [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks) for more information.

## Edit application

After creating your application, you can click on the "Edit" button to see the advanced settings, which include your application data and the product to be integrated.

- **Your application data**. This section defines the basic application data and includes:
  - **Application name**.
  - **Application description**.
  - **Application permissions** - This field displays the access options for your application. By default, your application is created with all permissions enabled. You can disable permissions by clicking on their respective checkboxes.
  - **Redirect URL** - This field defines the URL where you want to receive the authorization code when your integration is configured as Marketplace or performed via OAuth.
- **Product to be integrated**. This section defines the product that should integrate with your application. The field "Available products" presents the list of available products to be integrated. By default, the value of this field is the value entered when creating the application, but you can change the chosen product without having to reconfigure the integration. This field works as an informational field for the product to which the application refers.

## Delete application

If you need to delete an application for any reason, click on "Delete" and confirm the action in the dialog box. 

>WARNING
>
>Warning
>
>Note that when you delete an app, your store will no longer receive payments through the integration associated with it, and all settings will be lost, including associated credentials. Once you delete an application, you cannot retrieve it.

## Accounts you integrate

You can integrate solutions for accounts other than your own. When integrating solutions for them, you can request access to their credentials to maintain data security. 

This section contains the credentials of these other accounts. To request access:

1. Click on the "Request credentials" button.
2. Fill in the account's email that you want to request the credentials for. 
3. Confirm request for credentials.

Once access to credentials is granted, you can use them to integrate solutions. When the integrations are complete, remove the access permissions for the requested credentials and take care of data security.

