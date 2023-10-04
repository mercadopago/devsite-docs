## Criar pagamento

É possível criar e acrescentar informações de determinado pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar pagamento](/developers/pt/reference/payments/_payments/post).

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

# Pesquisar pagamentos

É possível pesquisar pagamentos efetuados nos últimos doze meses a partir da data de pesquisa utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pagamentos](/developers/pt/reference/payments/_payments_search/get).

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

# Obter pagamento

É possível consultar todas as informações de um pagamento através do ID de pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pagamento](/developers/pt/reference/payments/_payments_id/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const payments = new Payments(client);

payments.get(id)
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Atualizar pagamento

É possível alterar os dados de determinado pagamento enviando os parâmetros com as informações que você deseja atualizar através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pagamento](/developers/pt/reference/payments/_payments_id/put).

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