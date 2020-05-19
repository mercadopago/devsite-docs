# How to Integrate the Marketplace in the Mercado Pago Checkout

----[mla, mlb, mlc, mlm, mco, mlu]----
> WARNING
>
> Prerequisites
>
> * Have the [Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) implemented.
------------
----[mpe]----
> WARNING
>
> Prerequisites
>
> * Have the [Checkout](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction) implemented.
------------

To begin, you need to:

1. Register a Marketplace application.
2. Request your sellers to connect.
3. Create payment preferences on behalf of your sellers.

## 1. How to create your application

Create your application by accessing [this link](https://applications.mercadopago.com/), checking the option **MP Connect / Marketplace Mode** and the scopes `read`, `write` and `offline_access`.

You must also complete a **Redirect URI** where the sellers will be redirected in order to be linked correctly.

Once the application has been created, you will get the `APP_ID` (application identifier) required for the next step.

## 2. Connecting accounts

To operate in Mercado Pago on behalf of your seller, you need to request their authorization first. To do this, redirect the user to the following URL by sending in `client_id` the value of `APP_ID` and the `redirect_uri` that you got in the previous step:

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http://www.URL_de_retorno.com`

You'll receive the authorization code in the URL that you specified:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

This `AUTHORIZATION_CODE` will be used to create the credentials and is valid for 10 minutes.

> WARNING
>
> Advice:
>
> You can include a parameter in the `redirect_uri` to identify the seller corresponding to the authorization code you received, such as your email address, the user ID in your system or any other useful reference.
>Example:
>-Redirect_uri set in the application: https://www.mercadopago.com/mp.php
>-Redirect uri to use in the Oauth link: https://www.mercadopago.com/mp.php?user_id=001
>-Redirect_uri for the authorization with the security code from the Oauth process: https://www.mercadopago.com/mp.php?user_id=001


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

* `client_id`: The value of `APP_ID`. You can get it from the detail of your [application.](https://applications.mercadopago.com/)
* `client_secret`: Your `SECRET_KEY`. You can get it from the detail of your [application.](https://applications.mercadopago.com/)
* `code`: The authorization code you got when redirecting the user back to your site.
* `redirect_uri`: It must be the same Redirect URI that you set up in your application.

Response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```

In the response, in addition to the Access Token of the seller, you will get the Refresh Token that you must use to periodically renew the user’s credentials.

> NOTE
>
> Note
>
> The credentials are **valid for 6 months.**
> If you don´t renew your sellers credentials before the expiration period, **those credentials will lose validity, and you´ll have to do the Oauth proccess all over again**. 
> Tip: Renew the credentials 5 months after you got them. 


### Refresh your user’s credentials

This process must be performed periodically to ensure that the user’s credentials are stored in your system and valid, since they are valid for 6 months.

If you face, in the payment flow, an error related to the Access Token that you are using, we suggest you to automatically refresh and retry the payment, before showing an error to the buyer.

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Expected response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```


## 3. Integrate the checkout

To collect on behalf of your sellers you must integrate the [Checkout](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction), generating the payment preferences with the Access Token of each seller for your application.

If you want to charge a fee for each payment processed by your application on behalf of your seller, simply add that amount to the marketplace_fee  parameter when creating the preference:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
$item->title = "[FAKER][CURRENCY][ACRONYM]";
$item->unit_price = [FAKER][COMMERCE][PRICE];

$payer = new MercadoPago\Payer();
$payer->email = "test_user_19653727@testuser.com";

$preference->items = array($item);
$preference->payer = $payer;
$preference->marketplace_fee = 2.56
$preference->notification_url = "http://urlmarketplace.com/notification_ipn"

$preference->save();
?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: '[FAKER][COMMERCE][PRODUCT_NAME]',
    quantity: [FAKER][NUMBER][BETWEEN][1,10],
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "demo@mail.com"
  }

  preference.items = [item]
  preference.payer = payer
  preference.marketplace_fee = 2.56
  preference.notification_url = "http://urlmarketplace.com/notification_ipn";

  mercadopago.preferences.create(preference).then(function (data) {
     // Do Stuff...
   }).catch(function (error) {
     // Do Stuff...
   });

```
```ruby

preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer
preference.marketplace_fee = 2.56
preference.notification_url = "http://urlmarketplace.com/notification_ipn"

preference.save

```
]]]


The seller will receive the difference between the total amount and the fees, both the fee of Mercado Pago and the Marketplace, as well as any other amount that should be deducted from the sale.

> WARNING
>
> Tip
>
> The more information you send us in the preference, the better our fraude prevention system will perform when it comes to payment approval.  
> Create a checkout preference as complete as you can.

### Notifications

You need to send your `notification_url`, where you will receive a notification of all new payments and status updates generated.

For more information, go to the [notifications section](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn).

### Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.
Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds)
