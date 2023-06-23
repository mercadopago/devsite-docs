# Response Handling

Offer your customers clear and accurate information about possible card data entry or payment status errors. This way they are notified of the resolution actions they can take, or any additional step required.

For example, if the card has insufficient balance, you can suggest trying again with another payment method to complete the transaction. To get more information about the possible errors, view the [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference).

> WARNING
>
> Important
>
> You can configure or send e-mails to clients with status messages for two orders, such as approved payment. Therefore, the configuration of this shipment must be made in their respective platforms. See [WooComerce](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/integration), [PrestaShop](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/prestashop/email-customization) and [Magento 2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/magento-two/notifications-configuration) documentation for more details.

## Collection creation results


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


> CLIENT_SIDE
>
> h2
>
> Data entry errors


| Code | Description | Suggested communication |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Enter card number. |
| 208 | parameter cardExpirationMonth can not be null/empty | Select month. |
| 209 | parameter cardExpirationYear can not be null/empty | Select year. |
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
| 325 | invalid parameter cardExpirationMonth | Invalid month. |
| 326 | invalid parameter cardExpirationYear | Invalid year. |
| default | Another error code | Check data. |

## Card token generation errors

| Status | `status_detail` | Suggested communication |
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

---
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Enhance your integration and improve your sales management.
>
> [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/advanced-integration)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)