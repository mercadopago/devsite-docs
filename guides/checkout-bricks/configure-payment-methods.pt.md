> CLIENT_SIDE
>
> h1
>
> Configurar meios de pagamento aceitos

Através do Checkout Bricks é possível definir quais meios de pagamento (débito e/ou crédito) serão aceitos em uma compra. Contudo, também é possível oferecer **somente uma dessas opções** limitando o pagamento exclusivamente a débito ou crédito.

Na tabela abaixo você encontra os detalhes da customização e o código necessário para realizar a configuração.

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | customization.paymentMethods.types.excluded <br><br> customization.paymentMethods.types.included |
| Tipo  | string  |
| Observações  | Os valores aceitos dentro do array são: `credit_card`, `debit_card`.  |



> WARNING
>
> Importante
>
> As propriedades `included` e `excluded` não devem ser utilizadas simultaneamente, por isso, ao definir os meios de pagamento aceitos, escolha somente uma delas.

## Excluir meio de pagamento 

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

## Incluir meio de pagamento 

[[[
```Javascript

settings = {
  ...,
  customization: {
    paymentMethods: {
      types:{
        included: ['credit_card']
      }
    }
  }
}
```
]]]
