# Integra Checkout Pro

Integrar el Checkout Pro de Mercado Pago te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de manera simple, rápida y segura.

Usa los [ejemplos descargables](#bookmark_ejemplos_descargables) para conocer la integración completa o para adaptarlos según lo que necesites.

## ¿Cómo me integro?

![Integration](/images/web-payment-checkout/flow-v2-2.png)

1. Genera tu preferencia

	1.1 Suma la SDK de Mercado Pago en tu backend y agrega las credenciales para habilitar su uso.

	1.2 Configura la preferencia según tu producto o servicio.

2. Suma el checkout a tu sitio
   
	2.1 Suma la SDK MercadoPago.js V2 en tu frontend.

	2.2 Agrega las credenciales de la SDK para habilitar su uso e inicializa el checkout con la preferencia creada.

## Pasos para integrarte

Instalar el Checkout Pro consta de dos pasos:

<span></span>

> SERVER_SIDE
>
> h3
>
> &nbsp;1. Genera tu preferencia

Desde tu backend, escribe el siguiente código que consta de dos partes: 

1.1 Suma la [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/previous-requirements#bookmark_requisitos_previos) en tu proyecto y agrega las [credenciales]([FAKER][CREDENTIALS][URL]) para habilitar su uso:

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
require 'mercadopago'
# Agrega credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agrega credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]

1.2 Configura la preferencia según tu producto o servicio:<br/>

----[mla, mlb, mlu, mpe, mlm]----

> Ten en cuenta que es necesario configurar las `back_urls` si deseas volver a tu sitio al finalizar el pago. Para más información, puedes visitar la sección [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_url_de_retorno). 

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
require 'mercadopago'

# Agrega credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crea un objeto de preferencia
preference_data = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor reemplazará el string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Agrega credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crea el objeto de request de la preference
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago

# Agrega credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76,
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
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

------------

----[mlc, mco]----
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
$item->unit_price = 75;
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
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.save();
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'

# Agrega credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crea un objeto de preferencia
preference_data = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor reemplazará el string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Agrega credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crea el objeto de request de la preference
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Crea la preferencia usando el client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago

# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}'
```
]]]

> WARNING
>
> Importante
>
> El valor de `unit_price` debe ser entero.

------------
<span></span>

> NOTE
>
> Acepta pagos solo de usuarios registrados
>
> Si quieres aceptar pagos únicamente de usuarios registrados, con tarjetas y dinero en cuenta de Mercado Pago, ingresa en [esta sección](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations/#bookmark_aceptar_pagos_únicamente_de_usuarios_registrados) para más información. 

<span></span>

> CLIENT_SIDE
>
> h3
>
> &nbsp;2. Suma el Checkout Pro a tu sitio


Ahora desde tu frontend, sigue estos pasos para poder sumar el checkout a tu sitio: 

2.1. Agrega la SDK MercadoPago.js V2 a tu proyecto: 

[[[
```php
// SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```node
// SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```java
// SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```ruby
# SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```csharp
// SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```python
# SDK MercadoPago.js V2 
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
]]]

2.2. Agrega las credenciales de la SDK para su uso e inicializa tu checkout con el ID de la preferencia creada previamente y el identificador del elemento donde deberá mostrarse el botón de pago.

[[[
```html
<script>
// Agrega credenciales de SDK 
  const mp = new MercadoPago('PUBLIC_KEY', {
        locale: 'es-AR'
  });
  
  // Inicializa el checkout 
  mp.checkout({
      preference: {
          id: '239656545-89accc4d-3fc9-4835-828b-b8fa16b2fdce'
      },
      render: {
            container: '.cho-container', // Indica dónde se mostrará el botón de pago
            label: 'Pagar', // Cambia el texto del botón de pago (opcional) 
      }
});
</script>
```
]]]

En este caso, se mostrará un botón de pago que abrirá el Checkout Pro. 

Puedes consultar otras maneras de abrir el checkout en la [sección de Personalizaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/customizations).

> WARNING
>
> Importante
>
> No te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo. No puedes pagar con la misma cuenta que creaste el formulario de pago.<br/> 

#### ¡Excelente! Terminaste tu integración.
_Haz clic en el link dentro de tu sitio y [prueba la integración de tu Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)_.<br/><br/>

## Ejemplos descargables

> GIT
>
> Checkout Pro
>
> Te dejamos [ejemplos completos de integración](http://github.com/mercadopago/checkout-payment-sample) en GitHub para PHP o NodeJS para que puedas descargar al instante.

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Acepta pagos con la billetera de Mercado Pago
>
> Permite pagos solo de usuarios registrados en Mercado Pago, con tarjetas y dinero disponible.
>
> [Usuarios regsitrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations/#bookmark_aceptar_pagos_únicamente_de_usuarios_registrados)
