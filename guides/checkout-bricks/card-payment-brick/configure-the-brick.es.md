# Configurar el Brick

Creae la configuración de inicio de Brick

[[[
```Javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // valor total a ser pago
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
> Si es necesario desmontar y volver a montar un Brick, se recomienda destruir la instancia actual y generar una nueva. Para hacerlo, usa el método *unmount* disponible en el *controller* de Brick, en este caso: `window.cardPaymentBrickController.unmount()`.