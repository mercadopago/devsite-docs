## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment.

[[[
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
]]]