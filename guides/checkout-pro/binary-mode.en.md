# Binary mode
 
Binary mode is a function that allows automatic approval or rejection of a payment. This means that when activated, payments made will be automatically approved or declined without the need for action on the part of the seller.
 
If disabled, payment may be pending (if any action is required from the buyer) or in process (if manual review is required).
 
To enable binary mode, send the `binary_mode` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) with the value `true` and execute the request.
