# Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preferences](/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
 ```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';
// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
// Create a preference object
$preference = new MercadoPago\Preference();
// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------

----[mlc, mco]----

[[[
 ```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';
// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
// Create a preference object
$preference = new MercadoPago\Preference();
// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------

## Associate Facebook Ads

You can associate the preference with a pixel to track the conversions of Facebook ads. To obtain details about the request parameters, consult the API [Create Preference](developers/en/reference/preferences/_checkout_preferences/post).

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
]]]

## Associate Google Ads

You can associate a tag with your preference for tracking Google Ads conversions. For details on request parameters, check the API [Create Preference](/developers/pt/reference/preferences/_checkout_preferences/post).

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
]]]