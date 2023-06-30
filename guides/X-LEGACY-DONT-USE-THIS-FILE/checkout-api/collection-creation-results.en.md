# Collection creation results

| Status | `status_detail` | Suggested communication |
| --- | --- | --- |
| approved | `accredited` | Done! Your payment was credited. Your statement will show the `amount` charge as `statement_descriptor`. |
| in_process | `pending_contingency` | We are processing your payment.<br/><br/>Don't worry! You will be notified via e-mail if the payment was credited in less than 2 business days. |
| in_process | `pending_review_manual` | We are processing your payment.<br/><br/>Don't worry! You will be notified via e-mail if it is credited or if we need more information in less than 2 business days. |
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
| rejected | `cc_rejected_other_reason` | `payment_method_id` did not process payment. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | The payment was rejected because the user does not have the credit function enabled on their multiple card (debit and credit). | ------------