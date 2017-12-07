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
* Interfaces pré-construídas do Mercado Pago<br>![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_payment.png)
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
Se você já tiver este módulo instalado, por favor, siga as [Instruções de Atualização](#atualização) antes.

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

Esta página explicará como fazer as Configurações Gerais do Mercado Pago para este módulo. Antes de tudo, certifique-se de que o plugin WooCommerce MercadoPago esteja habilitado, clicando no item *Plugins* na barra lateral do WordPress, conforme mostrado abaixo:

![Plugin Menu](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/plugins_menu.png)

Agora, na barra lateral do WordPress, clique na opção *Configurações > Mercado Pago*. Você deve obter a seguinte página:

![Mercado Pago Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/mercadopago_config.png)

Esta janela mostra as principais configurações do plugin WooCommerce MercadoPago, onde você pode verificar e configurar o seguinte:

### Status do Plugin e Opções de Pagamento
É a parte superior da janela. Mostra os status da plataforma e a consistência do sistema para usar este plugin. Além disso, existem botões que servem como atalhos para os gateways de pagamento que são oferecidos. É uma boa idéia ter todos os campos do status marcados com um ícone verde de checado.

### Checkout Básico & Inscrições
  * Aqui você deve colocar suas chaves *Client Id* e *Client Secret*, que são as credenciais que o identificam de maneira única no Mercado Pago. O *Client Id* e *Client Secret* são usados ​​para os meios de pagamentos Checkout Básico e Assinaturas;
  * Além disso, logo abaixo, você pode ativar o modo de conversão de moeda para as vendas com Checkout Básico e Assinaturas. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WooCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor.

### Checkout Transparente & Boletos
  * Aqui você deve colocar suas chaves *Public Key* e *Access Token*, que são as credenciais que o identificam de maneira única no Mercado Pago. O *Public Key* e *Access Token* são usados ​​para os meios de pagamentos Checkout Transparente e Boletos;
  * Além disso, logo abaixo, você pode ativar o modo de conversão de moeda para as vendas com Checkout Transparente e Boletos. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WooCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor.

### Mapeamento de Estados de Pagamento x Pedido
Aqui você pode mapear cada estado de pagamento para um determinado estado de pedido. Somente faça mudanças aqui se você estiver plenamente consciente do que está fazendo.

### Configurações da Loja
Esses campos são campos gerais da sua loja.
  * *Descritor da Declaração*: A descrição que será mostrada na fatura do seu cliente;
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável

# Checkout Transparente
Esta página explicará como configurar o módulo para aceitar pagamentos com o Cartão de Crédito do Checkout transparente. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Checkout Transparente*. Você deve obter a seguinte página:

![Custom Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_config.png)

Se você configurou adequadamente suas credenciais em [Instruções de Atualização](#Configurações-Gerais-do-Mercado-Pago), então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Cupons*: Permitir cupom de campanhas para descontos
  * *Modo Binário*: Ao cobrar um cartão de crédito, apenas o status [aprovado] ou [rejeitado] será tomado;
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles usem cartões de crédito como método de pagamento.

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