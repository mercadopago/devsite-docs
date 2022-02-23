## Get payment methods

Consult all the available payment methods and obtain a list with the details of each one and its properties.

[[[
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
]]]