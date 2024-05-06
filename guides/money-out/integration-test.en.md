# Integration Test

Before going live, we recommend testing the proper functioning of your integration and transaction processing. This will allow you to verify if the integration was done correctly and if payments are being processed without errors.

> WARNING
>
> Important
>
> To test the proper functioning of your integration before going live, you must use your **Test Access Token**.

The Money Out integration test consists of creating transactions with predefined status. These status will be defined based on the value you send for the `external_reference` field. In other words, you will send data to create a transaction based on the `status` you want to obtain as a response. In this way, you can verify if the processing is happening correctly.

All transactions created in this environment are transitory and, therefore, are not stored.

To test your integration with Money Out, create transactions by sending a **POST** request, with your Test Access Token in the `Authorization` header and the `X-Test-Token:true` header, to the [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process) endpoint, and modify the `external_reference` field according to the status you want to obtain. You can see an example `curl` and a table with details about the different status below.  

----[mlb]----
### Withdrawals via Pix

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

### Withdrawals to bank accounts

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
> Important
>
> To learn how to send the remaining fields to execute this request, go to [Integration Configuration](/developers/en/docs/money-out/integration-configuration). 

| Value of `external_reference` | Response |
|---|---|
| `new` | A new transaction will be created, and the response will return the value `new` for the `status` field. |
| `failed_by_bank` | A new transaction will be created, this time rejected by the bank. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_bank`. |
| `failed_by_provider` | A new transaction will be created, this time rejected by the provider. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_provider`. |
| `failed_by_caps` | A new transaction will be created, this time rejected for non-compliance with Central Bank regulations. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_caps`. |
| `failed_other_reason` | A new transaction will be created, this time rejected for other reasons. The response will return the value `failed` for the `status` field, and the `status_detail` within the `from.accounts` object will be `other_reason`. |
| `failed_by_high_risk` | A new transaction will be created, this time rejected due to fraud risk. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `by_high_risk`. |
| `failed_by_compliance` | A new transaction will be created, this time rejected due to non-compliance with regulations. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `by_compliance`. |
| `failed_insufficient_funds` | A new transaction will be created, this time rejected due to insufficient funds in the source account. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `insufficient_funds`. |
| `partially_processed` | A new transaction will be created whose processing has not yet been completed. The response will return the value `partially_processed` for the `status` field. |
| `partially_processed_pending_bank` | A new transaction will be created whose processing has not yet been completed due to issues related to the destination account. The response will return the value `partially_processed` for the `status` field and the `status_detail` within the `from.accounts` object will be `pending_bank`. |
| `reverted` | A new transaction will be created, this time refunded. The response will return the value `reverted` for the `status` field and the `status_detail` within the `from.accounts` object will be `refunded`. |
| `partially_reverted_partially_refunded` | A new transaction will be created, this time partially refunded. The response will return the value `partially_reverted` for the `status` field and the `status_detail` within the `from.accounts` object will be `partially_refunded`. |
| `timeout` | A new transaction will be created that will exceed the time limit. The response will return the value `processed` for the `status` field, but it will arrive after 2 minutes. |
| `internal_server_error` | A new transaction will be created that will fail due to system errors. It will return an `Error 500`. |
| Any other value | New resources will be generated with a `status` of `processed`. |

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
> Important
>
> To learn how to send the remaining fields to execute this request, go to [Integration Configuration](/developers/en/docs/money-out/integration-configuration). 

| Value of `external_reference` | Response |
|---|---|
| `new` | A new transaction will be created, and the response will return the value `new` for the `status` field. |
| `failed_by_bank` | A new transaction will be created, this time rejected by the bank. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_bank`. |
| `failed_by_provider` | A new transaction will be created, this time rejected by the provider. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_provider`. |
| `failed_by_caps` | A new transaction will be created, this time rejected for non-compliance with Central Bank regulations. The response will return the value `failed` for the `status` field. The `status_detail` within the `from.accounts` object will be `by_caps`. |
| `failed_other_reason` | A new transaction will be created, this time rejected for other reasons. The response will return the value `failed` for the `status` field, and the `status_detail` within the `from.accounts` object will be `other_reason`. |
| `failed_by_high_risk` | A new transaction will be created, this time rejected due to fraud risk. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `by_high_risk`. |
| `failed_invalid_destination_account` | A new transaction will be created, this time rejected for entering incorrect destination account data. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `invalid_destination_account`. |
| `failed_by_compliance` | A new transaction will be created, this time rejected due to non-compliance with regulations. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `by_compliance`. |
| `failed_insufficient_funds` | A new transaction will be created, this time rejected due to insufficient funds in the source account. The response will return the value `failed` for the `status` field and the `status_detail` within the `from.accounts` object will be `insufficient_funds`. |
| `partially_processed` | A new transaction will be created whose processing has not yet been completed. The response will return the value `partially_processed` for the `status` field. |
| `partially_processed_pending_bank` | A new transaction will be created whose processing has not yet been completed due to issues related to the destination account. The response will return the value `partially_processed` for the `status` field and the `status_detail` within the `from.accounts` object will be `pending_bank`. |
| `reverted` | A new transaction will be created, this time refunded. The response will return the value `reverted` for the `status` field and the `status_detail` within the `from.accounts` object will be `refunded`. |
| `partially_reverted_partially_refunded` | A new transaction will be created, this time partially refunded. The response will return the value `partially_reverted` for the `status` field and the `status_detail` within the `from.accounts` object will be `partially_refunded`. |
| `timeout` | A new transaction will be created that will exceed the time limit. The response will return the value `processed` for the `status` field, but it will arrive after 2 minutes. |
| `internal_server_error` | A new transaction will be created that will fail due to system errors. It will return an `Error 500`. |
| Any other value | New resources will be generated with a `status` of `processed`. |

------------

> WARNING
>
> Important
>
> Once you have tested all possible scenarios and want to start making real transactions, [activate production credentials](/developers/en/docs/money-out/additional-content/your-integrations/credentials) and replace the test ones.