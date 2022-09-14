# Ads conversion

The ads conversion analysis makes it possible to evaluate the relevance and return of the created ads. Therefore, Checkout Pro offers integration with Facebook Ads and Google Ads platforms, allowing you to associate payments with business campaigns.

----[mla, mlb]----

> NOTE
>
> Important
>
> Only payments approved instantly with credit and debit cards, cash in Mercado Pago or Mercado Créditos will be associated.
------------


----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Note
>
> Only payments approved instantly with credit and debit cards, or with cash on Mercado Pago will be associated.
------------


## Facebook Ads

When creating a preference, you can associate it with a pixel (identifier) for tracking Facebook Ads conversions. Checkout Pro's integration. 

To integrate Checkout Pro with Facebook Ads, use one of the SDKs available below.

> In addition to the SDKs, it is also possible to integrate Facebook Ads with Checkout Pro through the preferences API. For that, send the `track` parameter with the `type` and `values` attributes informing your *facebook_id* and the *pixel ID* respectively to the [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences) endpoint /post) and execute the request.

[[[
```php
===
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
===
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Associate your Facebook pixel
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
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
===
// Create a preference object
var preference = {

// Associate your Facebook pixel
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
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
===
// Create a preference object
PreferenceClient client = new PreferenceClient();

// Associate your Facebook pixel
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackFacebook = PreferenceTrackRequest.builder()
.type("facebook_ad")
.values(PreferenceTrackValuesRequest.builder().pixelId("PIXEL_ID").build())
.build();
tracks.add(trackFacebook);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

Preference preference = new Preference()
.appendTrack(trackFacebook);

// Save and post the preference
client.create(request);
```
```csharp
===
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
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
tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
===
# Associate your Facebook pixel
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
]]]


When finishing the configuration, a `Purchase` event will be associated with the specified pixel when a payment forwarded by your ad is approved.


> NOTE
>
> Important
>
> It is only possible to configure a single pixel per preference. Test how your integration works using the Facebook Pixel Helper Chrome extension. For more information, visit the [official Facebook website](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


## Google Ads

When creating a preference, you can associate it with a tag (identifier) for tracking Google Ads conversions. 

To integrate Checkout Pro with Google Ads, use one of the SDKs available below.

> In addition to the SDKs, it is also possible to integrate Google Ads with Checkout Pro through the preferences API. For that, send the `tracks` parameter with the `type`, `conversion_id` and `conversion_label` attributes informing your *conversion_id* and the *conversion label* available in your Google account to the endopoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request.

[[[
```php
===
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
===

<?php
// Create a preference object
$preference = new MercadoPago\Preference();
 
// Associate your Google ads tag
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
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
===
// Create a preference object
var preference = {
 
// Associate your Google ads tag
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
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
===
// Create a preference object
PreferenceClient client = new PreferenceClient();

// Associate your Google ads tag
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
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
===
// Associate your Google ads tag
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
tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
===
# Associate your Google ads tag
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
]]]


Once setup is complete, a conversion will be associated with the specified tag when a payment forwarded by your ad is approved.


> NOTE
>
> Important
>
> It is only possible to configure a single tag per preference. For more information about Google Ads conversion tags, visit the [official Google website](https://support.google.com/google-ads?hl=es-419#topic=10286612).
