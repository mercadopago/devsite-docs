## Save card

It is possible to securely store the reference to a card used by the customer in the payment on our servers through the SDK below. For details of the request parameters, check the [Save card](/developers/en/reference/cards/_customers_customer_id_cards/post) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

const body = {
	token : '9b2d63e00d66a8c721607214ceda233a',
};

customerClient.create({ customerId: '448870796-7ZjwhKGxILixxN', customerCardBody : body })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

## Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Get customer cards](/developers/en/reference/cards/_customers_customer_id_cards/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.list({ customerId: '448870796-7ZjwhKGxILixxN' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

## Get card

You can consult the reference information of a stored card associated with a customer using the SDK below. For details of the request parameters, check the  [Get Card](/developers/en/reference/cards/_customers_customer_id_cards_id/get) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.get({ customerId: '448870796-7ZjwhKGxILixxN', cardId : '8987269652' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

## Delete card

You can delete the reference of a card associated with the customer whenever necessary using the SDK below. For details of the request parameters, check the [Delete Card](/developers/en/reference/cards/_customers_customer_id_cards_id/delete) API.

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.delete({ customerId: '448870796-7ZjwhKGxILixxN', cardId : '8987269652' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]