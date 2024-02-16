# Crear cancelación

Es posible cancelar una compra específica desde el ID de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API de [Cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put).

```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();
Payment payment = client.cancel("<PAYMENT_ID>"); 
```