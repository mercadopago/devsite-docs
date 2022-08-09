> CLIENT_SIDE
>
> h1
>
> Configurar meios de pagamento aceitos

Através do Card Payment Brick é possível definir quais meios de pagamento (débito e/ou crédito) serão aceitos em uma compra. **Por padrão, ambos são ativados no momento da integração**, contudo, também é possível oferecer somente uma dessas opções, limitando o pagamento exclusivamente a débito ou crédito.

Na tabela abaixo você encontra os detalhes da customização e o código necessário para realizar a configuração.

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | customization.paymentMethods.types.excluded |
| Tipo  | string [] |
| Observações  | Os valores aceitos dentro do array são: `credit_card`, `debit_card`.  |

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

> PREV_STEP_CARD_PT
>
> Configurar parcelamento
>
> saiba como configurar quantidade máxima e mínima de parcelas aceitas no Card Payment Brick.
>
> [Configurar parcelamento](/developers/pt/docs/checkout-bricks/card-payment-brick/additional-customization/configure-installments)

> NEXT_STEP_CARD_PT
>
> Ocultar botão de pagamento
>
> Saiba como ocultar o botão de pagamento no Card Payment Brick.
>
> [Ocultar botão de pagamento](/developers/pt/docs/checkout-bricks/card-payment-brick/additional-customization/hide-payment-button)