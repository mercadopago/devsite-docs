## Obtener tarjetas de un cliente

Es posible obtener los datos de la tarjeta de un determinado cliente a través de su ID de cliente utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Obtener tarjetas de un cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/cards/_customers_customer_id_cards/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.list({ customerId: '448870796-7ZjwhKGxILixxN' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]