> CLIENT_SIDE 
>
> h1
>
> Configurar medios de pago aceptados

Dado que Payment Brick proporciona varios medios de pago, es necesario personalizar cuáles estarán disponibles. Actualmente es posible seleccionar hasta cuatro, a saber:

Ve a continuación cómo configurar cada una de las opciones mencionadas anteriormente.

## Medios off

Para incluir métodos de pago offline, solo use la siguiente configuración:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pec', 'bolbradesco' ]
    }
  }
}
}
```
]]]

La propiedad `ticket` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior, se aceptarán pagos a través de **boleto** y **pago en lotería**. Los métodos permitidos para el pago offline son: `pec` (pago en lotería) y `bolbradesco` (boleto bancário).

Si desea seleccionar todos los métodos, también puede pasar una cadena en lugar de una matriz, como en el ejemplo a continuación.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all'
    }
  }
}
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
