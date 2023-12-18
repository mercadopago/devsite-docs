# Buscar clientes

Si necesitas datos específicos de un cliente, como DNI, dirección o fecha de registro, puedes obtenerlos a través de nuestra API de clientes. Para eso, envía un GET con el email del cliente al endpoint [/v1/customers/search](/developers/es/reference/customers/_customers_search/get) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs que aparecen a continuación.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new CustomerClient();

  $customer = $client->search(1, 0, ["email" => "my.user@example.com"]);
?>
?>

```
```node
import { Customer, MercadoPagoConfig } from '@src/index';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const customer = new Customer(client);

customer.search({ options: { email: '<EMAIL>' } }).then(console.log).catch(console.log);
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

