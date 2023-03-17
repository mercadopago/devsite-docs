# Configure the Brick

Create Brick's startup configuration.

[[[
```Javascript
const settings = {
 callbacks: {
   onReady: () => {
     /*
      Callback called when Brick is ready.
      Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: (formData) => {
     // callback called when clicking Wallet Brick
     // this is possible because the brick is a button
     // at this time of submit, you must create the preference
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
           // resolve the promise with the ID of the preference
           resolve(response.preference_id);
         })
         .catch((error) => {
           // handle error response when trying to create preference
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
```
```react-jsx
const onSubmit = async (formData) => {
 // callback called when clicking Wallet Brick
 // this is possible because the brick is a button
 // at this time of submit, you must create the preference
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
       // resolve the promise with the ID of the preference
       resolve(response.preference_id);
     })
     .catch((error) => {
       // handle error response when trying to create preference
       reject();
     });
 });
};


const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};


const onReady = async () => {
 /*
  Callback called when Brick is ready.
  Here you can hide loadings from your site, for example.
 */
};
```
]]]

> WARNING
> 
> Attention
>
> If it is necessary to dismantle and reassemble a Brick, it is recommended to destroy the current instance and generate a new one. To do so, use the *unmount* method available in Brick's *controller*, in this case: `window.paymentBrickController.unmount()`.

This [preference onSubmit](/developers/en/docs/checkout-bricks/wallet-brick/configure-integration/preference-onsubmit) creation flow is designed for sellers who have one-click flows, if you want, you can also send preference on startup. See more information in the [Preference on startup](/developers/en/docs/checkout-bricks/wallet-brick/configure-integration/preference-startup) section