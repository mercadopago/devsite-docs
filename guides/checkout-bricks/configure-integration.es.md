# Configurar la integración

Para configurar la integración de los bricks, debe seguir los pasos a continuación:

1. [Crear container](/developers/es/docs/checkout-bricks/integration/configure-integration#bookmark_crear_container)
2. [Incluir y configurar la librería MercadoPago.js](/developers/es/docs/checkout-bricks/integration/configure-integration#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
3. [Instanciar brick](/developers/es/docs/checkout-bricks/integration/configure-integration#bookmark_instanciar_brick)
4. [Renderizar brick](/developers/es/docs/checkout-bricks/integration/configure-integration#bookmark_renderizar_brick)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia.
> <br/>
> Y, para ayudar, hemos preparado un completo [ejemplo de código](/developers/es/docs/checkout-bricks/integration/code-example) que puede usar como modelo.

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
  <div id="cardPaymentBrick_container"></div>
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

Luego, inicializa la SDK y configura tu [clave pública]([FAKER][CREDENTIALS][URL]) mediante código JavaScript de la siguiente manera:

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
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //valor del pago a realizar
    },
    callbacks: {
      onReady: () => {
        // callback llamado cuando Brick esté listo
      },
      onSubmit: (cardFormData) => {
        // callback llamado cuando el usuario haga clic en el botón enviar los datos

        // ejemplo de envío de los datos recolectados por el Brick a su servidor
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
            })
            .then((response) => {
                // recibir el resultado del pago
                resolve();
            })
            .catch((error) => {
                // tratar respuesta de error al intentar crear el pago
                reject();
            })
          });
      },
      onError: (error) => { 
        // callback llamado para todos los casos de error de Brick
      },
    },
  };
  const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);
```

El resultado de renderizar el brick debe ser como la imagen de abajo:

![cardform](checkout-bricks/card-form-es.png)

> PREV_STEP_CARD_ES
>
> Requisitos previos
>
> Conozca los requisitos previos necesarios para integrar Checkout Bricks.
>
> [Requisitos previos](/developers/es/docs/checkout-bricks/integration/prerequisites)
 
> NEXT_STEP_CARD_ES
>
> Enviar pago a Mercado Pago
>
> Después de configurar la integración, consulta cómo enviar el pago a Mercado Pago.
>
> [Enviar pago a Mercado Pago](/developers/es/docs/checkout-bricks/integration/payment-submission)