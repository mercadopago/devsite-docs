# Configuración de la integración

La integración de Money Out se realiza mediante la ejecución de un solo llamado a la API [v1/transaction-intents](https://api.mercadopago.com/v1/transaction-intents).  Así, la transacción se crea y procesa en un solo *request* y, si la ejecución es exitosa, el dinero estará disponible para ser retirado en la cuenta de destino, sin necesidad de llevar adelante etapas adicionales. 

----[mlb]----

Con Money Out, puedes enviar dinero de dos formas distintas: Pix, o transferencia a cuentas de dinero, sean cuentas bancarias o de Mercado Pago. Sigue las instrucciones a continuación para saber cómo realizar la integración en cada caso.

> WARNING
>
> Importante
>
> Para configurar la integración y probar su correcto funcionamiento antes de salir a producción, deberás utilizar tu **Access Token de pruebas**. 

## Configurar retiros vía Pix

Para integrar Money Out y permitir retiros de dinero vía Pix, deberás enviar un **POST** con tu **Access Token** en el *header* `Authorization` y tu **clave de idempotencia** en el *header* `X-Idempotency-Key` al endpoint [/v1/transaction-intents/process](/developers/es/reference/money-out/pix-transfer/post). Deberás enviar los parámetros correspondientes siguiendo las indicaciones de la tabla debajo.

> NOTE
>
> Nota
>
> Ten en cuenta que sólo se permite el envío de dinero a una cuenta de destino (`transaction.to`) por llamado. Además, la clave Pix del integrador debe haber sido previamente registrada, y aquella de la cuenta de destino debe estar activa.

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{idempotency_key}}' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7434*********159-03141*********cee51edf8*********f94f589-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": "{"type":"PSP_TRANSFER"}",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://ejemplo.com.br/notification"
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

| Campo | Descripción | Requerido/Opcional | Ejemplo |
|---|---|---|---|
| `x-signature` | *Header*. Firma de la solicitud con el cuerpo cifrado en base 64 con las claves pública y privada del integrador. Accede a la sección [Cifrado punta a punta](/developers/es/docs/money-out/end-to-end-encryption) si necesitas más información. | Requerido **sólo en el ambiente de producción**. | - |
| `x-enforce-signature` | *Header*. Booleano para indicar si el integrador enviará o no la firma.  | **No requerido** en ambiente de pruebas, y **requerido** en ambiente productivo, que es cuando es obligatorio enviar la firma. | - |
| `external_reference` | *Body*. String con una referencia para identificar la transacción. Es generada por el integrador y puede ser cualquier valor que permita hacer un seguimiento de las transacciones siempre que no tenga caracteres especiales (“”, [ ], (), @) y no exceda los 64 caracteres. Sí están permitidos números (1234), letras (abcde) y guiones medios y bajos (-; _). Su valor no puede ser duplicado con otras transacciones. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fijo. Siempre debe ser `{"type":"PSP_TRANSFER"}` | Requerido | `{"type":"PSP_TRANSFER"}` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. Este campo tiene un límite de 500 caracteres. | Opcional | http://ejemplo.com.br/notification |
| `transaction.from.accounts.amount` | *Body*. Valor de la transacción, que será retirado de la cuenta de origen `from`. El valor mínimo es 0, y el máximo, 10000000000. | Requerido | 100,00 |
| `transaction.to.accounts.type` | *Body*. Tipo de cuenta de destino. Los valores posibles son `current`, para cuentas Pix, y `mercadopago`, para cuentas Mercado Pago. | Requerido | `current` / `mercadopago` |
| `transaction.to.accounts.amount` | *Body*. Monto a enviar a la cuenta destino indicada en el `to`. Debe ser el mismo valor indicado para `from.accounts.amount`. | Requerido | 100,00 |
| `transaction.to.accounts.chave.type` | *Body*. Tipo de clave de identificación Pix. Debe ser un valor de entre los indicados en la columna “Ejemplo”. | Requerido | `EMAIL`, `PHONE`, `CPF`, `CNPJ`, `PIX_CODE` |
| `transaction.to.accounts.chave.value` | *Body*. Valor de la clave de identificación de la cuenta Pix seleccionada en el campo `chave.type`. | Requerido | 1234567890 |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificación del titular de la cuenta de destino. | Requerido | “CPF”<br>“CNPJ” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificación del titular de la cuenta de destino. | Requerido | 1234567890 |
| `transaction.total_amount `| *Body*. Monto total de la transacción. Debe ser el mismo valor indicado para `from.accounts.amount` y `to.accounts.amount` | Requerido | 100,00 |


