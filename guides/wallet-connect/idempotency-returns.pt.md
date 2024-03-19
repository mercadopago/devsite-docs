# Respostas

Nesta seção você encontra o detalhe de cada resposta às requisições realizadas ao utilizar a **chave de idempotência** no header das requisições.

## Resposta de sucesso

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
      "description":"Payment for the purchase of furniture",
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

## Resposta com falha: Bad request

Esta é uma resposta que retorna quando algum dos parâmetros de requisição está incorreto ou não pode ser encontrado. Por exemplo, este erro aparecerá caso um dos parâmetros obrigatórios não seja enviado no momento da requisição.

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

## Falha devido a conflito

Esta falha ocorre quando um pagamento é criado e o mesmo está em processamento ou já foi pago. Neste caso, o processo de idempotência não é cumprido e por isso é rejeitado.

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

## Falha devido a entidade não processável

Esta falha ocorre quando, ao criar um pagamento é identificado um erro ou alguma informação vazia. Quando isso acontece, não se cumpre o processo de idempotência, tornando-se uma entidade não processável e por isso é rejeitado.

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