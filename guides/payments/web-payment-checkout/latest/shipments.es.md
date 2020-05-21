---
  indexable: false
---
---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlc
  - mlm
---

# Como ofrecer envíos en mi negocio

La siguiente documentación te enseñará a sumar Mercado Envíos en el CheckOut de Mercado Pago, en tan solo 2 pasos.


## Paso 1: Carga tu dirección
Desde la cuenta del vendedor, ingresa al sector de <a href="http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=" target="_blank">activación</a> y completa los datos que se solicitan. 
Usaremos ese domicilio que cargues para mostrar los puntos de despacho cercanos a los que el vendedor podrá llevar los paquetes, y calcular los costos de envío.


## Paso 2: Carga las características de los paquetes que enviarás
En el backend del negocio, configurá el peso y las dimensiones de los paquetes tal como ves en el siguiente código.

[[[
```php

<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  // No es obligatorio setear la propiedad receiver_address
  $shipments->receiver_address=array(
    "zip_code" => "5700",
    "street_number" => 123,
    "street_name" => "Street",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->shipments = $shipments;

?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();

// No es obligatorio setear la propiedad AddressReceiver
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", "4", "C"));

preference.setShipments(shipments);


```
```node
var preference = {}

// No es obligatorio setear la propiedad receiver_address
var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "5700",
    "street_number": 123,
    "street_name": "Street",
    "floor": "4",
    "apartment": "C"
  }
};

preference.shipments = shipments

```
```ruby

preference = new MercadoPago::Preference.new();

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
# No es obligatorio setear la propiedad receiver_address
shipment.receiver_address = {
  zip_code: "5700",
  street_number: 123,
  street_name: "Street",
  floor: "4",
  apartment: "C"
}

preference.shipment = shipment

```
```csharp
Preference preference = new Preference();

// No es obligatorio setear la propiedad ReceiverAddress
MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment()
 {
     Mode = MercadoPago.Common.ShipmentMode.Me2,
     Dimensions = "30x30x30,500",
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      Zip_code = "5700",
      StreetNumber = 123,
      StreetName = "Street",
      Floor = "4",
      Apartment = "C"
     }
 };

 preference.Shipments = shipments
```
]]]

> NOTE
>
> Nota
>
> Respeta el formato de las dimensiones:
```alto x ancho x largo (centímetros), peso (gramos)```
> Las dimensiones que indiques deben coincidir con las de tu paquete para que el carrier no te rechace el envío. Si no lo rechaza y las dimensiones son incorrectas, te descontaremos esa diferencia del monto total de tu cuenta de forma automática.




### Podés elegir qué tipo de envío ofrecer

#### Envíos gratis

El costo de envío será debitado de la cuenta del vendedor cuando reciba un pago.
Consultá los <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=MLA&shipping_mode=me2&allow_free_shipping=true" target="_blank">id de medios de envío</a> disponibles para saber cuál poner en el código.


[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  // 73328 = Normal a Domicilio, OCA Estándar
  $shipments->free_methods = array(
    array("id"=>73328) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
// 73328 = Normal a Domicilio, OCA Estándar
shipments.setFreeMethods(73328); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  // 73328 = Normal a Domicilio, OCA Estándar
  "free_methods": [
      {
          "id": 73328
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
# 73328 = Normal a Domicilio, OCA Estándar
shipments.free_methods = [
  {
    id: 73328
  }
]
# ...
preference.shipment = shipments

```
```csharp
Preference preference = new Preference();

MercadoPago.DataStructures.Preference.Shipment shipments = new MercadoPago.DataStructures.Preference.Shipment();
//...
// 73328 = Normal a Domicilio, OCA Estándar
shipments.FreeMethods = new List<int> { 73328 };
//...
preference.Shipments = shipments;
```
]]]



#### Retiro en tu domicilio
Podés ofrecer la posibilidad de retirar el producto por el local del vendedor, indicándole al comprador cuándo y dónde retirarlo.

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



### Asegurate que esté todo bien configurado

Este es un ejemplo de un checkout con la integración de Mercado Envíos lista.
Si tu checkout se ve así, significa que tenés todo bien configurado y ya empezaste a ofrecer envíos.

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
    array("id"=>73328)
  );
  $shipments->receiver_address=array(
    "zip_code" => "5700",
    "street_number" => 123,
    "street_name" => "Street",
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
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", "4", "C"));

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
    "zip_code": "5700",
    "street_number": 123,
    "street_name": "Street",
    "floor": "4",
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
  zip_code: "5700",
  street_number: 123,
  street_name: "Street",
  floor: "4",
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
     FreeMethods = new List<int> { 73328 },
     ReceiverAddress = new MercadoPago.DataStructures.Preference.ReceiverAddress(){
      ZipCode = "5700",
      StreetNumber = 123,
      StreetName = "Street",
      Floor = "4",
      Apartment = "C"
     }
 };

preference.Payer = payer;
preference.Shipments = shipments;

preference.Save();
```
]]]


## Ya integré Mercado Envíos en el checkout, ¿Cómo sigo?

Una vez hayas integrado Mercado Envíos y recibas una venta, solo queda preparar el paquete, entregarlo en un punto de despacho cercano y seguir el envio.

### Preparar el paquete y entregarlo:

* Cada vez que recibas un pago, te llegará ubn e-mail con un botón para imprimir la etiqueta. También podés ver los <a href="https://www.mercadopago.com.ar/activities?type=facet_type_collection&status=facet_shipping_me_all" target="_blank">pagos pendientes de impresión</a> desde la cuenta de Mercado Pago del vendedor.

* Colocá lo que vendiste en una caja, pegale la etiqueta y entregala en algunos de los puntos de despacho cercanos al domicilio configurado.

### Seguir el envío:

Vas a podes seguir el curso del paquete desde la cuenta de Mercado Pago del vendedor.