---
sites_supported:
  - mla
---

# Integra el Web Checkout

## ¿Cómo me integro? 

![Integration](/images/web-payment-checkout/flow-integration-v2.png)

Primero, descarga el SDK que necesites usar en la carpeta de tu proyecto.


Luego, sigue estos pasos:

1. Genera tu preferencia
1. Suma el Checkout a tu sitio

## Pasos para integrarte

Instalar el Web Checkout consta de dos pasos: 

#### 1) Genera tu preferencia

Escribe el siguiente código que consta de tres partes:

* Suma la SDK descargada de Mercado Pago en tu proyecto:

[[[
 ```php
 <?php
// Ejecuta SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
?>
```
```node
// Ejecuta SDK de Mercado Pago
var mercadopago = require('mercadopago');
```
```java
// Ejecuta SDK de Mercado Pago
import com.mercadopago.MercadoPago;
```
```ruby
// Ejecuta SDK de Mercado Pago
require 'mercadopago.rb'
```
```csharp
// Ejecuta SDK de Mercado Pago
 using MercadoPago;
```
]]]

* Agrega las [credenciales](https://www.mercadopago.com/mla/account/credentials) para habilitar el uso de la SDK de Mercado Pago:

[[[
 ```php
 <?php
 // SDK de Mercado Pago
 require __DIR__ .  '/vendor/autoload.php';
 
 //Agrega credenciales
MercadoPago\SDK::setAccessToken('ENV_ACCESS_TOKEN');
?>
```
```node
// SDK de Mercado Pago
var mercadopago = require('mercadopago');

//Agrega credenciales
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

//Agrega credenciales
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
```
```ruby
// SDK de Mercado Pago
require 'mercadopago.rb'

//Agrega credenciales
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN"
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

//Agrega credenciales
MercadoPago.SDK.AccessToken = "ENV_ACCESS_TOKEN";
```
]]]

* Configura la preferencia según tu producto o servicio:

[[[
 ```php
<?php
 // SDK de Mercado Pago
 require __DIR__ .  '/vendor/autoload.php';
 
 //Agrega credenciales
MercadoPago\SDK::setAccessToken('ENV_ACCESS_TOKEN');

// Crea un objeto de preferencia
 $preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia
  $item = new MercadoPago\Item();
  $item->title = 'Mi producto';
  $item->quantity = 1;
  $item->unit_price = 75.56;
  $preference->items = array($item);
  $preference->save();
?>
```
```node
// SDK de Mercado Pago
var mercadopago = require('mercadopago');

//Agrega credenciales
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

// Configura tu preferencia
var preference = {
  items: [
    
      title: 'Mi producto',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 75.56
    ]
};
mercadopago.preferences.create(preference)
  .then(function (preference) {
    // Do something if preference has been created successfully
    console.log(preference)
  }).catch(function (error) {
    // If an error has occurred
  });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

//Agrega credenciales
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");

//Crea un objeto de preferencia
Preference preference = new Preference();

// Crea un ítem en la preferencia
Item item = new Item();
item.setTitle("Mi producto")
    .setQuantity(1)
    .setUnitPrice((float) 75.56);
preference.appendItem(item);
preference.save();
```
```ruby
// SDK de Mercado Pago
require 'mercadopago.rb'

//Agrega credenciales
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN"

//Crea un item en la preferencia
item = MercadoPago::Item.new({
  title:        "Mi producto",
  quantity:     1,
  unit_price:   75.56
})

//Crea un objeto de preferencia
preference = MercadoPago::Preference.new({
  items: [item]
})
preference.save()
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

//Agrega credenciales
MercadoPago.SDK.AccessToken = "ENV_ACCESS_TOKEN";

//Crea un objeto de preferencia
Preference preference = new Preference(); 

//Crea un item en la preferencia
preference.Items.Add(
  new Item()
  {
    Title = "Mi producto", 
    Quantity = 1,
    CurrencyId = "ARS",
    UnitPrice = (decimal)75.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="**ENV_ACCESS_TOKEN**"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

#### 2) Suma el Checkout a tu sitio

[[[
```php
===
Redirige al init_point de la preferencia
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="<?php echo $preference->init_point; ?>">Pagar con Mercado Pago</a>
    </body>
</html>
```
```node
===
Redirige al init_point de la preferencia
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="$$init_point$$" target="_blank">Pagar</a>
    </body>
</html>
```
```java
===
Redirige al init_point de la preferencia
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="${preference.initPoint}">Pagar con Mercado Pago</a>
    </body>
</html>
```
```ruby
===
Redirige al init_point de la preferencia
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="<%= @init_point %>" target="_blank">Pagar</a>
    </body>
</html>
```
```csharp
===
Redirige al init_point de la preferencia
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="@Html.DisplayFor(model => model.InitPoint)">Pagar con Mercado Pago</a>
    </body>
</html>
```
]]]

#### ¡Excelente! Terminaste tu integración.
_Haz clic en el link dentro de tu sitio y [prueba el flujo de tu  Web Checkout](https://docs.google.com/document/d/1ZexGiAgDG_zzasbjFOUrReB7wZF4FOHz9gQqaGSAr-0/edit?ts=5d13fe3a#bookmark=id.wa541l8g0ojd)._
 
>WARNING
>
>Importante
>
> No te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo. No puedes pagar con la misma cuenta que creaste el formulario de pago.

### Próximos pasos

[Prueba tu integración]()

[Integración avanzada]()

[Personalizar]()

[Configuraciones]()



 