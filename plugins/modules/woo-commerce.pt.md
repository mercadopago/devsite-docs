![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-woocommerce/master/assets/images/mplogo.png)

# Módulo de integração do Mercado Pago para WooCommerce
* [Requisitos de Sistema](#requisitos-de-sistema)
* [Funcionalidades](#funcionalidades)
* [Instalação](#instala%C3%A7%C3%A3o)
* [Configurações Gerais do Mercado Pago](#configurações-gerais-do-mercado-pago)
* Checkout Transparente
  * [Configurando o Cartão de Crédito](#configurando-o-cartão-de-crédito)
  * [Configurando os Boletos](#configurando-os-boletos)
* Checkout Básico
  * [Configurando o Checkout por Redirect, Iframe, ou LightBox](#configurando-o-checkout-por-redirect-iframe-ou-lightbox)
  * [Configurando o Mercado Envios](#configurando-o-mercado-envios)
  * [Configurando as Assinaturas](#configurando-as-assinaturas)
* [Configurações das Notificações Instantâneas de Pagamento](#configurações-das-notificações-instantâneas-de-pagamento)
* [Atualização](#atualização)
* [FAQ](#faq)
* [Suporte Técnico](#suporte-técnico)
* [Como Contribuir](#como-contribuir)

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
* [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>![Custom Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_form.png)
* [Pagamento com 1 Click (Cartões de Clientes)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>![One Click Payment](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/oneclick_form.png)
* [Devolução/Cancelamento de Pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)
* [Outros Meios de Pagamento, como os Boletos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>![Tickets](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket.png)

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

# Configurando o Cartão de Crédito
Esta página explicará como configurar o módulo para aceitar pagamentos com o Cartão de Crédito do Checkout transparente. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Checkout Transparente*. Você deve obter a seguinte página:

![Custom Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_config.png)

Se você configurou adequadamente suas credenciais em [Configurações Gerais do Mercado Pago](#configurações-gerais-do-mercado-pago), então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Cupons*: Permitir cupom de campanhas para descontos
  * *Modo Binário*: Ao cobrar um cartão de crédito, apenas o status [aprovado] ou [rejeitado] será tomado;
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles usem cartões de crédito como método de pagamento.

# Configurando os Boletos
Esta página explicará como configurar o módulo para aceitar pagamentos com o Boleto do Checkout transparente. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Boleto*. Você deve obter a seguinte página:

![Ticket Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket_checkout_config.png)

Se você configurou adequadamente suas credenciais em [Configurações Gerais do Mercado Pago](#configurações-gerais-do-mercado-pago), então você pode agora customizar seu checkout por boleto:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Cupons*: Permitir cupom de campanhas para descontos
  * *Redução de Estoque*: Reduza o estoque quando o pedido é criado em vez de quando o pagamento é feito;
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles usem boletos como método de pagamento.

# Configurando o Checkout por Redirect, Iframe, ou LightBox
Esta página explicará como configurar o módulo para aceitar os pagamentos com o Checkout Básico em Redirecionamento, Iframe ou Lightbox. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Checkout Básico*. Você deve obter a seguinte página:

![Installation Instructions](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_config.png)

Se você configurou adequadamente suas credenciais em [Configurações Gerais do Mercado Pago](#configurações-gerais-do-mercado-pago), então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes;
  * *Método de Integração*: Como seus clientes irão interagir com o Mercado Pago para pagar os pedidos;
  * *Largura do iFrame*: A largura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Altura do iFrame*: A altura, em pixels, do iFrame (usado apenas com o método de integração por iFrame).

### Navegação do Checkout
Como a navegação do checkout irá se comportar.
  * *Auto Retorno*: If set, the platform will return to your store when the payment is approved;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Falha*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for recusado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja;

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Parcelamento Máximo*: O número máximo de parcelas permitidas para seus clientes;
  * *Excluir Meios de Pagamento*: Selecione os métodos de pagamento que você não deseja oferecer com Mercado Pago;
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles usem boletos como método de pagamento;
  * *Modo Dois Cartões*: Habilite para permitir que seus clientes paguem com dois cartões diferentes.

# Configurando o Mercado Envios
Esta página irá explicar como configurar o módulo para aceitar o Mercado Envios.

### Habilite Seu Mercado Envios
Para usar o Mercado Envios, você precisa habilitá-lo em sua conta do Mercado Pago. Você pode fazê-lo, de acordo com seu país, nos seguintes links:
  * *Argentina*: http://shipping.mercadopago.com.ar/optin/doOptin
  * *Brazil*: http://shipping.mercadopago.com.br/optin/doOptin
  * *Mexico*: http://shipping.mercadopago.com.mx/optin/doOptin

### Crie a Zona de Envio e os Métodos de Envío
Para usar o Mercado Envios, você precisa que ele seja configurado como método de envio do WooCommerce. Basta seguir as seguintes etapas:

1. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Entrega*. Em *Zona de Envio*, clique em *Adicionar zona de envio*. Digite o nome da zona, selecione as regiões dentro desta zona e clique em *Salvar Alterações*.<br>![Mercado Envios 0](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_0.png)
2. Clique em *ver* da zona criada.<br>![Mercado Envios 1](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_1.png)
3. Clique em *Adicionar método de envio* e selecione *Mercado Envios - Normal* ou *Mercado Envios - Express*. Este processo deve ser repetido duas vezes, até que as opções "normal" e "express" estejam selecionadas.<br>![Mercado Envios 2](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_2.png)
4. Você pode configurar também as opções *Envio Gratuito* e/ou mostrar o *Tempo de Entrega* estimado no cálculo de envio.<br>![Mercado Envios 3](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_3.png)
5. O Mercado Envios está pronto para uso, mas não se esqueça de habilitar o *Checkout Básico* para a correta operação do *Mercado Envios* e de informar as medidas do seu produto.<br>![Mercado Envios 4](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_4.png)

> IMPORTANTE 1: Sua conta do Mercado Pago precisa ser uma *Seller Account*;

> IMPORTANTE 2: No momento, o Mercado Envios está disponível apenas para Argentina, Brasil, e México, e pode ser utilizado apenas com o Checkout Básico;

> IMPORTANTE 3: O produto enviado deve ter suas dimensões (largura, altura, comprimento e peso) adequadamente configurados e dentro das [regras e limites suportados](https://www.correios.com.br/para-voce/precisa-de-ajuda/limites-de-dimensoes-e-de-peso) pelo país especificado.

# Configurando as Assinaturas
Esta página explicará como configurar o módulo para aceitar pagamentos recorrentes de assinaturas. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Assinaturas*. Você deve obter a seguinte página:

![Subscription Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/subscription_checkout_config.png)

Se você configurou adequadamente suas credenciais em [Configurações Gerais do Mercado Pago](#configurações-gerais-do-mercado-pago), então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes;
  * *Método de Integração*: Como seus clientes irão interagir com o Mercado Pago para pagar os pedidos;
  * *Largura do iFrame*: A largura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Altura do iFrame*: A altura, em pixels, do iFrame (usado apenas com o método de integração por iFrame).

### Navegação do Checkout
Como a navegação do checkout irá se comportar.
  * *URL de Notificação Instantânea de Pagamento (IPN)*: Nesta parte, você pode verificar sua URL de IPN, onde você receberá as notificações das atualizações de pagamento. Para esta solução, você precisa configurar uma URL de IPN em sua conta do Mercado Pago. Anote sua URL, clique no link do seu país e coloque o URL no campo solicitado. Então salve-o;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Falha*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for recusado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles façam uma assinatura;

### Criando um Produto Assinável
Uma assinatura precisa de um tipo especial de produto, que deve ser vendido periodicamente. Você pode configurar um produto para ser assinável seguindo as seguintes etapas:
1. Vá para *Produtos* no menu lateral e clique no botão *Adicionar Produto*. A página aberta deve conter os detalhes e os campos do produto na janela *Dados do Produto*;<br>![Subscription Checkout Product](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/subscription_checkout_product.png)
2. Complete as informações do seu produto (nome, preço, imagens, etc.) e, em seguida, marque a caixa *Produto Recorrente*;
3. Preencha os campos de informação para a assinatura: *Frequência* (frequência com que as cobranças serão feitas ao seu cliente), *Tipo de Frequência* (o tipo da frequência pode estar em [Dias] ou [Meses]) e *Data Final* (data em que a assinatura deve terminar).

> IMPORTANTE: Uma assinatura deve ser exclusiva no carrinho do cliente. Os clientes só podem assinar um produto de cada vez e este não pode ser misturado com outros produtos não assináveis.

# Configurações das Notificações Instantâneas de Pagamento
Notificação Instantânea de Pagamento (IPN) é um mecanismo que permite que sua loja receba mensagens do servidor do Mercado Pago informando o estado de um determinado pagamento. Neste plugin, você não precisa se preocupar com a configuração da IPN pois ela já está implementada e configurada.

### Configurando a IPN para Assinaturas
Assinaturas é o único gateway que você deve configurar a IPN para receber corretamente as notificações em seu servidor. Para configurá-lo, faça o seguinte:

1. Na administração da sua loja, acesse *WooCommerce > Configurações > Checkout* e depois, nas opções de gateway listadas, selecione *Mercado Pago - Assinaturas*;

2. Anote a URL informada no campo *URL de Notificação Instantânea de Pagamento (IPN)* e acesse o ambiente da IPN/Webhook para seu país: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brasil](https://www.mercadopago.com.br/ipn-notifications), ou [México](https://www.mercadopago.com.mx/ipn-notifications);

3. Insira a URL no campo e clique no botão *salvar*. Você receberá uma mensagem informando se o Mercado Pago acessou seu servidor corretamente e recebeu uma resposta válida. Se tudo estiver OK, você deve receber uma mensagem de confirmação.

> DICA 1: Ao configurar ou testar sua IPN/Webhooks e comunicações de servidor, certifique-se de que seu servidor possa acessar o servidor Mercado Pago.

> DICA 2: Tenha certeza de que seu firewall tenha o conjunto dos [IPs do Mercado Pago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro de sua white-list.

> DICA 3: Observe que o Mercado Pago usa o protocolo TSL versão 1.0, logo seu servidor precisa suportar/aceitar conexões com esta versão do protocolo.

> DICA 4: Tenha certeza de que nenhum outro plugin do WordPress esteja bloqueando o Mercado Pago.

# Atualização
Se você já instalou uma versão anterior do WooCommerce MercadoPago, siga as instruções. Da mesma forma como foi a instalação, novamente você tem duas opções: da sua loja do WordPress ou baixando e copiando manualmente o diretório do módulo.

### Upgrade a partir do WordPress
1. Na administração da sua loja, vá para a opção *Plugins* na barra lateral;
2. Clique no botão *atualizar agora* na janela do painel do plugin;
3. Em alguns segundos, deverá ser mostrado a mensagem *Atualizado!*.

### Atualizar com Download Manual
1. Obtenha o código fonte do módulo de um repositório (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> ou <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);
2. Descompacte a pasta e renomeie-a para "woocommerce-mercadopago;
3. Vá para o diretório *[WordPressRootDirectory]/wp-content/plugins/* e exclua o diretório existente "woocommerce-mercadopago";
4. Copie o diretório "woocommerce-mercadopago" para *[WordPressRootDirectory]/wp-content/plugins/* directory.

### Atualização de 2.x para 3.x
Antes de atualizar, por favor, considere o seguinte:
* Esta é uma atualização grande (2.x para 3.x) e além disso estamos migrando o slugname do projeto na WordPress Plugin Directory, então criar um backup do seu site e dos seus dados pode ser uma boa ideia;
* No momento, a atualização consiste nos seguintes passos:
   1. Desativar o plugin Woo Mercado Pago Module;
   2. Desinstalar o plugin Woo Mercado Pago Module;
   3. Instalar o plugin WooCommerce MercadoPago;
   4. Ativar o plugin WooCommerce MercadoPago;
   5. Configurar o plugin WooCommerce MercadoPago.
* Você pode obter a versão 3.x no link: https://wordpress.org/plugins/woocommerce-mercadopago/;
* O quanto antes estaremos disponibilizando uma migração nativa como uma funcionalidade para a versão 2.x.

Para confirmar que seu módulo está realmente atualizado, você pode ver no item *Plugins* no menu de administração da loja e verificar a atualização do seu módulo. A versão deve corresponder ao plugin atualizado recentemente.

> DICA: Lembre-se sempre de fazer um backup dos seus dados e de seu sistema antes de fazer qualquer alteração.

# FAQ
Em construção...

# Suporte Técnico
Se você tiver dúvidas, problemas ou erros, temos um canal de suporte. Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta Mercado Pago;
* Detalhes sobre sua pergunta, problema ou erro;
* Arquivos que podem ajudar na compreensão (Print-Screen, Video, Arquivos de Log, etc.);
* Versão do WooCommerce;
* Versão do módulo, se você estiver usando.

> DICA: Você pode obter a versão do módulo na lista de plugins da sua página de administração do WordPress:
>
> ![Developer](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/plugins_menu.png)

Não se preocupe ... Nós o ajudaremos o mais rápido possível.

# Como Contribuir
Aqui estão algumas dicas para ajudar no desenvolvimento e manutenção desse projeto.

## Clonando para desenvolvimento:

Vá para `wp-content/plugins` na sua instalação de desenvolvimento do WordPress e clone este repositório usando o seguinte comando:

```bash
git clone git@github.com:mercadopago/cart-woocommerce.git woocommerce-mercadopago
```

## Atualizando a Wiki

### Clonando

```bash
git clone git@github.com:mercadopago/cart-woocommerce.wiki.git
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