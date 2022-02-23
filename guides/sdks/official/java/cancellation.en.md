## Create cancellation

Cancel a sale for a specific payment.

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Payment payment = Payment.findById("payment_id");
payment.setStatus(Payment.Status.cancelled);
payment.update();

 
```
]]]