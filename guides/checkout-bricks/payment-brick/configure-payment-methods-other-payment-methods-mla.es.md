# Configurar la integración con otros medios de pago

Con el Checkout Bricks de Mercado Pago, es posible ofrecer, además de tarjeta y Pix, pagos vía **Rapipago** y **Pago Fácil**. 

Para obtener una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu _Access token_ al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecuta la solicitud o, si lo prefieres, haz la solicitud utilizando los siguientes SDKs. 

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

Para ofrecer pagos con **Rapipago** y **Pago Fácil**, sigue las siguientes etapas. Si ya ha integrado los pagos con tarjeta, puede iniciar la integración desde el **paso 4**.

1. [Crear container](#bookmark_crear_container)
2. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
3. [Instanciar brick](#bookmark_instanciar_brick)
4. [Renderizar brick](#bookmark_renderizar_brick)
5. [Administrar otros medios de pago](#bookmark_administrar_otros_medios_de_pago)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/other-payment-methods/argentina) completo de la configuración de Payment Brick con **Rapipago** y **Pago Fácil** que puede usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Crear container

Deberás crear un container para definir dónde se colocará el brick en la pantalla. La creación del container se realiza insertando un elemento (por ejemplo, un div) en el código HTML de la página en la que se renderizará el brick (ver el código a continuación).

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
> Instanciar brick

Con el container creado y la SDK JS instalada, el siguiente paso es instanciar el brick builder, que permitirá generar el brick. Para crear la instancia, inserta el código a continuación del paso anterior.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atención
>
> Durante la instanciación del brick, es posible que aparezcan diferentes errores. Para más detalles sobre cada uno de ellos, consulta la sección [Posibles errores](/developers/es/docs/checkout-bricks/additional-content/possible-errors).

> CLIENT_SIDE
>
> h2
>
> Renderizar brick

Una vez instanciado el builder, nuestro brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // monto a ser pago
   },
   customization: {
     paymentMethods: {
       ticket: 'all',
     },
   },
   callbacks: {
     onReady: () => {
       // callback llamado cuando Brick está listo
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback llamado al hacer clic en el botón de envío de datos
      
         return new Promise((resolve, reject) => {
           fetch("/processar-pago", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(formData)
           })
             .then((response) => {
               // recibir el resultado del pago
               resolve();
             })
             .catch((error) => {
               // manejar la respuesta de error al intentar crear el pago
               reject();
             })
         });
       
     },
     onError: (error) => {
       // callback llamado solicitada para todos los casos de error de Brick
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

El resultado de renderizar el brick debe ser como la imagen de abajo:

![payment-brick-other-payments-methods-mla](checkout-bricks/payment-brick-other-payments-methods-mla-es.png)

> WARNING
>
> Atención
>
> Para un control efectivo del Brick, la función enviada en `onSubmit` siempre debe devolver una Promise. Llame el método `resolve()` solo si el procesamiento de tu backend fue exitoso. Llame el método `reject()` en caso de que ocurra un error. Esto hará que el Brick te permita completar los campos nuevamente y haga posible un nuevo intento de pago. Al llamar el `resolve()` dentro de la Promise de `onSubmit`, el brick no permite nuevos pagos. Si deseas realizar un nuevo pago, deberás crear una nueva instancia del Brick.

> CLIENT_SIDE 
>
> h2
>
> Administrar otros medios de pago

> NOTE
>
> Importante
>
> Los métodos de pago que se describen a continuación requieren que se complete la dirección, el nombre y los detalles del documento del comprador. Para una mejor experiencia de usuario, se recomienda que el integrador ya inicialice estos datos, por lo que no es necesario llenarlo manualmente. [Consulte aquí](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks) cómo inicializar el bloque con estos datos ya completados.

Para incluir pagos con **Rapipago** y **Pago Fácil**, solo use la siguiente configuración:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all'
    }
  }
}
```
]]]

La propiedad `ticket` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior, se aceptarán pagos a través de **Rapipago** y **Pago Fácil**. 

Si no desea permitir ambos métodos de pago, en lugar de la cadena `all`, puede pasar un array con solo las ID deseadas. Como en el ejemplo a continuación, donde solo se acepta el a través de **Pago Fácil**.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pagofacil' ]
    }
  }
}
```
]]]

En este caso, al ser **Pago Fácil** el único medio disponible, no se mostrará la lista para seleccionar dónde pagar. Para obtener una lista completa de ID que se pueden pasar dentro del array, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get) en nuestra referencia de API.

> NOTE
>
> Importante
>
> La respuesta de la API contiene ID de varios `payment_type_id`. Los ID aceptados por la propiedad `ticket` son solo aquellos que contienen `payment_type_id = 'ticket'`.