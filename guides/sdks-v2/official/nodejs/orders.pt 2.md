# Criar pedido 

É possível criar um pedido para associá-lo à preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar pedido](/developers/pt/reference/merchant_orders/_merchant_orders/post).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const merchantOrder = new MerchantOrder(client);

const item = [{
	id: 'item id',
	category_id: 'item category',
	currency_id: 'BRL',
	description: 'item description',
	picture_url: 'item picture',
	quantity: 1,
	unit_price: 5,
	title: 'item title'
}];

const createRequest = {
	external_reference: 'default',
	preference_id: 'Preference identification',
	payer: {
		id: 123,
		nickname: 'JOHN'
	},
	site_id: 'MLA',
	items: item,
	application_id: '10000000000000000'
};

merchantOrderClient.create({ body: createRequest }).then(console.log).catch(console.log);
```

# Pesquisar pedidos

É possível encontrar todas as informações dos pedidos criados através de filtros específicos ou por um intervalo de datas específico através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pedidos](/developers/pt/reference/merchant_orders/_merchant_orders_search/get).

```node
const client = new MercadoPagoConfig({ accessToken: '' });

const merchantOrder = new MerchantOrder(client);

merchantOrder.search({
 options: { application_id: '<APPLICATION_ID>' } }).then(console.log).catch(console.log);
```

# Obter pedido

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const merchantOrder = new MerchantOrder(client);

customerClient.get({ merchantOrderId: '<MERCHANT_ORDER_ID>' }).then(console.log).catch(console.log);
```

# Atualizar pedido

É possível atualizar os dados de um pagamento indicando o ID do pedido e enviando as informações que atualizar utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/put).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const merchantOrder = new MerchantOrder(client);

merchantOrder.update({ merchantOrderId: '<MERCHANT_ORDER_ID>',  body: {
	external_reference: '<EXTERNAL_REFERENCE>',
	preference_id: '<PREFERENCE_ID>',
	collector: {
		id: 1234
	},
	site_id: '<SITE_ID>',
	items: [
		{
			id: '<ITEM_ID>',
			quantity: 1234,
		}
	],
	application_id: '<APPLICATION_ID>',
	version: 12.34
}  }).then(console.log).catch(console.log);
```