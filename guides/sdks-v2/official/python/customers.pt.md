# Criar cliente

É possível criar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar Cliente](/developers/pt/reference/customers/_customers/post).

[[[
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test_payer_12345@testuser.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
]]]

# Pesquisar clientes

É possível pesquisar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Pesquisar Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_search/get).


[[[
```python

filters = {
    "email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
]]]

# Atualizar cliente

É possível atualizar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Atualizar clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_id/put).

[[[
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": 'user@user.com',
  "first_name": 'john',
  "last_name": 'wagner',
  "default_address": 'Casa',
  "phone": {
    "area_code": '[FAKER][PHONE_NUMBER][AREA_CODE]',
    "number": '001234567'
  },
  "identification": {
    "type": '[FAKER][IDENTIFICATION][TYPE]',
    "number": '12341234'
  },
  "address": {
    "zip_code": '[FAKER][ADDRESS][ZIP_CODE]',
    "street_name": '[FAKER][ADDRESS][STREET_NAME]',
    "street_number": '2'
  },
  "description": 'Informações do cliente',
  "default_card": 'None'
}
customer_response = sdk.customer().update(customer_id, customer_data)
customer = customer_response["response"]

```
]]]