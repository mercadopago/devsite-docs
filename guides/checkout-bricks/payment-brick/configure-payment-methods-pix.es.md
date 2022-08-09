> CLIENT_SIDE 
>
> h1
>
> Configurar medios de pago aceptados

Dado que Payment Brick proporciona varios medios de pago, es necesario personalizar cuáles estarán disponibles. Actualmente es posible seleccionar hasta cuatro, a saber:

## Pix

Para incluir Pix, solo use la siguiente configuración:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      bankTransfer: [ 'pix' ]
    }
  }
}
}
```
]]]

La propiedad `bankTransfer` acepta 2 tipos de variables, `string` y `string[]`. Por ahora, el único medio aceptado para `bankTransfer` es **Pix**, por lo que pasar el array `['pix']` o la cadena `all` producirá el mismo resultado.

------------

### Callback onSubmit

Para permitir diferentes puntos finales de pago para diferentes métodos de pago, el **callback de onSubmit** para Payment Brick recibe, además de los datos del formulario, también el tipo de pago. Ve el ejemplo a continuación.

[[[
```Javascript
settings = {
 ...,
 callbacks: {
   ...,
   onSubmit: ({ paymentType, formData }) => {
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
 },
};
}
```
]]]

> PREV_STEP_CARD_ES
>
> Customers & Cards
>
> Aprende a configurar la funcionalidad Customers & Cards, que permite el uso de tarjetas guardadas en pagos en tu sitio web.
>
> [Customers & Cards](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/customers-cards) 

> NEXT_STEP_CARD_ES
>
> Definir tema
>
> Si lo deseas, aprende a seleccionar otro tema al instanciar/renderizar Card Payment Brick.
>
> [Definir tema](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/set-theme)
