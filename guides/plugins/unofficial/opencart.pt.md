# OpenCart

#### Mercado Pago Module (Opencart v1.4.9, 1.5.x, 2.x - 2.2, 2.3, 3.x)

## Funcionalidades

O módulo do Mercado Pago para Opencart esta integrado com as funcionalidades a seguir:

| Funcionalidade                                            | Checkout Mercado Pago      | API                     |
|---------------------------------------------------------- |-------------------|-------------------------|
| Pagamento com Cartão de Crédito                           | ✔                 | ✔                       |
| Outros Meios de Pagamento, como os Boletos                | ✔                 | ✔                       |
| Interfaces pré-construídas do Mercado Pago                | ✔                 |                         |
| Calculadora de Parcelas                                   | ✔                 | ✔                       |
| Notificação instantânea de pagamentos e webhooks          | ✔                 | ✔                       |
| Descontos por meio de pagamento ou cupom do Mercado Pago  | ✔                 |                         |
| Log e ferramentas de debug                                | ✔                 | ✔                       |
| Conversão de moedas                                       |                   | ✔                       |
| Checagens de credenciais e status de plataforma           | ✔                 | ✔                       |


### Opção de Checkout correta para seu negócio:

Oferecemos dois métodos de checkout que facilitam o recebimento seguro de pagamentos de qualquer pessoa em qualquer lugar.

**Checkout Mercado Pago**

Ótimo para vendedores que querem rapidez e agilidade.

* Fácil integração ao site - não é necessário codificação.
* Controle limitado da experiência de compra - apresenta a janela de checkout como redirecionamento, modal ou iframe.
* Armazene o cartão do comprador para finalizar a compra.
* Aceita boletos, além de cartões.
* Aceite os cupons de desconto do MercadoPago.

*Disponível para Argentina, Brasil, Chile, Colômbia, México, Peru e Uruguai*

**API*

Ofereça um checkout totalmente customizado à sua experiência de marca com nossa API de pagamentos simples de usar.

* Integração perfeita - não é necessário codificação, a menos que você queira.
* Controle total da experiência de compra.
* Armazene o cartão do comprador para finalizar a compra.
* Aceite boletos, além de cartões.
* Melhore a taxa de conversão.

*Disponível para Argentina, Brasil, Colômbia, México e Peru*


## Requisitos

| Requisito                 | Detalhe                                                   |
|---------------------------|-----------------------------------------------------------|
| Sistema Operacional       | Linux x86-64                                              |
| Servidor Web              | Apache 2.x, Nginx 1.7.x                                   |
| Banco de Dados            | MySQL 5.6 (Oracle or Percona)                             |
| PHP                       | PHP 5.4.x / 5.5.x                                         |
| Extenções                 | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl  |
| SSL                       | SSL é necessário para uso de cartão de crédito            |

>É um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS. Durante os testes do modo sandbox você pode operar via HTTP, mas para homologação você precisará adquirir o certificado caso não o tenha.


## Versões

| Plugin Version                                                                          | Status                    | Versões Compatíveis   |
|-----------------------------------------------------------------------------------------|---------------------------|-----------------------|
| [v1.4.9](https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9)               | Deprecated (Old Version)  | OpenCart v1.4.9       |
| [v1.5.x](https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x)               | Deprecated (Old Version)  | OpenCart v1.5.x       |
| [v2.x - v2.2](https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2)  | Deprecated (Old Version)  | OpenCart v2.x - v2.2  |
| [v2.3](https://github.com/mercadopago/cart-opencart/tree/master/v2.3)                   | Stable (Current Version)  | OpenCart v2.3         |
| [v3.x](https://github.com/mercadopago/cart-opencart/tree/master/v3.x)                   | Stable (Current Version)  | OpenCart v3.x         |


## Instalação

1. Baixe do módulo do Mercado Pago

  * [OpenCart 1.4.9](https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9)
  * [OpenCart 1.5.x](https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x)
  * [OpenCart 2.x - 2.2](https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2)
  * [OpenCart 2.3](https://github.com/mercadopago/cart-opencart-2/archive/master.zip)
  * [OpenCart 3.x](https://github.com/mercadopago/cart-opencart-3/archive/master.zip)

2. Copie as pastas **admin**, **catalog** e **image** para a raiz da sua instalação do OpenCart. Se assegure de manter a estrutura de pastas do OpenCart intactas.

> **Importante**: Se você está usando OpenCart 2.0, você encontrará 3 tipos diferentes de checkout dentro da pasta OpenCart 2.x: Standard, Custom e Ticket. Você pode utiliza-las juntas ou individualmente, sem nenhum problema ou dependência entre elas. Cada uma dessas pastas tem suas próprias pastas Admin, Catalog e Image e o processo de instalação é o mesmo descrito acima.

3. No painel administrativo da sua loja, vá para **extensions > payments > MercadoPago** e clique em **Install**.


## Configuração

1. Novamente em **Extensions > Payments > MercadoPago**, clique em **Edit** para configurar sua conta do Mercado Pago:

 ![Open cart configuration page](/images/opencart_mpaccount.png)

2.  Configure seu **CLIENT_ID** e **CLIENT_SECRET**, ou **PUBLIC_KEY** e **ACCESS_TOKEN** (dependendo de qual módulo você está utilizando). [Obtenha suas credenciais]([FAKER][CREDENTIALS][URL]).
 
3. Se você está utilizando **Checkout Transparente** ou **Checkout Básico**, selecione o pais relacionado a sua conta do **MercadoPago**. Se você está utilizando **Ticket Checkout**, não é preciso configurar o país.

4. Outras configurações gerais:

  * **Category of your store**: Configura a categoria da loja.
  * **Choose the status of approved orders**: Define o status do pedido quando os pagamentos são aprovados.
  * **Choose the status of refunded orders**: Define o status do pedido quando os pagamentos são reembolsados.
  * **Choose the status when payment is pending**: Define o status do pedido quando os pagamentos estão pendentes.
  * **Choose the status when client open a mediation**: Define o status do pedido quando o cliente abre uma mediação.
  * **Choose the status when payment was reject**: Define o status do pedido quando os pagamentos são rejeitados.
  * **Choose the status when payment was canceled**: Define o status do pedido quando os pagamentos são cancelados.
  * **Choose the status when payment was chargeback**: Define o status do pedido quando os pagamentos sofrem chargeback.
  * **Logs**: Habilita/desabilita o sistema de logs.
  * **Debug Mode**: Se habilitado, exibe a resposta bruta da API em vez de uma mensagem amigável.
  * **Enabled**: Habilita/desabilita essa solução de pagamento.
  * **Type Checkout (you're using Standard Checkout)**: Define os tipos de checkout, as opções são:
  *  *Iframe*: Abre uma URL OpenCart com a iframe como conteúdo.
  *  *Redirect*: Redireciona a URL do Mercado Pago.
  *  *Lightbox*: Similar a opção de Iframe mas abre uma lightbox em vez de um iframe.


## Notificações

Sua loja irá sincronizar automaticamente com o MercadoPago. A URL de notificação será enviado em cada pagamento.


### Atualização

Siga os mesmos passos que você fez para [instalar](#bookmark_instalação) o módulo.