Si la ejecución fue exitosa, recibirás automáticamente una respuesta con `status code 202`, que indica que la transacción fue aceptada. Puedes ver un ejemplo de respuesta exitosa a continuación:

```json
{
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "id": "0d5020ed",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": {
    "type": "{\"type\":\"PSP_TRANSFER\"}"
  },
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://example.com.br/notification"
    }
  },
  "status": "approved",
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "paid_amount": 100,
    "payer": {
      "id": 123456543
    },
    "refunded_amount": 1,
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "origin_id": "01AAAM001A1AY43FBR8WCM9CES",
          "status_details": [
            {}
          ],
          "owner": {
            "identification": {
              "number": "1234567890",
              "type": "CPF"
            }
          }
        }
      ]
    },
    "total_amount": 100,
    "statement_descriptor": "compra de prueba"
  }
}
```

| Atributo | Descripción |
|---|---|
| `created_date` | Fecha de creación de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ.|
| `external_reference` | Referencia externa de la transacción, que fue generada por el integrador al momento de crearla. |
| `id` | Identificador único de la transacción, generado automáticamente. |
| `last_updated_date` | Última actualización del estado de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ. |
| `point_of_interaction.type` | Punto de interacción. Es un valor fijo, siempre `{"type":"PSP_TRANSFER"}`. |
| `seller_configuration.notification_info.notification_url` | URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. |
| `status` | Estado de la transacción. Para conocer los posibles estados, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.from.accounts.amount` | Monto debitado de la cuenta Mercado Pago de origen. |
| `transaction.paid_amount` | Monto total cobrado al titular de la cuenta de origen. Será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado en `refunded_amount` |
| `transaction.payer.id` | Identificador del integrador titular de la cuenta de origen. |
| `transaction.refunded_amount` | En caso de un reembolso, indicará el monto total reembolsado al titular de la cuenta de origen. Si no hubo ningún reembolso, su valor será 0. |
| `transaction.to.accounts.amount` | Monto transferido a la cuenta de destino. Su valor será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado este último en el campo `transaction.refunded_amount`. |
| `transaction.to.accounts.origin_id` | Identificador que permite rastrear la transacción dentro del sistema bancario. |
| `transaction.to.accounts.amount.status_detail` | Información detallada del estado de la transacción. Para conocer los posibles `status_detail`, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.to.accounts.owner.identification.number` | Número identificador del titular de la cuenta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificación del titular de la cuenta. |
| `transaction.total_amount` | Monto total de la transacción. |
| `transaction.statement_descriptor` | Mensaje adicional a la transacción. |


## Configurar retiros para cuentas bancarias

Para integrar Money Out con destino a cuentas bancarias, primero obtén el listado de los bancos disponibles para realizar la transacción. Para hacerlo, envía un **GET** con tu Access Token al siguiente endpoint: 

```curl
curl --request GET \
  --url https://api.mercadopago.com/open-banking/payments/v1/banks \
  --header 'Authorization: Bearer <ENV_ACCESS_TOKEN>'
```

Luego, si el banco al que pertenece la cuenta de destino está disponible para realizar la transacción, deberás enviar un **POST** con tu **Access Token** en el *header* `Authorization` y tu **clave de idempotencia** en el *header* `X-Idempotency-Key` al endpoint [/v1/transaction-intents/process](/developers/es/reference/money-out/bank-transfer-mlb/post). Deberás enviar los parámetros correspondientes siguiendo las indicaciones de la tabla debajo.

> NOTE
>
> Nota
>
> Ten en cuenta que sólo se permite el envío de dinero a una cuenta de destino (`transaction.to`) por llamado.

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{idempotency_key}}' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7434*********159-03141*********cee51edf8*********f94f589-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": {"type":"PSP_TRANSFER"},
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://ejemplo.com.br/notification"
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

