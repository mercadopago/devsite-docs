## Subscription with no associated plan

Subscriptions with no associated plan are when different subscriptions have different characteristics because they are specific to each payer. A single-month subscription with a unique discount, for instance.

This subscription model can be 

* [**With authorized payments**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_subscriptions_with_authorized_payment)
* [**Pending payments**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_subcriptions_with_pending_payment)


### Subscriptions with authorized payment

Subscriptions with authorized payment allow an installment to be generated and billed based on a defined recurrence, causing the subscription engine to automatically schedule and create payments based on the payment method defined at the time of the subscription creation.

To offer **subscriptions without an associated plan and with authorized payment**, send a POST with the necessary attributes to the [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval/post) endpoint and pay attention to the `status` parameter, which must be filled in with the value `authorized`.

After completing the fields, execute the request.


> NOTE
>
> Important
>
> We make a payment with a minimum amount to prove the card's validity. If it is successful, we will proceed with returning that payment. The value may differ according to each country.


### Subscriptions with pending payment 


Subscriptions with pending payments are a model in which the payment method is not defined when the subscription is created. According to this model, payments automatically go into `pending` status and depend on the users to complete it.

In this case, there are two options: The first one is to update the subscription by defining a payment method through the [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_id/put) endpoint. The second one is to share a payment link with the buyer so they can complete the purchase with the payment method of their choice.

To offer **subscriptions without an associated plan and with pending payments**, send a POST with the necessary attributes to the [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post) endpoint and then pay attention to the `status` parameter, which must be filled in with the `pending` value.

After completing the fields, execute the request.
