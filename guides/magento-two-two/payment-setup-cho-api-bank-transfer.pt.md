# Configurar os pagamentos com transferência bancária

Com o [----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------](/developers/pt/guides/checkout-api/landing), ofereça pagamentos com **transferência bancária** diretamente em sua loja.

> WARNING
>
> Importante
> 
> A transferência entre contas bancárias deverá ser realizada dentro do limite de horário estipulado pelo Banco Central de seu país.

Para integrar a forma de pagamento, siga os passos abaixo.

1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. Para ativar pagamentos com cartão, acesse a seção **Mercado Pago > Custom Checkout - Bank Transfer**.
3. Selecione **Sim** para ativar a experiência do Mercado Pago para pagamentos com transferência bancária no checkout da sua loja.
4. Caso necessário, **altere o título do meio de pagamento** que aparecerá para o comprador.
5. Se dejar, você poderá personalizar um **banner** com os meios de pagamento disponível alterando a URL da imagem em questão. Por padrão, o módulo Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país.
6. Em **Checkout Position**, indique a posição em que o meio de pagamento ficará disponível para o comprador no fluxo de checkout. 
7. No campo **Redirect Payer**,	indique se o comprador será automaticamente redirecionado para a página de pagamento do banco, sem a necessidade de passar por uma página intermediária da sua loja.
8. Em seguida, clique em** **Save Config** para salvar suas preferências.

----[mlb]----
> PREV_STEP_CARD_PT
>
> Configurar os pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (boleto e caixa eletrônico) utilizando o Checkout Transparente. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-setup/cho-api/ticket)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> PREV_STEP_CARD_PT
>
> Configurar os pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (ticket e caixa eletrônico) utilizando o Checkout API. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-setup/cho-api/ticket)
------------

> NEXT_STEP_CARD_PT
>
> Testar os pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Testar os pagamentos](/developers/pt/docs/magento-two/sales-processing/integration-test)