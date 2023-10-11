## Salvar cartão

É possível armazenar com segurança em nossos servidores a referência a um cartão utilizado pelo cliente no pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, veja a API [Salvar cartão](/developers/pt/reference/cards/_customers_customer_id_cards/post).


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

## Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartões de um cliente](/developers/pt/reference/cards/_customers_customer_id_cards/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.list({ customerId: '448870796-7ZjwhKGxILixxN' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

## Obter cartão

É possível consultar as informações de referência de um cartão armazenado associado a um cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.get({ customerId: '448870796-7ZjwhKGxILixxN', cardId : '8987269652' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

## Excluir cartão

É possível excluir a referência a um cartão associado ao cliente sempre que for necessário utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Excluir cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/delete).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new CustomerCard(client);

customerClient.delete({ customerId: '448870796-7ZjwhKGxILixxN', cardId : '8987269652' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]