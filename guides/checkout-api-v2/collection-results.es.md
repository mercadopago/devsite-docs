# Resultados de creación de un cobro

| Estado | `status_detail` | Descripción |
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
| rejected | `cc_rejected_other_reason` | `payment_method_id` no procesó el pago. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | El pago fue rechazado porque el usuario no tiene habilitada la función crédito en su tarjeta múltiple (débito y crédito). | ------------