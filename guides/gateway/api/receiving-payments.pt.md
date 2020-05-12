---
sites_supported:
  - mla
  - mco
indexable: false
---

# Mercado Pago Gateway: API

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.


> NOTE
>
> Pre-requisito
>
> Ter realizado [a integração](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/introduction) de **API**

## Novos conceitos

Antes de continuar com a integração, é importante que você conheça esses novos conceitos:

|Atributo|Tipo|Descrição|
|---|---|---|
|`processing_mode`| String | Indica a forma de processamento de um pagamento. As opções são **gateway** ou **aggregator**|
|`merchant_account_id`| String | Indica o número de comércio. Somente é possível utilizá-lo quando o `processing_mode` é gateway |
|`payment_method_option_id`| String | Identifica univocamente a somatória de um `payment_method` + `issuer` + `merchant_account_id`|

## Integração

Quando for realizado o **POST** para /payments os atributos a seguir deverão ser adicionados:

* `processing_mode`
* `payment_method_option_id`

```curl
curl -X POST \
"https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN" \
-H "Content-Type: application/json"
-d "{
  'transaction_amount': '100',
  'installments': 3,
  'payment_method_option_id': '{ID}',
  'token': 'ff8080814c11e237014c1ff593b57b4d',
  'payer': [{'email': 'john.doe@gmail.com'}],
  'processing_mode': 'gateway'
}"
```

**Onde consigo o `payment_method_option_id`?**

Na hora de consultar as parcelas:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount
}, setInstallmentInfo);
```

Obter o valor do atributo `payment_method_option_id` para o número de comércio (`merchant_account_id`) que for desejado. Poderá achar esse atributo dentro do objeto `agreements`.

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "payer_costs": [
      {
        "installments": 1,
        "reimbursement_rate": 0,
        "installment_rate": 0,
        "discount_rate": 0,
        "min_allowed_amount": 0,
        "labels": [
          "CFT_0,00%|TEA_0,00%"
        ],
        "max_allowed_amount": 250000
      },
      {
        "installments": 2,
        "reimbursement_rate": 0,
        "installment_rate": 0,
        "discount_rate": 0,
        "min_allowed_amount": 2,
        "labels": [
          "CFT_0,00%|TEA_0,00%"
        ],
        "max_allowed_amount": 60000
      }
    ],
    "agreements": [
      {
        "id": "491900352",
        "category_id": "master_web_first",
        "time_frame": {
          "end_date": "2019-07-01T02:59:00.000Z",
          "week_days": ["MON","TUE","WED","THU","FRI","SAT","SUN"],
          "start_date": "2019-05-01T03:00:00.000Z"
        },
        "merchant_accounts": [
          {
            "branch_id": "venta_web",
            "payment_method_option_id": "2134e9010412443882982eba9ad04913",
            "id": "8d84d48ad6d16f41fb8c3ee112c50224"
          }
        ]
      }
    ],
    ...
  }
]
```

> Para que é utilizado o `branch_id`? O `branch_id` configurável do backoffice de Mercado Pago) lhe permite identificar facilmente para que está sendo utilizado um determinado número de comércio (`merchant_account_id`) dentro de um acordo comercial.

## Uso de serviços (opcional)

Por cada pagamento, os serviços (`merchant_services`) que se deseja utilizar podem ser customizados.

|Serviço|Tipo|Descrição|
|---|---|---|
|`fraud_scoring`|Boolean| Se quiser utilizar a prevenção automática de fraude.|
|`fraud_manual_review`| Boolean| Se quiser utilizar a revisão manual. |

```curl
curl -X POST \
"https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN" \
-H "Content-Type: application/json"
-d "{
  'transaction_amount': '100',
  'token': 'ff8080814c11e237014c1ff593b57b4d',
  'payment_method_id': 'visa',
  'payer': [{'email': 'john.doe@gmail.com'}],
  'processing_mode': 'gateway',
  'payment_method_option_id': '{ID}'
  'merchant_services': {
    'fraud_scoring': true,
    'fraud_manual_review': true
  }
}"
```


> Os [serviços](https://www.mercadopago.com.ar/developers/pt/localization/gateway) dependem do país e devem ser contratados previamente.

### Próximos passos

* [Concilie suas operações](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation/)