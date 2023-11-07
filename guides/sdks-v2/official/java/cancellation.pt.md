# Criar cancelamento

É possível realizar o cancelamento de uma compra específica a partir do ID do pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API de [Cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put).

[[[
```java
MercadoPago.SDK.configure("YOUR_ACCESS_TOKEN");
 
Payment payment = Payment.findById("payment_id");
payment.setStatus(Payment.Status.cancelled);
payment.update();

 
```
]]]