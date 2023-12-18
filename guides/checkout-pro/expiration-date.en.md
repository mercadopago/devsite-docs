# Expiration date

Expiration date is the maximum period defined for making a payment. With Checkout Pro it is possible to change the default expiration date to **cash payments** by sending the `date_of_expiration` field in the preference creation request.

> NOTE
>
> Important
>
> The clearing period is between 1 and 2 working days according to the chosen payment method. Therefore, we recommend setting the expiration date at least 3 days apart to ensure payment is made. In addition, if payment is made after the expiration date, the amount will be refunded to the payer's Mercado Pago account.


To change the expiration date, send a **POST** with the parameter `date_of_expiration` with the expiration date and time of the item to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request.


[[[
```json
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]
