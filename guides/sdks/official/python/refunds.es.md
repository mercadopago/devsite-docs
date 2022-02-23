## Crear reembolso total

Crear reembolsos totales para un pago específico. 

[[[
```python
sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')
 
sdk.refund().create('payment_id')
```
]]]

## Crear reembolso parcial

Crear reembolsos parciales para un pago específico.

[[[
```python
sdk = mercadopago.SDK('YOUR_ACCESS_TOKEN')
 
refund_object = {
   'amount': 0.0
}
 
sdk.refund().create('payment_id', refund_object)
```
]]]

## Obtener reembolso específico

Consultar reembolso específico de un pago determinado.

[[[
```python
refunds_response = sdk.refund().list_all(payment_id)
refunds = refunds_response["response"]
```
]]]