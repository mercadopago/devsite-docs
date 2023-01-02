----[mla, mlb]---- 
# Configurar la integración con Cuenta de Mercado Pago y Cuotas sin tarjeta

Para configurar la integración de Payment Brick para recibir pagos con la **Cuenta de Mercado Pago y Cuotas sin tarjeta** debe seguir los pasos a continuación. 

1. [Crear preferencia](#bookmark_crear_preferencia)
2. [Crear container](#bookmark_crear_container)
3. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
4. [Instanciar Brick](#bookmark_instanciar_brick)
5. [Renderizar Brick](#bookmark_renderizar_brick)
6. [Administrar opciones de pago](#bookmark_administrar_opciones_de_pago)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet-credits) completo de la configuración de Payment Brick con la **Cuenta de Mercado Pago y Cuotas sin tarjeta** que puede usar como modelo.

------------
----[mlm]----
# Configurar la integración con Cuenta de Mercado Pago y Meses sin tarjeta de crédito

Para configurar la integración de Payment Brick para recibir pagos con la **Cuenta de Mercado Pago Y Meses sin tarjeta de crédito** debe seguir los pasos a continuación. 

1. [Crear preferencia](#bookmark_crear_preferencia)
2. [Crear container](#bookmark_crear_container)
3. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
4. [Instanciar Brick](#bookmark_instanciar_brick)
5. [Renderizar Brick](#bookmark_renderizar_brick)
6. [Administrar opciones de pago](#bookmark_administrar_opciones_de_pago)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet-credits) completo de la configuración de Payment Brick con la **Cuenta de Mercado Pago Y Meses sin tarjeta de crédito** que puede usar como modelo.

------------

> SERVER_SIDE
>
> h2
>
> Crear preferencia

El primer paso para darle al usuario la posibilidad de pagar con el Wallet de Mercado Pago es crear una preferencia en su backend. Agrega el [SDK de Mercado Pago](/developers/es/docs/sdks-library/landing) y las [credenciales](/developers/es/guides/additional-content/credentials/credentials) necesarias a tu proyecto para habilitar el uso de preferencias:

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

Luego configura la preferencia de acuerdo a tu producto o servicio:

[[[
```php
<?php

// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crear un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);

// el $preference->purpose = 'wallet_purchase'; solo permite pagos registrados
// para permitir pagos de guests, puede omitir esta propiedad
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Crear un objeto de preferencia
let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de guests puede omitir esta propiedad
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Meu produto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// Crear un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crear un elemento en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder()
  // el .purpose('wallet_purchase') solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta línea
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# Crear un objeto de preferencia
preference_data = {
  # el purpose: 'wallet_purchase', solo permite pagos registrados
  # para permitir pagos de guests, puede omitir esta propiedad
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor es el ID de preferencia que usará en el HTML en el inicio del Brick
@preference_id = preference['id']
```
```csharp
// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
  // el Purpose = 'wallet_purchase', solo permite pagos registrados
  // para permitir pagos de invitados, puede omitir esta propiedad
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el cliente
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Crea un elemento en la preferencia
preference_data = {
  # el "purpose": "wallet_purchase", solo permite pagos registrados
  # para permitir pagos de invitados, puede omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi elemento",
            "quantity": 1,
            "unit_price": 75.76
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
  "purpose": "wallet_purchase",
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

> NOTE
>
> Importante
>
> Para más detalles sobre cómo configurarlo, acceda a la sección [Preferencias.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences)<br/></br>
> <br/></br>
> Considera que cuando un usuario elige realizar un pago a través de la Billetera de Mercado Pago, será redirigido a la página de Mercado Pago para completar el pago. Por lo tanto, es necesario configurar `back_urls` si desea volver a su sitio al finalizar el pago. Para obtener más información, visite la sección [Redirigir al comprador a su sitio web.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)

> CLIENT_SIDE
>
> h2
>
> Crear container

Deberás crear un container para definir dónde se colocará el Brick en la pantalla. La creación del container se realiza insertando un elemento (por ejemplo, un div) en el código HTML de la página en la que se renderizará el Brick (ver el código a continuación).

> NOTE
>
> Atención
>
> El valor que se muestra en la propiedad `id` a continuación es solo un ejemplo y puede ser alterado, pero siempre debe coincidir con el `id` indicado en la renderización.

```html
  <div id="paymentBrick_container"></div>
```

> CLIENT_SIDE
>
> h2
>
> Incluir y configurar la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a las funcionalidades de Mercado Pago** desde tu frontend de forma segura.

> NOTE
>
> Atención
>
> Recuerda que todo el código JS se puede incluir en un `< script >` o también en archivos .js separados que importes en tu sitio.

Para esto deberás instalar la SDK agregando lo siguiente en tu código HTML:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Luego, inicializa la SDK y configura tu [clave pública](/developers/es/guides/additional-content/credentials/credentials) mediante código JavaScript de la siguiente manera:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

> CLIENT_SIDE
>
> h2
>
> Instanciar Brick

Con el container creado y la SDK JS instalada, el siguiente paso es instanciar el Brick builder, que permitirá generar el Brick. Para crear la instancia, inserta el código a continuación del paso anterior.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atención
>
> Durante la instanciación del Brick, es posible que aparezcan diferentes errores. Para más detalles sobre cada uno de ellos, consulta la sección [Posibles errores.](/developers/es/docs/checkout-bricks/additional-content/possible-errors)

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Una vez instanciado el builder, nuestro Brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el Brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // monto a ser pago
   preferenceId: '<PREFERENCE_ID>', // preferenceId generado en el backend
 },
 customization: {
   paymentMethods: {
     mercadoPago: 'all',
   },
 },
 callbacks: {
   onReady: () => {
      /*
       Callback llamado cuando Brick está listo
       Aquí puedes ocultar loadings de su sitio, por ejemplo.
      */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón de envío de datos
     // en este caso, el usuario fue redirigido a
     // la página de Mercado Pago para realizar el pago
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
   },
 },
};
  window.paymentBrickController = await bricksBuilder.create(
   'payment',
   'paymentBrick_container',
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```

El resultado de renderizar el Brick debe ser como la imagen de abajo:

----[mlb]---- 
![payment-Brick-wallet-credits-mlb](checkout-bricks/payment-brick-wallet-credits-mlb-es.jpg)

------------
----[mla]---- 
![payment-Brick-wallet-credits-mla](checkout-bricks/payment-brick-wallet-credits-mla-es.jpg)

------------
----[mlm]---- 
![payment-Brick-wallet-credits-mlm](checkout-bricks/payment-brick-wallet-credits-mlm-es.jpg)

------------

> CLIENT_SIDE
>
> h2
>
> Administrar opciones de pago

----[mla, mlb]---- 
Vea a continuación el fragmento de código responsable de incluir pagos con **Cuenta de Mercado Pago y Cuota sin tarjeta** como medio de pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

La propiedade `mercadoPago` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior se aceptarán pagos con **Cuenta de Mercado Pago y Cuotas sin tarjeta**.

------------

----[mlm]----
Vea a continuación el fragmento de código responsable de incluir pagos con **Cuenta de Mercado Pago y Meses sin tarjeta de crédito** como medio de pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

La propiedade `mercadoPago` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior se aceptarán pagos con **Cuenta de Mercado Pago y Meses sin tarjeta de crédito**.

------------

Si desea seleccionar una de las dos opciones, en lugar de la string `all`, puede pasar un array con solo con los medios deseados (`wallet_purchase` o `onboarding_credits`). Como en el ejemplo a continuación, donde solo se aceptarán pagos con Cuenta de Mercado Pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: ['wallet_purchase'], // ['onboarding_credits']
   }
 }
}
```