| Campo | Descripción | Requerido/Opcional | Ejemplo |
|---|---|---|---|
| `x-signature` | *Header*. Firma de la solicitud con el cuerpo cifrado en base 64 con las claves pública y privada del integrador. Accede a la sección [Cifrado punta a punta](/developers/es/docs/money-out/end-to-end-encryption) si necesitas más información. | Requerido **sólo en el ambiente de producción**. | - |
| `x-enforce-signature` | *Header*. Booleano para indicar si el integrador enviará o no la firma.  | **No requerido** en ambiente de pruebas, y **requerido** en ambiente productivo, que es cuando es obligatorio enviar la firma. | - |
| `external_reference` | *Body*. String con una referencia para identificar la transacción. Es generada por el integrador y puede ser cualquier valor que permita hacer un seguimiento de las transacciones siempre que no tenga caracteres especiales (“”, [ ], (), @) y no exceda los 64 caracteres. Sí están permitidos números (1234), letras (abcde) y guiones medios y bajos (-; _). Su valor no puede ser duplicado con otras transacciones. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fijo. Siempre debe ser `{"type":"PSP_TRANSFER"}` | Requerido | `{"type":"PSP_TRANSFER"}` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. Este campo tiene un límite de 500 caracteres. | Opcional | http://ejemplo.com.br/notification |
| `transaction.from.accounts.amount` | *Body*. Valor de la transacción, que será retirado de la cuenta de origen `from`. El valor mínimo es 0, y el máximo, 10000000000. | Requerido | 100,00 |
| `transaction.to.accounts.type` | *Body*. Tipo de cuenta de destino. Los valores posibles son `current`, para cuentas bancarias, y `mercadopago`, para cuentas Mercado Pago. | Requerido | `current` / `mercadopago` |
| `transaction.to.accounts.amount` | *Body*. Monto a enviar a la cuenta destino indicada en el `to`. Debe ser el mismo valor indicado para `from.accounts.amount`. | Requerido | 100,00 |
| `transaction.to.accounts.bank_id` | *Body*. Número *Identificador do Sistema de Pagamento Brasileiro* (ISPB) del banco al que pertenece la cuenta de destino. | Requerido | 99999004 |
| `transaction.to.accounts.branch` | *Body*. Número de agencia del banco receptor al que pertenece la cuenta de destino. | Requerido | 0001 |
| `transaction.to.accounts.holder` | *Body*. Nombre y apellido del titular de la cuenta de destino. | Requerido | John Doe |
| `transaction.to.accounts.provider_id` | *Body*. Identificador del proveedor de la cuenta de destino. El único valor posible es `spi`, identificador del Sistema de Pagos Instantáneos. | Requerido | `spi` |
| `transaction.to.accounts.currency_id` | *Body*. Identificador de la moneda utilizada en la transacción. El único valor posible es `BRL`. | Requerido | `BRL` |
| `transaction.to.accounts.number` | *Body*. Número único que representa la cuenta bancaria de destino. | Requerido | `10266732` |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificación del titular de la cuenta de destino. | Requerido | “CPF”<br>“CNPJ” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificación del titular de la cuenta de destino. | Requerido | 1234567890 |
| `transaction.total_amount `| *Body*. Monto total de la transacción. Debe ser el mismo valor indicado para `from.accounts.amount` y `to.accounts.amount` | Requerido | 100,00 |

Si la ejecución fue exitosa, recibirás una respuesta con `status code 202`, que indica que la transacción fue aceptada, como en el ejemplo a continuación. 

> WARNING
>
> Importante
> 
> Ten en cuenta que esta respuesta puede tardar unos segundos y que, en caso de que su `status` sea `pending`, deberás ejecutar el llamado para [Obtener información sobre una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_obtener_información_sobre_una_transacción) para verificar su actualización.

```json
{
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "id": "0d5020ed",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": {
    "type": "{\"type\":\"PSP_TRANSFER\"}"
  },
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://example.com.br/notification"
    }
  },
  "status": "approved",
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "paid_amount": 100,
    "payer": {
      "id": 123456543
    },
    "refunded_amount": 1,
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "origin_id": "01AAAM001A1AY43FBR8WCM9CES",
          "status_details": [
            {}
          ],
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
    "total_amount": 100,
    "statement_descriptor": "cobro de prueba"
  }
}
```

