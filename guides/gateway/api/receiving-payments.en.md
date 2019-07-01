---
sites_supported:
  - mla
  - mco
---

# Mercado Pago Gateway: API

> NOTE
>
> Pre-requisites
>
> Have already integrated the [Payments's API](https://www.mercadopago.com.ar/developers/en/guides/payments/api/introduction.en.md)

## New concepts

Before we begin with the integration changes, is important for you to know about these new concepts:

|Attribute|Type|Description|
|---|---|---|
|`processing_mode`| String | Indicates the processing mode. The options are **gateway** or **aggregator**|
|`merchant_account_id`| String | Indicates the merchant ID. Can only be used when `processing_mode` is equal to gateway |
|`payment_method_option_id`| String | Identifies unequivocally the representation of a `payment_method` + `issuer` + `merchant_account_id`|

## Integration

When the **POST** method is done to /payments, you need to add the following attributes:

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

**Obtaining the `payment_method_option_id`**

When you get the installments via javascript:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount
}, setInstallmentInfo);
```

You need to retrieve the value of the `payment_method_option_id` attribute for the merchant ID (`merchant_account_id`) you wish to use. You can find this attribute inside the `agreements` object.

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

> What is the purpose of `branch_id`? The `branch_id` (configured in Mercado Pago's backoffice) allows you to quickly identify the use case of that merchant ID (`merchant_account_id`) inside a commercial agreement.

## Using services (optional)

In every payment you can customize which services (`merchant_services`) you want to use.

|Services|Type|Description|
|---|---|---|
|`fraud_scoring`|Boolean| If you want to use automatic fraud prevention scoring or not|
|`fraud_manual_review`| Boolean| If you want to use Mercado Pago's manual review (representatives) |

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
    'fraud_scoring': true
  }
}"
```

> The [services](https://www.mercadopago.com.ar/developers/en/localization/gateway) vary according to country and must be previously acquired.

## Next steps

* [Reconcile your operations](https://www.mercadopago.com.ar/developers/en/guides/gateway/reconciliation)
