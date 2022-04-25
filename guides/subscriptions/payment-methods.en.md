## Payment methods

--—-[mlb]----

By integrating subscriptions, it is possible to customize and offer different payment methods. In addition to the credit card options available, you can offer boleto bancário and also set a proportional amount for the payment of subscriptions.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----

By integrating subscriptions, it is possible to customize and define a proportional value for the subscription payment. To perform this integration, follow the steps described below.

------------


--—-[mlb]----

### Boleto bancário

It is possible to allow the subscriber to pay the subscription with a boleto bancário. When opting for this payment method, the invoice sent will be valid for seven days, and it is going to remain valid until three days after expiration. If the subscriber fails to pay more than two consecutive boletos, the subscription is canceled. 

To offer subscriptions with payments via boleto bancário, send a POST with the `payment_methods_allowed` parameter informing the payment method to be displayed on the checkout, such as `bolbradesco`, to the[/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint, and execute the request.

> NOTE
>
> Important
>
> Boleto bancário as a payment method is only available for subscriptions created on the Checkout Pro, where the seller must redirect the buyer to the URL generated in the `init_point` parameter.

------------


### Proportional amount (pro rata)

Pro rata is the amount billed to the subscriber if the subscription starts on a day other than the billing date set by the seller. When creating a subscription, the seller can decide whether or not to offer this option.

Below we show a flow of how the proportional collection of payments works.

![Basic-subscriptions](/images/subscriptions/linea-cobro-EN.png)


To define a pro rata for subscriptions payments, send a POST to the [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint with the parameters `billing_day` and `billing_day_proportional` and execute the request. The first parameter accepts values from 1 (one) to 28 (twenty-eight) and must contain the day of the month in which the charge will be made. The second in turn must be sent with the value `true`. 


> NOTE
>
> Important
>
> If you want to modify a specific subscription and define a Pro Rata, send a PUT with the `billing_day_proportional` parameter to the [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan_id/put) endpoint, change the value from `false` to `true`, and execute the request.
