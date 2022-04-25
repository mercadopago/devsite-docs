# Esquema de abertura

O esquema de abertura permite definir como o checkout será aberto para o usuário. Por padrão, o checkout pro é aberto de forma **Modal**, ou seja,  em uma janela dentro do próprio site, sem redirecionamento a uma página externa para concluir o pagamento.

Contudo, é possível personalizar a abertura e definir o modelo **Redirect**, no qual o Checkout Pro é aberto em uma nova janela redirecionando o comprador à tela de pagamento. 

Para definir o modelo de abertura **redirect**, insira o código HTML abaixo diretamente em seu projeto informando o `init_point` da preferência gerada anteriormente.

[[[
```html
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="YOUR_INIT_POINT"> // Indique o ID da preferência
    <button>
      Pagar com Mercado Pago
    </button>
    
</a>
</body>
</html>
```
]]]

> PREV_STEP_CARD_PT
>
> Vencimento de boleto 
>
> Veja como alterar a data de vencimento padrão para pagamentos com boleto.
>
> [Vencimento de boleto](/developers/pt/docs/checkout-pro/checkout-customization/preferences/expiration-date)

> NEXT_STEP_CARD_PT
>
> Botão de pagamento 
>
> Saiba como definir e personalizar a interface exibida para o usuário, incluindo o modo de entrada à tela de checkout.
>
> [Botão de pagamento](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/payment-button)