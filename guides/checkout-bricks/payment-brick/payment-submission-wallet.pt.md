> SERVER_SIDE
>
> h1
>
> Enviar pagamento (Conta Mercado Pago)

Os pagamentos com **Conta Mercado Pago** não precisam ser enviados via backend. Caso o usuário selecione esta opção como meio de pagamento, a `preferenceId` enviada na inicialização do brick é responsável por redirecionar o comprador ao site do Mercado Pago, onde será feito o pagamento diretamente em nosso site. Para redirecionar o comprador de volta para o seu site, você pode configurar as `back_urls` como descrito [neste artigo.](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site)