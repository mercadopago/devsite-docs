## Crear cliente

Es posible crear clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers/post).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
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

## Buscar clientes

Es posible buscar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Buscar en Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.search({ email: 'john.doe@example.com' })
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]

## Obtener clientes

Es posible obtener clientes utilizando el SDK a continuación. Para obtener más detalles sobre los parámetros de la solicitud, consulta la API [Obtener clientes](/developers/es/reference/customers/_customers_id/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.get('247711297-jxOV430go9fx2e')
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]

## Actualizar cliente

Es posible actualizar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Actualizar Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/put).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
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