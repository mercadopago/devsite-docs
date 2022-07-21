# Get cards list

You can consult the list of saved cards for a particular customer. To do so, send a **GET** with the customer's `customer_id` to the endpoint [/v1/customers/{customer_id}/cards](/developers/en/reference/cards/_customers_customer_id_cards/get) and execute the request or, if you prefer, use one of our SDKs below.


[[[

```php

<?php
$customer = MercadoPago\Customer::find_by_id($id);
$cards = $customer->cards();
?>

```
```node

var filters = {
id: customer_id
};

Mercadopago.customers.search({
qs: filters
}).then(function (customer) {
console.log(customer);
});

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");
customerClient.listCards(customer.getId());

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

The response will bring the following result.

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

> PREV_STEP_CARD_EN
>
> Add new cards to a customer
>
> Learn how  to add new cards to a previously created customer.
>
> [Add new cards to a customer](/developers/en/docs/checkout-api/cards-and-customers-management/add-new-cards-to-customer)

> NEXT_STEP_CARD_EN
>
> Receive payments with saved cards
>
> Learn how to receive payments from cards previously saved in the buyer's account.
>
> [Receive payments with saved cards](/developers/en/docs/checkout-api/cards-and-customers-management/receive-payments-with-saved-cards)
