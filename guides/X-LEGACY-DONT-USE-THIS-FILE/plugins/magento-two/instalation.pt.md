# Instale o plugin

O plugin do Mercado Pago oferece mais de uma forma de instalação, mas todas apresentam o mesmo resultado de integração. Você pode instalá-lo no Magento 2 de três maneiras diferentes:

* Instalação via Composer
* Instalação via Magento Marketplace
* Instalação via FTP

## Instalação via Composer

Para instalar o plugin Mercado Pago no Magento 2 via Composer, você deve seguir estes passos:

1. Em seu terminal, execute este comando para baixar o plugin Magento 2 com o Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Em seguida, execute este comando para atualizar a lista de plugins Magento:

```
bin/magento setup:upgrade
```

3. Agora você deve executar este comando para limpar o cache do Magento:

```
bin/magento cache:clean
```

4. Quando a loja estiver em **modo produção**, será necessário gerar novamente os arquivos `estáticos`. Você pode fazer desta maneira:

```
bin/magento setup:static-content:deploy
```

Caso você enfrente problemas de permissão de pasta ao acessar a loja, será necessário renovar as permissões da seguinte forma:

```
chmod 777 -R var/ pub/ generated/
```

Pronto! Você instalou com sucesso o plugin Mercado Pago para Magento 2.

## Instalação via Magento Marketplace

Através da loja Magento, você pode instalar gratuitamente o plugin do Mercado Pago de forma muito simples. Siga os passos abaixo.

1. Acesse a [Loja Oficial Magento](https://marketplace.magento.com/). No mecanismo de busca, você deve colocar Mercado Pago e selecionar [a extensão oficial](https://marketplace.magento.com/mercadopago-core.html).
2. Abra o menu **Edition** e selecione a edição necessária do plugin. Em seguida, abra o menu **Sua versão da loja** e selecione o tipo de versão de que você precisa para o seu negócio. Por fim, clique em **Adicionar ao carrinho** para adicionar o plugin ao carrinho.
3. Clique no carrinho no canto superior direito do site e, em seguida, clique em **Prosseguir para o check-out** para finalizar a sua compra.
4. Para continuar, você deve fazer o login com sua conta Magento ou criar uma nova. Uma vez cadastrado, você pode baixar o plugin Mercado Pago e instalá-lo.


## Instalação via FTP

1. Baixe o plugin **Mercado Pago** disponível [no Github](https://github.com/mercadopago/cart-magento2).

2. Crie uma pasta com o nome **code** dentro da pasta Magento **app**.

3. Para acessar a pasta **MercadoPago**, é necessário descompactar o arquivo *.zip*.

4. Copie a pasta **MercadoPago**, localizada na pasta **code/src**.

5. Em seguida, siga as instruções em [Instalação via Composer](#bookmark_instalação_via_composer)

Pronto! Você instalou com sucesso o plugin Mercado Pago para Magento 2.


> PREV_STEP_CARD_PT
>
> Pré-requisitos de integração
>
> Conheça os pré-requisitos da integração.
>
>[Pré-requisitos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/magento-two/previous-requirements)

> NEXT_STEP_CARD_PT
>
> Configuração de pagamentos.
>
> Siga as etapas para configurar pagamentos com o Checkout Custom (Transparente).
>
> [Configuração de pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/magento-two/payment-configuration)
