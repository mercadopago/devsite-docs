## Create customer

It is possible to create customers using the SDK below. For details on the request parameters, check the [Create customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers/post) API.

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const customerClient = new Customer(client);

const body = {
	email: 'jhon@doe.com',
	first_name: 'Jhon',
	last_name: 'Doe',
	phone: {
		area_code: '55',
		number: '991234567'
	},
	identification: {
		type: 'CPF',
		number: '12345678900'
	},
	default_address: 'Home',
	address: {
		id: '123123',
		zip_code: '01234567',
		street_name: 'Rua Exemplo',
		street_number: '123',
		city: {}
	},
	date_registered: '2021-10-20T11:37:30.000-04:00',
	description: 'Description del user',
	default_card: 'None'
};

customerClient.create({ body })
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]

## Search customers

It is possible to search customers using the SDK below. For details on the request parameters, check the [Search customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_search/get) API.

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.search({ email: 'john.doe@example.com' })
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]


## Update customer

It is possible to update customers using the SDK below. For details on the request parameters, check the [Update customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_id/put) API.

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const customerClient = new Customer(client);

const customerRequest = {
	email: 'jhon@doe.com',
	first_name: 'Jhon',
	last_name: 'Doe',
	phone: {
		area_code: '55',
		number: '991234567'
	},
	identification: {
		type: 'CPF',
		number: '12345678900'
	},
	default_address: 'Home',
	address: {
		id: '123123',
		zip_code: '01234567',
		street_name: 'Rua Exemplo',
		street_number: '123',
		city: {}
	},
	date_registered: '2021-10-20T11:37:30.000-04:00',
	description: 'Description del user',
	default_card: 'None'
};

customerClient.update('247711297-jxOV430go9fx2e', customerRequest)
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]