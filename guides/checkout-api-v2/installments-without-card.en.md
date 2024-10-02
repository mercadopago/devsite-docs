----[mla, mlb]----
# Installments without card

------------
----[mlm]----
# Compra ahora, paga después

------------
----[mlb]----
**Linha de Crédito** is Mercado Pago’s financing method that allows paying in installments without having a card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.

------------
----[mlm]----
**Meses sin Tarjeta** is Mercado Pago’s financing method that allows paying in installments without having a card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.

------------
----[mla]----
**Cuotas sin Tarjeta** is Mercado Pago’s financing method that allows paying in installments without having a card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.

------------
----[mlb]----
> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to configure **installments without card** using the **Wallet Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) documentation of Wallet for more details.

Follow the steps below to offer installments without card in your store.

------------
----[mla]----
> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to configure **Cuotas sin Tarjeta** using the **Wallet Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) documentation of Wallet for more details.

Follow the steps below to offer installments without card in your store.

------------
----[mlm]----
> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to configure **installments without card** using the **Wallet Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) documentation of Wallet for more details.

Follow the steps below to offer Meses sin Tarjeta in your store.

------------
## Integration configuration

> SERVER_SIDE
>
> h3
>
> Create preference

Preference is a set of information about a product and/or service that allow you to define the name, payment method, as well as other settings related to the defined payment flow.

The first step to configure payments with ----[mlb]---- Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------ is to create the preference. To do so, send a POST with the `purpose` parameter and the `onboarding_credits` value to the **endpoint** [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, use the SDK below.

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

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

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

Next, initialize the integration by setting your [public key](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials) using the following code.

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

Once this is done, you need to create a container to define the location where the button will be inserted on the screen. The container is created by inserting an element into the HTML code of the page where the component will be rendered.

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
  customization: {
    texts: {
      valueProp: "convenience",
    },
  },
});

```
]]]

----[mlb]----
Done! After completing the steps described above, the payment button will be displayed on the screen and you will have finished the integration. Follow the steps below to explain to your customers how Linha de Crédito works.

1. [Create an account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) or sign in to Mercado Pago. If you use **Mercado Livre**, you already have this account!
2. Select **Linha de Crédito** and choose how many times you want to pay
3. Pay the installments every month as you prefer, in the **Mercado Pago app**.

------------
----[mlm]----
Done! After completing the steps described above, the payment button will be displayed on the screen and you will have finished the integration. Follow the steps below to explain to your customers how Meses sin Tarjeta o works.

1. [Create an account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) or sign in to Mercado Pago. If you use **Mercado Livre**, you already have this account!
2. Select **Meses sin Tarjeta** and choose how many times you want to pay
3. Pay the installments every month as you prefer, in the **Mercado Pago app**.

------------
----[mla]----
Done! After completing the steps described above, the payment button will be displayed on the screen and you will have finished the integration. Follow the steps below to explain to your customers how Cuotas sin Tarjeta works.

1. [Create an account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) or sign in to Mercado Pago. If you use **Mercado Livre**, you already have this account!
2. Select **Cuotas sin Tarjeta** and choose how many times you want to pay
3. Pay the installments every month as you prefer, in the **Mercado Pago app**.

------------