---
indexable: false
---

# Subscription updates

To update, pause, cancel or reactivate a subscription already created, you need to use the preapproval_id that returns after the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscriptions/integration/" target="_blank">creation</a>. 

## Search for a subscription

You can search your subscriptions whenever you need. 

The parameters to be added are optional and, depending on the parameters sent, they are combined to search for a subscription. 

For example, you can search for all of a customer's paused subscriptions: 

[[[
```curl curl --location --request GET 'https://api.mercadopago.com/preapproval/search?status=paused&payer_email=[FAKER][INTERNET][FREE_EMAIL]' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```
]]]


## Edit card and amount

If you want to edit a card or the amount of a subscription already created, you must resend the fields with the updated data. 

To __edit the card__, you must indicate the new token in the `card_token_id` attribute. And to __update the amount__, send the new amount through `auto_recurring.transaction_amount` and specify again the `auto_recurring.currency_id`.

With the `application_id` of the subscription you want to update, make the following call: 

[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000]
  },
  "card_token_id":"1aca87c7338585abdf1edf0000000000"
}'
```
]]]

>Note that the token lasts 7 days and can be used only once, so this value should not be saved.

## Cancel or pause

To __cancel a subscription__, just specify the `cancelled` value in `status`. This action terminates the subscription and makes it impossible to reactivate it.

And to __pause a subscription__, you must indicate `paused` in the `status`. You can reactivate it whenever you want.  


[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "status": "cancelled"
}'
```
]]]

## Reactivate a paused subscription

### Activate subscription with end time

If you want to reactivate or extend the time of a subscription that had a specific time length determined, you must add the time that was paused or that you want to add in order to be able to collect the total estimated installments. 

For example, if you want to collect all the installments of an annual period with a monthly frequency that after 6 months was paused for one month, you should add one month more to the time period.

To do so, update the time in the `auto_recurring.end_date` field and send the value `authorized` in `status`.

With the subscription `application_id` you want to update, make the following call: 


[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "end_date": "2023-07-20T11:59:52.581-04:00"
  },
  "status": "authorized"
}'
```
]]]

### Activate subscription without end time

To reactivate a subscription, send the value `authorized` in `status`. This will reactivate the installments according to their recurrence from the date the status change was made.

With the subscription `application_id` you want to update, make the following call: 

[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "status": "authorized"
}'
```
]]]

>To get more information about the available fields, view the<a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/" target="_blank">API references.</a>.


------------
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Tests
>
> Check that your created subscriptions are properly configured with the test users.  
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/testing/)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> Logic of collection retries
>
> In case you have problems, we explain the logic of reattempting collections.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry/)
