> CLIENT_SIDE
>
> h1
>
> Configurar monto máximo y mínimo de cuotas

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments |
| Tipo | number |
| Observaciones | Cuando se pasa un valor para min o maxInstallments, la cantidad de cuotas estará limitada por los valores pasados. |

```javascript
const settings = {
    ...,
    customization: {
        paymentMethods: {
            minInstallments: number,
            maxInstallments: number,
        },
    },
}
```

> PREV_STEP_CARD_ES
>
> Iniciar Brick con documento de ID
>
> También puedes iniciar Brick con un documento de ID. Descubre cómo.
>
> [Iniciar Brick con documento de ID](/developers/es/docs/checkout-bricks/additional-customization/initiate-brick-with-document)

> NEXT_STEP_CARD_ES
>
> Ocultar botón de pago
>
> Consulta cómo ocultar el botón de pago en Card Payment Brick.
>
> [Ocultar botón de pago](/developers/es/docs/checkout-bricks/additional-customization/hide-payment-button)