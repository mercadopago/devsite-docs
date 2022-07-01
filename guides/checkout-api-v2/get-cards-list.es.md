# Consultar lista de tarjetas

Es posible consultar la lista de tarjetas guardadas para un determinado cliente. Para eso, envía un GET con el cliente `customer_id` al endpoint [/v1/customers/{customer_id}/cards](/developers/es/reference/cards/_customers_customer_id_cards/get) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs a continuación.


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


> PREV_STEP_CARD_ES
>
> Agregar nuevas tarjetas a un cliente
>
> Aprende a agregar nuevas tarjetas a un cliente previamente creado.
>
> [Agregar nuevas tarjetas a un cliente](/developers/es/docs/checkout-api/cards-and-customers-management/add-new-cards-to-customer)

> NEXT_STEP_CARD_ES
>
> Recibir pagos con tarjetas guardadas
>
> Aprende a recibir pagos desde tarjetas previamente guardadas en la cuenta del comprador.
>
> [Recibir pagos con tarjetas guardadas](/developers/es/docs/checkout-api/cards-and-customers-management/receive-payments-with-saved-cards)
