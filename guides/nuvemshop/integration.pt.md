# Configuração da integração

----[mlm, mla, mlb]----
Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo. 

> WARNING
>
> Atenção
>
> Caso esteja utilizando a antiga versão do plugin do Mercado Pago, acesse a [documentação](/developers/pt/docs/nuvemshop/how-tos/migration) para saber como migrar para a versão atual.

1. Acesse a [Loja de aplicativos](https://www.nuvemshop.com.br/loja-aplicativos-nuvem) e busque por "Mercado Pago" na barra de pesquisa na parte superior da página.
2. Selecione o plugin do Mercado Pago dentre os resultados da pesquisa e clique em **Instalar aplicativo**.
3. Agora, é hora de conceder as permissões necessárias para a aplicação. Clique em **Aceitar e começar a usar**.
4. Você será redirecionado para a página do Mercado Pago, onde deverá fazer login com seus dados. Caso já esteja logado em sua conta, lembre-se que **a integração será efetuada automaticamente a partir da sessão da conta Mercado Pago aberta no navegador em uso durante a instalação**.
5. Leia com atenção as informações sobre as permissões solicitadas. Marque a caixa de seleção para concordar com elas e prossiga clicando em **Continuar**.
6. Revise novamente as permissões e, se estiver seguro, clique em **Autorizar esta aplicação** para autorizar a conexão.

------------
----[mpe, mco, mlu, mlc]----
Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo.

1. Crie uma [conta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) no Mercado Pago caso ainda não tenha uma.
2. Ative o **Mercado Pago** como meio de pagamento dentro da sua loja.
3. Configure as formas de pagamento Mercado Pago.

## Ative o Mercado Pago em sua loja

Para **vincular sua conta do Mercado Pago à Nuvemshop,** siga os passos abaixo:

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos.
3. Clique em "Configurar" e depois em "Ativar".
4. Você **será redirecionado para uma página do Mercado Pago** para acessar com seus dados. Clique em "Permitir" para autorizar a conexão.

![Payments Connect - Nuvem Shop](/images/nuvemshop/nuvemshop_connect_1.gif)

------------

Feitas as configurações iniciais, configure as experiências de pagamento da sua loja de acordo com o tipo de checkout selecionado.

> NOTE
>
> Importante
>
> Por padrão, a Nuvemshop apresenta algumas informações da conta que está recebendo pagamento, sendo elas: **e-mail**, **país** e a **moeda correspondente a sua conta Mercado Pago**.

## Alterar conta do Mercado Pago

Se, por algum motivo, você precisar trocar a conta atual do Mercado Pago por outra, siga os passos abaixo.

----[mlm, mla, mlb]----
1. Caso ainda esteja conectado a sua conta Mercado Pago em um navegador, desconecte-a clicando em **Encerrar sessão**.
   ![Encerrar](/images/nuvemshop/desc-pt.gif)
2. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos**. 
3. Faça uma busca pelo plugin do Mercado Pago, localize-o na lista de meios de pagamentos e clique em **Desinstalar**.
   ![Desinstalar](/images/nuvemshop/desin-pt.gif)
4. Novamente, localize o plugin do Mercado Pago na lista de aplicativos e clique em **Instalar**.
5. Por fim, você será redirecionado ao Mercado Pago para que possa entrar com os dados da sua conta. Para autorizar a conexão, clique em **Permitir**.

------------
----[mpe, mco, mlu, mlc]----
1. Desconectar de sua conta Mercado Pago, caso conectada em um navegador.
2. Clique no "Menu de opções" e depois em "Sair".
3. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
4. Clique em "Mudar usuário" para desvincular a conta atual.
5. Pronto! Basta você refazer o processo para **ativar uma nova conta**.

------------

Pronto! A instalação foi realizada com sucesso e agora você pode receber pagamentos.