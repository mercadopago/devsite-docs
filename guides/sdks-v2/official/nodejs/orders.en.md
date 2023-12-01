## Create order 

You can create an order to associate it with the payment preference and get the URL needed to start the payment flow by using the SDK below. For details of the request parameters, access the [Create order](/developers/en/reference/merchant_orders/_merchant_orders/post) API.

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

## Search orders

You can find all information for orders created through specific filters or by a specific date range through the SDK below. For details of the request parameters, access the [Search orders](/developers/en/reference/merchant_orders/_merchant_orders_search/get) API.

```node
const client = new MercadoPagoConfig({ accessToken: '' });

const merchantOrder = new MerchantOrder(client);

merchantOrder.search({
 options: { application_id: '<APPLICATION_ID>' } }).then(console.log).catch(console.log);
```

## Get order

You can get all payment information for a product or service with the order ID of your choice through the SDK below. For details of the request parameters, access the [Get Order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const merchantOrder = new MerchantOrder(client);

customerClient.get({ merchantOrderId: '<MERCHANT_ORDER_ID>' }).then(console.log).catch(console.log);
```

## Update order

You can update the details of a payment by indicating the order ID and submitting the information you update using the SDK below. For details of the request parameters, access the [Update Order](/developers/en/reference/merchant_orders/_merchant_orders_id/put) API.

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