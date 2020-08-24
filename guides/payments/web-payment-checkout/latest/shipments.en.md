---
sites_supported:
- mla
- mlm
- mlb
indexable: false
---

# Offer Mercado Envíos
Integrate Mercado Envíos to receive payment for your products and manage their shipment at the same time. You only have to add the necessary details in your preferences and configure your business data.

## Previous requirement

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Activate Mercado Envíos

From the seller's account, go to the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/business#shipping" target="_blank">Your Business > Settings</a> section and activate the Mercado Envíos option.

We will use the address you upload to show the delivery points close to where the seller will be able to take the packages, and calculate the shipping costs.

## Add shipments in your preferences

Configure in your preferences, the weight and dimensions of the packages as you see in the following code. 

[[[
```php
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
<?php

  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP]",
    "street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->shipments = $shipments;

?>
```
```java
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
Preference preference = new Preference();

Shipments shipments = new Shipments();

shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][NUMBER][BETWEEN][1000,2000], "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

preference.setShipments(shipments);


```
```node
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
var preference = {}


var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP]",
    "street_number": [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  }
};

preference.shipments = shipments

```
```ruby
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
preference = new MercadoPago::Preference.new();

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"

shipment.receiver_address = {
  zip_code: "[FAKER][ADDRESS][ZIP]",
  street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  floor: "4",
  apartment: "C"
}

preference.shipment = shipment

```
```csharp
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment()
 {
     Mode = MercadoPago.Common.ShipmentMode.Me2,
     Dimensions = "30x30x30,500",
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      Zip_code = "[FAKER][ADDRESS][ZIP]",
      StreetNumber = [FAKER][NUMBER][BETWEEN][1000,2000],
      StreetName = "[FAKER][ADDRESS][STREET_NAME]",
      Floor = "4",
      Apartment = "C"
     }
 };

 preference.Shipments = shipments
```
]]]

> WARNING
>
> Important
>
> The dimensions you indicate must match those of the package so that the carrier does not refuse you the shipment. If the package is not refused and the dimensions are incorrect, we will deduct the difference from the total amount of the seller's account.

## You can add other shipping types

By default, you'll have shipping configured at the buyer's expense. If you want, you can offer free shipping and/or pickup.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Free shipping

----[mla]----
The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][SITE][ID]&shipping_mode=me2&allow_free_shipping=true" target="_blank">id shipping methods</a> to know which ones to add.

For example, in the following code is added the `ID 73328` which refers to a normal home delivery of OCA and the `ID 504945` for normal home delivery of Adreani. 

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>73328,
          "id2"=>504945) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(73328, 504945); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 73328
      },
      {
          "id": 504945
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
preference = new MercadoPago::Preference.new();

shipments = MercadoPago::Shipment.new
# ...
shipments.free_methods = [
  {
    id: 73328
  }
  ,{
    id: 504945
  }
]
# ...
preference.shipment = shipments

```
```csharp
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment();
//...
shipments.FreeMethods = new List<int> { 73328, 504945 };
//...
preference.Shipments = shipments;
```
]]]
------------
----[mlm]----

The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][SITE][ID]&shipping_mode=me2&allow_free_shipping=true" target="_blank">id shipping methods</a> to know which ones to add.

For example, in the following code is added the `ID 509247` which refers to a standard delivery to home and the `ID 509245` for priority delivery to a post office.

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>509247,
          "id2"=>509245) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(509247, 509245); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 509247
      },
      {
          "id": 509245
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
preference = new MercadoPago::Preference.new();

shipments = MercadoPago::Shipment.new
# ...
shipments.free_methods = [
  {
    id: 509247
  }
  ,{
    id: 509245
  }
]
# ...
preference.shipment = shipments

```
```csharp
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment();
//...
shipments.FreeMethods = new List<int> { 509247, 509245 };
//...
preference.Shipments = shipments;
```
]]]
------------
----[mlb]----

The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][SITE][ID]&shipping_mode=me2&allow_free_shipping=true" target="_blank">id shipping methods</a> to know which ones to add.

