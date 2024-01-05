# Subscriptions with authorized payment

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

## Collection reattempt logic

By automating the recurrence of your collections, authorized payments that will have a debit date configured based on the periodicity that was defined in the subscription are created. The first installment is charged after approximately one hour since the subscription.

### Payment statuses

----[mlb, mlm]----

At the time the installment is collected, two alternatives may arise based on the outcome of the payment:

* __Payment is successfully made__ so, the installment will remain as `processed` and will not be reattempted. 

* __Payment is declined__ so the installment will always remain in `recycling` status,  as long as the installment has not expired or has not reached the maximum number of reattempts. Otherwise, it will be processed with the `processed` status.

### Declined payments

When an installment remains in `recycling` status, it enters a reattempt scheme with a maximum of 4 possibilities, when the installment is collected again. The result can be any of the two points mentioned above. 

If the payment is declined, it is updated to a new collection date by adding 1 of the 4 possibilities within ten days as a reattempt time window to the last available date.

By default, the reattempt is within a 10-day window. In case the installment has an expiration date, the time window is adjusted to that date and maintains the logic of 4 reattempts.

------------

----[mla]----

At the time the installment is collected, three alternatives may arise, based on the outcome of the payment:

* __Payment is successfully made__ so, the installment will remain as `processed` and will not be reattempted. 

* __Payment is being processed__ so the installment will be pending in a `waiting for gateway` status until the payment is resolved.

* __Payment is declined__ so the installment will always remain in `recycling` status,  as long as the installment has not expired or has not reached the maximum number of reattempts. Otherwise, it will be processed with the `processed` status.

### Declined payments

When an installment remains in `recycling` status, it enters a reattempt scheme with a maximum of 4 possibilities, when the installment is collected again. The result can be any of the three points mentioned above. 

If the payment is declined, it is updated to a new collection date by adding 1 of the 4 possibilities within ten days as a reattempt time window to the last available date.

By default, the reattempt is within a 10-day window. In case the installment has an expiration date, the time window is adjusted to that date and maintains the logic of 4 reattempts.

### Payments in process

If an installment is in `waiting for gateway` status and, when the payment is resolved, it appears as declined, and the expiration date is met, the installment will automatically appear as processed with the `processed` status. Otherwise, it will enter the reattempt scheme.

------------

In the case that the installment cannot be collected on the fourth reattempt, it will automatically remain in `processed` status, associated with a declined payment.

After 3 installments with rejected payments, the subscription is automatically canceled and the seller account will be notified of the cancellation of the subscription by e-mail.

> NOTE
> 
> Note
> 
> The result of one installment does not affect the generation and processing of the remaining installments for the same subscription.
