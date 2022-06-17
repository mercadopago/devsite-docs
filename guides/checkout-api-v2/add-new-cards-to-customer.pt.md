# Adicionar novos cartões a um cliente

Se deseja adicionar novos cartões a determinado cliente, basta enviar um POST ao endpoint [/v1/customers/{customer_id}/cards](developers/pt/reference/cards/_customers_customer_id_cards/post) com as novas informações de cartão e executar a requisição ou, se preferir, utilize um de nossos SDKs abaixo.


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
    "customer_id": customer.id,
    "issuer_id": "3245612",
    "payment_method_id": "debit_card"
  }

  mercadopago.card.create(card_data).then(function (card) {
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

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

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

> PREV_STEP_CARD_PT
>
> Buscar cliente
>
> Saiba como buscar um cliente a partir de informações específicas.
>
> [Buscar cliente](/developers/pt/docs/checkout-api/customer-management/search-customers)

> NEXT_STEP_CARD_PT
>
> Consultar lista de cartões
>
> Saiba como consultar a lista de cartões de determinado cliente.
>
> [Consultar lista de cartões](/developers/pt/docs/checkout-api/customer-management/get-cards-list)