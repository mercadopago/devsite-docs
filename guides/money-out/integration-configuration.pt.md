# Configuração da integração

A integração de Money Out é realizada executando uma única chamada à API [v1/transaction-intents](https://api.mercadopago.com/v1/transaction-intents). Isso significa que a transação é criada e processada em uma única solicitação e, se a execução for bem-sucedida, o dinheiro estará disponível para ser retirado na conta de destino, sem a necessidade de etapas adicionais. 

----[mlb]----

Com o Money Out, é possível  enviar dinheiro de duas formas distintas: Pix ou transferência entre contas, sejam elas contas do Mercado Pago ou não. Siga as instruções abaixo para saber como realizar a integração em cada caso.

> WARNING
>
> Importante
>
> Para configurar a integração e testar seu funcionamento antes de ir à produção, é necessário utilizar seu **Access Token de teste**. 

## Configurar retiradas de dinheiro via Pix

Para integrar o Money Out e permitir retiradas de dinheiro via Pix, é necessário enviar um **POST**, com seu **Access Token** no *header* `Authorization` e sua chave de idempotencia no *header* `X-Idempotency-Key`, para o endpoint [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process). Os parâmetros correspondentes devem ser enviados conforme as especificações detalhadas na tabela a seguir.

> NOTE
>
> Nota
>
> Tenha em mente que cada chamada permite o envio de dinheiro para apenas uma conta de destino (`transaction.to`), a chave Pix do integrador deve ter sido previamente cadastrada, e a chave Pix da conta destino precisa estar ativa.


```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: 0d5020ed-1af6-469c-ae06-c3bec19954bb' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7434*********159-03141*********cee51edf8*********f94f589-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.com.br"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": 100
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "type": "current",
          "amount": 100,
          "chave": {
            "type": "CPF",
            "value": "1234567890"
          },
          "owner": {
            "identification": {
              "type": "CPF",
              "number": "1234567890"
            }
          }
        }
      ]
    },
    "total_amount": 100
  }
}'
```

| Campo | Descrição | Obrigatório/Opcional | Exemplo |
|---|---|---|---|
| `x-signature` | *Header*. Assinatura da solicitação com o corpo criptografado em base 64 usando as chaves pública e privada do integrador. Acesse a seção [Criptografia Ponta a Ponta](/developers/pt/docs/money-out/end-to-end-encryption) se precisar de mais informações. | Obrigatório **apenas no ambiente de produção**. | - |
| `x-enforce-signature` | *Header*. Booleano que indica se o integrador enviará ou não a assinatura. | **Opcional** em ambiente de testes, e **obrigatório** em ambiente produtivo, que é quando é obrigatório o envio da assinatura. | - |
| `external_reference` | *Body*. String com uma referência para identificar a transação. Essa referência é gerada pelo integrador e pode ser qualquer valor que permita rastrear as transações, desde que não possua caracteres especiais (“”, [ ], (), @) e não exceda 64 caracteres. São permitidos números, letras, hífens e sublinhados. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fixo. Sempre deve ser `PSP_TRANSFER` | Obrigatório | `PSP_TRANSFER` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. Este campo tem um limite de 500 caracteres. | Opcional | www.exemplo.com.br |
| `transaction.from.accounts.amount` | *Body*. Valor da transação, que será retirado da conta de origem `from`. O valor mínimo é 0, e o valor máximo é 10000000000. | Obrigatório | 100,00 |
| `transaction.to.accounts.type` | *Body*. Tipo de conta de destino. Os valores possíveis são `current`, para contas Pix, e `mercadopago`, para contas do Mercado Pago. | Obrigatório | `current` / `mercadopago` |
| `transaction.to.accounts.amount` | *Body*. Valor a enviar para a conta de destino indicado no `to`. Deve ser o mesmo valor indicado para `from.accounts.amount`. | Obrigatório | 100,00 |
| `transaction.to.accounts.chave.type` | *Body*. Tipo de chave de identificação Pix. Deve ser um valor entre os indicados na coluna “Exemplo”. | Obrigatório | `EMAIL`, `PHONE`, `CPF`, `CNPJ`, `PIX_CODE` |
| `transaction.to.accounts.chave.value` | *Body*. Valor da chave de identificação da conta Pix selecionada no campo `chave.type`. | Obrigatório | 1234567890 |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificação do titular da conta de destino. | Obrigatório | “CPF”<br>“CNPJ” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificação do titular da conta de destino. | Obrigatório | 1234567890 |
| `transaction.total_amount `| *Body*. Montante total da transação. Deve ser o mesmo valor indicado para `from.accounts.amount` e `to.accounts.amount` | Obrigatório | 100,00 |


Se a execução for bem-sucedida, você receberá automaticamente uma resposta com o `status code 202`, indicando que a transação foi aceita, como no exemplo a seguir:

```json
{
  "id": "0d5020ed",
  "status": "approved",
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.com.br"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "status_detail": "approved",
          "owner": {
            "identification": {
              "number": "1234567890",
              "type": "CPF"
            }
          }
        }
      ]
    },
    "paid_amount": 100,
    "refunded_amount": 1,
    "payer": {
      "id": 123456543
    },
    "total_amount": 100
  }
}
```

| Atributo | Descrição |
|---|---|
| `id` | Identificador único da transação, gerado automaticamente. |
| `status` | Status da transação. Para verificar os possíveis status, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `created_date` | Data de criação da transação. |
| `external_reference` | Referência externa da transação, gerada pelo integrador na hora da criação. |
| `last_updated_date` | Última atualização do status da transação. |
| `point_of_interaction.type` | Ponto de interação. Valor fixo. Sempre deve ser `PSP_TRANSFER`. |
| `seller_configuration.notification_info.notification_url` | URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. |
| `transaction.from.accounts.amount` | Valor debitado da conta Mercado Pago de origem. |
| `transaction.from.accounts.amount.status_detail` | É retornado vazio. Para obter mais informações sobre o `status_detail`, confira `transaction.to.accounts.amount.status_detail`. |
| `transaction.to.accounts.amount` | Valor transferido para a conta de destino. O valor será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial indicado no campo `transaction.refunded_amount`. |
| `transaction.to.accounts.amount.status_detail` | Informação detalhada do status da operação. Para verificar os possíveis `status_detail`, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `transaction.to.accounts.owner.identification.number` | Número identificador do titular da conta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificação do titular da conta de destino. |
| `transaction.paid_amount` | Valor total cobrado ao titular da conta de origem. Será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial, indicado em `refunded_amount` |
| `transaction.refunded_amount` | No caso de reembolso, indicará o valor total reembolsado ao titular da conta de origem. Se não houve reembolso, seu valor será 0. |
| `transaction.payer.id` | Identificador do integrador titular da conta de origem. |
| `transaction.total_amount` | Valor total da transação. |


## Configurar retiradas de dinheiro para contas bancárias

Para integrar Money Out e permitir retiradas de dinheiro para contas bancárias, é necessário enviar um **POST**, com seu **Access Token** no *header* `Authorization` e sua chave de idempotencia no *header* `X-Idempotency-Key`, para o endpoint [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process). Os parâmetros correspondentes devem ser enviados conforme as especificações detalhadas na tabela a seguir.


> NOTE
>
> Nota
>
> Tenha em mente que cada chamada permite o envio de dinheiro para apenas uma conta de destino (`transaction.to`).

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: 0d5020ed-1af6-469c-ae06-c3bec19954bb' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7434*********159-03141*********cee51edf8*********f94f589-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.com.br"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": 100
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "type": "current",
          "amount": 100,
          "bank_id": "99999004",
          "branch": "0001",
          "holder": "Jonh Doe",
          "provider_id": "spi",
          "currency_id": "BRL",
          "number": "10266732",
          "owner": {
            "identification": {
              "type": "CPF",
              "number": "1234567890"
            }
          }
        }
      ]
    },
    "total_amount": 100
  }
}'
```

| Campo | Descrição | Obrigatório/Opcional | Exemplo |
|---|---|---|---|
| `x-signature` | *Header*. Assinatura da solicitação com o corpo criptografado em base 64 usando as chaves pública e privada do integrador. Acesse a seção [Criptografia Ponta a Ponta](/developers/pt/docs/money-out/end-to-end-encryption) se precisar de mais informações. | Obrigatório **apenas no ambiente de produção**. | - |
| `x-enforce-signature` | *Header*. Booleano que indica se o integrador enviará ou não a assinatura. | **Opcional** em ambiente de testes, e **obrigatório** em ambiente produtivo, que é quando é obrigatório o envio da assinatura. | - |
| `external_reference` | *Body*. String com uma referência para identificar a transação. Essa referência é gerada pelo integrador e pode ser qualquer valor que permita rastrear as transações, desde que não possua caracteres especiais (“”, [ ], (), @) e não exceda 64 caracteres. São permitidos números, letras, hífens e sublinhados. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fixo. Sempre deve ser `PSP_TRANSFER` | Obrigatório | `PSP_TRANSFER` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. Este campo tem um limite de 500 caracteres. | Opcional | www.exemplo.com.br |
| `transaction.from.accounts.amount` | *Body*. Valor da transação, que será retirado da conta de origem `from`. O valor mínimo é 0, e o valor máximo é 10000000000. | Obrigatório | 100,00 |
| `transaction.to.accounts.type` | *Body*. Tipo de conta de destino. Os valores possíveis são `current`, para contas bancárias, e `mercadopago`, para contas do Mercado Pago. | Obrigatório | `current` / `mercadopago` |
| `transaction.to.accounts.amount` | *Body*. Valor a ser enviado para a conta de destino indicado no `to`. Deve ser o mesmo valor indicado para `from.accounts.amount`. | Obrigatório | 100,00 |
| `transaction.to.accounts.bank_id` | *Body*. Número *Identificador do Sistema de Pagamento Brasileiro* (ISPB) do banco ao qual pertence a conta de destino. | Obrigatório | 99999004 |
| `transaction.to.accounts.branch` | *Body*. Número de agência no banco recebedor à qual pertence a conta de destino. | Obrigatório | 0001 |
| `transaction.to.accounts.holder` | *Body*. Nome e sobrenome do titular da conta de destino. | Obrigatório | John Doe |
| `transaction.to.accounts.provider_id` | *Body*. Identificador do provedor da conta de destino. O único valor possível é `spi`, identificador do Sistema de Pagamentos Instantâneos. | Obrigatório | `spi` |
| `transaction.to.accounts.currency_id` | *Body*. Identificador da moeda utilizada na  transação. O único valor possível é `BRL`. | Obrigatório | `BRL` |
| `transaction.to.accounts.number` | *Body*. Número único que representa cada conta bancária. Neste caso, o número único da conta de destino. | Obrigatório | `10266732` |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificação do titular da conta de destino. | Obrigatório | “CPF”<br>“CNPJ” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificação do titular da conta de destino. | Obrigatório | 1234567890 |
| `transaction.total_amount `| *Body*. Montante total da transação. Deve ser o mesmo valor indicado para `from.accounts.amount` e `to.accounts.amount` | Obrigatório | 100,00 |

Se a execução for bem-sucedida, você receberá como resposta um `status code 202`, indicando que a transação foi aceita, como no exemplo a seguir. 

> WARNING
>
> Importante
> 
> Esta resposta pode demorar alguns segundos. Se seu `status` for `pending`, deve-se executar a requisição para [Obter informações sobre uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_obter_informações_sobre_uma_transação) para verificar sua atualização.

```json
{
  "id": "0d5020ed",
  "status": "approved",
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.exemplo.com.br"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "status_detail": "approved",
          "owner": {
            "identification": {
              "number": "1234567890",
              "type": "CPF"
            }
          },
          "bank_id": "0000014",
          "type": "checking_account",
          "number": "123456"
        }
      ]
    },
    "paid_amount": 100,
    "refunded_amount": 1,
    "payer": {
      "id": 123456543
    },
    "total_amount": 100
  }
}
```

| Atributo | Descrição |
|---|---|
| `id` | Identificador único da transação, gerado automaticamente. |
| `status` | Status da transação. Para verificar os possíveis status, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `created_date` | Data de criação da transação. |
| `external_reference` | Referência externa da transação, gerada pelo integrador na hora da criação. |
| `last_updated_date` | Última atualização do status da transação. |
| `point_of_interaction.type` | Ponto de interação. Valor fixo. Sempre deve ser `PSP_TRANSFER`. |
| `seller_configuration.notification_info.notification_url` | URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. |
| `transaction.from.accounts.amount` | Valor debitado da conta Mercado Pago de origem. |
| `transaction.from.accounts.amount.status_detail` | É retornado vazio. Para obter mais informações sobre o `status_detail`, confira `transaction.to.accounts.amount.status_detail`. |
| `transaction.to.accounts.amount` | Valor transferido para a conta de destino. O valor será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial indicado no campo `transaction.refunded_amount`. |
| `transaction.to.accounts.amount.status_detail` | Informação detalhada do status da operação. Para verificar os possíveis `status_detail`, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `transaction.to.accounts.owner.identification.number` | Número identificador do titular da conta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificação do titular da conta de destino. |
| `transaction.to.accounts.bank_id` | Número identificador do banco ao qual pertence a conta de destino. |
| `transaction.to.accounts.type` | Tipo de conta de destino. |
| `transaction.to.accounts.number` | Número único que representa a conta de destino. |
| `transaction.paid_amount` | Valor total cobrado ao titular da conta de origem. Será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial, indicado em `refunded_amount` |
| `transaction.refunded_amount` | No caso de reembolso, indicará o valor total reembolsado ao titular da conta de origem. Se não houve reembolso, seu valor será 0. |
| `transaction.payer.id` | Identificador do integrador titular da conta de origem. |
| `transaction.total_amount` | Valor total da transação. |

------------ 

----[mlc]---- 
> WARNING
>
> Importante
>
> Para configurar a integração e testar seu funcionamento antes de ir à produção, é necessário utilizar seu **Access Token de teste**. 

Para integrar Money Out e permitir retiradas de dinheiro para contas bancárias, é necessário enviar um **POST**, com seu **Access Token** no *header* `Authorization` e sua chave de idempotencia no *header* `X-Idempotency-Key`, para o endpoint [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process). Os parâmetros correspondentes devem ser enviados conforme as especificações detalhadas na tabela a seguir.


> NOTE
>
> Nota
>
> Tenha em mente que cada chamada permite o envio de dinheiro para apenas uma conta de destino (`transaction.to`).

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: 0d5020ed-1af6-469c-ae06-c3bec19954bb' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7719*********832-03141*********ec9309854*********f1e54b5-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.cl"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": 100
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "amount": 100,
          "bank_id": "99999004",
          "type": "current",
          "number": "10266732",
          "owner": {
            "identification": {
              "type": "RUT",
              "number": "111111111111"
            }
          }
        }
      ]
    },
    "total_amount": 100
  }
}'
```

