## Crear cancelación

Es posible cancelar una compra específica desde el ID de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API de [Cancelación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_payment_id/put).

[[[
```node
 
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.payment.cancel('payment_id');
 
```
]]]