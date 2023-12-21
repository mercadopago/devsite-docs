# Subscription with no associated plan

Subscriptions with no associated plan are when different subscriptions have different characteristics because they are specific to each payer. A single-month subscription with a unique discount, for instance.

This subscription model can be 

* [With authorized payments](/developers/en/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_subscriptions_with_authorized_payment)
* [Pending payments](/developers/en/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_subcriptions_with_pending_payment)

> NOTE
>
> Important
>
> Creating subscriptions with `status = Pending` is supported only for Subscriptions without an associated plan.

## Subscriptions with authorized payment

Subscriptions with authorized payment allow an installment to be generated and billed based on a defined recurrence, causing the subscription engine to automatically schedule and create payments based on the payment method defined at the time of the subscription creation.

To offer **subscriptions without an associated plan and with authorized payment**, send a POST with the necessary attributes to the [/preapproval](/developers/en/reference/subscriptions/_preapproval/post) endpoint and pay attention to the `status` parameter, which must be filled in with the value `authorized`. If you prefer, use the _curl_ below.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
    "back_url": "https://www.google.com",
    "reason": "Test Subscription",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "start_date": "2020-06-02T13:07:14.260Z",
        "end_date": "2022-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "ARS"
    },
    "payer_email": "test_user+1020927396@testuser.com",
    "card_token_id": "{{EL_CARD_TOKEN_QUE_CREASTE}}",
    "status": "authorized"
}'
```
]]]

> NOTE
>
> Important
>
> We make a payment with a minimum amount to prove the card's validity. If it is successful, we will proceed with returning that payment. The value may differ according to each country.

### Collection reattempt logic

By automating the recurrence of your collections, authorized payments that will have a debit date configured based on the periodicity that was defined in the subscription are created. The first installment is charged until the period of approximately one hour to subscribe.

#### Payment statuses

----[mlb, mlm]----

At the time the installment is collected, two alternatives may arise based on the outcome of the payment:

* __Payment is successfully made__ so, the installment will remain as `processed` and will not be reattempted. 

* __Payment is declined__ so the installment will always remain in `recycling` status and when the installment is not expired or has not reached the maximum number of reattempts. Otherwise, it will be processed with the `processed` status.

#### Declined payments

When an installment remains in `recycling` status, it enters a reattempt scheme with a maximum of 4 possibilities, when the installment is collected again. The result can be any of the two points mentioned above. 

If the payment is declined, it is updated to a new collection date by adding 1 of the 4 possibilities within ten days as a reattempt time window to the last available date.

By default the reattempt is within a 10 day window. In case the installment has an expiration date, the time window is adjusted to that date and maintains the logic of 4 reattempt.

------------

----[mla]----

At the time the installment is collected, three alternatives may arise, based on the outcome of the payment:

* __Payment is successfully made__ so, the installment will remain as `processed` and will not be reattempted. 

* __Payment is being processed__ so the installment will be pending in a `waiting for gateway` status until the payment is resolved.

* __Payment is declined__ so the installment will always remain in `recycling` status and when the installment is not expired or has not reached the maximum number of reattempts. Otherwise, it will be processed with the `processed` status.

#### Declined payments

When an installment remains in `recycling` status, it enters a reattempt scheme with a maximum of 4 possibilities, when the installment is collected again. The result can be any of the three points mentioned above. 

If the payment is declined, it is updated to a new collection date by adding 1 of the 4 possibilities within ten days as a reattempt time window to the last available date.

By default the reattempt is within a 10 day window. In case the installment has an expiration date, the time window is adjusted to that date and maintains the logic of 4 reattempts.

#### Payments in process

If an installment is in `waiting for gateway` status and, when the payment is resolved, it appears as declined, and the expiration date is met, the installment will automatically appear as processed with the `processed` status. Otherwise, it will enter the reattempt scheme.

------------

In the case that the installment cannot be collected on the fourth reattempt, it will automatically remain in `processed` status, associated with a declined payment.

After 3 installments with rejected payments, the subscription is automatically canceled and the seller account will be notified of the cancellation of the subscription by e-mail.

> NOTE
> 
> Note
> 
> The result of one installment does not affect the generation and processing of the remaining installments for the same subscription.

## Subscriptions with pending payment 

Subscriptions with pending payments are a model in which the payment method is not defined when the subscription is created. According to this model, payments automatically go into `pending` status and depend on the users to complete it.

In this case, there are two options: The first one is to update the subscription by defining a payment method through the [/preapproval/{id}](/developers/en/reference/subscriptions/_preapproval_id/put) endpoint. The second one is to share a payment link with the buyer so they can complete the purchase with the payment method of their choice.

To offer **subscriptions without an associated plan and with pending payments**, send a POST with the necessary attributes to the [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) endpoint and then pay attention to the `status` parameter, which must be filled in with the `pending` value. If you prefer, use the curl below.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Authorization: Bearer YOU_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reason": "Yoga classes",
    "external_reference": "YG-1234",
    "payer_email": "test_user_75650838@testuser.com",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "end_date": "2023-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "BRL"
    },
    "back_url": "https://www.yoursite.com",
    "status": "pending"
}'
```
]]]

> PREV_STEP_CARD_EN
>
> Subscriptions with associated plan
>
> See more information about signatures used when it is necessary to have the same signature on different occasions and organize them into identifiable groups.
>
> [Suscripciones con plan asociado](/developers/en/docs/subscriptions/integration-configuration/subscriptions-associated-plan)
