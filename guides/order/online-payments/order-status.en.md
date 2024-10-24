# Order status

| Status | `status_detail` | Description |
| --- | --- | --- |
| approved | `accredited` | Done! Your payment was credited. Your statement will show the `amount` charge as `statement_descriptor`. |
| approved | `partially_refunded` | The payment has at least one partial refund. |
| authorized | `pending_capture` | The payment has been authorized and is waiting for [capture](/developers/en/docs/checkout-api/payment-management/capture-authorized-payment). |
| in_process | `offline_process` | Due to lack of online processing, the payment is being processed offline. |
| in_process | `pending_contingency` | We are processing your payment.<br/><br/>Don't worry! You will be notified via e-mail if the payment was credited in less than 2 business days. |
| in_process | `pending_review_manual` | We are processing your payment.<br/><br/>Don't worry! You will be notified via e-mail if it is credited or if we need more information in less than 2 business days. |
| pending | `pending_waiting_transfer` | In cases of bank transfer, the `status_detail` is obtained by waiting for the user to finish the payment process in their bank. |
| pending | `pending_waiting_payment` | In cases of offline payments, it remains pending until the user finishes the payment. |
| pending | `pending_challenge` | n cases of credit card payments, there is a pending confirmation due to a challenge. |
| cancelled | `expired` | The payment has been cancelled after spending 30 days in a pending status.| 
| cancelled | `by_collector` | The payment has been cancelled by collector.| 
| cancelled | `by_payer` | The payment has been cancelled by payer.|
| charged_back | `settled` | The money was retained after a chargeback process. |
| charged_back | `reimbursed` | The money was reimbursed after a chargeback process.|
| charged_back | `in_process` | The payment is in process due to the payer disowning it.|
| refunded | `refunded` | The payment has been refunded by the collector.|
| refunded | `by_admin` | The payment has been refunded by the administrator. |
| rejected | `bank_error` | If the payment method is bank transfer, the payment was rejected due to an error with the bank. |
| rejected | `cc_rejected_3ds_challenge` | The payment is rejected for not surpasing the 3DS challenge. |
| rejected | `cc_rejected_3ds_mandatory` | The payment is rejected for not having a 3DS challenge when it is mandatory. |
| rejected | `cc_rejected_bad_filled_card_number` | Check card number. |
| rejected | `cc_rejected_bad_filled_date` | Check expiration date. |
| rejected | `cc_rejected_bad_filled_other` | Check data. |
| rejected | `cc_rejected_bad_filled_security_code` | Check card security code. |
| rejected | `cc_rejected_blacklist` | Your payment couldn't be processed. |
| rejected | `cc_rejected_call_for_authorize` | Authorize the `amount` payment to `payment_method_id`. |
| rejected | `cc_rejected_card_disabled` | Call `payment_method_id` to activate your card, or use a different payment method. The phone is on the back of your card. |
| rejected | `cc_rejected_card_error` | Your payment couldn't be processed. |
| rejected | `cc_rejected_duplicated_payment` | You have already made a payment for that value.<br/><br/>If you need to pay again, use a different card or payment method. |
| rejected | `cc_rejected_high_risk` | Your payment was rejected.<br/><br/>Select a different payment method; we recommend cash methods. |
| rejected | `cc_rejected_insufficient_amount` | Your `payment_method_id` does not have enough funds. |
| rejected | `cc_rejected_invalid_installments` | `payment_method_id` does not process payments in `installments` installments. |
| rejected | `cc_rejected_max_attempts` | You reached the allowed attempt limit.<br/><br/>Select a different card or payment method. |
| rejected | `cc_rejected_other_reason` | `payment_method_id` did not process payment. |
| rejected | `cc_amount_rate_limit_exceeded` | Rejected because it exceeded the limit (CAP - Maximum Allowed Capacity) of the payment method. |
| rejected | `rejected_insufficient_data` | Rejected due to the lack of all required mandatory information in the payment. | 
| rejected | `rejected_by_bank` | Operation rejected by the bank. |
| rejected | `rejected_by_regulations` | Payment rejected by regulations. |
| rejected | `insufficient_amount` | Payment rejected due to insufficient amount. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | The payment was rejected because the user does not have the credit function enabled on their multiple card (debit and credit). | ------------