# Estado del pedido

| Estado | `status_detail` | Descripción |
| --- | --- | --- |
| approved | `accredited` | ¡Listo! Se acreditó tu pago. En tu resumen verás el cargo de `amount` como `statement_descriptor`. |
| approved | `partially_refunded` | El pago se realizó con al menos un reembolso parcial. |
| authorized | `pending_capture` | El pago fue autorizado y está a la espera de [ser capturado](/developers/es/docs/checkout-api/payment-management/capture-authorized-payment). |
| in_process | `offline_process` | Por una falta de procesamiento online, el pago está siendo procesado de manera offline. |
| in_process | `pending_contingency` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó. |
| in_process | `pending_review_manual` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó o si necesitamos más información. |
| pending | `pending_waiting_transfer` | Para los casos de transferencia bancaria, este `status_detail` se obtiene al esperar a que el usuario termine el proceso de pago en su banco. |
| pending | `pending_waiting_payment` | Para los casos de pagos offline, el mismo queda pendiente hasta que el usuario realice el pago. |
| pending | `pending_challenge` | Para los casos de pagos con tarjeta de crédito, hay una confirmación pendiente a causa de un challenge. |
| cancelled | `expired` | El pago fue cancelado luego de haber estado 30 días en un estado pendiente.| 
| cancelled | `by_collector` | El pago fue cancelado por el collector.| 
| cancelled | `by_payer` | El pago fue cancelado por el pagador.|
| charged_back | `settled` | El dinero fue retenido luego de un proceso de contracargo.|
| charged_back | `reimbursed` | El dinero fue devuelto luego de un proceso de contracargo.|
| charged_back | `in_process` | El pago está en proceso de ser recuperado debido a un desconocimiento por parte del pagador.|
| refunded | `refunded` | El pago fue devuelto por el collector.|
| refunded | `by_admin` | El pago fue devuelto por el administrador.|
| rejected | `bank_error` | Si el medio de pago es transferencia bancaria, el pago fue rechazado por un error con el banco. |
| rejected | `cc_rejected_3ds_challenge` | Pago rechazado por no superar el challenge 3DS. |
| rejected | `cc_rejected_3ds_mandatory` | Pago rechazado por no tener el challenge 3DS cuando es obligatorio. |
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
| rejected | `cc_rejected_invalid_installments` | `payment_method_id` no procesa pagos en `installments` (cuotas/meses). |
| rejected | `cc_rejected_max_attempts` | Llegaste al límite de intentos permitidos.<br/><br/>Elige otra tarjeta u otro medio de pago. |
| rejected | `cc_rejected_other_reason` | `payment_method_id` no procesó el pago. | 
| rejected | `cc_amount_rate_limit_exceeded` | El pago fue rechazado porque superó el límite (CAP - Capacidad Máxima Permitida) del medio de pago. |
| rejected | `rejected_insufficient_data` | El pago fue rechazado debido a falta de toda la información obligatoria requerida. | 
| rejected | `rejected_by_bank` | Operación rechazada por el banco. |
| rejected | `rejected_by_regulations` | Pago rechazado por regulaciones. | 
| rejected | `insufficient_amount` | Pago rechazado por montos insuficientes. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | El pago fue rechazado porque el usuario no tiene habilitada la función crédito en su tarjeta múltiple (débito y crédito). | ------------