# Esquema de abertura

O esquema de abertura permite definir como o checkout será aberto para o usuário. Por padrão, o checkout pro é aberto de forma **Modal**, ou seja,  em uma janela dentro do próprio site, sem redirecionamento a uma página externa para concluir o pagamento.

Contudo, é possível personalizar a abertura e definir o modelo **Redirect**, no qual o Checkout Pro é aberto em uma nova janela redirecionando o comprador à tela de pagamento. 

Para definir o modelo de abertura **Redirect**, insira o código HTML abaixo diretamente em seu projeto informando o `init_point` da preferência gerada anteriormente.

[[[
```html
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="YOUR_INIT_POINT"> // Indique o campo "init_point" retornado na criação da preferência
    <button>
      Pagar com Mercado Pago
    </button>
    
</a>
</body>
</html>
```
]]]