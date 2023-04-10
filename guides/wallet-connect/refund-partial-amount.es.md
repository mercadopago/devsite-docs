# Reembolsar monto parcial

Para reembolsar un monto parcial, es decir, devolver solo una parte del valor pagado, es necesario indicar el valor que debe ser devuelto directamente en el `body` del _request_. Para ello, envía un **POST** al endpoint [/v1/advanced_payments/{advanced_payment_id}/refunds](/developers/es/reference/wallet_connect/_advanced_payments_advanced_payment_id_refunds/post) con la información adecuada y ejecuta el _request_ o, si lo prefieres, utiliza el `curl` que se muestra a continuación.


[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID/refunds' \
  -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
        "amount":25
      }'

```
]]]


## Respuestas

Al ejecutar el _request_ de un reembolso parcial, es posible que se devuelvan diferentes respuestas. A continuación se detallan cada una de ellas, así como las posibles causas.

### Respuesta exitosa
[[[
```Json
===
Código de status: 200
===
[
    {
        "id": 1242469925,
        "payment_id": 51617407254,
        "amount": 25,
        "source": {
            "id": 783789745,
            "name": "Test Test",
            "type": "collector"
        },
        "date_created": "2022-11-18T08:48:06.768-04:00",
        "status": "approved"
    }
]

```
]]]


### Respuesta fallida: Bad request

Esta respuesta se devuelve cuando uno de los parámetros del _request_ es incorrecto o no se encuentra. Por ejemplo, este error ocurrirá cuando se envíe un ID inválido.

[[[
```Json
===
Código de status: 400
===
{
   "status": "400",
   "error":  "bad_request",
   "message": "Invalid splitter id.",
   "cause": [
    {
      "code":"400048",
      "message": "Invalid splitter id",
      "data": null
    }
   ]
}

```
]]]


### Respuesta fallida: Not found

Esta es una respuesta común que se devuelve cuando no se encuentra ningún Advanced Payment creado con el ID proporcionado en los parámetros del _request_.

[[[
```Json
===
Código de status: 404
===
{
   "status": "404",
   "error":  "not_found",
   "message": "Advanced payment not found.",
   "cause": [
    {
      "code":"404002",
      "message": "Advanced payment not found",
      "data": null
    }
   ]
}

```
]]]


### Respuesta fallida: Internal error code

Es la respuesta que indica que se produjo un error en el servidor durante el procesamiento del _request_. Esto significa que el _request_ del cliente no pudo completarse debido a un problema interno en el servidor.

[[[
```Json
===
Código de status: 500
===
{
   "status": "500",
   "error":  "internal_server_error",
   "message": "Invalid splitter id.",
   "cause": [
    {
      "code":"500000",
      "message": "Internal server error",
      "data": null
    }
   ]
}

```
]]]
