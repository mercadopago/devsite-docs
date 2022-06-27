# Consultar lista de cartões

É possível consultar a lista de cartões salvos para determinado cliente. Para isso, envie um GET com o `customer_id` do cliente ao endpoint [/v1/customers/{customer_id}/cards](/developers/pt/reference/cards/_customers_customer_id_cards/get) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.


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

A resposta trará o seguinte resultado.

### Resposta

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

> PREV_STEP_CARD_PT
>
> Adicionar novos cartões a um cliente
>
> Saiba como buscar adicionar novos cartões a um cliente previamente criado.
>
> [Adicionar novos cartões a um cliente](/developers/pt/docs/checkout-api/cards-and-customers-management/add-new-cards-to-customer)

> NEXT_STEP_CARD_PT
>
> Receber pagamentos com cartões salvos
>
> Saiba como receber pagamentos a partir de cartões previamente salvos na conta do comprador.
>
> [Receber pagamentos com cartões salvos](/developers/pt/docs/checkout-api/cards-and-customers-management/receive-payments-with-saved-cards)