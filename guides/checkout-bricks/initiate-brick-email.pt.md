> CLIENT_SIDE
>
> h1
>
> Iniciar Brick com e-mail 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | initialization.payer.email  |
| Tipo  | string  |
| Observações  | Quando um e-mail válido é enviado, o campo de email é ocultado.  |

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

> PREV_STEP_CARD_PT
>
> Alterar variáveis CSS 
>
> Caso deseje, saiba como alterar as variáveis CSS do Card Payment Brick.
>
> [Alterar variáveis CSS](/developers/pt/docs/checkout-bricks/additional-customization/modify-css-variables)

> NEXT_STEP_CARD_PT
>
> Iniciar Brick com documento 
>
> Caso deseje, veja como iniciar o Card Payment Brick com documento.
>
> [Iniciar Brick com documento](/developers/pt/docs/checkout-bricks/additional-customization/initiate-brick-with-document)