# Integrate the Marketplace via API

> WARNING
>
> Prerequisites
>
> * You need to have the [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction) implemented.

To start, follow these steps:

1. Create and set up your application.
2. Link your application with your sellers' accounts.
3. Generate credentials to operate.
4. Refresh your credentials.
5. Test your integration.

## Create and set up your application.

First you must have your [application created](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications/create-app) with a unique name.

Then, you need to **set up a Redirect URL for your application**. Go to [Your Applications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), click on your application's options and select "Edit". 

In Redirect URL field add the URL to where you would like to redirect your sellers after they are correctly linked. Remember that you will receive each of your sellers' authorization codes for their credentials in the URL you added.

Lastly, you need to get your application ID in [Your Integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).

## Link your Mercado Pago account with your sellers' accounts

To operate in Mercado Pago on behalf of your seller, you need to request their authorization first. To manage several Mercado Pago accounts at the same time in your integration, you can do it through OAuth, a feature for secure linking that allows sellers to access their Mercado Pago account to authorize and enable your application to work under their name.

To do this, you need to include a URL in your application to redirect sellers to the authorization site. 

This is the example URL you can use. You will also find the details of parameters to fill it out.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com

```
| Parameter | Data to fill out |
| ----------------- | ----------------- |
| `client_id` | Replace `APP_ID` value with your application ID. |
| `state` | Identify who the code to be received belongs to; so replace `RANDOM_ID` value with a unique ID for each attempt without sensitive data. |
| `redirect_uri` | Add the URL you entered in the Redirect URL field when you set up your application. | 

When entering this URL, the seller will be redirected to Mercado Pago to log in their account and authorize the link to your application.

----[mla, mlm, mlc, mco, mpe, mlu]----
![FlujoOAuth-es](/images/oauth/oauth-es-v2.png)
------------
----[mlb]----
![FlujoOAuth-pt](/images/oauth/oauth-pt.png)
------------

Once the seller has authorized your application to link with their Mercado Pago account, you will receive an authorization code in the specified Redirect URL. It will appear like this: 

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```
> Please note that the `code` value lasts for 10 minutes.

> SERVER_SIDE
>
> h2
>
> Generate credentials to operate

To create the necessary credentials to operate your application in the name of a seller, send the `CODE` you got in the previous step via OAuth API.

These are the parameters to include:

| Parameter | Data to fill out |
| ----------------- | ----------------- |
| `client_secret` | Private key to be used in some plugins to generate payments. You can get it in [Your credentials]([FAKER][CREDENTIALS][URL]). |
| `client_id` | Unique ID that identifies your integration. You can get it in [Your credentials]([FAKER][CREDENTIALS][URL]). |
| `grant_type` | Specify type of operation to perform to get your credentials. This is a fixed parameter with an `authorization_code` value. |
| `code` | The authorization code or `CODE` you get in your server for linking. It will be similar to this value: `TG-60357f5d0cd06d000740646d-643464554`. | 
| `redirect_uri` | This is the URL you set up in the Redirect URL field in your application. |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_ID=CLIENT_ID' \
     -d 'grant_type=authorization_code' \
     -d 'code=CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

In the response, you will get the `access_token` of the linked seller. 
You will also get a `refresh_token` to be later used to refresh your seller's credentials. 

You will also receive the seller's `public_key`, which is the credential or public key to be used for your frontend account identification. 

```json
{
"access_token":"APP_USR-4934588586838432-XXXXXXXX-241983636",
"token_type": "bearer",
"expires_in": 15552000,
"scope": "offline_access read write",
"user_id": 241983636,
"refresh_token": "TG-XXXXXXXX-241983636",
"public_key": "APP_USR-d0a26210-XXXXXXXX-479f0400869e",
"live_mode": true
}
```

> WARNING 
> 
> Important
> 
> Remember that you will be using your seller's sensitive information. Secure a backup and do not include it in your link URLs; manage such information from your server only.

Done! You already linked your seller's account to your application via OAuth. 

> Keep in mind that these steps need to be repeated with each account you want to link. 

## Refresh your credentials

**Your sellers' data that you received last 180 days**. After that, you need to request the seller's authorization again.
To avoid this, renew data before the deadline to ensure they are always current. 

To refresh them, use the following OAuth API call:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_id=CLIENT_ID' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parameter | Description |
| ----------------- | ----------------- |
| `client_secret` | Use your `client_secret` key. |
| `client_id` | Use your `client_id` credential. |
| `grant_type` | Include `refresh_token` that remains unchanged. |
| `refresh_token` | Value received with your seller's data. | 

You will receive the following response:

```json
{
    "access_token": "APP_USR-4934588586838432-XXXXXXXX-241983636",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXXXXXX-241983636"
}
```

> NOTE
> 
> Note
> 
> Remember that every time you refresh your credentials, the `refresh_token` will also change so you will need to store it again.
>
> In case of errors when refreshing your credentials, remember that you can query them in the [error code reference](https://developers.mercadolibre[FAKER][URL][DOMAIN]/en_us/authentication-and-authorization#Error-codes-reference).


## Integrate the API to receive payments

To collect on behalf of your sellers you must integrate the [API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction), generating the payment with the Access Token you obtained by linking each seller to your application.

If you want to charge a fee for each payment processed by your application on behalf of your seller, simply add that amount to the `application_fee` parameter when creating the preference:

[[[
```php
<?php  

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Title of what you are paying for";
  $payment->installments = 1;
  $payment->payment_method_id = "visa";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_data = { 
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_19653727@testuser.com'
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "Title of what you are paying for",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
    ApplicationFee = 5,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "description": "Title of what you are paying for",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
]]]

The seller will receive the difference between the total amount and the fees, both the fee of Mercado Pago and the Marketplace, as well as any other amount that should be deducted from the sale.

## Test your integration

You can try your Marketplace using your Sandbox credentials to associate the sellers and to make the payments/refunds/cancellations.  
[Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/testing)

## Set up notifications

You can get notifications every time a seller links to or unlinks from your application. For setup, follow these steps:

1. Access [Your Applications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) and select the application used for OAuth flow.

2. Go to "Webhooks Notifications" tab. In this section, go to "Production Mode" and add the URL to receive notifications. If you want, you can click on "Test" button to test that the assigned URL will receive Webhooks Notifications correctly.

3. Then, in "Events" field, select "Application Linking" option. Lastly, click on save. 

Done! Every time a seller links or unlinks, a notification will be received in your assigned URL.

These are some of the data that you can find within the notifications:

| Attribute | Value or type | Description |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifies the notification of account link type. |
| `action` | `application.authorized` | Reports that seller linked to application. |
| `action` | `application.deauthorized` | Confirms that seller unlinked from application. |
| `data.id`| `string`| ID of seller linked to application. |

For more information, go to [Webhooks Notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks).

## Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.
In case the Marketplace is the one that does the refund/cancellation, you´ll have to use the credentials obtained for that user in the Oauth process.

Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)
