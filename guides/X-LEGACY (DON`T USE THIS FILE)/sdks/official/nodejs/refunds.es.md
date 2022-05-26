## Crear reembolso total

Puede crear un reembolso total con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).  

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

## Crear reembolso parcial

Puede crear un reembolso parcial con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post). 

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

## Obtener reembolso específico

Puede obtener reembolsos específicos para ciertos pagos utilizando el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API de [Obtener reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
 //Do Stuff ..
});
```
]]]