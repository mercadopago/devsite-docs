# Respostas

Ao executar o request para obter informações de pagamento, é possível que se retornem diferentes respostas. Na próxima seção você encontra o detalhe de cada uma delas, bem como as possíveis causas.

## Resposta de sucesso 

[[[
```Json
===
Código de status: 200
===

{
  "id": 10267812,
  "wallet_payment": {
    "transaction_amount": 125.98,
    "description": "Payment for the purchase of furniture",
    "external_reference": "Payment_seller_123"
  },
  "payments": [
    {
      "id": 3870106238,
      "status_detail": "approved_id",
      "payment_method_id": "credit_card_id",
      "transaction_amount": 700.5,
      "installments": 1,
      "description": "Payment for the purchase of furniture",
      "capture": true,
      "external_reference": "payment_123"
    }
  ],
  "disbursements": {
    "collector_id": "collectorId"
  },
  "payer": {
    "id": 8879
  },
  "site_id": "MLB",
  "date_created": "2018-10-20T09:34:20.518-04:00",
  "date_last_updated": "2018-10-20T09:34:20.518-04:00"
}

```
]]]


## Falha devido a Advanced payment not found.

[[[
```Json
===
Código de status: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "Advanced payment not found."
}

```
]]]


## Falha devido a Client ID not found in whitelist.

[[[
```Json
===
Código de status: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "Client ID not found in whitelist."
}

```
]]]



## Falha devido a collector_id not found in the merchant list.

[[[
```Json
===
Código de status: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "collector_id not found in the merchant list."
}

```
]]]
