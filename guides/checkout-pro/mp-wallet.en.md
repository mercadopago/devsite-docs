# Mercado Pago Wallet

The option to pay with Mercado Pago Wallet, by default, is presented in all Mercado Pago Checkouts in combination with guest user payments (no login).

This option allows users registered in Mercado Pago and/or Mercado Livre to log in and use the available methods to make their payments, in addition to being able to include new payment options, such as credit cards.

----[mco, mpe, mlu, mlc]----
It is possible to pay with **card** and **available balance** in a safe and optimized environment, increasing the chances of converting sales, in addition to allowing the seller to only offer payments with wallet. With this, the option to pay without logging in will not exist, however, it will contribute to an increase in the conversion of payments. 

------------
----[mla, mlm]----
It is possible to pay with **card**, **available balance** and **installments without card** in a safe and optimized environment, increasing the chances of converting sales, in addition to allowing the seller to only offer payments with wallet. With this, the option to pay without logging in will not exist, however, it will contribute to an increase in the conversion of payments. 

------------
----[mlb]----
It is possible to pay with **card**, **available balance**, **Pix** and **installments without card** in a safe and optimized environment, increasing the chances of converting sales, in addition to allowing the seller to only offer payments with wallet. With this, the option to pay without logging in will not exist, however, it will contribute to an increase in the conversion of payments. 

------------

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
   $client = new PreferenceClient();
   $preference = $client->create([
          "items"=> array(
            array(
              "title" => "My product",
              "description" => "Test product",
              "picture_url" => "http://i.mlcdn.com.br/portaldalu/fotosconteudo/48029_01.jpg",
              "category_id" => "electronics",
              "quantity" => 1,
              "currency_id" => "BRL",
              "unit_price" => 100
            )
          )
  ]);
  echo implode($preference);
?>
```
```node
===
Wallet mode works by adding the _purpose_ attribute to the preference.
===
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
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

The steps to configure the Mercado Pago Wallet (*client-side*) are the same as those presented [in this section](/developers/en/docs/checkout-pro/integrate-preferences).