## Subscription with an associated plan

Subscriptions with an associated plan are used when it is necessary to use the same subscription on different occasions to organize them into identifiable groups. For example, for a monthly and yearly subscription to a gym.

### Create plan 

The integration of **subscriptions with an associated plan** happens in two steps: In the first one, it is necessary to **create a plan** to be associated with the subscription, and in the second step, to **create a subscription**.

The subscription plan allows you to define, among other attributes, the title, value, and frequency of subscriptions created by the seller. To create a plan and associate it with a subscription, check out the [preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint, fill in the necessary attributes, and execute the request.

As soon as you run the API, the plan is created, and you will then have access to the `preapproval_plan_id` **that will be displayed as  `id` in the API response**. This attribute is mandatory for **creating the subscription** in the next step.


### Create subscription

Once you create a plan, you can create a subscription. Subscription is a payer authorization for recurring charges with a defined payment method (credit card, for example). When subscribing to a product/service, the customer agrees to be periodically charged a certain amount for the defined period.

To create a subscription, have the `preapproval_plan_id` at hand, access the [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval/post) endpoint, and fill in the attributes as indicated in the parameter table. It is fundamental to pay attention to the `preapproval_plan_id` parameter and insert the `id` generated in the plan creation step.

When you finish filling in the attributes, execute the request, and that's it! Your subscription with an associated plan will be created.
