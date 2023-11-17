# Create cancellation

It is possible to cancel a specific purchase from the payment ID using the SDK below. For details on request parameters, check the [Cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put) API.

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Payment payment = Payment.findById("payment_id");
payment.setStatus(Payment.Status.cancelled);
payment.update();

 
```
]]]