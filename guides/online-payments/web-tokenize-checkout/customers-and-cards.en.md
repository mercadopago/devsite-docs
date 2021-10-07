# Customers and stored cards

> WARNING
>
> Pre-requisites
>
> * Have the [card data capture](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/receiving-payment-by-card) implemented.

Customers and cards are the way to store card data of your customers **safely** to improve the shopping experience.

This will allow your customers to complete their purchases much faster and easily, since they will not have to complete their card data again.

The *customers* represent your customers. The cards that you store will be valid for this specific customer.

## Creation of a customer and a card

To create a `Customer` and a `Card` at the same time it is necessary to send at least the `email`, `payment_method_id`, `issuer_id` and `token` fields.

The `token` is the one you capture when you [handle the answer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card) of the *Web Tokenize Checkout*.


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
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("john@yourdomain.com");
customer.save();

Issuer issuer = new Issuer();
issuer.setId("3245612");

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.setIssuer(issuer);
card.setPaymentMethodId("debit_card");
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
    "customer_id": customer.body.id,
     "issuer_id": "2353146",
    "payment_method_id": "debit_card"
  }

  mercadopago.card.create(card_data).then(function (card) {

  }).catch(function (error) {
   // Do Stuff...
  });

}).catch(function (error) {
 // Do Stuff...
});

```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

customer_data = {
  email: 'test@test.com',
}
customer_response = sdk.customer.create(customer_data)
customer = customer_response[:response]

card_data = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  customer_id: customer['id'],
  issuer_id: '2353146',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(card_data)
card = card_response[:response]

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test@test.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda"
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test@test.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "2353146",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]
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
> All payment methods with `master` as the payment_method_id value, must send an `issuer_id` when created. `issuer_id` is the identifier of the issuing bank.

> WARNING 
> 
> Important
> 
> If you receive an error message of type `"invalid parameter"` with HTTP 400 status code, make sure you are completing the fields `payment_method_id` and `issuer_id` correctly.

## Receive a payment from a Customer

In order to receive a payment from a stored card, it is necessary to include in your integration code the customer ID and the IDs of the user cards through the attributes `customerId` and `cardIds` in the `savedCards` parameter. 

For example:

```html
<script>
  mp.checkout({
    tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://www.my-store.com/process',
        savedCards: {
            cardIds: '1518023392627,1518023332143' // Card IDs
            customerId: '209277402-FqRqgEc3XItrxs'// Your customer ID
        }
    },
    render: {
        container: ‘.tokenizer-container’,
        label: ‘Pay’
    }
  });
</script>
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

  Customer customer = Customer.findById(customerId);
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
<script>
// Get the IDs from the cards obtained from calling the API in the previous step
  const customerCardIds = cardsResponse.map(card => card.id);

// Initialize the checkout
  mp.checkout({
    tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://www.mi-sitio.com/process',
        savedCards: {
            cardIds: customerCardIds, // Obtained cardIds
            customerId: '209277402-FqRqgEc3XItrxs' // Your customer ID
        }
    },
    render: {
        container: ‘.tokenizer-container’,
        label: ‘Pagar’
    }
  });
</script>
```

> This documentation uses the new library version. To see the previous version, go to [Customers and stored cards with MercadoPago.js V1 section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/v1/customers-and-cards).


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
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

  print_r($card);

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = Customer.findById("247711297-jxOV430go9fx2e");

Issuer issuer = new Issuer();
issuer.setId("3245612");

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getID());
card.setIssuer(issuer);
card.setPaymentMethodId("debit_card");
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
    "customer": customer.id,
    "issuer_id": "2332451",
    "payment_method_id": "debit_card"
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
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_data = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  customer_id: customer['id'],
  issuer_id: '2332451',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(card_data)
card = card_response[:response]

puts card

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var customerClient = new CustomerClient();
Customer customer = await customerClient.GetAsync("247711297-jxOV430go9fx2e");

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = customerClient.CreateCardAsync(customer.Id, cardRequest);

Console.WriteLine(card.Id);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_response = sdk.customer().get("247711297-jxOV430go9fx2e")
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "2332451",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)
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

> WARNING 
> 
> Important
> 
> If you receive an error message of type `"invalid parameter"` with HTTP 400 status code, make sure you are completing the fields `payment_method_id` and `issuer_id` correctly.

## Search for a Customer

In case you do not know what the `id` of your `Customer` is, you can use the `Customer Search` API by doing an `HTTP GET` request. The required parameter for this is `email`:

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

  ArrayList<Customer> customers = Customer.search(filters, false).resources();


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

customers_response = sdk.customer.search(filters: { email: 'test@test.com' })
customer = customer_response[:response]

```
```csharp
var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test@test.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;
```
```python
filters = {
    "email": "test@test.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]
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

## Get the Cards of a Customer

You can get the complete list of `Cards` of a client by making an `HTTP GET` request:

[[[
```php
<?php
	$customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>
```
```java

  Customer customer = Customer.findById(customerId);
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

## Modify a customer

To modify a client you need to send the `customer_id` and the fields you want to update in an `HTTP PUT` request. 

