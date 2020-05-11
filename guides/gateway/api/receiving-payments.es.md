---
sites_supported:
  - mla
  - mco
indexable: false
---

# Mercado Pago Gateway: API

> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.ar/developers/es/guides/payments/api/introduction) de **API**

## Nuevos conceptos

Antes de continuar con la integración es importante que conozcas estos nuevos conceptos:

|Atributo|Tipo|Descripción|
|---|---|---|
|`processing_mode`| String | Indica el modo de procesamiento de un pago. Las opciones son **gateway** o **aggregator**|
|`merchant_account_id`| String | Indica el número de comercio. Sólo es posible de usar cuando el `processing_mode` es gateway |
|`payment_method_option_id`| String | Identifica unívocamente la sumatoria de un `payment_method` + `issuer` + `merchant_account_id`|

## Integración

Cuando se realiza el **POST** a /payments se deben agregar los siguientes atributos:

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

**¿Dónde consigo el `payment_method_option_id`?**

A la hora de consultar las cuotas:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount
}, setInstallmentInfo);
```

Obtener el valor del atributo `payment_method_option_id` para el número de comercio (`merchant_account_id`) que se desee. Podrás encontrar este atributo dentro del objecto `agreements`.

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

> ¿Para que se utiliza el `branch_id`? El `branch_id` (configurable desde el backoffice de Mercado Pago) te permite identificar fácilmente para qué se está utilizando un determinado número de comercio (`merchant_account_id`) dentro de un acuerdo comercial.

## Uso de servicios (opcional)

Se puede customizar por cada pago que servicios (`merchant_services`) se desean utilizar.

|Servicio|Tipo|Descripción|
|---|---|---|
|`fraud_scoring`|Boolean| Si se quiere utilizar la prevención de fraude automática|
|`fraud_manual_review`| Boolean| Si se quiere utilizar la revisión manual |

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


> Los [servicios](https://www.mercadopago.com.ar/developers/es/localization/gateway) dependen del país y deben ser contratados previamente.

### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation/)
