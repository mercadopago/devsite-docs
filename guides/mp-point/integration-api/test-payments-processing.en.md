# Test payment processing

To test the correct payment processing with Mercado Pago Point, you will need to carry out a series of transactions and their corresponding validations using our API.

> WARNING
>
> Important
>
> In these transactions, you must use **real cards** and perform operations with **minimum amounts**. Don't worry: the test flow ensures that the money is refunded to the card used for payment.

## Create and process a payment intent

To test the correct creation and processing of a payment intent, follow the steps below.

1. Send a request to the API ----[mlb]----[Create a payment intent](/developers/en/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post)------------ ----[mla, mlm]----[Create a payment intent](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post)------------ using your production credentials. You must assign it to the previously configured Point device by replacing the `deviceId` value in the call path with the corresponding identifier. Also, use a value that allows you to identify this test intent in your system through the `external_reference` field, and make sure to have a minimum amount for the `amount` field.

> NOTE
>
> Note
>
> We recommend that, **before processing the payment intent**, you validate its correct creation by sending a request to [Search payment intent](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) using the `id` obtained in the response. While not mandatory, this will allow you to verify that your integration is working correctly and compare the intent information with that received through Webhooks notifications.

2. Process the payment intent by pressing the button to start the payment from your Point device and following the subsequent steps indicated on the screen.

3. Check that you have received the Mercado Pago Webhooks notifications for each of the events that occurred.

| Topic | Event | Reference Value |
|---|---|---|
| Point Integrations | Payment intent creation | You will identify the payment intent through the `external_reference` field, which will have the same value you assigned at the time of creation. |
| Point Integrations | Payment intent completion | You will identify the payment intent through the `external_reference` field, which will have the same value you assigned at the time of creation. Additionally, the `payment.id` field will allow you to identify the payment and compare that information with the one received in the Payments notification. |

4. Validate that the payment processing was successful by sending a **GET** request to the [v1/payments](/developers/en/reference/payments/_payments_id/get) API, using the payment `id` obtained in your notifications.

## Refund a payment

To confirm that the payment flow works correctly, you must refund the transaction processed in the previous instance directly from your Point device. This way, the money involved in this test stage will also be returned.

To do this, follow the steps below.

1. On the main screen of your Point device, slide until you reach the **More options** tab.
2. There, press the **View more** button within the "Activity with this Point" section. You will access the details of the operation performed.
3. On the **Operation Details** screen, scroll down and select the **Return money** option.
4. Confirm that you want to refund the money from that test operation.

The "Operation Details" screen should now display the refunded amount, and by going back to "More options," you can see this new activity with that device.

## Create a payment intent and reject the payment

To validate that the payment rejection flow works correctly, follow the steps below.

1. Send a request to the API ----[mlb]----[Create a payment intent](/developers/en/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post)------------ ----[mla, mlm]----[Create a payment intent](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post)------------ using your production credentials. You must assign it to the previously configured Point device by replacing the `deviceId` value in the call path with the corresponding identifier. Also, use a value that allows you to identify this test intent in your system through the `external_reference` field, and make sure to have a minimum amount for the `amount` field.

2. Access the payment intent on the Point device and press the **More options** button in the bottom right section of the screen.

3. A message will appear on the screen asking if you want to exit without completing the payment. Click **Yes** to reject the generated payment.

4. Check that you have received the Mercado Pago Webhooks notifications for each of the events that occurred.

| Topic | Event | Reference Value |
|---|---|---|
| Point Integrations | Payment intent creation | You will identify the payment intent through the `external_reference` field, which will have the same value you assigned at the time of creation. |
| Point Integrations | Payment intent cancellation | You will identify the payment intent through the `external_reference` field, which will have the same value you assigned at the time of creation.|