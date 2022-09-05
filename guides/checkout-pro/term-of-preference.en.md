# Term of preference

Term is the validity period defined for a given payment preference. When defining the term of the preference, you choose a date for it to take effect and the expiration date defining a maximum payment limit.


1. Send a **POST** with the parameters `expires`, `expiration_date_from` and `expiration_date_to` to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post).
2. In `expires`, enter `true`.
3. In `expiration_date_from`, enter the effective start date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas.
4. In `expiration_date_to`, enter the expiration date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas
5. Execute the request and make sure that the data and time matches the example shown below. 



```json
"expire": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```
