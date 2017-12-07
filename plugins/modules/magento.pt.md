# Magento - Mercado Pago Module (v1.8.x to 1.9.x)

* [Requisitos](#Requisitos)
* [Funcionalidades](#Funcionalidades)
* [Instalação](#Instalação)
  * [Via Marketplace](#Via-Marketplace))
  * [Via Package](#Via-Package))
* [Atualização](#Atualização)
* Checkout Custom (Transparente)
  * [Configurando Cartão de Crédito e Boleto](#Config-Checkout-Custom-Cartão-Crédito-e-Boleto))
* Checkout Básico
  * [Configurando o Checkout Redirect, Iframe e LightBox](#Configurando-o-Checkout-Classico)
  * [Configurando o Mercado Envios](#Configurando-o-Mercado-Envios)
  * [Configurando o Pagamento Recorrente](#Configurando-o-Pagamento-Recorrente)
* [Configurações de status de Notificações de Pagamento](#Configurações-de-status-de-Notificações-de-Pagamento)
* [FAQ](#FAQ)
* [Suporte](#Suporte)

<a name="Requisitos"></a>
## Requisitos: ##

**Versão do Magento**
* Community Edition 1.8.x - 1.9.x
* Enterprise Edition 1.11.x - 1.14.x

**Ambiente**
* LAMP (Linux, Apache, MySQL, and PHP)
* LNMP stack

**Sistema Operacional**
* Linux x 86
* x86-64

**Web Server**
* Apache 2.x
* Nginx 1.7.x

**Hospedagem**
* Possa executar crontab com PHP 5
* Possa sobrescrever o arquivo .htaccess

**Versões do PHP**
* PHP 5.6
* PHP 5.5
* PHP 5.4

**Versões do MySQL**
* MySQL 5.6 (Oracle or Percona)

**Dependências de extensões**
* PDO_MySQL
* simplexml
* mcrypt
* hash
* GD
* DOM
* iconv
* curl
* SOAP (for Webservices API)

**Configurações adicionais**
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

**SSL**
* É um requisito que você tenha um certificado SSL.
* Durante os testes em modo de Sandbox você poderá executar os testes em HTTP. 

<a name="Funcionalidades"></a>
## Funcionalidades: ##

O módulo do Mercado Pago para o Magento esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Redirecionado, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * Pagamento com dois cartões
    * [Mercado Envios](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * [Devolução de Pagamentos](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/refund-cancel#refund)
    * [Assinatura (Recorrência)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/subscriptions/)


* Checkout Transparente
    * [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * [Pagamento com um click (Clientes e Cartões)](https://www.mercadopago.com.br/developers/pt/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pagamento com outros meios (Boleto)](https://www.mercadopago.com.br/developers/pt/solutions/payments/custom-checkout/charge-with-other-methods/)
    * Pagamento com dois cartões
    * [Devolução de Pagamentos](https://www.mercadopago.com.br/developers/pt/solutions/payments/custom-checkout/refund-cancel#refund)


* Outras funcionalidades
    * Atualização do pedido através de Cron
    * Pagina de sucesso personalizável
    * Calculadora de Parcelas


<a name="Instalação"></a>
## Instalação: ##

Esse processo irá explicar a instalação do módulo Mercado Pago via Package e Marketplace:

<a name="Via-Marketplace"></a>
**Instalação via Marketplace**

1. Vá até o **[Magento Marketplace](https://marketplace.magento.com/)**, pesquise por **Mercado Pago Payment**, selecione o módulo para versão **M1**, adicione o módulo no carrinho e finalize o processo de compra (você não terá custo nenhum):
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_1.gif)

2. Ao finalizar o processo de "compra", clique em **Install** e copie o link que será disponibilizado na tela:
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_2.gif)
> O link copiado deve ser igual a esse: 
> https://connect20.magentocommerce.com/e848b7a0bc8735cd525582c/mercadopago+MercadoPago-2.9.0

3. Para efetuar a instalação iremos utilizar a ferramenta **Magento Connect Manager**, acesse o admin do Magento e vá até o menu  **System > Magento Connect > Magento Connect Manager**.

4. Cole o link obtido no **Magento Marketplace** na opção **Install New Extensions** e click em **Install**.

![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_3.gif)

5. Pronto! o módulo do Mercado Pago foi instalado com sucesso.

<a name="Via-Package"></a>
**Instalação via Package**

1. Vá até o **[Github do Módulo Magento do Mercado Pago](https://github.com/mercadopago/cart-magento)**, faça o download do arquivo que possui a extensão **.tgz** (Exemplo: MercadoPago-2.10.0.tgz):
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/download_github.gif)

2. Para efetuar a instalação iremos utilizar a ferramenta **Magento Connect Manager**, acesse o admin do Magento e vá até o menu  **System > Magento Connect > Magento Connect Manager**.

3. Faça o upload do arquivo na opção **Direct package file upload** e click em **Upload**:

![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/install_tgz.gif)

4. Pronto! o módulo do Mercado Pago foi instalado com sucesso.


<a name="Config-Checkout-Custom-Cartão-Crédito-e-Boleto"></a>
## Configurando Cartão de Crédito e Boleto: ##

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com Checkout Custom (Transparente) com Cartão de crédito e Boleto:

1. Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. Para configurar as credenciais acesse a opção **Mercado Pago - Custom Checkout**, irá aparecer o campo da **Public Key** e o campo do **Access Token**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)


![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-02.gif)

> Existem dois tipos de credenciais:
> * Modo Sandbox: As credenciais desse modo são utilizadas para realizar testes.
> * Modo Produção: As credenciais desse modo são utilizadas para receber os pagamentos em Produção. Para utilizar as credenciais do Modo Produção é necessário preencher o formulário "Eu quero ir para produção".

3. Com as credenciais preenchidas, é necessário habilitar os métodos de pagamento. Clique no botão **Configure** e marque a opção **Enable** como **Yes**. Faça esse processo para o **Checkout Custom - Credit Card** e para o **Checkout Custom - Ticket** e logo seguida clique em **Save Config**.

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-03.gif)

4.  Pronto! o Checkout Custom com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!
 
![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Configurando-o-Checkout-Classico"></a>
## Configurando o Checkout Clássico (Redirect, Iframe e LightBox): ##

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com o Checkout Clássico no Redirect, Iframe ou Lightbox:

1. Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. Para configurar as credenciais acesse a opção **Mercado Pago - Classic Checkout**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-04.gif)

3. Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**. 
Aproveite e também configure o Tipo do Checkout (**Type Checkout**) e se o usuário deve retornar a sua loja ao finalizar o checkout (**Auto Redirect**).

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-05.gif)

4.  Pronto! o Checkout Clássico com Cartão de crédito e Boleto foi configurado e habilitado com sucesso! 

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Configurando-o-Mercado-Envios"></a>
## Configurando o Mercado Envios: ##

Esse processo irá explicar como configurar o módulo para aceitar Mercado Envios:

1. Primeiro, Você precisa habilitar o Mercado Envios na sua conta Mercado Pago.

	Você consegue fazer isso acessando, de acordo com o seu país, o link abaixo:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANTE: A sua conta Mercado Pago tem que ser do tipo **Vendedor**.

2. Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Shipping Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-01.gif)

3. Para habilitar o Mercado Envios acesse a opção **MercadoEnvios**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Enable** marque esse campo com a opção **Yes**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-02.gif)

4. Vá até a opção **Product attributes mapping** e selecione de acordo com os atributos que você possui configurado em sua loja. Aproveite e configure os métodos de envio disponível, na opção **Available shipping methods**. Clique na opção **Save Config** para salvar as configurações realizadas:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-03.gif)

5. Pronto! O Mercado Envios foi habilitado e configurado com sucesso!

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/me_save.png)


<a name="Configurando-o-Pagamento-Recorrente"></a>
## Configurando o Pagamento Recorrente: ##

Esse processo irá explicar como configurar o módulo para aceitar pagamentos recorrentes:

1. Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. Para configurar as credenciais acesse a opção **Mercado Pago - Recurring Payments**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-re-01.gif)

3. Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**. 

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-re-02.gif)

4.  Pronto! o Pagamento Recorrente foi configurado com sucesso!
![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Configurações-de-status-de-Notificações-de-Pagamento"></a>
## Configurações de status de Notificações de Pagamento: ##

Esse processo irá explicar como configurar os status de pedido para as notificações de pagamento:

1. Vá até o menu **Systems > Configuration**, na pagina de configurações vá até a opção **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. Para configurar os status acesse a opção **Mercado Pago - Global Configuration**, vá até a opção **Order Status Options**. 
Para cada status de pagamento você poderá escolher um status de pedido, assim que a sua loja receber a notificação de pagamento o módulo atualizará automaticamente o pedido para o status escolhido. Para salvar as configurações clique no botão **Save Config**.

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-06.gif)

> O módulo está preparado para receber as notificações de pagamento de forma automática, ou seja, sem a necessidade de configurar a sua conta Mercado Pago ou o módulo. 

3. Pronto! os status de notificação foram configurados com sucesso

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="FAQ"></a>
## FAQ: ##

Em construção...


<a name="Suporte"></a>
## Suporte: ##

Caso tenha alguma dúvida, problema ou erro temos um canal de atendimento. 
Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta Mercado Pago.
* Detalhes sobre a sua duvida, problema ou erro.
* Arquivos que possa ajudar no entendimento (Print-Screen, Video, Arquivos de Log, etc).
* Versão do Magento.
* Versão do Modulo, caso esteja utilizando.
> Você pode obter a versão do modulo nas configurações do modulo. Para acessar as configurações do módulo vá até **System > Configuration**, clique na opção **Payment Methods**, vá até a opção **Mercado Pago - Global Configuration** na sessão **Developer Options** você encontrará a opção **Version Module**, conforme a imagem:
>
> ![Developer](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/developer_option.png)

Não se preocupe... Iremos ajuda-lo o mais rápido possível.