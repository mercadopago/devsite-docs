---
indexable: false
---

# Collection retry logic

By automating the recurrence of your collections, authorized payments are created that will have a debit date configured based on the periodicity that was defined in the subscription. 

## Payment statuses
At the time the instalment is collected, three alternatives may arise based on the outcome of the payment:

* __Payment is successfully made__ so the instalment will remain as `processed` and will not be reattempted. 
----[mla]----
* __Payment is being processed__ so the instalment will be pending in a `waiting for gateway` state until the payment is resolved.
------------
* __Payment is declined__ so the installment will remain in `recycling` status as long as the installment is not expired or has not reached the maximum number of retries. Otherwise, it will be processed with the status `processed`.

## Declined payments

When an instalment remains in `recycling` status, it enters a retry scheme with a maximum of 4 possibilities, in which the installment is collected again. The result can be any of the three points mentioned above. 

If the payment is declined, it is updated to a new collection date by adding 1 of the 4 possibilities within ten days as a retry time window to the last available date.

By default the retry is within a 10 day window. In case the installment has an expiration date, the time window is adjusted to that date and maintains the logic of 4 retries.

----[mla]----

## Payments in process

If an installment is in `waiting for gateway` status and when the payment is resolved it is declined and the expiration date is met, the installment will automatically go to processing with the `processed` state. Otherwise, it will enter the retry scheme described in the image.

------------

In the event that the installment cannot be collected on the fourth retry, it will automatically remain in `processed` status associated with a declined payment.

> NOTE
> 
> Note
> 
> The result of one installment does not affect the generation and processing of the rest of the installments for the same subscription.

------------
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Update, edit or cancel your subscriptions.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advenced-integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Tests
>
> Check that your subscriptions are properly configured with the test users. 
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/testing/)
