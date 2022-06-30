# Configurar pagamentos com Checkout Pro
 
Com o [Checkout Pro](/developers/pt/guides/checkout-pro/landing), o comprador será direcionado da loja para o site do Mercado Pago onde deverá preencher as informações solicitadas e efetuar o pagamento. Dessa forma, a transação é processada e concluída fora do ambiente de sua loja. Não é necessário que o comprador possua uma conta no Mercado Pago e, ao final da transação, o comprador pode ser devolvido à sua loja.
 
Para integrar o Checkout Pro, siga os passos abaixo.
 
1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. Para ativar pagamentos com cartão, acesse a seção **Mercado Pago > Checkout Pro**.
3. Selecione **Sim** para ativar a experiência do Mercado Pago para pagamentos com cartões no checkout da sua loja. Por padrão, o método de pagamento com cartão já está ativado.
4. Caso necessário, **altere o título do meio de pagamento** que aparecerá para o comprador.
5. Em **Auto Return**, indique se o comprador retornará automaticamente à sua loja ao final do pagamento aprovado.
6. No campo **Exclude Payment Methods**, deixe desmarcado os meios de pagamento que deseja aceitar em sua loja. Por padrão, o módulo exibirá ao comprador todas as formas de pagamento disponíveis para o seu país.
7. Defina o **número máximo de parcelas** aceitas no fluxo de pagamento com cartões de crédito.
8. No campo **Statement Descriptor**, insira o texto que identificará o pagamento na fatura do cartão. Esta funcionalidade não está disponível em todos os países. 
9. Ative o **modo binário** para configurar a recusa automática de pagamentos que não são aprovados instantaneamente por bancos ou outros adquirentes. Quando ativado, este modo de processamento só resultará no status de um pagamento como `approved` ou` rejected`. Não existirão estados intermediários como `in_proccess` ou` pending`. 
10. Se dejar, você poderá personalizar um **banner** com os meios de pagamento disponível alterando a URL da imagem em questão. Por padrão, o módulo Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país.
11. Em **Checkout Position**, indique a posição em que o meio de pagamento ficará disponível para o comprador no fluxo de checkout. 
12. Clique em **Set up installment and interest** para [configurar no Mercado Pago](https://www.mercadopago.com.br/costs-section#from-section=menu) a tarifa que será paga em cada compra e também oferecer parcelas sem juros para seus clientes.
13. Em seguida, clique em** **Save Config** para salvar suas preferências.

----[mlb]----
> PREV_STEP_CARD_PT
>
> Configurar os pagamentos com Pix
>
> Configure a sua loja para receber pagamentos com Pix utilizando o Checkout Transparente.
>
> [Pix](/developers/pt/docs/magento-two/payment-configuration/checkout-api/pix)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> PREV_STEP_CARD_PT
>
> Configurar os pagamentos via transferência bancária
>
> Configure a sua loja para receber pagamentos via transferência bancária utilizando o Checkout API.
>
> [Pix](/developers/pt/docs/magento-two/payment-configuration/checkout-api/bank-transfer)
------------

> NEXT_STEP_CARD_PT
>
> Testar os pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Testar os pagamentos](/developers/pt/docs/magento-two/sales-processing/integration-test)