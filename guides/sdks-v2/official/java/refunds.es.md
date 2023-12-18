# Crear reembolso total

Puede crear un reembolso total con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](/developers/es/reference/chargebacks/_payments_id_refunds/post). 

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
BigDecimal amount = new BigDecimal("5");
client.refund(paymentId, amount);
```
]]]

# Crear reembolso parcial

Puede crear un reembolso parcial con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Refund refund = new Refund();
refund.setPaymentId("payment_id");
refund.save();
```
]]]

# Obtener reembolso específico

Puede obtener reembolsos específicos para ciertos pagos utilizando el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API de [Obtener reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
Long refundId = 1234L;
client.get(paymentId, refundId);
```
]]]

# Obtener lista de reembolsos

Puede ver todos los reembolsos de un pago específico utilizando el SDK a continuación. Para obtener detalles de los parámetros de la solicitud, acceda a la API [Obtener lista de reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/get)

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
client.list(paymentId);
```
]]]