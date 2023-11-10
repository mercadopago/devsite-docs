# Crear cancelación

Es posible cancelar una compra específica desde el ID de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API de [Cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put).

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Payment payment = Payment.findById("payment_id");
payment.setStatus(Payment.Status.cancelled);
payment.update();

 
```
]]]