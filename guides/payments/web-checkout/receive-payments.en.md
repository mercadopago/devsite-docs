# Receive Payments

Receive payments simply and securely using the Mercado Pago’s Checkout.

## 1. Create a payment preference

A payment preference contains all the information about the product or service to be paid. For example:

- Description and amount.
- Your buyer’s info (email, name, address, etc.).
- Payment methods accepted.
- Reference ID of your system.

To create a payment preference you must install [MercadoPago SDK](https://github.com/mercadopago) and set up your [credentials](https://www.mercadopago.com/mla/account/credentials?type=basic).

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

Luego, deberás agregar los atributos de tu preferencia de pago:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "Multicolor kite";
$item->quantity = 1;
$item->title = "ARS";
$item->unit_price = 10.00;

$payer = new MercadoPago\Payer();
$payer->email = "test_user_19653727@testuser.com";

$preference->items = array($item);
$preference->payer = $payer;
$preference->save();

?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Multicolor kite")
    .setQuantity(2)
    .setCategoryId("ARS")
    .setUnitPrice((float) 14.5);

Payer payer = new Payer();
payer.setEmail("demo@mail.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```node

	var preference = {}

  var item = {
    title: 'Multicolor kite',
    quantity: 1,
    currency_id: 'ARS',
    unit_price: 10.5
  }

  var payer = {
    email: "demo@mail.com"
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
item.title="Multicolor kite"
item.quantity= 1
item.currency_id = 'ARS'
item.unit_price = 10.5

payer = MercadoPago::Payer.new()
payer.email="demo@mail.com"

preference.items = [item]
preference.payer = payer

preference.save

```
]]]

### Contenido de la preferencia

Mientras más información nos envíes, mejor será la aprobación de los pagos y la experiencia de tus usuarios.

#### Payer

Es requerido el envío del `email` de tu comprador. Si nos envías datos como tipo y número de identificación, no se le pedirá durante el proceso de pago.

[[[
```php
<?php
  $payer = new MercadoPago\Payer();
  $payer->name = "user-name";
  $payer->surname = "user@email.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "11",
    "number" => "4444-4444"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "Street",
    "street_number" => 123,
    "zip_code" => "5700"
  );
?>
```
```java
Payer payer = new Payer();
payer.setName("user-name")
  .setSurname("user-surname")
  .setEmail("user@email.com")
  .setDateCreated("2018-06-02T12:58:41.425-04:00")
  .setPhone((new Phone("11", "4444-4444")))
  .setIdentification((new Identification("DNI", "12345678")))
  .setAddress((new Address("Street", 123, "5700")));
```
```node
var payer = {
        "name": "user-name",
        "surname": "user-surname",
        "email": "user@email.com",
        "date_created": "2015-06-02T12:58:41.425-04:00",
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
      }
```
```ruby

payer = MercadoPago::Payer.new
payer.name = "user-name"
payer.surname = "user-surname"
payer.email = "user@email.com"
payer.date_created = Time.now
payer.phone = {
  area_code: "11",
  number: "4444-4444"
}
payer.identification = {
  type: "DNI",
  number: "12345678"
}
payer.address = {
  street_name: "Street",
  street_number: 123,
  zip_code: "5700"
}

```

]]]

#### Shipments

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  $shipments->receiver_address=array(
		"zip_code" => "5700",
		"street_number" => 123,
		"street_name" => "Street",
		"floor" => 4,
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
		"zip_code": "5700",
		"street_number": 123,
		"street_name": "Street",
		"floor": 4,
		"apartment": "C"
	}
};
```
```ruby
shipment = MercadoPago::Shipment.new
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
```
]]]

## 2. Lleva a tu comprador al checkout

Una vez creada la preferencia utiliza la URL que encontrarás en el atributo `init_point` de la respuesta para generar un botón de pago:

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

They **do not expire automatically**, so you’re required to [cancel the paymeny](/guides/account/refunds-and-cancellations.en.md) luego del vencimiento.


## 5. Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Tests](/guides/payments/web-checkout/testing.en.md)section.
