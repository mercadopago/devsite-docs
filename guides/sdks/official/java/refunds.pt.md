## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
BigDecimal amount = new BigDecimal("5");
client.refund(paymentId, amount);
```
]]]

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Refund refund = new Refund();
refund.setPaymentId("payment_id");
refund.save();
```
]]]

## Obter reembolso específico

Consultar reembolso específico de determinado pagamento.

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
Long refundId = 1234L;
client.get(paymentId, refundId);
```
]]]

## Obter lista de reembolso

Consultar todos os reembolsos para um pagamento específico.

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
client.list(paymentId);
```
]]]