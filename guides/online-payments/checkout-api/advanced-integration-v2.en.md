# Advanced Integration

## Remember your customers and cards

Use our APIs to save your customer's card references and offer them a better experience. This way, your customers won't need to fill out their data every time and their payments will be completed faster.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create customers and cards

To create customers and cards, submit the e-mail field and generated token.
You will add every customer using the `customer` value, and cards as `card`.

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
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { "email": "test@test.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  var card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  });

});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("john@yourdomain.com");
customer.save();

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.save();

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

MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

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
```curl

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'

```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

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
> For correct data, we recommend saving card data after making a successful payment.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add new cards to a customer

To add new cards to a customer, create a token and make a `HTTP POST` to the `customer`.

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
  });
});


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
```curl
curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers' \
    -d '{"email": "test@test.com"}'

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'
```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response


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

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use saved cards for payments

For customers to make payments with their saved data, you need to capture the security code again. For security reasons, Mercado Pago can't save that information.

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Display saved cards to your customer

First, get the saved card list so that your customer can choose one to make the payment:

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

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```ruby

    customer = MercadoPago::Customer.load(customer_id);
    cards = customer.cards;

```
```csharp

customer = Customer.FindById("customer.Id");
List<Card> cards = customer.Cards;

```
```curl

curl -X GET \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
```

]]]

Saved card data response:

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

And you can prepare the form like this:

```html
<li>
   <label>Payment Method:</label>
   <select id="cardId" name="cardId"></select>
</li>
<li id="cvv">
   <label for="cvv">Security code:</label>
   <input type="text" id="cvv" placeholder="123" />
</li>
<script>
   const customerCards = [{
       "id": "3502275482333",
       "last_four_digits": "9999",
       "payment_method": {
           "name": "amex",
       },
       "security_code": {
           "length": 4,
       }
   }];

   // Append customer cards to select element
   const selectElement = document.getElementById('cardId');
   const tmpFragment = document.createDocumentFragment();
   customerCards.forEach(({id, last_four_digits, payment_method}) => {
       const optionElement = document.createElement('option');
       optionElement.setAttribute('value', id)
       optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`
       tmpFragment.appendChild(optionElement);
   })
   selectElement.appendChild(tmpFragment)
</script>
```
<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Capture security code

The customer needs to enter the security code in a flow similar to [card data capture](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card/#bookmark_card_data_capture). You need to create a token by submitting the form with card ID and security code.

```javascript
(async function createToken() {
       try {
           const token = await mp.createCardToken({
               cardId: document.getElementById('cardId').value,
               securityCode: document.getElementById('cvv').value,
           })

            // Use the received token to make a POST request to your backend
           console.log('token received: ', token.id)
       }catch(e) {
           console.error('error creating token: ', e)
       }
   })()
```

> This documentation uses the new MercadoPago.js V2 version. To see the previous version, go to the [old Checkout API section.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/advanced-integration)

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Create payment

Once you get the token, you can generate the payment for the relevant amount. As the payment is made using saved card data, you need to send the customer ID along with the token.

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->installments = 1;
  $payment->payer = array(
        "type" => "customer",
        "id" => "123456789-jxOV430go9fx2e"
    );

  $payment->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  payer: {
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.type = "customer";
payer.id = "123456789-jxOV430go9fx2e";

Payment payment = new Payment();
payment.setTransactionAmount(100f);
payment.setInstallments(1);
payment.setToken('ff8080814c11e237014c1ff593b57b4d');
payment.setPayer(payer);

payment.save();

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.installments = 1
payment.payer = {
  type: "customer"
  id: "123456789-jxOV430go9fx2e"
}

payment.save()

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \ 
  'https://api.mercadopago.com/v1/payments' \
  -d '{
  transaction_amount: 100,
  token: "ff8080814c11e237014c1ff593b57b4d",
  installments: 1,
  payer: {
      type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
}'

```

]]]


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for an existing customer

You can search for customer information, if needed; for example, when you don't know the assigned ID. The e-mail is the required parameter to get it.

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
    email: "test@test.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


```
```ruby

    customers = MercadoPago::Customer.search(email: "test@test.com");

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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

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

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check customer's card list

[[[
```php

<?php
    $customer = MercadoPago\Customer::find_by_id($customer_id);
  $cards = $customer->cards();
?>

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```ruby

    customer = MercadoPago::Customer.load(customer_id);
    cards = customer.cards;

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

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

## Cancellations and refunds

Cancellations occur when a cash payment is not completed before the expiration date, and the seller decides to cancel it. And refunds occur when the payment is made, but the seller decides to cancel it, partially or entirely.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds).

---
### Next steps

> LEFT_BUTTON
>
> Other features
>
> Set up your payment and adapt the integration of Mercado Pago to your business.
>
> [Other features](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-features-v2)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
