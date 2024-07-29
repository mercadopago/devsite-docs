# Renderizado por defecto

Antes de realizar la renderización del Status Screen Brick, primero ejecute los [pasos de inicialización](/developers/es/docs/checkout-bricks/common-initialization) compartidos entre todos los Bricks. A partir de esto, a continuación se presentan las informaciones necesarias para que configures y renderices el Status Screen Brick.

> NOTE
>
> Nota
>
> Para consultar los tipos y especificaciones de los parámetros y respuestas de las funciones del Brick, consulte la [documentación técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/status-screen.md).

## Configurar el Brick

Creae la configuración de inicio de Brick

[[[
```Javascript
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: '<PAYMENT_ID>', // id de pago para mostrar
   },
   callbacks: {
     onReady: () => {
       /*
         Callback llamado cuando Brick está listo.
         Aquí puede ocultar cargamentos de su sitio, por ejemplo.
       */
     },
     onError: (error) => {
       // callback llamado solicitada para todos los casos de error de Brick
       console.error(error);
     },
   },
  };
  window.statusScreenBrickController = await bricksBuilder.create(
   'statusScreen',
   'statusScreenBrick_container',
   settings,
  );  
};
renderStatusScreenBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 paymentId: '<PAYMENT_ID>', // id de pago para mostrar
};
const onError = async (error) => {
 // callback llamado solicitada para todos los casos de error de Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

> WARNING
> 
> Atención
>
> Cada vez que el usuario sale de la pantalla donde se muestra algún Brick, es necesario destruir la instancia actual con el comando `window.statusScreenBrickController.unmount()`. Al ingresar nuevamente se debe generar una nueva instancia.

El `paymentId` que se debe enviar a Brick para su inicialización es el ID que devuelve la [API de Pagos](/developers/pt/reference/payments/_payments/post) al generar un pago con Mercado Pago.

## Renderizar el Brick

Una vez creadas las configuraciones, ingrese el código a continuación para renderizar el Brick. 

> WARNING
>
> Importante
>
> El id `statusScreenBrick_container` de la _div html_  abajo debe corresponder que el valor enviado en el metodo create() de la etapa anterior.

[[[
```html
<div id="statusScreenBrick_container"></div>
```
```react-jsx
import { StatusScreen } from '@mercadopago/sdk-react';


<StatusScreen
   initialization={initialization}
   onReady={onReady}
   onError={onError}
/>
```
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

![status-screen-Brick](checkout-bricks/status-screen-brick-es.jpg)