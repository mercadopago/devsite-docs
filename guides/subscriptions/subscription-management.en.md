# Subscription management

Through subscription management, it is possible to pause, cancel or reactivate an already created subscription, in addition to making other specific changes within its initial settings.

In the following table, you will find more information about the management possibilities:

| Type | Description |
|---|---|
| Search subscription | Allows you to search for subscriptions regardless of their status (active, paused, canceled). To do so, send a GET with the necessary parameters to the [/preapproval/search](/developers/en/reference/subscriptions/_preapproval_search/get) endpoint and execute the request.|
| Update card and value | Allows you to change the card or the value of an already created subscription. To change the card, send the new token in the attribute in the `card_token_id` attribute to the [/preapproval/{id}](/developers/pt/reference/subscriptions/_preapproval_id/put) endpoint and execute the request. To change the signature value, send the new value through `auto_recurring.transaction_amount`, respecify `auto_recurring.currency_id` and execute the request. |
| Cancel or pause subscription | Allows you to cancel or pause an existing subscription. To do so, send a PUT with the `status` attribute and the `canceled` value to the [/preapproval/{id}](/developers/en/reference/subscriptions/_preapproval_id/put) endpoint and execute the request. To pause a subscription, send a PUT with the `status` attribute and the `paused` value to the /preapproval/{id} endpoint and execute the request. |
| Reactivate subscription | It allows you to reactivate a paused subscription and set a deadline for its completion. To do this, send a PUT request with the necessary parameters to the endpoint [/preapproval/{id}](/developers/en/reference/subscriptions/_preapproval_id/put) and execute the request.|
| Change billing date | For subscriptions with a monthly payment frequency, you can choose a fixed day of the month for billing to occur. To do so, send a PUT with the necessary parameters to the [/preapproval/{id}](/developers/pt/reference/subscriptions/_preapproval_id/put) endpoint and execute the request. |
| Set pro rata | You can set a prorated amount for billing an individual subscription. To do so, send a PUT with the necessary parameters to the [/preapproval/{id}](/developers/pt/reference/subscriptions/_preapproval_id/put) endpoint and execute the request. |
| Offer free trial | It is possible to offer a free trial period for customers to test the product and service before purchasing it. To do so, send a PUT with the `free_trial`, `frequency`, and `frequency_type` parameters setting the number of days and the type (days/months) to the [/preapproval_plan/{id}](/developers/en/reference/subscriptions/_preapproval_plan_id/put) endpoint and execute the request. |
