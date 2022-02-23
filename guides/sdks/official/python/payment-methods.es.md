## Obtener medios de pago

Consulta todos los medios de pago disponibles y obtén un listado con el detalle de cada uno y sus propiedades.

[[[
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
]]]