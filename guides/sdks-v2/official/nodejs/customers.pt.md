## Criar cliente

É possível criar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers/post).

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

customerClient.create({ body: body }).then(console.log).catch(console.log);
```

## Pesquisar clientes

É possível pesquisar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Pesquisar Clientes](/developers/pt/reference/customers/_customers_search/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.search({ options: { email: '<EMAIL>' } }).then(console.log).catch(console.log);
```
]]]

## Obter clientes

É possível obter clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter clientes](/developers/pt/reference/customers/_customers_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.get({ customerId: '<CUSTOMER_ID>' }).then(console.log).catch(console.log);
```

## Atualizar clientes

É possível atualizar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Atualizar clientes](/developers/pt/reference/customers/_customers_id/put).

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

customerClient.update({ customerId: '247711297-jxOV430go9fx2e', body: customerRequest,
}).then(console.log).catch(console.log);
```