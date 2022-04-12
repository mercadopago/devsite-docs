# Shipping cost
 
Shipping value, or freight, is the value charged for shipping the products sold. If this amount is already set, it is possible to display it separately from the total purchase amount at the time of payment.
 
1. Send a POST with the `cost` and `mode` attributes of the `shipments` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In `cost`, enter the freight amount.
3. In `mode`, enter `not_specified`.
4. Execute the request in your terminal.

> PREV_STEP_CARD_EN
>
> Invoice description 
>
> Check how to define the name of the establishment that will be displayed on the buyer's invoice.
>
> [Invoice description](/developers/en/docs/checkout-pro/checkout-customization/preferences/invoice-description)

> NEXT_STEP_CARD_EN
>
> Boleto expiration
>
> Check how to change the default due date for boleto payments. 
>
> [Boleto expiration](/developers/en/docs/checkout-pro/checkout-customization/preferences/expiration-date)