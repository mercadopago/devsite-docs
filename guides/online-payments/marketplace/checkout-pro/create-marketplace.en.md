# Integrate the Marketplace in the Checkout Pro

> WARNING
>
> Prerequisites
>
> * You need to have the [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction) implemented.

To start, follow these steps:

1. Create and set up your application.
2. Link your application with your sellers' accounts.
3. Generate credentials to operate.
4. Refresh your credentials.
5. Integrate the Checkout Pro.


## Create and set up your application.

First you must have your [application created](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications/create-app) with a unique name.

Then, you need to **set up a Redirect URL for your application**. Go to [Your Applications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), click on your application's options and select "Edit". 

In Redirect URL field add the URL to where you would like to redirect your sellers after they are correctly linked. Remember that you will receive each of your sellers' authorization codes for their credentials in the URL you added.

Lastly, you need to get your application ID in [Your Integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).

## Link your application with your sellers' accounts.

To operate in Mercado Pago on behalf of your seller, you need to request their authorization first. To manage several Mercado Pago accounts at the same time in your integration, you can do it through OAuth, a feature for secure linking that allows sellers to access their Mercado Pago account to authorize and enable your application to work under their name.

To do this, you need to include a URL in your application to redirect sellers to the authorization site. 

This is the example URL you can use. You will also find the details of parameters to fill it out.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
```

> SERVER_SIDE
>
> h2
>
> Generate credentials to operate

To create the necessary credentials to operate your application in the name of a seller, send the `CODE` you got in the previous step via OAuth API.

These are the parameters to include:

| Parameter | Data to fill out |
| ----------------- | ----------------- |
| `client_secret` | This is your `ACCESS_TOKEN`. You can get it in [Your Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). |
| `grant_type` | Specify type of operation to perform to get your credentials. This is a fixed parameter with an `authorization_code` value. |
| `code` | The authorization code or `CODE` you get in your server for linking. It will be similar to this value: `TG-60357f5d0cd06d000740646d-643464554`. | 
| `redirect_uri` | This is the URL you set up in the Redirect URL field in your application. |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
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

**Your sellers' data that you received lasts 180 days**. After that, you need to request the seller's authorization again.
To avoid this, renew data before the deadline to ensure they are always current. 

To refresh them, use the following OAuth API call:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parameter | Description |
| ----------------- | ----------------- |
| `client_secret` | Use your `ACCESS_TOKEN`. |
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
><br>
>  In case of errors when refreshing your credentials, remember that you can query them in the [error code reference](https://developers.mercadolibre[FAKER][URL][DOMAIN]/en_us/authentication-and-authorization#Error-codes-reference).


## Integrate the Checkout Pro

To collect on behalf of your sellers you must integrate the [Checkout](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction), generating the payment preferences with the Access Token you obtained by linking each seller to your application.

If you want to charge a fee for each payment processed by your application on behalf of your seller, simply add that amount to the marketplace_fee  parameter when creating the preference:

[[[

```curl

curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer SELLER_AT' \
'https://api.mercadopago.com/checkout/preferences' \
-d '{
    "items": [
        {
            "title": "Item title",
            "description": "Description",
            "quantity": 1,
            "unit_price": 50,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif"
        }
    ],
    "marketplace_fee": 2.29
}'

```


```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "Blue shirt";
$item->quantity = 10;
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: 'Blue shirt',
    quantity: 10,
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

sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      description: 'Multicolor Item',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  marketplace_fee: 2.56,
  notification_url: 'http://urlmarketplace.com/notification_ipn'
}

preference_response = sdk.preference.create(preference_data);
preference = preference_response[:response]

```
```csharp

var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    MarketplaceFee = 2.56m,
    NotificationUrl = "http://urlmarketplace.com/notification_ipn",
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
```python

preference_data = {
    "items": [
        {
            "title": "Blue shirt",
            "quantity": 10,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": [FAKER][COMMERCE][PRICE],
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "marketplace_fee": 2.56,
    "notification_url": "http://urlmarketplace.com/notification_ipn"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]

```
]]]


The seller will receive the difference between the total amount and the fees, both the fee of Mercado Pago and the Marketplace, as well as any other amount that should be deducted from the sale.

> WARNING
>
> Tip
>
> The more information you send us in the preference, the better our fraud prevention system will perform when it comes to payment approval.
> <br>
>  Create a checkout preference as complete as you can.

## Set up notifications

You can get notifications every time a seller links to or unlinks from your application. For setup, follow these steps:

1. Access [Your Applications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) and select the application used for OAuth flow.

2. Go to "Webhooks Notifications" tab. In this section, go to "Production Mode" and add the URL to receive notifications. If you want, you can click on the "Test" button to test that the assigned URL will receive Webhooks Notifications correctly.

3. Then, in "Events" field, select "Application Linking" option. Lastly, click on save. 

Done! Every time a seller links or unlinks, a notification will be received in your assigned URL.

This is some of the data that you can find within the notifications:

| Attribute | Value or type | Description |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifies the notification of account link type. |
| `action` | `application.authorized` | Reports that seller linked to application. |
| `action` | `application.deauthorized` | Confirms that seller unlinked from application. |
| `data.id`| `string`| ID of seller linked to application. |

For more information, go to [Webhooks Notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks).

## Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.
Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)
