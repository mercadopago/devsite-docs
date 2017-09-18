# Recibir pagos

Recibe pagos de manera simple y segura utilizando el Checkout de Mercado Pago.

## 1. Crea una preferencia de pago

Una preferencia de pago contiene toda la información del producto o servicio que se va a pagar. Por ejemplo:

* Descripción y monto.
* Información de tu comprador (_Email_, nombre, dirección, etc).
* Medios de pago que aceptas.
* _ID_ de referencia de tu sistema.

Para crear una preferencia de pago debes [instalar el SDK de MercadoPago](https://github.com/mercadopago) y configurar tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

[[[
```php

<?php  
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

Luego, deberás agregar los atributos de tu preferencia de pago y crear una preferencia:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->id = "1234";
$item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
$item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
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
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
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
    quantity: [FAKER][NUMBER][BETWEEN][1,10],
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
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
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

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
shipments.setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][ADDRESS][BUILDING_NUMBER], "[FAKER][ADDRESS][STREET_NAME]", [FAKER][NUMBER][BETWEEN][1,20], "C"));
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

## 3. Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados.

Esto te permitirá administrar tu _stock_ y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](/guides/notifications/ipn.es.md) para conocer más sobre esto.

## 4. Cancelar un pago

Los medios de pago en efectivo deben ser pagados entre los 3 a 5 días dependiendo de cada uno.

El vencimiento de estos **no es automático**, por lo cuál es necesario que ejecutes la [cancelación del pago](/guides/manage-account/cancellations-and-refunds.es.md) luego del vencimiento.


## 5. Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuarios y tarjetas de prueba.

Visita la sección [Probando](/guides/payments/web-checkout/testing.es.md) para más información.
