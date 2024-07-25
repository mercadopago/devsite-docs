# Configure test integration

To test your integration with Mercado Pago Point and payment processing, you first need to configure your integration. In this documentation, you will find step-by-step instructions on how to do this properly using our APIs.

> WARNING
>
> Important
>
> To test your integration with Point devices, you must use your **Mercado Pago user and production credentials**, as test user payments are not enabled.

## Create a store and a POS

1. Create a store by sending a request to the [Create store](/developers/en/reference/stores/_users_user_id_stores/post) endpoint. You must send your **production Access Token** and replace the value `user_id` with the **user identification** assigned to you when creating your application. If you are unsure how to identify this value, access the [Application details documentation](/developers/en/docs/mp-point/additional-content/your-integrations/application-details).<br>

2. Create a POS by sending a request to the [Create POS](/developers/en/reference/pos/_pos/post) endpoint, and associate it with the store created in the previous step. This is achieved by replacing the `external_store_id` parameters with the `external_id` you assigned to the store, or `store_id` with the value obtained for the `id` field in the response to the store creation.<br>

3. Finally, associate the Point device with your Mercado Pago account. To do this, download and install the Mercado Pago app on your mobile device, log in with your account, and press the QR icon to scan the code that appears when turning on the Point device.<br>

## Activate PDV mode

Activating the Point of Sale (PDV) operational mode on your device is a **mandatory requirement** to operate with our API. This process consists of two stages:

1. First, you must **obtain the identification of your Point device**. To do this, send a request to the [Get devices](/developers/en/reference/integrations_api/_point_integration-api_devices/get) endpoint, which will return a list of devices associated with the Mercado Pago account. You can identify the Point device you want to activate by the last characters of the `id` field, which should match the serial number on the back label of the device. Remember that you must make this request using your production credentials.

> NOTE
>
> Note
>
> We recommend sending the query params `store_id` and `pos_id` in this request to verify that the configuration is correct. These parameters will allow you to obtain not only the devices associated with a Mercado Pago account, but also those specifically linked to a store and POS within that account, respectively. The values of these parameters will be those received in the responses to the creation of each.

2. Lastly, make a **PATCH** request to the [Change operation mode](/developers/en/reference/integrations_api/_point_integration-api_devices_device-id/patch) endpoint, replacing the `device-id` value in the path with the `id` of the device obtained in the previous step. Additionally, you must complete the `operating_mode` field with the value `PDV`, which enables the device to operate in the integrated mode with the API.

## Configure notifications

Before starting tests with payment processing, we recommend configuring Webhooks notifications through the [Your Integrations](/developers/panel/app) section. This way, you can also test receiving the necessary alerts for each transaction and compare the information received with your system.

To configure your notifications with Mercado Pago Point, follow the instructions below:

1. Access [Your Integrations](/developers/panel/app) and select the application you are testing your integration with.<br>
2. In the left menu, click on **Webhooks**.<br>
3. On the displayed screen, click on **Configure notifications**, and set the URLs that will be used to receive test notifications. We recommend using two different URLs for test mode and production mode:
    * **Test mode URL**: provide a URL to test the correct functioning of the application notifications during the development stage.
    * **Production mode URL**: provide a URL to receive notifications with your production integration. These notifications must be configured with the production credentials of your Mercado Pago user.<br>

4. Select **Point Integrations** as the topic you want to receive notifications on. This will keep you updated on payment intents and their state changes.<br>
5. Finally, click on **Save**. This will generate a unique **secret key** for the application, allowing you to validate the authenticity of the received notifications, ensuring they were sent by Mercado Pago. If you want more information on how to validate the origin of a notification, access the [documentation](/developers/en/docs/mp-point/additional-content/your-integrations/notifications/webhooks#configuringthroughthedeveloperpanel).

Once you have completed all the configurations, you can begin testing payment processing.