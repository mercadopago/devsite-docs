# How to Integrate the Marketplace via API

> WARNING
>
> Prerequisites
>
> * Have the [API](/guides/payments/api/introduction.es.md) implemented.

To begin, you need to:

1. Register a Marketplace application.
2. Request your sellers to connect.
3. Create payments on behalf of your sellers.

## 1. How to create your application

Create your application by accessing [this link](https://applications.mercadopago.com/), checking the option **MP Connect / Marketplace Mode** and the scopes `read`, `write` and `offline_access`.

You must also complete a **Redirect URI** where the sellers will be redirected in order to be linked correctly.

Once the application has been created, you will get the `APP_ID` (application identifier) required for the next step.

## 2. Connecting accounts

To operate in Mercado Pago on behalf of your seller, you need to request their authorization first. To do this, redirect the user to the following URL by sending in `client_id` the value of `APP_ID` and the `redirect_uri` that you got in the previous step:

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com`

You'll receive the authorization code in the URL that you specified:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

This `AUTHORIZATION_CODE` will be used to create the credentials and is valid for 10 minutes.

> WARNING
>
> Advice
>
> You can include a parameter in the `redirect_uri` to identify the seller corresponding to the authorization code you received, such as your email address, the user ID in your system or any other useful reference.


### Create your user’s credentials

Use the authorization code you got in the previous step to get your user’s credentials through the OAuth API, so that you can operate on behalf of the user.

Request:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

The parameters you need to include are:

* `client_id`: The value of `APP_ID`.
* `client_secret`: Your `CLIENT_SECRET`.
* `code`: The authorization code you got when redirecting the user back to your site.
* `redirect_uri`: It must be the same Redirect URI that you set up in your application.

Response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

In the response, in addition to the `access_token` and `public_key` of the seller, you will get the `refresh_token` that you must use to periodically renew the user’s credentials.

> NOTE
>
> Note
>
> The credentials are **valid for 6 months.**

### Refresh your user’s credentials

This process must be performed periodically to ensure that the user’s credentials are stored in your system and valid, since they are valid for 6 months.

If you face, in the payment flow, an error related to the Access Token that you are using, we suggest you to automatically refresh and retry the payment, before showing an error to the customer.

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Expected response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

## 3. Integrate the API

To collect on behalf of your sellers you must integrate the [API](/guides/payments/api/introduction.es.md), using the `access_token` of each seller for your application.

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
  $payment->user_token = "ENV_USER_TOKEN";
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

payment.setTransactionAmount(100)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
      .setUserToken("ENV_USER_TOKEN")
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
  user_token: "ENV_USER_TOKEN"
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
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = 'Title of what you are paying for'
payment.installments = 1
payment.payment_method_id = "visa"
payment.user_token = "ENV_USER_TOKEN"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
]]]

The seller will receive the difference between the total amount and the fees, both the fee of Mercado Pago and the Marketplace, as well as any other amount that should be deducted from the sale.

### Notifications

You need to send your `notification_url`, where you will receive a notification of all new payments and status updates generated.

For more information, go to the [notifications section](/guides/notifications/webhooks.en.md).

### Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.

Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](/guides/manage-account/cancellations-and-refunds.en.md)
