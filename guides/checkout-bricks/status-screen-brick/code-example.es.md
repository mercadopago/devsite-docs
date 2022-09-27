# Ejemplo de código 

Para facilitar y optimizar su proceso de integración, vea a continuación un ejemplo completo de cómo mostrar al comprador el estado de una compra realizada con Checkout Bricks desde el Status Screen Brick. 

> CLIENT_SIDE
>
> h2
>
> Configurar la integración

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
                       paymentId: '1234567890', // valor del procesamiento a realizar
                   },
                   callbacks: {
                       onReady: () => {
                       // callback llamado cuando Brick está listo
                       },
                       onError: (error) => {
                       // callback llamado para todos los casos de error de Brick
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