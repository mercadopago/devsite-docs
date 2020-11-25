---
  indexable: false
---

# Mapa de estados

Um Advanced Payment pode ter diferentes estados.
Um Marketplace pode ser informado sobre as mudanças de status de um advanced payment se você configurar o tópico `Split de Pagamentos` em [Webhooks](https://www.mercadopago.com/mlb/account/webhooks), para pagamentos off de carrinho.

![Status map](/images/advanced-payments/advanced-payments-status-map.png)

> WARNING
>
> Importante
>
> Se ocorrer um erro interno na criação do Advanced Payments, ele permanecerá com o status `vacated`.

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
vacated             |Ocorreu um erro interno.                                               |

# Notificações de Webhooks

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

* `id`: ID da notificação.
* `user_id`: ID do proprietário do Marketplace.
* `date_created`: Data do evento.
* `action`: Ação que foi feita em relação ao Advanced Payment (pode ser splitter.insert o splitter.update).
* `status`: Estado do Advanced Payment.
* `application_id`: ID da aplicação.
* `live_mode`: Indica se é uma notificação produtiva (true) ou sandbox (false).
* `version`: Versão do Advanced Payment.
* `data.id`: ID do Advanced Payment.

# Pagamentos binários

É possível definir o pagamento para que a resposta seja instantânea ou não.

Caso seja instantânea, a resposta do pagamento será `approved` ou `rejected` (sem estados intermediários). Caso contrário, o pagamento poderá ficar em estado pendente esperando, por exemplo, a acreditação do pagamento no caso de Meios off-line ou pagamentos com cartão de crédito de valores elevados onde o Comprador deve entrar em contato com a administradora do cartão para autorizar o pagamento.

É possível manejar essa lógica atribuindo, na raiz do Advanced Payment, o campo `binary_mode` em `true` para que devolva a resposta imediata e `false` para o contrário.

```json
  "binary_mode": true
```
