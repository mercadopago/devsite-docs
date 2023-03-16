# Reembolsar valor total

Para reembolsar o valor total de um pagamento é necessário enviar um `body` vazio no _request_. Para isso, envie um **POST** ao endpoint [/v1/advanced_payments/{advanced_payment_id}/refunds](/developers/pt/reference/wallet_connect/_advanced_payments_advanced_payment_id_refunds/post) e execute a requisição ou, se preferir, utilize o `curl` abaixo. 

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID/refunds' \
  -H 'X-Idempotency-Key: IDEMPOTENCY-KEY \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \

```
]]]

## Respostas

Ao executar o request para um reembolso total, é possível que se retornem diferentes respostas. Abaixo você encontra o detalhe de cada uma delas, bem como as possíveis causas.

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

Esta é uma resposta comum quando um dos parâmetros de solicitação está incorreto ou não foi encontrado. Por exemplo, esse erro ocorrerá se um ID com formato incorreto for enviado no momento da requisição.

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

Esta é uma resposta comum que é retornada quando nenhum Advanced Payment criado com o id fornecido nos parâmetros da solicitação é encontrado.

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

É a resposta que indica que ocorreu um erro no servidor durante o processamento da solicitação. Isso significa que a solicitação do cliente não pôde ser concluída devido a um problema interno no servidor.

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
