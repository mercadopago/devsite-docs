# Code example

To facilitate and optimize your integration process, see below for a complete example of how to show the buyer the status of a purchase made with Checkout Bricks from the Status Screen Brick.

> CLIENT_SIDE
>
> h2
>
> Configure the integration

> NOTE
>
> Attention
>
> If it is necessary to close and reopen the Brick (when a user returns to the cart to change some purchase detail, for example) it is necessary to eliminate the current instance of the Brick and create a new one when it is necessary to show the Brick again.
> To do so, use the `unmount` method available in the Brick controller, in this case: `cardPaymentBrickController.unmount()`.

```html
<html>
   <head>
       <script src="https://sdk.mercadopago.com/js/v2"></script>
   </head>
   <body>
       <div id="statusScreenBrick_container"></div>
       <script>
           const mp = new MercadoPago('YOUR_PUBLIC_KEY');
           const bricksBuilder = mp.bricks();
           const renderStatusScreenBrick = async (bricksBuilder) => {
           const settings = {
                   initialization: {
                       paymentId: '1234567890', // amount of processing to be performed
                   },
                   callbacks: {
                       onReady: () => {
                       // callback called when Brick is ready
                       },
                       onError: (error) => {
                       // callback called for all Brick error cases
                       },
                   },
               };
               window.statusScreenBrickController = await bricksBuilder.create('statusScreen', 'statusScreenBrick_container', settings);
           };
           renderStatusScreenBrick(bricksBuilder);
       </script>
   </body>
</html>
```