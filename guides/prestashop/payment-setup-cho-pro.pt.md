# Configurar os pagamentos com Checkout Pro
 
Com o Checkout Pro, o comprador será direcionado da loja para o site do Mercado Pago onde deverá preencher as informações solicitadas e efetuar o pagamento. Dessa forma, a transação é processada e concluída fora do ambiente de sua loja. 

Não é necessário que o comprador possua uma conta no Mercado Pago e, ao final da transação, o comprador pode ser devolvido à sua loja.
 
Para integrar o Checkout Pro, siga os passos abaixo.
 
1. Selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja. 
2. Escolha os [meios de pagamento](/developer/pt/guides/additional-content/payment-localization/consult-payment-methods) que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
----[mlb]---- 
* Cartões de débito e crédito; 
* Dinheiro (saldo da conta do Mercado Pago ou boleto bancário); 
* Pix. A opção de pagamento com Pix só será exibida se houver uma [chave Pix cadastrada](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required) no Mercado Pago. 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
* Cartões de débito e crédito;
* Dinheiro (saldo da conta do Mercado Pago ou efectivo). 
------------
3. Selecione o **máximo de parcelas** que deseja oferecer em sua loja.
4. [Configure](https://www.mercadopago.com.br/costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
5. Selecione se deseja ou não que o cliente **retorne automaticamente** à sua loja após concluir o pagamento.
6. Defina se os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
7. Caso deseje, ative o **modo binário** quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
8. Indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
9. Se necessário, defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.

> PREV_STEP_CARD_PT
>
> Configurar a integração
>
> Conecte sua conta do Mercado Pago ao módulo e capture os pagamentos que você receber pelas suas vendas on-line.
>
> [Configurar a integração](/developers/pt/docs/prestashop/integration)

> NEXT_STEP_CARD_PT
>
> Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------
>
> Saiba como configurar o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber os pagamento de sua loja.
>
> [Checkout API](/developers/pt/docs/prestashop/payment-setup/cho-api)