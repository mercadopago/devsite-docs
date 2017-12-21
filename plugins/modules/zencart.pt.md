# ZenCart - Mercado Pago Module (v1.5.x)
---

* [Funcionalidades](#features)
* [Versões disponíveis](#available_versions)
* [Requisitos](#requirements)
* [Instalação](#installation)
* [Configuração](#setup)
* [Suporte](#Support)


<a name="features"></a>
## Funcionalidades: ##

O módulo do Mercado Pago para o ZenCart esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Redirecionado, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * Pagamento com dois cartões


<a name="available_versions"></a>
## Versões disponíveis: ##

Versão do Plugin | Status | Versões compativéis
-------------- | ------ | -------------------
v1.0.1 | Stable (Current version) | ZenCart 1.5.x


<a name="requirements"></a>
## Requisitos: ##

**PHP**

* PHP v5+
* Required extensions: MySQL, cURL

**Database**

* MySQL v5+

<a name="installation"></a>
## Instalação: ##

1. Faça o download do modulo do Mercado Pago.

2. Copie a pasta do modulo na Raiz da sua loja ZenCart.

<a name="setup"></a>
## Configuração: ##

1. Na pagina de administração da sua loja, va até a opção **Modules > Payment**.

2. Em **Payment Modules** selecione **Mercado Pago**.

3. Em **Mercado Pago** clique no botão **Install**.

4. Agora, é muito importante você configurar o seu **CLIENT_ID** e **CLIENT_SECRET**.

  ![Installation Instructions](/images/plugins/modules/zencart/credentials.png) <br />

	Obtenha o seu CLIENT_ID e CLIENT_SECRET de acordo com seu país:
  * Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
  * Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

5. Configure os status para IPN (Instant Payment Notification):

  ![Installation Instructions](/images/plugins/modules/zencart/notification.png) <br />

  * **Choose the default status for a new order**: Define o status do pedido quando o pagamento é aprovado.
  * **Choose the status of approved orders**: Define o status do pedido quando o pagamento é aprovado.
  * **Choose the status when payment is pending**: Define o status do pedido quando o pagamento é pendente.
  * **Choose the status when payment is process**: Define o status do pedido quando o pagamento esta em processamento.
  * **Choose the status when payment was reject**: Define o status do pedido quando o pagamento é rejeitado.
  * **Choose the status of refunded orders**: Define o status do pedido quando o pagamento é devolvido.
  * **Choose the status when client open a mediation**: Define o status do pedido quando o pagamento esta em mediação.
  * **Choose the status when payment was canceled**: Define o status do pedido quando o pagamento é cancelado.

6. Outras configurações: <br/>

![Installation Instructions](/images/plugins/modules/zencart/other_config_1.png) <br />

![Installation Instructions](/images/plugins/modules/zencart/other_config_2.png) <br />

![Installation Instructions](/images/plugins/modules/zencart/other_config_3.png) <br />

  * **Store Category**: Selecione a categoria da Loja;
  * **Redirect URL**: A URL de redirecionamento é gerado automaticamente, se você estiver testando em um localhost não funcionará corretamente. Você pode alterar o endereço para qualquer url da sua escolha, contanto que não seja localhost;
  * **Enable Auto Return?**: Quando essa opção esta ativada, ao finalizar a compra o usuário é redirecionado automaticamente para a sua loja;
  * **Type Checkout**: Selecione o tipo de checkout que será mostrado ao comprador;
  * **Limit installments**: Selecione o numero de parcelas máximas que estará disponível para o comprador;
  * **Exclude Methods**: Selecione os métodos de pagamento que você deseja **não aceitar**;
  * **Live or Sandbox**: Habilite o modo sandbox para realizar pagamentos de test;
  * **Sort order of display**: Ordem de exibição do Mercado Pago;

<a name="Suporte"></a>
## Suporte: ##

Caso tenha alguma dúvida, problema ou erro temos um canal de atendimento. 
Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta Mercado Pago.
* Detalhes sobre a sua duvida, problema ou erro.
* Arquivos que possa ajudar no entendimento (Print-Screen, Video, Arquivos de Log, etc).
* Versão do ZenCart.
* Versão do Modulo, caso esteja utilizando.

Não se preocupe... Iremos ajuda-lo o mais rápido possível.