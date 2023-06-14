# Receber os pagamentos

Após realizar a integração e fazer os devidos testes, sua loja já está pronta para entrar em produção. Para começar a receber pagamentos é necessário ativar o modo Produção. Para isso, siga os procedimentos abaixo.

1. No Painel Administrativo da sua loja na Prestashop, acesse o menu **Módulos e serviços**, localize o módulo do Mercado Pago e clique em **configurar**.
2. Na tela de gerenciamento do módulo, confirme se as [credenciais](/developers/pt/guides/additional-content/credentials/credentials) de produção são as mesmas da conta que você recebe o dinheiro das vendas. Essa informação poderá ser visualizada em seu [Dashboard](/developers/pt/guides/additional-content/your-integrations/introduction).
3. Em seguida, clique em **sim** para ativar o modo Produção. 

Pronto! O módulo do Mercado Pago está pronto para receber pagamentos online.

> NOTE
>
> Importante
>
> Com todas as etapas concluídas, seus clientes poderão realizar compras em sua loja. Ao realizar uma transação, é comum que algumas mensagens retornem com informações específicas sobre a compra, visto que toda venda gera um status de pagamento que mostra a situação da venda incluindo a confirmação, pendência ou recusa do pagamento e outras informações importantes sobre a transação. Para mais informações, acesse a seção [Atividades](https://www.mercadopago.com.br/activities) da sua conta do Mercado Pago. <br>
> </br> <br/>
> Existem alguns motivos que podem impactar diretamente na aprovação dos pagamentos na sua loja. Veja mais informações em [Motivos de recusas de pagamentos](/developers/pt/docs/prestashop/additional-content/reasons-for-refusals).

![Status de pagamento](/images/prestashop/status_pt.png)