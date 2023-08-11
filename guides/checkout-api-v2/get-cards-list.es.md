# Consultar lista de tarjetas

Es posible consultar la lista de tarjetas guardadas para un determinado cliente. Para eso, envía un **GET** con el cliente `customer_id` al endpoint [/v1/customers/{customer_id}/cards](/developers/es/reference/cards/_customers_customer_id_cards/get) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs a continuación.

[[[
```php

<?php
      $cards = MercadoPago\Card::all(array("customer_id" => "0000000000-abcdEfghiJlm"));
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

La respuesta traerá el siguiente resultado:

### Respuesta

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