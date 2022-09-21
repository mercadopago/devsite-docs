# Exemplo de código 
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo de como incluir Pix como meio de pagamento com o Payment Brick.

> CLIENT_SIDE
>
> h2
>
> Configure a integração

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
         amount: 100, // valor do processamento a ser realizado
       },
       customization: {
         paymentMethods: {
           bankTransfer: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           // callback chamado quando o Brick estiver pronto
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback chamado ao clicar no botão de submissão dos dados
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
             })
               .then((response) => {
                 // receber o resultado do pagamento
                 resolve();
               })
               .catch((error) => {
                 // lidar com a resposta de erro ao tentar criar o pagamento
                 reject();
               })
           });
         },
         onError: (error) => {
           // callback chamado para todos os casos de erro do Brick
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