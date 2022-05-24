# Magento 2

> WARNING
>
> Atenção
>
> Proteja a sua integração!
>
> Em outubro de 2022, versões do plugin Magento 2 anteriores a 3.5.0 serão descontinuadas. Mantenha sua loja sempre atualizada com a versão mais recente para não suspender transações e expor dados sensíveis.
>
> Esta documentação é apenas para uso interno da equipe porque está obsoleta ou é um produto exclusivo. Para mais detalhes, fale com a equipe de vendas ou de integrações.

## Requisitos para integrar

| Requisito | Descrição |
| --- | --- |
| Versão do Magento | 2.x |
| Ambiente | LAMP (Linux, Apache, MySQL, and PHP)<br/>LNMP stack |
| Sistema Operacional | Linux x86-64 |
| Memoria | Minimum 2GB of RAM |
| Web Server | Apache 2.x<br/>Nginx 1.7.x |
| Versões do PHP | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/> |
| Versões do MySQL | MySQL 5.6<br/>MariaDB ou Percona são compatíveis com Magento porque suportam as APIs do MySQL 5.6. |
| Dependências de extensões | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/> |
| PHP 7 only | json<br/>iconv |
| SSL | É um requisito que você tenha um certificado SSL.<br/>Durante os testes em modo de Sandbox você poderá executar os testes em HTTP. |


## Funcionalidades

O módulo do Mercado Pago para o Magento esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction)
    * [Pagamento com dois cartões](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations/#bookmark_pagamentos_com_2_cartão_de_crédito)
    * [Devolução de Pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds)


* Checkout Transparente
    * [Pagamento com Cartão de Crédito](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card)
    * [Pagamento com um click (Clientes e Cartões)](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/advanced-integration)
    * [Pagamento com outros meios (Boleto)](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways)
    * [Devolução de Pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds)


* Outras funcionalidades
    * Atualização do pedido através de Cron


## Instalação

Esse processo irá explicar a instalação do módulo Mercado Pago via Composer:

**Instalação via Composer**

1) Execute o comando para baixar o plugin com Composer:

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


## Configurações de Cartão de Crédito----[mlb]----, Pix------------ e Boleto (Custom Checkout)

Veja o passo a passo para configurar o módulo para aceitar pagamentos via Cartão de crédito----[mlb]----, Pix------------ e Boleto no Custom Checkout (Transparente). 

1) Vá até o menu **Stores > Configuration > Sales > Payment Methods**:

2) Para configurar as credenciais, acesse a opção Mercado Pago > Credentials. Irá aparecer o campo da Public key e o campo do Access token. Obtenha suas credenciais na seção [Credenciais]([FAKER][CREDENTIALS][URL]).

> Existem dois tipos de credenciais:
> * Modo Sandbox: As credenciais desse modo são utilizadas para realizar testes.
> * Modo Produção: As credenciais desse modo são utilizadas para receber os pagamentos em Produção. Para utilizar as credenciais do Modo Produção é necessário ativar suas credenciais.
> * Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações. 

3) Com as credenciais preenchidas, o próximo passo é habilitar os métodos de pagamento.
Primeiro, acesse o método que você deseja ativar.

Para habilitar pagamentos por cartão > **Checkout - Credit and Debit Card**.<br>
Para habilitar pagamentos por boleto > **Custom Checkout - Offline Payment Methods (Ticket)**.<br>
----[mlb]----Para habilitar pagamentos por Pix  > **Custom Checkout - Pix**.------------

----[mlb]----

> WARNING
>
> Importante
>
> Antes de configurar o Pix como meio de pagamento, lembre-se de:<br><br>
> - [Verifique a última versão](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) e atualize seu plugin do Mercado Pago.<br>
> - Cadastrar sua chave no Mercado Pago. Se isso não for feito, seus clientes não conseguirão finalizar a compra. [Veja como fazer](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

------------ 

Ao acessar, clique no botão **Configure** para visualizar as opções de configuração. Selecione as opções conforme preferir e marque o campo **Enabled** como **Yes**. Em seguida, clique em **Save Config**.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

4) Pronto! O meio de pagamento será habilitado com sucesso no checkout!


## Configurações do Checkout Pro

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com o Checkout Clássico no Redirect, Iframe ou Lightbox:

1) Vá até o menu  **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar as credenciais acesse a opção **Mercado Pago - Classic Checkout**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client secret**. Obtenha suas credenciais na seção [Credenciais]([FAKER][CREDENTIALS][URL]).

3) Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**.
Aproveite e também configure o Tipo do Checkout (**Type Checkout**) e se o usuário deve retornar a sua loja ao finalizar o checkout (**Auto Redirect**).

![Checkout Pro Redirect Configuration](images/magento2/mercadopago_global_configuration.png)

4)  Pronto! Checkout Pro com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!


## Configurações de status de Notificações de Pagamento

Esse processo irá explicar como configurar os status de pedido para as notificações de pagamento:

1) Vá até o menu **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar os status acesse a opção **Mercado Pago - Global Configuration**, vá até a opção **Order Status Options**.
Para cada status de pagamento você poderá escolher um status de pedido, assim que a sua loja receber a notificação de pagamento o módulo atualizará automaticamente o pedido para o status escolhido. Para salvar as configurações clique no botão **Save Config**.

> O módulo está preparado para receber as notificações de pagamento de forma automática, ou seja, sem a necessidade de configurar a sua conta Mercado Pago ou o módulo.

3) Pronto! os status de notificação foram configurados com sucesso.
