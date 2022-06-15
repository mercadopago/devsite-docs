# Configurar os pagamentos com Pix

Com o [----[mlb]---- Checkout Transparente, ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API, ------------](/developers/pt/guides/checkout-api/landing) ofereça pagamentos com **Pix** diretamente em sua loja. O Pix é um meio de pagamento instantâneo e disponível 24h por dia.

> NOTE
>
> Importante
> 
> A opção de pagamento com Pix só será exibida se houver uma [chave Pix cadastrada](/developers/pt/docs/checkout-api/payment-methods/receiving-payment-by-pix#bookmark_cadastrar_chave_pix) no Mercado Pago. <br>
> </br> <br/>
> Além disso, existe um limite para o valor de Pix, estabelecido pelo Banco Central do Brasil, que poderá ser movimentado no decorrer do período noturno (entre 20h e 6h) de R$1 mil. Para o período diurno (entre 6h e 20h), contudo, não há limite de movimentação.

Para integrar a forma de pagamento, siga os passos abaixo.

1. Selecione **Sim** para ativar a experiência do Mercado Pago para pagamentos com Pix no checkout da sua loja. Você pode gerenciar a(s) chave(s) Pix que cadastrou na sua conta sempre pelo app do Mercado Pago.
2. Indique o prazo de vencimento que os clientes terão para fazer a transferência via Pix. 
3. Caso deseje, defina um valor percentual de desconto para os clientes que pagarem com Pix. A porcentagem definida será descontada do valor total da compra.

Pronto! O pagamento com Pix via Checkout Transparente foi configurado e está pronto para receber pagamentos em sua loja.

> PREV_STEP_CARD_PT
>
> Configurar os pagamentos com ticket checkout
>
> Configure a sua loja para receber pagamentos em dinheiro utilizando o ----[mlb]---- Checkout Transparente. ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API. ------------
>
> [Configurar os pagamentos com ticket checkout](/developers/pt/docs/prestashop/payment-setup/cho-api/ticket-checkout)

> NEXT_STEP_CARD_PT
>
> Testar os pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Testar os pagamentos](/developers/pt/docs/prestashop/sales-processing/integration-test)