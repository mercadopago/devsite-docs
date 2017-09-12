# Receive Payments

Receive payments simply and securely using the Mercado Pago’s Checkout.


## 1. Create a payment preference

A payment preference contains all the information about the product or service to be paid. For example:

* Description and amount.
* Your buyer’s info (email, name, address, etc.).
* Payment methods accepted.
* Reference ID of your system.

To create a payment preference you must install [Mercado Pago SDK](https://github.com/mercadopago) and set up your [credentials](https://www.mercadopago.com/mla/account/credentials?type=basic).

[[[
```php

<?php  
  require_once ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

Then you must add the attributes of your payment preference and create a preference:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->id = "1234";
$item->title = "FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = 1;
$item->currency_id = "ARS";
$item->unit_price = [FAKER][COMMERCE][PRICE];

$payer = new MercadoPago\Payer();
$payer->email = "[FAKER][INTERNET][FREE_EMAIL]";

$preference->items = array($item);
$preference->payer = $payer;
$preference->save();

?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity(2)
    .setCurrencyId("ARS")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```node

	var preference = {}

  var item = {
    id: '1234',
    title: '[FAKER][COMMERCE][PRODUCT_NAME]',
    quantity: 1,
    currency_id: 'ARS',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "[FAKER][INTERNET][FREE_EMAIL]"
  }

  preference.items = [item]
  preference.payer = payer

  mercadopago.preferences.create(preference).then(function (data) {
     // Do Stuff...
   }).catch(function (error) {
     // Do Stuff...
   });

```
```ruby

preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.id = "1234"
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = 'ARS'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer

preference.save

```
]]]

### Content of the preference

The more information you send us, the faster is the payment approval and the better is the experience for your users.

#### Payer

You must submit your buyer’s `email`. If you include information such as identification type or identification number, it will not be asked during the checkout.

[[[
```php
<?php
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "[FAKER][NAME][LAST_NAME]";
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number" => "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "street_number" => [FAKER][ADDRESS][BUILDING_NUMBER],
    "zip_code" => "[FAKER][ADDRESS][ZIP]"
  );
?>
```
```java
Payer payer = new Payer();
payer.setName("Charles")
  .setSurname("[FAKER][NAME][LAST_NAME]")
  .setEmail("[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']")
  .setDateCreated("2018-06-02T12:58:41.425-04:00")
  .setPhone((new Phone("[FAKER][PHONE_NUMBER][AREA_CODE]", "[FAKER][PHONE_NUMBER][PHONE_NUMBER]")))
  .setIdentification((new Identification("DNI", "12345678")))
  .setAddress((new Address("[FAKER][ADDRESS][STREET_NAME]", [FAKER][ADDRESS][BUILDING_NUMBER], "[FAKER][ADDRESS][ZIP]")));
```
```node
var payer = {
        "name": "Charles",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "email": "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']",
        "date_created": "2015-06-02T12:58:41.425-04:00",
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
            "zip_code": "[FAKER][ADDRESS][ZIP]"
        }
      }
```
```ruby

payer = MercadoPago::Payer.new
payer.name = "Charles"
payer.surname = "[FAKER][NAME][LAST_NAME]"
payer.email = "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']"
payer.date_created = Time.now
payer.phone = {
  area_code: "[FAKER][PHONE_NUMBER][AREA_CODE]",
  number: "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
}
payer.identification = {
  type: "DNI",
  number: "12345678"
}
payer.address = {
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  street_number: [FAKER][ADDRESS][BUILDING_NUMBER],
  zip_code: "[FAKER][ADDRESS][ZIP]"
}

```

]]]

#### Shipments

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  $shipments->receiver_address=array(
		"zip_code" => "[FAKER][ADDRESS][ZIP]",
		"street_number" => [FAKER][ADDRESS][BUILDING_NUMBER],
		"street_name" => "[FAKER][ADDRESS][STREET_NAME]",
		"floor" => [FAKER][NUMBER][BETWEEN][1,20],
		"apartment" => "C"
  );
?>
```
```java
Shipments shipments = new Shipments();
shipments.setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));
```
```node
var shipments = {
	"receiver_address": {
		"zip_code": "[FAKER][ADDRESS][ZIP]",
		"street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
		"street_name": "[FAKER][ADDRESS][STREET_NAME]",
		"floor": [FAKER][NUMBER][BETWEEN][1,20],
		"apartment": "C"
	}
};
```
```ruby
shipment = MercadoPago::Shipment.new
shipment.receiver_address = {
	zip_code: "[FAKER][ADDRESS][ZIP]",
	street_number: [FAKER][ADDRESS][BUILDING_NUMBER],
	street_name: "[FAKER][ADDRESS][STREET_NAME]",
	floor: [FAKER][NUMBER][BETWEEN][1,20],
	apartment: "C"
}
```
]]]

## 2. Take the buyer to checkout

Once the preference has been created, use the URL found in the attribute `init_point` of the response to create a payment button:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preference->init_point; ?>">Pay</a>
	</body>
</html>
```

## 3. Enable payment notifications

Notifications are automatically sent to inform you of any new payments and status updates.

This will allow you to manage your inventories and keep your system synced.

To learn more about it, go to [Notificacions](/guides/notifications/ipn.en.md).

## 4. Cancel a payment

The payment methods available for payments in cash must be paid from 3 to 5 days depending on each one.

They **do not expire automatically**, so you’re required to [cancel the payment](/guides/manage-account/cancellations-and-refunds.en.md) after expiration.


## 5. Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Tests](/guides/payments/web-checkout/testing.en.md) section.
