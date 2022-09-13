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

Checkout Pro's integration with Facebook Ads is done using the Preferences API by adding the `pixel_id` of your ads or through our SDKs.

To integrate Checkout Pro with Facebook Ads via API, follow the steps below or, if you prefer, use one of the codes available below.


1. Send a POST with the parameter "tracks" with the attributes `type` and `values` to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post).
2. In `type` enter `facebook_ad`.
3. In `value` enter the Pixel ID, which can be found in the Facebook ad management panel.
4. Execute the request.

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
```curl
===
Add the code in the preference and replace the <code>pixel_id</code> value with your identifier.
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
"title":"My product"
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


When finishing the configuration, a `Purchase` event will be associated with the specified pixel when a payment forwarded by your ad is approved.


> NOTE
>
> Important
>
> It is only possible to configure a single pixel per preference. Test how your integration works using the Facebook Pixel Helper Chrome extension. For more information, visit the [official Facebook website](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


## Google Ads

Checkout Pro's integration with Google Ads is done through the Preferences API by sending the Google Ads account identification information in the `tracks` parameter in the request body or through our SDKs.

To integrate Checkout Pro with Google Ads via API, follow the steps below or, if you prefer, use one of the codes available below.


1. Send the `tracks` parameter with the `type`, `conversion_id` and `conversion_label` attributes to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post).
2. In `type`, enter `google_ad`.
3. Under `CONVERSION_ID` and `CONVERSION_LABEL`, enter your Conversion ID and Conversion Label available in your Google Analytics account.
4. Execute the request.


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
```curl
===
Add the code to the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with your _tag_ data.
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
"title":"My product"
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



Once setup is complete, a conversion will be associated with the specified tag when a payment forwarded by your ad is approved.


> NOTE
>
> Important
>
> It is only possible to configure a single tag per preference. For more information about Google Ads conversion tags, visit the [official Google website](https://support.google.com/google-ads?hl=es-419#topic=10286612).