| Campo | Descrição | Obrigatório/Opcional | Exemplo |
|---|---|---|---|
| `x-signature` | *Header*. Assinatura da solicitação com o corpo criptografado em base 64 usando as chaves pública e privada do integrador. Acesse a seção [Criptografia Ponta a Ponta](/developers/pt/docs/money-out/end-to-end-encryption) se precisar de mais informações. | Obrigatório **apenas no ambiente de produção**. | - |
| `x-enforce-signature` | *Header*. Booleano que indica se o integrador enviará ou não a assinatura. | **Opcional** em ambiente de testes, e **obrigatório** em ambiente produtivo, que é quando é obrigatório o envio da assinatura. | - |
| `external_reference` | *Body*. String com uma referência para identificar a transação. Essa referência é gerada pelo integrador e pode ser qualquer valor que permita rastrear as transações, desde que não possua caracteres especiais (“”, [ ], (), @) e não exceda 64 caracteres. São permitidos números, letras, hífens e sublinhados. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fixo. Sempre deve ser `PSP_TRANSFER` | Obrigatório | `PSP_TRANSFER` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. Este campo tem um limite de 500 caracteres. | Opcional | www.exemplo.com.cl |
| `transaction.from.accounts.amount` | *Body*. Valor da transação, que será retirado da conta de origem `from`. O valor mínimo é 0, e o valor máximo é 10000000000. | Obrigatório | 100,00 |
| `transaction.to.accounts.amount` | *Body*. Valor a ser enviado para a conta de destino indicado no `to`. Deve ser o mesmo valor indicado para `from.accounts.amount`. | Obrigatório | 100,00 |
| `transaction.to.accounts.bank_id` | *Body*. Número identificador do banco ao qual pertence a conta de destino. | Obrigatório | 99999004 |
| `transaction.to.accounts.type` | *Body*. Tipo de conta de destino. Os valores possíveis são `current`, para contas bancárias, e `mercadopago`, para contas do Mercado Pago. | Obrigatório | `current` / `mercadopago` |
| `transaction.to.accounts.number` | *Body*. Número único que representa cada conta bancária. Neste caso, o número único da conta de destino. | Obrigatório | `10266732` |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificação do titular da conta de destino. | Obrigatório | “RUT” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificação do titular da conta de destino. | Obrigatório | 1234567890 |
| `transaction.total_amount `| Body. Montante total da transação. Deve ser o mesmo valor indicado para `from.accounts.amount` e `to.accounts.amount` | Obrigatório | 100,00 |

