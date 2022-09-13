# Boleto expiration
 
Expiration date is the maximum period defined for making a payment. With Checkout Pro it is possible to change the default expiration date for **payments with boleto** by sending the `date_of_expiration` parameter in the request to create the preference.
 
In this field, the date set must be between 1 and 30 days from the date of issue of the payment.
 
1. Send a POST with the `date_of_expiration` parameter informing the item's expiration date and time to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post). The value must follow the ISO 8601 format (yyyy-MM-dd'T'HH:mm:ssz)
2. Execute the request.
 
> WARNING
>
> Important
>
> The clearing period is between 1 and 2 working days according to the chosen payment method. For this reason, we recommend setting the expiration date at least 3 days apart to ensure payment is made. In addition, if payment is made after the expiration date, the amount will be refunded to the payer's Mercado Pago account.