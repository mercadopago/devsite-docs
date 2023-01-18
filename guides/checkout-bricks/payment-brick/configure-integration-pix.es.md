# Pix

Pix es un método de pago electrónico instantáneo ofrecido por el Banco Central de Brasil a personas físicas y jurídicas. A través de Checkout Bricks, es posible ofrecer esta opción de pago desde un **código QR** o un **código de pago**.

> WARNING
>
> Importante
> 
> La opción de pago por Pix solo se mostrará si existe una Clave de Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso. <br/></br>
> <br/></br>
> Para iniciar el formulario de Pix con el campo de correo electrónico completado, [haz clic aquí.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks)<br/></br>
> <br/></br>
> Y para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/pix) completo de la configuración de Payment Brick con Pix que puede usar como modelo.

Para configurar la integración de Payment Brick para recibir pagos con Pix debe seguir el paso a continuación. 

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
   },
   customization: {
     paymentMethods: {
       bankTransfer: ['pix'],
     },
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

![payment-Brick-pix](checkout-bricks/payment-brick-pix-es.png)

> WARNING
>
> Atención
>
> Para un control efectivo del Brick, la función enviada en `onSubmit` siempre debe devolver una Promise. Llame el método `resolve()` solo si el procesamiento de tu backend fue exitoso. Llame el método `reject()` en caso de que ocurra un error. Esto hará que el Brick te permita completar los campos nuevamente y haga posible un nuevo intento de pago. Al llamar el `resolve()` dentro de la Promise de `onSubmit`, el Brick no permite nuevos pagos. Si deseas realizar un nuevo pago, deberás crear una nueva instancia del Brick.

Para pagar con Pix, el comprador debe ingresar su dirección de correo electrónico. Se recomienda encarecidamente que el integrador ingrese este campo de correo electrónico al inicio del Brick, para que el comprador no tenga que escribirlo manualmente. Para inicializar el campo de correo electrónico, simplemente siga el **ejemplo a continuación**.

```Javascript
settings = {
  ...,
  initialization: {
 ...,
 payer: {
   email: 'jose@maria.com'
 }
}
```