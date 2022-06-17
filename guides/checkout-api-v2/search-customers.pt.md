# Buscar clientes

Caso precise de dados específicos de um cliente, como por exemplo, ID, endereço ou data de registro, é possível obtê-los através da nossa API de clientes. Para isso, envie um GET com e-mail do cliente ao endpoint [/v1/customers/search](/developers/pt/reference/customers/_customers_search/get) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo.

[[[

```php

<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>

```
```node

  var filters = {
    email: "test_payer_12345@testuser.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test_payer_12345@testuser.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test_payer_12345@testuser.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
    "email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/search' \
  -d '{
    "email": "test_user_19653727@testuser.com"
}'
```
]]]

> PREV_STEP_CARD_PT
>
> Modificar cliente
>
> Saiba como alterar dados de um cliente previamente criado
>
> [Modificar cliente](/developers/pt/docs/checkout-api/customer-management/modify-customer)

> NEXT_STEP_CARD_PT
>
> Adicionar novos cartões a um cliente
>
> Saiba como buscar adicionar novos cartões a um cliente previamente criado.
>
> [Adicionar novos cartões a um cliente](/developers/pt/docs/checkout-api/customer-management/add-new-cards-to-customer)