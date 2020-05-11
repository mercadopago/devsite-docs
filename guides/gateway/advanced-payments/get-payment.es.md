---
sites_supported:
  - mla
  - mco
indexable: false
---

# Obtener un pago existente

#### Request
```curl
curl -X GET \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=APPLICATION_TOKEN' \
```

#### Response
`HTTP Status 200 OK`
```json
{
  "id": 10458724,
  "status": "approved",
  "marketplace": "NONE",
  "payments": [
    {
      "id": 4506692404,
      "status": "approved",
      "status_detail": "accredited",
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500,
      "installments": 1,
      "processing_mode": "gateway",
      "issuer_id": 310,
      "description": "Entradas Piñon Fijo",
      "external_reference": "externalRef123",
      "statement_descriptor": "Tiquetera",
      "payment_method_option_id": "4f64a1728eea60745b44df0762ad9878",
      "capture": "true",
      "acquirer": "visa",
      "merchant_number": "1"
    },
    {
      "id": 4506692429,
      "status": "approved",
      "status_detail": "accredited",
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 100,
      "installments": 1,
      "processing_mode": "gateway",
      "issuer_id": 310,
      "description": "Entradas Piñon Fijo",
      "external_reference": "externalRef123",
      "payment_method_option_id": "99781e155213f926b3c904b92bd18de7",
      "capture": "true",
      "acquirer": "visa",
      "merchant_number": "1"
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  "external_reference": "externalRootRef",
  "binary_mode": true,
  "date_created": "2018-10-20T09:34:20.518-04:00",
  "date_last_updated": "2018-10-20T09:34:20.518-04:00"
}
```
