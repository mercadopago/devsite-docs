# Why is a payment order rejected?

Payment refusal is a reality in the world of online sales and can happen for several reasons. **A payment may be declined due to**:
 * an issue with the payment method;
 * incorrect data filling on the client side;
 * insuficient amount of money on the card used in the transaction;
 * breach of any of the necessary security requirements;
 * strange movements of the account that may indicate a fraude risk;
 * problems in communication between acquirers.

You can **find the information and check the status of a payment** via the API, through the [Get Payment](/developers/en/reference/payments/_payments_id/get) method. The `status` field indicates whether the payment was approved, while the `status_detail` field provides more details, including the reasons for rejection.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Important
>
> You can find more information about payments in the [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) account activity.

## Rejections due to errors in data filling

These rejections are due to **errors committed during the checkout process**, that may happen for different reasons: trouble understanding the payment screen, problems with the customer's experience, lack of validations in certain fields, or common mistakes made by the client when completing their data, especially their card’s data.

In these cases, the `status_detail` field may return: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date`
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


## Rejections made by the issuing bank

When paying with a **credit or debit card**, the issuing bank may refuse the charge for different reasons, such as the expiration date, insufficient balance or limit, or disabled or blocked card for online payments.

In these cases, the `status_detail` field may return: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


## Rejections due to fraud prevention

We monitor transactions in real time in order to **recognize suspicious features and patterns** that may indicate a fraude attempt. This is made both by the Mercado Pago algorithm and the banks, in an attempt to reduce chargebacks to a minimum. 

When our fraud prevention system detects a suspicious payment, the API’s response in the `status_detail` field may return: 
 * `cc_rejected_blacklist`
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`


> WARNING
> 
> Attention
>
> `cc_rejected_other_reason` is a status given by the bank that doesn’t mention the reason of the rejection, but indicates a fraude risk estimation. However, there may be other reasons why this status is returned. In case of doubt, it is recommended to choose other payment method to fulfill the transaction or to get in touch with the issuer bank institution.
```json
 {
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

