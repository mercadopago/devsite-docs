# Subscription with no associated plan

Subscriptions with no associated plan are when different subscriptions have different characteristics because they are specific to each payer. For instance, a single-month subscription with a unique discount.

This subscription model can be done in two ways.

### With authorized payment
They allow an installment to be generated and billed based on a defined recurrence, causing the subscription engine to automatically schedule and create payments based on the payment method defined at the time of the subscription creation.

[**Go to subscriptions with authorized payment**](/developers/en/docs/subscriptions/integration-configuration/subscription-no-associated-plan/authorized-payments)

### With pending payment
They are a model in which the payment method is not defined when the subscription is created. According to this model, payments automatically go into `pending` status and depend on the users to complete it.

[**Go to subscriptions with pending payment**](/developers/en/docs/subscriptions/integration-configuration/subscription-no-associated-plan/pending-payments)