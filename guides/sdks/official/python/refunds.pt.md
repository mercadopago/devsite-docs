## Criar reembolso total

É possível criar um reembolso total utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post). 

[[[
```python
sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')
 
sdk.refund().create('payment_id')
```
]]]

## Criar reembolso parcial

É possível criar um reembolso parcial utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post).  

[[[
```python
sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')
 
refund_object = {
   'amount': 0.0
}
 
sdk.refund().create('payment_id', refund_object)
```
]]]

## Obter reembolso específico

É possível obter reembolsos específicos de determinados pagamentos utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```python
refunds_response = sdk.refund().list_all(payment_id)
refunds = refunds_response["response"]
```
]]]