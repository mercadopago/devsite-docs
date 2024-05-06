# Teste de integração

Antes de ir à produção, recomendamos testar o funcionamento correto da sua integração e do processamento das transações. Isso permitirá verificar se a integração foi feita corretamente e se os pagamentos estão sendo processados sem erros.

> WARNING
>
> Importante
>
> Para testar o funcionamento da sua integração antes de ir à produção, utilize seu **Access Token de testes**. 

O teste de integração de Money Out envolve a criação de transações com status predefinidos. Esses status serão definidos com base no valor que você enviar para o campo `external_reference`. Em outras palavras, você enviará os dados para criar uma transação com base no status que deseja obter como resposta e, dessa forma, poderá verificar se o processamento está ocorrendo corretamente. 

Todas as transações criadas neste ambiente são transitórias e por isso não são armazenadas.

Para testar sua integração com Money Out, crie transações enviando um **POST**, com seu Access Token de teste no cabeçalho `Authorization` e o cabeçalho `X-Test-Token:true`, no endpoint [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process), e modifique o campo `external_reference`  de acordo com o status que deseja obter. Abaixo, você encontrará um exemplo de `curl` de uma tabela com detalhes sobre os diferentes estados.  

----[mlb]----
### Retiradas via Pix

```curl
curl --location 'https://api.mercadopago.com/v1/transaction-intents/process' \
--header 'x-enforce-signature: false' \
--header 'Authorization: Bearer TEST-7719*********832-03141*********ec9309854*********f1e54b5-1*********' \
--header 'Content-Type: application/json' \
--header 'X-Test-Token: true' \
--data '{
    "external_reference": "new",
    "point_of_interaction": {
        "type": "PSP_TRANSFER"
    },
    "seller_configuration": {
        "notification_info": {
            "notification_url": "https://webhook.site/c107a500-5bf2-4787-8c17-ec9fddcfd0f6"
        }
    },
    "transaction": {
        "from": {
            "accounts": [
                {
                    "amount": 10
                }
            ]
        },
        "to": {
            "accounts": [
                {
                    "amount": 10,
                    "owner": {
                        "identification": {
                            "number": "38437455871",
                            "type": "CPF"
                        }
                    },
                    "chave": {
                        "type": "CPF",
                        "value": "38437455871"
                    }
                }
            ]
        },
        "total_amount": 10
    }
}'
```

### Retiradas para contas bancárias

```curl
curl --location 'https://api.mercadopago.com/v1/transaction-intents/process' \
--header 'x-enforce-signature: false' \
--header 'Authorization: Bearer TEST-7719*********832-03141*********ec9309854*********f1e54b5-1*********' \
--header 'Content-Type: application/json' \
--header 'X-Test-Token: true' \
--data '{
    "external_reference": "new",
    "point_of_interaction": {
        "type": "PSP_TRANSFER"
    },
    "seller_configuration": {
        "notification_info": {
            "notification_url": "https://webhook.site/c107a500-5bf2-4787-8c17-ec9fddcfd0f6"
        }
    },
    "transaction": {
        "from": {
            "accounts": [
                {
                    "amount": 5
                }
            ]
        },
        "to": {
            "accounts": [
                {
                    "type": "current",
                    "amount": 5,
                    "bank_id": "99999004",
                    "branch": "0001",
                    "currency_id": "BRL",
                    "holder": "EWALD DAVIS",
                    "number": "10266732",
                    "provider_id": "spi",
                    "owner": {
                        "identification": {
                            "number": "38437455871",
                            "type": "CPF"
                        }
                    }
                }
            ]
        },
        "total_amount": 5
    }
}'
```

> WARNING
>
> Importante
>
> Para saber como enviar os campos restantes para executar essa solicitação, consulte [Configuração da Integração](/developers/pt/docs/money-out/integration-configuration). 

| Valor do campo `external_reference` | Resposta |
|---|---|
| `new` | Uma nova transação será criada e a resposta retornará o valor `new` para o campo `status`. |
| `failed_by_bank` | Uma nova transação será criada, desta vez rejeitada pelo banco. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_bank`. |
| `failed_by_provider` | Uma nova transação será criada, desta vez rejeitada pelo provedor. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_provider`. |
| `failed_by_caps` | Uma nova transação será criada, desta vez rejeitada por não cumprir com as normas do Banco Central. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_caps`. |
| `failed_other_reason` | Uma nova transação será criada, desta vez rejeitada por outras razões.  A resposta retornará o valor `status`. O `status_detail` dentro do objeto `from.accounts` será `other_reason`. |
| `failed_by_high_risk` | Uma nova transação será criada, desta vez rejeitada por risco de fraude.  A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_high_risk`. |
| `failed_by_compliance` | Uma nova transação será criada, e desta vez será rejeitada por não cumprir com normas. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_compliance`. |
| `failed_insufficient_funds` | SUma nova transação será criada, e desta vez será rejeitada por falta de fundos na conta de origem. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `insufficient_funds`. |
| `partially_processed` | Será criada uma nova transação cujo processamento ainda não foi completado. A resposta retornará o valor `partially_processed` para o campo `status`.  |
| `partially_processed_pending_bank` | Será criada uma nova transação cujo processamento ainda não foi concluído devido a questões relacionadas à conta de destino. A resposta retornará o valor `partially_processed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `pending_bank`. |
| `reverted` | Será criada uma nova transação, desta vez reembolsada. A resposta retornará o valor `reverted` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `refunded`. |
| `partially_reverted_partially_refunded` | Será criada uma nova transação, desta vez parcialmente reembolsada. A resposta retornará o valor `partially_reverted` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `partially_refunded`. |
| `timeout` | Uma nova transação será criada que excederá o tempo de espera. A resposta retornará o valor `processed` para o campo `status`, mas será recebida após 2 minutos. |
| `internal_server_error` | Será criada uma nova transação que falhará devido a erros do sistema. Ela retornará um `Erro 500`. |
| Qualquer outro valor | Serão gerados novos recursos com status `status` `processed`. |

