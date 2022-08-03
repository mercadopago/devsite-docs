> CLIENT_SIDE
>
> h1
>
> Configurar medios de pago aceptados

A través de Checkout Bricks es posible definir qué medios de pago (débito y/o crédito) serán aceptados en una compra. **Por defecto, ambos están habilitados en el momento de la integración**, sin embargo, también es posible ofrecer solo una de estas opciones, limitando el pago solo a débito o crédito.

En la siguiente tabla encontrarás los detalles de la personalización y el código necesario para realizar la configuración.

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | personalización.métodos.pago.tipos.excluidos |
| Tipo | string [] |
| Notas | Los valores aceptados dentro del array son: `credit_card`, `debit_card`. |

[[[
```Javascript

settings = {
  ...,
  customization: {
    paymentMethods: {
      types:{
        excluded: ['debit_card']
      }
    }
  }
}
```
]]]

> PREV_STEP_CARD_ES
>
> Configurar cutoas
>
> Si lo deseas, puedes configurar la cantidad máxima y mínima de cuotas. Aprende cómo.
>
> [Configurar cutoas](/developers/es/docs/checkout-bricks/card-payment-brick/additional-customization/configure-installments)

> NEXT_STEP_CARD_ES
>
> Ocultar botón de pago
>
> Consulta cómo ocultar el botón de pago en Card Payment Brick.
>
> [Ocultar botón de pago](/developers/es/docs/checkout-bricks/card-payment-brick/additional-customization/hide-payment-button)