For example, in the following code, the `ID 505345` is added, referring to a normal Mercado Envíos shipping address and the `ID 100009` for normal Post Office shipping.

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>505345,
          "id2"=>100009) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(505345, 100009); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 505345
      },
      {
          "id": 100009
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
preference = new MercadoPago::Preference.new();

shipments = MercadoPago::Shipment.new
# ...
shipments.free_methods = [
  {
    id: 505345
  }
  ,{
    id: 100009
  }
]
# ...
preference.shipment = shipments

```
```csharp
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment();
//...
shipments.FreeMethods = new List<int> { 505345, 100009 };
//...
preference.Shipments = shipments;
```
]]]
------------

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shipping costs simulator

You can simulate costs from the shipping calculator. To do this, you must replace the `sellerId`, `shippingMethod Id`, `price`, `zipCode`, `height`, `width`, `length`, `weight` values of your package

> https://api.mercadolibre.com/users/_sellerId_/shipping_options?free_method=_shippingMethodId_&item_price=_price_&zip_code=_zipCode_&dimensions=_height_x_width_x_length_,_weight

[[[
```curl

curl --location --request GET 'http://api.mercadolibre.com/users/179504451/shipping_options?free_method=182&item_price=718&zip_code=[FAKER][ADDRESS][ZIP]&dimensions=2x11x16,88'

```
]]]

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home pickup

You can also offer the possibility of picking up the product at the address you set, informing the buyer when and where to pick it up.  

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->local_pickup = true;
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setLocalPickup(true);
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "local_pickup": true
  //..
}
preference.shipments = shipments

```
```ruby
preference = new MercadoPago::Preference.new();

shipments = MercadoPago::Shipment.new
# ...
shipments.local_pickup = true
# ...
preference.shipment = shipments

```
```csharp
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment();
//...
shipments.LocalPickUp = true;
//...
preference.Shipments = shipments;
```
]]]

**Done! Mercado Envíos is already integrated.** 

Once you receive an order, you only need to ----[mla, mlm]---- <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_1603" target="_blank">prepare and ship the package</a>. ------------ ----[mlb]---- <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_1603" target="_blank"> prepare and ship the package</a>. ------------

> NOTE
>
> Label Management
>
> When an order is made, you will receive an e-mail with a button to print the label you must attach to the package. You will also be able to view the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/activities?type=facet_type_collection&status=facet_shipping_me_all" target="_blank">payments to be printed</a> from the Mercado Pago account that received the order.


## Example of a complete preference

----[mla]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL]";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 73328;
  $shipments->free_methods = array(
    array("id"=>73328,
          "id2"=>504945)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP]",
    "street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][NUMBER][BETWEEN][1000,2000], "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(73328, 504945); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": '[FAKER][COMMERCE][PRODUCT_NAME]',
  "quantity": [FAKER][NUMBER][BETWEEN][1,10],
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "[FAKER][INTERNET][FREE_EMAIL]"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP]",
    "street_number": [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 73328
    },
    {
      "id": 504945
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
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
  zip_code: "[FAKER][ADDRESS][ZIP]",
  street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  floor: "4",
  apartment: "C"
}
shipment.free_methods = [
  {
    id: 73328
  },
  {
    id: 504945
  }
]

preference.items = [item]
preference.payer = payer
preference.shipment = shipment

preference.save

```
```csharp
Preference preference = new Preference();

preference.Items.Add(
  new MercadoPago.DataStructures.Preference.Item()
  {
    Title = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Quantity = 1,
    UnitPrice = (decimal)[FAKER][COMMERCE][PRICE]
  }
);

MercadoPago.DataStructures.Preference.Payer payer = new MercadoPago.DataStructures.Preference.Payer()
    {
      Email = "[FAKER][INTERNET][FREE_EMAIL]"
    };

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment()
 {
     Mode = MercadoPago.Common.ShipmentMode.Me2,
     Dimensions = "30x30x30,500",
     LocalPickUp = true,
     FreeMethods = new List<int> { 73328, 504945 },
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      ZipCode = "[FAKER][ADDRESS][ZIP]",
      StreetNumber = [FAKER][NUMBER][BETWEEN][1000,2000],
      StreetName = "[FAKER][ADDRESS][STREET_NAME]",
      Floor = "4",
      Apartment = "C"
     }
 };