| Atributo | Descripción |
|---|---|
| `created_date` | Fecha de creación de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ. |
| `external_reference` | Referencia externa de la transacción, que fue generada por el integrador al momento de crearla. |
| `id` | Identificador único de la transacción, generado automáticamente. |
| `last_updated_date` | Última actualización del estado de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ. |
| `point_of_interaction.type` | Punto de interacción. Es un valor fijo, siempre `{"type":"PSP_TRANSFER"}`. |
| `seller_configuration.notification_info.notification_url` | URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. |
| `status` | Estado de la transacción. Para conocer los posibles estados, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.from.accounts.amount` | Monto debitado de la cuenta Mercado Pago de origen. |
| `transaction.paid_amount` | Monto total cobrado al titular de la cuenta de origen. Será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado en `refunded_amount` |
| `transaction.payer.id` | Identificador del integrador titular de la cuenta de origen. |
| `transaction.refunded_amount` | En caso de un reembolso, indicará el monto total reembolsado al titular de la cuenta de origen. Si no hubo ningún reembolso, su valor será 0. |
| `transaction.to.accounts.amount` | Monto transferido a la cuenta de destino. Su valor será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado este último en el campo `transaction.refunded_amount`. |
| `transaction.to.accounts.origin_id` | Identificador que permite rastrear la transacción dentro del sistema bancario. |
| `transaction.to.accounts.amount.status_detail` | Información detallada del estado de la transacción. Para conocer los posibles `status_detail`, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.to.accounts.owner.identification.number` | Número identificador del titular de la cuenta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificación del titular de la cuenta. |
| `transaction.to.accounts.bank_id` | Número identificador del banco al que pertence la cuenta de destino. |
| `transaction.to.accounts.type` | Tipo de cuenta de destino. |
| `transaction.to.accounts.number` | Número único que representa la cuenta de destino. |
| `transaction.total_amount` | Monto total de la transacción. |
| `transaction.statement_descriptor` | Mensaje adicional a la transacción. |
------------ 

----[mlc]---- 
> WARNING
>
> Importante
>
> Para configurar la integración y probar su correcto funcionamiento antes de salir a producción, deberás utilizar tu **Access Token de pruebas**. 

Para integrar Money Out con destino a cuentas bancarias, deberás enviar un **POST** con tu **Access Token** en el *header* `Authorization` y tu clave de idempotencia en el *header* `X-Idempotency-Key` al endpoint [/v1/transaction-intents/process](/developers/es/reference/money-out/bank-transfer-mlc/post). Deberás enviar los parámetros correspondientes siguiendo las indicaciones de la tabla debajo.

> NOTE
>
> Nota
>
> Ten en cuenta que sólo se permite el envío de dinero a una cuenta de destino (`transaction.to`) por llamado.

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/transaction-intents/process'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{idempotency_key}}' \
       -H 'x-Signature: true' \
       -H 'x-enforce-signature: false' \
       -H 'Authorization: Bearer TEST-7719*********832-03141*********ec9309854*********f1e54b5-1*********' \
    -d '{
  "external_reference": "MP0001",
  "point_of_interaction": "{"type":"PSP_TRANSFER"}",
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://ejemplo.cl/notification"
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

