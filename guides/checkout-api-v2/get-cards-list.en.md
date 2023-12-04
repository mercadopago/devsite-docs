# Get cards list

You can consult the list of saved cards for a particular customer. To do so, send a **GET** with the customer's `customer_id` to the endpoint [/v1/customers/{customer_id}/cards](/developers/en/reference/cards/_customers_customer_id_cards/get) and execute the request or, if you prefer, use one of our SDKs below.

[[[

```php
<?php
  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  echo implode ($cards);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerCardClient customerCardClient = new CustomerCardClient();

MPResourceList<CustomerCard> list = customerCardClient.listAll("000000000-abcdEfghiJklM");
List<CustomerCard> customerCards = list.getResults();

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
```curl

curl -X GET \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

```
]]]

The response will bring the following result:

```json
[{
"id": "1490022319978",
"expiration_month": 12,
"expiration_year": 2020,
"first_six_digits": "415231",
"last_four_digits": "0001",
...
}]
```