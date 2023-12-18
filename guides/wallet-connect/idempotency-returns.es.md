# Respuestas

En esta sección encontrará el detalle de cada respuesta a los _requests_ realizados al utilizar la **clave de idempotencia** en el header.

## Respuesta exitosa

[[[
```Json
===
Código de status: 200
===

{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":Payment for the purchase of furniture,
      "external_reference":"Pago_123”
   },
   "payments":[
      {
         "id":3870106238,
         "status":”approved”,
         "status_detail":”accredited”,
         "payment_type_id":"credit_card",
         "payment_method_id":"visa",
         "transaction_amount":700.50,
         "installments":1,
         "description":"Payment Google",
         "capture":true,
         "external_reference":"Pago_123”
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   },
   "site_id": "MLM",
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}

```
]]]


## Respuesta fallida: Bad request

Esta es una respuesta que se devuelve cuando uno o varios parámetros del _request_ son incorrectos o no se pueden encontrar. Por ejemplo, este error aparecerá si uno de los parámetros obligatorios no se envía en el momento del _request_.

[[[
```Json
===
Código de status: 400
===
{
   "status": "400",
   "error":  "bad_request",
   "message": "Some parameters are invalid for search.",
}

```
]]]


## Fallo debido a conflicto

Este fallo ocurre cuando se crea un Advanced Payment y el mismo está en proceso o ya ha sido pagado. En este caso, el proceso de idempotencia no se cumple y, por lo tanto, es rechazado.

[[[
```Json
===
Código de status: 409
===
{
   "status": "409",
   "error":  "Conflict",
   "message": "The process has not been completed yet. Try again later.",
   "cause": [
    {
      "code":"401001",
      "message": "The process has not been completed yet. Try again later.",
      "data": null
    }
   ]
}

```
]]]


## Fallo debido a entidad no procesable

Este fallo ocurre cuando, al crear un Advanced Payment, se identifica un error o alguna información vacía. Cuando esto ocurre, no se cumple el proceso de idempotencia, convirtiéndose en una entidad no procesable y, por lo tanto, es rechazado.

[[[
```Json
===
Código de status: 422
===
{
   "status": "422",
   "error":  "Unprocessable entity",
   "message": "Idempotency key already used.",
   "cause": [
    {
      "code":"422001",
      "message": "Idempotency key already used.",
      "data": null
    }
   ]
}

```
]]]
