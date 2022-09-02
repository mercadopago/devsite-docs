# Configurar la integración con Billetera Mercado Pago

Para configurar la integración de Payment Brick para recibir pagos con la Billetera Mercado Pago debe seguir los pasos a continuación. 

> NOTE
>
> Importante
>
> Considera que cuando un usuario elige realizar un pago a través de la Billetera de Mercado Pago, será redirigido a la página de Mercado Pago para completar el pago. Por lo tanto, es necesario configurar `back_url`s si desea volver a su sitio al finalizar el pago. Para obtener más información, visite la sección [Redirigir al comprador a su sitio web](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences).

1. [Crear preferencia](#bookmark_crear_preferencia)
2. [Crear container](#bookmark_crear_container)
3. [Incluir y configurar la librería MercadoPago.js](#bookmark_incluir_y_configurar_la_librería_mercadopago.js)
4. [Instanciar brick](#bookmark_instanciar_brick)
5. [Renderizar brick](#bookmark_renderizar_brick)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet) completo de la configuración de Payment Brick con la Billetera Mercado Pago que puede usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Crear preferencia

El primer paso para darle al usuario la posibilidad de pagar con el Wallet de Mercado Pago es crear una preferencia en su backend. Agrega el [SDK de Mercado Pago](/developers/es/docs/sdks-library/landing) y las [credenciales](/developers/es/guides/additional-content/credentials/credentials) necesarias a tu proyecto para habilitar el uso de preferencias:

```node
// SDK de Mercado Pago
const mercadopago = require('mercadopago');
// Agregar las credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
``` 

Luego configura la preferencia de acuerdo a tu producto o servicio:

```node
// Crea un objeto de preferencia
let preference = {
 "items": [
   {
     "id": "item-ID-1234",
     "title": "Mi producto",
     "quantity": 1,
     "unit_price": 75.76
   }
 ],
 "back_urls": {
     "success": "https://www.success.com",
     "failure": "http://www.failure.com",
     "pending": "http://www.pending.com"
 },
 "auto_return": "approved",
};
 
mercadopago.preferences.create(preference)
.then(function(response){
// Este valor es el preferenceId que se enviará al brick al inicio
 const preferenceId = response.body.id;
}).catch(function(error){
 console.log(error);
});
```

> Para más detalles sobre cómo configurarlo, acceda a la sección [Preferencias](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences).

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
  <div id="PaymentBrick_container"></div>
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
   amount: 100, // cantidad de procesamiento a realizar
   preferenceId: 'abcd1234', // preferenceId generado en el backend
 },
 callbacks: {
   onReady: () => {
     // callback llamado cuando Brick está listo
   },
   onSubmit: ({ paymentType, formData }) => {
     // callback llamado al hacer clic en el botón de envío de datos
  
     if (paymentType === 'wallet_purchase') {
       // en este caso, el usuario fue redirigido a
      // la página de Mercado Pago para realizar el pago
     }
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
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

![payment-brick](checkout-bricks/payment-brick-es.png)

> WARNING
>
> Atención
>
> Para un control efectivo del Brick, la función enviada en `onSubmit` siempre debe devolver una Promise. Llame el método `resolve()` solo si el procesamiento de tu backend fue exitoso. Llame el método `reject()` en caso de que ocurra un error. Esto hará que el Brick te permita completar los campos nuevamente y haga posible un nuevo intento de pago. Al llamar el `resolve()` dentro de la Promise de `onSubmit`, el brick no permite nuevos pagos. Si deseas realizar un nuevo pago, deberás crear una nueva instancia del Brick.

> CLIENT_SIDE 
>
> h2
>
> Administrar la Billetera Mercado Pago
