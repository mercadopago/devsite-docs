# Integrar Checkout Pro

La integración con Checkout Pro te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de forma sencilla, rápida y segura.

En esta documentación encontrarás todos los pasos necesarios para integrar Checkout Pro a través de **nuestras SDKs**. Para hacer esto, sigue los pasos que se describen a continuación.

> También es posible realizar la integración con llamadas a través del backend directamente a la [API de preferencias](/developers/es/reference/preferences/_checkout_preferences/post). En esta opción, obtendrá el enlace de Checkout Pro en el atributo `init_point`, en la respuesta del request de la API. A partir de ahí, solo utilízalo para redirigir al comprador a la caja.

## Instalar SDK de Mercado Pago

El primer paso para integrar Checkout Pro es instalar el SDK de Mercado Pago en tu proyecto. Para hacer esto, usa uno de los códigos disponibles a continuación.

[[[
```php
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar el SDK en tu proyecto [Maven](http://maven.apache.org/install.html), debes agregar la siguiente dependencia en tu archivo <code>pom.xml</code> y ejecutar <code>maven install</code> en la línea de comandos de tu terminal:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.1.7</version>
</dependency>
```
```ruby
===
Para instalar la SDK, debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [gema](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------

----[mla, mlm, mco, mlc, mlu]----
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Pip](https://pypi.org/project/mercadopago/):
===
pip3 install mercadopago
```
]]]

> SERVER_SIDE
>
> h2
>
> Crear preferencia

Las preferencias son conjuntos de información que te permiten configurar un producto o servicio que deseas cobrar, como el precio y la cantidad, así como otras configuraciones relacionadas con el flujo de pago definido.

Para crear una preferencia, utiliza uno de los SDK disponibles a continuación, completando los atributos con la información respectiva.

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
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agrega credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
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

Cuando termines de crear la preferencia, debes configurarla de acuerdo con tu producto o servicio. Para ello, utiliza uno de los códigos disponibles a continuación, completando los atributos con la información respectiva.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```php
<?php
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
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });
```
```java
PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
```
```ruby
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
]]]

------------
----[mlc, mco]----

[[[
```php
<?php
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
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
  })
  .catch(function (error) {
    console.log(error);
  });
```
```java
PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
```
```ruby
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
]]]

> WARNING
>
> Importante
>
> El valor de `unit_price` debe ser un número entero.

------------

> CLIENT_SIDE
>
> h2
>
> Añadir checkout

Una vez que hayas creado la preferencia en tu backend, deberás instalar el SDK de frontend de Mercado Pago en tu proyecto para agregar el botón Checkout Pro.

La instalación se realiza en **dos pasos**: agregar el SDK de Mercado Pago al proyecto con tus credenciales configuradas e iniciar el checkout desde la preferencia generada previamente.

1. Para incluir el SDK de Mercado Pago.js, agrega el siguiente código al HTML del proyecto.

```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

2. Cuando termines de agregar el SDK de Mercado Pago.js, **configura las credenciales del SDK** e inicia tu checkout con el **ID de la preferencia** creada anteriormente y el identificador del elemento donde se debe mostrar el botón de pago, como se muestra en el siguiente ejemplo.


[[[
```html
<div class="cho-container"></div>
<script>
  const mp = new MercadoPago('PUBLIC_KEY', {
    locale: 'es-AR'
  });

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Pagar',
    }
  });
</script>
```
]]]


> WARNING
>
> Importante
>
> Al crear un pago es posible recibir 3 estados diferentes: `Pendiente`, `Rechazado` y `Aprobado`. Para mantenerse al día con las actualizaciones, debes configurar tu sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulta [Notificaciones](/developers/es/docs/checkout-pro/additional-content/notifications/Introduction) para obtener más detalles.

En el ejemplo anterior, se mostrará un botón de pago y será responsable por abrir el Checkout Pro. Si deseas personalizar la forma en que se abrirá el Checkout, consulta la sección [Esquema de apertura](/developers/es/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

## Ejemplo de implementación

Consulta el [ejemplo de integración completa](http://github.com/mercadopago/checkout-payment-sample) en GitHub para **PHP** o **NodeJS** para descargar un proyecto básico para una implementación rápida de Checkout Pro en tu sitio.