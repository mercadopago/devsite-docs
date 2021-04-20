# Receive payments by Mercado Pago wallet

Add in your integration the Checkout Pro wallet mode, so that **you receive payments only from Mercado Pago registered users with their cards and available balance**.

This means that your customers have more ways to pay you and can access better benefits, without changing the dynamics of your Checkout API.

----[mla, mlm, mlc, mco, mpe, mlu]----
![Checkout-Wallet](/images/web-payment-checkout/cho-wallet-landing.png)
------------
----[mlb]----
![Checkout-Wallet](/images/web-payment-checkout/cho-wallet-landing-pt.png)
------------

## Benefits of Mercado Pago wallet

* Your customers can pay you with more payment methods and faster:
  * **With saved credit or debit cards** in their Mercado Pago account, saving the effort of entering a card from the beginning. They also have their **addresses saved**, which simplifies the whole information entering process.
  * **With balance available in Mercado Pago** they have the money ready to be used on the spot, in just 1 click.
----[mla]----
* Your clients can pay you in up to 12 installments without using a credit card, being financed by [Mercado Crédito](https://www.mercadolibre.com.ar/mercado-credito/meses-sin-tarjeta/).
------------
----[mlb]----
* Your clients can pay you in up to 12 installments without using a credit card, being financed by [Mercado Crédito](https://www.mercadolibre.com.br/mercado-credito/meses-sin-tarjeta/).
------------
* Your checkout conversion improves by offering more dynamic and easy-to-use payment methods.
* Improve approval of your payments with less risk of fraud.

## How to add the wallet on your website

You need to integrate [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction) setup as [wallet mode](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_accept_payments_from_registered_users_only) to add the Mercado Pago wallet to your website.

To integrate it, you need to [generate the payment preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/integration#bookmark_steps_to_integrate) with the information of the product or service you want to offer and add the payment option on your website. 

### Steps to integrate the wallet

> SERVER_SIDE
>
> h4
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Generate your preference

To start, you need to generate your payment preference from your backend with the [Mercado Pago SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/previous-requirements#bookmark_always_use_our_libraries) you used in your Checkout API. 

[[[
```php
===
The wallet mode works by adding the _purpose_ attribute to the preference.
===
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
===
The wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ],
  purpose: 'wallet_purchase'
};

mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
===
The wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create a preference object
Preference preference = new Preference();

// Create a preference item
Item item = new Item();
item.setTitle("My Item")
    .setQuantity(1)
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.setPurpose("wallet_purchase");
preference.save();
```
```ruby
===
The wallet mode works by adding the _purpose_ attribute to the preference.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create a preference object
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1
    }
  ],
  purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
===
The wallet mode works by adding the _purpose_ attribute to the preference.
===
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
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
            "title": "My Item",
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
The wallet mode works by adding the _purpose_ attribute to the preference.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "My Item",
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
> The value of `unit_price` must be an integer.

------------
<span></span>

> CLIENT_SIDE
>
> h4
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Add the checkout to your website

Then, from your frontend, add the following code to display the Checkout Pro Wallet Mode payment button where you want it to appear.

[[[
```php
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>"
  data-button-label="Pay with Mercado Pago"
  data-button-type="wallet">
</script>
```
```node
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= global.id %>"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```java
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="${preference.id}"
  data-button-label="Pay with Mercado Pago"
  data-button-type="wallet">
</script>
```
```ruby
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= @preference_id %>"
  data-button-label="Pay with Mercado Pago"
  data-button-type="wallet">
</script>
```
```csharp
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="@Html.DisplayFor(model => model.id)"
  data-button-label="Pay with Mercado Pago"
  data-button-type="wallet">
</script>
```
```python
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="{{ preference_id }}"
  data-button-label="Pay with Mercado Pago"
  data-button-type="wallet">
</script>
```
]]]

> WARNING
>
> Important
>
> This documentation uses the old library version. To see the new version, go to [Receive payments by Mercado Pago wallet section with MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/wallet-integration).

For more information on each attribute, please check the [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post). 

Done! You already have the Mercado Pago wallet integrated on your website. 

> WARNING
>
> Important
>
> To test it, don't forget to log in from another browser or log out from your Mercado Pago account, as you can't pay yourself.<br/> 

---

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced Checkout Pro Integration
>
> Optimize your wallet integration to improve your sales management.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test the wallet
>
> Make sure everything is ok in your integration with the test users.
>
> [Tests](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)
