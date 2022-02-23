## Create full refund

Create a full refund for a specific payment.

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

## Create partial refund

Create a partial refund for a specific payment. 

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

## Get specific refund

Consultar reembolso específico de un pago determinado.

[[[
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
 //Do Stuff ..
});
```
]]]