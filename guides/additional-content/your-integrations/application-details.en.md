# Application details

To access the general data of your application, navigate to the [Developer Dashboard](/developers/panel/app) and click on the card of an application to access the **Application details**.

## Application quality

In this section, we will ensure that your application meets the quality and security requirements necessary to provide the best experience for both sellers and buyers with Mercado Pago.

### Evaluate quality

The score indicates how secure and aligned with Mercado Pago's integration best practices your application's configuration is.

By clicking on **Evaluate quality**, you will initiate the review process of your integration. During this assessment, it is essential to identify areas for improvement and make the necessary changes to your integration. This process involves reviewing a series of associated fields.

> WARNING
>
> Important
>
> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment. After implementing improvements, it is necessary to click again on **Update score** to reassess your integration and verify if it meets the required standards.

----[mla, mlm, mlu, mco, mlc, mpe]----
For now, the **Integration quality** section is only available for integrations with [**Checkout Pro**,](/developers/en/docs/checkout-pro/landing) [**Mercado Pago Point**,](/developers/en/docs/mp-point/landing) [**Checkout API**](/developers/en/docs/checkout-api/landing) and [**Checkout Bricks**](/developers/en/docs/checkout-bricks/landing).

------------
----[mlb]----
For now, the **Integration quality** section is only available for integrations with [**Checkout Pro**,](/developers/en/docs/checkout-pro/landing) [**Mercado Pago Point**,](/developers/en/docs/mp-point/landing) [**Checkout API**](/developers/en/docs/checkout-api/landing) and [**Checkout Bricks**.](/developers/en/docs/checkout-bricks/landing)

------------

## Application data

* **Application data**: This section displays the basic data of the application, including:
  - **User ID**: Automatically generated user identification number.
  - **Application number**: Automatically generated application identification number.
  - **Integration with**: The product or platform integrated with the application.
  - **Integration model** (if applicable): Integration model options are available depending on the used product or platform.

### Edit data

You can click on the **Edit data** button to view and edit the basic and advanced settings that include the data of your application and the product to be integrated. They are:

#### Basic settings

* **Logo**: JPG or PNG image format up to 1MB.
* **Application name**: To easily identify your applications (maximum of 50 characters).
* **Application short name**: secondary identifier of the application (this field cannot contain spaces or special characters).
* **Application description** (maximum of 150 characters).
* **Industry**: Choose the category that best describes your business.
* **Production website URL** (optional).
* **Payment Solution to be Integrated**: Edit the payment solution to be integrated between **Online Ppyments** and **In-person payments**.
  - **Online payments**: If you are going to use an e-commerce platform, mark **Yes**. Then, select the **platform** you will integrate with. Finally, choose the **product** you are integrating. If you are not using an e-commerce platform, mark **No** and select the **product** you are integrating. Optionally, you can select the integration model(s).
  - **In-person payments**: Select the **product** you are integrating. If you select the QR Code option, optionally you can also choose the integration model(s).

#### Advanced settings

* **Redirect URL**: URL (in https) where you want to receive the authorization code when your integration is set up as a marketplace or performed through OAuth. Check out [OAuth](/developers/en/docs/security/oauth/introduction) documentation for more details.
* **Enable PKCE verification**: If the integration is done with OAuth, you can enable PKCE (Proof Key for Code Exchange) to generate an additional secret code to be used during the authorization process.  Check out [PKCE](/developers/pt/guides/additional-content/security/oauth/pkce) documentation for more details.
* **Allow flow**: Select the types of authentication your application can use, limiting an application only to the flows necessary for its operation and minimizing potential attacks or vulnerability points. The options are: `client_credentials` ([application credentials](/developers/en/guides/additional-content/your-integrations/credentials)) and `authorization_code` ([OAuth authorization code](/developers/en/docs/security/oauth/introduction)). By default, applications will have both options enabled, and by enabling or disabling these options, you can control which authentication flows an application can use.
* **Application permissions**: Options for accessing your application, including **read**, **offline access** and **write**. By default, your application is created with all permissions enabled, but you can disable a permission by unchecking the corresponding checkbox.

### Delete application

To remove an application, follow these steps:

1. Access the "Edit Application" page.
2. Scroll to the bottom of the page and click on the **Delete Application** button.
This way, the application will be successfully deleted.

> WARNING
>
> Attention
>
> When deleting an application, please note that your store will lose the ability to receive payments through the integration associated with that application. Additionally, all settings, including associated credentials, will be lost. **Once an application is deleted, it cannot be recovered**.