# Configurar el Brick

Creae la configuración de inicio de Brick

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
 const settings = {
   callbacks: {
     onReady: () => {
     /*
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
     */
   },
   onSubmit: (formData) => {
     // callback llamado al hacer clic en Wallet Brick
     // esto es posible porque el ladrillo es un botón
     // en este momento del envío, debe crear la preferencia
     const yourRequestBodyHere = {
       items: [
         {
           id: '202809963',
           title: 'Dummy title',
           description: 'Dummy description',
           quantity: 1,
           unit_price: 10,
         },
       ],
       purpose: 'wallet_purchase',
     };
     return new Promise((resolve, reject) => {
       fetch('/create_preference', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
           // resolver la promesa con el ID de la preferencia
           resolve(response.preference_id);
         })
         .catch((error) => {
           // manejar la respuesta de error al intentar crear preferencia
           reject();
         });
     });
   },
 },
};
window.walletBrickController = await bricksBuilder.create(
   'wallet',
   'walletBrick_container',
   settings,
  );
 
};
renderWalletBrick(bricksBuilder);
```
```react-jsx
const onSubmit = async (formData) => {
 // callback llamado al hacer clic en Wallet Brick
 // esto es posible porque el ladrillo es un botón
 // en este momento del envío, debe crear la preferencia
 const yourRequestBodyHere = {
   items: [
     {
       id: '202809963',
       title: 'Dummy title',
       description: 'Dummy description',
       quantity: 1,
       unit_price: 10,
     },
   ],
   purpose: 'wallet_purchase',
 };
 return new Promise((resolve, reject) => {
   fetch('/create_preference', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(yourRequestBodyHere),
   })
     .then((response) => {
       // resolver la promesa con el ID de la preferencia
       resolve(response.preference_id);
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear preferencia
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
> Si es necesario desmontar y volver a montar un Brick, se recomienda destruir la instancia actual y generar una nueva. Para hacerlo, usa el método *unmount* disponible en el *controller* de Brick, en este caso: `window.paymentBrickController.unmount()`.

Este flujo de creación de [preferencia en onSubmit](/developers/es/docs/checkout-bricks/wallet-brick/configure-integration/preference-onsubmit) está diseñado para vendedores que tienen flujos de one clic, si lo desea, también puede enviar Preferencia en el inicio. Ver más información en la sección [Preferencia en el inicio](/developers/es/docs/checkout-bricks/wallet-brick/configure-integration/preference-startup).