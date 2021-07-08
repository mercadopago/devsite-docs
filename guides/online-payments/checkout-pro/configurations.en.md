# Other functionalities


You can adapt the integration to your business by adding attributes in the preference. There is a lot of [details in a preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) that can be set, but always keep in mind what your business needs.

----[mla, mlb]----
If you offer purchases of high amounts, for example, you can accept [payments with two credit cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_payments_with_two_credit_cards) or, also, [exclude payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_attributes_for_the_preference) that you do not want to accept.
------------
----[mlm, mlc, mlu, mco, mpe]----
If you offer purchases of high amounts, for example, you can [exclude payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_attributes_for_the_preference) that you do not want to accept.
------------

You can [get business information](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_get_information_about_your_business) using preference. And you can also measure advertising effectiveness and track ads by [integration to Facebook Pixel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_associate_a_facebook_pixel) or [associate your Google Ads](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_associate_a_google_ads_tag).


## Example of a complete preference

----[mlm, mla, mlb, mlc, mlu, mpe]----

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
    "statement_descriptor": "MYBUSINESS",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

------------
----[mco]----

 ```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "CLP",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
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
		"installments": 12,
		"default_payment_method_id": null,
		"default_installments": null
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"statement_descriptor": "MYBUSINESS",
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00",
	"taxes": [
		{
			"type": "IVA",
			"value": 16
		}
	]
}
 ```
------------

## Attributes for the preference

### Definition of Payment Methods

By default, all payment methods are offered. If you want to exclude any, it can be done from the payment preference.
You can also set a payment method to appear by default or define the maximum number of installments to offer.


