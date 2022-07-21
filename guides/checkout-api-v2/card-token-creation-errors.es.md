# Errores en la creación del token de tarjeta

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