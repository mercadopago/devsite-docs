# Respuestas

En esta sección encontrarás detalles sobre cada respuesta a los _requests_ realizados para obtener información de pago.

## Respuesta exitosa

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

## Error debido a pago no encontrado

Este es un error que ocurre cuando no se encuentra ningún pago creado con el ID proporcionado en los parámetros del _request_.

[[[
```Json
===
Código de status: 404
===
{
   "status": "404",
   "error":  "Not found",
   "message": "Payment not found."
}

```
]]]


## Error debido a Client ID no encontrado en la whitelist

Esta respuesta se devuelve cuando el `Client ID` no está en la whitelist y, por lo tanto, no está habilitado para el procesamiento.

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


## Error debido a que el collector_id no se encuentra en merchant list

Esta respuesta se devuelve cuando el collector no se encuentra en la merchant list.


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
