## Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

[[[
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
]]]