| Campo | Descripción | Requerido/Opcional | Ejemplo |
|---|---|---|---|
| `x-signature` | *Header*. Firma de la solicitud con el cuerpo cifrado en base 64 con las claves pública y privada del integrador. Accede a la sección [Cifrado punta a punta](/developers/es/docs/money-out/end-to-end-encryption) si necesitas más información. | Requerido **sólo en el ambiente de producción**. | - |
| `x-enforce-signature` | *Header*. Booleano para indicar si el integrador enviará o no la firma.  | **No requerido** en ambiente de pruebas, y **requerido** en ambiente productivo, que es cuando es obligatorio enviar la firma. | - |
| `external_reference` | *Body*. String con una referencia para identificar la transacción. Es generada por el integrador y puede ser cualquier valor que permita hacer un seguimiento de las transacciones siempre que no tenga caracteres especiales (“”, [ ], (), @) y no exceda los 64 caracteres. Sí están permitidos números (1234), letras (abcde) y guiones medios y bajos (-; _). Su valor no puede ser duplicado con otras transacciones. | Opcional | MP0001 |
| `point_of_interaction.type` | *Body*. Valor fijo. Siempre debe ser `{"type":"PSP_TRANSFER"}` | Requerido | `{"type":"PSP_TRANSFER"}` |
| `seller_configuration.notification_info.notification_url` | *Body*. URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. Este campo tiene un límite de 500 caracteres. | Opcional | http://ejemplo.cl/notification |
| `transaction.from.accounts.amount` | *Body*. Valor de la transacción, que será retirado de la cuenta de origen `from`. El valor mínimo es 0, y el máximo, 10000000000. | Requerido | 100,00 |
| `transaction.to.accounts.amount` | *Body*. Monto a enviar a la cuenta destino indicada en el `to`. Debe ser el mismo valor indicado para `from.accounts.amount`. | Requerido | 100,00 |
| `transaction.to.accounts.bank_id` | *Body*. Número identificador del banco al que pertenece la cuenta de destino. | Requerido | 99999004 |
| `transaction.to.accounts.type` | *Body*. Tipo de cuenta de destino. Los valores posibles son `current`, para cuentas bancarias, y `mercadopago`, para cuentas Mercado Pago. | Requerido | `current` / `mercadopago` |
| `transaction.to.accounts.number` | *Body*. Número único que representa la cuenta bancaria de destino. | Requerido | `10266732` |
| `transaction.to.accounts.owner.identification.type` | *Body*. Tipo de identificación del titular de la cuenta de destino. | Requerido | “RUT” |
| `transaction.to.accounts[n].owner.identification.number` | *Body*. Número de identificación del titular de la cuenta de destino. | Requerido | 1234567890 |
| `transaction.total_amount `| Body. Monto total de la transacción. Debe ser el mismo valor indicado para `from.accounts.amount` y `to.accounts.amount` | Requerido | 100,00 |

Si la ejecución fue exitosa, recibirás una respuesta con `status code 202`, que indica que la transacción fue aceptada, como en el ejemplo a continuación. 

> WARNING
>
> Importante
> 
> Ten en cuenta que esta respuesta puede tardar unos segundos y que, en caso de que su `status` sea `pending`, deberás ejecutar el llamado para [Obtener información sobre una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_obtener_información_sobre_una_transacción) para verificar su actualización.

```json
{
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "id": "0d5020ed",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": {
    "type": "{\"type\":\"PSP_TRANSFER\"}"
  },
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://example.cl/notification"
    }
  },
  "status": "approved",
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "paid_amount": 100,
    "payer": {
      "id": 123456543
    },
    "refunded_amount": 1,
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "origin_id": "01AAAM001A1AY43FBR8WCM9CES",
          "status_details": [
            {}
          ],
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
    "total_amount": 100,
    "statement_descriptor": "cobro de prueba"
  }
}
```

