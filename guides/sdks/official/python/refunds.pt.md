## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

[[[
```python
sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')
 
sdk.refund().create('payment_id')
```
]]]

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

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

Consultar reembolso específico de determinado pagamento.

[[[
```python
refunds_response = sdk.refund().list_all(payment_id)
refunds = refunds_response["response"]
```
]]]