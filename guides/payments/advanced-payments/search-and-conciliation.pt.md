# Busca e Conciliação

Uma parte importante da geração de pagamentos é a conciliação. A API permite realizar buscas de seus `advanced payments` para poder conciliar todas as operações feitas através do seu Marketplace.

É possível procurar por meio da API de Advanced Payments.

#### Request
```curl
curl -X GET \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/search?access_token=MKT_ACCESS_TOKEN&offset=0&limit=10'
```

#### Response
O qual retorna os resultados numa estrutura que mostra, também, a quantidade de resultados e informação para a paginação dos mesmos.
```json
{
  "paging": {
    "total": 3,
    "limit": 10,
    "offset": 0
  },
  "results": [
    {
      "id": 11111111,
      "status": "approved",
      ...
    },
    {
      "id": 22222222,
      "status": "rejected",
      ...
    },
    {
      "id": 33333333,
      "status": "pending",
      ...
    }
  ]
}
```

#### Filtros de busca

Estado                      |Descrição                                                          |
----------------------------|-------------------------------------------------------------------|
status                      |Estado do Advanced Payment.                                        |
payments.id                 |ID do pagamento do comprador.                                      |
payments.payment_method_id  |Método do pagamento.                                               |
payments.payment_type_id    |Tipo de meio de pagamento                                          |     
payer.id                    |ID do comprador.                                                   |
payer.email                 |Email do comprador.                                                |
disbursement.collector_id   |ID do vendedor.                                                    |
external_reference          |ID gerado pelo marketplace que identifica ao Advanced Payment.     |

#### Filtros de busca por intervalo de datas

Também é possível realizar a busca por datas específicas:

* `range`: O atributo de busca, pode ser `date_created` or `date_last_updated`.
* `begin_date`: Data de início da busca (ISO 8601), por exemplo `2017-05-06T00:00:00.000-04:00`.
* `end_date`: Data de término da busca (ISO 8601), por exemplo `2017-05-06T23:59:59.999-04:00`.

#### Request
```curl
curl -X GET \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/search?access_token=MKT_ACCESS_TOKEN&range=date_created&begin_date=2017-05-06T00:00:00.000-04:00&end_date=2017-05-06T23:59:59.999-04:00'
```

### Exportar Activities

Existe também a possibilidade de exportar as atividades da lista de sua conta no Mercado Pago com o link `Exportar`.

![export_activities](/images/advanced-payments/export_activities.png)

Você pode selecionar os filtros necessários e escolher o formato CSV ou XLS para realizar a conciliação manualmente.

![export_activities_2](/images/advanced-payments/export_activities_2.png)
