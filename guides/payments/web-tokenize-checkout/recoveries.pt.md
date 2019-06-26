# Web Tokenize Checkout - Recuperações

No caso de um pagamento ser rejeitado, você pode oferecer ao comprador a opção de tentar novamente e recuperar a venda.

Neste momento receberá como resposta o estado do pagamento *rejeitado* (`rejected`) e é recomendado informar ao usuário tal estado.

Junto com a comunicação você pode oferecer também a possibilidade de voltar a inserir os dados do cartão, **usando novamente o _Web Tokenize Checkout_**. Também tem a possibilidade de [trocar o texto do botão](https://www.mercadopago.com.br/developers/pt/guides/payments/web-tokenize-checkout/personalization) mediante o atributo `data-button-label` para complementar a comunicação.

Por exemplo:

```html
<h1>Algo não ocorreu conforme o esperado!</h1>
<p>Ocorreu um erro com o pagamento. Por favor tente novamente:</p>

<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-button-label="Reintentar"> <!-- Texto do botão -->
  </script>
</form>
```

![Retrieve the sale button Mercado Pago](/images/cow-recovery-page__pt.png)

## Checkout aberto por padrão

Outra possibilidade, caso um pagamento seja recusado, ao chamar o *Web Tokenize Checkout* com o formulário já aberto no contexto onde originalmente o usuário carrega os dados.

A opção de abrir o checkout por padrão é controlada a partir do atributo `data-open` e sendo somente questão de definir o atributo como `true`.

Por exemplo:

```html
<form action="/processar-pagamento" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-open="true"> <!-- Aberto por padrão -->
  </script>
</form>
```
