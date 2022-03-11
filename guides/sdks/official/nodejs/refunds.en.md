## Create full refund

You can create a full refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API.

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

You can create a partial refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

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

You can get a specific refund of certain payments using the SDKs below. For details on the request parameters, check the [Get specific refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get) API.

[[[
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
 //Do Stuff ..
});
```
]]]