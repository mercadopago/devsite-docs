## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment..

[[[
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
]]]