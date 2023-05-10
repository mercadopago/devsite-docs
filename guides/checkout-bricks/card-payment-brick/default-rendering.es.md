# Renderizado por defecto

> NOTE
>
> Importante
>
> Para realizar el renderizado del Card Payment Brick, primero realice los [pasos de inicialización](/developers/es/docs/checkout-bricks/common-initialization) compartidos entre todos los Bricks. Una vez hecho esto, realice la configuración a continuación.


## Configurar el Brick

Creae la configuración de inicio de Brick

[[[
```Javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // monto total a pagar
   },
   callbacks: {
     onReady: () => {
       /*
         Callback llamado cuando Brick está listo.
         Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
       */
     },
     onSubmit: (formData) => {
       // callback llamado al hacer clic en el botón enviar datos
       return new Promise((resolve, reject) => {
         fetch('/process_payment', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // recibir el resultado del pago
             resolve();
           })
           .catch((error) => {
             // manejar la respuesta de error al intentar crear el pago
             reject();
           });
       });
     },
     onError: (error) => {
       // callback llamado para todos los casos de error de Brick
       console.error(error);
     },
   },
  };
  window.cardPaymentBrickController = await bricksBuilder.create(
   'cardPayment',
   'cardPaymentBrick_container',
   settings,
  );  
};
renderCardPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100,
};


const onSubmit = async (formData) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch('/process_payment', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
     .then(response) => response.json())
     .then((response) => {
       // recibir el resultado del pago
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       reject();
     });
 });
};


const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.log(error);
};


const onReady = async () => {
 /*
   Callback llamado cuando Brick está listo.
   Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

> WARNING
> 
> Atención
>
> Cada vez que el usuario sale de la pantalla donde se muestra algún Brick, es necesario destruir la instancia actual con el comando `window.cardPaymentBrickController.unmount()`. Al ingresar nuevamente se debe generar una nueva instancia.

## Renderizar el Brick

Una vez creadas las configuraciones, ngrese el código a continuación para renderizar el Brick. 

> NOTE
>
> Importante
>
> El id 'cardPaymentBrick_container' de la div HTML abajo debe corresponder que el valor enviado en el metodo create() de la etapa anterior.

[[[
```html
<div id="cardPaymentBrick_container"></div>
```
```react-jsx
import { CardPayment } from '@mercadopago/sdk-react';


<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

<center>

![cardform](checkout-bricks/card-form-es.png)

</center>