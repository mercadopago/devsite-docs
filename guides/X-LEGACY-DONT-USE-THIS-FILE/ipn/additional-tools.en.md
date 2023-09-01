# Additional Tools

## Search payments

If you require a list of payments you can make an API call to the payments endpoint. Please find all the information you need about the request and response parameters in our [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_search/get) documentation.

You can use body parameters of a `payment` as query params to be able to filter the results:

* **Begin date:** begin date for searching
* **End date:** end date for searching
* **Status:** payment status

Here’s an example of an API call using these query params:


```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```
