# Integrate the API to your Points of Sale

Follow these steps to start integrating the Integrations API to your Points of Sale.

## 1. Get identification credentials

### Access a Mercado Pago account

----[mla, mlb]----
In order to start the integration, it is necessary to have a Mercado Pago or Mercado Libre account.
You can [access](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/pre-requisites)
an existing account or [create a new one](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

------------

----[mlm]----
In order to start the integration, it is necessary to have a Mercado Pago or Mercado Libre account.
You can [access](https://www.mercadolibre.com/jms/mlm/lgz/login?platform_id=MP&go=https%3A%2F%2Fwww.mercadopago.com.mx%2F&loginType=explicit)
an existing account or [create a new one](https://www.mercadopago.com.mx/hub/registration/landing).

------------

### Create an application

----[mla, mlb]----
Next, you will need to create an application to obtain the credentials. It's easy, we’ll tell you how to do it:

1. Access [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Within the **Your applications** section, click on the "+" symbol to create your first application, or select "Create new application" if you already have others.
3. Give your applications a name in order to easily find it later.
4. Select "Mercado Pago Point" as the product you are going to integrate.
5. Accept our Terms and Conditions.
------------

----[mlm]----
Next, you will need to create an application to obtain the credentials. It's easy, we’ll tell you how to do it:

1. Access [Your integrations](https://www.mercadopago.com.mx/developers/panel/applications).
2. Within the **Your applications** section, click on the "+" symbol to create your first application, or select "Create new application" if you already have others.
3. Give your applications a name in order to easily find it later.
4. Select "Mercado Pago Point" as the product you are going to integrate.
5. Accept our Terms and Conditions.

------------

¡And you’re done!

> NOTE
>
> Note
>
> If you are going to operate on behalf of other sellers, you can manage the link safely by integrating [OAuth.](/developers/en/docs/mp-point/additional-content/security/oauth/introduction)

### Access your application credentials

Once you have created an application, you will be able to access your credentials. You can find them in the **Application details > Credentials** within the [Developer dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app). With them you can connect an integration to your account and configure it your way.

### Generate test users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

In addition, you can also create test users using the following command:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

## 2. Associate your Point device with your Mercado Pago account

Now you need to link your Point device to your Mercado Pago account. In order to do that, you need to have our application on your cell phone. You can get it for the operating systems [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
You must also have a Point device.

### Scan the QR code of your Point device

First, log into the Mercado Pago application. Then, click on the QR icon and scan the code that displays when you turn on your Point device. And that’s it, your Point device will be linked to your account.

### Configure your store and your point of sale

Once you have linked your Point device to your Mercado Pago account, you must complete your store data and configure your point of sale on the [Mercado Pago site](https://www.mercadopago[FAKER][URL][DOMAIN]/stores). To do this, you must access **Your business> Stores and points of sale**.

### Activate the integrated mode on your Point device

To integrate your Point device with our API it is necessary to activate the point of sale (POS) operating mode. To achieve this, consult the devices through our [Get devices API](/developers/en/reference/integrations_api/_point_integration-api_devices/get) and run the following command:

``` bash
 curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/:deviceId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "operating_mode": "PDV"
}'
```

----[mlb, mla]----
> NOTE
> 
> Important
> 
> The POS API integrated mode is only available to be operated by a store operator. If it is implemented in self-service mode, it will be the full responsibility of the business since the devices are not enabled to be used in this type of business model.

------------

You will receive a response like this:

``` json
{
"operating_mode": "PDV"
}
```

> In case you need to use the device in non-integrated mode, you must configure the `operating_mode` field with the value `STANDALONE`.

>  NOTE
> 
> Important
> 
> It is necessary to restart the device for the change to take effect.