# Your applications
 
Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement, in order to have everything organized and maintain control that makes management easier.
 
Each application has a set of credentials and the possibility to configure its own notifications. Each card represents a created application and displays the **name**, the **description**, the **application ID** and a button that allows managing the application.
 
## Create new application
 
To create an application, follow the steps below:
 
1. Select "New application" or "Create your first application".
2. Name your application (limit of 50 characters).
3. Choose a solution to be integrated.
4. Accept our Terms and Conditions.
5. Create the application by clicking on the button "Create application".
 
For every application created, a new card containing the application's name, description and ID is automatically created on the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) homepage.
 
## Manage application
 
### Edit application
After creating your application, you can click on the "Edit" button to see the advanced settings, which include your application data and the product to be integrated.
 
* **Your application data**. This section defines the basic application data and includes:
 
  - Application name (limit of 50 characters).
  - Application description (limit of 150 characters).
  - Application permissions. This field displays the access options for your application, namely: read, offline access and write. By default, your application is created with all permissions enabled. You can disable permissions by clicking on their respective checkboxes.
  - Redirect URL. This field defines the URL (in https) where you want to receive the authorization code when your integration is configured as Marketplace or performed via OAuth. Check [OAuth](/developers/en/guides/additional-content/security/oauth/introduction) for more details.
  - Application blocking. If blocked, it will indicate the reason for the application being blocked for use. Click on **Block Details** to check the solution for the reported block.
  <br/>
* **Product to be integrated**. This section defines the product that should integrate with your application. The field "Available products" presents the list of available products to be integrated. By default, the value of this field is the value entered when creating the application, but you can change the chosen product without having to reconfigure the integration. This field works as an informational field for the product that the application refers to.
 
### Delete application
If you need to delete an application in your Dashboard, click on the 3 vertical dots on the application card, select the **Delete** option and confirm the action in the dialog box. 

> WARNING
>
> Attention
>
> Note that when you delete an app, your store will no longer receive payments through the integration associated with it, and all settings will be lost, including associated credentials. Once you delete an application, you cannot retrieve it.

### Application details
 
By clicking on an application card, you will have access to its details, including:
 
* **Application name and ID**. In this area you can select the application you want based on its ID. Simply click on the number displayed and select the desired ID.
* **My credentials**. Unique passwords with which we identify an integration in your account. The passwords are responsible for capturing payments in online stores and other applications. Check [Credentials](/developers/en/guides/additional-content/credentials/credentials) for more information.
* **Webhook notifications**. Notifications received via HTTP POST calls whenever there is a transaction-related event in your application. Check [Webhooks](/developers/en/guides/additional-content/notifications/webhooks/webhooks) for more information.
 
### Application ID
IDs are used to identify your applications and are created automatically whenever a new application is created.
 
### Credentials
The production and test credentials needed to access your application are presented. 

**Test credentials** check your integrations and can be used together with test users and test credit cards to simulate card receipts, while **Production Credentials** are used to receive payments.
 
By default, production credentials will be disabled until you enable them by clicking **Enable Credentials**, fill in your business information and accept our Terms and conditions.
 
> NOTE
>
> Important
>
> Obtain your credentials through your Mercado Pago account in **Your business > Settings > Management and Administration > Credentials**. Check [Credentials](/developers/en/guides/additional-content/credentials/credentials) for more information.
 
There is also the possibility to share the credentials with another Mercado Pago account, just click on **share my credentials** and fill in the email of the account that will receive the information.
 
### Webhook notifications
Configure the production and test URLs from which webhook notifications will be received and select the events that will be responsible for generating these notifications. Check [Webhooks](/developers/en/guides/additional-content/notifications/webhooks/webhooks) for more information.