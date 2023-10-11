# Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](/developers/en/reference/preferences/_checkout_preferences/post) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({
	'external_reference': 'teste',
	'items': [
		{
			'id': '4567',
			'title': 'Dummy Title',
			'description': 'Dummy description',
			'picture_url': 'http://www.myapp.com/myimage.jpg',
			'category_id': 'eletronico',
			'quantity': 1,
			'currency_id': 'BRL',
			'unit_price': 100
		}
	],
	'payment_methods': {
		'default_payment_method_id': 'master',
		'excluded_payment_types': [
			{
				'id': 'ticket'
			}
		],
		'excluded_payment_methods': [
			{
				'id': ''
			}
		],
		'installments': 12,
		'default_installments': 1
	}
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

# Search preferences

You can find all the preferences information generated through specific filters or by a specific date range using the SDK below. For details of the request parameters, access the [Search Preferences](/developers/en/reference/preferences/_checkout_preferences_search/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.search({
  sponsor_id: '0',
  external_reference: '',
  site_id: 'MLA',
  marketplace: 'NONE'
}).then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

# Get preference

You can get all payment information for a product or service with the desired preference ID using the SDK below. For details on the request parameters, access the [Get Preference](/developers/en/reference/preferences/_checkout_preferences_id/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
const preference = new Preference(client);

preference.get({ preferenceId: '123456789' })
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

# Update preference

You can update the details of a payment preference using the preference ID. For details of the request parameters, access the [Update Preference](/developers/en/reference/preferences/_checkout_preferences_id/put) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.update({
	id: '123456789',
	updatePreferenceRequest: {
		items: [
			{
				id: '1234',
				title: 'Dummy Title',
				quantity: 1,
				unit_price: 100
			}
		],
	}
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

## Associate Facebook Ads

You can associate the preference with a pixel to track the conversions of Facebook ads. To obtain details about the request parameters, consult the API [Create Preference](/developers/en/reference/preferences/_checkout_preferences/post).

[[[
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
]]]

## Associate Google Ads

You can associate a tag with your preference for tracking Google Ads conversions. For details on request parameters, check the API [Create Preference](/developers/en/reference/preferences/_checkout_preferences/post).

[[[
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
]]]