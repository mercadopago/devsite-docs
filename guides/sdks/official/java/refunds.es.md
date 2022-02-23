## Crear reembolso total

Crear reembolsos totales para un pago específico. 

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
BigDecimal amount = new BigDecimal("5");
client.refund(paymentId, amount);
```
]]]

## Crear reembolso parcial

Crear reembolsos parciales para un pago específico.

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Refund refund = new Refund();
refund.setPaymentId("payment_id");
refund.save();
```
]]]

## Obtener reembolso específico

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
Long refundId = 1234L;
client.get(paymentId, refundId);
```
]]]

## Obtener lista de reembolsos

Consultar todos los reembolsos para un pago específico.

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
client.list(paymentId);
```
]]]