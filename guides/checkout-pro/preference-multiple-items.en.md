# Preference for multiple items

If you need to create a preference for more than one item, you must add them as a list. Use the codes below to create a preference for multiple items.

[[[
```php
<?php
# Create a preference object
$preference = new MercadoPago\Preference();
# Create items in preference
$item1 = new MercadoPago\Item
$item1->title = "Test Item 1";
$item1->quantity = 2;
$item1->unit_price = 11.96;

$item2= new MercadoPago\Item
$item2->title = "Test Item 2";
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
{ title: 'My product',
quantity: 1,
currency_id: '[FAKER][CURRENCY][ACRONYM]',
unit_price: 75.56 },
	{ title: 'My Product 2',
quantity: 2,
currency_id: '[FAKER][CURRENCY][ACRONYM]',
unit_price: 96.56 }
]
};
// Create a payment button on your website
Mercadopago.preferences.create(preference)
.then(function(preference){
// This value will replace the string "$$init_point$$" in your HTML
global.init_point = preference.body.init_point;
}).catch(function(error){
console.log(error);
});
```
```java
// Create a preference object
PreferenceClient client = new PreferenceClient();
// Create items in preference
PreferenceClient client = new PreferenceClient();

List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
PreferenceItemRequest.builder()
.id("1234")
.title("Product 1")
.quantity(2)
.currencyId("BRL")
.unitPrice(new BigDecimal("100"))
.build();
PreferenceItemRequest item2 =
PreferenceItemRequest.builder()
.id("12")
.title("Product 2")
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
title: 'My product 1',
quantity: 1,
currency_id: '[FAKER][CURRENCY][ACRONYM]',
unit_price: 75.56
},
{
title: 'My Product 2',
quantity: 2,
currency_id: '[FAKER][CURRENCY][ACRONYM]',
unit_price: 96.56
}
]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```python
# Create items in preference
preference_data = {
"items": [
{
"title": "My product",
"quantity": 1,
"unit_price": 75.56
},
{
"title": "My product2",
"quantity": 2,
"unit_price": 96.56
}
]
}

# Create the preference
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```csharp
// Create the request with multiple items
var request = new PreferenceRequest
{
Items = new List<PreferenceItemRequest>
{
new PreferenceItemRequest
{
Title = "My Product 1",
quantity = 1,
CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
UnitPrice = 75.56m,
},
new PreferenceItemRequest
{
Title = "My Product 2",
quantity = 2,
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
		"title":"My product"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"title":"My product 2"
	}
]
}'
```
]]]


> WARNING
>
> Important
>
> The total value of the preference will be the sum of the price value of each item listed.
