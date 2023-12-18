## Create payment

You can create and add payment information using the SDK below. For details on request parameters, check the [Create payment](/developers/en/reference/payments/_payments/post) API.

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

# Search payments

You can search for payments made in the last twelve months from the search date using the SDK below. For details of the request parameters, access the [Search Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_search/get) API.

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

# Get payment

It is possible to query all the information of a payment through the payment ID using the SDK below. For details of the request parameters, access the [Get Payment](/developers/en/reference/payments/_payments_id/get) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new Payment(client);

payment.get({
	id: '<PAYMENT_ID>',
}).then(console.log).catch(console.log);
```

# Update payment

It is possible to change the data of a certain payment by sending the parameters with the information you want to update through the SDK below. For details of the request parameters, access the [Update payment](/developers/en/reference/payments/_payments_id/put) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new PaymentCapture(client);

payment.capture({
	id: '<PAYMENT_ID>',
	transaction_amount: 100,
	requestOptions: {
		idempotencyKey: '<IDEMPOTENCY_KEY>'
	}
}).then(console.log).catch(console.log);
```