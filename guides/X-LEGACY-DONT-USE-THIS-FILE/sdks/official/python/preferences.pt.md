## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```python
# SDK do Mercado Pago
import mercadopago

# Configure as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crie um item na preferência
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------

----[mlc, mco]----

[[[
```python
# SDK do Mercado Pago
import mercadopago

# Configure as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crie um objeto de preferência
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------