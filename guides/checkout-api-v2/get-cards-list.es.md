# Consultar lista de tarjetas

Es posible consultar la lista de tarjetas guardadas para un determinado cliente. Para eso, envía un **GET** con el cliente `customer_id` al endpoint [/v1/customers/{customer_id}/cards](/developers/es/reference/cards/_customers_customer_id_cards/get) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs a continuación.

[[[
```php
<?php
  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  echo implode ($cards);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerCardClient customerCardClient = new CustomerCardClient();

MPResourceList<CustomerCard> list = customerCardClient.listAll("000000000-abcdEfghiJklM");
List<CustomerCard> customerCards = list.getResults();

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/customercard"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := customercard.NewClient(cfg)

	resources, err := client.List(context.Background(), "<CUSTOMER_ID>")
	if err != nil {
		fmt.Println(err)
		return
	}

	for _, v := range resources {
		fmt.Println(v)
	}
}
```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

```
]]]

La respuesta traerá el siguiente resultado:

### Respuesta

```json
[{
    "id": "1490022319978",
    "expiration_month": 12,
    "expiration_year": 2020,
    "first_six_digits": "415231",
    "last_four_digits": "0001",
    ...
}]
```