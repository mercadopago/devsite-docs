# OpenCart - Módulo Mercado Pago (v1.4.9, 1.5.x, 2.x - 2.2, 2.3)

* [Funções](#features)
* [Versões disponiveis](#versions)
* [Instalação](#installation)
* [Configurando Checkout Custom](#configuration_custom)
* [Configurando Standard](#configuration_standard)
* [Configurando Ticket](#configuration_ticket)
* [Feedback](#feedback)

<a name="features"></a>
## Funções:

Opções de pagamento para sua empresa:
Oferecemos dois métodos de pagamento que facilitam a aceitação segura dos pagamentos de qualquer pessoa, em qualquer lugar.

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

<a name="versions"></a>
## Versões disponíveis:
<table>
  <thead>
    <tr>
      <th>Link da versão do plugin/th>
      <th>Status</th>
      <th>Versões compativeis</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9">v1.4.9</a></td>
      <td>Descontinuado (Versão antiga)</td>
      <td>OpenCart v1.4.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x">v1.5.x</a></td>
      <td>Descontinuado (Versão antiga)</td>
      <td>OpenCart v1.5.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2">v2.x - v2.2</a></td>
      <td>Atual (Versão com suporte)</td>
      <td>OpenCart v2.x - v2.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.3">v2.3</a></td>
      <td>SAtual (Versão com suporte)</td>
      <td>OpenCart v2.3</td>
    </tr>
  </tbody>
</table>

## Requisitos:

**Sistema Operacional**

* Linux x86-64

**Servidor Web**

* Apache 2.x
* Nginx 1.7.x

**Database**

* MySQL 5.6 (Oracle or Percona)

**PHP**

* PHP 5.4.x / 5.5.x
* Extensões obrigatórias: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl

**Certificado SSL**

É um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS.
Durante os testes em modo sandbox, você pode operar em HTTP, mas para homologação, você precisará adquirir o certificado caso não o tenha.

<a name="installation"></a>
## Instalação:

1. Download modulo do Mercado Pago:
    * OpenCart 1.4.9
    * OpenCart 1.5.x
    * OpenCart 2.x - 2.2
    * OpenCart 2.3

2. Copie as pastas **admin**, **catalog** e **image** para sua instalação do OpenCart. Certifique-se de manter a estrutura das pastas OpenCart intacta.

**Importante**: Se você estiver usando o OpenCart 2.x, você encontrará 3 tipos diferentes de checkout dentro da pasta OpenCart 2.x: Standard, Custom e Ticket. Você pode usá-los todos juntos ou individualmente, sem problemas ou dependências entre eles. Cada uma dessas pastas tem suas próprias pastas Admin, Catalog e Image e o processo de instalação é o mesmo descrito acima.

<a name="configuration_custom"></a>
## Configuração do Checkout Custom

1. Na tela de administração de sua loja, em **extensions > payments > Mercado Pago Custom** click em **Edit**.

  ![Cuenta de Mercado Pago](/images/plugins/modules/opencart/custom/1.gif)

2. Insira seu **PUBLIC_KEY** e **ACCESS_TOKEN** e faça as outras configurações de acordo com a necessidade de sua loja:

 ![Mercado Pago Account](/images/plugins/modules/opencart/custom/2.gif)

3. Configure as nofiticações de sua loja. E após todas as configurações, click no botão 'Save'. Pronto! A configuração de sua loja está completa.
  
![Mercado Pago Account](/images/plugins/modules/opencart/custom/3.gif)

<a name="configuration_standard"></a>
## Configuração Standard

1. Na tela de administração de sua loja, em **extensions > payments > Mercado Pago Standard** click em **Edit**.

  ![Cuenta de Mercado Pago](/images/plugins/modules/opencart/standard/1.gif)

2. Insira seu **CLIENT_ID** e **SECRET** e faça as outras configurações de acordo com a necessidade de sua loja:

 ![Mercado Pago Account](/images/plugins/modules/opencart/standard/2.gif)

3. Configure as nofiticações de sua loja. E após todas as configurações, click no botão 'Save'. Pronto! A configuração de sua loja está completa.
  
![Mercado Pago Account](/images/plugins/modules/opencart/standard/3.gif)

<a name="configuration_ticket"></a>
## Configuração Ticket

1. Na tela de administração de sua loja, em **extensions > payments > Mercado Pago Ticket** click em **Edit**.

  ![Cuenta de Mercado Pago](/images/plugins/modules/opencart/ticket/1.gif)

2. Insira seu **ACCESS_TOKEN** e faça as outras configurações de acordo com a necessidade de sua loja:

 ![Mercado Pago Account](/images/plugins/modules/opencart/ticket/2.gif)

3. Configure as nofiticações de sua loja. E após todas as configurações, click no botão 'Save'. Pronto! A configuração de sua loja está completa.

![Mercado Pago Account](/images/plugins/modules/opencart/ticket/3.gif)

<a name="Feedback"></a>
## Feedback ##

Se você tem dúvidas, problemas ou erros, temos um canal de atenção. Envie um email para modulos@mercadopago.com com as seguintes informações:

  * Email da sua conta Mercado Pago.
  * Detalhes sobre sua dúvida, problema ou erro.
  * Arquivos que podem ajudar na compreensão (tela de impressão, vídeo, arquivos de log, etc.).
  * Versão Opencart.
  * Versão do módulo, se usado.