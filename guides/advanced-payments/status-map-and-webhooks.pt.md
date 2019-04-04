# Mapa de Estados

Um Advanced Payment pode ter diferentes estados.
Um Marketplace pode ser informado sobre as mudanças de status de um advanced payment se você configurar o tópico `Split de Pagamentos` em [Webhooks](https://www.mercadopago.com/mlb/account/webhooks), para pagamentos off de carrinho.

![Status map](/images/advanced-payments/advanced-payments-status-map.png)

#### Definição de estados

Estado              |Descrição                                                              |
--------------------|-----------------------------------------------------------------------|
authorized          |O pagamento está pendente de captura.                                  |
in_process          |O pagamento está em processo de análise.                               |
pending             |O usuário ainda não concluiu o processo de pagamento.                  |
approved            |O pagamento foi aprovado e creditado.                                  |
rejected            |O pagamento foi recusado. O cliente pode fazer uma nova tentativa.     |
cancelled           |O pagamento foi cancelado por uma das partes ou expirou.               |
refunded            |O pagamento foi devolvido ao usuário.                                  |
partially_refunded  |Parte do pagamento foi devolvida ao usuário.                           |
charged_back        |Um estorno foi feito no cartão de crédito do comprador.                |

#### Notificações de Webhooks

Se você tiver as notificações configuradas, receberá uma notificação sempre que o Advanced Payment for modificado.

A estrutura da notificação é a seguinte:

```json
{
  "id": 1111111,
  "user_id": 232323,
  "date_created": "2019-01-23T16:14:51.107-04:00",
  "action": "splitter.update",
  "status": "approved",
  "application_id": 9999999999999,
  "live_mode": "true",
  "version": 2,
  "data": {
    "id": "ext_ref_ibp"
  }
}
```

* `id`: ID do Advanced Payment.
* `user_id`: ID do proprietário do Marketplace.
* `date_created`: Data do evento.
* `action`: Ação que foi feita em relação ao Advanced Payment (pode ser splitter.insert o splitter.update).
* `status`: Estado do Advanced Payment.
* `application_id`: ID da aplicação.
* `live_mode`: Indica se é uma notificação produtiva (true) ou sandbox (false).
* `version`: Versão do Advanced Payment.
* `data.id`: External Reference do pagamento.
