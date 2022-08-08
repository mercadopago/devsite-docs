# Search customer

If you need specific customer data, such as ID, address or registration date, you can get it through our customer API. To do this, send a GET with the customer's email to the endpoint [/v1/customers/search](/developers/en/reference/customers/_customers_search/get) and execute the request or, if you prefer, use one of our SDKs below.

[[[

```php

<?php

$filters = array(
"id"=>"247711297-jxOV430go9fx2e"
);

$customers = MercadoPago\Customer::search($filters);

?>

```
```node

var filters = {
email: "test_payer_12345@testuser.com"
};

Mercadopago.customers.search({
qs: filters
}).then(function (customer) {
console.log(customer);
});

```
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test_payer_12345@testuser.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
Filters = new Dictionary<string, object>
{
["email"] = "test_payer_12345@testuser.com",
},
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
"email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
```curl

curl -X GET \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/customers/search' \
-d '{
"email": "test_user_19653727@testuser.com"
}'
```
]]]

The response will bring the following result.

```json
{
"paging": {
"limit": 10,
"offset": 0,
"total": 1
},
"results": [
{
"address": {
"id": null,
"street_name": null,
"street_number": null,
"zip_code": null
},
"addresses": [],
"cards": [
{
...
}
],
"date_created": "2017-05-05T00:00:00.000-04:00",
"date_last_updated": "2017-05-05T09:23:25.021-04:00",
"date_registered": null,
"default_address": null,
"default_card": "1493990563105",
"description": null,
"email": "test_payer_12345@testuser.com",
"first_name": null,
"id": "123456789-jxOV430go9fx2e",
"identification": {
"number": null,
"type": null
},
"last_name": null,
"live_mode": false,
"metadata": {},
"phone": {
"area_code": null,
"number": null
}
}
]
}
```

> PREV_STEP_CARD_EN
>
> Modify customer
>
> Learn how to change data from a previously created customer
>
> [Modify Customer](/developers/en/docs/checkout-api/cards-and-customers-management/modify-customer)

> NEXT_STEP_CARD_EN
>
> Add new cards to a customer
>
> Learn how to add new cards to a previously created customer.
>
> [Add new cards to a customer](/developers/en/docs/checkout-api/cards-and-customers-management/add-new-cards-to-customer)
