# Buscar cliente

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
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/customer"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := customer.NewClient(cfg)

	request := customer.SearchRequest{
		Filters: map[string]string{
			"email": "{{EMAIL}}",
		},
	}

	resource, err := client.Search(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	for _, v := range resources.Results {
		fmt.Println(v)
	}
}
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

La respsuesta mostrará el siguiente resultado:

```json
{
    "paging": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "results": [
        {
            "address": {
                "id": null,
                "street_name": null,
                "street_number": null,
                "zip_code": null
            },
            "addresses": [],
            "cards": [
                {
                    ...
                }
            ],
            "date_created": "2017-05-05T00:00:00.000-04:00",
            "date_last_updated": "2017-05-05T09:23:25.021-04:00",
            "date_registered": null,
            "default_address": null,
            "default_card": "1493990563105",
            "description": null,
            "email": "test_payer_12345@testuser.com",
            "first_name": null,
            "id": "123456789-jxOV430go9fx2e",
            "identification": {
                "number": null,
                "type": null
            },
            "last_name": null,
            "live_mode": false,
            "metadata": {},
            "phone": {
                "area_code": null,
                "number": null
            }
        }
    ]
}
```