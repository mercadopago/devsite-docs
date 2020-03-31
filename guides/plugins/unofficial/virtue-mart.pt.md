# VirtueMart - Mercado Pago Module (v3.0.x)

## Requisitos

Basicamente, os requisitos deste plugin são os mesmos que você precisa executar Virtuemart e Joomla. Sua máquina deve ter:

**Plataformas**
* <a href="https://www.joomla.org/download.html"> Joomla </a> 2.5 ou superior;
* <a href="https://virtuemart.net/downloads/"> VirtueMart </a> 3.0.x ou superior;

**Servidor Web Host**

* <a href="http://php.net/"> PHP </a> 5.3 ou superior com suporte CURL;
* <a href="http://www.mysql.com/"> MySQL </a> versão 5.5;
* <a href="https://httpd.apache.org/"> Apache 2.x </a>.

**Certificado SSL**

Se você estiver usando Custom Checkout, é um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS.

Durante os testes em modo sandbox, você pode operar por HTTP, mas para homologação, você precisará adquirir o certificado caso não o tenha.

## Versões disponíveis
<table>
  <thead>
    <tr>
      <th> Versão do Plugin </ th>
      <th> Status </ th>
      <th> VirtueMart Versões compatíveis </ th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td> v2.0.3 </ td>
      <td> Estável (versão atual) </ td>
      <td> VirtueMart v3.0.x </ td>
    </tr>
  </tbody>
</table>

## Funcionalidades

O módulo do Mercado Pago para o VirtueMart esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Redirecionado, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * Pagamento com dois cartões

* Checkout Transparente
    * [Pagamento com Cartão de Crédito](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * [Pagamento com um click (Clientes e Cartões)](https://www.mercadopago.com.br/developers/pt/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pagamento com outros meios (Boleto)](https://www.mercadopago.com.br/developers/pt/solutions/payments/custom-checkout/charge-with-other-methods/)

## Instalação

1. Baixe o módulo zip
2. Vá para **Extensões> Gerenciador de extensão **
3. Em **Carregar arquivo de pacote> Arquivo de pacote** selecione o **cart-virtuemart.zip** e clique em **Carregar e instalar **

<a name="configuration_std"> </a>
## Configuração do checkout básico

1. Vá para **VirtueMart> Métodos de pagamento** e clique em **Novo**

2. Complete os campos:
  - **Nome do pagamento** set **Mercado Pago**
  - **Sef Alias** set **mercadopago**
  - **Método de pagamento** selecione **Mercado Pago**
  - **Published** set to **true**
3. Clique em **Salvar**

4. Vá para **Configuração** guia <br/>
  Em primeiro lugar, você precisa configurar as credenciais do seu cliente. Para fazê-lo, preencha o **Client_id** e **Client_secret** na seção Configuração de Credenciais.

![Setting client id and client secret](/images/virtuemart-credentials.png) <br />

Encontre sua **Client id** e **Client secret** na [seção Credenciais]([FAKER][CREDENTIALS][URL_BASIC]).

5. Configurações do checkout básico. <br />

![Settings checkout](/images/virtuemart-checkout_settings.png) <br />

  **Tipo Checkout**: Como seus clientes irão interagir com o Mercado Pago para pagar suas ordens; <br />
  **Redirecionamento automático**: se configurado, a plataforma retornará à sua loja quando o pagamento for aprovado. <br />
  **Número máximo de parcelas**: as parcelas máximas permitidas para seus clientes; <br/>
  **Excluir métodos de pagamento**: Selecione os métodos de pagamento que você deseja não trabalhar com o Mercado Pago. <br />
  **iFrame Width**: A largura, em pixels, do iFrame (usado apenas com o Método de Integração iFrame); <br />
  **iFrame Height**: A altura, em pixels, do iFrame (usado apenas com iFrame Integration

  6. Confiuraça de notificaço de pagamento - IPN. <br />

![Setting Notification](/images/virtuemart-ipn_settings.png) <br />

  * **Escolha o status para pagamento aprovado**: Define o status do pedido quando o pagamento é aprovado.
  * **Escolha o status para pagamento pendente**: Define o status do pedido quando o pagamento é pendente.
  * **Escolha o status para pagamento em processamento**: Define o status do pedido quando o pagamento esta em processamento.
  * **Escolha o status para pagamento mediação**: Define o status do pedido quando o pagamento esta em mediação.
  * **Escolha o status para pagamento devolvido**: Define o status do pedido quando o pagamento é devolvido.
  * **Escolha o status para pagamento em chargeback**: Define o status do pedido quando o pagamento não reconhecido pelo usuário - chargeback.
  * **Escolha o status para pagamento cancelado**: Define o status do pedido quando o pagamento é cancelado.
  * **Escolha o status para pagamento rejeitado**: Define o status do pedido quando o pagamento é rejeitado.

7. Outras configurações. <br/>

![Store category](/images/virtuemart-other_settings.png) <br />

  **Categoria da loja**: Defina a categoria da loja;<br />
  **Log**: Habilite/Desabilite logs.<br />
  **Logo**: Selecione o logo. Você precisa adicionar na pasta /images/stories/virtuemart/payment <br />

## Configuração do Checkout Transparente - Cartão de crédito

  1. Ir até **VirtueMart > Métodos de pagamento** e clique **Novo**

  2. Complete the fields:
    - **Nome do pagamento** set **Cartão de crédito- Mercado Pago**
    - **Sef Alias** set **mercadopago**
    - **Método de pagamento** select **Mercado Pago**
    - **Publicado** set to **true**

  3. Clique **Salvar**

  4. Clique na tab **Configurações**

  5. Em **Produto Mercado Pago** selecione **Carto de crédito - Checkout Transparente**

  6. Agora configure com as suas credenciais. Para fazer isso, informe seu **Access token** na sessão de credenciais.

  ![Settings credentials - Transparent checkout - Credit card](/images/virtuemart-credentials_custom.png) <br />

Para poder encontrá-las, confira suas [credenciais]([FAKER][CREDENTIALS][URL]).

## Configuração do Checkout Transparente - Boleto

1. Ir em **VirtueMart > Payment Methods** e clique **New**

2. Complete os campos:
  - **Nome o pagamento** informe **Ticket - Mercado Pago**
  - **Sef Alias** set **mercadopago**
  - **Método de pagamento** selecione **Mercado Pago**
  - **Publicado** informe **true**

3. Clique **Salvar**

4. Ir na tab de **Configurações**

5. Em **Mercado Pago Product** selecione **Ticket - Checkout Custom**

6. Agora configure suas credenciais. Para fazer isso, preencha sua **Public key** e **Access token** na sessão de Credenciais.

![Settings credentials - Transparent checkout - Ticket](/images/virtuemart-credentials_custom_ticket.png) <br />

Encontre seu **Access Token** na [seção Credenciais]([FAKER][CREDENTIALS][URL]).

> NOTE
>
> Nota
>
> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

## Suporte

Caso tenha alguma dúvida, problema ou erro temos um canal de atendimento.
Escreva para o nosso [formulário de apoio](/support) com as seguintes informações:

* Email da sua conta Mercado Pago.
* Detalhes sobre a sua duvida, problema ou erro.
* Arquivos que possa ajudar no entendimento (Print-Screen, Video, Arquivos de Log, etc).
* Versão do VirtueMart e do Joomla.
* Versão do Modulo, caso esteja utilizando.
