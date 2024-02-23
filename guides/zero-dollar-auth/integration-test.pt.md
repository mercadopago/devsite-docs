# Teste de integração

Após criar a validação Zero Dollar Auth, é importante realizar testes na integração para confirmar sua funcionalidade. Para testar a validação é necessário duas etapas:

* Gerar card token
* Validar integração

## Gerar card token

Para testar a validação de Zero Dollar Auth, o primeiro passo é gerar um token do cartão.  Para isso, envie os parâmetros descritos na tabela abaixo ao endpoint /v1/card_tokens e execute a requisição.

> WARNING
>
> Importante
>
> Para todos os curls de token de cartão, é importante adicionar o cabeçalho **X-Test-Token: true**, indicando ao Payments para processar o consumo de ZDA no ambiente de SandBox. Para aprovações, utilize o cartão específico `4074090000000004` no curl de token de cartão. Para simular rejeições, use qualquer outro cartão de teste.

| Parámetro | Tipo | Descrição | Exemplo |
|---|---|---|---|
| card_number | String | Número de cartão | 4074090000000004 |
| expiration_month | Number | Mês de vencimento | 02 |
| expiration_year | Number | Ano de vencimento | 2031 |
| site_id | String | Sigla de país de origem da requisição | MLB |
| security_code | String | Código de segurança | 123 |
| cardholder.name | String | Titular do cartão | APRO |
| cardholder.identification.type | String | Refere-se ao tipo de identificação. Pode ser dos seguintes tipos.<br>CPF: Individual Taxpayer Registration, Brazil.<br>CNPJ: National Register of Legal Entities, Brazil.<br>CUIT: Unique Tax Identification Code, Argentina.<br>CUIL: Unique Labor Identification Code, Argentina.<br>DNI: National Identity Document, Argentina.<br>CURP: Single Population Registration Code, Mexico.<br>RFC: Federal Registry of Taxpayers, Mexico.<br>CC: Citizenship Card, Colombia.<br>RUT: Single Tax List, Chile.<br>CI: Identity Card, Uruguay. | CPF |
| cardholder.identification.number | String | Número do documento | 15635614680 |

```curl
curl --location 'https://api.mercadopago.com/v1/card_tokens?public_key={{public_key}}' \
     --header 'Content-Type: application/json' \
     --header 'Cookie: _d2id=573665fb-5ad1-4bc9-a25e-dd82b6689f38-n' \
     --heade    r 'X-Test-Token: true' \
     --data '{
              "card_number": "4074090000000004",
              "expiration_month": 11,
              "expiration_year": 2025,
              "site_id": "MLB",
              "security_code": "123",
              "cardholder": {
                             "name": "APRO",
                             "identification": {
                                                "type": "CPF",
                                                "number": "15635614680"
        }
    }
}'
```

> WARNING
>
> Importante
>
> Para poder realizar transações com os dados do cartão abertos, é necessário que o vendedor seja [PCI Compliant](/developers/es/docs/security/pci). Caso contrário, esses dados não podem ser transacionados no back-end da sua aplicação.

## Validar integração

Como último passo, é necessário validar a integração utilizando o token obtido na etapa anterior. Para isso, envie os parâmetros descritos na tabela abaixo ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição.

| Parâmetro | Tipo | Descrição | Exemplo |
|---|---|---|---|
| token | String | Token do cartão | 12346622341 |
| payment_method_id | String | Indica o identificador do meio de pagament selciondo para efetuar o pagamento | master |
| payer.id | String | ID do pagador | 123456 | 
| payer.type | String | Tipo de identificação do pagador associado | customer |
| description | Sting | Descrição da validação | "validação de cartão com valor zero dollar master crédito com cvv" |
| transaction_amount | Number | Custo da validação | Sempre zero (0) para Zero Dollar Auth |

```curl
curl -X POST \
      'https://api.mercadopago.com/v1/payments'\
      Content-Type: application/json
      X-Card-Validation: card_validation
      Authorization: Bearer {access_token}
{
    "token": "{card_token}",
    "payment_method_id": "master",
    "payer": {
        "id": "{customer_id}",
        "type" : "customer"
    },
    "description": "validação de cartão com valor zero dollar master crédito sem cvv",
    "transaction_amount": 0
}
```

