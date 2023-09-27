# Configure your device in Point of Sale mode

> WARNING
>
> Important
>
> Before configuring the Point device in Point of Sale mode, you must access your Mercado Pago account and have created an [application](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) with **PointdeMercadoPago** as the product to integrate.
>
> Also, remember to access your [production credentials](/developers/en/docs/mp-point/additional-content/your-integrations/credentials) to manage your integration correctly.

To start your integration with Mercado Pago Point via API, you must configure your device in Point of Sale mode. To do this, follow the steps below.

## Create a store and a POS

To configure the Point device in Point of Sale mode, you must associate it with a store and a point of sale in this store.

If you haven't created any stores or POS yet, you can do so through our API.

First, you must create a store using the endpoint [Create store](/developers/en/reference/stores/_users_user_id_stores/post). You must replace the values `user_id` and `YOUR_ACCESS_TOKEN` with the ones obtained when creating your application, as well as modify the necessary parameters according to your business characteristics.

Then, you must create a POS using the endpoint [Create POS](/developers/en/reference/pos/_pos/post). This POS must be associated with the store created earlier, so you must replace the parameter `external_store_id` with the one obtained during the store creation.

## Associate the Point device to your Mercado Pago account

To link the Point device to your Mercado Pago account, you need to have the Mercado Pago app installed on your mobile device.

Sign in to the app with your username and password and tap the QR icon to scan the code that appears when you turn on the Point device. This way, the device will be linked to your account.

> NOTE
>
> Note
>
> If you are going to operate on behalf of other sellers, you can securely manage the linking by integrating [OAuth.](/developers/en/docs/mp-point/additional-content/security/oauth/introduction)

## Configure your store and POS

Once you have linked your Point device to your Mercado Pago account and have created the store and POS, you must complete the business data and configure the POS to associate them with the device.

To do this, you can access the [Mercado Pago site](https://www.mercadopago[FAKER][URL][DOMAIN]/stores) and go to **Your business > Stores and registers**.

> NOTE
>
> Note
>
> You can also configure the store and POS directly from the Point device once it is linked. The device itself will guide you if you choose to configure it this way.

## Activate the POS mode on your Point device

To integrate the Point device with our API, it is necessary to activate the Point of Sale (POS) operating mode.

To activate it for the first time, retrieve the devices through the API [Get devices](/developers/es/reference/integrations_api/_point_integration-api_devices/get). This call will return a list of devices associated with your Mercado Pago account. You can identify the desired Point device by the last characters of the `id` field, which should match the serial number displayed on the back label of the device.

Then, make a PATCH request to the endpoint [Change operating mode](/developers/es/reference/integrations_api/_point_integration-api_devices_device-id/patch), replacing `device.id` with the value obtained in that field from the response to the previous GET request.

``` curl
curl -X PATCH \
      'https://api.mercadopago.com/point/integration-api/devices/{device-id}' \
       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN \
       -H 'Content-Type: application/json' \ 
      -d '{
  "operating_mode": "PDV"
}'
```

You will receive a response like this:

``` json
{
"operating_mode": "PDV"
}
```

> WARNING
>
> Important
>
> Please note that only one point-of-sale device is allowed per checkout, and it should only be handled by a store operator. The [unattended self-service]((/developers/en/docs/mp-point/integration-api/glossary)) use of a device is the full responsibility of the merchant. Consider this limitation when implementing the integration to ensure proper and safe use of the devices.

Finally, you will need to restart your device for the change in the operating mode to take effect.

If you need to use the device in non-integrated mode, you should configure the `operating_mode` field with the value `STANDALONE`.

> NOTE
>
> Note
>
> If you have already activated the point-of-sale mode on a device via API and, for some reason, need to reconfigure it, you can do it directly from the device, and there will be no need to resort to the API again.