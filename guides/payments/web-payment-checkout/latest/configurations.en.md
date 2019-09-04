---
sites_supported:
  - mla
  - mlb
---

# Other functionalities

> INDEX
>
> In this page
>
>
>
> [Example of a complete preference](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_example_of_a_complete_preference)
>
> [Attributes for preference](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_attributes_for_preference)

You can adapt the integration to your business by adding attributes in the preference. There is a lot of [details in a preference](https://www.mercadopago.com.ar/developers/en/reference/preferences/resource/) that can be set, but always keep in mind what your business needs.


If you offer purchases of high amounts, for example, you can accept [payments with two credit cards](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) or, also, [exclude payment methods](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) that you do not want to accept.

## Example of a complete preference

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "ARS",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descripción del Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "Juan",
        "surname": "Lopez",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

## Attributes for the preference

### Definition of Payment Methods

By default, all payment methods are offered. If you want to exclude any, it can be done from the payment preference.
You can also set a payment method to appear by default or define the maximum number of installments to offer.


Attribute | Description
------------ | -------------
_`payment_methods`_ | Class that describes the attributes and methods of payment methods.
_`excluded_payment_methods`_ | Method that excludes by specific payment methods: Visa, Mastercard or American Express, among others.
_`excluded_payment_types`_ | Method that excludes by type of payment method: cash, credit or debit cards.
_`installments`_ | Method that defines the amount of maximum number of installments to offer.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
// ...
$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);
// ...
?>
```
```node
var preference = {}
preference = {
//...
"payment_methods": {
    "excluded_payment_methods": [
        {
            "id": "master"
        }
    ],
    "excluded_payment_types": [
        {
            "id": "ticket"
        }
    ],
    "installments": 12
	}
//...
}
```
```java
Preference preference = new Preference();
//...
PaymentMethods paymentMethods = new PaymentMethods();
paymentMethods.setExcludedPaymentMethods("master", "amex");
paymentMethods.setExcludedPaymentTypes("ticket");
paymentMethods.setInstallments(12);

preference.setPaymentMethods(paymentMethods);
//...
```
```ruby
preference = MercadoPago::Preference.new
#...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
#...
```
```csharp
Preference preference = new Preference();

PaymentMethods paymentmethods = new PaymentMethods();

List<PaymentMethod> excludedPaymentMethod = new List<PaymentMethod>();
excludedPaymentMethod.Add(new PaymentMethod()
  {
    Id = "master"
  });    
paymentmethods.excludedPaymentType = excludedPaymentMethod;

List<PaymentType> ExcludedPaymentType = new List<PaymentType>();
excludedPaymentType.Add(new PaymentType()
  {
    Id = "ticket"
  });
paymentmethods.ExcludedPaymentTypes = excludedPaymentType;
paymentmethods.Installments = 12;
```
]]]

## Binary Mode

You can activate the binary mode if the business model requires payment approval to be instantaneous. This way, payment can only be approved or declined.

In case the binary mode is not activated, the payment may be pending (in case of requiring any action by the buyer) or in process (if a manual review is necessary).

To activate it, you only have to set the _`binary_mode`_ attribute of the payment preference to `true`:

```json
"binary_mode": true
```

## Validity of Preferences

If you want to enable the payment of a preference with a certain duration, you can activate a period of validity or complete directly with the following attributes:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

## Sponsor ID

The `sponsor_id` attribute is an identifier of the developer or software company that performs the Smart Checkout integration, this data is visible in the preference and in the payment.

```json
"sponsor_id": 123456789
```

## Payments with Two Credit Cards

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

You can enable the option to offer to pay with two credit cards from the Mercado Pago account.
To activate the payment option, go to your <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank">business options</a> and choose the option _Receive payments with 2 credit cards_.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)


## Multiple Items

If you need to create a preference for more than one item, you should only add them as a list within _items_.
Keep in mind that the total amount of the preference will be the sum of the amount for the unit price of each item.

[[[
```php
<?php
  # Create a preference object
  $preference = new MercadoPago\Preference();
  # Create items in the preference
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
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
      { title: 'Mi producto',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: 'ARS',
      unit_price: 96.56 }
    ]
};
// Create the preference
mercadopago.preferences.create(preference)
.then(function(preference){
  // This value replaces "$$init_point$$" string in your HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Create a preference object
Preference preference = new Preference();
// Create items in the preference
Item item1 = new Item();
item1.setId("1234")
    .setTitle("Producto 1")
    .setQuantity(2)
    .setCurrencyId("ARS")
    .setUnitPrice((float) 75.56);

Item item2 = new Item();
item2.setId("12")
    .setTitle("Producto 2")
    .setQuantity(1)
    .setCurrencyId("ARS")
    .setUnitPrice((float) 75.56);

preference.appendItem(item1, item2);
// Save and post the preference
preference.save();
```
```ruby
// Create items in the preference
item = MercadoPago::Item.new({
  title:        "Mi producto",
  quantity:     1,
  unit_price:   75.56
})
item2 = MercadoPago::Item.new({
  title:        "Mi producto2”,
  quantity:     2,
  unit_price:   96.56
})
// Create a preference object
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Create a preference object
Preference preference = new Preference();

// Create items in the preference
reference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.ARS,
    UnitPrice = (decimal)75.56
  },
  new Item()
  {
    Title = "Mi producto2”,
    Quantity = 2,
    CurrencyId = CurrencyId.ARS,
    UnitPrice = (decimal)96.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"items": [
	{
		"id_product":1,
		"quantity":1,
		"unit_price": 234.33,
		"titulo":"Mi producto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Mi producto 2"
	}
]
}'
```
]]]

---

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Optimize your integration and improve the management of your sales.
>
> [Advanced Integration](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED
>
> Customization
>
> Adapt the style of your brand in the buying experience.
>
> [Customization](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations/)
