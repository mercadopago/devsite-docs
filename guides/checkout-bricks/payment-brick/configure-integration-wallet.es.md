# Configurar la integración con Cuenta de Mercado Pago

Para configurar la integración de Payment Brick para recibir pagos con la Cuenta de Mercado Pago debe seguir lo paso a continuación. 

1. [Renderizar Brick](#bookmark_renderizar_brick)

> WARNING
>
> Important
>
> Antes de realizar la configuración a continuación, debe haber configurado los pasos enumerados en la sección [Configurar la integración.](/developers/es/docs/checkout-bricks/payment-brick/configure-integration)<br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet) completo de la configuración de Payment Brick con la Cuenta de Mercado Pago que puede usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Una vez instanciado el builder, nuestro Brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el Brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // monto a ser pago
   preferenceId: '<PREFERENCE_ID>', // preferenceId generado en el backend
 },
 callbacks: {
   onReady: () => {
     /*
       Callback llamado cuando Brick está listo
       Aquí puedes ocultar loadings de su sitio, por ejemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón de envío de datos
      // en este caso, el usuario fue redirigido a
      // la página de Mercado Pago para realizar el pago
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
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
```

El resultado de renderizar el Brick debe ser como la imagen de abajo:

----[mlc]---- 
![payment-Brick-wallet-mlc](checkout-bricks/payment-brick-wallet-mlc-es.png)

------------
----[mlu]---- 
![payment-Brick-wallet-mlu](checkout-bricks/payment-brick-wallet-mlu-es.png)

------------
----[mpe, mco]---- 
![payment-Brick-wallet-mco-mpe](checkout-bricks/payment-brick-wallet-mco-mpe-es.png)

------------