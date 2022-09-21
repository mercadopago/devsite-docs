# Ejemplo de código 

Para facilitar y optimizar su proceso de integración, vea a continuación un ejemplo completo de cómo incluir **boleto bancario** y pago en **agencias de lotería** como medio de pago con Payment Brick. 

> CLIENT_SIDE
>
> h2
>
> Configurar la integración

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         amount: 100, // cantidad de procesamiento a realizar
       },
       customization: {
         paymentMethods: {
           ticket: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           // callback llamado cuando Brick está listo
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
             })
               .then((response) => {
                 // recibir el resultado del pago
                 resolve();
               })
               .catch((error) => {
                 // manejar la respuesta de error al intentar crear el pago
                 reject();
               })
           });
         },
         onError: (error) => {
           // callback llamado solicitada para todos los casos de error de Brick
         },
       },
     };
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
 </script>
</body>
 
</html>
```