Se a execução for bem-sucedida, você receberá como resposta um `status code 202`, indicando que a transação foi aceita, como no exemplo a seguir. 

> WARNING
>
> Importante
> 
> Esta resposta pode demorar alguns segundos. Se seu `status` for `pending`, deve-se executar a requisição para [Obter informações sobre uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_obter_informações_sobre_uma_transação) para verificar sua atualização.

```json
{
  "id": "0d5020ed",
  "status": "approved",
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.cl"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "status_detail": "approved",
          "owner": {
            "identification": {
              "number": "1234567890",
              "type": "RUT"
            }
          },
          "bank_id": "0000014",
          "type": "checking_account",
          "number": "123456"
        }
      ]
    },
    "paid_amount": 100,
    "refunded_amount": 1,
    "payer": {
      "id": 123456543
    },
    "total_amount": 100
  }
}
```

| Atributo | Descrição |
|---|---|
| `id` | Identificador único da transação, gerado automaticamente. |
| `status` | Status da transação. Para verificar os possíveis status, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `created_date` | Data de criação da transação. |
| `external_reference` | Referência externa da transação, gerada pelo integrador na hora da criação. |
| `last_updated_date` | Última atualização do status da transação. |
| `point_of_interaction.type` | Ponto de interação. Valor fixo. Sempre deve ser `PSP_TRANSFER`. |
| `seller_configuration.notification_info.notification_url` | URL onde receberá as notificações de eventos relacionados à transação, como mudanças de status. |
| `transaction.from.accounts.amount` | Valor debitado da conta Mercado Pago de origem. |
| `transaction.from.accounts.amount.status_detail` | É retornado vazio. Para obter mais informações sobre o `status_detail`, confira `transaction.to.accounts.amount.status_detail`. |
| `transaction.to.accounts.amount` | Valor transferido para a conta de destino. O valor será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial indicado no campo `transaction.refunded_amount`. |
| `transaction.to.accounts.amount.status_detail` | Informação detalhada do status da operação. Para verificar os possíveis `status_detail`, consulte a seção [Possíveis status de uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_possíveis_status_de_uma_transação). |
| `transaction.to.accounts.owner.identification.number` | Número identificador do titular da conta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificação do titular da conta de destino. |
| `transaction.to.accounts.bank_id` | Número identificador do banco ao qual pertence a conta de destino. |
| `transaction.to.accounts.type` | Tipo de conta de destino. |
| `transaction.to.accounts.number` | Número único que representa a conta de destino. |
| `transaction.paid_amount` | Valor total cobrado ao titular da conta de origem. Será igual a `from.accounts.amount`, a menos que tenha havido reembolso total ou parcial, indicado em `refunded_amount` |
| `transaction.refunded_amount` | No caso de reembolso, indicará o valor total reembolsado ao titular da conta de origem. Se não houve reembolso, seu valor será 0. |
| `transaction.payer.id` | Identificador do integrador titular da conta de origem. |
| `transaction.total_amount` | Valor total da transação. |

