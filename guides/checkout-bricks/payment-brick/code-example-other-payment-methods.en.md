# Code example

To facilitate and optimize your integration process, check below a complete example of how to include **boleto bancário** and **payment in lottery** as a means of payment with Payment Brick and how, after performing the integration, to send the payment to Mercado Pago. 

> CLIENT_SIDE
>
> h2
>
> Configure the integration

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
         amount: 100, // amount of processing to be performed 
       },
       customization: {
         paymentMethods: {
           ticket: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           // callback called when Brick is ready
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback called when clicking on the data submission button
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
             })
               .then((response) => {
                 // receive payment result
                 resolve();
               })
               .catch((error) => {
                 // handle error response when trying to create payment
                 reject();
               })
           });
         },
         onError: (error) => {
           // callback called for all Brick error cases
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