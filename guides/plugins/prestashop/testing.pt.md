# Teste de pagamentos

O módulo do Mercado Pago vem com o **ambiente Sandbox** ativo por padrão. Nesse ambiente você poderá simular pagamentos na loja e ver se tudo está funcionando bem antes de começar a receber pagamentos reais dos seus clientes. Para realizar o teste, siga os passos abaixo.

1. Na tela de gerenciamento do plugin (acesse o menu **Módulos e serviços** e clique em **configurar**), confirme que as credênciais de teste estão devidamente preenchidas.
2. Em seguida, desça até a seção **Teste sua loja** e clique em **Quero testar minhas vendas**.

![Testando pagamentos](/images/prestashop/teste_pagto_pt.png)

3. Na página inicial da sua loja no PrestaShop, selecione um produto e realize o fluxo de compra.
4. Preencha com as informações solicitadas e selecione a opção de pagamento com a solução do Mercado Pago que você configurou.
5. Utilize os [cartões de crédito de teste](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/local-cards) para realizar o pagamento.

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

6. Ao concluir o preenchimento, **finalize a compra**.
7. Após realizar os testes e garantir que todas as configurações estão corretas, o fluxo de pagamento (checklist) deve ser atualizado na tela de **configuração do plugin**.

Tudo está certo? Ative o **modo Produção** para receber pagamentos reais.

> LEFT_BUTTON_REQUIRED_PT
>
> Receber pagamentos
>
> Saiba como ativar sua loja para processar vendas reais.
>
> [Receber pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/receive-payments)