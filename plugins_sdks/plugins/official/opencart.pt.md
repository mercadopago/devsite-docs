# OpenCart - Mercado Pago Module (v1.4.9, 1.5.x, 2.x - 2.2, 2.3)

* [Recursos](#features)
* [Versões disponíveis](#versions)
* [Requisitos](#requirements)
* [Instalação](#installation)
* [Configuração](#configuration)
* [Atualização](#upgrade)
* [Feedback](#feedback)

<a name="features"></a>
## Recursos:

Opção de Checkout correta para seu negócio:
Nós oferecemos dois métodos de checkout que facilitam o recebimento seguro de pagamentos de qualquer pessoa em qualquer lugar.

**Checkout Customizável**

Ofereça um checkout totalmente customizado à sua experiência de marca com nossa API de pagamentos simples de usar.

* Integração perfeita - não é necessário codificação, a menos que você queira.
* Controle total da experiência de compra.
* Armazene o cartão do comprador para finalizar a compra.
* Aceite boletos, além de cartões.
* Melhore a taxa de conversão.

*Disponível para Argentina, Brasil, Colômbia, México, Peru e Venezuela*

**Checkout Padrão**

Ótimo para vendedores que querem rapidez e agilidade.

* Fácil integração ao site - não é necessário codificação.
* Controle limitado da experiência de compra - apresenta a janela de Checkout como redirecionamento, modal ou iframe.
* Armazene o cartão do comprador para finalizar a compra.
* Aceita boletos, além de cartões.
* Aceite os cupons de desconto do MercadoPago.

*Disponível para Argentina, Brasil, Chile, Colômbia, México, Peru, Uruguai e Venezuela*

<a name="requirements"></a>
## Requirements:

**Sistema Operacional**

* Linux x86-64

**Servidor Web**

* Apache 2.x
* Nginx 1.7.x

**Banco de Dados**

* MySQL 5.6 (Oracle or Percona)

**PHP**

* PHP 5.4.x / 5.5.x
* Requer extenções: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl

**Certificado SSL**

É um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS.
Durante os testes do modo sandbox você pode operar via HTTP, mas para homologação você precisará adquirir o certificado caso não o tenha.

<a name="versions"></a>
## Versões Disponíveis:
<table>
  <thead>
    <tr>
      <th>Plugin Version</th>
      <th>Status</th>
      <th>Versões Compatíveis</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9">v1.4.9</a></td>
      <td>Deprecated (Old Version)</td>
      <td>OpenCart v1.4.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x">v1.5.x</a></td>
      <td>Deprecated (Old Version)</td>
      <td>OpenCart v1.5.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2">v2.x - v2.2</a></td>
      <td>Stable (Current Version)</td>
      <td>OpenCart v2.x - v2.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.3">v2.3</a></td>
      <td>Stable (Current Version)</td>
      <td>OpenCart v2.3</td>
    </tr>
  </tbody>
</table>

<a name="installation"></a>
## Instalação:

1. Baixe do módulo do Mercado Pago:
    * OpenCart 1.4.9
    * OpenCart 1.5.x
    * OpenCart 2.x - 2.2
    * OpenCart 2.3

2. Copie as pastas **admin**, **catalog** e **image** para a raiz da sua instalação do OpenCart. Se assegure de manter a estrutura de pastas do OpenCart intactas.

**Importante**: Se você está usando OpenCart 2.0, você encontrará 3 tipos diferentes de checkout dentro da pasta OpenCart 2.x: Standard, Custom e Ticket. Você pode utiliza-las juntas ou individualmente, sem nenhum problema ou dependência entre elas. Cada uma dessas pastas tem suas próprias pastas Admin, Catalog e Image e o processo de instalação é o mesmo descrito acima.

<a name="setup"></a>
## Configure MercadoPago

1. No painel administrativo da sua loja, vá para **extensions > payments > MercadoPago** e clique em **Install**.

2. Novamente em **extensions > payments > MercadoPago**, clique em **Edit** para configurar sua conta do Mercado Pago:

	![Mercado Pago Account](https://raw.github.com/mercadopago/cart-opencart/master/README.img/MPAccount.png)

<a name="configuration"></a>
## Configuração

1. Novamente em **Extensions > Payments > MercadoPago**, clique em **Edit** para configurar sua conta do Mercado Pago:

 ![Mercado Pago Account](https://raw.github.com/brunocodeman/cart-opencart/master/README.img/MPAccount.png)

2.  Configure seu **CLIENT_ID** e **CLIENT_SECRET**, ou **PUBLIC_KEY** e **ACCESS_TOKEN** (dependendo de qual módulo você está utilizando).  
  Para obtê-los, verifique os links a seguir de acordo com o país em que você está operando:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
4. Se você está utilizando **Checkout Customizável** ou **Checkout Padrão**, selecione o pais relacionado a sua conta do **MercadoPago**. Se você está utilizando **Ticket Checkout**, não é preciso configurar o país.

5. Outras configurações gerais:

  * **Category of your store**: Configura a categoria da loja.
  * **Choose the status of approved orders**: Define o status do pedido quando os pagamentos são aprovados.
  * **Choose the status of refunded orders**:  Define o status do pedido quando os pagamentos são reembolsados.
  * **Choose the status when payment is pending**: Define o status do pedido quando os pagamentos estão pendentes.
  * **Choose the status when client open a mediation**: Define o status do pedido quando o cliente abre uma mediação.
  * **Choose the status when payment was reject**: Define o status do pedido quando os pagamentos são rejeitados.
  * **Choose the status when payment was canceled**: Define o status do pedido quando os pagamentos são cancelados.
  * **Choose the status when payment was chargeback**: Define o status do pedido quando os pagamentos sofrem chargeback.
  * **Logs**: Habilita/desabilita o sistema de logs.
  * **Debug Mode**: Se habilitado, exibe a resposta bruta da API em vez de uma mensagem amigável.
  *  **Enabled**: Habilita/desabilita essa solução de pagamento.
  * **Type Checkout (you're using Standard Checkout)**: Define os tipos de checkout, as opções são:
    *  *Iframe*: Abre uma URL OpenCart com a iframe como conteúdo.
    *  *Redirect*: Redireciona a URL do Mercado Pago.
    *  *Lightbox*: Similar a opção de Iframe mas abre uma lightbox em vez de um iframe.

<a name="notifications"></a>
## Notificações

Sua loja irá sincronizar automaticamente com o MercadoPago. A URL de notificação será enviado em cada pagamento.

<a name="upgrade"></a>
## Atualizar Plugin Mercado Pago ##

Siga os mesmos passos que você fez para instalar o módulo.