------------

## Configurar notificações

Para manter-se atualizado sobre o status das transações, é necessário configurar as [notificações Webhooks](/developers/pt/docs/money-out/additional-content/your-integrations/notifications/webhooks). Elas são mensagens enviadas pelo servidor do Mercado Pago em resposta a eventos que ocorrem em sua aplicação. Especificamente para o caso de Money Out, esses eventos podem ser a criação de uma transação ou as atualizações de status durante o processamento. 

Você pode **configurar as notificações Webhooks ao fazer a chamada para criar uma transação**, através do campo `notification_url`. Basta preenchê-lo com a URL na qual você deseja receber as atualizações.

Veja abaixo exemplos que ilustram as mensagens retornadas quando ocorre um evento. 


#### - Mensagem ao criar uma transação

```json
{
  "action": "transaction_intent.created",
  "api_version": "v1",
  "data": {
    "id": "1108917506-01GGTH198RP0K71H133EK9BJAT" // ID da transaction intent
  },
  "date_created": "2022-11-01T17:19:53.915-04:00",
  "id": "103686924004", // ID da notificação
  "last_updated": "0001-01-01T00:00:00Z",
  "status": "new",
  "type": "transaction_intent"
}
```

#### - Mensagem ao atualizar uma transação

```json
{
  "action": "transaction_intent.updated",
  "api_version": "v1",
  "data": {
    "id": "1108917506-01GGTH198RP0K71H133EK9BJAT" // ID da transaction intent
  },
  "date_created": "2022-11-01T17:19:53.915-04:00",
  "id": "103686918006", // ID da notificação
  "last_updated": "2022-11-01T17:19:55.001-04:00",
  "status": "partially_processed",
  "type": "transaction_intent"
}
```

