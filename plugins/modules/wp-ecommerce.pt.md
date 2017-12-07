![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-wp-commerce/master/assets/images/mplogo.png)

# Módulo de integração do Mercado Pago para WP-eCommerce
* [Requisitos de Sistema](#requisitos-de-sistema)
* [Funcionalidades](#funcionalidades)
* [Instalação](#instalação)
* Checkout Transparente
  * [Configurando o Cartão de Crédito](#configurando-o-cartão-de-crédito)
  * [Configurando os Boletos](#configurando-os-boletos)
* Checkout Básico
  * [Configurando o Checkout por Redirect, Iframe, ou LightBox](#configurando-o-checkout-por-redirect-iframe-ou-lightbox)
* [Configurações das Notificações Instantâneas de Pagamento](#configurações-das-notificações-instantâneas-de-pagamento)
* [Atualização](#atualização)
* [FAQ](#faq)
* [Suporte Técnico](#suporte-técnico)
* [Como Contribuir](#como-contribuir)

# Requisitos de Sistema
### Versões de Plataforma
* <a href="https://wordpress.org/download/">WordPress</a> 3.1.x - 4.7.x
* <a href="https://wordpress.org/plugins/wp-e-commerce/">WP eCommerce</a> 2.6.x - 3.1.x

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
* WP eCommerce

### Configurações Adicionais
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

### SSL
* Certificação SSL é um pré-requisito para cartões de crédito e boletos (Checkout Transparente).

# Funcionalidades
O módulo do Mercado Pago para WP eCommerce é integrado com as seguintes funcionalidades e soluções de pagamento:

### [Checkout Básico (Redirecionamento, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Interfaces pré-construídas do Mercado Pago<br>![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_payment.png)

### Checkout Transparente
* [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>![Custom Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/order_custom.png)
* [Pagamento com 1 Click (Cartões de Clientes)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>![One Click Payment](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/order_cust_card.png)
* [Outros Meios de Pagamento, como os Boletos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>![Tickets](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/order_ticket.png)

### Outras Funcionalidades
* Checagens de credenciais e status de plataforma
* Página de sucesso customizável
* Calculadora de parcelas
* Conversão de moedas
* Notificação instantânea de pagamentos e webhooks
* Log e ferramentas de debug

# Instalação
Se você já tiver este módulo instalado, por favor, siga as [Instruções de Atualização](#atualização) antes.

Você tem duas opções para instalar este módulo: da sua loja WordPress, ou fazendo o download manual e copiando o diretório do módulo.

### Instalar a Partir do WordPress

1. Na administração da sua loja, vá para a opção *Plugins* na barra lateral;

2. Clique no botão *Adicionar Novo* e digite "WP-eCommerce MercadoPago" no campo de texto *Procurar Plugins*. Pressione Enter;

3. Você deverá encontrar o módulo pronto para ser instalado. Clique em "instalar". Está feito!

### Download Manual

1. Obtenha o código fonte do módulo de um repositório (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> ou <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">WordPress Plugin Directory</a>);

2. Descompacte a pasta e renomeie-a para "wpecomm-mercado-pago-module";

3. Copie o diretório "wpecomm-mercado-pago-module" para dentro do diretório *[WordPressRootDirectory]/wp-content/plugins/*. Está feito!

> DICA: Para confirmar que seu módulo está realmente instalado, você pode clicar no item *Plugins* no menu lateral da página administrativa da sua loja, e checar seu módulo recém-instalado. Apenas clique em *ativar* para ativá-lo e você deverá receber a mensagem "Plugin ativado." como uma notificação em seu WordPress.

# Configurando o Cartão de Crédito
Esta página explicará como configurar o módulo para aceitar pagamentos com o Cartão de Crédito do Checkout transparente. Na administração da sua loja, vá para a guia *Settings > Store > Payments*. Clique em *Mercado Pago - Checkout Transparente*. Você deve obter a seguinte página:

![Custom Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_config_screenshot.png)

### Credenciais do Mercado Pago
  * Aqui você deve colocar suas chaves *Public Key* e *Access Token*, que são as credenciais que o identificam de maneira única no Mercado Pago.

### Opções de Checkout
Como o checkout é mostrado.
  * *Descritor da Declaração*: A descrição que será mostrada na fatura do seu cliente;
  * *Modo Binário*: Ao cobrar um cartão de crédito, apenas o status [aprovado] ou [rejeitado] será tomado;
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Conversão de moeda*: Habilita o modo de conversão de moeda para as vendas com Checkout Básico. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WP eCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável.
  * *Habilitar Sandbox*: Habilita o modo de testes em sandbox;
  * *Modo debug*: Habilita log de mensagens no console do browser.

# Configurando os Boletos
Esta página explicará como configurar o módulo para aceitar pagamentos com o Boleto do Checkout transparente. Na administração da sua loja, vá para a guia *Settings > Store > Payments*. Clique em *Mercado Pago - Boleto*. Você deve obter a seguinte página:

![Ticket Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket_config_screenshot.png)

### Credenciais do Mercado Pago
  * Aqui você deve colocar sua chave *Access Token*, a credencial que o identifica de maneira única no Mercado Pago.

### Opções de Checkout
Como o checkout é mostrado.
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Conversão de moeda*: Habilita o modo de conversão de moeda para as vendas com Checkout Básico. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WP eCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável.
  * *Modo debug*: Habilita log de mensagens no console do browser.

# Configurando o Checkout por Redirect, Iframe, ou LightBox
Esta página explicará como configurar o módulo para aceitar os pagamentos com o Checkout Básico em Redirecionamento, Iframe ou Lightbox. Na administração da sua loja, vá para a guia *Settings > Store > Payments*. Clique em *Mercado Pago - Checkout Básico*. Você deve obter a seguinte página:

![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_config_screenshot.png)

### Credenciais do Mercado Pago
  * Aqui você deve colocar suas chaves *Client Id* e *Client Secret*, que são as credenciais que o identificam de maneira única no Mercado Pago.

### Opções de Checkout
Como o checkout é mostrado.
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes;
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago;
  * *Método de Integração*: Como seus clientes irão interagir com o Mercado Pago para pagar os pedidos;
  * *Largura do iFrame*: A largura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Altura do iFrame*: A altura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Auto Retorno*: If set, the platform will return to your store when the payment is approved;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Parcelamento Máximo*: O número máximo de parcelas permitidas para seus clientes;
  * *Conversão de moeda*: Habilita o modo de conversão de moeda para as vendas com Checkout Básico. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WP eCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor;
  * *Excluir Meios de Pagamento*: Selecione os métodos de pagamento que você não deseja oferecer com Mercado Pago.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável.
  * *Habilitar Sandbox*: Habilita o modo de testes em sandbox;
  * *Modo debug*: Habilita log de mensagens no console do browser.

# Configurações das Notificações Instantâneas de Pagamento
Notificação Instantânea de Pagamento (IPN) é um mecanismo que permite que sua loja receba mensagens do servidor do Mercado Pago informando o estado de um determinado pagamento. Neste plugin, você não precisa se preocupar com a configuração da IPN pois ela já está implementada e configurada.

> DICA 1: Ao configurar ou testar sua IPN/Webhooks e comunicações de servidor, certifique-se de que seu servidor possa acessar o servidor Mercado Pago.

> DICA 2: Tenha certeza de que seu firewall tenha o conjunto dos [IPs do Mercado Pago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro de sua white-list.

> DICA 3: Observe que o Mercado Pago usa o protocolo TSL versão 1.0, logo seu servidor precisa suportar/aceitar conexões com esta versão do protocolo.

> DICA 4: Tenha certeza de que nenhum outro plugin do WordPress esteja bloqueando o Mercado Pago.

# Atualização
Se você já instalou uma versão anterior do WP-eCommerce MercadoPago, siga as instruções. Da mesma forma como foi a instalação, novamente você tem duas opções: da sua loja do WordPress ou baixando e copiando manualmente o diretório do módulo.

### Upgrade a partir do WordPress
1. Na administração da sua loja, vá para a opção *Plugins* na barra lateral;
2. Clique no botão *atualizar agora* na janela do painel do plugin;
3. Em alguns segundos, deverá ser mostrado a mensagem *Atualizado!*.

### Atualizar com Download Manual
1. Obtenha o código fonte do módulo de um repositório (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> ou <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">WordPress Plugin Directory</a>);
2. Descompacte a pasta e renomeie-a para "wpecomm-mercado-pago-module;
3. Vá para o diretório *[WordPressRootDirectory]/wp-content/plugins/* e exclua o diretório existente "wpecomm-mercado-pago-module";
4. Copie o diretório "wpecomm-mercado-pago-module" para *[WordPressRootDirectory]/wp-content/plugins/* directory.

Para confirmar que seu módulo está realmente atualizado, você pode ver no item *Plugins* no menu de administração da loja e verificar a atualização do seu módulo. A versão deve corresponder ao plugin atualizado recentemente.

> DICA: Lembre-se sempre de fazer um backup dos seus dados e de seu sistema antes de fazer qualquer alteração.

# FAQ
Em construção...

# Suporte Técnico
Se você tiver dúvidas, problemas ou erros, temos um canal de suporte. Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta Mercado Pago;
* Detalhes sobre sua pergunta, problema ou erro;
* Arquivos que podem ajudar na compreensão (Print-Screen, Video, Arquivos de Log, etc.);
* Versão do WP eCommerce;
* Versão do módulo, se você estiver usando.

> DICA: Você pode obter a versão do módulo na lista de plugins da sua página de administração do WordPress:
>
> ![Developer](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/plugin_adm.png)

Não se preocupe ... Nós o ajudaremos o mais rápido possível.

# Como Contribuir
Aqui estão algumas dicas para ajudar no desenvolvimento e manutenção desse projeto.

## Clonando para desenvolvimento:

Vá para `wp-content/plugins` na sua instalação de desenvolvimento do WordPress e clone este repositório usando o seguinte comando:

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.git wpecomm-mercado-pago-module
```

## Atualizando a Wiki

### Clonando

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.wiki.git
```

### Árvore de diretórios e arquivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Os diretórios `English`, `Portugues`, e `Espanol` contém documentações específicas para cada linguagem.

É possível gerar novos arquivos em cada diretório da seguinte maneira:

```
touch Portugues/Nova-Pagina-Wiki.md
```

Isto irá criar uma nova página wiki com o nome `Nova Pagina Wiki`.

Para as imagens, devemos usar o diretório `images` e usar a seguinte sintaxe para ligar cada imagem ao conteúdo:

```
[[/images/image-name.png|Alt text]]
```