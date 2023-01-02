# Configurar la integración

Para configurar la integración de Status Screen Brick, debes seguir los pasos a continuación: 

1. [Crear container](#bookmark_crear_container)
2. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
3. [Instanciar Brick](#bookmark_instanciar_brick)
4. [Renderizar Brick](#bookmark_renderizar_brick)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un completo [ejemplo de código](/developers/es/docs/checkout-bricks/status-screen-brick/code-example) de la configuración del Status Screen Brick que puede usar como modelo.

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
 <div id="statusScreenBrick_container"></div>
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
> Durante la instanciación del Brick, es posible que aparezcan diferentes errores. Para más detalles sobre cada uno de ellos, consulta la sección [Posibles errores](/developers/es/docs/checkout-bricks/additional-content/possible-errors).

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Una vez instanciado el builder, nuestro Brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el Brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderStausScreenBrick = async (bricksBuilder) => {
const settings = {
  initialization: {
    paymentId: '1234567890', // id de pago generado por Mercado Pago
  },
  callbacks: {
    onReady: () => {
      // callback llamado cuando Brick está listo
    },
    onError: (error) => {
      // callback llamado para todos los casos de error de Brick
    },
  },
};
window.statusBrickController = await bricksBuilder.create(
  'statusScreen',
  'statusScreenBrick_container',
  settings
);
};
renderStausScreenBrick(bricksBuilder);
```

> El `paymentId` que se debe enviar a Brick para su inicialización es el id devuelto por la API de [Pagos](/developers/es/reference/payments/_payments/post) al generar un pago con Mercado Pago.

El resultado de renderizar el Brick debe ser como la imagen de abajo:

![status-screen-Brick](checkout-bricks/status-screen-brick-es.jpg)

> NOTE
>
> Importante
>
> Siempre permita que el usuario regrese a su sitio desde la pantalla de estado de pago. Agregue un enlace para que si el pago falla, el usuario pueda volver a intentarlo.