## Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](/developers/es/reference/payments/_payments/post).

[[[
```node
const client = new MercadoPago({ accessToken: 'ACCESS_TOKEN' });
const payments = new Payments(client);

const payment = new Payments(client);

payment.create({
	transaction_amount: 12.34,
	description: '<DESCRIPTION>',
	payment_method_id: '<PAYMENT_METHOD_ID>',
	payer: {
		email: '<EMAIL>'
	}
}).then(console.log).catch(console.log);
```
]]]

# Buscar pagos

Puede buscar los pagos realizados en los últimos doce meses a partir de la fecha de búsqueda utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar Pagos](/developers/es/reference/payments/_payments_search/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });

const payments = new Payments(client);

payments.search({
	criteria: 'desc',
      sort: 'date_created',
      external_reference: 'ID_REF'
})
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Obtener pago

Es posible consultar toda la información de un pago a través del ID de pago utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener Pago](/developers/es/reference/payments/_payments_id/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const payments = new Payments(client);

payments.get(id)
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Actualizar pago

Es posible cambiar los datos de un determinado pago enviando los parámetros con la información que desea actualizar a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar pago](/developers/es/reference/payments/_payments_id/put)

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const payment = new PaymentCapture(client);

payment.capture({
    id: '123456789',
    transaction_amount: 100
  }, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
      .then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]