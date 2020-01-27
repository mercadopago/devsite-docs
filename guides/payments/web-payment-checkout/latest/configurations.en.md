---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Other functionalities


You can adapt the integration to your business by adding attributes in the preference. There is a lot of [details in a preference](https://www.mercadopago.com.ar/developers/en/reference/preferences/resource/) that can be set, but always keep in mind what your business needs.

If you offer purchases of high amounts, for example, you can accept [payments with two credit cards](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) or, also, [exclude payment methods](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) that you do not want to accept.

You can [get business information](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_Obtén_información_sobre_tu_negocio) using preference. And you can also measure advertising effectiveness and track ads by [integration to Facebook Pixel](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_asocia_un_píxel_de_facebook) or [associate your Google Ads](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_asocia_una_etiqueta_de_google_ads).


## Example of a complete preference

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descripción del Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "Juan",
        "surname": "Lopez",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

## Attributes for the preference

### Definition of Payment Methods

By default, all payment methods are offered. If you want to exclude any, it can be done from the payment preference.
You can also set a payment method to appear by default or define the maximum number of installments to offer.


Attribute | Description
------------ | -------------
_`payment_methods`_ | Class that describes the attributes and methods of payment methods.
_`excluded_payment_methods`_ | Method that excludes by specific payment methods: Visa, Mastercard or American Express, among others.
_`excluded_payment_types`_ | Method that excludes by type of payment method: cash, credit or debit cards.
_`installments`_ | Method that defines the amount of maximum number of installments to offer.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
// ...
$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);
// ...
?>
```
```node
var preference = {}
preference = {
//...
"payment_methods": {
    "excluded_payment_methods": [
        {
            "id": "master"
        }
    ],
    "excluded_payment_types": [
        {
            "id": "ticket"
        }
    ],
    "installments": 12
	}
//...
}
```
```java
Preference preference = new Preference();
//...
PaymentMethods paymentMethods = new PaymentMethods();
paymentMethods.setExcludedPaymentMethods("master", "amex");
paymentMethods.setExcludedPaymentTypes("ticket");
paymentMethods.setInstallments(12);

preference.setPaymentMethods(paymentMethods);
//...
```
```ruby
preference = MercadoPago::Preference.new
#...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
#...
```
```csharp
Preference preference = new Preference();

PaymentMethods paymentmethods = new PaymentMethods();

List<PaymentMethod> excludedPaymentMethod = new List<PaymentMethod>();
excludedPaymentMethod.Add(new PaymentMethod()
  {
    Id = "master"
  });    
paymentmethods.excludedPaymentType = excludedPaymentMethod;

List<PaymentType> ExcludedPaymentType = new List<PaymentType>();
excludedPaymentType.Add(new PaymentType()
  {
    Id = "ticket"
  });
paymentmethods.ExcludedPaymentTypes = excludedPaymentType;
paymentmethods.Installments = 12;
```
]]]

### Binary Mode

You can activate the binary mode if the business model requires payment approval to be instantaneous. This way, payment can only be approved or declined.

In case the binary mode is not activated, the payment may be pending (in case of requiring any action by the buyer) or in process (if a manual review is necessary).

To activate it, you only have to set the _`binary_mode`_ attribute of the payment preference to `true`:

```json
"binary_mode": true
```

### Validity of Preferences

If you want to enable the payment of a preference with a certain duration, you can activate a period of validity or complete directly with the following attributes:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

### Sponsor ID

The `sponsor_id` attribute is an identifier of the developer or software company that performs the Checkout Mercado Pago integration, this data is visible in the preference and in the payment.

```json
"sponsor_id": 123456789
```


### Multiple Items

If you need to create a preference for more than one item, you should only add them as a list within _items_.
Keep in mind that the total amount of the preference will be the sum of the amount for the unit price of each item.

[[[
```php
<?php
  # Create a preference object
  $preference = new MercadoPago\Preference();
  # Create items in the preference
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Save and post the preference
  $preference->save();
?>
```
```node
// Set your preference
var preference = {
  items: [
      { title: 'Mi producto',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56 }
    ]
};
// Create the preference
mercadopago.preferences.create(preference)
.then(function(preference){
  // This value replaces "$$init_point$$" string in your HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Create a preference object
Preference preference = new Preference();
// Create items in the preference
Item item1 = new Item();
item1.setId("1234")
    .setTitle("Producto 1")
    .setQuantity(2)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

Item item2 = new Item();
item2.setId("12")
    .setTitle("Producto 2")
    .setQuantity(1)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

preference.appendItem(item1, item2);
// Save and post the preference
preference.save();
```
```ruby
// Create items in the preference
item = MercadoPago::Item.new({
  title:        "Mi producto",
  quantity:     1,
  unit_price:   75.56
})
item2 = MercadoPago::Item.new({
  title:        "Mi producto2”,
  quantity:     2,
  unit_price:   96.56
})
// Create a preference object
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Create a preference object
Preference preference = new Preference();

// Create items in the preference
reference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)75.56
  },
  new Item()
  {
    Title = "Mi producto2”,
    Quantity = 2,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)96.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"items": [
	{
		"id_product":1,
		"quantity":1,
		"unit_price": 234.33,
		"titulo":"Mi producto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Mi producto 2"
	}
]
}'
```
]]]

------

## Optimize Ad Conversion

We know it’s important to maximize your ads effectiveness. For this reason, we offer you the choice integrating Mercado Pago Checkout with Facebook Ads and Google Ads platforms, in order to associate payments to your campaigns.

> NOTE
>
> Note
>
> Only instantly approved payments with credit or debit cards, money in Mercado Pago or with Mercado Credits will be associated.

### Associate a Facebook Pixel

When creating a preference, associate the corresponding identifier to your Facebook Pixel as follows:

[[[
```php
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===
<?php
  // Create a preference object
  $preference = new MercadoPago\Preference();

  // Associate your Facebook Pixel
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  // ...
  // Save and post the preference
  $preference->save();
