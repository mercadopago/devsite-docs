# Criar reembolso total

É possível criar um reembolso total utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post). 

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
BigDecimal amount = new BigDecimal("5");
client.refund(paymentId, amount);
```
]]]

# Criar reembolso parcial

É possível criar um reembolso parcial utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post).  

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Refund refund = new Refund();
refund.setPaymentId("payment_id");
refund.save();
```
]]]

# Obter reembolso específico

É possível obter reembolsos específicos de determinados pagamentos utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
Long refundId = 1234L;
client.get(paymentId, refundId);
```
]]]

# Obter lista de reembolso

É possível consultar todos os reembolsos para um pagamento específico utilizando o SDK abaixo. Para detalhes dos parâmetros de requisição, acesse a API [Obter lista de reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/get).

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
client.list(paymentId);
```
]]]