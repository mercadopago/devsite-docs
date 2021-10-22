# Teste de pagamentos

O módulo do Mercado Pago vem com o **ambiente Sandbox** ativo por padrão. Nesse ambiente você poderá simular pagamentos na loja e ver se tudo está funcionando bem antes de começar a receber pagamentos reais dos seus clientes. Lembrando que no modo Sandbox não geramos um pedido real em que haja movimentação financeira.

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

> NOTE
>
> Importante
>
> Em relação ao **Checkout Pro**, no modo Sandbox só é permitido gerar pedidos com status de Transação Pendente e não é possível atualizar o pedido via notificação, pois o `merchant_order` não adiciona pagamentos no modo Sandbox.
>
> Além disso, com `test_user` só é possível testar pagamentos utilizando o Checkout Pro no **modo Produção**, enquanto no Checkout Transparante o teste poderá ser realizado tanto no **modo Sandbox** quanto no de **Produção**.

> Importante salientear que para que seja possível utilizar o ambiente teste, é necessário que as [credenciais](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) estejam devidamente preechidas na seção **Credenciais**.

Para realizar o teste, desça até a seção **Teste sua loja** e clique em **Quero testar minhas vendas**.

![Testando pagamentos](/images/prestashop/teste_pagto_pt.png)

Após realizar os testes e todas as configurações estiverem corretas, o fluxo de pagamento (checklist) deve ser atualizado na tela de **configuração do plugin**. 

Tudo está certo? Ative o **modo Produção** para receber pagamentos reais.

> LEFT_BUTTON_REQUIRED_PT
>
> Ativação do modo produção
>
> Saiba como ativar sua loja para processar vendas reais.
>
> [Ativação do modo produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/goto-production)