?>
```
```node
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===
  // Create a preference object
var preference = {

  // Associate your Facebook Pixel
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
```java
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===
  // Create a preference object
Preference preference = new Preference();

  // Associate your Facebook Pixel
Track trackFacebook = new Track()
                .setType("facebook_ad")
                .setValues(new TrackValues()
                        .setPixelId("PIXEL_ID")
                );

Preference preference = new Preference()
        .appendTrack(trackFacebook);

  // Save and post the preference
preference.save();
```
```csharp
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===
List<Track> tracks = new List<Track>();
  // Associate your Facebook Pixel
tracks.Add(
    new Track
    {
        Type = "facebook_ad",
        Values = new JObject
        {
            { "pixel_id", "PIXEL_ID" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    // ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===

curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}'
```
]]]

Once set up, you’ll see a `Purchase` event for the specified Pixel everytime a payment is approved through your Mercado Pago Checkout.

> NOTE
>
> Note
>
> At the moment, only one Pixel can be set. Test your integration’s performance with Facebook Pixel Helper extension, available on Chrome Store. For more information, visit [Facebook’s official website](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


### Associate a Google Ads tag

When creating a preference, you can associate a Google Ads conversion tracking tag as follows:

[[[
```php
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===

<?php
  // Create a preference object
  $preference = new MercadoPago\Preference();
 
  // Associate your tag
  $preference->tracks = array(
    array(
        'type' => 'google_ad',
        'values' => array(
          'conversion_id' => 'CONVERSION_ID',
          'conversion_label' => 'CONVERSION_LABEL'
        )
    )
  );

  ...
  // Save and post the preference
  $preference->save();
?>
```
```node
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===
// Configure your preference
var preference = {

 // Associate your tag
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            }
        }
      ]
  ...
};
```
```java
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===
  // Create a preference object
Preference preference = new Preference();

  // Associate your tag
Track trackGoogle = new Track()
                .setType("google_ad")
                .setValues(new TrackValues()
                        .setConversionId("CONVERSION_ID")
                        .setConversionLabel("CONVERSION_LABEL")
                );


Preference preference = new Preference()
        .appendTrack(Google);

  // Save and post the preference
preference.save();
```
```csharp
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===
List<Track> tracks = new List<Track>();
  // Associate your tag
tracks.Add(
    new Track
    {
        Type = "google_ad",
        Values = new JObject
        {
            { "conversion_id", "CONVERSION_ID" },
            { "conversion_label", "CONVERSION_LABEL" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id", "CONVERSION_ID",
                "conversion_label", "CONVERSION_LABEL"
            }
        }
    ]
}'
```
]]]

Once set up, you’ll see a conversion associated to the configured label everytime a payment is approved through your Mercado Pago Checkout.

> NOTE
>
> Note
>
> At the moment, only one label can be configured. For more information about Google Ads conversion tracking tags, visit the [Google's official website](https://support.google.com/google-ads?hl=es-419#topic=7456157).


## Get information about your business

To get business metrics, use `headers` in your preference. You should only add identification codes, as applicable.

For example, you can have a developers team, be integrated through an e-commerce platform or be part of a group of accounts associated with a seller group.

Header | Code Type | Identifiers
------ | ---------------| ---------
`x-integrator-id` | Integrator | Developers or agencies that conducted the integration.
`x-platform-id` | Platform | [Platform](https://partners.mercadopago.com/) used by the seller's account.
`x-corporation-id` | Corporations | Accounts associated with an economic group or seller's account.
> Are you a developer or agency and need your identifier? [Request your code now](https://docs.google.com/forms/d/1EeO__nZuqHf4cb81NpwtDSybPT7COluSZVrXR4A8F7Q/edit). 

[[[
```php
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
$mp.set_platform_id("PLATFORM_ID")
$mp.set_integrator_id("INTERATOR_ID")
$mp.set_corporation_id("CORPORATION_ID")
```
```csharp
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
MercadoPago.SDK.PlatformId    = "PLATFORM_ID";
MercadoPago.SDK.IntegratorId  = "INTEGRATOR_ID";
MercadoPago.SDK.CorporationId = "CORPORATION_ID";
```
```curl
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
curl -X POST \
'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"
' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-corporation-id: CORPORATION_ID \
  -H 'x-integrator-id: INTEGRATOR_ID \
  -H 'x-platform-id: PLATFORM_ID \
  -d '{
    "items": [
       ...
       
    ],
    ...
}'
```
]]]


----[mla, mlb]----

## Payments with Two Credit Cards

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

You can enable the option to offer to pay with two credit cards from the Mercado Pago account.
To activate the payment option, go to your <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank">business options</a> and choose the option _Receive payments with 2 credit cards_.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)

------------
----
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Optimize your integration and improve the management of your sales.
>
> [Advanced Integration](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Customization
>
> Adapt the style of your brand in the buying experience.
>
> [Customization](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations/)
