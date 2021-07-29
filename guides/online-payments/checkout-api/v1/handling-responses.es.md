# Mensajes de respuesta

Ofrece a tus clientes información clara y precisa sobre los posibles errores en el ingreso de datos de la tarjeta o el estado del pago realizado. Esto permite notificarlos sobre qué acción pueden realizar para solucionarlo o comunicarles si tienen que realizar algún paso extra.

Por ejemplo, si la tarjeta no tiene saldo suficiente para la compra, puedes recomendarles que vuelva a intentar con otro medio de pago para completar la operación.

> NOTE
>
> Nota
>
> Para conocer información sobre los posibles errores, consulta la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).

## Resultados de creación de un cobro


| Estado | `status_detail` | Comunicación sugerida |
| --- | --- | --- |
| approved | `accredited` | ¡Listo! Se acreditó tu pago. En tu resumen verás el cargo de `amount` como `statement_descriptor`. |
| in_process | `pending_contingency` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó. |
| in_process | `pending_review_manual` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó o si necesitamos más información. |
| rejected | `cc_rejected_bad_filled_card_number` | Revisa el número de tarjeta. |
| rejected | `cc_rejected_bad_filled_date` | Revisa la fecha de vencimiento. |
| rejected | `cc_rejected_bad_filled_other` | Revisa los datos. |
| rejected | `cc_rejected_bad_filled_security_code` | Revisa el código de seguridad de la tarjeta. |
| rejected | `cc_rejected_blacklist` | No pudimos procesar tu pago. |
| rejected | `cc_rejected_call_for_authorize` | Debes autorizar ante `payment_method_id` el pago de `amount`. |
| rejected | `cc_rejected_card_disabled` | Llama a `payment_method_id` para activar tu tarjeta o usa otro medio de pago.<br/><br/>El teléfono está al dorso de tu tarjeta. |
| rejected | `cc_rejected_card_error` | No pudimos procesar tu pago. |
| rejected | `cc_rejected_duplicated_payment` | Ya hiciste un pago por ese valor.<br/><br/>Si necesitas volver a pagar usa otra tarjeta u otro medio de pago. |
| rejected | `cc_rejected_high_risk` | Tu pago fue rechazado.<br/><br/>Elige otro de los medios de pago, te recomendamos con medios en efectivo. |
| rejected | `cc_rejected_insufficient_amount` | Tu `payment_method_id` no tiene fondos suficientes. |
| rejected | `cc_rejected_invalid_installments` | `payment_method_id` no procesa pagos en `installments` cuotas. |
| rejected | `cc_rejected_max_attempts` | Llegaste al límite de intentos permitidos.<br/><br/>Elige otra tarjeta u otro medio de pago. |
| rejected | `cc_rejected_other_reason` | `payment_method_id` no procesó el pago. |

> CLIENT_SIDE
>
> h2
>
> Errores de ingreso de datos


| Código | Descripción | Comunicación sugerida |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Ingresa el número de tu tarjeta. |
| 208 | parameter cardExpirationMonth can not be null/empty | Elige un mes. |
| 209 | parameter cardExpirationYear can not be null/empty | Elige un año. |
| 212 | parameter docType can not be null/empty | Ingresa tu tipo de documento. |
| 213 | The parameter cardholder.document.subtype can not be null or empty | Ingresa tu documento. |
| 214 | parameter docNumber can not be null/empty | Ingresa tu documento. |
| 220 | parameter cardIssuerId can not be null/empty | Ingresa tu banco. |
| 221 | parameter cardholderName can not be null/empty | Ingresa el nombre y apellido. |
| 224 | parameter securityCode can not be null/empty | Ingresa el código de seguridad. |
| E301 | invalid parameter cardNumber | Ingresa un número de tarjeta válido. |
| E302 | invalid parameter securityCode | Revisa el código de seguridad. |
| 316 | invalid parameter cardholderName | Ingresa un nombre válido. |
| 322 | invalid parameter docType | El tipo de documento es inválido. |
| 323 | invalid parameter cardholder.document.subtype | Revisa tu documento. |
| 324 | invalid parameter docNumber | El documento es inválido. |
| 325 | invalid parameter cardExpirationMonth | El mes es inválido. |
| 326 | invalid parameter cardExpirationYear | El año es inválido. |
| default | Otro código de error | Revisa los datos. |

## Errores en la creación del token de tarjeta

| Estado | `status_detail` | Comunicación sugerida |
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

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/advanced-integration)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
