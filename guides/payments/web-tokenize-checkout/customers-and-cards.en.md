# Customers and stored cards

> WARNING
>
> Pre-requisites
>
> * Have the [card data capture](https://www.mercadopago.com.ar/developers/en/guides/payments/web-tokenize-checkout/receiving-payment-by-card)implemented.

Customers and cards are the way to store card data of your customers **safely** to improve the shopping experience.

This will allow your customers to complete their purchases much faster and easily, since they will not have to complete their card data again.

The *customers* represent your customers. The cards that you store will be valid for this specific customer.

## Creation of a customer and a card

To create a `Customer` and a `Card` at the same time it is necessary to send at least the `email` and `token` fields.

The `token` is the one you capture when you [handle the answer](https://www.mercadopago.com.ar/developers/en/guides/payments/api/receiving-payment-by-card) of the *Web Tokenize Checkout*.


> NOTE
>
> Note
>
> We recommend storing the card data after you have made a payment successfully, to make sure they are correct.



[[[
```php

<?php   

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "test@test.com";
  $customer->save();

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id();
  $card->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");
customer.save();

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

customer_data = { "email": "test@test.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {

  }).catch(function (error) {
   // Do Stuff...
  });

}).catch(function (error) {
 // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.new()
customer.email = "test@test.com"
customer.save

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

```
```csharp
MercadoPago.SDK.AccessToken = "YOUR_ACCESS_TOKEN";

  Customer customer = new Customer()
    {
      Email = "test@test.com"
    };
    customer.Save();

  Card card = new Card()
    {
      Token = "9b2d63e00d66a8c721607214cedaecda",
      CustomerId = customer.Id
    };

      card.Save();
```
]]]

Server response:

```json
{
	"id": "123456789-jxOV430go9fx2e",
	"email": "test@test.com",
	...
	"default_card": "1490022319978",
	"default_address": null,
	"cards": [{
		"id": "1490022319978",
		"expiration_month": 12,
		"expiration_year": 2020,
		"first_six_digits": "415231",
		"last_four_digits": "0001",
		...
	}],
	"addresses": [],
	"live_mode": false
}
```

> NOTE
>
> Note
>
> All payment methods with `master` as the payment_method_id value, must send a `issuer_id` when created. `issuer_id` is the identifier of the issuing bank.

## Receive a payment from a Customer

In order to receive a payment from a stored card, it is necessary to include in the HTML code the customer ID and the IDs of the user cards through the attributes `data-customer-id` and `data-card-ids` . 

For example:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-customer-id="209277402-FqRqgEc3XItrxs"
    data-card-ids="1518023392627,1518023332143">
  </script>
</form>
```

> NOTE
>
> Note
>
> Card IDs should be separated by commas.

### 1. Get the IDs of the stored cards

You can list the stored cards in the *Web Tokenize Checkout* so your customer can choose which one he wants to pay with.

You can get the complete list of `Cards` from a customer by doing a `HTTP GET` request:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customer = MercadoPago::Customer.load(customer_id);
  cards = customer.cards;

```
```csharp
customer = Customer.FindById("customer.Id");
List<Card> cards = customer.Cards; 
```
]]]

Stored card information:

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

### 2. Use the card ids in the checkout

With this card information you can invoke the *Web Tokenize Checkout*.

For example:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-customer-id="209277402-FqRqgEc3XItrxs"
    data-card-ids="<?php
      foreach ($cards["response"] as $card) {
        echo $card["id"];
      }
    ?>">
  </script>
</form>
```


## Adding new cards to a customer

It is possible to add new cards to your `Customer`. For this you must create a `token` and make a `HTTP POST` request to `Customer`.


[[[
```php

<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = MercadoPago\Customer::find_by_id("247711297-jxOV430go9fx2e");

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id;
  $card->save();

  print_r($card);

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = Customer.load("247711297-jxOV430go9fx2e")

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getID());
card.save();

System.out.print(card.toString());

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var filters = {
  id: "247711297-jxOV430go9fx2e"
};

mercadopago.customers.search({
  qs: filters
}).then(function (customer) {
  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  }).catch(function (error) {
   // Do Stuff...
  });
}).catch(function (error) {
  // Do Stuff...
});


```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.load("247711297-jxOV430go9fx2e")

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

puts card

```
```csharp
MercadoPago.SDK.AccessToken = "ENV_ACCESS_TOKEN";

  Customer customer = Customer.FindById("247711297-jxOV430go9fx2e");

  Card card = new Card()
    {
      Token = "9b2d63e00d66a8c721607214cedaecda",
      CustomerId = customer.Id
    };

  card.Save();

  Console.WriteLine(card.Id);
```
]]]


Response:

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

## Search a _Customer_

In case you do not know what the `id` of your `Customer` is, you can use the `Customer Search` API by doing a `HTTP GET` request. The required parameter for this is `email`:

[[[
```php
<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


```
```node

  var filters = {
    email: "test@test.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customers = MercadoPago::Customer.search(email: "test@test.com");

```
```csharp
Dictionary<string, string> filters = new Dictionary<string, string>();
filters.Add("email", "test@test.com");

List<Customer> customers = Customer.Search(filters);
```
]]]

Response:

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
            "email": "test@test.com",
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

## Get the _Cards_ of a _Customer_

You can get the complete list of `Cards` of a client by making a `HTTP GET` request:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```ruby

	customer = MercadoPago::Customer.load(customer_id);
  cards = customer.cards;

```
```csharp
Customer customer = Customer.FindById("customer.Id");
List<Card> cards = customer.Cards;
```
]]]

Response:

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
