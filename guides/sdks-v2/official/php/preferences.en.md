# Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preferences](/developers/en/reference/preferences/_checkout_preferences/post) API.

[[[
 ```php
<?php
  $client = new PreferenceClient();
  $preference = $client->create([
    "external_reference" => "teste",
    "items"=> array(
      array(
        "id" => "4567",
        "title" => "Dummy Title",
        "description" => "Dummy description",
        "picture_url" => "http://www.myapp.com/myimage.jpg",
        "category_id" => "eletronico",
        "quantity" => 1,
        "currency_id" => "BRL",
        "unit_price" => 100
      )
    ),
    "payment_methods" => [
    "default_payment_method_id" => "master",
    "excluded_payment_types" => array(
      array(
        "id" => "ticket"
      )
    ),
    "installments"  => 12,
    "default_installments" => 1
  ]);
?>
```
]]]

# Search preferences

You can find all the preferences information generated through specific filters or by a specific date range using the SDK below. For details of the request parameters, access the [Search Preferences](/developers/en/reference/preferences/_checkout_preferences_search/get) API.

[[[
```php
<?php
  $client = new PreferenceClient();

  $search_request = new MPSearchRequest(1, 0, [
    "sponsor_id" => "0",
    "external_reference" => "",
    "site_id" => "MLA",
    "marketplace" => "NONE"
  ]);
  $client->search($search_request);
?>
```
]]]

# Get preference

You can get all payment information for a product or service with the desired preference ID using the SDK below. For details on the request parameters, access the [Get Preference](/developers/en/reference/preferences/_checkout_preferences_id/get) API.

[[[
```php
<?php
  $client = new PreferenceClient();
  $client->get("123456789");
?>
```
]]]

# Update preference

You can update the details of a payment preference using the preference ID. For details of the request parameters, access the [Update Preference](/developers/en/reference/preferences/_checkout_preferences_id/put) API.

[[[
```php
<?php
  $client = new PreferenceClient();

  $preference = $client->update('123456789', [
    "items"=> array(
        array(
            "id" => "4567",
            "title" => "Dummy Title",
            "quantity" => 1,
            "unit_price" => 100
       )
    ),
  ]);

?>
```
]]]

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