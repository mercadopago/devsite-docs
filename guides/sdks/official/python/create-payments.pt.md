## Criar pagamento

É possível criar e acrescentar informações de determinado pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post).

[[[
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "installments": 1,
    "payer": {
        "type": "customer",
        "id": "123456789-jxOV430go9fx2e"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
]]]