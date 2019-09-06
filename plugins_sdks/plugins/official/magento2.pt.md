# Magento 2

* [Requisitos para integrar](#bookmark_requisitos_para_integrar)
* [Funcionalidades](#bookmark_funcionalidades)
* [Instalação](#bookmark_instalação) 
* [Configurações de Cartão de Crédito e Boleto (Custom Checkout)](#bookmark_configurações_de_cartão_de_crédito_e_boleto_(custom_checkout))
* [Configurações de Basic Checkout](#bookmark_configurações_de_basic_checkout)
* [Configurações de status de Notificações de Pagamento](#bookmark_configurações_de_status_de_notificações_de_pagamento)


## Requisitos para integrar

Requisito                 | Descrição
------------------------- | -------------------------------------------------------------------------
Versão do Magento         | 2.x
Ambiente                  | LAMP (Linux, Apache, MySQL, and PHP)<br/>LNMP stack
Sistema Operacional       | Linux x86-64
Memoria                   | Minimum 2GB of RAM
Web Server                | Apache 2.x<br/>Nginx 1.7.x
Versões do PHP            | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/>
Versões do MySQL          | MySQL 5.6<br/>MariaDB ou Percona são compatíveis com Magento porque suportam as APIs do MySQL 5.6.
Dependências de extensões | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/>
PHP 7 only                | json<br/>iconv
SSL                       | É um requisito que você tenha um certificado SSL.<br/>Durante os testes em modo de Sandbox você poderá executar os testes em HTTP


## Funcionalidades

O módulo do Mercado Pago para o Magento esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Smart Checkout, Modal)](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction/)
    * [Pagamento com dois cartões](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations/#bookmark_pagamentos_com_2_cartão_de_crédito)
    * [Devolução de Pagamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds/)


* Checkout Transparente
    * [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card/)
    * [Pagamento com um click (Clientes e Cartões)](https://www.mercadopago.com.br/developers/pt/guides/payments/api/customers-and-cards/)
    * [Pagamento com outros meios (Boleto)](https://www.mercadopago.com.br/developers/pt/guides/payments/api/other-payment-ways/)
    * [Devolução de Pagamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds)


* Outras funcionalidades
    * Atualização do pedido através de Cron


## Instalação

    Esse processo irá explicar a instalação do módulo Mercado Pago via Composer:

**Instalação via Composer**

1) No momento disponibilizamos duas versões de módulos, onde cada uma delas irá disponibilizar um tipo de checkout:

* Caso queira processar pagamentos com **Checkout Redirecionado**, será necessário instalar a versão 2.x do módulo do Mercado Pago. Para isso execute o comando:

> composer require mercadopago/magento2-plugin:2.*

* Caso queira processar pagamentos com **Checkout Transparente (Custom)** com Cartão de Crédito ou Boleto, utilize a versão 3.x do módulo. Essa versão esta melhor otimizada para esse tipo de checkout. Para isso execute o comando:

> composer require mercadopago/magento2-plugin:3.*

2) Execute o comando para atualizar o Magento:

> bin/magento setup:upgrade

3) Execute o comando para limpar o cache do Magento:

> bin/magento cache:clean

4) Quando a loja está no modo **Produção**, é necessário gerar novamente os arquivos estáticos:

> bin/magento setup:static-content:deploy

5) Caso tenha problemas com as permissões de pasta ao acessar a loja, será necessário renovar as permissões das pastas:

> chmod 777 -R var/ pub/ generated/

6) Pronto! o módulo do Mercado Pago foi instalado com sucesso.


## Configurações de Cartão de Crédito e Boleto (Custom Checkout)

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com Checkout Custom (Transparente) com Cartão de crédito e Boleto:

1) Vá até o menu **Stores > Configuration > Sales > Payment Methods**:

2) Para configurar as credenciais acesse a opção **Mercado Pago** > **Credentials**, irá aparecer o campo da **Public Key** e o campo do **Access Token**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)


> Existem dois tipos de credenciais:
> * Modo Sandbox: As credenciais desse modo são utilizadas para realizar testes.
> * Modo Produção: As credenciais desse modo são utilizadas para receber os pagamentos em Produção. Para utilizar as credenciais do Modo Produção é necessário preencher o formulário "Eu quero ir para produção".

3) Com as credenciais preenchidas, é necessário habilitar os métodos de pagamento. Acesse a opção **Custom Checkout - Credit And Debit Card**, clique no botão **Configure** e marque a opção **Enable** como **Yes**. Faça esse processo também para **Custom Checkout - Offline Payments Methods (Ticket)** e logo seguida clique em **Save Config**.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

4)  Pronto! o Checkout Custom com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!


## Configurações de Basic Checkout

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com o Checkout Clássico no Redirect, Iframe ou Lightbox:

1) Vá até o menu  **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar as credenciais acesse a opção **Mercado Pago - Classic Checkout**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

3) Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**. 
Aproveite e também configure o Tipo do Checkout (**Type Checkout**) e se o usuário deve retornar a sua loja ao finalizar o checkout (**Auto Redirect**).

![Mercado Pago Checkout Redirect Configuration](images/magento2/mercadopago_global_configuration.png)

4)  Pronto! o Checkout Clássico com Cartão de crédito e Boleto foi configurado e habilitado com sucesso! 


## Configurações de status de Notificações de Pagamento

Esse processo irá explicar como configurar os status de pedido para as notificações de pagamento:

1) Vá até o menu **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar os status acesse a opção **Mercado Pago - Global Configuration**, vá até a opção **Order Status Options**. 
Para cada status de pagamento você poderá escolher um status de pedido, assim que a sua loja receber a notificação de pagamento o módulo atualizará automaticamente o pedido para o status escolhido. Para salvar as configurações clique no botão **Save Config**.

> O módulo está preparado para receber as notificações de pagamento de forma automática, ou seja, sem a necessidade de configurar a sua conta Mercado Pago ou o módulo. 

3) Pronto! os status de notificação foram configurados com sucesso.