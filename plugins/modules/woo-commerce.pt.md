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
O módulo do Mercado Pago para WooCommerce é integrado com as seguintes funcionalidades e soluções de pagamento:

### [Checkout Básico (Redirecionamento, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Interfaces pré-construídas do Mercado Pago<br>[[/images/wiki3/basic_checkout_payment.png|Basic Checkout]]
* [Devolução/Cancelamento de Pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)
* Divisão de Pagamento (Dois Cartões)
* [Assinaturas](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/subscriptions/)
* [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)

### Checkout Transparente
* [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>[[/images/wiki3/custom_checkout_form.png|Custom Checkout]]
* [Pagamento com 1 Click (Cartões de Clientes)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>[[/images/wiki3/oneclick_form.png|One Click Payment]]
* [Devolução/Cancelamento de Pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)
* [Outros Meios de Pagamento, como os Boletos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>[[/images/wiki3/ticket.png|Tickets]]

### Outras Funcionalidades
* Checagens de credenciais e status de plataforma
* Página de sucesso customizável
* Calculadora de parcelas
* Conversão de moedas
* Notificação instantânea de pagamentos e webhooks
* Descontos por meio de pagamento ou cupom do Mercado Pago
* Log e ferramentas de debug

# Instalação
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

* [Configurações Gerais do Mercado Pago](https://github.com/mercadopago/cart-woocommerce/wiki/Configurações-Gerais-do-Mercado-Pago)
* Checkout Transparente
  * [Configurando o Cartão de Crédito](https://github.com/mercadopago/cart-woocommerce/wiki/Configurando-o-Cartão-de-Crédito)
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