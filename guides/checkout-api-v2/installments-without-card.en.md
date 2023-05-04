# Installments without credit card

Mercado Pago’s card-free installment option is called **Mercado Crédito** and is a proprietary financing method that allows you to pay in up to 12 installments.

By offering this option in your store, your customers will be able to buy a product today and pay in installments later. For your business, approval of the purchase is immediate and guaranteed, with the total amount being credited in advance and your customers paying us later.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate card payments through the **React SDK**. See the [JS SDK - React](/developers/en/docs/sdks-library/client-side/sdk-js-react-installation) documentation for more information.

Follow the steps below to offer installments without card in your store.

## Prerequisites 

To perform a Card Payment Brick integration, you must meet the requirements listed below.

| Requirements | Description | 
|---|---|
| Mercado Pago or Mercado Libre seller account | To integrate you need a seller account on Mercado Pago or Mercado Libre. If not, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create. |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/checkout-bricks/additional-content/dashboard/introduction) for more information on how to create an application. |
| Credentials | Unique passwords with which we identify an integration in your account. To perform the integrations, you will need the _Public key_ and the _Access Token_. [Click here](/developers/en/guides/additional-content/credentials/credentials) for more information. |
| Install the Mercado Pago SDK | Install the official SDKs to simplify your integration with our [APIs](/developers/en/reference/payments/_payments/post). For more information, [click here](/developers/en/docs/sdks-library/landing). |

If all prerequisites have been met, follow the next steps to integrate installments without credit card.

## Integration configuration

> SERVER_SIDE
>
> h3
>
> Create preference

Preferences are sets of information about a product and/or service that allow you to define the name, payment method, as well as other settings related to the defined payment flow.

The first step to configure payments with Mercado Crédito is to create the preference. To do so, send a POST with the `purpose` parameter and the `onboarding_credits` value to the **endpoint** [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, use the SDK below.

[[[
```php
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create an item in the preference
$item = new MercadoPago\Item();
$item->title = 'My product';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'onboarding_credits';
$preference->save();
?>
```
```node
// Create a preference object
let preference = {
items: [
{
title: 'My product',
unit_price: 100,
quantity: 1,
}
],
purpose: 'onboarding_credits'
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
PreferenceRequest.builder().items(items).purpose("onboarding_credits").build();

client.create(request);
```
```ruby
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
purpose: 'onboarding_credits'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value will replace the string "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
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
Purpose = "onboarding_credits",
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
"purpose": "onboarding_credits"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "onboarding_credits"
}'
```
]]]

> CLIENT_SIDE
>
> h3
>
> Add checkout

After creating the preference in the backend, it is necessary to install the Mercado Pago frontend SDK to the project to add the payment button.

The installation is done in **two steps**: **including the Mercado Pago SDK** to the project with its configured credentials and **initiating the checkout** from the preference generated previously.

1. To include the MercadoPago.js SDK, add the following to the project's HTML or install it via NPM as indicated in the examples below.

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

2. Next, initialize the integration by setting your [public key](/developers/es/docs/checkout-api/additional-content/credentials) using the following code.

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

3. Once this is done, you need to create a container to define the location where the button will be inserted on the screen. The container is created by inserting an element into the HTML code of the page where the component will be rendered.

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

4. After completing the previous step, initialize your checkout using the ID of the preference previously created with the identifier of the element where the button should be displayed.

[[[
```javascript
mp.bricks().create("wallet", "wallet_container", {
  initialization: {
    preferenceId: "<PREFERENCE_ID>",
  },
  customization: {
    texts: {
      valueProp: "convenience",
    },
  },
});

```
]]]



Done! After completing the steps described above, the payment button will be displayed on the screen and you will have finished the integration. Follow the steps below to explain to your customers how Mercado Crédito works.

1. [Create an account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) or sign in to Mercado Pago. If you use **Mercado Livre**, you already have this account!
2. Select **Mercado Crédito** and choose how many times you want to pay
3. Pay the installments every month as you prefer, in the **Mercado Pago app**.