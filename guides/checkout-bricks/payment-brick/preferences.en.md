# Preference configurations

You can adapt the Payment Brick integration to your business model by setting [preference attributes](/developers/en/reference/preferences/_checkout_preferences/post).

----[mla, mlb]----
If you offer high-value purchases, for example, you can accept [payments with two credit cards](#bookmark_accept_payments_with_2_credit_cards) or [delete undesired payment methods](#bookmark_define_the_desired_payment_methods) for your operation.

------------

----[mlm, mlc, mlu, mco, mpe]----
If you offer high-value purchases, for example, you can [exclude undesired payment methods](#bookmark_define_the_desired_payment_methods) for your operation.

------------

## Example of complete preference

----[mlm, mla, mlb, mlc, mlu, mpe]----

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
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
    "statement_descriptor": "MYBUSINESS",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

------------
----[mco]----

 ```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "CLP",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
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
		"installments": 12,
		"default_payment_method_id": null,
		"default_installments": null
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"statement_descriptor": "MYBUSINESS",
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00",
	"taxes": [
		{
			"type": "IVA",
			"value": 16
		}
	]
}
 ```
------------

----[mla]---- 
## Define the desired payment methods

Through payment preference, you can configure a default payment method to be rendered, delete unwanted ones, or choose a maximum number of installments to be offered.

| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class describing Payment Brick's payment methods and attributes. |
| `excluded_payment_types` | Method that excludes undesired payment methods for your operation, such as credit card, Rapipago, Pago Fácil, etc. |
| `excluded_payment_methods` | Method that excludes specific credit and debit card brands, such as Visa, Mastercard, American Express, etc. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value `wallet_purchase` in this method, Payment Brick will only accept payments from registered users in Mercado Pago, with card and account balance. |
------------

----[mlb]---- 
## Define the desired payment methods

Through payment preference, you can configure a default payment method to be rendered, delete unwanted ones, or choose a maximum number of installments to be offered.

| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class describing Payment Brick's payment methods and attributes. |
| `excluded_payment_types` | Method that excludes undesired payment methods for your operation, such as credit card, ticket (boleto or payment in lottery), etc. |
| `excluded_payment_methods` | Method that excludes specific credit and debit card brands, such as Visa, Mastercard, American Express, etc. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value `wallet_purchase` in this method, Payment Brick will only accept payments from registered users in Mercado Pago, with card and account balance. |

------------

----[mlm]---- 
## Define the desired payment methods

Through payment preference, you can configure a default payment method to be rendered, delete unwanted ones, or choose a maximum number of installments to be offered.

| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class describing Payment Brick's payment methods and attributes. |
| `excluded_payment_types` | Method that excludes undesired payment methods for your operation, such as credit card, ticket, etc. |
| `excluded_payment_methods` | Method that excludes specific credit and debit card brands, such as Visa, Mastercard, American Express, etc. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value `wallet_purchase` in this method, Payment Brick will only accept payments from registered users in Mercado Pago, with card and account balance. |

------------

----[mlc, mco, mpe, mlu]---- 
## Define the desired payment methods

Through payment preference, you can configure a default payment method to be rendered, delete unwanted ones, or choose a maximum number of installments to be offered.

| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class describing Payment Brick's payment methods and attributes. |
| `excluded_payment_types` | Method that excludes undesired payment methods for your operation, such as credit card, etc. |
| `excluded_payment_methods` | Method that excludes specific credit and debit card brands, such as Visa, Mastercard, American Express, etc. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value `wallet_purchase` in this method, Payment Brick will only accept payments from registered users in Mercado Pago, with card and account balance. |

------------

For example:

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
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
//...
```
```ruby
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

----[mla, mlb]----

## Accept payments with 2 credit cards

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

You can activate the option to offer payments with two credit cards from the Mercado Pago account.

To activate this payment option, go to "[Business Options](https://www.mercadopago.com.ar/settings/my-business)" and select the option "Receive payments with 2 credit cards".

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)
------------

## Accept payments from registered users only

----[mla, mlb]----
You can accept payments with the Mercado Pago wallet only from registered users, with a credit card, money in account, or Mercado Crédito.

------------

----[mlm, mlc, mco, mpe, mlu]----
You can accept payments with the Mercado Pago wallet only from registered users, with a credit card or money in account.

------------

This allows your customers to have their account information available instantly at the time of payment, such as their pre saved cards and addresses.

> WARNING
>
> Important
>
> By adding this option, you will not be able to receive payments from users who do not have a Mercado Pago or Mercado Livre account, as well as you will not be able to receive payments via cash or transfer.

To accept payments only from registered users, add the following attribute to your preferences:

```json
"purpose": "wallet_purchase"
```

Once you complete the action, your preference should have a structure similar to the example below:

```json
{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "My product",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
}
```

----[mco]----
## Modify the DIAN tax rate

You can change the amount allocated to the Dirección de Impuestos y Aduanas Nacionales (DIAN) tax, applied according to the product or service you offer.

If the amount is not modified by you, a 19% fee will be applied by default.

| Preference attribute | Description |
| --- | --- |
| `type` | Tax identifier. This method only allows a `VAT` value. |
| `value` | Tax amount. A maximum of two decimal places is allowed. For tax-exempt items, a zero value (`0`) must be entered. |

For example:

[[[
```json
===
Use the taxes attribute to define the corresponding value
===
"taxes": [
	{
		"type": "IVA",
		"value": 16
	}
]
```
]]]

------------

----[mla, mlb, mco]----

## Change the due date for cash payments

You can change the default expiration date for cash payments by sending the `date_of_expiration` field in the preference creation request. The date set by you must be between 1 day and 30 days from the date the payment is issued.

For example:

[[[
```json
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

> NOTE
>
> Note
>
> The crediting period is between one day and two working days, depending on the chosen payment method. Therefore, we recommend setting the expiration date at least three days apart to ensure that payment is made.

Review the [credit times according to each payment method](https://www.mercadopago.com/ajuda/_265) to perform the configuration correctly.

> WARNING
>
> Important
>
> If the payment is made after the expiration date, the amount will be refunded in the payer's Mercado Pago account.

------------

## Enable binary mode

You can enable the binary mode if the business model requires payment approval to be instantaneous. This way, the payment can only be approved or declined. The payment may be pending (if any action is required by the buyer) or processing (if a manual review is required) when the binary mode is disabled. 

To enable it, just set the payment preference's `binary_mode` attribute to `true`:

```json
"binary_mode": true
```

> WARNING
>
> Important
>
> Activating the binary mode simplifies the integration with Payment Brick, but it can cause a decrease in the percentage rate of approved payments. That is because pending and in-processing payments will automatically be rejected by default. 

## Set an expiration date for your preferences

Set an expiration period for your payment preferences in the `expires`, `expiration_date_from`, and `expiration_date_to` attributes:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

Note that the date must follow the format `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.

## Send description on buyer card invoice

You can add a description for your business via the `statement_descriptor` attribute of the payment preferences, as shown in the example below:

```json
"statement_descriptor": "MYBUSINESS"
```

Depending on the card brand, the description (attribute value) will appear on the buyer's card invoice.

## Set a preference for multiple items

If you need to create a preference for more than one item, you must add them as a list, as shown in the example below:

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
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
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
PreferenceClient client = new PreferenceClient();
// Create items in the preference
List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
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
      title: 'Mi producto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Mi producto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
// Create the request with multiples items
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My product 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "My product 2",
            Quantity = 2,
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
```python
# Create items in the preference
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Create a preference
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
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

Keep in mind that the total value of the preference will be the sum of the unit price value of each item listed.

## Show shipping cost

If your website already calculates the shipment value, you can display it separately from the total amount at the time of payment.

To configure such a scenario, add the item `shipments` with the value you want to charge in the `cost` attribute and the value `not_specified` in the `mode` attribute:

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Redirect the buyer to your site

At the end of the checkout process, you have the option to redirect the buyer to your site again. To do this, add the `back_urls` attribute and define the desired page to redirect your buyer when he clicks on the `Return to site` button, according to the payment status. 

You can also add the `auto_return` attribute with the `approved` value if you want the redirect for approved payments to be automatic without rendering a return button.

> NOTE
>
> Note
>
> Note that the `auto_return` attribute only works for Payment Brick's `redirect` and `mobile` mode. It does not work in modal mode since in the latter the buyer remains on the site throughout the payment process.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

| Attribute | Description |
| ------------ | -------- |
| `auto_return` | Buyers are automatically redirected to the site when payment is approved. The default value is `approved`. |
| `back_urls` | Return URL to site. Possible scenarios are:<br/><br/>`success`: Return URL upon payment approved.<br/><br/>`pending`: Return URL upon payment pending.<br/><br/>`failure`: Return URL upon payment payment rejected.

The `back_urls` will return the following parameters:

| Parameter | Description |
| --- | --- |
| `payment_id` | ID (identifier) of the payment from Mercado Pago. |
| `status` | Payment status. Ex.: `approved` for an approved payment or `pending` for pending payment. |
| `external_reference` | Amount sent at the time when the payment preference was created. |
| `merchant_order_id` | ID (identifier) of the payment order generated in Mercado Pago. |

> NOTE
>
> Note
>
> Some parameters hold purchase information only if the buyer has completed the entire payment in Payment Brick and has not abandoned the flow before returning to your site via the `failure` `back_urls`.

For example:

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.tu-sitio/success",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
   PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]