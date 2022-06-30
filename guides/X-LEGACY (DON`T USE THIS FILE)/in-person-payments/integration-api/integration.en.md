# Integrate the API to your Points of Sale

Follow these steps to start integrating the Integrations API to your Points of Sale.

## 1. Get identification credentials

### Access a Mercado Pago account

In order to start the integration, it is necessary to have a Mercado Pago or Mercado Libre account.
You can [access](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/pre-requisites)
an existing account or [create a new one](https://www.mercadopago[FAKER][URL][DOMAIN]).

### Create an application

Next, you will need to create an application to obtain the credentials. It's easy, we’ll tell you how to do it:

1. Access [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Within the **Your applications** section, click on the "+" symbol to create your first application, or select "Create new application" if you already have others.
3. Give your applications a name in order to easily find it later.
4. Select "Mercado Pago Point" as the product you are going to integrate.
5. Accept our Terms and Conditions.

¡And you’re done!

> NOTE
>
> Note
>
> If you are going to operate on behalf of other sellers, you can manage the link safely by integrating [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/security/oauth/introduction).

### Access your application credentials

Once you have created an application, you will be able to access [your credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). With them you can connect an integration to your account and configure it your way.

### Generate test users

You can test your integrations in a controlled environment with test users. You can create them using the following command:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```

You can generate up to 10 test user accounts simultaneously. Keep in mind that test users expire after 60 days without activity in Mercado Pago.


## 2. Associate your Point device with your Mercado Pago account

Now you need to link your Point device to your Mercado Pago account. In order to do that, you need to have our application on your cell phone. You can get it for the operating systems [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
You must also have a Point device.

### Scan the QR code of your Point device

First, log into the Mercado Pago application. Then, click on the QR icon and scan the code that displays when you turn on your Point device. And that’s it, your Point device will be linked to your account.


### Configure your store and your point of sale

Once you have linked your Point device to your Mercado Pago account, you must complete your store data and configure your point of sale on the [Mercado Pago site](https://www.mercadopago[FAKER][URL][DOMAIN]). To do this, you must access **Your business> Stores and points of sale**.

### Activate the integrated mode on your Point device

To integrate your Point device with our API it is necessary to activate the point of sale (POS) operating mode. To achieve this, run the following command:

``` bash
 curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "operating_mode": "PDV"
}'
```

You will receive a response like this:

``` json
{
"operating_mode": "PDV"
}
```

> In case you need to use the device in non-integrated mode, you must configure the `operating_mode` field with the value `STANDALONE`.


> PREV_STEP_CARD_EN
>
> Introduction
>
> Read our Point Integrations API introduction.
>
> [Introduction](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/integration-api/introduction)


> NEXT_STEP_CARD_EN
>
> Start processing your payments
>
> Create a payment intent and assign it to a Point device.
>
> [Start processing your payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/integration-api/create-payment-intent)

