# Notificações

As notificações são mensagens enviadas pelo servidor do Mercado Pago a partir de eventos realizados em sua aplicação. Para que essas notificações sejam enviadas, é necessário ativar diferentes tópicos de notificação, seja em [Suas integrações](/developers/panel/app) ou ao criar um pagamento. Isso permitirá que você obtenha informações sobre os diferentes eventos ocorridos.

A ativação desses tópicos dependerá da solução do Mercado Pago que foi integrada e das necessidades de negócio, conforme mostrado na tabela a seguir:

| Eventos | Nome em Suas integrações | Tópico | Produtos associados |
|---|---|---|---|
| Criação e atualização de pagamentos | Pagamentos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Assinaturas<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Wallet Connect |
| Pagamento recorrente de uma assinatura (criação - atualização) | Planos e assinaturas | `subscription_authorized_payment` | Assinaturas |
| Vinculação de uma assinatura (criação - atualização) | Planos e assinaturas | `subscription_preapproval` | Assinaturas |
| Vinculação de um plano de assinatura (criação - atualização) | Planos e assinaturas | `subscription_preapproval_plan` | Assinaturas |
| Vinculação e desvinculação de contas que se conectaram através de OAuth | Vinculação de aplicações | `mp-connect` | Todos os produtos que tenham OAuth implementado |
----[mla, mlm, mlb]----| Finalização, cancelamento ou erros ao processar intenções de pagamento de dispositivos Mercado Pago Point. | Integrações Point | `point_integration_wh` / `point_integration_ipn` | Mercado Pago Point |------------
| Transações com Wallet Connect | Wallet Connect | `wallet_connect` | Wallet Connect |
| Alertas de fraude após o processamento de um pedido | Alertas de fraude | `stop_delivery_op_wh` / `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro |
| Criação de estornos e reclamações | Reclamações | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Assinaturas<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Código QR<br>Wallet Connect |
| Recuperação e atualização de informações de cartões no Mercado Pago | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Criação, fechamento ou expiração de ordens comerciais. | Ordens comerciais | `topic_merchant_order_wh` / `merchant_order` | Checkout Pro<br>Código QR  |
| Abertura de _chargebacks_, mudanças de status e modificações referentes às liberações de dinheiro | Chargebacks | `topic_chargebacks_wh` / `chargebacks` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
----[mla]----| Criação, atualização ou cancelamento de pedidos. | Delivery (proximity marketplace) | `delivery` | MP Delivery |------------

Após configuradas, as notificações permitem programar o backend da sua loja para diversas ações, como: atualizar o status de pedidos quando um pagamento é criado, enviar um e-mail de confirmação quando um pedido é atualizado no Mercado Pago, atualizar o cadastro de um cliente quando um plano de assinatura é vinculado, entre outras ações conforme os eventos detalhados na tabela acima.

Existem dois tipos de notificações disponíveis para configuração, como detalhado na tabela abaixo.

| Tipo | Descrição |
| --- | --- |
| **Webhooks** | **Recomendadas**. Utiliza HTTP REST para notificar instantaneamente as atualizações e oferece maior segurança na integração por meio de uma assinatura secreta. Este método de validação garante que as notificações recebidas são enviadas pelo Mercado Pago.<br> Para saber como configurar e simular o envio dessas notificações, leia a [documentação de Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks). |
| **IPN** | Permite que sua aplicação receba notificações do Mercado Pago sobre o status de um pagamento, _chargeback_ ou *merchant order*, por meio de uma chamada HTTP POST. Tenha em mente que a notificação pode demorar alguns instantes para ser enviada e não permite realizar a validação mediante o *header* `x-Signature`.<br> **Importante:** As notificações IPN serão descontinuadas em breve. Por isso, recomendamos a utilização das [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks). |