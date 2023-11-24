# Respostas 

Nesta seção você encontra as possíveis respostas ao validar cupons, com detalhes sobre cada tipo de resposta, incluindo casos de sucesso, pendência, invalidade e erro.


| Status   | Descrição |
| --- | --- |
| success  | Cupom validado com sucesso. Está associado a um desconto. |
| pending  | Cupom pronto para ser utilizado para realizar um pagamento. |
| invalid  | Cupom incorreto. Não está associado a um desconto.  |



## Sucesso

1. Cupom válido com desconto associado

* Código de Status: 200 (Sucesso)
* Descrição:  Resposta indicando sucesso na validação do cupom, que está vinculado a um desconto ativo. Inclui os termos legais, o valor do desconto, tipo, limite máximo, e os montantes mínimos e máximos aplicáveis ao pagamento.
* Corpo da resposta:

[[[
```Json

{
    "status": "success",
    "description": "Descrição do cupom exibida aos clientes, por exemplo, em interfaces, faturas ou recibos",
    "legal_terms": "URL dos termos e condições para fins legais",
    "details": {
       "value": 10.0,
       "type": "percentual",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}

```
]]]


2. Cupom com desconto pronto para uso

* Código de Status: 200 (Sucesso)
* Descrição: Resposta confirmando que o cupom está pronto para uso, aguardando aplicação em um pagamento. Detalhes do desconto e termos legais estão incluídos.
* Corpo da resposta:

[[[
```Json

{
    "status": "pending",
    "description": "Descrição do cupom, como exibido para os clientes em interfaces, faturas ou recibos.",
    "legal_terms": "URL dos termos e condições para fins legais.",
    "details": {
       "value": 10.0,
       "type": "percent",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}

```
]]]


3. Cupom sem desconto associado

* Código de Status: 200
* Descrição: Resposta que indica que o cupom enviado é inválido e não possui um desconto associado a ele.
* Corpo da resposta: 

[[[
```Json

{
    "status": "invalid"
}

```
]]]

## Erro

1. Requisição Mal Formulada

* Código de Status: 400 (Bad Request).
* Descrição: Resposta de erro indicando que a requisição foi mal formulada. Inclui uma mensagem de erro detalhada com o código de status correspondente.
* Corpo da resposta: 

[[[
```Json

{
  "error": "bad_request",
  "message": "mensagem de erro detalhada",
  "status": 400
}

```
]]] 

2. Coupon_id inválido

* Código de status: 400 (Bad Request).
* Descrição: Resposta de erro indicando que o coupon_id enviado no request é inválido.
* Corpo da resposta:

[[[
```json
{
  "error": "bad_request",
  "message": "Invalid coupon_id.",
  "status": 400
}
```
]]]

3. Payer_token inválido

* Código de status: 400 (Bad Request).
* Descrição: Resposta de erro indicando que o payer_token enviado no request é inválido.
* Corpo da resposta:

[[[
```json
{
  "error": "bad_request",
  "message": "Invalid payer token.",
  "status": 400
}
```
]]]