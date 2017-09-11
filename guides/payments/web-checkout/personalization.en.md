# Customization

In payment preferences, you can not only send information about the item to be paid, and the buyer’s, but also set the payment methods you do not want to accept, the return URL to your website after the payment, shipping options, etc.  

### Set payment types and methods

By default, we offer all payment methods available for the country where you are running the integration. If your business model does not support any of these [payment types](/guides/localization/payment-methods.en.md), or you [do not want to accept any particular method](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), you can exclude it when creating the payment preference.

In addition, you can set the payment method or the number of installments that should be displayed by default, as well as the maximum number of installments to offer.

[[[
```php

<?php

$preference = new MercadoPago\Preference();

// ...

$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    "id" => "master"
  ),
  "excluded_payment_types" => array(
    "id" => "ticket"
  ),
  "installments" => "12"
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
]]]



### Invalidate preference links

If you want to prevent access to the payment preference for making a payment after a certain date, you can use the following attributes:

```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


To learn more about the preference attributes, [check the API docs](https://www.mercadopago.com.co/developers/es/api-docs/basic-checkout/checkout-preferences/).
