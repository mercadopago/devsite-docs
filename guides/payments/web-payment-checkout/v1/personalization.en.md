---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlc
  - mlm
---

# Customization

> WARNING
>
> Note
>
> This documentation refers to the new version of the Checkout Mercado Pago.
>
> Remember there is only active support and new functionalities for the [new version of the Checkout Mercado Pago.](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/introduction/)

In payment preferences, you can not only send information about the item to be paid, and the buyer’s, but also set the payment methods you do not want to accept, the return URL to your website after the payment, shipping options, etc.  


### Set payment types and methods

By default, we offer all payment methods available for the country where you are running the integration. If your business model does not support any of these [payment types](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods), or you [do not want to accept any particular method](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), you can exclude it when creating the payment preference.

In addition, you can set the payment method or the number of installments that should be displayed by default, as well as the maximum number of installments to offer.

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
```java
  Preference preference = new Preference();
  // ...
  PaymentMethods paymentMethods = new PaymentMethods();
  paymentMethods.setExcludedPaymentMethods("master", "amex");
  paymentMethods.setExcludedPaymentTypes("ticket");
  paymentMethods.setInstallments(12);

  preference.setPaymentMethods(paymentMethods);
  // ...
```
```node
  var preference = {}
  preference = {
    // ...
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
    // ...
  }
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
# ...
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

### Indicate Return URLs

In the end of the payment process, it is very important that you show buyers what the next steps are and thus give them confidence in relation to the result of the transaction. To do this, we use the `back_urls`. The `auto_return` attribute in `approved` will automatically redirect the buyer to the success url when the payment result is approved.

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
```java
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.tu-sitio/success",
                    "http://www.tu-sitio/pending",
                    "http://www.tu-sitio/failure");

preference.setBackUrls(backUrls);
// ...
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
```ruby
preference = MercadoPago::Preference.new
# ...
preference.back_urls = {
  success: "https://www.tu-sitio/success",
  failure: "http://www.tu-sitio/failure",
  pending: "http://www.tu-sitio/pendings"
}
preference.auto_return = "approved"
# ...
```
```csharp
 Preference preference = new Preference();

 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.tu-sitio/success",
    Failure = "http://www.tu-sitio/failure",
    Pending = "http://www.tu-sitio/pendings"
  };

  preference.AutoReturn = AutoReturnType.approved;
```
]]]

### Synchronize with your system

In order to synchronize with your backend systems, from the preferences you can send us the `external_reference` field, which will enable you to check when the payment is created.

```json
"external_reference": "Order_1234",
```

To check the status of your payments, you can do a search using that reference:

[[[
```php
<?php

  $filters = array(
    "external_reference" => "EXTERNAL"
  );

  $payment = MercadoPago\Payment::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("external_reference", "EXTERNAL");

  Payment payment = Payment.search(filters);

```
```node
var mercadopago = require('mercadopago');

var filters = {
  external_reference: "EXTERNAL"
};

mercadopago.searchPayment({
  qs: filters
}).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby
filters = {
  external_reference: "EXTERNAL"
}

payment = MercadoPago::Payment.search(filters)
```
```csharp
Dictionary<string, string> filters = new Dictionary<string, string>;
filters.Add("external_references", "EXTERNAL");

List<Payment> payments = Payment.Search(filters);
```
]]]

### Binary mode

If the business logic of your e-commerce requires the decision on approval of the payment to be instantaneous you can activate the binary mode. In this way the payment can only result in `approved` or`rejected` states.

In the case of not being activated the payment may result in the state `in_process`.

For more information check the possible states of a payment:

![payment-diagram](/images/payments-status-transitions-diagram.png)

To enable it, just configure as _true_ the field `binary_mode`:

```json
	"binary_mode": true
```

### Invalidate preference links

If you want to prevent access to the payment preference for making a payment after a certain date, you can use the following attributes:

```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


To learn more about the preference attributes, [check the API docs]https://www.mercadopago.com.ar/developers/en/reference/reference/preferences/_preferences/post/).



### Here you have a complete preference
To summarize all of the above, the following JSON shows all the data that can be configured in a preference:

```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "[FAKER][CURRENCY][ACRONYM]",
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
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}

```
### Next steps

* [Discount campaigns](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/discount-campaigns/)
* [Testing the integration](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/testing/)