| Atributo | Descripción |
|---|---|
| `created_date` | Fecha de creación de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ. |
| `external_reference` | Referencia externa de la transacción, que fue generada por el integrador al momento de crearla. |
| `id` | Identificador único de la transacción, generado automáticamente. |
| `last_updated_date` | Última actualización del estado de la transacción. Será devuelto en formato AAAA-MM-DDTHH:MM:SS.SSSZ. |
| `point_of_interaction.type` | Punto de interacción. Es un valor fijo, siempre `{"type":"PSP_TRANSFER"}`. |
| `seller_configuration.notification_info.notification_url` | URL en la que se recibirán las notificaciones de los eventos relacionados a la transacción, como sus cambios de estado. |
| `status` | Estado de la transacción. Para conocer los posibles estados, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.from.accounts.amount` | Monto debitado de la cuenta Mercado Pago de origen. |
| `transaction.paid_amount` | Monto total cobrado al titular de la cuenta de origen. Será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado en `refunded_amount`. |
| `transaction.payer.id` | Identificador del integrador titular de la cuenta de origen. |
| `transaction.refunded_amount` | En caso de un reembolso, indicará el monto total reembolsado al titular de la cuenta de origen. Si no hubo ningún reembolso, su valor será 0. |
| `transaction.to.accounts.amount` | Monto transferido a la cuenta de destino. Su valor será igual a `from.accounts.amount`, salvo que haya habido un reembolso total o parcial, indicado este último en el campo `transaction.refunded_amount`. |
| `transaction.to.accounts.origin_id` | Identificador que permite rastrear la transacción dentro del sistema bancario. |
| `transaction.to.accounts.amount.status_detail` | Información detallada del estado de la transacción. Para conocer los posibles `status_detail`, dirígete a [Posibles estados de una transacción](/developers/es/docs/money-out/integration-configuration#bookmark_posibles_estados_de_una_transacción). |
| `transaction.to.accounts.owner.identification.number` | Número identificador del titular de la cuenta de destino. |
| `transaction.to.accounts.owner.identification.type` | Tipo de identificación del titular de la cuenta. |
| `transaction.to.accounts.bank_id` | Número identificador del banco al que pertence la cuenta de destino. |
| `transaction.to.accounts.type` | Tipo de cuenta de destino. |
| `transaction.to.accounts.number` | Número único que representa la cuenta de destino. |
| `transaction.total_amount` | Monto total de la transacción. |
| `transaction.statement_descriptor` | Mensaje adicional a la transacción. |

------------

## Configurar notificaciones

Para poder mantenerte al tanto de los estados de tus transacciones, debes configurar las [notificaciones Webhooks](/developers/es/docs/money-out/additional-content/your-integrations/notifications/webhooks). Se trata de mensajes enviados por el servidor de Mercado Pago ante eventos que suceden en tu aplicación. Específicamente para el caso de Money Out, estos eventos pueden ser, o bien la creación de una transacción, o las actualizaciones de estado que la misma atraviese durante su procesamiento. 

Puedes **configurar tus notificaciones Webhooks al realizar el llamado para crear una transacción**, a través del campo `notification_url`. Sólo debes completarlo con aquella URL en la cual quieras recibir tus actualizaciones. 

Puedes ver ejemplos de los mensajes que recibirás al registrarse un evento a continuación.

#### - Mensaje ante la creación de una transacción

```json
{
  "action": "transaction_intent.created",
  "api_version": "v1",
  "data": {
    "id": "1108917506-01GGTH198RP0K71H133EK9BJAT" // ID del transaction intent
  },
  "date_created": "2022-11-01T17:19:53.915-04:00",
  "id": "103686924004", // ID de la notificacion
  "last_updated": "0001-01-01T00:00:00Z",
  "status": "new",
  "type": "transaction_intent"
}
```

#### - Mensaje ante una actualización de una transacción

```json
{
  "action": "transaction_intent.updated",
  "api_version": "v1",
  "data": {
    "id": "1108917506-01GGTH198RP0K71H133EK9BJAT" // ID del transaction intent
  },
  "date_created": "2022-11-01T17:19:53.915-04:00",
  "id": "103686918006", // ID de la notificacion
  "last_updated": "2022-11-01T17:19:55.001-04:00",
  "status": "partially_processed",
  "type": "transaction_intent"
}
```

El atributo `data.id` corresponde al ID de la transacción sobre la que se te está notificando, el parámetro `id` será el identificador de la notificación, y `status` te informará, o bien la creación de la transacción, o bien la actualización del estado de la misma.


### Acciones necesarias después de recibir la notificación

Cuando recibes una notificación en tu plataforma debes, primero, validar la información del recurso notificado. Para eso, ejecuta el request para [Obtener información sobre una transacción](/developers/es/reference/money-out/get-transaction/get) utilizando el ID de la transacción que te fue notificada. 

Una vez contrastados y validados los datos de la transacción, Mercado Pago espera una respuesta para asegurarse que la notificación fue recibida correctamente. Para eso, debes devolver un `HTTP STATUS 200 (OK)` o `201 (CREATED)` a la URL enviada en el campo `notification_url`. Si no se envía esta respuesta, se entenderá que no has recibido la notificación y se realizará un nuevo intento de envío hasta que se reciba la respuesta.

En la siguiente tabla puedes encontrar los principales eventos, plazos y tiempo de espera para recibir nuevos intentos de notificación.

| Evento | Plazo después del primer envío | Tiempo de espera de confirmación |
|---|---|---|
| Envío | - | 22 segundos |
| Primer intento | 15 minutos | 5 segundos |
| Segundo intento | 30 minutos | 5 segundos |
| Tercer intento | 6 horas | 5 segundos |
| Cuarto intento | 48 horas | 5 segundos |
| Quinto intento | 96 horas | 5 segundos |


## Obtener información sobre una transacción
Si lo deseas, puedes obtener información sobre una transacción. Esto puede ser útil para corroborar que la misma fue creada correctamente, para consultar su `status`, o para verificar la información recibida en tus notificaciones.

Para hacerlo, envía un **GET** con tu Access Token al endpoint [/v1/transaction-intents//{{transaction_intent_id}}](https://api.mercadopago.com/v1/transaction-intents/{id}), reemplazando `transaction_intent_id`  por el ID obtenido en la respuesta al momento de crear la transacción.

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/transaction-intents/{{transaction_intent_id}}' \
--header 'Authorization: Bearer {{access_token}}'
``` 

