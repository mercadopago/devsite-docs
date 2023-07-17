# How to improve payments approval

When making an online payment, the transaction undergoes a careful analysis to minimize fraud risks and ensure that processing takes place without errors.

In this documentation, you will find information about what causes a payment to be declined and some recommendations to prevent this from happening.

## Why is a payment order rejected?

A payment may be declined due to an **issue with the payment method or because it does not meet the necessary security requirements**. For example, if the card does not have enough amount or if there is a strange movement of the account.

## Reasons for refusal

Payment refusal is a reality in the world of online sales and can happen for several reasons: incorrect filling of information by the customer, attempted fraud, problem in communication between acquirers, among many other issues. 

You can find the information and check the status of a payment via the API, through the [Get Payment](/developers/en/reference/payments/_payments_id/get) method. The `status` field indicates whether the payment was approved, while the `status_detail` field provides more details, including the reasons for rejection.

> NOTE
>
> Important
>
> You can also find more information about payments in the [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) account activity.


### Errors made by the buyer

This is one of the main reasons a payment might be declined. Occasionally, the buyer can make a mistake when filling in their data, **especially address, card numbers, and identification numbers**.

In these cases, the `status_detail` field may return: `cc_rejected_bad_filled_date`, `cc_rejected_bad_filled_other`, `cc_rejected_bad_filled_security_code`

### Bank rejected payments

When paying with a credit or debit card, for example, the issuing bank may refuse the charge for different reasons such as the expiration date, insufficient balance or limit, card disabled or blocked for online payments. 

In these cases, the `status_detail` field may return: `cc_rejected_call_for_authorize`, `cc_rejected_card_disabled`, `cc_rejected_duplicated_payment`, `cc_rejected_insufficient_amount`

### Payments rejected due to fraud prevention

When paying, both the issuing bank and Mercado Pago do a series of checks. If our anti-fraud system detects any unusual movement that characterizes a scam or fraud, it will be blocked. 

In these cases, the `status_detail` field may return: `cc_rejected_blacklist`, `cc_rejected_high_risk`

> WARNING
> 
> Rejection without reason
>
> Keep in mind that if the card issuer fails to inform the rejection reason, you’ll see the payment details as `cc_rejected_other_reason`. In this scenario, we recommend changing the payment method or reaching out to the bank to solve the issue.

## Recommendations to improve your approval

To prevent a legitimate payment from being refused because it does not meet security validations, **it is necessary to include all possible information** when carrying out the transaction. Furthermore, you must pay attention to some security requirements, such as our **Security Code** and **Device ID**.

> NOTE
>
> Important
>
> If you use Checkout Pro, you already implement our security methods to prevent fraud.

### Implement the Device ID in your site

The Device ID is an important piece of information to ensure better security and, consequently, a better payment approval rate. **It's a unique number that's used to identify a customer's device** when they are buying.

If a customer makes a purchase on a different device than usual, this may mean that the purchase was fake and should not be done.

Check if the store is sending this information and if not, make sure to activate this feature.