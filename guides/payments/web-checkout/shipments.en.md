# MercadoEnvíos

Implement the logistics of your business with **Mercado Envíos**.

We solve everything for you: Receive the payment for the product and shipping costs in the same transaction. All you should do is print the label of Mercado Envíos and take the package to the postal service. We protect you against chargebacks or losses by the postal service, without requiring the submission of documentation.

## How does it work?

The documentation below allows you to offer in the checkout of Mercado Pago a shipping option, and also that the customer pays the shipping cost along with the payment of the product.

We recommend that you integrate the shipping cost calculator in your checkout.

## How to implement it

### Step 1: Activate your account to use Mercado Envíos

[Activate your account](http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=) entering your address. It must be the shipping address and it will be used to calculate the shipping cost.

### Step 2: Add Mercado Envíos to your checkout

Enter the dimensions and weight of your products in the payment preference.

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
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
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));
```
```node
var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
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
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
```
]]]

> NOTE
>
> Note
>
>The format of the dimensions are
```height x width x length (centimeters), weight (grams).```
>If the dimensions you specify do not match the actual package, the postal service may reject the shipping order. If they accept the package, we will automatically deduct the difference from your account.


#### Store pickup
You can offer customers the possibility of picking up the product from your store, letting them know when and where to pick up the product. To do this, you must include:

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->local_pickup = true;
  // ...
?>
```
```java
Shipments shipments = new Shipments();
// ...
shipments.setLocalPickup(true);
// ...
```
```node
var shipments = {
  //..
  "local_pickup": true
  //..
}
```
```ruby
shipment = MercadoPago::Shipment.new
# ...
shipment.local_pickup = true
# ...
```
]]]

#### Offer free shipping

You need to indicate the shipping method that you will offer for free. The shipping cost will be debited from your account every time you receive a payment.

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>73328)
  );
  // ...
?>
```
```java
Shipments shipments = new Shipments();
// ...
shipment.setFreeMethods(73328); // OCA Estándar
// ...
```
```node
var shipments = {
  //..
  "free_methods": [
      {
          "id": 73328
      }
    ],
  //..
}
```
```ruby
shipment = MercadoPago::Shipment.new
# ...
shipment.free_methods = [
  {
    id: 73328
  }
]
# ...
```
]]]


Check out the [shipping method IDs](https://api.mercadolibre.com/sites/MLA/shipping_methods?marketplace=NONE) available.

#### Integrate in the Checkout

See below an example of Checkout with Mercado Envíos:


[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Multicolor kite";
  $item->quantity = 1;
  $item->currency_id = "ARS";
  $item->unit_price = 10.00;

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user@testuser.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 73328;
  $shipments->free_methods = array(
    array("id"=>73328)
  );
  $shipments->receiver_address=array(
		"zip_code" => "5700",
		"street_number" => 123,
		"street_name" => "Street",
		"floor" => 4,
		"apartment" => "C"
  );


  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
  $preference->shipments = $shipments;

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

Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Multicolor kite',
  "quantity": 1,
  "currency_id": 'ARS',
  "unit_price": 10.5
}

var payer = {
  "email": "demo@mail.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
	"receiver_address": {
		"zip_code": "5700",
		"street_number": 123,
		"street_name": "Street",
		"floor": 4,
		"apartment": "C"
	},
  "free_methods": [
    {
      "id": 73328
    }
  ]

};

preference.items = [item]
preference.payer = payer
preference.shipments = shipments

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });

```
```ruby

preference = new MercadoPago::Preference.new();
item = MercadoPago::Item.new()
item.title="Multicolor kite"
item.quantity= 1
item.currency_id = 'ARS'
item.unit_price = 10.5

payer = MercadoPago::Payer.new()
payer.email="demo@mail.com"

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
shipment.free_methods = [
  {
    id: 73328
  }
]

preference.items = [item]
preference.payer = payer
preference.shipment = shipment

preference.save

```
]]]

```html

<!DOCTYPE html>
<html>
	<head>
		<title>Pay</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```



### Step 3: Improve the experience with the shipping cost calculator

We offer you the possibility to pre-calculate the shipping cost and delivery time to enable your buyers to see it in the checkout.

You need to send us some information to perform the calculation:

* `dimensions`: The size of the product you want to send; the format is: height x width x length (centimeters), weight (grams). Check the values allowed by the Postal Service.
* `zip_code`: The buyer’s zip code.
* `item_price`: The price of the product you are going to send. If there are multiple products, you should indicate the total price.
* `free_method` (optional): You can offer free shipping, which could help you to increase your sales. You just let us know which shipping method you will offer for free. The shipping cost will be debited from your account every time you receive a payment.


### Print the label

Whenever a payment is made, you will get an email with a button to print the label. You can also view [payments pending printing](https://www.mercadopago.com.ar/activities?type=collection&status=approved&shipping_or_archived=with_ME&tagME=ready_to_print) in your Mercado Pago account.

In a box, include everything you have sold. Stick the label on the box and ship it. You do not have to pay for anything at the postal service because Mercado Envíos labels will be paid for by your buyer.

### Step 5: Tracking
Use our tools to track shipments. In the list of payments, or in our APIs, you will be able to track your shipments.

In addition, we can notify you when a shipment is ready to ship by sending you [notificacions](/guides/notification/ipn.en.md) that are sent from Mercado Pago’s servers to yours. This will allow you to manage your inventories and know the status of payments and shipments.
