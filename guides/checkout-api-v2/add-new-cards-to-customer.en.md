# Add new cards to a customer


If necessary, it is possible to add new cards to a specific customer. To do this, search for the customer and define the new card data using one of the codes available below.


[[[
```php

<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$customer = MercadoPago\Customer::find_by_id("247711297-jxOV430go9fx2e");

$card = new MercadoPago\Card();
$card->token = "9b2d63e00d66a8c721607214cedaecda";
$card->customer_id = $customer->id;
$card->issuer = array("id" => "3245612");
$card->payment_method = array("id" => "debit_card");
$card->save();

print_r($card);

?>

```
```node

var Mercadopago = require('mercadopago');
Mercadopago.configure({
access_token: 'ENV_ACCESS_TOKEN'
});

var filters = {
id: "247711297-jxOV430go9fx2e"
};

Mercadopago.customers.search({
qs: filters
}).then(function (customer) {
card_data = {
"token": "9b2d63e00d66a8c721607214cedaecda",
"customer_id": customer.id,
"issuer_id": "3245612",
"payment_method_id": "debit_card"
}

Mercadopago.card.create(card_data).then(function (card) {
console.log(card);
});
});


```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
.id("3245612")
.build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
.token("9b2d63e00d66a8c721607214cedaecda")
.issuer(issuer)
.paymentMethodId("debit_card")
.build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_request = {
token: '9b2d63e00d66a8c721607214cedaecda',
issuer_id: '3245612',
payment_method_id: 'debit_card'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

puts card

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerClient = new CustomerClient();
Customer customer = await customerClient.GetAsync("247711297-jxOV430go9fx2e");

var cardRequest = new CustomerCardCreateRequest
{
Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

Console.WriteLine(card.Id);

```
```python

import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_response = sdk.customer().get("247711297-jxOV430go9fx2e")
customer = customer_response["response"]

card_data = {
"token": "9b2d63e00d66a8c721607214cedaecda",
"issuer_id": "3245612",
"payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)

```
```curl

curl -X GET \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

curl -X POST \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
-d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer": {"id": "3245612"}, "payment_method_id":"debit_card"}'
```
]]]

The response will bring the following result.

```json
{
"id": "1493990563105",
"expiration_month": 12,
"expiration_year": 2020,
"first_six_digits": "503175",
"last_four_digits": "0604",
"payment_method": {
"id": "master",
"name": "master",
"payment_type_id": "credit_card",
"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif",
"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif"
},
"security_code": {
"length": 3,
"card_location": "back"
},
"issuer": {
"id": 3,
"name": "Mastercard"
},
"cardholder": {
"name": "Card holdername",

"identification": {
"number": "12345678",
"type": "DNI"
}

},
"date_created": "2017-05-05T09:22:30.893-04:00",
"date_last_updated": "2017-05-05T09:22:30.893-04:00",
"customer_id": "255276729-yLOTNHQjpDWw1X",
"user_id": "255276729",
"live_mode": false
}
```

> PREV_STEP_CARD_EN
>
> Search customer
>
> Learn how to search for a customer based on specific information.
>
> [Search Customer](/developers/en/docs/checkout-api/cards-and-customers-management/search-customers)

> NEXT_STEP_CARD_EN
>
> Get cards list
>
> Learn how to consult the list of cards for a given customer.
>
> [Get cards list](/developers/en/docs/checkout-api/cards-and-customers-management/get-cards-list)
