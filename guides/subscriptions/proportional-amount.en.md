# Proportional amount (Pro rata)

Pro rata is the amount billed to the subscriber if the subscription starts on a day other than the billing date set by the seller. When creating a subscription, the seller can decide whether or not to offer this option.

> WARNING
>
> Important
>
> To set a proportional value, the fields `frequency` and `frequency_type` need to be filled with the values `frequency`:`1` and `frequency_type`:`months` respectively. This means that the proportional calculation is **only applicable to monthly subscriptions during a 30-day period**.

Below we show a flow of how the proportional collection of payments works.

![Basic-subscriptions](/images/subscriptions/linea-cobro-EN.png)

To define a pro rata for subscriptions payments, send a POST to the [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint with the parameters `billing_day` and `billing_day_proportional` and execute the request. The first parameter accepts values from 1 (one) to 28 (twenty-eight) and must contain the day of the month in which the charge will be made. The second in turn must be sent with the value `true`. 

> NOTE
>
> Important
>
> If you want to modify a specific subscription and define a Pro Rata, send a PUT with the `billing_day_proportional` parameter to the [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan_id/put) endpoint, change the value from `false` to `true`, and execute the request.