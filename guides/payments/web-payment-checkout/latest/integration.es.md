---
sites_supported:
  - mla
---

# Integra el Web Checkout

## ¿Cómo es el flujo de integración? 

![Integration](/images/web-payment-checkout/integration-v2.png)

1. Importa el SDK a utilizar.
1. Configura tus credenciales.
1. Crea una preferencia.
1. Redirigí al comprador al checkout.

## Paso a paso


#### 1) Importa el SDK

En tu proyecto importa el SDK de Mercado Pago:
[[[
 ```PHP
===
<?php
require __DIR__  ‘/vendor/autoload.php;
?>
```
```Java
===
import com.mercadopago.*;
```
```Node JS
===
$ npm install mercadopago
```
```.Net
===
using MercadoPago;
```
```Ruby
===
require 'mercadopago.rb'
```
]]]
#### 2) Configura tus credenciales

Configura las credenciales necesarias que habilitan el uso de la SDK de Mercado Pago, para esto reemplaza las mismas, obtenidas desde siguiente [link](https://www.mercadopago.com/mla/account/credentials?type=basic).
[[[
 ```PHP
===
<?php
require __DIR__  ‘/vendor/autoload.php;
MercadoPago\SDK::setClientId(“ENV_CLIENT_ID”);
MercadoPago\SDK:setClientSecret(“ENV_CLIENT_SECRET”);
?>
```
```Java
===
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```Node JS
===
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```.Net
===
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";
```
```Ruby
===
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

#### 3) Creá una preferencia
[[[
 ```PHP
===
<?php
  $preference = new MercadoPago\Preference();
  
  $item = new MercadoPago\Item();
  $item->title = "Fantastic Paper Watch";
  $item->quantity = 6;
  $item->currency_id = "ARS";
  $item->unit_price = 55.12;

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
```Java
===
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Fantastic Paper Watch")
    .setQuantity(6)
    .setCategoryId("ARS")
    .setUnitPrice((float) 55.12);

Payer payer = new Payer();
payer.setEmail("leilani@yahoo.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();
```
```Javascript
===
var preference = {}

var item = {
  title: 'Fantastic Paper Watch',
  quantity: 6,
  currency_id: 'ARS',
  unit_price: 55.12
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
```.Net
===
Preference preference = new Preference();

 preference.Items.Add(
  new Item()
  {
    Id = "1234",
    Title = "Fantastic Paper Watch", 
    Quantity = 6,
    CurrencyId = "ARS",
    UnitPrice = (float)55.12
  }
  preference.Payer = new Payer()
  {
    Email = "leilani@yahoo.com"
  };

  preference.Save();
```
```Ruby
===
preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="Fantastic Paper Watch"
item.quantity= 6
item.currency_id = 'ARS'
item.unit_price = 55.12

payer = MercadoPago::Payer.new()
payer.email="leilani@yahoo.com"

preference.items = [item]
preference.payer = payer

preference.save
```
```curl
===
curl -X POST \
'https://api.mercadolibre.com/checkout/preferences?access_token=ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
-H 'Postman-Token: 9edb9fbf-5e87-4ecf-b87c-7f3c30e7bee9' \
-H 'cache-control: no-cache' \
-d '{
	"item_quantity":"1",
	"item_description":"Item de Prueba",
	"item_unit_price":"234.3"
}'
```
]]]
#### 4) Agrega un botón “Pagar” y redirige al Web Checkout
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

#### ¡Listo! Tu integración a finalizado.
_Haz click en el botón “Pagar” y prueba el flujo del  Web Checkout._
 
>WARNING
>
>Importante
>
> Cierra la sesión de tu cuenta de Mercado Pago, ya que no puedes usar la misma cuenta con la que configuraste las credenciales.

#### Próximos pasos

* Prueba tu integración →
* Consideraciones para la puesta en producción →
* Realiza una integración avanzada →
* Personaliza el Web Checkout →

 