# Default rendering

> WARNING
>
> Important
>
> To perform the Card Payment Brick rendering, first perform the [initialization steps](/developers/en/docs/checkout-bricks/common-initialization) shared among all Bricks. Once this is done, perform the settings below.

## Configure the Brick

Create Brick's startup configuration.

[[[
```Javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // total amount to be paid
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
};
renderCardPaymentBrick(bricksBuilder);
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
     .then(response) => response.json())
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
> Whenever the user leaves the screen where some Brick is displayed, it is necessary to destroy the current instance with the command `window.cardPaymentBrickController.unmount()`. When entering again, a new instance must be generated.

## Render the Brick

Once the configurations are created, enter the code below to render the Brick. 

> NOTE
>
> Important
>
> The id `cardPaymentBrick_container` of the html div below should correspond to the value used in the method create() of the last step.

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

The result of rendering the Brick should look like the image below.

<center>

![cardform](checkout-bricks/card-form-en.png)

</center>