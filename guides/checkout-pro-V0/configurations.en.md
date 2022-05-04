# Preference configurations

You can adapt the Checkout Pro integration to your business model by setting [preference attributes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb]----
If you offer high-value purchases, for example, you can accept [payments with two credit cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_accept_payments_with_2_credit_cards) or [delete undesired payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_define_the_desired_payment_methods) for your operation.
------------
----[mlm, mlc, mlu, mco, mpe]----
If you offer high-value purchases, for example, you can [exclude undesired payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_define_the_desired_payment_methods) for your operation.
------------

Preference attribute settings also allow you to [obtain business information](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_work_with_business_metrics) and [measure the effectiveness of your ads](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_optimize_your_ad_conversion) on platforms like Facebook and Google.

## Example of complete preference

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

## Define the desired payment methods

By default, all payment methods are offered in Checkout Pro. Through payment preference, you can configure a default payment method to be rendered, delete unwanted ones, or choose a maximum number of installments to be offered.

| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class describing Checkout Pro's payment methods and attributes. |
| `excluded_payment_types` | Method that excludes undesired [payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/payment-methods#bookmark_payment_means_by_country) for your operation, such as credit card, ticket, among others. |
| `excluded_payment_methods` | Method that excludes specific credit and debit card brands, such as Visa, Mastercard, American Express, among others. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value "wallet_purchase" in this method, Checkout Pro will only accept payments from registered users in Mercado Pago, with card and account balance. |

For example:

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
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
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

----[mla, mlb]----

## Accept payments with 2 credit cards

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

You can activate the option to offer payments with two credit cards from the Mercado Pago account.

To activate this payment option, go to [`Business Options`](https://www.mercadopago.com.ar/settings/my-business) and select the option `Receive payments with 2 credit cards`.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)
------------

## Accept payments from registered users only

----[mla, mlb]----
You can accept payments with the Mercado Pago wallet only from registered users, with a credit card, money in account, or Mercado Crédito.
------------
----[mlm, mlc, mco, mpe, mlu]----
You can accept payments with the Mercado Pago wallet only from registered users, with a credit card or money in account.
------------

This allows your customers to have their account information available instantly at the time of payment, such as their pre saved cards and addresses.

> WARNING
>
> Important
>
> By adding this option, you will not be able to receive payments from users who do not have a Mercado Pago or Mercado Livre account, as well as you will not be able to receive payments via cash or transfer.

To accept payments only from registered users, add the following attribute to your preferences:

```json
"purpose": "wallet_purchase"
```

Once you complete the action, your preference should have a structure similar to the example below:

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

----[mco]----
## Modify the DIAN tax rate

You can change the amount allocated to the Dirección de Impuestos y Aduanas Nacionales (DIAN) tax, applied according to the product or service you offer.

If the amount is not modified by you, a 19% fee will be applied by default.

| Preference attribute | Description |
| --- | --- |
| `type` | Tax identifier. This method only allows a `VAT` value. |
| `value` | Tax amount. A maximum of two decimal places is allowed. For tax-exempt items, a zero value (`0`) must be entered. |

For example:

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

## Change the due date for cash payments

You can change the default expiration date for cash payments by sending the `date_of_expiration` field in the preference creation request. The date set by you must be between 1 day and 30 days from the date the payment is issued.

For example:

[[[
```json
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

> NOTE
>
> Note
>
> The crediting period is between one day and two working days, depending on the chosen payment method. Therefore, we recommend setting the expiration date at least three days apart to ensure that payment is made.

Review the [credit times according to each payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_265) to perform the configuration correctly.

> WARNING
>
> Important
>
> If the payment is made after the expiration date, the amount will be refunded in the payer's Mercado Pago account.

------------

## Enable binary mode

You can enable the binary mode if the business model requires payment approval to be instantaneous. This way, the payment can only be approved or declined.

The payment may be pending (if any action is required by the buyer) or processing (if a manual review is required) when the binary mode is disabled. 

To enable it, just set the payment preference's `binary_mode` attribute to `true`:

```json
"binary_mode": true
```

> WARNING
>
> Important
>
> Activating the binary mode simplifies the integration with Checkout Pro, but it can cause a decrease in the percentage rate of approved payments. That is because pending and in-processing payments will automatically be rejected by default. 

## Set an expiration date for your preferences

Set an expiration period for your payment preferences in the `expires`, `expiration_date_from`, and `expiration_date_to` attributes:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

Note that the date must follow the format `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.

## Send description on buyer card invoice

You can add a description for your business via the `statement_descriptor` attribute of the payment preferences, as shown in the example below:

```json
"statement_descriptor": "MYBUSINESS"
```

Depending on the card brand, the description (attribute value) will appear on the buyer's card invoice.

## Set a preference for multiple items

If you need to create a preference for more than one item, you must add them as a list, as shown in the example below:

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
PreferenceClient client = new PreferenceClient();
// Create items in the preference
List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
       .quantity(1)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();

items.add(item1);
items.add(item2);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();
// Save and post the preference
client.create(request);
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

Keep in mind that the total value of the preference will be the sum of the unit price value of each item listed.

## Show shipping cost

If your website already calculates the shipment value, you can display it separately from the total amount at the time of payment.

To configure such a scenario, add the item `shipments` with the value you want to charge in the `cost` attribute and the value `not_specified` in the `mode` attribute:

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Optimize your ad conversion

We know it's important to maximize the effectiveness and findability of your ads.

Therefore, we offer the possibility to integrate Checkout Pro with the Facebook Ads and Google Ads platforms to associate payments to your business campaigns.

----[mla, mlb]----
> NOTE
>
> Note
>
> Only payments approved instantly with credit and debit cards, cash on Mercado Pago or Mercado Credits will be associated.
------------

----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Note
>
> Only payments approved instantly with credit and debit cards, or with cash on Mercado Pago will be associated.
------------

### Integrate Checkout Pro with Facebook Ads

When creating a preference, you can associate it with a pixel (identifier) for tracking Facebook Ads conversions:

[[[
```php
===
Add the following code in the preference and replace the <code>pixel_id</code> value with your identifier.
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
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
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
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
===
  // Create a preference object
PreferenceClient client = new PreferenceClient();

  // Associate your Facebook Pixel
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackFacebook = PreferenceTrackRequest.builder()
   .type("facebook_ad")
   .values(PreferenceTrackValuesRequest.builder().pixelId("PIXEL_ID").build())
   .build();
tracks.add(trackFacebook);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

  // Save and post the preference
client.create(request);
```
```csharp
===
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
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
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
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
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
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

When your action is complete, a `Purchase` event will be associated with the _pixel_ specified in the code everytime a payment forwarded by your ad is approved in Checkout Pro.

> NOTE
>
> Note
>
> For now, it is only possible to configure a single pixel per preference. Test your integration working using the Chrome Facebook Pixel Helper extension. For more information, visit the [official Facebook website](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).

### Integrate Checkout Pro with Google Ads

When creating a preference, you can associate it with a _tag_ (identifier) for tracking Google Ads conversions:

[[[
```php
===
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
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
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
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
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
===
  // Create a preference object
PreferenceClient client = new PreferenceClient();

  // Associate your tag
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackGoogle =
   PreferenceTrackRequest.builder()
       .type("google_ad")
       .values(
           PreferenceTrackValuesRequest.builder()
               .conversionId("CONVERSION_ID")
               .conversionLabel("CONVERSION_LABEL")
               .build())
       .build();
tracks.add(trackGoogle);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

  // Save and post the preference
client.create(request);
```
```csharp
===
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
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
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
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
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
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

When your action is complete, a conversion will be associated with the specified tag everytime a payment forwarded for your ad is approved.

> NOTE
>
> Note
>
> For now, it is only possible to configure a single tag per preference. For more information about Google Ads conversion tags, visit the [official Google website](https://support.google.com/google-ads?hl=es-419#topic=7456157).

## Work with business metrics

Our certified members in the [Dev Program](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) can obtain business metrics from Checkout Pro.

Use headers in your payment preference to work with metrics, adding the identification code according to the desired scenario (it is not mandatory to complete the three fields mentioned below):

| _Header_ | Code Type | Identifier |
| --- | --- | --- |
| `x-integrator-id` | Integrator | For programmers or agencies that perform the integration. |
| `x-platform-id` | Platform | For platforms or modules that offer Mercado Pago in their solutions. |
| `x-corporation-id` | Corporations | For accounts associated with a seller account or an economic group. |

> NOTE
>
> Note
>
> Remember to add the `integrator_id` it to your integrations to receive additional benefits of the program. You can find your `integrator_id` in your developer [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/dashboard/introduction).

[[[
```php
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
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
Add the identification codes and replace the values according to the desired scenario: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
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

----

### Next step

> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Optimize your integration with Checkout Pro and improve the management of your sales.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration)

