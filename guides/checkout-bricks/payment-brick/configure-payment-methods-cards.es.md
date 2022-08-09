> CLIENT_SIDE 
>
> h1
>
> Configurar medios de pago aceptados

Dado que Payment Brick proporciona varios medios de pago, es necesario personalizar cuáles estarán disponibles. Actualmente es posible seleccionar hasta cuatro, a saber:

Ve a continuación cómo configurar cada una de las opciones mencionadas anteriormente.

## Tarjeta de crédito

Para incluir la tarjeta de crédito como medio de pago, basta con utilizar la siguiente configuración:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

La propiedad `creditCard` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior, solo se aceptarán pagos con tarjeta **MASTER** y **VISA**. Los métodos permitidos para tarjeta de crédito son: `visa`, `master`, `hipercard`, `amex` y `elo`.

Si desea seleccionar todos los métodos, también puede pasar una cadena en lugar de un array, como en el ejemplo a continuación.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: 'all'
    }
  }
}
}
```
]]]

## Tarjeta de débito

Para incluir la tarjeta de débito como medio de pago, basta con utilizar la siguiente configuración:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

La propiedad `debitCard` acepta 2 tipos de variables, `string` y `string[]`. En el ejemplo anterior, solo se aceptarán pagos con tarjeta **MASTER** y **VISA**. Los métodos permitidos para las tarjetas de débito son los mismos que para las tarjetas de crédito, es decir: `visa`, `master`, `hipercard`, `amex` y `elo`.

Si desea seleccionar todos los métodos, también puede pasar una cadena en lugar de una matriz, como en el ejemplo a continuación.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: 'all'
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
