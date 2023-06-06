# Application details

To access the general data of your application, navigate to the [Developer Dashboard](/developers/panel/app) and click on the card of an application to access the **Application details**.

## Application quality

In this section, we will ensure that your application meets the quality and security requirements necessary to provide the best experience for both sellers and buyers with Mercado Pago.


### Update score

The score indicates how secure and aligned with Mercado Pago's integration best practices your application's configuration is.

Click on **Update score** to start the process of analyzing your integration. Review the improvement points identified during the analysis and make the necessary changes to your integration. In this process, a series of associated fields will be analyzed.

> After making the improvements, click on **Update score** again to reassess your integration and verify if it meets the required standards.

----[mla, mlm, mlu, mco, mlc, mpe]----
> WARNING
>
> Attention
>
> For now, the **Integration quality** section is only available for integrations with [Checkout Pro](/developers/en/docs/checkout-pro/landing), [Mercado Pago Point](/developers/en/docs/mp-point/landing), [Checkout API](/developers/en/docs/checkout-api/landing), and [Checkout Bricks](/developers/en/docs/checkout-bricks/landing).


------------
----[mlb]----
> WARNING
>
> Attention
>
> For now, the **Integration quality** section is only available for integrations with [Checkout Pro](/developers/en/docs/checkout-pro/landing), [Mercado Pago Point](/developers/en/docs/mp-point/landing), [Transparent Checkout](/developers/en/docs/checkout-api/landing), and [Checkout Bricks](/developers/en/docs/checkout-bricks/landing).


------------

## Application data
* **Application data**: This section displays the basic data of the application, including:
  - **User ID**: Automatically generated user identification number.
  - **Application number**: Automatically generated application identification number.
  - **Integration with**: The product or platform integrated with the application.
  - **Integration model** (if applicable): Integration model options are available depending on the used product or platform.

### Edit data
You can click on the **Edit data** button to view and edit the advanced settings that include the data of your application and the product to be integrated. They are:
* **Logo**: JPG or PNG image format up to 1MB.
* **Application name**: To easily identify your applications (maximum of 50 characters).
* **Application short name**: For personal identification of the application's creator.
* **Application description** (maximum of 150 characters).
* **Industry**: Choose the category that best describes your business.
* **Production website URL** (optional).
* **Payment Solution to be Integrated**: Edit the payment solution to be integrated between **Online Payments** and **In-person payments**.
* **Online payments**: If you are going to use an e-commerce platform, mark **Yes**. Then, select the **platform** you will integrate with. Finally, choose the **product** you are integrating.

If you are not using an e-commerce platform, mark **No** and select the **product** you are integrating. Optionally, you can select the integration model(s).

* **In-person payments**: Select the **product** you are integrating. If you select the QR Code option, optionally you can also choose the integration model(s).
* **Redirect URL**: URL (in https) where you want to receive the authorization code when your integration is set up as a marketplace or performed through OAuth. See [OAuth](/developers/en/docs/security/oauth/introduction) for more details.
* **Application permissions**: Options for accessing your application, including read, offline access, and write. By default, your application is created with all permissions enabled, but you can disable a permission by unchecking the corresponding checkbox.
</br>

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