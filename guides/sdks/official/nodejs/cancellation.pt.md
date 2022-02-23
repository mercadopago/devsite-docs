## Criar cancelamento

Cancelar uma compra de um pagamento específico.

[[[
```node
 
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.payment.cancel('payment_id');
 
```
]]]