# Testar os pagamentos
 
O módulo do Mercado Pago vem com o **ambiente Sandbox** ativo por padrão. Nesse ambiente você poderá simular pagamentos na loja e ver se tudo está funcionando corretamente antes de começar a receber pagamentos reais dos seus clientes. Para realizar o teste, siga os passos abaixo.
 
1. Vá para o menu **Stores > Configuration > Sales > Payment Methods**.
2. No campo **Merchant Country**, selecione o país de operação da sua loja.
3. Em seguida, acesse a seção **Mercado Pago > Credentials** para habilitar os meios de pagamento disponíveis no país de origem da loja.
4. Na página em questão você encontrará os campos **Public key** e **Access token**, que você deve preencher com as com as [credenciais](/developers/pt/guides/additional-content/credentials/credentials) de **teste** indicadas em seu seu [Dashboard](/developers/pt/guides/additional-content/dashboard/introduction).
5. Depois de definir suas credenciais, clique no botão **Save Config** no canto superior direito. É importante que você salve suas credenciais antes de continuar porque isso habilitará os meios de pagamento disponíveis em seu país.
6. Feitas as devidas configurações, acesse aa página inicial da sua loja na Magento, selecione um produto e clique em **Add to Cart**.
7. Com o produto no carrinho, clique em **Proceed to Checkout**.
8. Preencha com as informações pessoais, indique um endereço de entrega e selecione um método de envio. O cadastro das informações é obrigatório, mas é importante salientar que todas essas informações são apenas para o teste.

Feito o processo inicial de compra, veja abaixo como testar a integração de acordo com o tipo de checkout selecionado para receber os pagamentos.

## Checkout Pro

1. Selecione a opção **I want to pay with Mercado Pago at no additional cost**.
2. Clique em **pedido com pagamento obrigatório** para ser redirecionado o ambiente de pagamento do Mercado Pago. 
3. Na tela de checkout, escolha pagar com um novo cartão de crédito e utilize os [cartões de teste](/developers/pt/guides/additional-content/testing/test-cards) para realizar o pagamento. Importante não efetuar o login na conta do Mercado Pago ou tentar realizar o pagamento com cartões de uso pessoal. 
3. Adicione as informações do cartão de teste indicado (nº do cartão, CVV e data de validade). 
4. Ao finalizar a compra você poderá visualizar, dentro do Mercado Pago, a comprovação de que a compra foi realizada e será redirecionado à loja novamente. 

----[mlb]---- 
## Checkout Transparente 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
## Checkout API 
------------

1. Selecione a opção **Credit and Debit Card - Mercado Pago**.
2. Escolha pagar com um novo cartão de crédito e utilize os [cartões de teste](/developers/pt/guides/additional-content/testing/test-cards) para realizar o pagamento. É importante não realizar o pagamento com cartões de uso pessoal.
3. Adicione as informações do cartão de teste indicado (nº do cartão, CVV e data de validade). 
4. Ao finalizar a compra será possível visualizar que a compra foi aprovada.

> WARNING
>
> Importante
> 
> Ao finalizar a compra teste com Checkout Pro, no Painel Administrativo da Magento 2 não será possível visualizar a compra como aprovada, o pedido é gerado automaticamente, mas não consta como pago porque o processo ocorreu dentro do ambiente do Mercado Pago e não no ambiente da loja.
> </br> <br/>
> Já com teste de compra feito com o Checkout Transparente, será possível visualizar a aprovação do pedido. </br> 
> </br> <br/>
> Importante salientar também que, em ambos os checkouts, essa informação de pagamento aprovado não constará no histórico da conta do Mercado Pago porque nele só constam despesas reais (feitas em produção).

> NEXT_STEP_CARD_PT
>
> Configurar pagamentos com Checkout Pro
>
> Saiba como configurar o Checkout Pro para receber os pagamento de sua loja.
>
> [Configurar pagamentos com Checkout Pro](/developers/pt/docs/magento-two/payment-configuration/checkout-pro)

> NEXT_STEP_CARD_PT
>
> Receber os pagamentos
>
> Saiba como ativar a loja para processar vendas reais.
>
> [Receber os pagamentos](/developers/pt/docs/magento-two/sales-processing/go-to-production)