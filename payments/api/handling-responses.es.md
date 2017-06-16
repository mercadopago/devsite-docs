# Manejo de respuestas

Resultados de la creación de un cobro: HTTP Status 201 OK

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
