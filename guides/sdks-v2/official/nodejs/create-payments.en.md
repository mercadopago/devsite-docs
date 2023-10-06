## Create payment

You can create and add payment information using the SDK below. For details on request parameters, check the [Create payment](/developers/en/reference/payments/_payments/post) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
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

# Search payments

You can search for payments made in the last twelve months from the search date using the SDK below. For details of the request parameters, access the [Search Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_search/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

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

# Get payment

It is possible to query all the information of a payment through the payment ID using the SDK below. For details of the request parameters, access the [Get Payment](/developers/en/reference/payments/_payments_id/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payments = new Payments(client);

payments.get(id)
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Update payment

It is possible to change the data of a certain payment by sending the parameters with the information you want to update through the SDK below. For details of the request parameters, access the [Update payment](/developers/en/reference/payments/_payments_id/put) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new PaymentCapture(client);

payment.capture({
    id: '123456789',
    transaction_amount: 100
  }, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
      .then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]