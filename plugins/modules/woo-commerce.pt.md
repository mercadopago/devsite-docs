![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-woocommerce/master/assets/images/mplogo.png)

Módulo de integração do Mercado Pago para WooCommerce

# Requisitos de Sistema
### Versões de Plataforma
* <a href="https://wordpress.org/download/">WordPress</a> 3.1.x - 4.7.x
* <a href="https://wordpress.org/plugins/woocommerce/">WooCommerce</a> 2.6.x - 3.1.x

### Ambiente
* LAMP (Linux, Apache, MySQL, e PHP)

### Sistema Operacional
* Linux x86
* x86-64

### Servidor Web
* <a href="https://httpd.apache.org/">Apache 2.x</a>

### Hospedagem
* Deve poder sobrescrever o arquivo .htaccess

### Versões PHP
* <a href="http://php.net/">PHP</a> 5.6 ou maior, com suporte a cURL

### Versões MySQL
* <a href="http://www.mysql.com/">MySQL</a> versão 5.6 ou maior OU <a href="https://mariadb.org/">MariaDB</a> versão 10.0 ou maior

### Dependência de Extensões
* WooCommerce

### Configurações Adicionais
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

### SSL
* Certificação SSL é um pré-requisito para cartões de crédito e boletos (Checkout Transparente).

# Funcionalidades
Se você já tiver este módulo instalado, por favor, siga as <a href="https://github.com/mercadopago/cart-woocommerce/wiki/Atualização">Instruções de Atualização</a> antes.

Você tem duas opções para instalar este módulo: da sua loja WordPress, ou fazendo o download manual e copiando o diretório do módulo.

### Instalar a Partir do WordPress

1. Na administração da sua loja, vá para a opção *Plugins* na barra lateral;

2. Clique no botão *Adicionar Novo* e digite "WooCommerce MercadoPago" no campo de texto *Procurar Plugins*. Pressione Enter;

3. Você deverá encontrar o módulo pronto para ser instalado. Clique em "instalar". Está feito!

### Download Manual

1. Obtenha o código fonte do módulo de um repositório (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> ou <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);

2. Descompacte a pasta e renomeie-a para "woocommerce-mercadopago";

3. Copie o diretório "woocommerce-mercadopago" para dentro do diretório *[WordPressRootDirectory]/wp-content/plugins/*. Está feito!

> DICA: Para confirmar que seu módulo está realmente instalado, você pode clicar no item *Plugins* no menu lateral da página administrativa da sua loja, e checar seu módulo recém-instalado. Apenas clique em *ativar* para ativá-lo e você deverá receber a mensagem "Plugin ativado." como uma notificação em seu WordPress.

# Configurações Gerais do Mercado Pago
## Checkout Transparente
## Configurando o Cartão de Crédito
Esta página explicará como configurar o módulo para aceitar pagamentos com o Cartão de Crédito do Checkout transparente. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Checkout Transparente*. Você deve obter a seguinte página:

[[/images/wiki3/custom_checkout_config.png|Custom Checkout Config]]

Se você configurou adequadamente suas credenciais em <a href="https://github.com/mercadopago/cart-woocommerce/wiki/Configurações-Gerais-do-Mercado-Pago">Configurações Gerais do Mercado Pago</a>, então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Cupons*: Permitir cupom de campanhas para descontos
  * *Modo Binário*: Ao cobrar um cartão de crédito, apenas o status [aprovado] ou [rejeitado] será tomado;
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles usem cartões de crédito como método de pagamento.
 
  * [Configurando os Boletos](https://github.com/mercadopago/cart-woocommerce/wiki/Configurando-os-Boletos)
* Checkout Básico
  * [Configurando o Checkout por Redirect, Iframe, ou LightBox](https://github.com/mercadopago/cart-woocommerce/wiki/Configurando-o-Checkout-por-Redirect,-Iframe,-ou-LightBox)
  * [Configurando o Mercado Envios](https://github.com/mercadopago/cart-woocommerce/wiki/Configurando-o-Mercado-Envios)
  * [Configurando as Assinaturas](https://github.com/mercadopago/cart-woocommerce/wiki/Configurando-as-Assinaturas)
* [Configurações das Notificações Instantâneas de Pagamento](https://github.com/mercadopago/cart-woocommerce/wiki/Configurações-das-Notificações-Instantâneas-de-Pagamento)
* [Atualização](https://github.com/mercadopago/cart-woocommerce/wiki/Atualização)
* [FAQ](https://github.com/mercadopago/cart-woocommerce/wiki/FAQ-Portuguese)
* [Suporte Técnico](https://github.com/mercadopago/cart-woocommerce/wiki/Suporte-Técnico)
* [Como Contribuir](https://github.com/mercadopago/cart-woocommerce/wiki/Como-Contribuir)