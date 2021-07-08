# How to Integrate the Marketplace in the Checkout Pro

> WARNING
>
> Prerequisites
>
> * Have the [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction) implemented.

To begin, you need to:

1. Register an application and then edit its **Redirect URI**.
2. Request your sellers to connect.
3. Create payment preferences on behalf of your sellers.

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

`https://www.URL_de_retorno.com?code=AUTHORIZATION_CODE&state=id=RANDOM_ID`

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

* `client_secret`: Your `ACCESS_TOKEN`. You can get it from the detail of your [application]([FAKER][CREDENTIALS][URL]).
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
     -d 'client_secret= ACCESS_TOKEN' \
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
> The more information you send us in the preference, the better our fraude prevention system will perform when it comes to payment approval.  
> Create a checkout preference as complete as you can.

### Notifications

You need to send your `notification_url`, where you will receive a notification of all new payments and status updates generated.

For more information, go to the [notifications section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn).

### Refunds and cancellations

The cancellations and refunds can be made either by the marketplace or by the seller, via API or through the Mercado Pago account.
Cancellations can only be made using the cancellation API.

For more information, go to [refunds and cancellations.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)
