# Prueba de integración

Después de crear la validación Zero Dollar Auth, es importante realizar pruebas de integración para confirmar su funcionalidad. Para probar la validación, se requieren dos pasos:

* Generar un card token
* Validar la integración

## Generar un card token

Para probar la validación de Zero Dollar Auth, el primer paso es generar un token de tarjeta. Para ello, envía al endpoint /v1/card_tokens los parámetros descritos en la siguiente tabla y ejecuta la solicitud.

> WARNING
>
> Importante
>
> Es importante agregar el encabezado **X-Test-Token: true** a todos los curls de token de tarjeta, indicando a Payments para procesar elconsumo de ZDA en el ambiente de SandBox. Para aprobaciones, utiliza la tarjeta específica `4074090000000004` en el curl de token de tarjeta. Para simular rechazos, puedes utilizar cualquier otra tarjeta de prueba,


| Parámetro | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| card_number | String | Número de tarjeta | 4074090000000004 |
| expiration_month | Number | Mes de vencimiento | 02 |
| expiration_year | Number | Año de vencimento | 2031 |
| site_id | String | Sigla del país de origen de la solicitud | MLA |
| security_code | String | Código de seguridad | 123 |
| cardholder.name | String | Titular de la tarjeta | APRO |
| cardholder.identification.type | String | Tipo de documento | CPF |
| cardholder.identification.number | String | Número de documento | 15635614680 |

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
> Para poder realizar transacciones con datos de tarjeta abiertos, es necesario que el vendedor cumpla con los requisitos de [PCI Compliant](/developers/es/docs/security/pci). De lo contrario, estos datos no podrán ser procesados en el backend de su aplicación.

## Validar la integración

Como último paso, es necesario validar la integración utilizando el token obtenido en el paso anterior. Para ello, envía al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) los parámetros descritos en la tabla siguiente y ejecuta la solicitud.

| Parámetro | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| token | String | Token de tarjeta | 12346622341 |
| payment_method_id | String | Indica el identificador del medio de pago seleccionado para realizar el pago | master |
| payer.id | String | ID del pagador | 123456 | 
| payer.type | String | Tipo de identificación del pagador asociado | customer |
| description | Sting | Descripción de validación | "validación de tarjeta con valor zero dollar master crédito con cvv" |
| transaction_amount | Number | Costo de validación | Siempre cero (0) para Zero Dollar Auth |

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
        "id": "{{customer_id}}",
        "type" : "customer"
    },
    "description": "validação de cartão com valor zero dollar master crédito sem cvv",
    "transaction_amount": 0
}
```

