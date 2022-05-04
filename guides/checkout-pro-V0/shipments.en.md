---
sites_supported:
- mla
- mlm
- mlb
indexable: false
---

# Offer Mercado Envios

Integrate Mercado Envios to receive payment for your products and manage their shipment at the same time. You only have to add the necessary details in your preferences and configure your business data.

## Previous requirement

### Activate Mercado Envios

From the seller's account, go to the [Your Business > Settings](https://www.mercadopago[FAKER][URL][DOMAIN]/business#shipping) section and activate the Mercado Envios option.

We will use the address you upload to show the delivery points close to where the seller will be able to take the packages, and calculate the shipping costs.

## Add shipments in your preferences

Configure the weight and dimensions of the packages in your preferences, as you see in the following code. 

[[[
```php
===
 Respect the dimensions format, in centimeters and grams as appropriate: height x width x length, weight. 
===
<?php

  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
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
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

preference.setShipments(shipments);


```
```node
===
 Respect the dimensions format, in centimeters and grams as appropriate: height x width x length, weight. 
===
var preference = {}


var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  }
};

preference.shipments = shipments

```
```ruby
===
 Respect the dimensions format, in centimeters and grams as appropriate: height x width x length, weight. 
===
# ...
preference_data = {
  # ...
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  }
  # ...
}
# ...
```
```csharp
===
 Respect the dimensions format, in centimeters and grams as appropriate: height x width x length, weight. 
===
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "floor": "4",
            "apartment": "C"
        }
    }
    # ...
}
```
]]]

> WARNING
>
> Important
>
> The dimensions you indicate must match those of the package so that the carrier does not refuse you the shipment. If the package is not refused and the dimensions are incorrect, we will deduct the difference from the total amount of the seller's account.

## You can add other shipping types

By default, you'll have shipping configured at the buyer's expense. If you want, you can offer free shipping and/or pickup.

### Free shipping

----[mla]----
The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available [id shipping methods](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) to know which ones to add.

For example, in the following code the `ID 73328` is added, which refers to a normal home delivery by OCA and the `ID 504945` for normal home delivery by Adreani. 

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
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 73328 },
      { id: 504945 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 73328,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 504945,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 73328
            },
            {
                "id": 504945
            }
        ]
    }
    # ...
}
```
]]]
------------
----[mlm]----

The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available [id shipping methods](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) to know which ones to add.

For example, in the following code the `ID 509247` is added, which refers to a standard delivery to home and the `ID 509245` for priority delivery to a post office.

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
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 509247 },
      { id: 509245 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 509247,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 509245,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 509247
            },
            {
                "id": 509245
            }
        ]
    }
    # ...
}
```
]]]
------------
----[mlb]----

The shipping cost will be debited from the seller’s account when the payment is received. 
You can offer different shipping methods by changing the ID. Check the available [id shipping methods](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) to know which ones to add.

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
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 505345 },
      { id: 100009 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 505345,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 100009,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 505345
            },
            {
                "id": 100009
            }
        ]
    }
    # ...
}
```
]]]
------------

#### Shipping costs simulator

You can simulate costs from the shipping calculator. To do so, you must replace the `sellerId`, `shippingMethod Id`, `price`, `zipCode`, `height`, `width`, `length`, `weight` values of your package

> https://api.mercadolibre.com/users/_sellerId_/shipping_options?free_method=_shippingMethodId_&item_price=_price_&zip_code=_zipCode_&dimensions=_height_x_width_x_length_,_weight

[[[
```curl

curl --location --request GET 'http://api.mercadolibre.com/users/179504451/shipping_options?free_method=182&item_price=718&zip_code=[FAKER][ADDRESS][ZIP_CODE]&dimensions=2x11x16,88'

```
]]]

### Home pickup

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
# ...
preference_data = {
  # ...
  shipments: {
    local_pickup: true
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        LocalPickup = true,
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        # ...
        "local_pickup": True
    }
    # ...
}
```
]]]

**Done! Mercado Envíos is already integrated.** 

Once you receive an order, you only need to ----[mla, mlm]---- [prepare and ship the package](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_1603). ------------ ----[mlb]---- [prepare and ship the package](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_1603) ------------

> NOTE
>
> Label Management
>
> When an order is made, you will receive an e-mail with a button to print the label you must attach to the package. You will also be able to view the [payments to be printed](https://www.mercadopago[FAKER][URL][DOMAIN]/activities?type=facet_type_collection&status=facet_shipping_me_all) from the Mercado Pago account that received the order.


## Example of a complete preference

----[mla]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 73328;
  $shipments->free_methods = array(
    array("id"=>73328,
          "id2"=>504945)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(73328, 504945); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
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

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 73328 },
    { id: 504945 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 73328,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 504945,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
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
    }
}
```
]]]
------------
----[mlm]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 509247;
  $shipments->free_methods = array(
    array("id"=>509247,
          "id2"=>509245)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(509247, 509245); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
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

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 509247 },
    { id: 509245 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 509247,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 509245,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
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
    }
}
```
]]]
------------
----[mlb]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 505345;
  $shipments->free_methods = array(
    array("id"=>505345,
          "id2"=>100009)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(505345, 100009); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
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

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 505345 },
    { id: 100009 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 505345,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 100009,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
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
    }
}
```
]]]
------------

> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Make sure everything is working well in your integration using test users. 
>
> [Testing](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)

