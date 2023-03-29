# Configure the Brick

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
> If it is necessary to dismantle and reassemble a Brick, it is recommended to destroy the current instance and generate a new one. To do so, use the *unmount* method available in Brick's *controller*, in this case: `window.statusScreenBrickController.unmount()`.

The `paymentId` that must be sent to Brick for its initialization is the ID returned by the [Payments API](/developers/en/reference/payments/_payments/post) when generating a payment with Mercado Pago.