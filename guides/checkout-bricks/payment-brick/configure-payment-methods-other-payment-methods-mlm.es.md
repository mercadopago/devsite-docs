# Configurar la integración con otros medios de pago

Con el Checkout Bricks de Mercado Pago, es posible ofrecer, además de tarjeta, pagos vía **ticket**.  

> NOTE
>
> Importante
>
> Para facilitar al comprador la visualización de los tickets, el Brick muestra los puntos de pago (**7 Eleven**, **Santander** y **OXXO**) al usuario, en lugar de mostrar directamente las formas de pago (**paycash** y **citibanamex**). Esto permite al usuario tener una selección más clara de dónde puede pagar el billete y mejora la conversión.

Para ofrecer pagos con **tickets**, sigue los siguientes pasos. 

> Si ya ha integrado los pagos con tarjeta, puede iniciar la integración desde el **paso 4**.

1. [Crear container](#bookmark_crear_container)
2. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
3. [Instanciar Brick](#bookmark_instanciar_brick)
4. [Renderizar Brick](#bookmark_renderizar_brick)
5. [Administrar otros medios de pago](#bookmark_administrar_otros_medios_de_pago)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/other-payment-methods/mexico) completo de la configuración de Payment Brick en **tickets** que puede usar como modelo.

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
        /*
          Callback llamado cuando Brick está listo.
          Aquí puedes ocultar loadings de su sitio, por ejemplo.
        */
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

![payment-Brick-other-payments-methods-mlm](checkout-bricks/payment-brick-other-payments-methods-mlm-es.jpg)

> WARNING
>
> Atención
>
> Para un control efectivo del Brick, la función enviada en `onSubmit` siempre debe devolver una Promise. Llame el método `resolve()` solo si el procesamiento de tu backend fue exitoso. Llame el método `reject()` en caso de que ocurra un error. Esto hará que el Brick te permita completar los campos nuevamente y haga posible un nuevo intento de pago. Al llamar el `resolve()` dentro de la Promise de `onSubmit`, el Brick no permite nuevos pagos. Si deseas realizar un nuevo pago, deberás crear una nueva instancia del Brick.

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

Para incluir pagos con **tickets**, solo use la siguiente configuración:

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all',
      atm: 'all'
    }
  }
}
```

Las propiedades `ticket` (para pago con ticket impreso) y `atm`_*_ (para pago con cajero automático) aceptan 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior, se aceptarán pagos con **todos los boletos disponibles en México**.

> _*Automatic Teller Machine_

Si no desea permitir ambos métodos de pago, en lugar de la cadena `all`, puede pasar un array con solo las ID deseadas. Como en el ejemplo a continuación, donde solo se acepta el a través de **OXXO**.

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'oxxo' ]
    }
  }
}
```

En este caso, como **OXXO** es el único método disponible, no se mostrará la lista para seleccionar dónde pagar.

Actualmente, estos son los ID que se pueden pasar dentro del array:

| Tipo de pago | IDs |
|---|---|
| Tickets | `oxxo` y `paycash` |
| ATM | `bancomer` y `banamex` |

> NOTE
>
> Importante
>
> La respuesta de la API contiene ID de varios `payment_type_id`. Los ID aceptados por la propiedad `ticket` son solo aquellos que contienen `payment_type_id = 'ticket'` y la propiedad `atm` acepta `payment_type_id = 'atm'`.