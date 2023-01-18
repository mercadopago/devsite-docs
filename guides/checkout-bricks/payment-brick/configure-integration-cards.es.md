# Tarjetas

Para configurar la integración de Payment Brick para recibir pagos con tarjetas de crédito y débito debe seguir los pasos a continuación.

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Administrar tarjetas de crédito y débito](#bookmark_administrar_tarjetas_de_crédito_y_débito)
3. [Incluir tarjetas guardadas](#bookmark_incluir_tarjetas_guardadas)

> Los pasos se realizan en el backend o frontend. Las etiquetas **Client-Side** y **Server-Side** ubicadas inmediatamente al lado del título lo ayudan a identificar qué paso se realiza en qué instancia. <br/></br>
> <br/></br>
> Y para ayudar, hemos preparado un [ejemplo de código](/developers/es/docs/checkout-bricks/payment-brick/code-example/cards) completo de la configuración de Payment Brick con tarjetas que puede usar como modelo.

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
       creditCard: 'all',
       debitCard: 'all',
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
       // callback llamado cuando el usuario haz clic en el botón enviar los datos
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
               // tratar respuesta de error al intentar crear el pago
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

![payment-Brick](checkout-bricks/payment-brick-es.png)

> WARNING
>
> Atención
>
> Para un control efectivo del Brick, la función enviada en `onSubmit` siempre debe devolver una Promise. Llame el método `resolve()` solo si el procesamiento de tu backend fue exitoso. Llame el método `reject()` en caso de que ocurra un error. Esto hará que el Brick te permita completar los campos nuevamente y haga posible un nuevo intento de pago. Al llamar el `resolve()` dentro de la Promise de `onSubmit`, el Brick no permite nuevos pagos. Si deseas realizar un nuevo pago, deberás crear una nueva instancia del Brick.

> CLIENT_SIDE 
>
> h2
>
> Administrar tarjetas de crédito y débito

El fragmento de código responsable de incluir la tarjeta de crédito y débito como medio de pago es el siguiente:

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: 'all',
      debitCard: 'all'
    }
  }
}
```

Las propiedades `creditCard` y `debitCard` aceptan 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior se aceptarán pagos con tarjetas de crédito y débito de cualquier bandera aceptada por Mercado Pago.

Si desea seleccionar las banderas, en lugar de la string `all`, puede pasar un array con solo las ID deseadas. Como en el ejemplo a continuación, donde solo se aceptarán tarjetas de crédito **MASTER** y **VISA** y tarjetas de débito **ELO**.

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: [ 'master', 'visa' ],
      debitCard: [ 'debelo' ]
    }
  }
}
```

Para obtener una lista completa de ID que se pueden pasar dentro del array, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get) en nuestra referencia de API.

> NOTE
>
> Importante
>
> La respuesta de la API contiene ID de varios `payment_type_id`. Los ID aceptados por la propiedad `creditCard` son solo aquellos que contienen `payment_type_id = 'credit_card'` y los ID aceptados por la propiedad `debitCard` son solo aquellos que contienen `payment_type_id = 'debit_card'`.

## Incluir tarjetas guardadas

En Payment Brick puedes hacer que las tarjetas guardadas estén disponibles para tus clientes. Para saber cómo agregar tarjetas guardadas, consulte la sección [Incluir tarjetas guardadas](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/customers-cards).