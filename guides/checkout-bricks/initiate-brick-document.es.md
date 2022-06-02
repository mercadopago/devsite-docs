> CLIENT_SIDE
>
> h1
>
> Iniciar Brick con documento

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.identification.type & initialization.payer.identification.number |
| Tipo | string |
| Observaciones | Cuando se envía un número de identificación válido y un tipo de identificación correspondiente, el campo del documento del pagador ya está automaticamente completado. |

```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           identification: {
               type: 'string',
               number: 'string',
           },
       },
   },
   ...
}
```

> PREV_STEP_CARD_ES
>
> Iniciar Brick con email
>
> Consulta cómo iniciar Card Payment Brick con un email, si lo deseas.
>
> [Iniciar Brick con email](/developers/es/docs/checkout-bricks/additional-customization/initiate-brick-with-email)

> NEXT_STEP_CARD_ES
>
> Configurar la cantidad máxima y mínima de cuotas
>
> Si lo deseas, puedes configurar la cantidad máxima y mínima de cuotas. Aprende cómo.
>
> [Configurar cantidad máxima y mínima de cuotas](/developers/es/docs/checkout-bricks/additional-customization/configure-installments)