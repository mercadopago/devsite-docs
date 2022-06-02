> CLIENT_SIDE
>
> h1
>
> Iniciar Brick com documento 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | initialization.payer.identification.type & initialization.payer.identification.number  |
| Tipo  | string  |
| Observações  | Quando envia-se um identification.number válido e um identification.type correspondente, o campo de documento do pagador é automaticamente preenchido.  |

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

> PREV_STEP_CARD_PT
>
> Iniciar Brick com e-mail 
>
> Caso deseje, saiba como iniciar o Card Payment Brick com e-mail.
>
> [Iniciar Brick com e-mail](/developers/pt/docs/checkout-bricks/additional-customization/initiate-brick-with-email)

> NEXT_STEP_CARD_PT
>
> Configurar quantidade máxima e mínima de parcelas 
>
> Caso deseje, saiba como configurar quantidade máxima e mínima de parcelas aceitas no Card Payment Brick.
>
> [Configurar quantidade máxima e mínima de parcelas](/developers/pt/docs/checkout-bricks/additional-customization/configure-installments)