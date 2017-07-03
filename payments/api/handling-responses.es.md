# Manejo de respuestas para la creación de pagos y card tokens

Ofrece a tus clientes información clara y precisa ante posible errores en el ingreso de datos de la tarjeta y acerca del estado del pago realizado. Esto permitirá mejorar la conversión de tu checkout ya que el usuario sabrá si tiene que corregir algún dato o realizar alguna acción para finalizar de forma exitosa el proceso de pago.

## Al realizar un cobro

### Resultados de la creación de un cobro: `HTTP Status 201 OK`

|   status   |            status_detail             |                                                        Comunicación sugerida                                                        |
| :--------- | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| approved   | `accredited`                         | Listo, se acreditó tu pago! En tu resumen verás el cargo de amount como statement_descriptor.                                       |
| in_process | `pending_contingency`                | Estamos procesando el pago. <br/><br/> En menos de una hora te enviaremos por e-mail el resultado.                                       |
| in_process | `pending_review_manual`              | Estamos procesando el pago. <br/><br/> En menos de 2 días hábiles te diremos por e-mail si se acreditó o si necesitamos más información. |
| rejected   | `cc_rejected_bad_filled_card_number`   | Revisa el número de tarjeta.                                                                                                        |
| rejected   | `cc_rejected_bad_filled_date`          | Revisa la fecha de vencimiento.                                                                                                     |
| rejected   | `cc_rejected_bad_filled_other`         | Revisa los datos.                                                                                                                   |
| rejected   | `cc_rejected_bad_filled_security_code` | Revisa el código de seguridad.                                                                                                      |
| rejected   | `cc_rejected_blacklist`                | No pudimos procesar tu pago.                                                                                                        |
| rejected   | `cc_rejected_call_for_authorize`       | Debes autorizar ante `payment_method_id` el pago de amount a MercadoPago                                                            |
| rejected   | `cc_rejected_card_disabled`            | Llama a `payment_method_id` para que active tu tarjeta. <br/><br/> El teléfono está al dorso de tu tarjeta.                              |
| rejected   | `cc_rejected_card_error`               | No pudimos procesar tu pago.                                                                                                        |
| rejected   | `cc_rejected_duplicated_payment`       | Ya hiciste un pago por ese valor. <br/><br/> Si necesitas volver a pagar usa otra tarjeta u otro medio de pago.                          |
| rejected   | `cc_rejected_high_risk`                | Tu pago fue rechazado. <br/><br/>Elige otro de los medios de pago, te recomendamos con medios en efectivo.                               |
| rejected   | `cc_rejected_insufficient_amount`      | Tu `payment_method_id` no tiene fondos suficientes.                                                                                 |
| rejected   | `cc_rejected_invalid_installments`     | `payment_method_id` no procesa pagos en installments cuotas.                                                                        |
| rejected   | `cc_rejected_max_attempts`             | Llegaste al límite de intentos permitidos. <br/><br/>Elige otra tarjeta u otro medio de pago.                                            |
| rejected   | `cc_rejected_other_reason`             | `payment_method_id` no procesó el pago.                                                                                             |


### Errores de ingreso de datos: HTTP Status 400 Bad Request

|  Código |                            Descripción                             |              Comunicación sugerida               |
| :------ | :----------------------------------------------------------------- | :----------------------------------------------- |
| 205     | parameter cardNumber can not be null/empty                         | Ingresa el número de tu tarjeta.                 |
| 208     | parameter cardExpirationMonth can not be null/empty                | Elige un mes.                                    |
| 209     | parameter cardExpirationYear can not be null/empty                 | Elige un año.                                    |
| 212     | parameter docType can not be null/empty                            | Ingresa tu documento.                            |
| 213     | The parameter cardholder.document.subtype can not be null or empty | Ingresa tu documento.                            |
| 214     | parameter docNumber can not be null/empty                          | Ingresa tu documento.                            |
| 220     | parameter cardIssuerId can not be null/empty                       | Ingresa tu banco emisor.                         |
| 221     | parameter cardholderName can not be null/empty                     | Ingresa el nombre y apellido.                    |
| 224     | parameter securityCode can not be null/empty                       | Ingresa el código de seguridad.                  |
| E301    | invalid parameter cardNumber                                       | Hay algo mal en ese número. Vuelve a ingresarlo. |
| E302    | invalid parameter securityCode                                     | Revisa el código de seguridad.                   |
| 316     | invalid parameter cardholderName                                   | Ingresa un nombre válido.                        |
| 322     | invalid parameter docType                                          | Revisa tu documento.                             |
| 323     | invalid parameter cardholder.document.subtype                      | Revisa tu documento.                             |
| 324     | invalid parameter docNumber                                        | Revisa tu documento.                             |
| 325     | invalid parameter cardExpirationMonth                              | Revisa la fecha.                                 |
| 326     | invalid parameter cardExpirationYear                               | Revisa la fecha.                                 |
| default | (cualquier otro código de error)                                   | Revisa los datos.                                |

## Errores en la creación del token de tarjeta

De haber algún error en los datos de tarjeta, te lo informaremos con los siguientes códigos, de manera que puedas comunicar a tus usarios cuál es la situación y cómo corregirla.

|  status |                          status_detail                          |                                              Comunicación sugerida                                               |
| :------ | :-------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| 106     | Cannot operate between users from different countries           | No puedes realizar pagos a usuarios de otros países.                                                             |
| 109     | Invalid number of shares for this payment\_method\_id           | payment\_method\_id no procesa pagos en installments cuotas. <br/><br/> Elige otra tarjeta u otro medio de pago. |
| 126     | The action requested is not valid for the current payment state | No pudimos procesar tu pago.                                                                                     |
| 129     | Cannot pay this amount with this paymentMethod                  | payment\_method\_id no procesa pagos del monto seleccionado. <br/><br/> Elige otra tarjeta u otro medio de pago. |
| 145     | Invalid users involved                                          | No pudimos procesar tu pago.                                                                                     |
| 150     | The payer\_id cannot do payments currently                      | No puedes realizar pagos.                                                                                        |
| 151     | The payer\_id cannot do payments with this payment\_method\_id  | No puedes realizar pagos.                                                                                        |
| 160     | Collector not allowed to operate                                | No pudimos procesar tu pago.                                                                                     |
| 204     | Unavailable payment\_method                                     | payment\_method\_id no está disponible en este momento. <br/><br/> Elige otra tarjeta u otro medio de pago.      |
| 801     | Already posted the same request in the last minute              | Realizaste un pago similar hace instantes. <br/><br/> Intenta nuevamente en unos minutos.                        |
| default | (cualquier otro código de error)                                | No pudimos procesar tu pago.                                                                                     |
