# Configurar os pagamentos com Checkout Pro
 
Com o [Checkout Pro](/developers/pt/guides/checkout-pro/landing), o comprador será direcionado da loja para o site do Mercado Pago onde deverá preencher as informações solicitadas e efetuar o pagamento. Dessa forma, a transação é processada e concluída fora do ambiente de sua loja. Não é necessário que o comprador possua uma conta no Mercado Pago e, ao final da transação, o comprador pode ser devolvido à sua loja.
 
Para integrar o Checkout Pro, siga os passos abaixo.
 
1. Selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja. 
2. Escolha os [meios de pagamento](/developer/pt/guides/additional-content/payment-localization/consult-payment-methods) que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
----[mlb]---- 
* Cartões de débito e crédito; 
* Dinheiro (saldo da conta do Mercado Pago ou boleto bancário); 
* Transferência bancária (Pix e PEC). A opção de pagamento com Pix só será exibida se houver uma [chave Pix cadastrada](/developers/pt/guides/checkout-api/receiving-payment-by-pix) no Mercado Pago. 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
* Cartões de débito e crédito;
* Dinheiro (saldo da conta do Mercado Pago ou efectivo);
* Transferência bancária. 
------------
3. Selecione o **máximo de parcelas** que deseja oferecer em sua loja.
4. [Configure](https://www.mercadopago.com.br/costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
5. Selecione se deseja ou não que o cliente **retorne automaticamente** à sua loja após concluir o pagamento.
6. Defina se os clientes terão acesso ao **modal checkout**, um formulário de pagamentos do Mercado Pago sem sair da sua loja. Se essa opção estiver desativada, os compradores serão redirecionados a outra página.
7. Caso deseje, ative o **modo binário** quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
8. Indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.

Pronto! O Checkout Pro do Mercado Pago está pronto para receber os pagamentos da sua loja.

> Caso deseje utilizar o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber pagamentos na loja, veja a seção [Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------](/developers/pt/docs/prestashop/payment-setup/cho-api/introduction).

> PREV_STEP_CARD_PT
>
> Configuração de pagamentos
>
> Saiba como configurar os checkouts do Mercado Pago para receber os pagamento de sua loja.
>
> [Configuração de pagamentos](/developers/pt/docs/prestashop/payment-setup)

> NEXT_STEP_CARD_PT
>
> Testar os pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Testar os pagamentos](/developers/pt/docs/prestashop/sales-processing/integration-test)