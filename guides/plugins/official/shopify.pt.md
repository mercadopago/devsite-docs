# Shopify

----[mlb]----

[Shopify](https://www.shopify.com.br/) é uma plataforma de e-commerce que oferece todos os recursos necessários para realizar vendas online.

Ao integrar o **Mercado Pago** na sua Shopify, será possível receber pagamentos através do [Checkout Pro](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-pro/introduction), onde o comprador é direcionado para uma página do Mercado Pago para concluir o pagamento, ou do [Checkout Transparente](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/introduction) que permite ao comprador realizar todo o processo de pagamento dentro do ambiente da sua loja.

Caso queira, é possível utilizar somente um tipo de checkout (Checkout Pro ou Transparente), contudo, **para oferecer o Checkout Transparente, é obrigatório integrar o Checkout Pro primeiro**.

Para realizar a integração, você precisará seguir as seguintes etapas:

1. [Instalar o Checkout Pro](#bookmark_checkout_pro)
2. [Instalar o Checkout Transparente](#bookmark_checkout_transparente)


## Checkout Pro

A primeira fase da integração do Mercado Pago com a Shopify é a instalação do Checkout Pro. Neste modelo de checkout, o cliente é direcionado para uma página do Mercado Pago onde deverá preencher as informações solicitadas e concluir o pagamento.

Caso você já tenha o Checkout Pro instalado, [clique aqui](#bookmark_checkout_transparente) e siga os passos para instalação do Checkout Transparente.

> NOTE
>
> Importante
>
> O Checkout Pro do Mercado Pago é instalado exclusivamente em **Produção** e já permite o processamento de pagamentos reais. Isso significa que você **não precisará configurar um modo produção** para começar a receber os pagamentos realizados em sua loja.

### Instalação

Para instalar o Checkout Pro em sua loja Shopify, siga o passo a passo abaixo.
 
1. Acesse o **Painel de Administração** da sua loja e clique em **Configurações > Pagamentos**.
2. Em **Provedor de pagamento** clique em **Escolher provedor**.
3. Busque por **Mercado Pago** no espaço de busca e clique na opção disponível.
4. Em _Client_id_ e _Client_secret_, insira suas credenciais de **Produção**. Para mais informações sobre como obter essas informações, acesse a documentação [Credenciais.](https://www.mercadopago.com.br/developers/pt/guides/resources/credentials)
5. Selecione as imagens referentes aos meios de pagamento que deseja exibir em sua loja. Essas imagens são meramente ilustrativas e não significam a ativação do meio de pagamento selecionado.
6. Em **Modo teste**, selecione a opção **Habilite o modo de teste** caso queira manter sua loja em ambiente de teste antes de disponibilizá-la aos seus clientes, contudo, se preferir deixar sua loja habilitada para receber vendas reais, mantenha o campo desabilitado.
7. Ao finalizar o preenchimento, clique em **Salvar alterações**.

### Configuração
 
Para garantir uma melhor experiência de compra e maior integração com os aplicativos Shopify, é importante personalizar informações específicas no checkout e na sua loja. Para isso, siga as etapas abaixo.
 
1. Acesse o **Painel de Administração** da sua loja e clique em **Configurações > Checkout**.
2. Em **Opções de Formulário**, marque o item **Nome da Empresa** como **obrigatório**.
3. Volte para **Configurações** e clique em **Idiomas**.
4. Na seção **Idioma Padrão**, clique em **Alterar Idiomas do Tema**.
5. Selecione a opção Português e clique em salvar.
6. Ainda na página de idiomas, utilize a barra de busca e procure pelo campo **Company**.
7. Substitua todas as entradas de **Company label**, **Optional company label**, **Address company blank**, e **Address – Company** pelo texto **CPF/CNPJ**.
8. Clique em **Salvar**.

Pronto, ao concluir essas etapas o checkout estará instalado e configurado. Agora, faça uma compra teste para garantir que todas as etapas foram feitas corretamente e o checkout está pronto para processar suas vendas.

### Teste de compras

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

## Checkout Transparente

O Checkout Transparente do Mercado Pago permite que todo o processo de compra aconteça no ambiente da sua loja, sem a necessidade de um redirecionamento para uma página externa para concluir o pagamento.

> WARNING
>
> Importante
>
> Caso você já tenha uma versão anterior do Checkout Transparente instalada, será necessário desinstalá-la antes de configurar a nova versão. Para isso, acesse o painel administrativo da sua Shopify e clique em **Apps > Excluir Checkout Transparente Mercado Pago**.

### Instalação

Para instalar o Checkout Transparente em sua Shopify, siga o passo a passo abaixo.

1. [Clique aqui](https://apps.shopify.com/checkout-transparente-mp) para acessar a página de instalação do aplicativo Checkout Transparente do Mercado Pago.
2. No canto inferior direito da tela, clique em **Instalar app**.
3. Na tela seguinte, você deverá inserir suas credenciais **Public key** e **Access token** para teste e para produção. Para saber como obter essas informações, [clique aqui](https://www.mercadopago.com.br/developers/pt/guides/resources/credentials) e acesse nossa documentação.
4. Em **Como você quer operar**, selecione a opção **Quero testar minha loja**. Isso permitirá realizar testes para garantir o funcionamento do checkout.
5. Clique em **Salvar alterações**.

### Configuração
 
Para garantir uma melhor experiência de compra e maior integração com os aplicativos Shopify, é importante personalizar informações específicas no checkout e na sua loja. Para isso, siga as etapas abaixo.
 
1. Acesse o **Painel de Administração** da sua loja e clique em **Configurações > Checkout**.
2. Em **Opções de Formulário**, marque o item **Nome da Empresa** como **obrigatório**.
3. Volte para **Configurações** e clique em **Idiomas**.
4. Na seção **Idioma Padrão**, clique em **Alterar Idiomas do Tema**.
5. Selecione a opção Português e clique em salvar.
6. Ainda na página de idiomas, utilize a barra de busca e procure pelo campo **Company**.
7. Substitua todas as entradas de **Company label**, **Optional company label**, **Address company blank**, e **Address – Company** pelo texto **CPF/CNPJ**.
8. Clique em **Salvar**.
 
Pronto, ao concluir essas etapas o checkout estará instalado e configurado. Agora, faça uma compra teste para garantir que todas as etapas foram feitas corretamente e o checkout está pronto para processar suas vendas.

### Teste de compras

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

### Ativação do modo produção

A ativação do modo produção permitirá que sua loja receba vendas reais. Para ativá-lo siga os passos abaixo.

1. Acesse o **Painel de Administração** da sua loja e clique em **Apps**.
2. Clique na opção **Checkout transparente**.
3. Em **Como você quer operar?**, selecione a opção **Quero ir para produção**.
4. Clique em **Salvar**.

Pronto! O Checkout transparente do Mercado Pago está instalado e funcionando corretamente. 

------------

----[mla, mlm, mlu, mpe, mco, mlc]----

[Shopify](https://www.shopify.com.br/) é uma plataforma de e-commerce que oferece todos os recursos necessários para realizar vendas online.

Ao integrar o **Mercado Pago** na sua Shopify, será possível receber pagamentos através do [Checkout Pro](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-pro/introduction), onde o comprador é direcionado para uma página do Mercado Pago para concluir o pagamento.

Para mais informações sobre o Checkout Pro e seus benefícios, [clique aqui](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-pro/introduction) e acesse nossa documentação.

## Checkout Pro

Ao instalar o Checkout Pro, seu cliente será direcionado para uma página do Mercado Pago onde deverá preencher as informações solicitadas e realizar o pagamento, ou seja, a transação é processada e concluída fora do ambiente da sua loja.

Para realizar a instalação do Checkout Pro, siga os passos abaixo.

> NOTE
>
> Importante
>
> O Checkout Pro do Mercado Pago é instalado exclusivamente em **Produção**, ou seja, já permite o processamento de pagamentos reais. Isso significa que você **não precisará configurar um modo produção** para começar a receber os pagamentos realizados em sua loja.

### Instalação

Para instalar o Checkout Pro em sua Shopify, siga o passo a passo abaixo.

1. Acesse o **Painel de Administração** da sua loja e clique em **Configurações > Pagamentos**.
2. Em **Provedor de pagamento** clique em **Escolher provedor**.
3. Busque por **Mercado Pago** no espaço de busca e clique na opção disponível.
4. Em _Client_id_ e _Client_secret_, insira suas credenciais de **Produção**. Para mais informações sobre como obter essas informações, acesse a documentação [Credenciais.](https://www.mercadopago.com.br/developers/pt/guides/resources/credentials)
5. Selecione as imagens referentes aos meios de pagamento que deseja exibir em sua loja. Essas imagens são meramente ilustrativas e não significam a ativação do meio de pagamento selecionado.
6. Em **Modo teste**, selecione a opção **Habilite o modo de teste** caso queira manter sua loja em ambiente de teste antes de disponibilizá-la aos seus clientes, contudo, se preferir deixar sua loja habilitada para receber vendas reais, mantenha o campo desabilitado.
7. Ao finalizar o preenchimento, clique em **Salvar alterações**.

### Configuração
 
Para garantir uma melhor experiência de compra e maior integração com os aplicativos Shopify, é importante personalizar informações específicas no checkout e na sua loja. Para isso, siga as etapas abaixo.
 
1. Acesse o **Painel de Administração** da sua loja e clique em **Configurações > Checkout**.
2. Em **Opções de Formulário**, marque o item **Nome da Empresa** como **obrigatório**.
3. Volte para **Configurações** e clique em **Idiomas**.
4. Na seção **Idioma Padrão**, clique em **Alterar Idiomas do Tema**.
5. Selecione a opção Português e clique em salvar.
6. Ainda na página de idiomas, utilize a barra de busca e procure pelo campo **Company**.
7. Substitua todas as entradas de **Company label**, **Optional company label**, **Address company blank**, e **Address – Company** pelo texto **CPF/CNPJ**.
8. Clique em **Salvar**.
 
Pronto, ao concluir essas etapas o checkout estará instalado e configurado. Agora,  faça uma compra teste para garantir que todas as etapas foram feitas corretamente e o checkout está pronto para processar suas vendas.

### Teste de compras

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

------------