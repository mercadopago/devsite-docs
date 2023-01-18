----[mla, mlb]---- 
# Configurar la integración con Cuenta de Mercado Pago y Cuotas sin tarjeta

Para configurar la integración de Payment Brick para recibir pagos con la **Cuenta de Mercado Pago y Cuotas sin tarjeta** debe seguir los pasos a continuación. 

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Administrar opciones de pago](#bookmark_administrar_opciones_de_pago)

> WARNING
>
> Importante
>
> Antes de realizar la configuración a continuación, debes haber configurado los pasos enumerados en la sección [Configurar la integración.](/developers/es/docs/checkout-bricks/payment-brick/configure-integration)<br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet-credits) completo de la configuración de Payment Brick con la **Cuenta de Mercado Pago y Cuotas sin tarjeta** que puede usar como modelo.

------------
----[mlm]----
# Configurar la integración con Cuenta de Mercado Pago y Meses sin tarjeta de crédito

Para configurar la integración de Payment Brick para recibir pagos con la **Cuenta de Mercado Pago Y Meses sin tarjeta de crédito** debe seguir los pasos a continuación. 

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Administrar opciones de pago](#bookmark_administrar_opciones_de_pago)

> WARNING
>
> Importante
>
> Antes de realizar la configuración a continuación, debe haber configurado los pasos enumerados en la sección [Configurar la integración.](/developers/es/docs/checkout-bricks/pago-brick/configure-integration)<br/></br>
> <br/></br>
> Y, para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/wallet-credits) completo de la configuración de Payment Brick con la **Cuenta de Mercado Pago Y Meses sin tarjeta de crédito** que puede usar como modelo.

------------

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
 customization: {
   paymentMethods: {
     mercadoPago: 'all',
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

----[mlb]---- 
![payment-Brick-wallet-credits-mlb](checkout-bricks/payment-brick-wallet-credits-mlb-es.jpg)

------------
----[mla]---- 
![payment-Brick-wallet-credits-mla](checkout-bricks/payment-brick-wallet-credits-mla-es.jpg)

------------
----[mlm]---- 
![payment-Brick-wallet-credits-mlm](checkout-bricks/payment-brick-wallet-credits-mlm-es.jpg)

------------

> CLIENT_SIDE
>
> h2
>
> Administrar opciones de pago

----[mla, mlb]---- 
Vea a continuación el fragmento de código responsable de incluir pagos con **Cuenta de Mercado Pago y Cuota sin tarjeta** como medio de pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

La propiedade `mercadoPago` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior se aceptarán pagos con **Cuenta de Mercado Pago y Cuotas sin tarjeta**.

------------

----[mlm]----
Vea a continuación el fragmento de código responsable de incluir pagos con **Cuenta de Mercado Pago y Meses sin tarjeta de crédito** como medio de pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

La propiedade `mercadoPago` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior se aceptarán pagos con **Cuenta de Mercado Pago y Meses sin tarjeta de crédito**.

------------

Si desea seleccionar una de las dos opciones, en lugar de la string `all`, puede pasar un array con solo con los medios deseados (`wallet_purchase` o `onboarding_credits`). Como en el ejemplo a continuación, donde solo se aceptarán pagos con Cuenta de Mercado Pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: ['wallet_purchase'], // ['onboarding_credits']
   }
 }
}
```