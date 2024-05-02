# Prueba de integración

Antes de salir a producción, recomendamos probar el correcto funcionamiento de tu integración y del procesamiento de las transacciones. Esto te permitirá verificar si la integración se realizó correctamente y si los pagos se están procesando sin errores.

> WARNING
>
> Importante
>
> Para probar el correcto funcionamiento de tu integración antes de salir a producción, deberás utilizar tu **Access Token de pruebas**. 

La prueba de integración de Money Out consiste en la creación de transacciones con estados predefinidos. Estos estados se definirán en función del valor que envíes para el campo `external_reference`. Es decir, enviarás los datos para crear una transacción en función del `status` que quieres obtener como respuesta y, de esta manera, podrás constatar si el procesamiento está sucediendo correctamente. 

Todas las transacciones creadas en este entorno son transitorias y, por eso, no son almacenadas.

Para probar tu integración con  Money Out, crea transacciones enviando un **POST**, con tu Access Token de pruebas en el *header* `Authorization` y el *header* `X-Test-Token:true`, al endpoint [/v1/transaction-intents/process](https://api.mercadopago.com/v1/transaction-intents/process), y modifica el campo `external_reference` de acuerdo al estado que quieras obtener. Puedes ver un `curl` de ejemplo y la tabla con los detalles sobre los distintos estados a continuación.  

----[mlb]----
### Retiros vía Pix

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

### Retiros a cuentas bancarias

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
> Para saber cómo enviar los campos restantes para ejecutar este *request*, dirígete a [Configuración de la integración](). 

| Valor del campo `external_reference` | Respuesta |
|---|---|
| `new` | Se creará una nueva transacción y la respuesta devolverá el valor `new` para el campo `status`. |
| `failed_by_bank` | Se creará una nueva transacción, esta vez rechazada por el banco. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_bank`. |
| `failed_by_provider` | Se creará una nueva transacción, esta vez rechazada por el proveedor. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_provider`. |
| `failed_by_caps` | Se creará una nueva transacción, esta vez rechazada por incumplir con normativas del Banco Central. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_caps`. |
| `failed_other_reason` | Se creará una nueva transacción, esta vez rechazada por otras razones. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `other_reason`. |
| `failed_by_high_risk` | Se creará una nueva transacción, esta vez rechazada por riesgo de fraude. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `by_high_risk`. |
| `failed_by_compliance` | Se creará una nueva transacción, esta vez rechazada por incumplimiento de normativas. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `by_compliance`. |
| `failed_insufficient_funds` | Se creará una nueva transacción, esta vez rechazada por no disponer de fondos en la cuenta de origen. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `insufficient_funds`. |
| `partially_processed` | Se creará una nueva transacción cuyo procesamiento todavía no fue completado. La respuesta devolverá el valor `partially_processed` para el campo `status`.  |
| `partially_processed_pending_bank` | Se creará una nueva transacción cuyo procesamiento todavía no fue completado por motivos relativos a la cuenta de destino. La respuesta devolverá el valor `partially_processed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `pending_bank`. |
| `reverted` | Se creará una nueva transacción, esta vez reembolsada. La respuesta devolverá el valor `reverted` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `refunded`. |
| `partially_reverted_partially_refunded` | Se creará una nueva transacción, esta vez parcialmente reembolsada. La respuesta devolverá el valor `partially_reverted` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `partially_refunded`. |
| `timeout` | Se creará una nueva transacción que excederá el tiempo de espera. La respuesta devolverá el valor `processed` para el campo `status`, pero llegará al cabo de 2 minutos. |
| `internal_server_error` | Se creará una nueva transacción que fallará por errores del sistema. Devolverá un `Error 500`. |
| Cualquier otro valor | Se generarán nuevos recursos con `status` `processed`. |

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
> Para saber cómo enviar los campos restantes para ejecutar este *request*, dirígete a [Configuración de la integración](). 

| Valor del campo `external_reference` | Respuesta |
|---|---|
| `new` | Se creará una nueva transacción y la respuesta devolverá el valor `new` para el campo `status`. |
| `failed_by_bank` | Se creará una nueva transacción, esta vez rechazada por el banco. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_bank`. |
| `failed_by_provider` | Se creará una nueva transacción, esta vez rechazada por el proveedor. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_provider`. |
| `failed_by_caps` | Se creará una nueva transacción, esta vez rechazada por incumplir con normativas del Banco Central. La respuesta devolverá el valor `failed` para el campo `status`. El `status_detail` dentro del objeto `from.accounts` será `by_caps`. |
| `failed_other_reason` | Se creará una nueva transacción, esta vez rechazada por otras razones. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `other_reason`. |
| `failed_by_high_risk` | Se creará una nueva transacción, esta vez rechazada por riesgo de fraude. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `by_high_risk`. |
| `failed_invalid_destination_account` | Se creará una nueva transacción, eesta vez rechazada por haber introducido datos incorrectos de la cuenta de destino. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `invalid_destination_account`. |
| `failed_by_compliance` | Se creará una nueva transacción, esta vez rechazada por incumplimiento de normativas. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `by_compliance`. |
| `failed_insufficient_funds` | Se creará una nueva transacción, esta vez rechazada por no disponer de fondos en la cuenta de origen. La respuesta devolverá el valor `failed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `insufficient_funds`. |
| `partially_processed` | Se creará una nueva transacción cuyo procesamiento todavía no fue completado. La respuesta devolverá el valor `partially_processed` para el campo `status`.  |
| `partially_processed_pending_bank` | Se creará una nueva transacción cuyo procesamiento todavía no fue completado por motivos relativos a la cuenta de destino. La respuesta devolverá el valor `partially_processed` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `pending_bank`. |
| `reverted` | Se creará una nueva transacción, esta vez reembolsada. La respuesta devolverá el valor `reverted` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `refunded`. |
| `partially_reverted_partially_refunded` | Se creará una nueva transacción, esta vez parcialmente reembolsada. La respuesta devolverá el valor `partially_reverted` para el campo `status` y el `status_detail` dentro del objeto `from.accounts` será `partially_refunded`. |
| `timeout` | Se creará una nueva transacción que excederá el tiempo de espera. La respuesta devolverá el valor `processed` para el campo `status`, pero llegará al cabo de 2 minutos. |
| `internal_server_error` | Se creará una nueva transacción que fallará por errores del sistema. Devolverá un `Error 500`. |
| Cualquier otro valor | Se generarán nuevos recursos con `status` `processed`. |

------------

> WARNING
>
> Importante
>
> Cuando hayas probado todos los escenarios posibles y quieras comenzar a realizar transacciones reales, [activa las credenciales de producción](developers/es/docs/checkout-api/additional-content/your-integrations/credentials) y reemplaza las de prueba.