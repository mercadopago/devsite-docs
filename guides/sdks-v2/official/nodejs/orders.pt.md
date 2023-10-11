# Criar pedido 

É possível criar um pedido para associá-lo à preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar pedido](/developers/pt/reference/merchant_orders/_merchant_orders/post).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const merchantOrder = new MerchantOrder(client);
const item = {
   id: 'item id',
   category_id: 'item category',
   currency_id: 'BRL',
   description: 'item description',
   picture_url: 'item picture',
   quantity: 1,
   unit_price: 5,
   title: 'item title'
};

const createRequest = {
   external_reference: 'default',
   preference_id: 'Preference identification',
   payer: {
 	id: 123,
 	nickname: 'JOHN'
   },
   site_id: 'MLA',
   items: items,
   preference_id: "Preference identification",
   application_id: "10000000000000000"
};
merchantOrder.create(createRequest)
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });

```
]]]

# Pesquisar pedidos

É possível encontrar todas as informações dos pedidos criados através de filtros específicos ou por um intervalo de datas específico através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pedidos](/developers/pt/reference/merchant_orders/_merchant_orders_search/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: '' });

const merchantOrder = new MerchantOrder(client);

merchantOrder.search({
  application_id: '10000000000000000'
})
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Obter pedido

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const merchantOrder = new MerchantOrder(client);

merchantOrder.get('123456789')
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]

# Atualizar pedido

É possível atualizar os dados de um pagamento indicando o ID do pedido e enviando as informações que atualizar utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/put).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const merchantOrder = new MerchantOrder(client);

const updateRequest = {
    external_reference: "default"
};

merchantOrder.update(123456789, updateRequest)
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]
