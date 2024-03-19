# Retornos da API

Nesta seção você encontra as possíveis respostas referentes à criação da validação Zero Dollar Auth, com detalhes sobre cada tipo de resposta, incluindo casos de sucesso e erro.

## Retornos 200 

Ao receber o `Return 200`, que confirma a autorização Zero Dollar Auth para o cartão, e o status indicar **"approved"**, conclui-se que a validação do cartão foi efetuada com êxito. Por outro lado, se o status for **"rejected"**, significa que a validação do cartão não foi possível. Este resultado negativo pode ser causado por diversos fatores, como um cartão bloqueado ou expirado.

> NOTE
>
> Importante
>
> Uma transação com status `approved` ou `rejected` será comunicada através de uma notificação Webhooks.

Abaixo listamos o `body` de resposta para cada um dos cenários.

### Cartão validado com sucesso

* **Status**: approved
* **Descrição**: resposta indicando o sucesso da criação da validação Zero Dollar Auth.
* **Corpo da resposta**:

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "transaction_amount": 0,
}
```

### Cartão não validado

* **Status**: rejected
* **Descrição**: resposta indicando que a criação da validação Zero Dollar Auth foi rejeitada. Caso receba este erro, recomendamos revisar os parâmetros de requisição para garantir que todos estejam em conformidade com os valores aceitos pela nossa API. Após a revisão, realize uma nova requisição.
* **Corpo da resposta**:

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "rejected",
    "status_detail": "cc_rejected_other_reason",
    "transaction_amount": 0,
}
```

## Retornos 400

Caso ocorra o recebimento do `Return 400`, isso geralmente indica que o corpo da requisição contém dados incompatíveis com os aceitos pela API. Um exemplo comum dessa situação é uma tentativa de validar a transação enviando um `transaction_amount` com valor diferente de zero.

Abaixo listamos o `body` de resposta para cada um dos cenários.

### 'transaction_amount' diferente de zero

* **Status**: 400
* **Descrição**: Este erro ocorre quando o campo `transaction_amount` está com um valor diferente de zero. Para evitar este tipo de erro, revise o body da requisição e garanta que o parâmetro `transaction_amount` esteja com valor igual a zero.
* **Corpo da resposta**:

```json
{
    "message": "Invalid value for transaction_amount",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": 2072,
            "description": "Invalid value for transaction_amount",
            "data": "26-09-2023T17:27:50UTC;76230673-8376-47ee-8d7f-6ccaacdb5b2a"
        }
    ]
}
```

### Bad request

* **Status**: 400
* **Descrição**: Caso receba este erro, recomendamos revisar os parâmetros de requisição para garantir que todos estejam em conformidade com os valores aceitos pela nossa API. Após a revisão, realize uma nova requisição.
* **Corpo da resposta**:

```json
{
    "message": "<BADREQUEST MESSAGE>",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": <error_code>,
            "description": "<detail error description>",
            "data": "12-01-2023T15:27:07UTC;bcd3be45-fcb4-4647-ba35-a0396cd71b90"
        }
    ]
}
```

## Retornos 500

Os retornos 500 (Internal Error) podem indicar uma falha no servidor durante a tentativa de processamento da operação. A seguir, apresentamos o corpo da resposta.

```json
{
   "message": "<ERROR MESSAGE>",
   "error": "internal_error",
   "status": 500,
   "cause": [
       {
           "code": <error_code>,
           "description": "<detail error description>",
           "data": "12-01-2023T15:21:28UTC;82c52796-1026-41d2-8ef9-4cbda2d0db8d"
       }
   ]
}
```

Se o erro 500 persistir em várias requisições, entre em contato com nosso [Suporte](/developers/pt/support/center).

## Lista de permissões

Se o vendedor não estiver na lista de permissões, a resposta será a mensagem "Forbidden", juntamente com o código de status 403. A seguir, apresentamos um exemplo de código que ilustra essa resposta.

```json
{
   "message": "Forbidden"
}
```

Se você receber esta resposta, entre em contato com o seu representante comercial do Mercado Pago.

## Feature desativada

* **Descrição**: Esta mensagem retorna quando a feature de Zero Dollar Auth está temporariamente desativada.
* **Corpo da resposta**:

```json
{
    "message": "This feature is temporarily off"
}
```


