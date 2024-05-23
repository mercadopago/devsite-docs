----[mlb]----
# Checkout Transparente

Con el [Checkout Transparente](/developers/es/docs/checkout-api/landing) (**Mercado Pago Cartões**), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

> WARNING
>
> Atenção
>
> O novo app serve apenas para pagamentos com cartões. Para realizar pagamentos com **Pix** ou **boleto bancário**, utilize o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
# Checkout API

Con el [Checkout API](/developers/es/docs/checkout-api/landing) (**Mercado Pago Cartões**), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

------------

Para instalar o checkout **Mercado Pago Cartões** em uma loja Shopify, oferecemos os dois modelos de instalação abaixo.

## Instalação via Marketplace

1. A partir do link recebido pelo setor comercial do Mercado Pago, acesse a página do app Mercado Pago Cartões no **Marketplace** e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.
2. Leia com atenção as informações sobre as permissões solicitadas e clique novamente em **Instalar**.
3. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> Os dados que deverão ser inseridos são as das **credencias de produção**. Para mais informações, acesse a documentação de [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

4. Insira suas credenciais produtivas `access_token` e a `public_key` nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

5. Clique em **Salvar credenciais**.
6. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Salvar** para finalizar a instalação.

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

## Instalação via painel da Shopify

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.
3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página. 
4. Em "Provedores de pagamento", clique em **Escolher um provedor**.
5. Na tela de "Provedores externos de pagamento", selecione a aba **Buscar por provedor** e procure pelo app "Mercado Pago Cartões".
6. Após localizá-lo, selecione-o e clique em **Instalar**. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.
7. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> Os dados que deverão ser inseridos são as das **credencias de produção**. Para mais informações, acesse a documentação de [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

8. Insira suas credenciais produtivas `access_token` e a `public_key` nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

9. Clique em **Salvar credenciais**.
10. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Salvar** para finalizar a instalação.

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.