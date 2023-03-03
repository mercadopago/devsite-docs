# Reembolsar valor parcial

Um reembolso parcial ocorre quando somente parte do valor pago é devolvido ao comprador. 

Para reembolsar um valor parcial, é necessário indicar o valor que deve ser devolvido diretamente no `body` do _request_. Para isso, envie um **POST** ao endpoint /v1/advanced_payments/{advanced_payment_id}/refunds com as devidas informações e execute a requisição ou, se preferir, utilize o `curl` abaixo.

[[[
```curl

POST
  -H 'X-Idempotency-Key: haSF4313get124' \
  -H ‘Authorization: Bearer ${ACCESS_TOKEN}’ \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
https://api.mercadopago.com/v1/advanced_payments/10458724/refunds

{
    "amount":25
}

```
]]]

## Respostas

Ao executar o request para um reembolso parcial, é possível que se retornem diferentes respostas. Na próxima seção você encontra o detalhe de cada uma delas, bem como as possíveis causas.

### Resposta de sucesso

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

### Resposta com falha: Bad request

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


### Resposta com falha: Not found

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


### Resposta com falha: Internal error code

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

