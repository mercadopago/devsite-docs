# Buscar clientes

Si necesitas datos específicos de un cliente, como DNI, dirección o fecha de registro, puedes obtenerlos a través de nuestra API de clientes. Para eso, envía un GET con el email del cliente al endpoint [/v1/customers/search](/developers/es/reference/customers/_customers_search/get) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs que aparecen a continuación.

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

> PREV_STEP_CARD_ES
>
> Modificar cliente
>
> Aprende cómo modificar datos de un cliente previamente creado
>
> [Modificar cliente](/developers/es/docs/checkout-api/cards-and-customers-management/modify-customer)

> NEXT_STEP_CARD_ES
>
> Agregar nuevas tarjetas a un cliente
>
> Aprende cómo buscar agregar nuevas tarjetas a un cliente previamente creado.
>
> [Agregar nuevas tarjetas a un cliente](/developers/es/docs/checkout-api/cards-and-customers-management/add-new-cards-to-customer)
