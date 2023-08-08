# Test your QR integration

Before going into production, we recommend testing the correct functioning of your integration and payment processing.

The following flow will allow you to conduct tests for your application with Mercado Pago, including different payment flows and states.

> NOTE
>
> Testing integration is done with test users and payment methods. Real data and money are not used. Follow the instructions below to know how to set them up.

### Integration testing

1. Create a test user to simulate the seller following the instructions from the [Test documentation](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
2. Log in to the **Mercado Pago website** with the credentials of the test user you created.
3. [Create a store and a checkout](/developers/en/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) following the instructions to set up your integration. Remember to use the credentials of the test user for the seller.

### Test payment processing

1. Use the test seller's credentials to [create an intent for QR code](/developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr), as indicated in the documentation.
2. Generate a payment considering:
   * If you use the **`qr_payment_mode` field = `STATIC`** or do not define any qr_payment_mode when creating the intent, access the Mercado Pago website. There, go to **Your Business > Stores and Checkout** and select the associated store and checkout. 
    Then, click on the QR symbol next to the checkout's name and select **Print QR**. This QR code will be associated with the intent you created in the previous step.

   * If you use the **`qr_payment_mode` field = `DYNAMIC`**, you will receive the `qr_data` field in the response with a QR frame. You can use tools or libraries that will help you convert this frame into an image of a QR code.

3. Create a test user to simulate the buyer following the instructions from the [Test Documentation](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
4. Download and install the **Mercado Pago app on your mobile device**, and log in with the test buyer's account.
5. Scan the QR code you generated in the previous step from your mobile device, using the test buyer's account. The app will display the amount of the intent and the available payment options.

> NOTE
>
> You can set up test cards to simulate different payment flows. Check the [test documentation](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/test/cards) to learn how to do it.

### Check the status of the intent and its notifications

1. Follow the instructions on how to [Check the status of a QR code intent](/developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr) to verify the final status and results of the intent. Make sure the status and results are consistent with the payment flow you used in the previous step.
2. If you have configured Webhook notifications, you can verify the receipt of messages about the order status in your Point of Sale (POS) system.

> WARNING
>
> Important
>
> Once you have finished and tested your integration and are ready to go into production, be sure to activate the [production credentials](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/credentials) and replace any test credentials if necessary.
