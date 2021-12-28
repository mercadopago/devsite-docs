# Wix

[Wix](https://pt.wix.com/) é uma plataforma de e-commerce que permite criar, desenhar e gerenciar sua loja virtual, onde você pode oferecer aos seus clientes a possibilidade de efetuar pagamentos através do Mercado Pago ou diretamente na página da sua loja. 

Ao integrar o **Mercado Pago** na sua loja Wix, seus pagamentos serão processados pelo [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction), no qual  o comprador é direcionado para uma página do Mercado Pago para concluir o pagamento, ou pelo [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction), que permite ao comprador realizar o pagamento dentro do ambiente da sua loja.

Antes de realizar a integração do Mercado Pago com sua loja Wix, confira os pré-requisitos e garanta que todos sejam cumpridos.

# Pré-requisitos

Na tabela abaixo, você encontra os requisitos necessários para integrar o Mercado Pago à sua loja Wix. É importante garantir que todos sejam cumpridos para que o processo de integração funcione corretamente.

| Requisitos | Descrição |
|---|---|
| Conta na plataforma Wix | Para realizar a integração, é preciso ter uma conta ativa na Wix. Caso ainda não tenha, [acesse esta página](https://users.wix.com/signin) da Wix para criar.|
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Se ainda não tiver, [acesse esta página](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) do Mercado Pago para criar. |
| Credenciais de produção e teste | As credenciais são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. [Acesse nossa documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações sobre como obter suas credenciais. |
----[mlb]----| Chave Pix | Para configurar o Pix em sua integração com o Mercado Pago é necessário que sua chave Pix esteja configurada. Para mais informações sobre como configurá-la, [confira nossa documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/17843). |------------

Se todos os pré-requisitos foram atendidos, siga para a etapa de integração do Checkout Pro e/ou Checkout Transparente em sua loja.

# Integração do Checkout

Com todos os pré-requisitos preenchidos, você poderá integrar o Checkout Pro e/ou Checkout Transparente em sua loja. Você pode integrar um dos dois ou os dois, dependendo dos requisitos do negócio.

Nas seções a seguir, você encontra todas as etapas necessárias para a integração completa dos modelos citados. Para isso, siga as etapas abaixo.

## Checkout Pro

Ao oferecer o Checkout Pro, seu comprador é redirecionado para uma página  do Mercado Pago onde deverá selecionar o meio de pagamento desejado e concluir o pagamento de sua compra diretamente no ambiente do Mercado Pago.

Para mais informações sobre os meios de pagamento disponíveis e os principais benefícios que o Checkout Pro oferece, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) e acesse nossa documentação.

Para instalar o Checkout Pro em sua loja, siga os passos abaixo.

1. Realize a conexão do _plugin_ do Mercado Pago conforme descrito [nesta documentação](https://support.wix.com/pt/article/conectando-mercadopago-como-provedor-de-pagamento) do Wix. Você será direcionado automaticamente para a página de configuração do _plugin_.
2. Na página de configuração, preencha os campos com as suas **credenciais de teste** (_Public Key_ e _Access Token_) para que seja possível testar a integração.
3. Em _Enable Sandbox Mode_, clique para habilitar. Isso permitirá a realização de compras teste para avaliar o funcionamento da integração.

Pronto! Com o Checkout Pro instalado em sua loja, faça uma compra teste e garanta que a integração esteja funcionando corretamente.

### Teste de compras

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase]


### Ativação do modo produção

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode.pt.md]

----[mlb, mlm]----
## Checkout Transparente

Diferentemente do Checkout Pro, ao instalar o Checkout Transparente todo o processo de pagamento será concluído no ambiente da sua loja. Isso significa que o comprador não será redirecionado para uma página do Mercado Pago para efetuar o pagamento.

Para realizar a integração do Checkout Transparente em sua loja, siga os passos abaixo.

1. Acesse seu [painel de controle da Wix](https://manage.wix.com/dashboard/) e selecione a loja que deseja configurar.
2. No menu principal, clique em **Configurações** > **Aceitar pagamentos**.
3. Ao final da página, clique em **Ver mais métodos de pagamento**.
4. Na seção **Provedores externos de cartão de crédito/débito**, clique em **Ver opções**.
5. Em **Mercado Pago** clique em **Conectar**.
6. Na página de configuração, preencha os campos com as suas credenciais de teste (_Public Key_ e _Access Token_) para que seja possível testar a integração.
7. Em _Enable Sandbox Mode_, clique para habilitar. Isso permitirá a realização de compras teste para avaliar o funcionamento da integração.
8. Clique em **Conectar**.
------------

----[mla, mpe, mco, mlu, mlc]----
## Checkout Transparente

Diferentemente do Checkout Pro, ao instalar o Checkout Transparente todo o processo de pagamento será concluído no ambiente da sua loja. Isso significa que o comprador não será redirecionado para uma página do Mercado Pago para efetuar o pagamento.

Para realizar a integração do Checkout Transparente em sua loja, siga os passos abaixo.

1. Acesse seu [painel de controle da Wix](https://manage.wix.com/dashboard/) e selecione a loja que deseja configurar.
2. No menu principal, clique em **Configurações** > **Aceitar pagamentos**.
3. Em **Mercado Pago** clique em **Conectar**.
4. Na página de configuração, preencha os campos com as suas credenciais de teste (_Public Key_ e _Access Token_) para que seja possível testar a integração.
5. Em _Enable Sandbox Mode_, clique para habilitar. Isso permitirá a realização de compras teste para avaliar o funcionamento da integração.
6. Clique em **Conectar**.
------------

Pronto! Com o checkout transparente instalado em sua loja, faça uma compra teste e garanta que a integração foi feita de maneira correta.

### Teste de compras

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase.pt.md]

### Ativação do modo produção

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode]
