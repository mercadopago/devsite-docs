# Invoice description

Invoice description is a setting that allows you to define the name of the establishment that will be displayed on the buyer's invoice. This allows for business identification and avoids unnecessary disputes.

To display the description on the buyer's invoice, send a **POST** with the `statement_descriptor` parameter informing the name of the establishment as shown in the example below to the [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) endpoint and execute the request.

```json
"statement_descriptor": "MYBUSINESS"
