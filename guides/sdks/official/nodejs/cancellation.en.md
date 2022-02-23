## Create cancellation

Cancel a sale for a specific payment.

[[[
```node
 
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.payment.cancel('payment_id');
 
```
]]]