----[mlb]----
# Boleto bancário

It is possible to allow the subscriber to pay the subscription with a boleto bancário. When opting for this payment method, the invoice sent will be valid for seven days, and it is going to remain valid until three days after expiration. If the subscriber fails to pay more than two consecutive boletos, the subscription is canceled. 

To offer payment for subscriptions via boleto bancário, send a **POST** with the `payment_methods_allowed` parameter informing the payment method that should appear at checkout, for example, `bolbradesco` and the `status` parameter as "pending" to the endpoint [/preapproval_plan](/developers/en/reference/subscriptions/_preapproval_plan/post) and execute the request.

> NOTE
>
> Important
>
> The payment of subscriptions by boleto bancário is only available for subscriptions created through the endpoint [/preapproval_plan](/developers/en/reference/subscriptions/_preapproval_plan/post), where the seller must redirect the buyer to the URL generated in the parameter `init_point`

> PREV_STEP_CARD_PT
>
> Subscriptions without associated plan
>
> See more information about the different subscriptions that have different characteristics as they are specific to each payer.
>
> [Subscriptions without associated plan](/developers/en/docs/subscriptions/integration-configuration/subscriptions-no-associated-plan)

> NEXT_STEP_CARD_PT
>
> Proportional value (Pro rata)
>
> See how to set the amount charged to the subscriber if the subscription starts on a day other than the billing date set by the seller.
>
> [Proportional value (Pro rata)](/developers/en/docs/subscriptions/integration-customization/payment-methods/proportional-amount)

------------
