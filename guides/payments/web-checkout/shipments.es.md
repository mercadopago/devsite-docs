---
  sites_supported:
      - mla
      - global
---

# Agregando envíos

Implementa la logística de tu negocio con **Mercado Envíos**.

* Te damos todo resuelto: Recibe el pago del producto y del envío en la misma operación.
* Sólo tienes que imprimir la etiqueta de Mercado Envíos y despachar el paquete en el correo.
* Te protegemos frente a _chargebacks_ o pérdidas en el correo, sin necesidad de que tengas que presentar documentación.

## Cómo funciona

La siguiente documentación te permitirá ofrecer en el checkout de Mercado Pago una opción de envío y que el cliente pague el costo del envío junto con el pago del producto.

Te recomendamos integrar la calculadora de costos de envíos en tu checkout.

## Cómo implementarlo

### Paso 1: Activa tu cuenta para utilizar Mercado Envíos
[Activa tu cuenta](http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=) cargando tu dirección. La misma debe ser la dirección de despacho y será utilizada para calcular el costo del envío.

### Paso 2: Agrega Mercado Envíos a tu checkout
Agrega las dimensiones y peso de tus productos en la preferencia de pago.

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
```csharp
Shipments shipments = new Shipments()
 {
     Mode = "me2",
     Dimensions = "30x30x30,500",
     Description = "Ergonomic Silk Shirt",
     ReceiverAddress = new ReceiverAddress(){
      Zip_code = "5700",
      StreetNumber = 123,
      StreetName = "Street",
      Floor = 4,
      Apartment = "C"
     }
 };
```
]]]

> NOTE
>
> Nota
>
> El formato de las dimensiones
```alto x ancho x largo (centímetros), peso (gramos)```
> Si indicas mal las dimensiones y no coinciden con el paquete físico, el _carrier_ podría no admitir el envío. En caso de que te admitan el paquete, te descontaremos de tu cuenta la diferencia automáticamente.

#### Retiro por sucursal
Puedes ofrecer la posibilidad de retirar el producto por tu local, indicándole al comprador dónde y cuándo debe retirarlo. Para esto, debes incluir:

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

#### Ofrece envíos gratis

Debes indicar el medio de envío que vas a ofrecer de manera gratuita. El monto del mismo te será debitado de tu cuenta al momento de recibir un pago.

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



Consulta los _id_ de [medio de envío](https://api.mercadolibre.com/sites/MLA/shipping_methods?marketplace=NONE) disponibles.


#### Intégralo en el Checkout

Un ejemplo de Checkout con Mercado Envíos queda de la siguiente manera:

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
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));

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



### Paso 3: Mejora la experiencia con la calculadora de cuotas

Te damos la posibilidad de pre-calcular el costo y los tiempos de envío para que tus compradores puedan verlo previo al _checkout_.

Para poder realizar el cálculo debes enviar:

* `dimensions`: Es el tamaño del producto que quieres enviar, el formato es: alto x ancho x largo (centímetros), peso (gramos). Consulta los valores admitidos por OCA.

* `zip_code`: Es el código postal de tu comprador.

* `item_price`: Es el precio del producto que vas a enviar. Si son múltiples productos, indicá el precio total.

* `free_method` (opcional): Puedes ofrecer envío gratis, esto te permite generar más ventas. Sólo debes indicarnos el medio de envío que vas a ofrecer como gratis. Luego, el monto del mismo te será debitado de tu cuenta al momento de recibir un pago.


### Paso 4: Imprimí la etiqueta

Cada vez que recibas un pago, te llegará un _e-mail_ con un botón para imprimir la etiqueta.
También puedes ver los [pagos pendientes de impresión](https://www.mercadopago.com.ar/activities?type=collection&status=approved&shipping_or_archived=with_ME&tagME=ready_to_print) desde tu cuenta de Mercado Pago.


En una caja incluye todo lo que vendiste. Pega la etiqueta en el paquete y despáchalo. No tendrás que pagarle nada al carrier porque las etiquetas de Mercado Envíos estarán pagas con el dinero que pagó tu comprador para el envío.

### Paso 5: Seguimiento
Utiliza nuestras herramientas para hacer el seguimiento.
Tanto en el listado de cobros, como a través de nuestras APIs vas a poder realizar el seguimiento de tus envíos.

Adicionalmente te podemos avisar cuando un envío esté listo para despachar mediante [notificaciones](/guides/notifications/ipn.es.md) que se envían desde los servidores de Mercado Pago a los tuyos. Esto te permitirá administrar tu _stock_ y conocer el estado de los pagos y envíos.