------------ 

----[mlc]---- 
```curl
curl --location 'https://api.mercadopago.com/v1/transaction-intents/process' \
--header 'x-enforce-signature: false' \
--header 'Authorization: Bearer TEST-7719*********832-03141*********ec9309854*********f1e54b5-1*********' \
--header 'Content-Type: application/json' \
--header 'X-Test-Token: true' \
--data '{
    "external_reference": "new",
    "point_of_interaction": {
        "type": "PSP_TRANSFER"
    },
    "seller_configuration": {
        "notification_info": {
            "notification_url": "https://webhook.site/c107a500-5bf2-4787-8c17-ec9fddcfd0f6"
        }
    },
    "transaction": {
        "from": {
            "accounts": [
                {
                    "amount": 5
                }
            ]
        },
        "to": {
            "accounts": [
                {
                    "amount": 5,
                    "bank_id": "99999004",
                    "type": "current",
                    "number": "10266732",
                    "owner": {
                        "identification": {
                            "type": "RUT",
                            "number": "38437455871"
                        }
                    }
                }
            ]
        },
        "total_amount": 5
    }
}'
```

> WARNING
>
> Importante
>
> Para saber como enviar os campos restantes para executar essa solicitação, consulte [Configuração da Integração](/developers/pt/docs/money-out/integration-configuration). 

| Valor do campo `external_reference` | Resposta |
|---|---|
| `new` | Uma nova transação será criada e a resposta retornará o valor `new` para o campo `status`. |
| `failed_by_bank` | Uma nova transação será criada, desta vez rejeitada pelo banco. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_bank`. |
| `failed_by_provider` | Uma nova transação será criada, desta vez rejeitada pelo provedor. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_provider`. |
| `failed_by_caps` | Uma nova transação será criada, desta vez rejeitada por não cumprir com as normas do Banco Central. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_caps`. |
| `failed_other_reason` | Uma nova transação será criada, desta vez rejeitada por outras razões.  A resposta retornará o valor `status`. O `status_detail` dentro do objeto `from.accounts` será `other_reason`. |
| `failed_by_high_risk` | Uma nova transação será criada, desta vez rejeitada por risco de fraude.  A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_high_risk`. |
| `failed_invalid_destination_account` | Será criada uma nova transação, desta vez rejeitada por ter inserido dados incorretos da conta de destino. A resposta retornará o valor  `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `invalid_destination_account`. |
| `failed_by_compliance` | Uma nova transação será criada, e desta vez será rejeitada por não cumprir com normas. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `by_compliance`. |
| `failed_insufficient_funds` | SUma nova transação será criada, e desta vez será rejeitada por falta de fundos na conta de origem. A resposta retornará o valor `failed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `insufficient_funds`. |
| `partially_processed` | Será criada uma nova transação cujo processamento ainda não foi completado. A resposta retornará o valor `partially_processed` para o campo `status`.  |
| `partially_processed_pending_bank` | Será criada uma nova transação cujo processamento ainda não foi concluído devido a questões relacionadas à conta de destino. A resposta retornará o valor `partially_processed` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `pending_bank`. |
| `reverted` | Será criada uma nova transação, desta vez reembolsada. A resposta retornará o valor `reverted` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `refunded`. |
| `partially_reverted_partially_refunded` | Será criada uma nova transação, desta vez parcialmente reembolsada. A resposta retornará o valor `partially_reverted` para o campo `status`. O `status_detail` dentro do objeto `from.accounts` será `partially_refunded`. |
| `timeout` | Uma nova transação será criada que excederá o tempo de espera. A resposta retornará o valor `processed` para o campo `status`, mas será recebida após 2 minutos. |
| `internal_server_error` | Será criada uma nova transação que falhará devido a erros do sistema. Ela retornará um `Erro 500`. |
| Qualquer outro valor | Serão gerados novos recursos com status `status` `processed`. |

------------

> WARNING
>
> Importante
>
> Uma vez testados todos os cenários possíveis, [ative as credenciais de produção](/developers/pt/docs/money-out/additional-content/your-integrations/credentials) e substitua as de teste para começar a realizar transações reais.
