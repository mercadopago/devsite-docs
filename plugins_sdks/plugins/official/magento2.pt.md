# Magento

* [Requisitos](#Requisitos)
* [Funcionalidades](#Funcionalidades)
* [Instalação](#Instalação) 
* [Checkout Custom (Transparente)](#CheckoutCustom)
* [Checkout Básico](#BasicCheckout)
* [Configurações de status de Notificações de Pagamento](#Configurações-de-status-de-Notificações-de-Pagamento)

O módulo do Mercado Pago para o Magento esta integrado com as seguintes funcionalidades e soluções de pagamento:

|                                             	| Checkout básico 	| Checkout Transparente 	|
|---------------------------------------------	|-----------------	|-----------------------	|
| Pagamento com Cartão de Crédito             	| ✔               	| ✔                     	|
| Pagamento com outros meios (Boleto)         	|                 	| ✔                     	|
| Split payments (Two cards)                  	| ✔               	| ✔                     	|
| Pagamento com um click (Clientes e Cartões) 	|                 	| ✔                     	|
| Mercado Envios                               	| ✔               	|                       	|
| Devolução de Pagamentos                     	| ✔               	| ✔                     	|
| Atualização do pedido através de Cron       	| ✔               	| ✔                     	|
| Pagina de sucesso personalizável            	| ✔                	| ✔                     	|
| Calculadora de Parcelas                     	| ✔               	| ✔                     	|

<a name="Requisitos"></a>
## Requisitos:

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
| SSL                        | Isso é obrigatório para ir para produção e utilizar nosso checkout transparente, Durante os testes você pode utilizar as credenciais de SandBox sem a necessidade de https.|
  
  
<a name="Instalação"></a>
## Instalação: ##

Esse processo irá explicar a instalação do módulo Mercado Pago via Composer:

**Instalação via Composer**

1. Adicione o repositório ao seu arquivo composer.json:

> "repositories": [ { "type": "vcs", "url": "https://github.com/mercadopago/cart-magento2" } ]

2. Execute o comando do **composer** para baixar o plugin:

> composer require mercadopago/magento2-plugin

3. Execute o comando para atualizar o Magento:

> bin/magento setup:upgrade

4. Pronto! o módulo do Mercado Pago foi instalado com sucesso.


<a name="CustomCheckout"></a>
## Configurando Cartão de Crédito e Boleto: ##

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com Checkout Custom (Transparente) com Cartão de crédito e Boleto:

1. Vá até o menu **Stores > Configuration > Sales > Payment Methods**:

2. Para configurar as credenciais acesse a opção **Mercado Pago - Custom Checkout**, irá aparecer o campo da **Public Key** e o campo do **Access Token**. Você pode obter as credenciais no link:

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

3. Com as credenciais preenchidas, é necessário habilitar os métodos de pagamento. Clique no botão **Configure** e marque a opção **Enable** como **Yes**. Faça esse processo para o **Checkout Custom - Credit Card** e para o **Checkout Custom - Ticket** e logo seguida clique em **Save Config**.

![MercadoPago Custom Checkout Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento2/master/README.img/mercadopago_custom_checkout_configuration.png)

4.  Pronto! o Checkout Custom com Cartão de crédito e Boleto foi configurado e habilitado com sucesso!


<a name="BasicCheckout"></a>
## Configurando o Checkout Clássico (Redirect, Iframe e LightBox): ##

Esse processo irá explicar como configurar o módulo para aceitar pagamentos com o Checkout Clássico no Redirect, Iframe ou Lightbox:

1. Vá até o menu  **Stores > Configuration > Sales > Payment Methods**.

2. Para configurar as credenciais acesse a opção **Mercado Pago - Classic Checkout**, logo em seguida clique em **Configure**. Irá aparecer o campo de **Client id** e o campo **Client Secret**. Você pode obter as credenciais no link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://github.com/mercadopago/cart-magento2/blob/master/README.img/mercadopago_global_configuration.png?raw=true)

3. Com as credenciais preenchidas, agora é necessário habilitar o método de pagamento. Vá até a opção **Enable** e marque como **Yes**. 
Aproveite e também configure o Tipo do Checkout (**Type Checkout**) e se o usuário deve retornar a sua loja ao finalizar o checkout (**Auto Redirect**).

4.  Pronto! o Checkout Clássico com Cartão de crédito e Boleto foi configurado e habilitado com sucesso! 

<a name="Configurando-o-Mercado-Envios"></a>
## Configurando o Mercado Envios: ##

Esse processo irá explicar como configurar o módulo para aceitar Mercado Envios:

1. Primeiro, Você precisa habilitar o Mercado Envios na sua conta Mercado Pago.

	Você consegue fazer isso acessando, de acordo com o seu país, o link abaixo:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANTE: A sua conta Mercado Pago tem que ser do tipo **Vendedor**.

2. Configure o método de pagamento **Mercado Pago Standard Checkout (redirect, iframe or lightbox)**, ele é um pré-requisito para o funcionamento do Mercado Envios.

3. Vá até o menu **Sales > Configuration > Sales > Shipping Methods > MercadoEnvios**.

4. Configure o plugin:


![MercadoEnvios Configuration](https://github.com/mercadopago/cart-magento2/raw/master/README.img/mercadoenvios.png?raw=true)

* **Enabled**: Habilitar/Desabilitar o Mercado Envios.
* **Title**: Defina o titulo do método de envio que será mostrado no momento do Checkout.
* **Product attributes mapping**: Configure os atributos de dimensão e peso. Também é possível configurar as unidades de medida.
* **Available shipping methods**: Escolha quais métodos de envio estará disponível para o comprador.
* **Free Method**: Selecione os métodos de envio que estará com frete grátis.
* **Free Shipping with Minimum Order Amount**: Habilitar/Desabilitar a funcionalidade de valor mínimo de Pedido para mostrar método de envio grátis. 
* **Minimum Order Amount for Free Shipping**: Defina o valor mínimo de Pedido para frete grátis.
* **Show method if not applicable**: Se habilitado, o método de envio é exibido quando não estiver disponível (mostrando uma mensagem de alerta).
* **Displayed Error Message**: Customize a mensagem de erro quando o método de envio não esta disponível.
* **Log**: Habilitar/Desabilitar logs.
* **Debug Mode**: Se habilitado, irá mostrar a resposta da API em vez de uma mensagem amigável.
* **Sort order**: Define a ordem de que o método de envio será exibida no fluxo de envio no processo de compra.
* **Shipping label download option**: Defina o formato para download da etiqueta de envio.

5. Pronto! O Mercado Envios foi habilitado e configurado com sucesso!


<a name="Configurações-de-status-de-Notificações-de-Pagamento"></a>
## Configurações de status de Notificações de Pagamento: ##

Esse processo irá explicar como configurar os status de pedido para as notificações de pagamento:

1. Vá até o menu **Stores > Configuration > Sales > Payment Methods**.

2. Para configurar os status acesse a opção **Mercado Pago - Global Configuration**, vá até a opção **Order Status Options**. 
Para cada status de pagamento você poderá escolher um status de pedido, assim que a sua loja receber a notificação de pagamento o módulo atualizará automaticamente o pedido para o status escolhido. Para salvar as configurações clique no botão **Save Config**.

> O módulo está preparado para receber as notificações de pagamento de forma automática, ou seja, sem a necessidade de configurar a sua conta Mercado Pago ou o módulo. 

3. Pronto! os status de notificação foram configurados com sucesso
