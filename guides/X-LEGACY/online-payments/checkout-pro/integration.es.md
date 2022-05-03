# Integra con Checkout Pro

La integración con el Checkout Pro de Mercado Pago te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de manera simple, rápida y segura.

> NOTE
>
> Buenas prácticas
>
> Utiliza nuestro [video tutorial](#bookmark_video_tutorial) y el [ejemplo de implementación básica](#bookmark_ejemplos_descargables) para comprender más sobre la integración completa con Checkout Pro.

## Paso a paso

![Integration](/images/web-payment-checkout/flow-v2-2.png)

Instalar el Checkout Pro consta de dos pasos:

1. Generar las preferencias deseadas;
2. Sumar el Checkout Pro a tu sitio.

> SERVER_SIDE
>
> h3
>
> &nbsp;1. Genera tu preferencia

Suma la [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/previous-requirements#bookmark_requisitos_previos) y las [credenciales]([FAKER][CREDENTIALS][URL]) necesarias en tu proyecto para habilitar el uso de preferencias:

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

En seguida, configura la preferencia según tu producto o servicio:

----[mla, mlb, mlu, mpe, mlm]----

> Ten en cuenta que es necesario configurar las `back_urls` si deseas volver a tu sitio al finalizar el pago. Para más información, visita la sección [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_url_de_retorno).

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
// Crea un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crea un ítem en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();

client.create(request);
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
> Adapta la integración de Checkout Pro a tu negocio
>
> Accede a la sección [Configuración de preferencias](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations) para saber cómo agregar nuevas funciones a Checkout Pro de acuerdo con tu modelo de negocio.

<span></span>

> CLIENT_SIDE
>
> h3
>
> &nbsp;2. Suma el Checkout Pro a tu sitio

Agrega la SDK MercadoPago.js V2 a tu proyecto:

```html
// SDK MercadoPago.js V2
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Después, configura las credenciales de la SDK para su uso e inicializa tu checkout con el ID de la preferencia creada previamente y el identificador del elemento donde deberá mostrarse el botón de pago:

[[[
```html
<script>
  // Agrega credenciales de SDK
  const mp = new MercadoPago("PUBLIC_KEY", {
    locale: "es-AR",
  });

  // Inicializa el checkout
  mp.checkout({
    preference: {
      id: "YOUR_PREFERENCE_ID",
    },
    render: {
      container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
      label: "Pagar", // Cambia el texto del botón de pago (opcional)
    },
  });
</script>
```
]]]

> NOTE
>
> Nota
>
> Recuerda reemplazar el valor **AR** por tu pais en el campo `locale`.

En el ejemplo anterior, se mostrará un botón de pago, que a su vez abrirá el Checkout Pro.

Puedes consultar otras maneras de abrir el checkout en la sección de [Personalizaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/customizations).

> WARNING
>
> Importante
>
> No te olvides de acceder al Checkout Pro desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago antes de probarlo, ya que no puedes pagar con la misma cuenta con la que creaste el formulario de pago.<br/>

## Video tutorial

Implementa la solución Checkout Pro en tu sitio con nuestro video tutorial sobre la integración:

<div class="embed-container">
    <iframe width="1106" height="622" src="https://www.youtube.com/embed/x1DCjagVUKY" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
    </iframe>
</div>

<br/>
<br/>

## Ejemplo de implementación básica

Consulta el [ejemplo de integración completa](http://github.com/mercadopago/checkout-payment-sample) en GitHub para PHP o NodeJS para descargar un proyecto básico de implementación rápida de Checkout Pro en tu sitio.

------------

### Próximo paso

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba tu integración con Checkout Pro
>
> Revisa que esté todo bien con tu integración utilizando usuarios de prueba.
>
> [Prueba tu integración con Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)
