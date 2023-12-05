# Agregar nuevas tarjetas a un cliente

Si es necesario, es posible agregar nuevas tarjetas a un cliente específico. Para ello, busque al cliente y defina los nuevos datos de la tarjeta utilizando uno de los códigos disponibles a continuación.

> NOTE
>
> Importante
>
> Si es necesario eliminar una tarjeta antes de agregar nuevas tarjetas a un cliente, envíe un **DELETE** al endpoint [/v1/customers/{customer_id}/cards/{id}](/developers/es/reference/cards/_customers_customer_id_cards_id/delete) proporcionando el `customer_id` y el `id` de la tarjeta que desea eliminar. Después de la ejecución exitosa de la solicitud, podrá agregar la nueva tarjeta.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $customer_client = new CustomerClient();
  $customer = $customer_client->get("1234");

  $card_client = new CustomerCardClient();
  
  $customer_card = $client->create($customer->id, [
    "token" => "your_card_token",
    "issuer_id" => "2345",
    "payment_method_id" => "debit_card"
  ]);

  echo implode($customer_card);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

const customer = customerClient.get({ customerId: '<CUSTOMER_ID>' })
	.then((result) => {

  const cardClient = new CustomerCard(client);

  const body = {
       token : result.token,
       issuer_id: '2345',
       payment_method: 'debit_card' 
  };

cardClient.create({ customerId: customer, body: body })
.then(console.log).catch(console.log);
});
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

puts card

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerClient = new CustomerClient();
Customer customer = await customerClient.GetAsync("247711297-jxOV430go9fx2e");

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

Console.WriteLine(card.Id);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_response = sdk.customer().get("247711297-jxOV430go9fx2e")
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer": {"id": "3245612"}, "payment_method_id":"debit_card"}'
```
]]]
