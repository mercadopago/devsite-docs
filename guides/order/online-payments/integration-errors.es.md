# Errores de integración

| Código | Descripción | Descripción |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Ingresa el número de tu tarjeta. |
| 208 | parameter expirationMonth can not be null/empty | Elige un mes. |
| 209 | parameter expirationYear can not be null/empty | Elige un año. |
| 212 | parameter docType can not be null/empty | Ingresa tu tipo de documento. |
| 213 | The parameter cardholder.document.subtype can not be null or empty | Ingresa tu documento. |
| 214 | parameter docNumber can not be null/empty | Ingresa tu documento. |
| 220 | parameter cardIssuerId can not be null/empty | Ingresa tu banco. |
| 221 | parameter cardholderName can not be null/empty | Ingresa el nombre y apellido. |
| 224 | parameter securityCode can not be null/empty | Ingresa el código de seguridad. |
| E203 | invalid parameter securityCode | Revisa el código de seguridad. |
| E301 | invalid parameter cardNumber | Ingresa un número de tarjeta válido. |
| 316 | invalid parameter cardholderName | Ingresa un nombre válido. |
| 322 | invalid parameter docType | El tipo de documento es inválido. |
| 323 | invalid parameter cardholder.document.subtype | Revisa tu documento. |
| 324 | invalid parameter docNumber | El documento es inválido. |
| 325 | invalid parameter expirationMonth | El mes es inválido. |
| 326 | invalid parameter expirationYear | El año es inválido. |
| default | Otro código de error | Revisa los datos. |

## Errores en la creación del token de tarjeta

| Estado | `status_detail` | Descripción |
| --- | --- | --- |
| 106 | Cannot operate between users from different countries | No puedes realizar pagos a otros países. |
| 109 | Invalid number of shares for this `payment_method_id` | `payment_method_id` no procesa pagos en `installments` cuotas.<br/><br/>Elige otra tarjeta u otro medio de pago. |
| 126 | The action requested is not valid for the current payment state | No pudimos procesar tu pago. |
| 129 | Cannot pay this amount with this paymentMethod | `payment_method_id` no procesa pagos del monto seleccionado.<br/><br/>Elige otra tarjeta u otro medio de pago. |
| 145 | Invalid users involved | Una de las partes con la que intentas hacer el pago es de prueba y la otra es usuario real. |
| 150 | The `payer_id` cannot do payments currently | No puedes realizar pagos. |
| 151 | The `payer_id` cannot do payments with this payment_method_id | No puedes realizar pagos. |
| 160 | Collector not allowed to operate | No pudimos procesar tu pago. |
| 204 | Unavailable `payment_method` | `payment_method_id` no está disponible en este momento.<br/><br/>Elige otra tarjeta u otro medio de pago. |
| 801 | Already posted the same request in the last minute | Realizaste un pago similar hace instantes.<br/><br/>Intenta de nuevo en unos minutos. |
| default | Otro código de error | No pudimos procesar tu pago. |