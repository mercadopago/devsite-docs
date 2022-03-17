—-[mlb]----

### Boleto bancário

It is possible to allow the subscriber to pay the subscription with a boleto bancário. When opting for this payment method, the invoice sent will be valid for seven days, and it is going to remain valid until three days after expiration. If the subscriber fails to pay more than two consecutive boletos, the subscription is canceled. 

To offer subscriptions with payments via boleto bancário, send a POST with the `payment_methods_allowed" parameter informing the payment method to be displayed on the checkout, such as `bolbradesco`, to the[/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint, and execute the request.

> NOTE
>
> Important
>
> Boleto bancário as a payment method is only available for subscriptions created on the Checkout Pro, where the seller must redirect the buyer to the URL generated in the `init_point` parameter.

------------
