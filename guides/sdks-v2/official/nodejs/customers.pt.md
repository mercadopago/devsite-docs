## Criar cliente

É possível criar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers/post).

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

## Pesquisar clientes

É possível pesquisar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Pesquisar Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_search/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.search({ email: 'john.doe@example.com' })
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]

## Obter clientes

É possível obter clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter clientes](/developers/pt/reference/customers/_customers_id/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.get('247711297-jxOV430go9fx2e')
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]


## Atualizar clientes

É possível atualizar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Atualizar clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_id/put).

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