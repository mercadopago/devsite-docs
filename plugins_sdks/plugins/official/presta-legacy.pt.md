# Prestashop 1.6


### Mercado Pago Module (Prestashop 1.6.x)

* [Funcionalidades](#bookmark_Funcionalidades)
* [Requisitos](#bookmark_Requisitos)
* [Versões](#bookmark_Versões)
* [Instalação](#bookmark_Instalação)
* [Configuração](#bookmark_Configuração)
* [Notificações](#bookmark_Notificações)
* [Atualização](#bookmark_Atualização)


## Funcionalidades

O módulo do Mercado Pago para Prestashop esta integrado com as funcionalidades a seguir:

| Funcionalidade                               	| Smart Checkout    	| API                   |
|-----------------------------------------------|-------------------|-----------------------|
| Pagamento com Cartão de Crédito             	| ✔               	| ✔                     |
| Outros Meios de Pagamento, como os Boletos    | ✔               	| ✔                     |
| Divisão de Pagamento (Dois Cartões)           | ✔               	| ✔                     |
| Devolução/Cancelamento de Pagamentos          |                 	|                       |
| Pagamento com um click (Clientes e Cartões) 	|                 	| ✔                     |
| Calculadora de Parcelas                     	| ✔               	| ✔                     |
| MercadoEnvios                               	| ✔               	|                       |
| Assinatura (Recorrência)                    	| ✔               	|                       |
| Pagina de sucesso personalizável            	|                 	| ✔                     |
| Atualização do pedido através de Cron       	|                 	| ✔                     |
| Calculadora de Mercado Envios               	| ✔               	| ✔                     |


> NOTE
>
> IMPORTANTE
>
> O Checkout Transparente está disponível apenas para as versões 1.6.x do Prestashop.


## Requisitos

| Requisito                    | Detalhe                                                                                      |
|------------------------------|----------------------------------------------------------------------------------------------|
| Versões Suportadas           | Prestashop 1.6.x - 1.7.x                                                                     |
| Ambiente                     | LAMP (Linux, Apache, MySQL e PHP) ou LNMP stack                                              |
| Sistema Operacional          | Linux x86, Windows x86-64                                                                    |
| Servidor Web                 | Apache 1.3, Apache 2.x, Nginx ou Microsoft IIS                                               |
| Versão PHP                   | PHP 5.4+                                                                                     |
| Versão MySQL                 | MySQL 5.0+                                                                                   |
| Dependências                 | Mcrypt, OpenSSL, Zip, Curl, GD,PDO                                                           |
| Configurações adicionais PHP | safe_mode off, memory_limit como 64M (512MB é o recomendado), upload_max_filesize como "16M" |
| SSL                          | SSL é necessário para uso de cartão de crédito.                                              |

>É um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS. Durante os testes do modo sandbox você pode operar via HTTP, mas para homologação você precisará adquirir o certificado caso não o tenha.


## Versões

| Plugin Version                                              | Status                   | Versões Compatíveis |
|-------------------------------------------------------------|--------------------------|---------------------|
| [v1.6.x](https://github.com/mercadopago/cart-prestashop-6/) | Stable (Current Version) | Prestashop v1.6.x   |


## Instalação

1) Baixe o arquivo **mercadopago.zip** em nosso Github de acordo com a versão do Prestashop com a qual trabalha.

> NOTE
>
> DOWNLOAD
>
> Módulo Mercado Pago para Prestashop [1.6](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip).

2) Acessar o painel administrativo do Prestashop em **MELHORIAS** -> **Módulos** -> **Módulos e Serviços**, clicar no botão **"Enviar um Módulo"** e selecionar o arquivo **mercadopago.zip** baixado anteriormente.

3) Muito bem! O módulo do Mercado Pago foi instalado com sucesso.

![Instalação](/images/prestashop_select_mp_file.gif)


## Configuração

1) Após a instalação do módulo, se direcione para **MELHORIAS** -> **Módulos** -> **Módulos e Serviços** e clique em **Configurar** no Plugin do Mercado Pago.

2) Na tela **BASIC SETTINGS** será solicitado os dados **Client ID** e **Client Secret**. Esses dados são as credenciais da sua conta do Mercado Pago e podem ser obtidos através do seguinte link: [Obtenha suas credenciais](https://www.mercadopago.com/mlb/account/credentials?type=basic).

![Configuração](/images/prestashop_credentials_configuration.gif)

> Existem dois tipos de credenciais:
> * **Modo Sandbox**: Essas credenciais são utilizadas para testes.
> * **Modo Produção**: Essas credenciais são utilizadas para compras em produção.

3) Agora na tela **PAYMENT SETTINGS** mantenha Checkout Standard como ativo para utilizar o Checkout Redirecionado do Mercado Pago.

![Checkout Standard](/images/prestashop_checkout_standard.png)

4) Em PAYMENT METHOD você pode habilitar as formas de pagamento com as quais irá trabalhar:

![Payment Method](/images/prestashop_payment_method.png)

5) Muito bem! Você habilitou pagamentos via Checkout Standard (redirecionado)!

### Configuração Mercado Envios

> IMPORTANTE: O Mercado Envios funciona com o Checkout Standard (redirecionado). Ao utilizá-lo os demais meios de pagamentos serão desabilitados.

1) Primeiro, você precisa [habilitar o Mercado Envios na sua conta](http://shipping.mercadopago.com.ar/optin/doOptin).

> NOTE
>
> IMPORTANTE
>
> * Sua conta do Mercado Pago precisa ser do tipo **Vendedor**.
> * O produto enviado deve ter suas dimensões (largura, altura, comprimento e peso) adequadamente configurados e dentro das [regras e limites suportados](https://www.correios.com.br/a-a-z/limites-de-dimensoes-e-peso) pelo país especificado.

2) Para habilitar no módulo, você precisa apenas ativa-lo acessando o painel administrativo do Prestashopp em **MELHORIAS -> Módulos -> Módulos e Serviços** e clicando em **Configurar** no módulo do Mercado Pago:

3) Em **MERCADO ENVIOS** é possível configurar um texto para ser exibido na entrega através do campo **Custom text to use with delivery**. Para realizar a ativação marque o campo **Enable Mercado envios** como **YES**.

![Habilitar Mercado Envios](/images/prestashop_mercado_envios.png)

4) Muito bem! Agora você pode oferecer o Mercado Envios como meio de transportes para seus clientes!


## Notificações

Sua loja irá sincronizar automaticamente com o MercadoPago. A URL de notificação será enviado em cada pagamento.


### Atualização

Siga os mesmos passos que você fez para [instalar](#bookmark_instalação) o módulo.
