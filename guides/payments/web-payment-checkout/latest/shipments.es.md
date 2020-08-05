---
indexable: false

sites_supported:
  - mla
  - mlm
---

# Ofrece Mercado Envíos
----[mla, mlm]----
Integra Mercado Envíos para recibir el pago de tus productos y gestionar su envío al mismo tiempo. Solo tienes que agregar los datos necesarios en tu preferencia y configurar los datos de tu negocio.
------------

## Requisito previo

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Activa Mercado Envíos

----[mla, mlm]----
Desde la cuenta del vendedor, ingresa a la sección de <a href="https://www.mercadopago.com.ar/business#shipping" target="_blank">Tu negocio > Configuración</a> y activa la opción de Mercado Envíos.

Usaremos el domicilio que cargues para mostrar los puntos de despacho cercanos a los que el vendedor podrá llevar los paquetes, y calcular los costos de envío.
------------

## Agrega envíos en tu preferencia

----[mla]----
Configura en tu preferencia, el peso y las dimensiones de los paquetes tal como ves en el siguiente código. 
------------
----[mlm]----
Configura en tu preferencia, el peso y las dimensiones de los paquetes tal como se ve en el siguiente código. 
------------

[[[
```php
===
 Respeta el formato de las dimensiones, en centímetros y gramos según corresponda: altoxanchoxlargo, peso.
===
<?php

  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  // No es obligatorio configurar la propiedad receiver_address
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
 Respeta el formato de las dimensiones, en centímetros y gramos según corresponda: altoxanchoxlargo, peso.
===
Preference preference = new Preference();

Shipments shipments = new Shipments();

// No es obligatorio configurar la propiedad AddressReceiver
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][NUMBER][BETWEEN][1000,2000], "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

preference.setShipments(shipments);


```
```node
===
 Respeta el formato de las dimensiones, en centímetros y gramos según corresponda: altoxanchoxlargo, peso.
===
var preference = {}

// No es obligatorio configurar la propiedad receiver_address
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
 Respeta el formato de las dimensiones, en centímetros y gramos según corresponda: altoxanchoxlargo, peso.
===
preference = new MercadoPago::Preference.new();

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
# No es obligatorio configurar la propiedad receiver_address
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
 Respeta el formato de las dimensiones, en centímetros y gramos según corresponda: altoxanchoxlargo, peso.
===
Preference preference = new Preference();

// No es obligatorio configurar la propiedad ReceiverAddress
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
----[mla]----
> WARNING
>
> Importante
>
> Las dimensiones que indiques deben coincidir con las del paquete para que el carrier no te rechace el envío. Si no lo rechaza y las dimensiones son incorrectas, descontaremos esa diferencia del monto total de la cuenta del vendedor.
------------
----[mlm]----
> WARNING
>
> Importante
>
> Las dimensiones que indiques deben coincidir con las del paquete para que el carrier no te rechace el envío. Si no lo rechaza y las dimensiones son incorrectas, descontaremos esa diferencia del monto total de la cuenta del vendedor.
------------

## Puedes añadir otros tipos de envío

----[mla]----
Por defecto, vas a tener configurado el envío a cargo del comprador. Si quieres, puedes ofrecer envío gratis y/o retiro en domicilio.
------------
----[mlm]----
Por defecto, tendrás configurado el envío a cargo del comprador. Si quieres, podrás ofrecer envío gratis y/o recolección en domicilio.
------------

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Envío gratis

----[mla]----
El costo del envío será debitado de la cuenta del vendedor cuando reciba un pago. 

Puedes ofrecer distintos métodos de envíos modificando el ID. Consulta los <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=MLA&shipping_mode=me2&allow_free_shipping=true" target="_blank">id de medios de envío</a> envíos disponibles para saber cuáles agregar. 

Por ejemplo, en el siguiente código se encuentra sumado el `ID 73328` que refiere a un envío normal a domicilio de OCA y el `ID 504945` para envío normal a domicilio de Adreani. 
------------
----[mlm]----

El costo del envío será debitado de la cuenta del vendedor cuando reciba un pago. 

Puedes ofrecer distintos métodos de envío modificando el ID. Consulta los <a href="https://api.mercadolibre.com/shipping_methods/search?site_id=MLA&shipping_mode=me2&allow_free_shipping=true" target="_blank">id de medios de envío</a> disponibles para saber cuáles agregar. 

Por ejemplo, en el siguiente código se encuentra sumado el `ID 509247` que refiere a un envío estándar a domicilio y el `ID 509245` para envío prioritario a sucursal de correo. 

------------

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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Simulador de costos de envíos
----[mla, mlm]----
Puedes simular costos desde la calculadora de envíos. Para hacerlo, debes reemplazar los valores `sellerId`, `shippingMethod Id`, `price`, `zipCode`, `alto`, `ancho`, `largo`, `peso` de tu paquete.
------------ 

> https://api.mercadolibre.com/users/_sellerId_/shipping_options?free_method=_shippingMethodId_&item_price=_price_&zip_code=_zipCode_&dimensions=_alto_x_ancho_x_largo_,_peso

[[[
```curl

curl --location --request GET 'http://api.mercadolibre.com/users/179504451/shipping_options?free_method=182&item_price=718&zip_code=74474322&dimensions=2x11x16,88'

```
]]]

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Retiro en domicilio

----[mla]----
También puedes ofrecer la posibilidad de retirar el producto por el domicilio que configuraste, indicándole al comprador cuándo y dónde retirarlo. 
------------
----[mlm]----
También puedes ofrecer la posibilidad de recoger el producto en el domicilio que configuraste, indicándole al comprador cuándo y dónde retirarlo. 
------------


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

**¡Y listo! Mercado envíos ya se encuentra integrado.** 

Una vez que se reciba una venta, solo hay que <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_1603" target="_blank">preparar el paquete y enviarlo</a>.

----[mla]----

> NOTE
>
> Gestión de etiquetas
>
> Cuando se efectúe una venta, te va a llegar un e-mail con un botón para imprimir la etiqueta que tendrás que pegar en el paquete. También podrás ver los <a href="https://www.mercadopago.com.ar/activities?type=facet_type_collection&status=facet_shipping_me_all" target="_blank">pagos pendientes de impresión</a> desde la cuenta de Mercado Pago que recibió la venta.
------------
----[mlm]----

> NOTE
>
> Gestión de etiquetas
>
> Cuando se efectúe una venta, te va a llegar un e-mail con un botón para imprimir la etiqueta que tendrás que pegar en el paquete. También podrás ver los <a href="https://www.mercadopago.com.mx/activities?type=facet_type_collection&status=facet_shipping_me_all" target="_blank">pagos pendientes de impresión</a> desde la cuenta de Mercado Pago que recibió la venta.
------------

## Ejemplo de una preferencia completa

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

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/web-payment-checkout/test-integration/)

