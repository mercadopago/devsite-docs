# Pix

O **Mercado Pago Pix** facilita a realização de transações financeiras utilizando código QR ou a funcionalidade Pix Copia e Cola, permitindo aos clientes efetuarem pagamentos de forma instantânea a qualquer momento. Além disso, este serviço garante a aprovação imediata das transações e oferece a menor taxa para recebimento dos pagamentos.

Para integrar o Mercado Pago Pix, instale o aplicativo via [painel da Shopify](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_instalar_via_painel_da_shopify) ou via [Marketplace](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_instalar_via_marketplace). Após a instalação, você poderá [configurar o prazo de vencimento](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_configurar_prazo_de_vencimento).

> WARNING
>
> Importante
>
> Para habilitar pagamentos com Pix, é necessário verificar se as chaves Pix foram criadas na sua conta do Mercado Pago. Se ainda não as criou, recomendamos assistir ao [vídeo tutorial](https://www.youtube.com/watch?v=60tApKYVnkA) para um guia passo a passo.

## Instalar via painel da Shopify

Para instalar o Mercado Pago Pix via painel administrativo da Shopify, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![Configurations](/images/shopify/pix-configurations.png) 

3. Feito isso, selecione a opção **Pagamentos** no menu ao lado esquerdo da página.
4. Em **Formas de pagamento aceitas**, clique em **Adicionar forma de pagamento**.

![Add payment method](/images/shopify/pix-add-payment-method.png) 

5. Selecione a aba **Buscar por provedor** e procure pelo aplicativo "Mercado Pago Pix" e selecione a opção correspondente. 

![Add](/images/shopify/pix-app-search.png) 

6. Clique em **Instalar**.

![Install](/images/shopify/pix-install.png) 

7. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** novamente.

![Permissions](/images/shopify/pix-permissions.png) 

8. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago à loja utilizando suas credenciais.

![Manage](/images/shopify/pix-manage-account.png) 

> WARNING
>
> Importante
>
> Se você já instalou o aplicativo [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards), não é necessário inserir suas credenciais novamente. Avance para o passo 13 deste tutorial.

9. No admin do Mercado Pago, acesse [Suas integrações](/developers/panel/app) e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação do Painel do desenvolvedor](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard) e saiba como criá-la.
10. Na aplicação, clique em **Credenciais de produção** no menu à esquerda. Copie a *public_key* e o *access_token*.

![Production credentials](/images/woocomerce/test-prod-credentials-api.png)

11. Insira suas credenciais produtivas *access_token* e a *public_key* nos campos correspondentes. **Certifique-se de não inverter os campos ao copiar e colar as credenciais**.
12. Clique em **Salvar credenciais**.

![Save credentials](/images/shopify/pix-save-credentials.png)

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação correspondente](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: **ao alterar a senha da sua conta Mercado Pago, é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

13. Clique na opção **Verificar ativação** do Mercado Pago Pix. 

![Check activation](/images/shopify/pix-check-activation.png)

14. Caso o app ainda não esteja ativado, clique em **Ir para Configurações** para ativá-lo.

![Go to settings](/images/shopify/pix-go-to-settings.png)

15. Na tela seguinte, clique em **Ativar**.

![Activate](/images/shopify/pix-activate.png)

Pronto! O Mercado Pago Pix está pronto para receber os pagamentos da sua loja.

## Instalar via Marketplace

Para instalar o Mercado Pago Pix via Marketplace, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. Acesse a página do [Mercado Pago Pix]() no Marketplace e clique em **Instalar**. 

![Marketplace](/images/shopify/pix-marketplace-install.png)

3. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** novamente.

![Permissions](/images/shopify/pix-permissions.png) 

4. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago à loja utilizando suas credenciais.

![Manage](/images/shopify/pix-manage-account.png) 

> WARNING
>
> Importante
>
> Se você já instalou o aplicativo [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards), não é necessário inserir suas credenciais novamente. Avance para o passo 9 deste tutorial.

5. No admin do Mercado Pago, acesse [**Suas integrações**](/developers/panel/app) e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação do Painel do desenvolvedor](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard) e saiba como criá-la.
6. Na aplicação, clique em **Credenciais de produção** no menu à esquerda. Copie a *public_key* e o *access_token*.

![Production credentials](/images/woocomerce/test-prod-credentials-api.png)

7. Insira suas credenciais produtivas *access_token* e a *public_key* nos campos correspondentes. **Certifique-se de não inverter os campos ao copiar e colar as credenciais**.
8. Clique em **Salvar credenciais**.

![Save credentials](/images/shopify/pix-save-credentials.png)

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação correspondente](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: **ao alterar a senha da sua conta Mercado Pago, é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

9. Clique na opção **Verificar ativação** do Mercado Pago Pix. 

![Check activation](/images/shopify/pix-check-activation.png)

10. Caso o app ainda não esteja ativo, clique em **Ir para Configurações** para ativá-lo.

![Go to settings](/images/shopify/pix-go-to-settings.png)

11. Na tela seguinte, clique em **Ativar**.

![Activate](/images/shopify/pix-activate.png)

Pronto! O Mercado Pago Pix está pronto para receber os pagamentos da sua loja.

## Configurar prazo de vencimento

Após instalar o aplicativo Mercado Pago Pix, siga as etapas descritas abaixo para configurar o prazo de vencimento para pagamentos via Pix.

1. No painel administrativo da loja, vá para **Configurações > Pagamentos**.
2. Localize o aplicativo **Mercado Pago Pix** e selecione a opção correspondente.
3. Na tela seguinte, clique em **Mais ações > Gerenciar**.

![More actions](/images/shopify/pix-more-actions.png)

4. No campo **"Prazo de vencimento para pagamentos com Pix"**, selecione a opção desejada.

![Expiration date](/images/shopify/pix-expiration-date.png)

5. Clique em **Salvar**.

![Save expiration date](/images/shopify/pix-save-expiration-date.png)

Pronto! O prazo de vencimento foi estabelecido.