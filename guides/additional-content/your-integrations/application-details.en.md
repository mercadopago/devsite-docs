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

* **Redirect URL**: URL (in https) where you want to receive the authorization code when your integration is set up as a marketplace or performed through the flow **Authorization code** by OAuth. **Make sure that is a static URL**. Check out [OAuth](/developers/en/docs/security/oauth/introduction) documentation for more details.
* **Use the authorization code flow with PKCE**: If the integration is done with the flow **Authorization code** by OAuth, you can enable PKCE (Proof Key for Code Exchange) to generate an additional secret code to be used during the authorization process.  Check out [Configure PKCE](/developers/en/docs/security/oauth/creation#:~:text=Access%20Token.-,Configure%20PKCE,-The%20PKCE%20) documentation for more details.
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

## Application quality measurement

The [quality measurement](/developers/en/docs/integration-quality) is the final stage of the integration process, where you can validate whether it meets the necessary quality and security requirements to provide the best experience for both sellers and buyers.

There are two ways to measure the quality of your integration:
 * **Manual:** you can conduct the measurement on your own whenever you prefer. You only need a `payment ID` from a payment made with production credentials and access **“Integration Quality"** in the side menu, where you can find the step-by-step instructions.

 * **Automatic:** From the 1st to the 7th of each month, Mercado Pago conducts a periodic quality measurement for all integrations with **Checkout Pro, Checkout ----[mla, mlm, mlu, mco, mlc, mpe]----API------------ ----[mlb]----Transparente------------, Checkout Bricks, and Mercado Pago Point** that have a payment made with production credentials.

> WARNING
>
> Important
>
> The only way to evaluate the quality of an integration with **QR Code** is by performing a manual measurement. Integrations with **Plugins and Platforms** cannot be evaluated.

As a result of this measurement, you will receive a score indicating how secure and aligned your application's configuration is with Mercado Pago's best integration practices, along with necessary recommendations for adjustments if needed.

For more details, refer to the documentation on [integration quality](/developers/en/guides/additional-content/homologator/homologator).

## Integration test

In this section, you have a step-by-step guide to test your integration, which will allow you to validate that you are meeting the necessary requirements based on the integrated product. 

In addition, you have direct links to the corresponding documentation, as well as a status bar that will allow you to view your progress easily.

![Validation screen for integration test](/images/dashboard/testing-validation-es.gif)