Si los datos enviados en el llamado son correctos, recibirás una respuesta como la siguiente:

```json
{
  "created_date": "2021-01-01T00:00:00.000Z",
  "external_reference": "123456",
  "id": "0d5020ed",
  "last_updated_date": "2021-01-01T00:00:00.000Z",
  "point_of_interaction": {
    "type": "{\"type\":\"PSP_TRANSFER\"}"
  },
  "seller_configuration": {
    "notification_info": {
      "notification_url": "http://example.cl/notification"
    }
  },
  "status": "approved",
  "transaction": {
    "from": {
      "accounts": [
        {
          "amount": "100,00"
        }
      ]
    },
    "paid_amount": 100,
    "payer": {
      "id": 123456543
    },
    "refunded_amount": 1,
    "to": {
      "accounts": [
        {
          "amount": "100,00",
          "origin_id": "01AAAM001A1AY43FBR8WCM9CES",
          "status_details": [
            {}
          ],
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
    "total_amount": 100,
    "statement_descriptor": "test"
  }
}
```

Para conocer los detalles de cada atributo devuelto, consulta la respuesta a [Configurar retiros](/developers/es/docs/money-out/integration-configuration#bookmark_integration_configuration).


### Posibles estados de una transacción

Cuando creas una transacción, o bien cuando consultas información relativa a ella, las respuestas te devolverán dos campos que te permitirán conocer el estado en el que se encuentra.

Por un lado, el campo `status` te brindará información respecto al estado actual del procesamiento. Por otro, el campo `status_detail`, que encontrarás como atributo de `transaction.to.accounts`, te permitirá conocer los motivos o detalles que dieron como resultado ese estado. 

A continuación puedes ver todos los estados por los que puede pasar una transacción durante su procesamiento.

| `status` | `status_detail` | Descripción |
|---|---|---|
| `approved` | `approved` | El procesamiento de la transacción se realizó de manera exitosa. |
| `approved` | `partially_refunded` | La transacción fue reembolsada parcialmente por el banco de destino. |
| `in_process` | `pending_authorized` | La transacción está en proceso, pendiente de estado final, y aguarda autorización. |
| `in_process` | `pending_bank` | El banco destino no dio respuesta, por lo que la transacción está pendiente de estado final. |
| `refunded` | `refunded` | La transacción fue reembolsada por el banco de destino. |
| `rejected` | `by_bank` | El banco de destino rechazó la transferencia. Realiza nuevamente el llamado. |
| `rejected` | `by_provider` | El proveedor rechazó la transferencia. Realiza nuevamente el llamado. |
| `rejected` | `high_risk` | La transacción es rechazada por riesgo de fraude. Realiza nuevamente el llamado. |
| `rejected` | `insufficient_funds` | Transacción rechazada por fondos insuficientes en la cuenta de origen. Realiza nuevamente el llamado. |
| `rejected` | `other_reason` | Transacción rechazada por defecto debido a problemas internos durante su procesamiento. Realiza nuevamente el llamado. |
| `rejected` | `review_manual` | La transacción es rechazada y encaminada a prevención al fraude para análisis. Realiza nuevamente el llamado. |
