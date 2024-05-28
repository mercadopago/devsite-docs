----[mlb]----
# Cartões

O **Mercado Pago Cartões** ([Checkout Transparente](/developers/pt/docs/checkout-api/landing)) é um app que permite pagamentos transparentes com cartões de débito ou crédito em que todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, reduz o abandono do carrinho e aumenta a possibilidade de conversão.

> WARNING
>
> Atenção
>
> O novo app serve apenas para pagamentos com cartões. Para realizar pagamentos com **Pix** ou **boleto bancário**, utilize o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
# Cartões

O **Mercado Pago Cartões** ([Checkout API](/developers/pt/docs/checkout-api/landing)) é um app que permite pagamentos transparentes com cartões de débito ou crédito em que todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, reduz o abandono do carrinho e aumenta a possibilidade de conversão.

------------

Para instalar o checkout **Mercado Pago Cartões** em uma loja Shopify, oferecemos os dois modelos de instalação abaixo.

## Instalar via painel da Shopify

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.
3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página. 
4. Em "Provedores de pagamento", clique em **Escolher um provedor**.
5. Na tela de "Provedores externos de pagamento", selecione a aba **Buscar por provedor** e procure pelo app "Mercado Pago Cartões".
6. Após localizá-lo, selecione-o e clique em **Instalar**. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.
7. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> Os dados que deverão ser inseridos são as das **credencias de produção**. Para mais informações, acesse a documentação de [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

8. Insira suas credenciais produtivas (`access_token` e a `public_key`) nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

9. Clique em **Salvar credenciais**.
10. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Ativar** para ativar o app e finalizar a instalação.

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

## Instalar via Marketplace

1. A partir do link recebido pelo setor comercial do Mercado Pago, acesse a página do app **Mercado Pago Cartões** no "Marketplace" e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.
2. Leia com atenção as informações sobre as permissões solicitadas e clique novamente em **Instalar**.
3. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> Os dados que deverão ser inseridos são as das **credencias de produção**. Para mais informações, acesse a documentação de [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

4. Insira suas credenciais produtivas (`access_token` e a `public_key`) nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

5. Clique em **Salvar credenciais**.
6. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Ativar** para ativar o app e finalizar a instalação.

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

## Configurar parcelas sem acréscimo

Após instalar e ativar o app **Mercado Pago Cartões**, configure a opção de oferecer aos seus clientes a possibilidade de parcelar suas compras sem acrescimos com qualquer cartão de crédito. Para isso, siga os passos abaixo. 

1. Faça login em sua [conta do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Vá até a seção "Seu negócio > Custos" e selecione a opção **Checkout**.
3. Em "Parcelas sem acréscimo", clique em **Configurar parcelamento**.
4. Em seguida, clique em **Configurar parcelamento sem acréscimo**.
5. Por fim, ative a opção **Oferecer parcelamento sem acréscimo** e escolha quantas parcelas deseja oferecer na sua loja.