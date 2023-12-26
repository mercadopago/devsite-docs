# Create application

Create your application to integrate with the Split Payments solution by following the steps below.

   > NOTE
   >
   > Important
   >
   > During the creation of your application, it may be necessary to reauthenticate your identity. If you have already completed the verification, reauthentication will be requested. Otherwise, you will be redirected to submit the necessary documents. This additional step is essential to protect your account and ensure compliance with operations. You can refer to the [Developer dashboard documentation](/developers/es/docs/split-payment/additional-content/your-integrations/dashboard) if you have any questions on how to use it.

1. Access [Your Integrations](https://www.mercadopago.com.br/developers/panel/app). Once there, click on the **Create application** button, located in the upper right corner.
2. Enter a name to identify your application (you have a limit of 50 characters).
3. Choose the **Online Payments** solution.
4. When choosing the product to integrate, you can select "Checkout Pro" or "Checkout API."
5. Choose the **Marketplace** integration model.
6. Once you have completed the requested information, click on **Create application** and you're done!

## Configure the Redirect URL

After creating the application, it is necessary to go to the editing screen to fill in the Redirect URL field (in OAuth requests, it is displayed as redirect_uri), which must contain the URL of the marketplace site where the seller's token will be sent upon completing the linking process.

![Redirect URL](/images/split-payment/redirect-url-es.png)