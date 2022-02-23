## Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

[[[
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
]]]