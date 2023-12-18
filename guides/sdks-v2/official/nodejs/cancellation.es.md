## Crear cancelación

Es posible cancelar una compra específica desde el ID de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API de [Cancelación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_payment_id/put).

```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

payment.cancel({
	id: '<PAYMENT_ID>',
	requestOptions: {
		idempotencyKey: '<IDEMPOTENCY_KEY>'
	},
}).then(console.log).catch(console.log);
```