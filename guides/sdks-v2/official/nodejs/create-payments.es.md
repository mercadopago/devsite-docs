## Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](/developers/es/reference/payments/_payments/post).

```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

payment.create({ body: {
	transaction_amount: 12.34,
	description: '<DESCRIPTION>',
	payment_method_id: '<PAYMENT_METHOD_ID>',
	payer: {
		email: '<EMAIL>'
	},
} }).then(console.log).catch(console.log);
```

# Buscar pagos

Puede buscar los pagos realizados en los últimos doce meses a partir de la fecha de búsqueda utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar Pagos](/developers/es/reference/payments/_payments_search/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const payment = new Payment(client);

payment.search({ options: {
	criteria: 'desc',
      sort: 'date_created',
      external_reference: 'ID_REF'
} })
.then(console.log).catch(console.log);
```

# Obtener pago

Es posible consultar toda la información de un pago a través del ID de pago utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener Pago](/developers/es/reference/payments/_payments_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new Payment(client);

payment.get({
	id: '<PAYMENT_ID>',
}).then(console.log).catch(console.log);
```

# Actualizar pago

Es posible cambiar los datos de un determinado pago enviando los parámetros con la información que desea actualizar a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar pago](/developers/es/reference/payments/_payments_id/put)

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new Payment(client);

payment.capture({
	id: '<PAYMENT_ID>',
	transaction_amount: 100,
	requestOptions: {
		idempotencyKey: '<IDEMPOTENCY_KEY>'
	}
}).then(console.log).catch(console.log);
```