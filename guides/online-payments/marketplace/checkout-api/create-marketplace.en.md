# How to Integrate the Marketplace via API

> WARNING
>
> Prerequisites
>
> * Have the [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction) implemented.

To begin, you need to:

1. Register an application and then edit its **Redirect URI**.
2. Request your sellers to connect.
3. Create payments on behalf of your sellers.

## 1. How to create your application

Create your application by accessing [this link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), then edit its settings and complete the **Redirect URI** where the sellers will be redirected in order to be linked correctly.

Once the application has been created, you will get the `APP_ID` (application identifier) required for the next step.

## 2. Connecting accounts

To operate in Mercado Pago on behalf of your seller, you need to request their authorization first. 

2.1. To do so, redirect the user to the following URL replacing the value of `client_id` for the `APP_ID` and the same `redirect_uri` you set up in the previous step:

`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http://www.URL_de_retorno.com`

<br>
2.2. When the seller accepts, a last redirect is made and you will receive the authorization code in the URL that you specified:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

This `AUTHORIZATION_CODE` must be used to create the credentials that allow you to operate on behalf of the seller. This code will be valid for 10 minutes since it's reception.

<br>
2.3. You can also include the `state` parameter in the URL authorization to identify who is responsible for the code you received. Do this in a safe manner and assign a random identifier in the parameter which is unique for each attempt.

By including this parameter, the redirect URL will look like this:

`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=id=RANDOM_ID=&redirect_uri=http://www.URL_de_retorno.com`

You will now receive the authorization code and the secure identifier at the specified return URL:

`hhttp://www.URL_de_retorno.com?code=AUTHORIZATION_CODE&state=id=RANDOM_ID`

> Don’t send confidential information or credentials of the Mercado Pago account.

### Create your user’s credentials

Use the authorization code you got in the previous step to get your user’s credentials through the OAuth API, so that you can operate on behalf of the user.

Request:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

The parameters you need to include are:

* `client_secret`: Your `ACCESS_TOKEN`. You can get it from the detail of your [application.]([FAKER][CREDENTIALS][URL])
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
> If you don´t renew your sellers credentials before the expiration period, **those credentials will lose valifity and you´ll have to do the authorization process all over again.**
> Tip: Renew the credentials 5 months after you got them.

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

### Notifications

You need to send your `notification_url`, where you will receive a notification of all new payments and status updates generated.

In order to receive notifications when your clients authorize your application, you can [configure the url](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications) in your account.

For more information, go to the [notifications section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks).

### Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.
In case the Marketplace is the one that does the refund/cancellation, you´ll have to use the credentials obtained for that user in the Oauth process.

Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)

### Test your integration

You can try your Marketplace using your Sandbox credentials to associate the sellers and to make the payments/refunds/cancellations.  
[Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/testing)
