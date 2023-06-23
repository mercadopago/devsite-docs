# Developer dashboard
In the [Developer dashboard](/developers/panel/app), you can find the listing of your applications.

Applications are different integrations contained within one or more stores. You can create an application for each solution you implement in order to keep everything organized and have better management control.

Each application has a set of credentials and the possibility to configure its own notifications. Each card represents a created application and displays the application name and number, along with a button that directs you to the **Application Details** where you can manage it.


## Create a new application
Create your application and obtain your credentials to integrate with Mercado Pago. Follow the steps below to create an application.

1. Click on **Your Integrations** in the top right corner of the screen.
2. Click on **Create application**.

> NOTE
>
> Important
>
> During the creation of your application, you may need to reauthenticate your identity. If you have already completed the verification process, you will be prompted to reauthenticate. If you have not yet completed the verification, you will be redirected to submit the necessary documents. 
>
> This additional authentication step is essential to protect your account and ensure compliance with operations. Follow the provided instructions to successfully create your application.

3. Enter a name to identify your application (limit of 50 characters).
4. Choose a payment solution to integrate, either **Online Payments** or **In-person Payments**.
  - **Online payments**: If you are going to use an e-commerce platform, mark **Yes**. Then, select the **platform** you will integrate with. Finally, choose the **product** you are integrating.

If you are not using an e-commerce platform, mark **No** and select the **product** you are integrating. Optionally, you can select the integration model(s).

   - **In-person Payments**: Select the **product** you are integrating. If you select the QR Code option, optionally you can also choose the integration model(s).
5. Check the checkbox to authorize the use of your personal data in accordance with the [Privacy Statement](https://www.mercadopago.com.br/privacidade) and certify that your account uses Mercado Pago tools in accordance with the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions).
6. Check the **I'm not a robot** checkbox.
7. Click on **Create application**.


With each created application, a new card containing the application name and number is automatically generated in the [Developer dashboard](/developers/panel/app).

## Accessing credentials for an application you don't manage
You can request access to application credentials from other people and integrate solutions for accounts other than your own. To securely request access to credentials for an application you don't manage, follow the steps below:
1. In the [Developer dashboard](/developers/panel/app), click on the **Request access to credentials** button.
2. Click on the "Request credentials" button.
3. Enter the email associated with the account for which the credentials are being requested.
4. Check the "I'm not a robot" checkbox.
5. Click on **Request credentials**.
Once access to the credentials is granted, you can use them to integrate solutions. After the integrations are completed, remove the access permissions for the shared credentials and ensure the security of the data.

> When requesting access to other credentials, you are asking other Mercado Pago accounts to share the public and private keys of their applications with you for integrations. Do not use the credentials of other accounts without proper consent.