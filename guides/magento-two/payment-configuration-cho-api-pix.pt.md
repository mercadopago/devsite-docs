# Configurar pagamentos com Pix

Com o [----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------](/developers/pt/guides/checkout-api/landing), ofereça pagamentos com **Pix** diretamente em sua loja. O Pix é um meio de pagamento instantâneo e disponível 24h por dia.

> WARNING
>
> Importante
> 
> A opção de pagamento com Pix só será exibida se houver uma [chave Pix cadastrada](/developers/pt/guides/checkout-api/receiving-payment-by-pix) no Mercado Pago. </br> 
> </br> <br/>
> Além disso, existe um limite para o valor de Pix, estabelecido pelo Banco Central do Brasil, que poderá ser movimentado no decorrer do período noturno (entre 20h e 6h) de R$1 mil. Para o período diurno (entre 6h e 20h), contudo, não há limite de movimentação.

Para integrar a forma de pagamento, siga os passos abaixo.

1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. Para ativar pagamentos com cartão, acesse a seção **Mercado Pago > Custom Checkout - Pix**.
3. Selecione **Sim** para ativar a experiência do Mercado Pago para pagamentos com Pix no checkout da sua loja. Você pode gerenciar a(s) chave(s) Pix que cadastrou na sua conta sempre pelo app do Mercado Pago.
4. Caso necessário, **altere o título do meio de pagamento** que aparecerá para o comprador.
5. Se dejar, você poderá personalizar um **banner** com os meios de pagamento disponível alterando a URL da imagem em questão. Por padrão, o módulo Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país.
6. Em **Checkout Position**, indique a posição em que o meio de pagamento ficará disponível para o comprador no fluxo de checkout. 
7. No campo **Redirect Payer**,	indique se o comprador será automaticamente redirecionado para a página de pagamento do banco, sem a necessidade de passar por uma página intermediária da sua loja.
8. Em seguida, clique em** **Save Config** para salvar suas preferências.

----[mlb]----
> PREV_STEP_CARD_PT
>
> Configurar pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (boleto e caixa eletrônico) utilizando o Checkout Transparente. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> PREV_STEP_CARD_PT
>
> Configurar pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (ticket e caixa eletrônico) utilizando o Checkout API. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

> NEXT_STEP_CARD_PT
>
> Configurar pagamentos com Checkout Pro
>
> Saiba como configurar o Checkout Pro para receber os pagamento de sua loja.
>
> [Configurar pagamentos com Checkout Pro](/developers/pt/docs/magento-two/payment-configuration/checkout-pro)