# Magento

* [Funcionalidades](#bookmark_funcionalidades)
* [Requisitos](#bookmark_requisitos)
* [Instalação](#bookmark_instalação) 
* [Atualização](#bookmark_atualização)
* [Configurar Checkout Custom (Cartão de Crédito e Boleto)](#bookmark_configurar_checkout_custom_(cartão_de_crédito_e_boleto))
* [Configurar Checkout Clássico](#bookmark_configurar_checkout_clássico)
* [Configurações de status de Notificações de Pagamento](#bookmark_configurações_de_status_de_notificações_de_pagamento)


## Funcionalidades

O módulo do Mercado Pago para o Magento esta integrado com as seguintes funcionalidades e soluções de pagamento:

|                                             	| Checkout básico 	| Checkout Transparente 	|
|---------------------------------------------	|-----------------	|-----------------------	|
| Pagamento com Cartão de Crédito             	| ✔               	| ✔                     	|
| Pagamento com outros meios (Boleto)         	|                 	| ✔                     	|
| Split payments (Two cards)                  	| ✔               	| ✔                     	|
| Pagamento com um click (Clientes e Cartões) 	|                 	| ✔                     	|
| Assinatura (Recorrência)                    	| ✔               	|                       	|
| MercadoEnvios                               	| ✔               	|                       	|
| Devolução de Pagamentos                     	| ✔               	| ✔                     	|
| Atualização do pedido através de Cron       	|                 	| ✔                     	|
| Página de sucesso personalizável            	|                 	| ✔                     	|
| Calculadora de Parcelas                     	| ✔               	| ✔                     	|


## Requisitos

|                            | Detalle                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versões Suportadas         | Community Edition 1.8.x - 1.9.x, Enterprise Edition 1.11.x - 1.14.x                            |
| Ambiente                   | LAMP (Linux, Apache, MySQL y PHP) ó LNMP stack                                                 |
| Sitema Operacional         | Linux x86, Windows x86-64                                                                      |
| Servidor Web               | Apache 2.x,  Nginx 1.7.x                                                                       |
| Versão PHP                 | PHP 5.6, 5.5 y 5.4                                                                             |
| Versão MySQL               | MySQL 5.6 (Oracle o Percona)                                                                   |
| Dependências               | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Configurações adicionais   | safe_mode off * memory_limit maior que 256MB (512MB é o recomendado)                           |
| SSL                        | Isso é obrigatório para ir para produção e utilizar nosso checkout transparente. Durante os testes você pode utilizar as credenciais de SandBox sem a necessidade de https.|

  
## Instalação

Esse processo irá explicar a instalação do módulo Mercado Pago via Package e Marketplace:

**Instalação via Marketplace**

1) Vá até o **[Magento Marketplace](https://marketplace.magento.com/)**, pesquise por **Mercado Pago Payment**, selecione o módulo para versão **M1**, adicione o módulo no carrinho e finalize o processo de compra (**você não terá custo nenhum**):

![Installing Mercado Pago with marketplace of Magento](/images/magento/magento-marketplace_1.gif)

2) Ao finalizar o processo de "compra", clique em **Install** e copie o link que será disponibilizado na tela:

![Installing and copying the access keys](/images/magento/magento-marketplace_2.gif)

> O link copiado deve ser igual a esse:
> https://connect20.magentocommerce.com/e848b7a0bc8735cd525582c/mercadopago+MercadoPago-2.9.0

3) Para efetuar a instalação iremos utilizar a ferramenta **Magento Connect Manager**, acesse o admin do Magento e vá até o menu  **System > Magento Connect > Magento Connect Manager**.

4) Cole o link obtido no **Magento Marketplace** na opção **Install New Extensions** e click em **Install**.

![Pasting the access key to install](/images/magento/magento-marketplace_3.gif)

5) Pronto! o módulo do Mercado Pago foi instalado com sucesso.

**Instalação via Package**

1) Vá até o **[Github do Módulo Magento do Mercado Pago](https://github.com/mercadopago/cart-magento)**, faça o download do arquivo que possui a extensão **.tgz** (Exemplo: MercadoPago-2.10.0.tgz):

![Installing the Mercado Pago via package](/images/magento/magento-download_github.gif)

2) Para efetuar a instalação iremos utilizar a ferramenta **Magento Connect Manager**, acesse o admin do Magento e vá até o menu  **System > Magento Connect > Magento Connect Manager**.

3) Faça o upload do arquivo na opção **Direct package file upload** e click em **Upload**:

![Uploading the Mercado Pago file on Magento](/images/magento/magento-install_tgz.gif)

4) Pronto! o módulo do Mercado Pago foi instalado com sucesso.


## Atualização

Caso você ja possua o módulo do Mercado Pago e deseja instalar uma versão mais atual do módulo, aconselhamos remover todos os arquivos relacionados aos módulo anterior.

A lista de arquivos e pasta a ser removida:

* app/code/community/MercadoPago
* app/design/adminhtml/default/default/layout/mercadopago.xml
* app/design/frontend/base/default/layout/mercadopago.xml
* app/design/adminhtml/default/default/template/mercadopago
* app/design/frontend/base/default/template/mercadopago
* js/mercadopago
* skin/adminhtml/default/default/mercadopago
* skin/frontend/base/default/mercadopago
* lib/MercadoPago
* app/etc/modules/MercadoPago_Core.xml
* app/etc/modules/MercadoPago_MercadoEnvios.xml
* app/etc/modules/MercadoPago_OneStepCheckout.xml
* app/locale/en_US/MercadoPago_Core.csv
* app/locale/es_AR/MercadoPago_Core.csv
* app/locale/es_CL/MercadoPago_Core.csv
* app/locale/es_CO/MercadoPago_Core.csv
* app/locale/es_ES/MercadoPago_Core.csv
* app/locale/es_MX/MercadoPago_Core.csv
* app/locale/es_VE/MercadoPago_Core.csv
* app/locale/pt_BR/MercadoPago_Core.csv

