# Responses handling for the creation of payments and card tokens

Provide clear and accurate information to your customers in the event of possible errors when entering card data and about the payment status. This will allow you to improve your checkout conversion, since users will know if they should correct any information or take any action to successfully complete the payment process.

> NOTE
>
> Note
>
> We can help you improve your clients experience and avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago.com.ar/developers/es/guides/manage-account/payment-rejections).

## When receiving a payment

### Results when creating a payment: `HTTP Status 201 OK`

|   status   |            status_detail             |                                                        Comunicación sugerida                                                        |
| :--------- | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| approved   | `accredited`                         |Done, your payment was approved! You will see the amount charged in your bill as statement_descriptor.                                      |
| in_process | `pending_contingency`                | We are processing the payment. <br/><br/>
In less than 2 business days we will e-mail you the results.                                 |
| in_process | `pending_review_manual`              | We are processing the payment. <br/><br/>
In less than 2 business days we will tell you by e-mail whether it was approved or if we need more information. |
| rejected   | `cc_rejected_bad_filled_card_number`   | Check the card number.
                                                                                                        |
| rejected   | `cc_rejected_bad_filled_date`          | Check the expiration date.
                                                           |
| rejected   | `cc_rejected_bad_filled_other`         | Check the information.
                                                                                                                   |
| rejected   | `cc_rejected_bad_filled_security_code` | Check the security code.
                                                                                                      |
| rejected   | `cc_rejected_blacklist`                | We could not process your payment.
                                                                                                        |
| rejected   | `cc_rejected_call_for_authorize`       | You must authorize `payment_method_id` to pay the amount to MercadoPago
                                                            |
| rejected   | `cc_rejected_card_disabled`            | Call `payment_method_id` to activate your card.
The phone number is on the back of your card.
                              |
| rejected   | `cc_rejected_card_error`               | We could not process your payment.                                                                                                        |
| rejected   | `cc_rejected_duplicated_payment`       | You already made a payment for that amount.<br/><br/>
If you need to repay, use another card or other payment method.                          |
| rejected   | `cc_rejected_high_risk`                | Your payment was declined.<br/><br/>
Choose another payment method. We recommend cash.                               |
| rejected   | `cc_rejected_insufficient_amount`      | Your `payment_method_id` do not have sufficient funds.                                                                                |
| rejected   | `cc_rejected_invalid_installments`     | `payment_method_id` does not process payments in installments.
                                                                        |
| rejected   | `cc_rejected_max_attempts`             | You have reached the limit of allowed attempts. <br/><br/> Choose another card or another payment method.                                            |
| rejected   | `cc_rejected_other_reason`             | `payment_method_id` did not process the payment.                    |

> NOTE
>
> Note
>
> The expiration of a payment in `pending` or `in_process` state occurs after 30 days and the cancellation is automatic, is this case the final status of the payment is `cancelled/expired`.


### Errors in data entry: HTTP Status 400 Bad Request

|  Code |                            Description                             |              Suggested communication               |
| :------ | :----------------------------------------------------------------- | :----------------------------------------------- |
| 205     | parameter cardNumber can not be null/empty                         | Enter your card number.                          |
| 208     | parameter cardExpirationMonth can not be null/empty                | Select a month.                                  |
| 209     | parameter cardExpirationYear can not be null/empty                 | Select a year.                                   |
| 212     | parameter docType can not be null/empty                            | Enter your identification type.                  |
| 213     | The parameter cardholder.document.subtype can not be null or empty | Enter your identification subtype.               |
| 214     | parameter docNumber can not be null/empty                          | Enter your identification number.                |
| 220     | parameter cardIssuerId can not be null/empty                       | Enter your issuing bank.                         |
| 221     | parameter cardholderName can not be null/empty                     | Enter your full name.                            |
| 224     | parameter securityCode can not be null/empty                       | Enter the security code.                         |
| E301    | invalid parameter cardNumber                                       | There is something wrong with that number. Please reenter. |
| E302    | invalid parameter securityCode                                     | Check the security code.                         |
| 316     | invalid parameter cardholderName                                   | Enter a valid name.                              |
| 322     | invalid parameter docType                                          | Check your identification type.                  |
| 323     | invalid parameter cardholder.document.subtype                      | Enter your identification subtype.               |
| 324     | invalid parameter docNumber                                        | Enter your identification number.                |
| 325     | invalid parameter cardExpirationMonth                              | Check the date.                                  |
| 326     | invalid parameter cardExpirationYear                               | Check the date.                                  |
| default | (cualquier otro código de error)                                   | Check the information.                           |

## Errors in card token creation

If there is any error in the card data, we will inform it to you with the following codes, so you can communicate the situation to your users and how to correct it.

|  status |                          status_detail                          |                                              Suggested communication sugerida                                               |
| :------ | :-------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| 106     | Cannot operate between users from different countries           |You cannot make payments to users in other countries.                                                             |
| 109     | Invalid number of shares for this payment\_method\_id           | payment\_method\_id does not process payments in installments. <br/><br/>
Choose another card or another payment method. |
| 126     | The action requested is not valid for the current payment state | We could not process your payment.                                                                                    |
| 129     | Cannot pay this amount with this paymentMethod                  | payment\_method\_id id does not process payments for the selected amount. <br/><br/>
Choose another card or another payment method |
| 145     | Invalid users involved                                          |We could not process your payment.                                                                                     |
| 150     | The payer\_id cannot do payments currently                      | You cannot make payments.
                                                                                        |
| 151     | The payer\_id cannot do payments with this payment\_method\_id  | You cannot make payments.
                                                                                        |
| 160     | Collector not allowed to operate                                | We could not process your payment.                                                                                     |
| 204     | Unavailable payment\_method                                     | payment\_method\_id is not available at this time.<br/><br/>
Choose another card or another payment method      |
| 801     | Already posted the same request in the last minute              | You made a similar payment moments ago.<br/><br/>
Try again in a few minutes.                        |
| default | (cualquier otro código de error)                                | We could not process your payment.                                                                                     |
