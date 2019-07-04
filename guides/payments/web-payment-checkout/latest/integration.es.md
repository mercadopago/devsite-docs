---
sites_supported:
  - mla
---

# Integra Web Checkout

> INDEX
>
> En esta página
>
>
>
> [¿Cómo me integro?](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/integration#bookmark_¿como_me_integro?)
>
> [Pasos para integrarte](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/integration#bookmark_pasos_para_integrarte)
>
> [Próximos pasos](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/integration#bookmark_próximos_pasos)

## ¿Cómo me integro?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Genera tu preferencia

	1.1 Suma la SDK descargada de Mercado Pago en tu proyecto.

	1.2 Agrega las credenciales para habilitar el uso de la SDK de Mercado Pago.

	1.3 Configura la preferencia según tu producto o servicio.

2. Suma el Checkout a tu sitio

## Pasos para integrarte

Instalar el Web Checkout consta de dos pasos:

### 1. Genera tu preferencia

Escribe el siguiente código que consta de tres partes:

1.1 Suma la <a href="https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_requisitos_previos" target="_blank"> SDK de Mercado Pago</a> en tu proyecto:

[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;
```
```ruby
// SDK de Mercado Pago
require 'mercadopago.rb'
```
```csharp
// SDK de Mercado Pago
 using MercadoPago;
```
]]]

<br/><br/>1.2 Agrega las <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciales</a> para habilitar el uso de la SDK de Mercado Pago:<br/>

[[[
```php
 <?php
 // SDK de Mercado Pago
 require __DIR__ .  '/vendor/autoload.php';

 //Agrega credenciales
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

//Agrega credenciales
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
// SDK de Mercado Pago
require 'mercadopago.rb'

# 2: Configurá tus credenciales
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

//Agrega credenciales
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";
```
]]]


<br/><br/>1.3 Configura la preferencia según tu producto o servicio:<br/>

[[[
 ```php
<?php
 // SDK de Mercado Pago
 require __DIR__ .  '/vendor/autoload.php';

 //Agrega credenciales
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

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
# SDK de Mercado Pago
const mercadopago = require ('mercadopago');

# Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

# Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
  // Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

//Agrega credenciales
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");

// Crea un objeto de preferencia
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
# SDK de Mercado Pago
require 'mercadopago.rb'

# 2: Configurá tus credenciales
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')

# Crea un objeto de preferencia
preference_data = {
  "items": [
    {
      "title": "Mi producto",  
      "unit_price": 100,
      "quantity": 1
    }
  ]
}
preference = $mp.create_preference(preference_data)

# Este valor reemplazará el string "<%= @init_point %>" en tu HTML
@init_point = preference["response"]["init_point"]
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

//Agrega credenciales
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";

//Crea un objeto de preferencia
Preference preference = new Preference();

//Crea un item en la preferencia
preference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.ARS,
    UnitPrice = (decimal)75.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="**PROD_ACCESS_TOKEN**"' \
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


### 2. Suma el checkout a tu sitio

[[[
```php
===
Redirige al 'init_point' de la preferencia
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
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Mi sitio</title>
  </head>
  <body>
    <a href="$$init_point$$" target="_blank">Pagar</a>
  </body>
</html>
```
```java
===
Redirige al 'init_point' de la preferencia
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
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Mi sitio</title>
  </head>
  <body>
    <a href="<%= @init_point %>" target="_blank">Pagar</a>
  </body>
</html>
```
```csharp
===
Redirige al 'init_point' de la preferencia
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

> WARNING
>
> Importante
>
> No te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo. No puedes pagar con la misma cuenta que creaste el formulario de pago.<br/>

#### ¡Excelente! Terminaste tu integración.
_Haz clic en el link dentro de tu sitio y [prueba la integración de tu Web Checkout](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration/)_.<br/><br/>

> NOTE
>
> Nota
>
> Esta documentación refiere a la nueva versión del Web Checkout. Para **ver la versión anterior**, ve a la [sección de Web Checkout antigua](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/introduction/).

### Próximos pasos

<div>
<a href="http://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Prueba tu integración<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Revisa que esté todo bien en tu integración con los usuarios de prueba.</p>
</blockquote>
</a>
<a href="http://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Integración avanzada<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Optimiza tu integración y mejora la gestión de tus ventas.</p>
</blockquote>
</a>   
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
