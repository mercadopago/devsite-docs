# Mercado Pago Wallet

The Mercado Pago Wallet is a payment method that allows you to accept payments only from registered users. By offering this option, users will be able to pay by card, available balance and Mercado Crédito.


> WARNING
>
> Important
>
> By adding this option, it will not be possible to receive payments from users who are not registered in Mercado Pago, as well as you will not be able to receive payments via cash or bank transfer.


Follow the steps below to configure the Mercado Pago Wallet as a payment method.


> SERVER_SIDE
>
> h2
>
> Create preference


The first step to configure payments with Mercado Pago Wallet is to create the preference. To do this, send a **POST** with the `purpose` parameter and the `wallet_purchase` value to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, use one of the SDKs below.



[[[
```php
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create an item in the preference
$item = new MercadoPago\Item();
$item->title = 'My product';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create a preference object
let preference = {
items: [
{
title: 'My product',
unit_price: 100,
quantity: 1,
}
],
purpose: 'wallet_purchase'
};

Mercadopago.preferences.create(preference)
.then(function(response){
// This value will replace the string "<%= global.id %>" in your HTML
global.id = response.body.id;
}).catch(function(error){
console.log(error);
});
```
```java
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create a preference object
PreferenceClient client = new PreferenceClient();

// Create an item in the preference
PreferenceItemRequest item =
PreferenceItemRequest.builder()
.title("My product")
.quantity(1)
.unitPrice(new BigDecimal("75"))
.build();

List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);

PreferenceRequest request =
PreferenceRequest.builder().items(items).purpose("wallet_purchase").build();

client.create(request);
```
```ruby
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create a preference object
preference_data = {
items: [
{
title: 'My product',
unit_price: 100,
quantity: 1
}
],
purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value will replace the string "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create the preference request object
var request = new PreferenceRequest
{
Items = new List<PreferenceItemRequest>
{
new PreferenceItemRequest
{
Title = "My product,
quantity = 1,
CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
UnitPrice = 75m,
},
},
Purpose = "wallet_purchase",
};
// Create the preference
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
"items": [
{
"title": "My product",
"unit_price": 100,
"quantity": 1
}
],
"purpose": "wallet_purchase"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
-d '{
"items": [
{
"title": "My product",
"quantity": 1,
"unit_price": 75
}
],
"purpose": "wallet_purchase"
}'
```
]]]

----[mlc, mco]----

> WARNING
>
> Important
>
> The `unit_price` value must be an integer.
------------

> CLIENT_SIDE
>
> h2
>
> Add checkout


With the preference created, it is necessary to display the payment button that will allow the buyer to use the Mercado Pago Wallet as a payment method. To display the payment button, use the HTML below.



[[[
```html
<div class=".cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
const mp = new MercadoPago('PUBLIC_KEY');

async function createPreference() {
try {
const response = await fetch("/process_payment");
const { id } = await response.json();
mp.checkout({
preference: {
id
},
render: {
container: '.cho-container',
label: 'Pay with Mercado Pago',
type: 'wallet',
}
});
} catch(error) {
console.error(error);
}
}

createPreference();
</script>
```
]]]

> WARNING
>
> Importante
>
> When creating a payment it is possible to receive 3 different statuses: "Pending", "Rejected" and "Approved". To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/checkout-api/additional-content/notifications/introduction) for more details.


> PREV_STEP_CARD_EN
>
> Prerequisites
>
> See the necessary prerequisites to integrate Checkout API.
>
> [Integrate Checkout API](/developers/en/docs/checkout-api/prerequisites)


> NEXT_STEP_CARD_EN
>
> Integration test
>
> Learn how to test the Checkout API integration in your store.
>
> [Integration Test](/developers/en/docs/checkout-api/integration-test/make-test-purchase)
