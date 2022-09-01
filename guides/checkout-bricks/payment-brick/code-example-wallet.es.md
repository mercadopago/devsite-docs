# Ejemplo de código 

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir la Billetera Mercado Pago como medio de pago con Payment Brick y cómo, luego de realizar la integración, enviar el pago a Mercado Pago. 

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Agregar credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Crear un objeto de preferencia
let preference = {
 items: [
   {
     title: 'Mi producto',
     unit_price: 100,
     quantity: 1,
   }
 ]
};
```

> CLIENT_SIDE
>
> h2
>
> Configurar la integración del Brick

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
        preferenceId: 'abcd1234', // preferenceId generado en el backend
      },
      callbacks: {
        onReady: () => {
          // callback llamado cuando Brick está listo
        },
        onSubmit: ({ paymentType, formData }) => {
          // callback llamado al hacer clic en el botón de envío de datos
        
          if (paymentType === 'wallet_purchase') {
            // en este caso, el usuario fue redirigido a
            // la página de Mercado Pago para realizar el pago
          }
        },
        onError: (error) => {
          // callback llamado para todos los casos de error de Brick
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

> Luego de que el usuario es redirigido a la página de Mercado Pago para realizar el pago, puede ser notificado sobre el resultado de la transacción registrando las `back_urls`, como se explica en las [Preferências](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences).