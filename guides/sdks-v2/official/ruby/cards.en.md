## Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Get customer cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards/get) API.

[[[
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
]]]