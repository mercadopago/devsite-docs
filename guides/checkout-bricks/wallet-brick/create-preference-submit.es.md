# Preferencia en el envío

Si lo prefieres, también puedes crear la preferencia al momento de hacer clic en el botón, es decir, that is, al enviar el formulario. Esto puede ser útil en casos similares a los de _one click_, utilizando el botón directamente en la página del producto a comprar.

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
  const settings = {
    callbacks: {
      onSubmit: (formData) => {
        // callback llamado al hacer clic en Wallet Brick
        // esto es posible porque Brick es un botón
        // en este momento de envío, debes crear la preferencia
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
              // manejar la respuesta de error al intentar crear la preferencia
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
 // esto es posible porque Brick es un botón
 // en este momento de envío, debes crear la preferencia
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
     .then((response) => response.json())
     .then((response) => {
       // resolver la promesa con el ID de la preferencia
       resolve(response.preference_id);
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear la preferencia
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
   Callback llamado cuando Brick esté listo.
   Aquí puedes ocultar loadings en tu sitio, por ejemplo.
 */
};
```
]]]

En este caso, no es necesario pasar la [preferencia en el inicio](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering).