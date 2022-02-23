## Crear cancelación

Cancelar una compra para un pago específico.

[[[
```node
 
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.payment.cancel('payment_id');
 
```
]]]