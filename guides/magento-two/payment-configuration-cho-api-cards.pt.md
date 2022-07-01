# Configurar pagamentos com cartões

----[mlb]----
Com o [Checkout Transparente](/developers/pt/guides/checkout-api/landing), ofereça pagamentos com **cartões de crédito ou débito** (disponíveis no país onde a loja foi instalada) diretamente em sua loja, sem que o comprador precise ser redirecionado para realizar o pagamento.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Com o [Checkout API](/developers/pt/guides/checkout-api/landing), ofereça pagamentos com **cartões de crédito ou débito** (disponíveis no país onde a loja foi instalada) diretamente em sua loja, sem que o comprador precise ser redirecionado para realizar o pagamento.

------------

Para integrar a forma de pagamento, siga os passos abaixo.

1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. Para ativar pagamentos com cartão, acesse a seção **Mercado Pago > Custom Checkout - Credit and Debit Card**.
3. Selecione **Sim** para ativar a experiência do Mercado Pago para pagamentos com cartões no checkout da sua loja. Por padrão, o método de pagamento com cartão já está ativado.
4. Caso necessário, **altere o título do meio de pagamento** que aparecerá para o comprador.
5. No campo **Statement Descriptor**, insira o texto que identificará o pagamento na fatura do cartão. Esta funcionalidade não está disponível em todos os países. 
6. Ative o **modo binário** para configurar a recusa automática de pagamentos que não são aprovados instantaneamente por bancos ou outros adquirentes. Quando ativado, este modo de processamento só resultará no status de um pagamento como `approved` ou` rejected`. Não existirão estados intermediários como `in_proccess` ou` pending`. 
7. Se dejar, você poderá personalizar um **banner** com os meios de pagamento disponível alterando a URL da imagem em questão. Por padrão, o módulo Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país.
8. Em **Checkout Position**, indique a posição em que o meio de pagamento ficará disponível para o comprador no fluxo de checkout. 
9. No campo **Cards saved in Mercado Pago**, indique se deseja que o comprador tenha a opção de salvar as informações de seus cartões para pagamentos futuros ou utilizar seu saldo no Mercado Pago para realizar pagamentos. Clientes pagam mais rápido e você aumenta a conversão usando esta funcionalidade.
10. Clique em **Set up installment and interest** para [configurar no Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/costs-section#from-section=menu) a tarifa que será paga em cada compra e também oferecer parcelas sem juros para seus clientes.
11. Em seguida, clique em** **Save Config** para salvar suas preferências.

> PREV_STEP_CARD_PT
>
> Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------
>
> Saiba como configurar o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber pagamentos em sua loja.
>
> [Checkout Transparente](/developers/pt/docs/magento-two/payment-configuration/checkout-api)

----[mlb]----
> NEXT_STEP_CARD_PT
>
> Configurar os pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (boleto bancário e caixa eletrônico) utilizando o Checkout Transparente. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_PT
>
> Configurar os pagamentos com ticket
>
> Configure a sua loja para receber pagamentos offline (ticket e caixa eletrônico) utilizando o Checkout API. 
>
> [Ticket](/developers/pt/docs/magento-two/payment-configuration/checkout-api/ticket)
------------