The fields that can be modified from a client are:
| Attribute | Description |
| -------- | ----------- |
| `address` | Address. |
| `default_address` | Default address. |
| `default_card` | Default card. |
| `description` | Description. |
| `email` | Account e-mail. |
| `first_name` | First name. |
| `last_name` | Last name. |
| `phone` | Registered phone. |
| `identification` | Document type and number. |

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "user@user.com";
  $customer->first_name = "john";
  $customer->last_name = "wagner";
  $customer->phone = array("area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]", "number" => "001234567");
  $customer->identification = array("type" => "[FAKER][IDENTIFICATION][TYPE]", "number" => "12341234");
  $customer->default_address = "Home";
  $customer->address = array("zip_code" => "[FAKER][ADDRESS][ZIP_CODE]", "street_name" => "[FAKER][ADDRESS][STREET_NAME]", "street_number" => "2");
  $customer->description = "Customer information";
  $customer->default_card = "None";
  $customer->update();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { 
  "email": "test@test.com",
  "first_name": "john" ,
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  }, 
  "default_address": "Home",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "description": "Customer information",
  "default_card": "None
 }

mercadopago.customers.update(customer_data).then(function (customer) {
 // code ...
});

```

```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Phone phone = new Phone();
phone.setAreaCode("[FAKER][PHONE_NUMBER][AREA_CODE]");
phone.setNumber("001234567");

DefaultAddress defaultAddress = new DefaultAddress();
defaultAddress.setZipCode("[FAKER][ADDRESS][ZIP_CODE]");
defaultAddress.setStreetName("[FAKER][ADDRESS][STREET_NAME]");
defaultAddress.setStreetNumber(2);

Identification identification = new Identification();
identification.setType("[FAKER][IDENTIFICATION][TYPE]");
identification.setNumber(12341234);

Customer customer = new Customer();
customer.setEmail("user@user.com");
customer.setFirstName("john");
customer.setLastName("wagner");
customer.setDefaultAddress("Home");
customer.setPhone(phone);
customer.setIdentification(identification);
customer.setDescription("Customer information");
customer.setDefaultCard("None");
cusotmer.setAddress(defaultAddress);
customer.update();

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'user@user.com',
  first_name: 'john',
  last_name: 'wagner',
  default_address: 'home',
  phone: {
    area_code: '[FAKER][PHONE_NUMBER][AREA_CODE]',
    number: '001234567'
  },
  identification: {
    type: '[FAKER][IDENTIFICATION][TYPE]',
    number: '12341234'
  },
  address: {
    zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
    street_name: '[FAKER][ADDRESS][STREET_NAME]',
    street_number: '2'
  },
  description: 'Customer information',
  default_card: 'None'
}
customer_response = sdk.customer.update(customer_id ,customer_request)
customer = customer_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var phoneRequest = new PhoneRequest
{
  AreaCode = "[FAKER][PHONE_NUMBER][AREA_CODE]",
  Number = "001234567"
};

var identificationRequest = new IdentificationRequest
{
  Type = "[FAKER][IDENTIFICATION][TYPE]",
  Number = "12341234"
};

var addressRequest = new AddressRequest
{
  ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
  StreetName = "[FAKER][ADDRESS][STREET_NAME]",
  StreetNumber = "2"
};

var customerRequest = new CustomerRequest
{
    Email = "test@test.com",
    FirstName = "john",
    LastName = "wagner",
    DefaultAddress = "home",
    Description = "Customer information",
    DefaultCard = "None",
    Phone = phoneRequest,
    Identification = identificationRequest,
    Address = addressRequest

};
var customerClient = new CustomerClient();
Customer customer = await customerClient.Update(customerRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": 'user@user.com',
  "first_name": 'john',
  "last_name": 'wagner',
  "default_address": 'home',
  "phone": {
    "area_code": '[FAKER][PHONE_NUMBER][AREA_CODE]',
    "number": '001234567'
  },
  "identification": {
    "type": '[FAKER][IDENTIFICATION][TYPE]',
    "number": '12341234'
  },
  "address": {
    "zip_code": '[FAKER][ADDRESS][ZIP_CODE]',
    "street_name": '[FAKER][ADDRESS][STREET_NAME]',
    "street_number": '2'
  },
  "description": 'Customer information',
  "default_card": 'None'
}
customer_response = sdk.customer().update(customer_id, customer_data)
customer = customer_response["response"]

```
```curl

curl -X PUT \
    'https://api.mercadopago.com/v1/customers/{id}' \
    -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
    -d '{
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  },
  "description": "Customer information" 
}'

```
]]]

Example of response with sending the `customer_id`:
```json
{
  "id": "xxxxxxxxxxxxxxxxxxxxx",
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": 001234567
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": 12341234
  },
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": 2
  },
  "description": "Customer information",
  "date_created": "2021-05-25T15:36:23.541Z",
  "metadata": {},
  "cards": [
    {}
  ],
  "addresses": [
    {}
  ]
}
```
Example of response without including the `customers_id` parameter:
```json
{
  "message": "missing customer id"
}
```
> NOTE
>
> Note
>
> If you don't have the `customer_id`, [check the Customers API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_search/get) and generate an` HTTP GET` request using the `email` parameter to get it.
