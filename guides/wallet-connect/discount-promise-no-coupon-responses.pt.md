# Respostas

Esta seção detalha as diferentes respostas que podem ser recebidas ao criar uma promessa de desconto sem um cupom pré adicionado. As respostas são categorizadas com base no resultado da requisição, variando desde o sucesso na criação da promessa de desconto até diferentes tipos de erros. 


## Sucesso

1. Resposta com Desconto Aplicado

* Código de Status: 200 (Sucesso)
* Descrição: Retorna o valor da transação com o desconto aplicado, informações detalhadas sobre o desconto, e um link para os termos legais do desconto.
* Corpo da Resposta:

[[[
```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {
    "amount": 55.0,
    "detail": {
      "value": 10.0,
      "type": "percent",
      "cap": 1000.0
    },
    "legal_terms": "https://mercadopago.com/legal/terms"
  }
}
```
]]]

2. Resposta para Usuário/Campanha Sem Descontos 

* Código de Status: 200 (Sucesso)
* Descrição: Indica que a transação foi processada sem desconto aplicado.
* Corpo da Resposta:


[[[
```Json
{
  "transaction_amount": 150.0,
  "currency_id": "ARS",
  "discount": {}
}

```
]]]




## Erro

1. Resposta para Requisição Incorreta


* Código de Status: 400 (Bad Request)
* Descrição: Ocorre quando a requisição está mal-formada ou incompleta.
* Corpo da Resposta:
[[[
```Json

{
  "error": "bad_request",
  "message": "<bad_request_message>",
  "status": 400
}

```
]]]


2. Resposta para Recurso Não Encontrado


* Código de Status: 404 (Not Found)
* Descrição: Significa que o recurso solicitado não existe no servidor.
* Corpo da Resposta:

[[[
```Json

{
   "error": "not_found",
   "message": "Not found manual input code",
   "status": 404
}

```
]]]

3. Resposta para Erro Interno do Servidor


* Status Code: 500 (Internal Server Error)
* Descrição: Indica um erro genérico do servidor, sugerindo problemas no lado do servidor do Mercado Pago.
* Corpo da Resposta:

[[[
```Json

{
  "error": "internal_error",
  "message": "internal server error",
  "status": 500
}

```
]]]

