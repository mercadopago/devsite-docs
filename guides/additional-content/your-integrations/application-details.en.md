# Application details

To access the general data of your application, navigate to the [Developer Dashboard](/developers/panel/app) and click on the card of an application to access the **Application details**.

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

* **Redirect URL**: URL (in https) where you want to receive the authorization code when your integration is set up as a marketplace or performed through the flow **Authorization code** by OAuth. Check out [OAuth](/developers/en/docs/security/oauth/introduction) documentation for more details.
* **Enable PKCE verification**: If the integration is done with the flow **Authorization code** by OAuth, you can enable PKCE (Proof Key for Code Exchange) to generate an additional secret code to be used during the authorization process.  Check out [Configure PKCE](/developers/en/docs/security/oauth/creation#:~:text=Access%20Token.-,Configure%20PKCE,-The%20PKCE%20) documentation for more details.
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

## Application quality

In this section, we will ensure that your application meets the quality and security requirements necessary to provide the best experience for both sellers and buyers with Mercado Pago. [Click here](/developers/en/guides/additional-content/homologator/homologator) and learn all the necessary information to know how to properly homologate your integration.

----[mla, mlm, mlu, mco, mlc, mpe]----

> WARNING
>
> Importante
>
> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment.
> <br><br>
> It is necessary that the application is registered with an integration of a product from those where the measuring tool is available. For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout API,](/developers/en/docs/checkout-api/landing) [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) and [Mercado Pago Point.](/developers/en/docs/mp-point/landing)

------------
----[mlb]----

> WARNING
>
> Importante
>
> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment.
> <br><br>
> It is necessary that the application is registered with an integration of a product from those where the measuring tool is available. For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout Transparente,](/developers/en/docs/checkout-api/landing) [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) and [Mercado Pago Point.](/developers/en/docs/mp-point/landing)

------------

### Evaluate quality

The score indicates how secure and aligned with Mercado Pago's integration best practices your application's configuration is.

By clicking on **Evaluate quality**, you will initiate the review process of your integration. During this assessment, our measurement tool will identify areas for improvement and guide you to make the necessary changes to your integration. This process involves reviewing a series of associated fields.

Access [Integration quality](/developers/en/docs/integration-quality) and learn all the necessary information to know how to measure the quality of your application.

> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment. 