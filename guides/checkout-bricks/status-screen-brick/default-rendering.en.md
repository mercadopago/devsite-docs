# Default rendering

> WARNING
>
> Important
>
> To perform Status Screen Brick rendering, first perform the [initialization steps](/developers/en/docs/checkout-bricks/common-initialization) shared among all Bricks. 

## Configure the Brick

Create Brick's startup configuration.

[[[
```Javascript
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: '<PAYMENT_ID>', // payment id to show
   },
   callbacks: {
     onReady: () => {
       /*
         Callback called when Brick is ready.
         Here you can hide loadings from your site, for example.
       */
     },
     onError: (error) => {
       // callback called for all Brick error cases
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
 paymentId: '<PAYMENT_ID>', // payment id to show
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
> Whenever the user leaves the screen where some Brick is displayed, it is necessary to destroy the current instance with the command `window.statusScreenBrickController.unmount()`. When entering again, a new instance must be generated.

The `paymentId` that must be sent to Brick for its initialization is the ID returned by the [Payments API](/developers/en/reference/payments/_payments/post) when generating a payment with Mercado Pago.

## Render the Brick

Once the configurations are created, enter the code below to render the Brick. 

> NOTE
>
> Important
>
> The id `statusScreenBrick_container` of the html div below should correspond to the value used in the method create() of the last step.

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

The result of rendering the Brick should look like the image below.

![status-screen-Brick](checkout-bricks/status-screen-brick-en.jpg)