preference.Payer = payer;
preference.Shipments = shipments;

preference.Save();
```
]]]
------------
----[mlm]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL]";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 509247;
  $shipments->free_methods = array(
    array("id"=>509247,
          "id2"=>509245)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP]",
    "street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][NUMBER][BETWEEN][1000,2000], "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(509247, 509245); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": '[FAKER][COMMERCE][PRODUCT_NAME]',
  "quantity": [FAKER][NUMBER][BETWEEN][1,10],
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "[FAKER][INTERNET][FREE_EMAIL]"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP]",
    "street_number": [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 509247
    },
    {
      "id": 509245
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
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
  zip_code: "[FAKER][ADDRESS][ZIP]",
  street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  floor: "4",
  apartment: "C"
}
shipment.free_methods = [
  {
    id: 509247
  },
  {
    id: 509245
  }
]

preference.items = [item]
preference.payer = payer
preference.shipment = shipment

preference.save

```
```csharp
Preference preference = new Preference();

preference.Items.Add(
  new MercadoPago.DataStructures.Preference.Item()
  {
    Title = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Quantity = 1,
    UnitPrice = (decimal)[FAKER][COMMERCE][PRICE]
  }
);

MercadoPago.DataStructures.Preference.Payer payer = new MercadoPago.DataStructures.Preference.Payer()
    {
      Email = "[FAKER][INTERNET][FREE_EMAIL]"
    };

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment()
 {
     Mode = MercadoPago.Common.ShipmentMode.Me2,
     Dimensions = "30x30x30,500",
     LocalPickUp = true,
     FreeMethods = new List<int> { 509247, 509245 },
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      ZipCode = "[FAKER][ADDRESS][ZIP]",
      StreetNumber = [FAKER][NUMBER][BETWEEN][1000,2000],
      StreetName = "[FAKER][ADDRESS][STREET_NAME]",
      Floor = "4",
      Apartment = "C"
     }
 };

preference.Payer = payer;
preference.Shipments = shipments;

preference.Save();
```
]]]
------------
----[mlb]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL]";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 505345;
  $shipments->free_methods = array(
    array("id"=>505345,
          "id2"=>100009)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP]",
    "street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][NUMBER][BETWEEN][1000,2000], "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(505345, 100009); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": '[FAKER][COMMERCE][PRODUCT_NAME]',
  "quantity": [FAKER][NUMBER][BETWEEN][1,10],
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "[FAKER][INTERNET][FREE_EMAIL]"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP]",
    "street_number": [FAKER][NUMBER][BETWEEN][1000,2000],
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 505345
    },
    {
      "id": 100009
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
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
  zip_code: "[FAKER][ADDRESS][ZIP]",
  street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  floor: "4",
  apartment: "C"
}
shipment.free_methods = [
  {
    id: 505345
  },
  {
    id: 100009
  }
]

preference.items = [item]
preference.payer = payer
preference.shipment = shipment

preference.save

```
```csharp
Preference preference = new Preference();

preference.Items.Add(
  new MercadoPago.DataStructures.Preference.Item()
  {
    Title = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Quantity = 1,
    UnitPrice = (decimal)[FAKER][COMMERCE][PRICE]
  }
);

MercadoPago.DataStructures.Preference.Payer payer = new MercadoPago.DataStructures.Preference.Payer()
    {
      Email = "[FAKER][INTERNET][FREE_EMAIL]"
    };

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment()
 {
     Mode = MercadoPago.Common.ShipmentMode.Me2,
     Dimensions = "30x30x30,500",
     LocalPickUp = true,
     FreeMethods = new List<int> { 505345, 100009 },
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      ZipCode = "[FAKER][ADDRESS][ZIP]",
      StreetNumber = [FAKER][NUMBER][BETWEEN][1000,2000],
      StreetName = "[FAKER][ADDRESS][STREET_NAME]",
      Floor = "4",
      Apartment = "C"
     }
 };

preference.Payer = payer;
preference.Shipments = shipments;

preference.Save();
```
]]]
------------

> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Make sure everything is working well in your integration using test users. 
>
> [Testing](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/web-payment-checkout/test-integration/)

