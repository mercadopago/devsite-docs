# Pix

O **Mercado Pago Pix** permite que seus clientes realizem pagamentos a qualquer hora e em qualquer lugar utilizando um código QR ou o Pix Copia e Cola. Os pagamentos são aprovados instantaneamente e o Mercado Pago oferece a menor taxa de transação para você receber o seu dinheiro.

Para começar a oferecer um dos meios de pagamento mais utilizados entre os clientes, instale o aplicativo via [painel da Shopify]() ou via [Marketplace](). Após a instalação, você poderá [configurar o prazo de vencimento]().

## Instalar via painel da Shopify

Para instalar o Mercado Pago Pix via painel administrativo da Shopify, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![Configurations](/images/shopify/pix-configurations.png) 

3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página.
4. Em "Formas de pagamento aceitas", clique em **Adicionar forma de pagamento**.

![Add payment method](/images/shopify/pix-add-payment-method.png) 

5. Selecione a aba **Buscar por provedor** e procure pelo aplicativo "Mercado Pago Pix". Quando encontrá-lo, selecione-o. 

![Add](/images/shopify/pix-app-search.png) 

6. Clique em **Instalar**.

![Install](/images/shopify/pix-install.png) 

7. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar novamente**.

![Permissions](/images/shopify/pix-permissions.png) 

8. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago à sua loja através das suas credenciais.

> WARNING
>
> Importante
>
> Se você já instalou o aplicativo [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards), não é necessário inserir suas credenciais novamente. Avance para o passo 13 deste tutorial.

![Manage](/images/shopify/pix-manage-account.png) 

9. No admin do Mercado Pago, acesse [**Suas integrações**](/developers/panel/app) e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação do Painel do desenvolvedor](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard) e saiba como criá-la.
10. Clique em **Credenciais de produção** no menu à esquerda. Copie a *public_key* e o *access_token*.

![Production credentials](/images/woocomerce/test-prod-credentials-api.png)

11. Insira suas credenciais produtivas *access_token* e a *public_key* nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
12. Clique em **Salvar credenciais**.

![Save credentials](/images/woocomerce/pix-save-credentials.png)

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação correspondente](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha da sua conta Mercado Pago, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

13. Clique na opção **Verificar ativação** do Mercado Pago Pix. 

![Check activation](/images/woocomerce/pix-check-activation.png)

14. Clique em **Ir para Configurações** para ativar o app caso ele ainda não esteja ativo.

![Go to settings](/images/woocomerce/pix-go-to-settings.png)

15. Clique em **Ativar**.

![Activate](/images/woocomerce/pix-activate.png)

Pronto! O Mercado Pago Pix está pronto para receber os pagamentos da sua loja.

## Instalar via Marketplace

Para instalar o Mercado Pago Pix via Marketplace, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. Acesse a página do [Mercado Pago Pix]() no Marketplace e clique em **Instalar**. 

![Marketplace](/images/woocomerce/pix-marketplace-install.png)

3. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** novamente.

![Permissions](/images/shopify/pix-permissions.png) 

4. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago à sua loja através das suas credenciais.

> WARNING
>
> Importante
>
> Se você já instalou o aplicativo [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards), não é necessário inserir suas credenciais novamente. Avance para o passo 9 deste tutorial.

![Manage](/images/shopify/pix-manage-account.png) 

5. No admin do Mercado Pago, acesse [**Suas integrações**](/developers/panel/app) e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação do Painel do desenvolvedor](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard) e saiba como criá-la.
6. Clique em **Credenciais de produção** no menu à esquerda. Copie a *public_key* e o *access_token*.

![Production credentials](/images/woocomerce/test-prod-credentials-api.png)

7. Insira suas credenciais produtivas *access_token* e a *public_key* nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
8. Clique em **Salvar credenciais**.

![Save credentials](/images/woocomerce/pix-save-credentials.png)

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação correspondente](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha da sua conta Mercado Pago, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

9. Clique na opção **Verificar ativação** do Mercado Pago Pix. 

![Check activation](/images/woocomerce/pix-check-activation.png)

10. Clique em **Ir para Configurações** para ativar o app caso ele ainda não esteja ativo.

![Go to settings](/images/woocomerce/pix-go-to-settings.png)

1. Clique em **Ativar**.

![Activate](/images/woocomerce/pix-activate.png)

Pronto! O Mercado Pago Pix está pronto para receber os pagamentos da sua loja.

## Configurar prazo de vencimento

Após instalar o aplicativo Mercado Pago Pix, configure o prazo de vencimento para pagamentos via Pix.

Para isso, siga os passos abaixo:

1. No painel administrativo da loja, vá para **Configurações > Pagamentos**.
2. Localize o aplicativo **Mercado Pago Pix** e selecione-o.
3. Na tela seguinte, clique em **Mais ações > Gerenciar**.

![More actions](/images/woocomerce/pix-more-actions.png)

4. No campo "**Prazo de vencimento para pagamentos com Pix**", selecione a opção desejada.

![Expiration date](/images/woocomerce/pix-expiration-date.png)

5. Clique em **Salvar**.

![Save expiration date](/images/woocomerce/pix-save-expiration-date.png)

Pronto! O prazo de vencimento foi estabelecido.