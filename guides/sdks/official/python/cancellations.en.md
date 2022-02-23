## Create cancellation

Cancel a sale for a specific payment.

[[[
```python
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
 
payment_data = {
   "status": "cancelled"
}
 
payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
]]]
