> CLIENT_SIDE
>
> h1
>
> Iniciar brick con email

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.email |
| Tipo | string |
| Observaciones | Cuando se envía un correo electrónico válido, el campo de correo electrónico se oculta. |

```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           email: 'string',
       },
   },
   ...
}
```

> PREV_STEP_CARD_ES
>
> Modificar variables CSS
>
> Aprende a modificar las variables CSS de Card Payment Brick si así lo deseas.
>
> [Modificar variables CSS](/developers/es/docs/checkout-bricks/card-payment-brick/additional-customization/modify-css-variables)
 
> NEXT_STEP_CARD_ES
>
> Iniciar Brick con documento de ID
>
> También puedes iniciar Brick con un documento de ID. Descubre cómo.
>
> [Iniciar Brick con documento de ID](/developers/es/docs/checkout-bricks/card-payment-brick/additional-customization/initiate-brick-with-document)