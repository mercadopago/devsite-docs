# Prueba de integración

Después de crear la validación de Zero Dollar Auth, es importante realizar pruebas de integración para confirmar su funcionalidad. Para probar la validación, es necesario seguir los siguientes pasos:

* Generar un Card Token
* Validar la integración

## Generar un token de tarjeta

Para probar la validación de Zero Dollar Auth, el primer paso es generar un Card Token. Para obtenerlo, utiliza nuestra biblioteca [Mercado Pago SDK JS](/developers/es/docs/sdks-library/landing) para capturar los datos de la tarjeta y generar el token.

Para obtener el token de tarjeta, utiliza los datos de prueba que te compartimos en la tabla a continuación.

> WARNING
>
> Importante
>
> Para simular **aprobaciones**, utiliza la tarjeta específica `4074090000000004`. Para simular **rechazos**, utiliza cualquier otra tarjeta.

| Valor a completar | Ejemplo |
|---|---|
| Número de tarjeta | 4074090000000004 |
| Mes de vencimiento | 02 |
| Año de vencimiento | 2031 |
| Código de seguridad | 123 |
| Titular de la tarjeta | APRO |
| Tipo de identificación. Puede ser uno de los siguientes:<br>CPF: Individual Taxpayer Registration, Brazil.<br>CNPJ: National Register of Legal Entities, Brazil.<br>CUIT: Unique Tax Identification Code, Argentina.<br>CUIL: Unique Labor Identification Code, Argentina.<br>DNI: National Identity Document, Argentina.<br>CURP: Single Population Registration Code, Mexico.<br>RFC: Federal Registry of Taxpayers, Mexico.<br>CC: Citizenship Card, Colombia.<br>RUT: Single Tax List, Chile.<br>CI: Identity Card, Uruguay. | CPF |
| Número de documento | 15635614680 |

> WARNING
>
> Importante
>
> Para poder realizar transacciones con datos de tarjeta abiertos, directamente en la llamada de API, necesario que el vendedor cumpla con los requisitos de [PCI Compliant](/developers/es/docs/security/pci). De lo contrario, estos datos no podrán ser procesados en el backend de su aplicación.

## Validar la integración

Como último paso, es necesario validar la integración utilizando el token obtenido en el paso anterior. Para ello, envía los parámetros que detallamos en la tabla a continuación al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud.

| Parámetro | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| token | String | Token de la tarjeta | 12346622341 |
| payment_method_id | String | Indica el identificador del medio de pago seleccionado para realizar el pago | master |
| payer.id | String | ID del pagador | 123456 |
| payer.type | String | Tipo de identificación del pagador asociado | customer |
| description | String | Descripción de la validación | "validación de tarjeta con valor cero dólar master crédito con cvv" |
| transaction_amount | Number | Costo de la validación | Siempre zero (0) para Zero Dollar Auth |

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
