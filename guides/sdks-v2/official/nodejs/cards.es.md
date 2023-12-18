## Guardar tarjeta

Es posible guardar de forma segura la referencia a una tarjeta utilizada por el cliente en el pago en nuestros servidores a través del SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Guardar tarjeta](/developers/es/reference/cards/_customers_customer_id_cards/post).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.create({ customerId: '<CUSTOMER_ID>', body: {
	token: '<TOKEN>',
} }).then(console.log).catch(console.log);
```

## Obtener tarjetas de un cliente

Es posible obtener los datos de la tarjeta de un determinado cliente a través de su ID de cliente utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Obtener tarjetas de un cliente](/developers/es/reference/cards/_customers_customer_id_cards/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```

## Obtener tarjeta

Puede consultar la información de referencia de una tarjeta almacenada asociada con un cliente utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Obtener tarjeta](/developers/es/reference/cards/_customers_customer_id_cards_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.get({ customerId: '<CUSTOMER_ID>', cardId : '<CARD_ID>' }).then(console.log).catch(console.log);
```

## Eliminar tarjeta

Puede eliminar una tarjeta asociada con el cliente siempre que sea necesario utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulta la API [Eliminar tarjeta](/developers/es/reference/cards/_customers_customer_id_cards_id/delete).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.remove({ customerId: '<CUSTOMER_ID>', cardId: '<CARD_ID>' }).then(console.log).catch(console.log);
```