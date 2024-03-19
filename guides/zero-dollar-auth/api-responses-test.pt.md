# Retornos da API em testes

Nesta seção você encontra as possíveis respostas referentes ao teste de validação Zero Dollar Auth, com detalhes sobre cada tipo de resposta, incluindo casos de sucesso e erro.

## Sucesso

### Aprovado

* **Código de status**: approved
* **Descrição**: Esta resposta retorna a aprovação do fluxo de Zero Dollar Auth.
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
    …
}
```

## Erro

### Rejected

* **Código de Status**: rejected
* **Descrição**: Esta resposta retorna o fluxo de Zero Dollar Auth é rejeitado. Recomendamos revisar os parâmetros de requisição para garantir que seu preenchimento foi realizado de acordo com os valores aceitos pela nossa API. Após a revisão, execute uma nova requisição.
* **Corpo da resposta**:

```
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
…
}
```

### Feature desativada

* **Descrição**: Esta mensagem retorna quando a feature de Zero Dollar Auth está temporariamente desativada.
* **Corpo da resposta**:

```json
{
    "message": "This feature is temporarily off"
}
```

### Collector não está na Whitelist

* **Descrição**: Este erro retorna quando o collector não está inserido na Whitelist. Veja a seção [Lista de permissões](/developers/pt/docs/zero-dollar-auth/api-responses#bookmark_lista_de_permissões) para mais detalhes.
* **Corpo da resposta**:

```json
{
     "message": "Forbidden"
}
```

### Erro interno

* **Código de status**: 500
* **Descrição**: Resposta do fluxo Zero Dollar Auth para erros internos. Caso haja falhas nas chamadas às APIs durante o fluxo, a causa será detalhada no objeto `cause`, incluindo a mensagem de erro, código, data e o ID da solicitação (requestId) correspondente.
* **Corpo da resposta**:

```json
{
     "message": "Error message",
      "error": "internal_error",
     "status": "500",
     "cause": [
           {
              "code": "Error code",
              "description": "Error description",
              "data": "2023-10-11T10:06:56.000-04:00;",
           }
      ]
}
```

