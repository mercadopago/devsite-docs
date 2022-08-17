# Term of preference
 
Term is the validity period defined for a given payment preference. When defining the validity of the preference, you choose a date for it to start to be valid and the expiration date, in this way, when the chosen period expires, the preference will lose its validity and cannot be used.
 
1. Send a POST with the parameters `expires`, `expiration_date_from` and `expiration_date_to` to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In "expires", enter `true`.
3. In "expiration_date_from", enter the start date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas.
4. In "expiration_date_to", enter the expiration date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas
5. Execute the request.