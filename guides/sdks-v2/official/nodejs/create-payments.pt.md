## Criar pagamento

É possível criar e acrescentar informações de determinado pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar pagamento](/developers/pt/reference/payments/_payments/post).

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

# Pesquisar pagamentos

É possível pesquisar pagamentos efetuados nos últimos doze meses a partir da data de pesquisa utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pagamentos](/developers/pt/reference/payments/_payments_search/get).

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

# Obter pagamento

É possível consultar todas as informações de um pagamento através do ID de pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pagamento](/developers/pt/reference/payments/_payments_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const payment = new Payment(client);

payment.get({
	id: '<PAYMENT_ID>',
}).then(console.log).catch(console.log);
```

# Atualizar pagamento

É possível alterar os dados de determinado pagamento enviando os parâmetros com as informações que você deseja atualizar através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pagamento](/developers/pt/reference/payments/_payments_id/put).

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