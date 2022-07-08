# Configurar pagamentos offline (ticket)

----[mlb]----
Com o **ticket**, ofereça ao comprador a opção de realizar pagamentos com os meios de pagamento offline (boleto bancário e caixa eletrônico), utilizando o [Checkout Transparente](/developers/pt/guides/checkout-api/introduction).

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Com o **ticket**, ofereça ao comprador a opção de realizar pagamentos com os meios de pagamento offline (efectivo e caixa eletrônico), utilizando o [Checkout API](/developers/pt/guides/checkout-api/introduction).

------------

Para integrar a forma de pagamento, siga os passos abaixo.

1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. Para ativar pagamentos com cartão, acesse a seção **Mercado Pago > Custom Checkout - Offline Payments Methods (Ticket)**.
3. Selecione **Sim** para ativar a experiência de pagamentos offline no checkout de sua loja.
4. Caso necessário, **altere o título do meio de pagamento** que aparecerá para o comprador.
5. Se dejar, você poderá personalizar um **banner** com os meios de pagamento disponível alterando a URL da imagem em questão. Por padrão, o módulo Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país.
6. No campo **Exclude Payment Methods**, selecione apenas os meios de pagamento offline que deseja aceitar em sua loja. Por padrão, o módulo exibirá ao comprador todas as formas de pagamento dos tipos ticket e ATM (caixa eletônico).
7. Em **Checkout Position**, indique a posição em que o meio de pagamento ficará disponível para o comprador no fluxo de checkout. 
8. Em seguida, clique em **Save Config** para salvar suas preferências.

> PREV_STEP_CARD_PT
>
> Configurar pagamentos com cartões
>
> Saiba como configurar o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber pagamentos com cartões em sua loja.
>
> [Configurar pagamentos com cartões](/developers/pt/docs/magento-two/payment-configuration/checkout-api/cards)

----[mlb]----
> NEXT_STEP_CARD_PT
>
> Configurar pagamentos com Pix
>
> Configure a sua loja para receber pagamentos com Pix utilizando o Checkout Transparente.
>
> [Pix](/developers/pt/docs/magento-two/payment-configuration/checkout-api/pix)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_PT
>
> Configurar pagamentos via transferência bancária
>
> Configure a sua loja para receber pagamentos via transferência bancária utilizando o Checkout API.
>
> [Transferência bancária](/developers/pt/docs/magento-two/payment-configuration/checkout-api/bank-transfer)
------------