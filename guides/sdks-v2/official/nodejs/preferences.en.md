## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------

----[mlc, mco]----

[[[
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------

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

You can associate a tag with your preference for tracking Google Ads conversions. For details on request parameters, check the API [Create Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).

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