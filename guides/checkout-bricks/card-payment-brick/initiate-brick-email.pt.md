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
> Exemplo de código
>
> Para facilitar e otimizar o seu processo de integração, veja um exemplo completo integração com o Card Payment Brick.
>
> [Exemplo de código](/developers/pt/docs/checkout-bricks/card-payment-brick/code-example)

> NEXT_STEP_CARD_PT
>
> Iniciar Brick com documento 
>
> Caso deseje, veja como iniciar o Card Payment Brick com documento.
>
> [Iniciar Brick com documento](/developers/pt/docs/checkout-bricks/card-payment-brick/additional-customization/initiate-brick-with-document)