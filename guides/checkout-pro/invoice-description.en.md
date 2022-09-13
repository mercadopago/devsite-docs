# Invoice description
 
Invoice description is a setting that allows you to define the name of the establishment that will be displayed on the buyer's invoice. This allows for business identification and avoids unnecessary disputes.
 
1. Send a POST with the `statement_descriptor` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In `statement_descriptor`, enter the name of the establishment.
3. Execute the request.