Depois de feito esse processo, execute o processo de **Instalação**.

> Lembre-se sempre de realizar um backup da sua loja antes de fazer qualquer alteração.


## Configurar Checkout Custom (Cartão de Crédito e Boleto)

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com Checkout Custom (Transparente) com Cartão de crédito e Boleto:

1) Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuring Credit Card and Ticket in Magento](/images/magento/magento-config-01.gif)

2) Para configurar as credenciais acesse a opção **Mercado Pago - Custom Checkout**, irá aparecer o campo da **Public Key** e o campo do **Access Token**. [Obtenha suas credenciais](https://www.mercadopago.com/mla/account/credentials?type=basic)  

![Configuring credentials in Magento](/images/magento/magento-config-02.gif)

> Existem dois tipos de credenciais:
> * Modo Sandbox: As credenciais desse modo são utilizadas para realizar testes.
> * Modo Produção: As credenciais desse modo são utilizadas para receber os pagamentos em Produção. Para utilizar as credenciais do Modo Produção é necessário preencher o formulário "Eu quero ir para produção".

3) Com as credenciais preenchidas, é necessário habilitar os métodos de pagamento. Clique no botão **Configure** e marque a opção **Enable** como **Yes**. Faça esse processo para o **Checkout Custom - Credit Card** e para o **Checkout Custom - Ticket** e logo seguida clique em **Save Config**.

![Enabling payment method in Magento](/images/magento/magento-config-03.gif)

4) Pronto! o Checkout Custom com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!

![Successfully configured basic checkout](/images/magento/magento-save.png)


## Configurar Checkout Clássico

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com o Checkout Clássico no Redirect, Iframe ou Lightbox:

1) Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuring Checkout Redirect, Iframe and LightBox](/images/magento/magento-config-01.gif)

2) Para configurar as credenciais acesse a opção **Mercado Pago - Classic Checkout**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. [Obtenha suas credenciais](https://www.mercadopago.com/mla/account/credentials?type=basic)  

![Configuring credentials - Checkout redirect](/images/magento/magento-config-04.gif)

3) Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**.
Aproveite e também configure o Tipo do Checkout (**Type Checkout**) e se o usuário deve retornar a sua loja ao finalizar o checkout (**Auto Redirect**).

![Enabling payment method in Magento - Checkout redirect](/images/magento/magento-config-05.gif)

4) Pronto! o Checkout Clássico com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!

![Successfully configured Checkout redirect](/images/magento/magento-save.png)


## Configurando o Mercado Envios

Esse processo irá explicar como configurar o módulo para aceitar Mercado Envios:

1) Primeiro, Você precisa [habilitar o Mercado Envios](http://shipping.mercadopago.com.ar/optin/doOptin) na sua conta Mercado Pago.

> 	IMPORTANTE: A sua conta Mercado Pago tem que ser do tipo **Vendedor**.

2) Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Shipping Methods**:

![Configuring the Mercado Envios in Magento](/images/magento/magento-config-me-01.gif)

3) Para habilitar o Mercado Envios acesse a opção **MercadoEnvios**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Enable** marque esse campo com a opção **Yes**:

![Enabling Mercado Envios in Magento](/images/magento/magento-config-me-02.gif)

4) Vá até a opção **Product attributes mapping** e selecione de acordo com os atributos que você possui configurado em sua loja. Aproveite e configure os métodos de envio disponível, na opção **Available shipping methods**. Clique na opção **Save Config** para salvar as configurações realizadas:

![Configuring products in Mercado Envios](/images/magento/magento-config-me-03.gif)

5) Pronto! O Mercado Envios foi habilitado e configurado com sucesso!

![Mercado Envios configured successfully](/images/magento/magento-me_save.png)


## Configurando o Pagamento Recorrente

Esse processo irá explicar como configurar o módulo para aceitar pagamentos recorrentes:

1) Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuring recurring payments](/images/magento/magento-config-01.gif)

2) Para configurar as credenciais acesse a opção **Mercado Pago - Recurring Payments**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. [Obtenha suas credenciais](https://www.mercadopago.com/mla/account/credentials?type=basic)  

![Configuring Credentials - Recurring Payments](/images/magento/magento-config-re-01.gif)

3) Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**.

![Enabling payment method in Magento - Recurring Payments](/images/magento/magento-config-re-02.gif)

4) Pronto! o Pagamento Recorrente foi configurado com sucesso!

![Recurring Payments configured successfully](/images/magento/magento-save.png)


## Configurações de status de Notificações de Pagamento

Esse processo irá explicar como configurar os status de pedido para as notificações de pagamento:

1) Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Accessing the payment method to configure the status of Payment Notifications](/images/magento/magento-config-01.gif)

2) Para configurar os status acesse a opção **Mercado Pago - Global Configuration**, vá até a opção **Order Status Options**.
Para cada status de pagamento você poderá escolher um status de pedido, assim que a sua loja receber a notificação de pagamento o módulo atualizará automaticamente o pedido para o status escolhido. Para salvar as configurações clique no botão **Save Config**.

![Configure payment notification status](/images/magento/magento-config-06.gif)

> O módulo está preparado para receber as notificações de pagamento de forma automática, ou seja, sem a necessidade de configurar a sua conta Mercado Pago ou o módulo.

3) Pronto! os status de notificação foram configurados com sucesso.

![Status of Payment Notifications configured successfully](/images/magento/magento-save.png)
