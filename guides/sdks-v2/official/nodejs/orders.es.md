# Crear orden

Puede crear un pedido para asociarlo con la preferencia de pago y obtener la URL necesaria para iniciar el flujo de pago a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Crear pedido](/developers/es/reference/merchant_orders/_merchant_orders/post)

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

# Buscar órdenes

Puede encontrar toda la información de los pedidos creados a través de filtros específicos o por un rango de fechas específico a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar pedidos](/developers/es/reference/merchant_orders/_merchant_orders_search/get).

```node
const client = new MercadoPagoConfig({ accessToken: '' });

const merchantOrder = new MerchantOrder(client);

merchantOrder.search({
 options: { application_id: '<APPLICATION_ID>' } }).then(console.log).catch(console.log);
```

# Obtener orden

Puede obtener toda la información de pago de un producto o servicio con el ID de pedido de su elección a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener pedido](/developers/es/reference/merchant_orders/_merchant_orders_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const merchantOrder = new MerchantOrder(client);

customerClient.get({ merchantOrderId: '<MERCHANT_ORDER_ID>' }).then(console.log).catch(console.log);
```

# Actualizar orden

Puede actualizar los detalles de un pago indicando el ID del pedido y enviando la información que actualiza utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar Pedido](/developers/es/reference/merchant_orders/_merchant_orders_id/put).

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