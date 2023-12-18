## Save card

It is possible to securely store the reference to a card used by the customer in the payment on our servers through the SDK below. For details of the request parameters, check the [Save card](/developers/en/reference/cards/_customers_customer_id_cards/post) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.create({ customerId: '<CUSTOMER_ID>', body: {
	token: '<TOKEN>',
} }).then(console.log).catch(console.log);
```

## Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Get customer cards](/developers/en/reference/cards/_customers_customer_id_cards/get) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```

## Get card

You can consult the reference information of a stored card associated with a customer using the SDK below. For details of the request parameters, check the  [Get Card](/developers/en/reference/cards/_customers_customer_id_cards_id/get) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.get({ customerId: '<CUSTOMER_ID>', cardId : '<CARD_ID>' }).then(console.log).catch(console.log);
```

## Delete card

You can delete the reference of a card associated with the customer whenever necessary using the SDK below. For details of the request parameters, check the [Delete Card](/developers/en/reference/cards/_customers_customer_id_cards_id/delete) API.

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.remove({ customerId: '<CUSTOMER_ID>', cardId: '<CARD_ID>' }).then(console.log).catch(console.log);
```