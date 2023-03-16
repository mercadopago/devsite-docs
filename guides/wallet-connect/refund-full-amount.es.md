# Reembolsar monto total

Para reembolsar el monto total de un pago, es necesario enviar un `body` vacío en el _request_. Para ello, envíe un **POST** al endpoint [/v1/advanced_payments/{advanced_payment_id}/refunds](/developers/pt/reference/wallet_connect/_advanced_payments_advanced_payment_id_refunds/post) y ejecute el _request_ o, si lo prefiere, utilice el `curl` que se muestra a continuación.

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID/refunds' \
  -H 'X-Idempotency-Key: IDEMPOTENCY-KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'accept: application/json' \
  -H 'content-type: application/json' 

```
]]]


## Respuestas

Al ejecutar el _request_ para un reembolso total, es posible que se devuelvan diferentes respuestas. A continuación, encontrará los detalles de cada una de ellas, así como las posibles causas.

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

Esta es una respuesta común cuando uno de los parámetros del _request_ está incorrecto o no se encuentra. Por ejemplo, este error ocurrirá si se envía un ID con un formato incorrecto en el momento del _request_.

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

Esta es una respuesta común que se devuelve cuando no se encuentra ningún Advanced Payment creado con el ID proporcionado en los parámetros del request.

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

Es la respuesta que indica que ocurrió un error en el servidor durante el procesamiento del _request_. Esto significa que el _request_ del cliente no pudo ser completado debido a un problema interno en el servidor.

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
