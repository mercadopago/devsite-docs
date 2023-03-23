# Configure the Brick

Create Brick's startup configuration.

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
       Callback called when Brick is ready.
       Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: (formData) => {
     // callback called when clicking on the submit data button
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
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         });
     });
   },
   onError: (error) => {
     // callback called for all Brick error cases
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
 // callback called when clicking on the submit data button
 return new Promise((resolve, reject) => {
   fetch('/process_payment', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receive payment result
       resolve();
     })
     .catch((error) => {
       // handle error response when trying to create payment
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
> If it is necessary to dismantle and reassemble a Brick, it is recommended to destroy the current instance and generate a new one. To do so, use the *unmount* method available in Brick's *controller*, in this case: `window.cardPaymentBrickController.unmount()`.