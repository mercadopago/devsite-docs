# Web Tokenize Checkout - Recuperações

> NOTE
>
> Nota
>
> Evite pagamentos recusados com as nossas recomendações para [melhorar a aprovação de seus pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections).

No caso de um pagamento ser rejeitado, você pode oferecer ao comprador a opção de tentar novamente e recuperar a venda.

Neste momento receberá como resposta o estado do pagamento *rejeitado* (`rejected`) e é recomendado informar ao usuário tal estado.

Junto com a comunicação você pode oferecer também a possibilidade de voltar a inserir os dados do cartão, **usando novamente o _Web Tokenize Checkout_**. Também tem a possibilidade de [trocar o texto do botão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/web-tokenize-checkout/personalization) mediante o atributo `data-button-label` para complementar a comunicação.

Por exemplo:

```html
<h1>Algo não ocorreu conforme o esperado!</h1>
<p>Ocorreu um erro com o pagamento. Por favor tente novamente mais tarde:</p>


<script src="https://sdk.mercadopago.com/js/v2"></script>

<script>
const mp = new MercadoPago('PUBLIC_KEY', {locale: 'es-AR'});

// IInicializa o Web Tokenize Checkout
mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.minha-loja.com/process'
  },
 render: {
    container: '.tokenizer-container',
    label: 'Tentar novamente'
 }
});
</script>
```

![Retrieve the sale button Mercado Pago](/images/cow/cow-recovery-page__pt.png)

## Checkout aberto por padrão

Outra possibilidade, caso um pagamento seja recusado, ao chamar o *Web Tokenize Checkout* com o formulário já aberto no contexto onde originalmente o usuário carrega os dados.

A opção de abrir o checkout por padrão é controlada desde o atributo `autoOpen`, configurando o atributo como `true`.

Você pode encontrar mais informações sobre como configurar a abertura automática do checkout na [seção de Personalizações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/web-tokenize-checkout/personalization#bookmark_abertura_do_web_tokenize_checkout).

> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Recuperações com MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/web-tokenize-checkout/v1/recoveries).
