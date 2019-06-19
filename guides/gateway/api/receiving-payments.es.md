---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: API

> NOTE
>
> Pre-requisito
>
> Haber realizado [la integración](/guides/payments/api/introduction.es.md) de **API**

## Nuevos conceptos

Antes de continuar con la integración es importante que conozcas estos nuevos conceptos:

|Atributo|Tipo|Descripción|
|---|---|---|
|`processing_mode`| String | Indica el modo de procesamiento de un pago. Las opciones son: _aggregator_ o _gateway_. Por defecto si no se indica es **aggregator**|
|`merchant_account_id`| String | Indica el número de comercio. Sólo es posible de usar cuando el `processing_mode` es gateway |
|`payment_method_option_id`| String | Identifica unívocamente la sumatoria de un `payment_method` + `installment` + `merchant_account_id`| 

## Integración

Hay dos tipos de integraciones posibles: simple y avanzada.

### Integración simple

Cuando se realiza el **POST** a /payments se deben agregar los siguientes atributos:

|Atributo|Tipo|Descripción|
|---|---|---|
|`processing_mode`|String|Modo de procesamiento. Utilizar _gateway_|
|`merchant_account_id`| String| El número de comercio a utilizar|

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
  'merchant_account_id': '{ID}'
}"
```

**¿Dónde consigo el `merchant_account_id`?**

En el backoffice de Mercado Pago podrás ver la [información de los números de comercio](/guides/gateway/configuration.es.md). Dentro de su información encontrarás este dato.

### Integración avanzada

Cuando se realiza el **POST** a /payments se deben agregar los siguientes atributos:

|Atributo|Tipo|Descripción|
|---|---|---|
|`processing_mode`|String|Modo de procesamiento. Utilizar _gateway_|
|`payment_method_option_id`| String| El identificador unívoco del medio de pago|

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

Obtener el valor del atributo `payment_method_option_id` en la respuesta:

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "payer_costs": {
      "installments": 3,
      "installment_rate": 18.9,
      "discount_rate": 0,
      ...
    },
    "agreements": [
      ...,
      "merchant_accounts": [
        {
          "branch_id": "",
          "payment_method_option_id": "2134e9010412443882982eba9ad04913"
        }
      ]
    ],
    ...
  }
]
```

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
    'fraud_scoring': true
  }
}"
```

> Los [servicios](/localization/gateway.es.md) dependen del país

## Próximos pasos

* [Conciliá tus operaciones](/guides/gateway/reconciliation.es.md)