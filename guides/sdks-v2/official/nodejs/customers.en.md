## Create customer

It is possible to create customers using the SDK below. For details on the request parameters, check the [Create customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers/post) API.

[[[
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { "email": "test_payer_12345@testuser.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  var card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer_id": customer.id,
    "issuer_id": "23",
    "payment_method_id": "debit_card"
  }

  mercadopago.card.create(card_data).then(function (card) {
    console.log(card);
  });

});

```
]]]

## Search customers

It is possible to search customers using the SDK below. For details on the request parameters, check the [Search customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_search/get) API.

[[[
```node

  var filters = {
    email: "test_payer_12345@testuser.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
]]]


## Update customer

It is possible to update customers using the SDK below. For details on the request parameters, check the [Update customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_id/put) API.

[[[
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { 
  "email": "test_payer_12345@testuser.com",
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
  "default_address": "Casa",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "description": "Informações do cliente",
  "default_card": "None
 }

mercadopago.customers.update(customer_data).then(function (customer) {
 // code ...
});

```
]]]