O atributo `data.id` corresponde ao ID da transação sobre a qual você está sendo notificado, o parâmetro `id` será o identificador da notificação e o `status` informará sobre a criação da transação ou sua atualização.


### Ações necessárias após receber uma notificação

Ao receber uma notificação na sua plataforma, é necessário, primeiramente, validar as informações do recurso notificado. Para realizar isso, execute a requisição [Obter informações sobre uma transação](/developers/pt/docs/money-out/integration-configuration#bookmark_obter_informações_sobre_uma_transação) utilizando o ID da transação que foi notificada. 

Depois que os dados da transação forem verificados, o Mercado Pago aguarda uma resposta para validar se a notificação foi recebida corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)` na URL que foi enviada no campo `notification_url`. Caso essa resposta não seja enviada, será entendido que você não recebeu a notificação e uma nova tentativa de envio será realizada até que você envie a resposta.

Na tabela abaixo listamos os principais eventos, prazos e tempo de espera para o recebimento de novas tentativas de notificação.

| Evento | Prazo após o primeiro envio | Tempo de espera de confirmação |
|---|---|---|
| Envio | - | 22 segundos |
| Primera tentativa | 15 minutos | 5 segundos |
| Segunda tentativa | 30 minutos | 5 segundos |
| Terceira tentativa | 6 horas | 5 segundos |
| Quarta tentativa | 48 horas | 5 segundos |
| Quinta tentativa | 96 horas | 5 segundos |


## Obter informações sobre uma transação

Após criar uma transação, é possível obter informações detalhadas sobre ela. Isso permite verificarse ela foi criada corretamente, consultar seu status ou confirmar as informações recebidas em suas notificações.

Para isso, envie um **GET** com seu Access Token para o endpoint [/v1/transaction-intents//{{transaction_intent_id}}](https://api.mercadopago.com/v1/transaction-intents/{id}), substituindo o `transaction_intent_id`  pelo ID obtido na resposta ao criar a transação.

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/transaction-intents/{{transaction_intent_id}}' \
--header 'Authorization: Bearer {{access_token}}'
``` 

