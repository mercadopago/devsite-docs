# Notificações

As notificações são mensagens enviadas pelo servidor do Mercado Pago a partir de eventos realizados em sua aplicação. Você pode configurar sua integração para enviar notificações quando os seguintes eventos acontecerem:

* Criação e atualização de pagamentos;
* Criação e atualização de pedidos;
* Vinculação de um plano de assinatura;
* Vinculação de assinatura;
* Vinculação e desvinculação de contas mp-connect;
* Vinculação de invoice (Nota Fiscal);
* Criação de estornos;
* Finalização e cancelamento da tentativa de pagamento;
* Erro ao processar tentativa de pagamento.
* [Alertas de fraude](/developers/pt/docs/additional-content/chargebacks/how-to-prevent#bookmark_alerta_de_fraudes)

Existe **dois tipos** de notificações disponíveis para configuração, que uma vez configurados, te permitem programar o backend da sua loja para, por exemplo atualizar o status de pedidos quando um pagamento for criado, enviar um email de confirmação de pedido realizado da loja quando um pedido for atualizado no Mercado Pago, atualizar o cadastro de um cliente quando um plano de assinatura for vinculado ou quaisquer outras ações decorrentes dos eventos listados acima. 

| Tipo | Descrição |
| --- | --- |
| **Webhooks** | Utiliza HTTP REST, notifica instantaneamente as atualizações e traz mais segurança em sua integração por meio da **assinatura secreta**, um método de validação para garantir que notificações recebidas foram enviadas pelo Mercado Pago. </br> [Clique aqui](/developers/pt/guides/additional-content/your-integrations/webhooks) para saber como configurar e simular o envio de notificações Webhooks. |
| **IPN** | A notificação pode demorar alguns instantes para ser enviada. Para saber como configurar notificações IPN [clique aqui](/developers/pt/guides/additional-content/your-integrations/ipn). |