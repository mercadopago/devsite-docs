> CLIENT_SIDE
>
> h1
>
> Configurar quantidade máxima e mínima de parcelas 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments  |
| Tipo  | number  |
| Observações  | Quando é passado um valor para min ou maxInstallments, o número de parcelas será restringido pelos valores passados.  |

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

> PREV_STEP_CARD_PT
>
> Iniciar Brick com documento 
>
> Caso deseje, veja como iniciar o Card Payment Brick com documento.
>
> [Iniciar Brick com documento](/developers/pt/docs/checkout-bricks/additional-customization/initiate-brick-with-document)

> NEXT_STEP_CARD_PT
>
> Ocultar botão de pagamento
>
> Caso deseje, saiba como ocultar o obtão de pagamento no Card Payment Brick.
>
> [Ocultar botão de pagamento](/developers/pt/docs/checkout-bricks/additional-customization/hide-payment-button)