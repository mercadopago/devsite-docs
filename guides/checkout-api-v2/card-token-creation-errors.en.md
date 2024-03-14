# Card token generation errors

| Status | `status_detail` | Description |
| --- | --- | --- |
| 106 | Cannot operate between users from different countries | You cannot make payments to other countries. |
| 109 | Invalid number of shares for this `payment_method_id` | `payment_method_id` does not process payments in `installments` installments.<br/><br/>Select a different card or payment method. |
| 126 | The action requested is not valid for the current payment state | Your payment couldn't be processed. |
| 129 | Cannot pay this amount with this paymentMethod | `payment_method_id` does not process payments for the selected amount.<br/><br/>Select a different card or payment method. |
| 145 | Invalid users involved | You are trying to make a payment to a test user and a real user. |
| 150 | The `payer_id` cannot do payments currently | You cannot make payments. |
| 151 | The `payer_id` cannot do payments with this payment_method_id | You cannot make payments. |
| 160 | Collector not allowed to operate | Your payment couldn't be processed. |
| 204 | Unavailable `payment_method` | `payment_method_id` is not available right now.<br/><br/>Select a different card or payment method. |
| 801 | Already posted the same request in the last minute | You made a similar payment a while ago.<br/><br/>Try again in a few minutes. |
| default | Another error code | Your payment couldn't be processed. |