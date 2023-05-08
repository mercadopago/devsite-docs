# Mercado Pago Account

The option to pay with Mercado Pago Wallet, by default, is presented in all Mercado Pago Checkouts in combination with guest user payments (no login).

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate card payments through the **React SDK**. See the [JS SDK - React](/developers/en/docs/sdks-library/client-side/sdk-js-react-installation) documentation for more information.

This option allows users registered in Mercado Pago and/or Mercado Livre to log in and use the available methods to make their payments, in addition to being able to include new payment options, such as credit cards.

It is possible to pay with **card**, **available balance** and **Mercado Crédito** in a safe and optimized environment, increasing the chances of converting sales, in addition to allowing the seller to only offer payments with wallet. With this, the option to pay without logging in will not exist, however, it will contribute to an increase in the conversion of payments.

> WARNING
>
> Important
>
> By adding this option, it will not be possible to receive payments from users not registered in Mercado Pago, as well as you will not be able to receive payments via cash or bank transfer.

Follow the steps below to configure the Mercado Pago Wallet as a payment method.

> SERVER_SIDE
>
> h2
>
> Create preference

If you are a user and want all your payments to be made via Wallet, you can determine this via an attribute in the preferences API. To create a preference, use one of the SDKs below.

> In addition to the SDKs, it is also possible to create a preference through the preferences API. For that, send a **POST** with the parameter `purpose` and the value `wallet_purchase` to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, use one of the SDKs below.


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

After creating the preference in the backend, it will be necessary to install the Mercado Pago frontend SDK to the project to add the payment button.

The installation is done in **two steps**: **including the Mercado Pago SDK** to the project with its configured credentials and **initiating checkout** from the preference generated previously. To do this, follow the steps listed below.

1. To include the MercadoPago.js SDK, add the code below to the project's HTML or install it via NPM as indicated in the examples below.


[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js

```
]]]

Next, initialize the integration by setting your [public key](/developers/en/docs/checkout-pro/additional-content/credentials) using the following code.

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";


await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

Once this is done, it is necessary to create a container to define the location where the button will be inserted on the screen. The container is created by inserting an element into the HTML code of the page where the component will be rendered.

> NOTE
>
> Important
>
> The value displayed below in the **ID property** is just an example and can be changed, but it must always match the ID indicated in the rendering step.

[[[
```html
<div id="wallet_container"></div>

```
]]]

2. After completing the previous step, initialize your checkout using the ID of the preference previously created with the identifier of the element where the button should be displayed.

[[[
```javascript
mp.bricks().create("wallet", "wallet_container", {
  initialization: {
    preferenceId: "<PREFERENCE_ID>",
  },
});

```
]]]

When creating a payment it is possible to receive 3 different statuses: `Pending`, `Rejected` and `Approved`. To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/checkout-api/additional-content/notifications/introduction) for more details.

