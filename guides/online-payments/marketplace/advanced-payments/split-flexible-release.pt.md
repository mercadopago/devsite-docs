---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Liberação flexível

No momento da integração deve-se configurar um intervalo de dias no qual o dinheiro dos Vendedores poderá ser liberado.

Essa liberação deve ser definida em cada pagamento com o campo `money_release_days` e pode ser modificada posteriormente.

> NOTE
>
> Nota
>
> Se esse campo não é enviado, se define por padrão o número máximo de dias do intervalo de liberação configurado no Marketplace.

```json
{
  ...
  "disbursements": [
    {
      ...
      "money_release_days": 15
    },
    {
      ...
      "money_release_days": 30
    }
  ],
  ...
}
```

Uma vez criado, pode-se alterar a data de liberação tanto do Advanced Payment completo ou de um `disbursement` individual.

> NOTE
>
> Nota
>
> Esta data deve estar dentro do intervalo de liberação definido acima.

#### Request: Alteração de data para um Advanced Payment completo

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disburses' \
    -d '{...}'
```

#### Request: Alteração de data para um Disbursement individual

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/disburses' \
    -d '{...}'
```

No `body` devemos definir a nova data de liberação.

```json
{
  "money_release_date": "2018-07-10T10:23:18.000-04:00"
}
```

Depois que a alteração for solicitada, ela será processada de forma assíncrona e o resultado será notificado via Webhook.

> NOTE
>
> Nota
>
> Para receber notificações deste evento, você deve primeiro [configurar o URL ao qual o Mercado Pago tem acesso](https://www.mercadopago.com/mla/account/webhooks).