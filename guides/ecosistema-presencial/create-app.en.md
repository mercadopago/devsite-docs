# Create an app in Your Integrations

In order to create an app in Your Integrations, follow the steps below.

1. Access the [Developer Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/e). Once there, click on the **Your Integrations** button, located in the upper right corner, and then on **Create application**.

    > NOTE
    >
    > Important
    >
    > During the creation of your application, you may need to reauthenticate your identity. If you have already completed the verification process, you will be asked to reauthenticate. If you have not done so yet, you will be redirected to submit the necessary documents. This additional authentication step is essential to protect your account and ensure compliance with operations. Follow the provided instructions to successfully create your application.

2. Enter a name to identify your application (you have a limit of 50 characters).
3. Choose the **On-site payments** solution.
4. When choosing the product to integrate, you can select "QR Code" or "Point from MercadoPago". The result will be the same regardless of your choice.
5. Once you have completed the requested information, click on **Create application**, and you're done!


> You can consult the [documentation about the Developer Dashboard](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/dashboard) if you have any doubts on how to use it.


## Important information about your application

Once you have created your application, you will be redirected to the general information site. Keep these data at hand to continue the integration in the next steps. 

| Application data  | Definition                                                | Equivalent in Instore API |
|-------------------|-----------------------------------------------------------|-----------------------------------------------|
| User ID           | User identification number, which is automatically created. | `user_id`                                      |
| Application number | Application identification number, which is automatically created | `application.id`                                |

Additionally, in the menu located on the left side of your application's general information panel, you can access more useful information, as shown below: 

| Information Type       | Definition                                                                                     |
|------------------------|------------------------------------------------------------------------------------------------|
| NOTIFICATION > Webhooks | Webhook (also known as a web callback) is a simple method that enables an application or system to provide real-time information whenever an event occurs. Here you can configure a URL to which the final status of the 'intent' will be notified. For more information about Webhook notifications, go to the [Configure notifications](developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) section. |
| PRODUCTION > Production credentials | Use production [credentials](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/credentials) to receive payments. Here, you will find your production **access_token**. |
