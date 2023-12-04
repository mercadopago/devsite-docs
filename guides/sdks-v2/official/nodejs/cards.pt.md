## Salvar cartão

É possível armazenar com segurança em nossos servidores a referência a um cartão utilizado pelo cliente no pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, veja a API [Salvar cartão](/developers/pt/reference/cards/_customers_customer_id_cards/post).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.create({ customerId: '<CUSTOMER_ID>', body: {
	token: '<TOKEN>',
} }).then(console.log).catch(console.log);
```

## Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartões de um cliente](/developers/pt/reference/cards/_customers_customer_id_cards/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```

## Obter cartão

É possível consultar as informações de referência de um cartão armazenado associado a um cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.get({ customerId: '<CUSTOMER_ID>', cardId : '<CARD_ID>' }).then(console.log).catch(console.log);
```

## Excluir cartão

É possível excluir a referência a um cartão associado ao cliente sempre que for necessário utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Excluir cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/delete).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.remove({ customerId: '<CUSTOMER_ID>', cardId: '<CARD_ID>' }).then(console.log).catch(console.log);
```