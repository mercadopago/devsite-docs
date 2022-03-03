## Create full refund

You can create a full refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
BigDecimal amount = new BigDecimal("5");
client.refund(paymentId, amount);
```
]]]

## Create partial refund

You can create a partial refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Refund refund = new Refund();
refund.setPaymentId("payment_id");
refund.save();
```
]]]

## Get specific refund

You can get a specific refund of certain payments using the SDKs below. For details on the request parameters, check the [Get specific refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get) API.

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
Long refundId = 1234L;
client.get(paymentId, refundId);
```
]]]

## Get refunds list

You can get all refunds for a specific payment using the SDK below. For details of the request parameters, access the API [Get refunds list](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/get).

[[[
```java
PaymentRefundClient client = new PaymentRefundClient();

Long paymentId = 123456789L;
client.list(paymentId);
```
]]]

