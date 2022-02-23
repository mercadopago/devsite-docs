## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

[[[
```node
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
var refund = {
 payment_id: 'payment_id'
};
 
mercadopago.refund.create(refund).then(result => {
 console.log(result.response)
})
```
]]]

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

[[[
```node
var refund = {
 payment_id: payment_id,
 amount: 0.0
};
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.refund.create(refund).then((result) => {
 console.log(result.response.id)
});
```
]]]

## Obter reembolso específico

Consultar reembolso específico de determinado pagamento.

[[[
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
 //Do Stuff ..
});
```
]]]