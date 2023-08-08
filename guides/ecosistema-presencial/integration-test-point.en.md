# Test your Point integration
Before going into production, we recommend testing the proper functioning of your integration and payment processing. The following flow will allow you to perform tests for your application with Mercado Pago and integration with Point devices.

### Configure the integration

> NOTE
>
> Note
> 
> To test your integration with Point devices, you must use your Mercado Pago account, as payments with test users are not enabled.

1. Log in to the **Mercado Pago website** using your Mercado Pago user credentials.
2. [Create a store and a checkout](/developers/en/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) following the instructions to set up your integration. Remember to use your Mercado Pago credentials.

### Configure your Point device

1. Download and install the **Mercado Pago app on your mobile device**, and log in with your Mercado Pago account, as indicated in [Sign in to a Point device](/developers/en/docs/ecosistema-presencial/integration-configuration/signin-point).
2. Then, [enable PDV mode on your Point device](/developers/en/docs/ecosistema-presencial/integration-configuration/enable-pdv).

### Test payment processing

1. Use your Mercado Pago credentials to [create an intent for Point](/developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point), following the documentation. Remember that you are not using test users or cards, so we recommend setting the intent amount to the minimum available.
----[mla]----
2. If you are using a Point Smart device, the device will automatically load the intent on the screen after creation. If this doesn't happen, you can also tap the **Cobrar** button that appears on the device screen.
If you are using a Point Plus device, press the green button to load the intent on the device.
------------
----[mlb]----
2. If you are using a Point Smart device, the device will automatically load the intent on the screen after creation. If this doesn't happen, you can also tap the **Cobrar** button that appears on the device screen.
If you are using a Point Pro 2 device, press the green button to load the intent on the device.
------------
3. Follow the instructions presented by the device to complete the payment.
4. If you used the `print_on_terminal` field with the value of `SELLER_TICKET` when creating the intent, the device will print the ticket. Otherwise, the device won't print the ticket upon payment completion.

### Check the intent status and its notifications

1. Follow the instructions on how to [Check the status of an intent for Point](/developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) to verify the final status and results of the intent. Make sure the status and results are consistent with the payment flow you used in the previous step.
2. If you configured Webhook notifications, you can check in your Point of Sale (POS) system for the receipt of messages about the order status.

Remember that you can also test the [payment refund flow](/developers/en/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) from your Point device to issue a refund if desired.

> WARNING
>
> Important
>
> Once you have finished testing your integration and are ready to go into production, be sure to activate the [production credentials](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/credentials) and replace any test credentials if necessary.
