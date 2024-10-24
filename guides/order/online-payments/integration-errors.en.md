# Integration errors

| Code | Description | Description |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Enter card number. |
| 208 | parameter expirationMonth can not be null/empty | Select month. |
| 209 | parameter expirationYear can not be null/empty | Select year. |
| 212 | parameter docType can not be null/empty | Enter your ID type. |
| 213 | The parameter cardholder.document.subtype can not be null or empty | Enter your ID. |
| 214 | parameter docNumber can not be null/empty | Enter your ID. |
| 220 | parameter cardIssuerId can not be null/empty | Enter your bank. |
| 221 | parameter cardholderName can not be null/empty | Enter name and surname. |
| 224 | parameter securityCode can not be null/empty | Enter security code. |
| E203 | invalid parameter securityCode | Check security code. |
| E301 | invalid parameter cardNumber | Enter a valid card number. |
| 316 | invalid parameter cardholderName | Enter a valid name. |
| 322 | invalid parameter docType | Invalid ID type. |
| 323 | invalid parameter cardholder.document.subtype | Check your ID. |
| 324 | invalid parameter docNumber | Invalid ID. |
| 325 | invalid parameter expirationMonth | Invalid month. |
| 326 | invalid parameter expirationYear | Invalid year. |
| default | Another error code | Check data. |

## Card token generation errors

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
