---
sites_supported:
  - mla
---

# Integra el Web Checkout

## ¿Cómo me integro? 

![Integration](/images/web-payment-checkout/integration-v2.png)

Primero, descarga el SDK que necesites usar en la carpeta de tu proyecto.


Luego, sigue estos pasos:

1. Arma tu preferencia
1. Genera tu preferencia
1. Suma el Checkout a tu sitio

## Pasos para integrarte

Instalar el Web Checkout consta de tres pasos: 

#### 1) Arma tu preferencia

En un archivo del lenguaje que elijas dentro de tu proyecto, escribe el siguiente código que consta de tres partes:

* Suma la SDK descargada de Mercado Pago en tu proyecto:

[[[
 ```php
// Ejecuta SDK de Mercado Pago
<?php
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

* Agrega las credenciales para habilitar el uso de la SDK de Mercado Pago:

[[[
 ```php
 //Agrega credenciales
MercadoPago\SDK::setAccessToken('TUS-CREDENCIALES-AQUI');
```
```node
//Agrega credenciales
mercadopago.configure({
    access_token: 'TUS-CREDENCIALES-AQUI'
});
```
```java
//Agrega credenciales
MercadoPago.SDK.setAccessToken(TUS-CREDENCIALES-AQUI);
```
```ruby
//Agrega credenciales
MercadoPago::SDK.access_token = "TUS-CREDENCIALES-AQUI"
```
```csharp
//Agrega credenciales
MercadoPago.SDK.AccessToken = "TUS-CREDENCIALES-AQUI";
```
]]]

* Configura la preferencia según tu producto o servicio usando la siguiente línea como estructura:

[[[
 ```php
// Crea un objeto de preferencia
 $preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia
  $item = new MercadoPago\Item();
  $item->title = 'Mi producto';
  $item->quantity = 1;
  $item->unit_price = 75,56;
  $preference->items = array($item);
  $preference->save();
```
```node
// Configura tu preferencia
var preference = {
  items: [
    
      title: 'Mi productoe',
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
//Crea un objeto de preferencia
Preference preference = new Preference();

// Crea un ítem en la preferencia
Item item = new Item();
item.setTitle(""Mi producto"")
    .setQuantity(1)
    .setUnitPrice((float) 75.56);
preference.appendItem(item);
preference.save();
```
```ruby
//Crea un item en la preferencia
item = MercadoPago::Item.new({
  title:        ""Mi producto"",
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
//Crea un objeto de preferencia
Preference preference = new Preference(); 

//Crea un item en la preferencia
reference.Items.Add(
  new Item()
  {
    Title = ""Mi producto"", 
    Quantity = 1,
    CurrencyId = ""ARS"",
    UnitPrice = (float)75.56
  }
);
preference.Save()"
```
]]]

* Por último, obtiene la URL para tu sitio:

[[[
 ```php
 // TODO
 ```
```node
// TODO
```
```java
// TODO
```
```ruby
// TODO
```
```csharp
// TODO
```
]]]


#### 2) Genera tu preferencia
[[[
 ```phph
===
Guarda tu archivo y luego, ejecuta el siguiente código desde la terminal, reemplazando el nombre del archivo por el que armaste:
===
php {nombre-de-tu-archivo}.php
```
```node
// TODO
```
```java
// TODO
```
```ruby
// TODO
```
```csharp
// TODO
```
]]]

#### 3) Suma el Checkout a tu sitio
```html
===
Modifica la URL por la de tu Web Checkout
===
<!DOCTYPE html>
<html>
    <head>
        <title>Pagar</title>
    </head>
    <body>
        <a href="URL_WEB_CHECKOUT">Pagar con Mercado Pago</a>
    </body>
</html>
```

#### ¡Excelente! Terminaste tu integración.
_Haz clic en el link dentro de tu sitio y [prueba el flujo de tu  Web Checkout](https://docs.google.com/document/d/1ZexGiAgDG_zzasbjFOUrReB7wZF4FOHz9gQqaGSAr-0/edit?ts=5d13fe3a#bookmark=id.wa541l8g0ojd)._
 
>WARNING
>
>Importante
>
> No te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo, ya que no puedes pagar con la misma cuenta que creaste el formulario de pago.

 