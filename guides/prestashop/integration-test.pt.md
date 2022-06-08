# Testar os pagamentos
 
O módulo do Mercado Pago vem com o **ambiente Sandbox** ativo por padrão. Nesse ambiente você poderá simular pagamentos na loja e ver se tudo está funcionando corretamente antes de começar a receber pagamentos reais dos seus clientes. Para realizar o teste, siga os passos abaixo.
 
1. No Painel Administrativo da sua loja na Prestashop, acesse o menu Módulos e serviços, localize o módulo do Mercado Pago e clique em **configurar**.
2. Na tela de gerenciamento do módulo, confirme se as [credenciais](/developers/pt/guides/additional-content/credentials/credentials) de teste estão devidamente preenchidas de acordo com as informações disponíveis em seu [Dashboard](/developers/pt/guides/additional-content/dashboard/introduction).
3. Em seguida, desça até a seção **Teste sua loja** e clique em **Quero testar minhas vendas**.
4. Na página inicial da sua loja na PrestaShop, selecione um produto e clique em adicionar.
5. Com o produto no carrinho, clique em **finalizar pedido**.
6. Preencha com as informações pessoais, indique um endereço de entrega e selecione um método de envio. Lembrando que todas essas informações são apenas para o teste.

Feito o processo inicial de compra, veja abaixo como testar a integração de acordo com o tipo de checkout selecionado para receber os pagamentos.

## Checkout Pro

1. Selecione a opção **Quero pagar com Mercado Pago sem custo adicional**.
2. Clique em **pedido com pagamento obrigatório** para ser redirecionado o ambiente de pagamento do Mercado Pago. 
3. Na tela de checkout, escolha pagar com um novo cartão de crédito e utilize os [cartões de teste](/developers/pt/guides/additional-content/testing/test-cards) para realizar o pagamento. Importante não efetuar o login na conta do Mercado Pago ou tentar realizar o pagamento com cartões de uso pessoal. 
3. Adicione as informações do cartão de teste indicado (nº do cartão, CVV e data de validade). 
4. Ao finalizar a compra o seller irá visualizar dentro do Mercado Pago a comprovação de que a compra foi feita e será redirecionada a sua loja novamente. 

----[mlb]---- 
## Checkout Transparente 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
## Checkout API 
------------

1. Selecione a opção **Quero pagar com cartão de crédito**.
2. Escolha pagar com um novo cartão de crédito e utilize os [cartões de teste](/developers/pt/guides/additional-content/testing/test-cards) para realizar o pagamento. É importante não realizar o pagamento com cartões de uso pessoal.
3. Adicione as informações do cartão de teste indicado (nº do cartão, CVV e data de validade). 
4. Clique em **pedido com pagamento obrigatório**.
5. Ao finalizar a compra o seller irá visualizar que a compra foi aprovada

> WARNING
>
> Importante
> 
> Ao finalizar a compra teste com Checkout Pro, no Painel Administrativo da PrestaShop não será possível visualizar a compra como aprovada, o pedido é gerado automaticamente, mas não consta como pago porque o processo ocorreu dentro do ambiente do Mercado Pago e não no ambiente da loja. 
> </br> <br/>
> Já com teste de compra feito com o ----[mlb]---- Checkout Transparente, ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API, ------------ será possível visualizar a aprovação do pedido.  
> </br> <br/>
> Importante salientar também que, em ambas os checkouts, essa informação de pagamento aprovado não constará no histórico da conta do Mercado Pago porque nele só constam despesas reais (feitas em produção).

> PREV_STEP_CARD_PT
>
> Customização de e-mail para pagamentos via ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------
>
> Após configurar o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber pagamentos, saiba como configurar o envio de e-mails que notificarão o usuário de suas transações.
>
> [Customização de e-mail](/developers/pt/docs/prestashop/payment-setup/cho-api/email-customization)

> NEXT_STEP_CARD_PT
>
> Receber os pagamentos
>
> Saiba como ativar sua loja para processar vendas reais.
>
> [Receber os pagamentos](/developers/pt/docs/prestashop/sales-processing/go-to-production)