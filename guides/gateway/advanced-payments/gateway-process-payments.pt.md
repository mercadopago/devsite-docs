---
sites_supported:
- mla
- mco
---

# Procesando pagamentos no modo Gateway

> WARNING
>
> Importante
>
> Antes de começar, é preciso contatar seu executivo de conta informando o APP_ID da sua aplicação a fim de solicitar a habilitação da modalidade Gateway.

#### Split de pagamentos no modo Gateway

> NOTE
>
> Nota
>
> Atualmente a API permite pagamentos binários apenas com captura direta.

A seguir vemos um exemplo de pagamento na modalidade Gateway, utilizando a API REST de Advanced Payments.


#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "payments": [
    {
      "payment_method_id": "visa",
      "issuer_id": 310,
      "payment_type_id": "credit_card",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500,
      "installments": 1,
      "processing_mode": "gateway",
      "payment_method_option_id": "4f64a1728eea60745b44df0762ad9878",
      "capture": "true",
      "description": "Entradas Piñon Fijo",
      "external_reference": "externalRef123",
      "statement_descriptor": "Tiquetera"
    },
    {
      "payment_method_id": "visa",
      "issuer_id": 310,
      "payment_type_id": "credit_card",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 100,
      "installments": 1,
      "processing_mode": "gateway",
      "payment_method_option_id": "529fd703bdfe8eb4374ea3a6c8a7889d",
      "capture": "true",
      "description": "Comisión Tiquetera",
      "external_reference": "externalRef123",
      "statement_descriptor": "Tiquetera"
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  "binary_mode": true,
  "external_reference": "externalRootRef"
}
```

#### Response Payment Approved
`HTTP Status 201 Created`
```json
{
  "id": 10458724,
  "status": "approved",
  "payments": [
    {
      "id": 4506692404,
      "status": "approved",
      "status_detail": "accredited",
      ...
    },
    {
      "id": 4506692429,
      "status": "approved",
      "status_detail": "accredited",
      ...
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  ...
}
```

#### Response Payment Rejected
`HTTP Status 201 Created`
```json
{
  "id": 10458724,
  "status": "rejected",
  "payments": [
    {
      "id": 4506692404,
      "status": "rejected",
      "status_detail": "rejected_other_reason",
      ...
    },
    {
      ...
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  ...
}
```

#### Response Failed
`HTTP Status 4xx|5xx`
```json
{
  "status": "4xx|5xx",
  "error": "error",
  "message": "Invalid access token.",
  "cause": [
    {
      "code": "4xx|5xx",
      "message": "Invalid access token.",
      "data": "{}"
    }
  ]
}
```