Se os dados enviados na chamada estiverem corretos, você receberá uma resposta como a seguinte:

```json
{
  "id": "0d5020ed",
  "status": "approved",
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": "PSP_TRANSFER",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "www.ejemplo.cl"
    }
  },
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "status_detail": "approved",
          "owner": {
            "identification": {
              "number": "1234567890",
              "type": "RUT"
            }
          },
          "bank_id": "0000014",
          "type": "checking_account",
          "number": "123456"
        }
      ]
    },
    "paid_amount": 100,
    "refunded_amount": 1,
    "payer": {
      "id": 123456543
    },
    "total_amount": 100
  }
}
```

Para obter detalhes sobre cada atributo retornado, consulte a resposta à [Configurar retiradas de dinheiro](/developers/pt/docs/money-out/integration-configuration#bookmark_integration_configuration).


### Possíveis status de uma transação 

Quando uma transação é criada, ou quando informações relacionadas à ela são consultadas, as respostas retornarão dois campos com o detalhamento do status em que ela se encontra. 
 * `status`: este campo fornecerá informações sobre o estado atual do processamento.
 * `status_detail`: este campo é encontrado como atributo de `transaction.to.accounts`, e trará informações sobre os motivos ou detalhes que resultaram nesse status. 

Veja abaixo todos os status pelos quais uma transação pode passar durante seu processamento.

| `status` | `status_detail` | Descrição |
|---|---|---|
| `approved` | `approved` | O processamento da transação foi bem-sucedido. |
| `approved` | `partially_refunded` | A transação foi parcialmente reembolsada pelo banco de destino. |
| `in_process` | `pending_authorized` | A transação está em andamento, com status final pendente e aguardando autorização. |
| `in_process` | `pending_bank` | O banco de destino não respondeu, portanto, a transação está pendente de um estado final. |
| `refunded` | `refunded` | A transação foi totalmente reembolsada pelo banco de destino. |
| `rejected` | `by_bank` | A transação foi rejeitada pelo banco de destino. Execute novamente a solicitação. |
| `rejected` | `by_provider` | A transação foi rejeitada pelo provedor. Execute novamente a solicitação. |
| `rejected` | `high_risk` | A transação é rejeitada devido ao risco de fraude. Execute novamente a solicitação. |
| `rejected` | `insufficient_funds` | A transação foi rejeitada devido a fundos insuficientes na conta de origem. Execute novamente a solicitação. |
| `rejected` | `other_reason` | A transação foi rejeitada por padrão devido a problemas internos durante o processamento. Execute novamente a solicitação. |
| `rejected` | `review_manual` | A transação é rejeitada e enviada para análise de prevenção de fraudes. Execute novamente a solicitação. |