| Attribute | Description |
| --- | --- |
| `payment_methods` | Class that describes the attributes and methods of payment methods. |
| `excluded_payment_methods` | Method that excludes by specific [payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/payment-methods#bookmark_payment_methods_by_country): Visa, Mastercard or American Express, among others. |
| `excluded_payment_types` | Method that excludes by type of [payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/payment-methods#bookmark_payment_methods_by_country): cash, credit or debit cards. |
| `installments` | Method that defines the amount of maximum number of installments to offer. |
| `purpose` | When the "wallet purchase" value is indicated, Checkout will accept payments exclusively from Mercado Pago registered users, with card and account balance. |

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
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

----[mco]----
### Differentiated IVA

You can modify the value of the tax for the Dirección de Impuestos y Aduanas Nacionales (DIAN) that applies according to the product or service you offer. If you do not differentiate this value, 19% will be applied by default.

| Attribute | Description |
| --- | --- |
| `type` | Tax identifier. Only IVA is allowed. |
| `value` | Tax amount. A maximum of two decimals is allowed. For items exempt from taxes zero must be reported. |

[[[
```json
===
Use the taxes attribute to define the corresponding value
===
"taxes": [
	{
		"type": "IVA",
		"value": 16
	}
]
```
]]]
------------

----[mla, mlb, mco]----

### Expiration date of cash payment

If you want, you can change the default due date of a cash payment by sending the `date_of_expiration` field in the preference creation request. The configured date must be between 1 and 30 days from the preference creation date.

[[[
```json
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

The deadline for approval of the cash payment is between 1 and 2 working days according to the payment method. Therefore, we recommend that you set the due date with at least 3 days to ensure that payment is made.

Check [credit times by payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_221) when configuring.

> WARNING
>
> Important
>
> If the cash payment is paid after the expiration date, the amount will be refunded to the payer's Mercado Pago account.
------------

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

### Description in the card summary

You can send the name of your business in the attribute _`statement_descriptor`_ in this way in the summary of your payer's card the name of your business is shown and in this way the payer knows where made the purchase.

```json
"statement_descriptor": "MYBUSINESS"
```

> NOTE
>
> Note
>
> Whether the value of the attribute is shown in the summary of your payer's card will depend on the brand of card used.

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
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create preference data with items
preference_data = {
  items: [
    {
      title: 'Mi producto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Mi producto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
// Create the request with multiples items
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My product 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "My product 2",
            Quantity = 2,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 96.56m,
        },
        // ...
    },
};

// Create a client object
var client = new PreferenceClient();

// Create the preference
Preference preference = await client.CreateAsync(request);
```
```python
# Create items in the preference
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Create a preference
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
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

## Accept payments from registered users only

----[mla, mlb]----
You can accept payments with the Mercado Pago wallet exclusively from registered users, with cards, money in account and Mercado Crédito.
------------
----[mlm, mlc, mco, mpe, mlu]----
You can accept payments with the Mercado Pago wallet exclusively from registered users, with cards and money in account.
------------

This allows your customers to have their account information available instantly, such as their saved cards and addresses.

> WARNING
>
> Important
>
> Please note that by adding this option you will not be able to receive payments from users who do not have a Mercado Pago or Mercado Libre account and you will not be able to collect by cash or transfer.

To accept payments from registered users only, add the following attribute to your preferences:

```json
"purpose": "wallet_purchase"
```

In doing so, your preference would be as follows:

```json
{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "My product",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
}
```

## Shipment cost

If you already have estimated shipping from your website, you can define the amount and show it separately from the total when offering payment.

To configure it, add the node `shipments` with the value of the amount you want to charge in the attribute `cost`, and the value `not_specified` in the attribute `mode`.
```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Optimize Ad Conversion

We know it’s important to maximize your ads effectiveness. For this reason, we offer you the choice integrating Checkout Pro with Facebook Ads and Google Ads platforms, in order to associate payments to your campaigns.

----[mla, mlb]----
> NOTE
>
> Note
>
> Only instantly approved payments with credit or debit cards, money in Mercado Pago or with Mercado Credits will be associated.
------------

----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Note
>
> Only instantly approved payments with credit or debit cards, or with money in Mercado Pago will be associated.
------------

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
// Associate your Facebook pixel
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            PixelId = "PIXEL_ID",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===
# Associate your Facebook Pixel
preference_data = {
    # ...
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Add the code in the preference and replace the value PIXEL_ID with your identifier.
===

curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
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

Once set up, you’ll see a `Purchase` event for the specified Pixel everytime a payment is approved through your Checkout Pro.

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
// Associate your tag
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            ConversionId = "CONVERSION_ID",
            ConversionLabel = "CONVERSION_LABEL",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Add the code in the preference and replace the values ​​CONVERSION_ID y CONVERSION_LABEL with your tag data.
===
# Associate your tag
preference_data = {
    # ...
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id": "CONVERSION_ID",
                "conversion_label": "CONVERSION_LABEL"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Add the code in the preference and replace the values ​​CONVERSION\_ID y CONVERSION\_LABEL with your tag data.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
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

Once set up, you’ll see a conversion associated to the configured label everytime a payment is approved through your Checkout Pro.

> NOTE
>
> Note
>
> At the moment, only one label can be configured. For more information about Google Ads conversion tracking tags, visit the [Google's official website](https://support.google.com/google-ads?hl=es-419#topic=7456157).


## Get information about your business

Our [Partners](https://partners.mercadopago.com/) can obtain business metrics. To get business metrics, use `headers` in your preference. You should only add identification codes, as applicable. It is not required to complete the three fields mentioned.

| Header | Code Type | Identifiers |
| --- | --- | --- |
| `x-integrator-id` | Integrator | For developers or agencies that conducted the integration. |
| `x-platform-id` | Platform | For the platforms or modules that offer Mercado Pago in their solutions. |
| `x-corporation-id` | Corporations | For accounts associated with a seller's account or economic group. |

> If you need your `integrator_id` or your` platform_id`, [request your code now](https://docs.google.com/forms/d/1EeO__nZuqHf4cb81NpwtDSybPT7COluSZVrXR4A8F7Q/edit). 

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
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Add identification codes and replace any value that you wish: CORPORATION_ID, INTEGRATOR_ID and PLATFORM_ID.
===
import mercadopago
from mercadopago.config import RequestOptions

request_options = RequestOptions(
    corporation_id="CORPORATION_ID",
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
```curl
===
Add identification codes and replace any value that you wish: CORPORATION\_ID, INTEGRATOR\_ID and PLATFORM_ID.
===
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-corporation-id: CORPORATION_ID \
  -H 'x-integrator-id: INTEGRATOR_ID \
  -H 'x-platform-id: PLATFORM_ID \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
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
To activate the payment option, go to your [business options](https://www.mercadopago.com.ar/settings/my-business) and choose the option _Receive payments with 2 credit cards_.

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
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Customization
>
> Adapt the style of your brand in the buying experience.
>
> [Customization](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/customizations)
