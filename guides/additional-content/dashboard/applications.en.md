# Your applications
 
Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement, in order to have everything organized and maintain control that makes management easier.
 
Each application has a set of credentials and the possibility to configure its own notifications. Each card represents a created application and displays the **name**, the **description**, the **application ID** and a **button that allows managing the application**.

> By default the screen displays only 3 created applications. To view the other applications, click on **See all applications**.
 
## Create new application
 
To create an application, follow the steps below:
 
1. Select "Creat new application" or "Create your first application".
2. Name your application (limit of 50 characters).
3. Choose a solution to be integrated.
   * **Online payments**. If you are using an e-commerce platform, select the **platform** you are going to use to integrate. If not, select the **Mercado Pago product** being integrated.
   * **In person payments**. Select the **Mercado Pago product** being integrated.
4. Accept our Terms and Conditions.
5. Create the application by clicking on the button "Create application".
 
For every application created, a new card containing the application's name, description and ID is automatically created on the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) homepage.
 
## Manage application
 
### Edit application

After creating your application, you can click on the "Edit" button to see the advanced settings, which include your application data and the product to be integrated.
 
* **Your application data**. This section defines the basic application data and includes:
 
  - Application name (limit of 50 characters).
  - Payment solution to be integrated.
  - Application short name. Short name serves to personally identify the user who creates the application and will be displayed in the **measure the quality of your application** tool. Check out [Integration quality](/developers/en/guides/additional-content/homologator/homologator) for more information.
  - Application description (limit of 150 characters).
  - Application permissions. This field displays the access options for your application, namely: read, offline access and write. By default, your application is created with all permissions enabled. You can disable permissions by clicking on their respective checkboxes.
  - Redirect URL. This field defines the URL (in https) where you want to receive the authorization code when your integration is configured as Marketplace or performed via OAuth. Check [OAuth](/developers/en/docs/security/oauth/introduction) for more details.
  - Logo (400 x 400 pixels PNG format).
  - Application blocking. If blocked, it will indicate the reason for the application being blocked for use. Click on **Block Details** to check the solution for the reported block.
  <br/>
 
### Delete application

If you need to delete an application in your Dashboard, click on the 3 vertical dots on the application card, select the **Delete** option and confirm the action in the dialog box. 

> WARNING
>
> Attention
>
> Note that when you delete an app, your store will no longer receive payments through the integration associated with it, and all settings will be lost, including associated credentials. Once you delete an application, you cannot retrieve it.

### Application details
 
By clicking on an application card, you will have access to its details, including:

#### Application name

In this area, you can view the application name and, if necessary, edit the application data by clicking on the corresponding icon.
* **Integration**. Product or platform integrated with the application.

#### Application number

In this area you can check out the application ID.

#### Punctuation 

The score indicates how secure your application's configuration is and is in line with Mercado Pago's good integration practices.

#### Score details 

Access button to the tool where you can **measure the quality of your application**, where you can identify points of improvement in your integration and bring it up to Mercado Pago standards. Check out [Integration quality](/developers/en/guides/additional-content/homologator/homologator) for more information.

> WARNING
>
> Attention
>
> For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout API](/developers/en/docs/checkout-api/landing) and [Checkout Bricks.](/developers/en/docs/checkout-bricks/landing)

#### My credentials 

Unique passwords with which we identify an integration in your account. The passwords are responsible for capturing payments in online stores and other applications. 

The production and test credentials needed to access your application are presented. **Test credentials** check your integrations and can be used together with test users and test credit cards to simulate card receipts, while **Production Credentials** are used to receive payments.
 
By default, production credentials will be disabled until you enable them by clicking **Enable Credentials**, fill in your business information and accept our Terms and conditions.

> NOTE
>
> Important
>
> Obtain your credentials through your Mercado Pago account in **Your business > Settings > Management and Administration > Credentials**. Check [Credentials](/developers/en/guides/additional-content/credentials/credentials) for more information.
 
There is also the possibility to share the credentials with another Mercado Pago account, just click on **share my credentials** and fill in the email of the account that will receive the information.

#### Webhooks notifications

Notifications received via HTTP POST calls whenever there is a transaction-related event in your application. 
 
Configure the production and test URLs from which webhook notifications will be received and select the events that will be responsible for generating these notifications. Check [Webhooks](/developers/en/guides/additional-content/notifications/webhooks/webhooks) for more information.