# Integra Checkout Pro

## ¿Cómo me integro?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Genera tu preferencia

	1.1 Suma la SDK descargada de Mercado Pago en tu proyecto.

	1.2 Agrega las credenciales para habilitar el uso de la SDK de Mercado Pago.

	1.3 Configura la preferencia según tu producto o servicio.

2. Suma el checkout a tu sitio

## Pasos para integrarte

Instalar el Checkout Pro consta de dos pasos:

### 1. Genera tu preferencia

Escribe el siguiente código que consta de tres partes:

1.1 Suma la <a href="https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/previous-requirements#bookmark_requisitos_previos" target="_blank"> SDK de Mercado Pago</a> en tu proyecto:

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
# SDK de Mercado Pago
require 'mercadopago.rb'
```
```csharp
// SDK de Mercado Pago
 using MercadoPago;
```
]]]

<br/><br/>1.2 Agrega las <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credenciales</a> para habilitar el uso de la SDK de Mercado Pago:<br/>

[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Agrega credenciales
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

// Agrega credenciales
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK de Mercado Pago
require 'mercadopago.rb'

# Agrega credenciales
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

// Agrega credenciales
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";
```
]]]


<br/><br/>1.3 Configura la preferencia según tu producto o servicio:<br/>

[[[
 ```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Agrega credenciales
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
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Crea un objeto de preferencia
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
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

// Agrega credenciales
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

# Agrega credenciales
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

# Este valor reemplazará el string "<%= @preference_id %>" en tu HTML
@preference_id = preference["response"]["id"]
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

// Agrega credenciales
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";

// Crea un objeto de preferencia
Preference preference = new Preference();

// Crea un ítem en la preferencia
preference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
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

----[mlc, mco]----
> WARNING 
> 
> Cambiar el valor unit_price
> 
> El valor de unit_price debe ser entero en los países Colombia y Chile.
------------

> NOTE
>
> Acepta pagos solo de usuarios registrados
>
> Si quieres aceptar pagos únicamente de usuarios registrados, con tarjetas y dinero en cuenta de Mercado Pago, ingresa en [esta sección](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations/#bookmark_aceptar_pagos_únicamente_de_usuarios_registrados) para más información. 

### 2. Suma el checkout a tu sitio

Por último, suma el siguiente código para mostrar el botón de pago de tu Checkout Pro en el lugar que quieras que aparezca.

> Si tu sitio funciona en mobile, ten en cuenta que es necesario configurar las `back_urls` si deseas volver a tu sitio al finalizar el pago. Para más información, puedes visitar la sección [Integración avanzada](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration/). 

[[[
```php
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id="<?php echo $preference->id; ?>">
  </script>
</form>
```
```node
<form method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id='<%= global.id %>'>
  </script>
</form>
```
```java
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id="${preference.id}">
  </script>
</form>
```
```ruby
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id="<%= @preference_id %>">
  </script>
</form>
```
```csharp
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id="@Html.DisplayFor(model => model.id)">
  </script>
</form>
```
]]]


> WARNING
>
> Importante
>
> No te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo. No puedes pagar con la misma cuenta que creaste el formulario de pago.<br/> 

#### ¡Excelente! Terminaste tu integración.
_Haz clic en el link dentro de tu sitio y [prueba la integración de tu Checkout Pro](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration/)_.<br/><br/>

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Integración avanzada](http://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Acepta pagos solo de usuarios registrados
>
> Permite pagos solo de usuarios registrados en Mercado Pago, con tarjetas y dinero en cuenta.
>
> [Usuarios regsitrados](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations/#bookmark_aceptar_pagos_únicamente_de_usuarios_registrados)
