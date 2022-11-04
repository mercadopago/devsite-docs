# Installments without credit card

Mercado Pago’s card-free installment option is called **Mercado Crédito** and is a proprietary financing method that allows you to pay in up to 12 installments.

By offering this option in your store, your customers will be able to buy a product today and pay in installments later. For your business, approval of the purchase is immediate and guaranteed, with the total amount being credited in advance and your customers paying us later.

Follow the steps below to offer installments without card in your store.

## Prerequisites 

To perform a Card Payment Brick integration, you must meet the requirements listed below.

| Requirements | Description | 
|---|---|
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/checkout-bricks/additional-content/dashboard/introduction) for more information on how to create an application. |
| Mercado Pago or Mercado Libre seller account | To integrate Card Payment Brick, you need a seller account on Mercado Pago or Mercado Libre. If not, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create. |
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
> Add button at checkout

With the preference created, it is necessary to display the payment button that will allow the buyer to use Mercado Crédito as a means of payment. To display the payment button, insert the code below directly into your project.

```html
<div class="cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('PUBLIC_KEY');

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Em até 12x sem cartão com Mercado Pago',
      type: 'credits',
    }
  });
</script>
```

### Suggestions for use and best practices

To offer the best experience to your customers using Mercado Crédito, we suggest:

* Use capital letters in the initials of the brand: Mercado Pago
* Keep the Mercado Pago logo
* Maintain the value proposition of installments without a card
* Maintain alignment and spaces of button elements

To better explain to your customers how Mercado Crédito works, share the following steps with them.

1. Create an account or sign in to Mercado Pago. If you use **Mercado Livre**, you already have this account!
2. Select **Mercado Crédito** and choose how many times you want to pay
3. Ready! Pay the installments every month as you prefer, in the **Mercado Pago app**.