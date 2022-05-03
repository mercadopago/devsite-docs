# Estilo de cores

O Checkout Pro permite personalizar o estilo de cores dos elementos de sua interface, customizando a forma como será exibido para o usuário.

Dentre as personalizações de cores é possível customizar a cor do cabeçalho e dos elementos do checkout como botões, campos de dados, bordas, elementos de transição e texto.

> NOTE
>
> Importante
>
> A customização de cores e elementos é válida somente para o esquema de abertura modal. Além disso, os atributos de cores devem estar obrigatoriamente em formato hexadecimal.

Para habilitar a edição do estilo de cores no checkout e em seus elementos, adicione o objeto `theme` e o atributo `elementsColor` com a cor que deseja aplicar nas opções de inicialização do Checkout Pro conforme exemplo abaixo.

[[[
```html
<script>
  mp.checkout({
    preference: {...},
    render: {...},
    theme: {
        elementsColor: ''.
    }
  });
</script>
```
]]]

> PREV_STEP_CARD_PT
>
> Redirecionamento  
>
> Saiba como redirecionar o comprador para outro ambiente do site ao final do processo de pagamento.
>
> [Redirecionamento ](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection)

> NEXT_STEP_CARD_PT
>
> Carteira Mercado Pago  
>
> Veja como configurar pagamentos com Carteira Mercado Pago.
>
> [Carteira Mercado Pago](/developers/pt/docs/checkout-pro/checkout-customization/mp-wallet)