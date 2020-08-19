---
sites_supported:
  - mla
  - mco
indexable: false
---

# Processing payments in Gateway mode

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

<!-- -->
> NOTE
>
> Note
>
> Currently the API only allows binary payments with direct capture.

## Split payments in Gateway mode with direct capture

Below is an example of payment in Gateway mode with direct capture, using the Advanced Payments REST API.

### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

### Body
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
      "description": "Comisión Tiquetera",
      "external_reference": "externalRef123",
      "statement_descriptor": "Tiquetera"
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  "capture": true,
  "binary_mode": true,
  "external_reference": "externalRootRef"
}
```

### Response Payment Approved
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

### Response Payment Rejected
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

### Response Failed
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

## Split payments in Gateway mode with deferred capture

Below is an example of payment in Gateway mode with direct capture, using the Advanced Payments REST API.

### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

### Body
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
      "description": "Comisión Tiquetera",
      "external_reference": "externalRef123",
      "statement_descriptor": "Tiquetera"
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  "capture": false,
  "binary_mode": true,
  "external_reference": "externalRootRef"
}
```

### Response Payment Authorized
`HTTP Status 201 Created`
```json
{
  "id": 10458724,
  "status": "authorized",
  "payments": [
    {
      "id": 4506692404,
      "status": "authorized",
      "status_detail": "pending_capture",
      ...
    },
    {
      "id": 4506692429,
      "status": "authorized",
      "status_detail": "pending_capture",
      ...
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  ...
}
```

### Response Payment Rejected
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

### Response Failed
`Deferred capture not allowed`
```json
{
  "status": 400,
  "error": "bad_request",
  "message": "Some of the payment methods don't support deferred capture.",
  "cause": [
    {
      "code": 401005,
      "description": "Some of the payment methods don't support deferred capture.",
      "data": null
    }
  ]
}
```

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
