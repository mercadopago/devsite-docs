----[mlb]----
# Cartões

O **Mercado Pago Cartões** ([Checkout Transparente](/developers/pt/docs/checkout-api/landing)) é um app que permite pagamentos transparentes com cartões de débito ou crédito em que todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o Mercado Pago Cartões reduz o abandono do carrinho e aumenta a possibilidade de conversão.

> WARNING
>
> Atenção
>
> Este novo aplicativo é exclusivo para pagamentos com cartões. Para configurar pagamentos com Pix, consulte a [documentação correspondente](/developers/pt/docs/shopify/integration-configuration/pix). Para pagamentos com boleto bancário, utilize o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
# Cartões

O **Mercado Pago Cartões** ([Checkout API](/developers/pt/docs/checkout-api/landing)) é um app que permite pagamentos transparentes com cartões de débito ou crédito em que todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o Mercado Pago Cartões reduz o abandono do carrinho e aumenta a possibilidade de conversão.

------------

Para instalar o checkout **Mercado Pago Cartões** em uma loja Shopify, oferecemos os dois modelos de instalação abaixo.

## Instalar via painel da Shopify

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.
3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página. 
4. Em "Provedores de pagamento", clique em **Escolher um provedor**.

![installation panel 1](/images/shopify/installation-cards-panel.1-pt.png)

5. Na tela de "Provedores externos de pagamento", procure pelo app "Mercado Pago Cartões".

![installation panel 2](/images/shopify/installation-cards-panel-2-pt.png)

6. Após localizá-lo, selecione-o e clique em **Instalar**. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.

![installation panel 3](/images/shopify/installation-cards-panel-3-pt.png)

7. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja.

![installation cards 3](/images/shopify/installation-cards-3-pt.png)

8. No admin do Mercado Pago, acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do desenvolvedor](/developers/pt/guides/additional-content/your-integrations/dashboard) e saiba como criá-la. 
9. Clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key` e o `access_token`.

![installation cards 4](/images/shopify/installation-cards-4-pt.png)

10. Retorne as configurações de sua loja na Shopify e insira suas credenciais produtivas (`access_token` e a `public_key`) nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
11. Clique em **Salvar credenciais**.

![installation cards 5](/images/shopify/installation-cards-5-pt.png)

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Lembre-se de que, ao alterar a senha do Shopify, **é necessário renovar suas credenciais**. Para isso, siga as instruções na documentação de [Boas práticas de segurança para suas credenciais](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Em seguida, para atualizá-las na sua conta do Shopify, clique em Gerenciar conta e preencha os campos correspondentes com seu `access_token` e `public_key`, **tomando cuidado para não trocar os campos ao copiar e colar as credenciais**.

12. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Ativar** para finalizar a instalação.

![installation cards 6](/images/shopify/installation-cards-6-pt.png)

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

> NOTE
>
> Importante
>
> Após finalizar a instalação do Mercado Pago Cartões, recomendamos que complemente instalando o app **Mercado Pago Antifraude Plus**, que permitirá **reforçar a segurança da sua loja e aumentar a taxa de aprovação de pagamentos**. Para mais informações, acesse a documentação de [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).

## Instalar via Marketplace

----[mlb]----

1. A partir [deste link](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR), acesse a página do app **Mercado Pago Cartões** no "Marketplace" e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mlm]----
1. A partir [deste link](https://apps.shopify.com/mercado-pago-tarjetas-mx?locale=pt-BR), acesse a página do app **Mercado Pago Cartões** no "Marketplace" e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
![installation mkplace 0](/images/shopify/installation-cards-mkplace-0-pt.png)

2. Leia com atenção as informações sobre as permissões solicitadas e clique novamente em **Instalar**.

![installation mkplace 2](/images/shopify/installation-cards-mkplace-2-pt.png)

3. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja.

![installation cards 3](/images/shopify/installation-cards-3-pt.png)

4. No admin do Mercado Pago, acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do desenvolvedor](/developers/pt/guides/additional-content/your-integrations/dashboard) e saiba como criá-la. 
5. Clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key` e o `access_token`.

![installation cards 4](/images/shopify/installation-cards-4-pt.png)

6. Retorne as configurações de sua loja na Shopify e insira suas credenciais produtivas (`access_token` e a `public_key`) nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
7. Clique em **Salvar credenciais**.

![installation cards 5](/images/shopify/installation-cards-5-pt.png)

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Lembre-se de que, ao alterar a senha do Shopify, **é necessário renovar suas credenciais**. Para isso, siga as instruções na documentação de [Boas práticas de segurança para suas credenciais](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Em seguida, para atualizá-las na sua conta do Shopify, clique em Gerenciar conta e preencha os campos correspondentes com seu `access_token` e `public_key`, **tomando cuidado para não trocar os campos ao copiar e colar as credenciais**.

8. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Ativar** para finalizar a instalação.

![installation cards 6](/images/shopify/installation-cards-6-pt.png)

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

> NOTE
>
> Importante
>
> Após finalizar a instalação do Mercado Pago Cartões, recomendamos que complemente instalando o app **Mercado Pago Antifraude Plus**, que permitirá **reforçar a segurança da sua loja e aumentar a taxa de aprovação de pagamentos**. Para mais informações, acesse a documentação de [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).

## Configurar parcelas sem acréscimo

Após instalar e ativar o app **Mercado Pago Cartões**, configure a opção correspondente para permitir que seus clientes parcelem suas compras sem acréscimos, utilizando qualquer cartão de crédito. Para isso, siga os passos abaixo.

1. Faça login em sua [conta do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Vá até a seção **Seu negócio > Custos** e selecione a opção **Checkout**.

![configure installments 1](/images/shopify/configure-installments-1-pt.png)

3. Em "Parcelas sem acréscimo", clique em **Configurar parcelamento**.

![configure installments 2](/images/shopify/configure-installments-2-pt.png)

4. Em seguida, clique em **Configurar parcelamento sem acréscimo**.

![configure installments 3](/images/shopify/configure-installments-3-pt.png)

5. Por fim, ative a opção **Oferecer parcelamento sem acréscimo** e escolha quantas parcelas deseja oferecer na sua loja.

![configure installments 4](/images/shopify/configure-installments-4-pt.png)