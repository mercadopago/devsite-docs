# Teste de integração

Após criar a validação Zero Dollar Auth, é importante realizar testes na integração para confirmar sua funcionalidade. Para testar a validação é necessário duas etapas:

* Gerar card token
* Validar integração

## Gerar card token

Para testar a validação de Zero Dollar Auth, o primeiro passo é gerar um token do cartão. Para isso, utilize nossa biblioteca [Mercado Pago SDK JS](/developers/es/docs/sdks-library/landing) para capturar dados do cartão e gerar o token.

Para obter o token do cartão, use os dados de teste que compartilhamos com você na tabela abaixo.

> WARNING
>
> Importante
>
> Para simular **aprovações**, utilize o cartão específico `4074090000000004`. Para simular **rejeições**, use qualquer outro cartão.

| Valor a preencher | Exemplo |
|---|---|
| Número do cartão | 4074090000000004 |
| Mês de vencimento | 02 |
| Ano de vencimento | 2031 |
| Código de segurança | 123 |
| Titular do cartão | APRO |
| Tipo de identificação. Pode ser dos seguintes tipos:<br>CPF: Individual Taxpayer Registration, Brazil.<br>CNPJ: National Register of Legal Entities, Brazil.<br>CUIT: Unique Tax Identification Code, Argentina.<br>CUIL: Unique Labor Identification Code, Argentina.<br>DNI: National Identity Document, Argentina.<br>CURP: Single Population Registration Code, Mexico.<br>RFC: Federal Registry of Taxpayers, Mexico.<br>CC: Citizenship Card, Colombia.<br>RUT: Single Tax List, Chile.<br>CI: Identity Card, Uruguay. | CPF |
| Número do documento | 15635614680 |

> WARNING
>
> Importante
>
> Para poder realizar transações com os dados do cartão abertos, diretamente na chamada da API, é necessário que o vendedor seja [PCI Compliant](/developers/pt/docs/security/pci). Caso contrário, esses dados não podem ser transacionados no back-end da sua aplicação.

## Validar integração

Como último passo, é necessário validar a integração utilizando o token obtido na etapa anterior. Para isso, envie os parâmetros descritos na tabela abaixo ao endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) e execute a requisição.

| Parâmetro | Tipo | Descrição | Exemplo |
|---|---|---|---|
| token | String | Token do cartão | 12346622341 |
| payment_method_id | String | Indica o identificador do meio de pagamento selecionado para efetuar o pagamento | master |
| payer.email | String | Email do pagador | buyer@examplemail.com |
| payer.type | String | Tipo de identificação do pagador associado | guest |
| description | String | Descrição da validação | "validação de cartão com valor zero dollar master crédito com cvv" |
| transaction_amount | Number | Custo da validação | Sempre zero (0) para Zero Dollar Auth |

```curl
curl -X POST \
      'https://api.mercadopago.com/v1/payments'\
      Content-Type: application/json
      X-Card-Validation: card_validation
      Authorization: Bearer {{access_token}}
{
    "token": "{{card_token}}",
    "payment_method_id": "master",
    "payer": {
        "email": "{{example_email}}",
        "type" : "guest"
    },
    "description": "validação de cartão com valor zero dollar master crédito sem cvv",
    "transaction_amount": 0
}
```