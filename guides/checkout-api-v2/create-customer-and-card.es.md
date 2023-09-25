# Crear cliente y tarjeta

Para crear un cliente y asociarlo a su tarjeta, es necesario enviar el campo del email, el tipo de medio de pago, el ID del banco emisor y el token generado. Cada cliente se almacenará con el valor `customer` y cada tarjeta con el valor `card`.

Además, recomendamos almacenar los datos de la tarjeta siempre que un pago se haya completado con éxito. Esto permite que los datos correctos se almacenen para futuras compras y optimiza el proceso de pago para el comprador.

Para crear un cliente y una tarjeta, utilice uno de los siguientes códigos.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client_customer = new CustomerClient();
  $customer = $client_customer->create(["email" => "my.user@example.com"]);
  $client = new CustomerCardClient();
  $customer_card = $client->create($customer->id, ["token" => "your_card_token"]);
?>
```
```node
const client = new MercadoPago({ accessToken: 'YOUR_ACCESS_TOKEN' });


const customerClient = new Customer(client);

const customerBody = {
  email: "my.user@example.com"
};

customerClient.create({ customerBody }).then(result) => {
  const cardClient = new CustomerCard(client);

  const body = {
  	token : result.token,
  };

  customerClient.create({ customerId: 'customer_id', customerCardBody :   body }).then((result) => console.log(result));
};
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

CustomerRequest customerRequest = CustomerRequest.builder()
   .email("john@test.com")
   .build();
Customer customer = customerClient.create(customerRequest);

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

customer_request = {
  email: 'john@yourdomain.com'
}
customer_response = sdk.customer.create(customer_request)
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'visa'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda"
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test_payer_12345@testuser.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "visa"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer_id": "3245612", "payment_method_id": "visa"}'

```
]]]


La respuesta dará el siguiente resultado

```json
{
    "id": "123456789-jxOV430go9fx2e",
    "email": "test_payer_12345@testuser.com",
    ...
    "default_card": "1490022319978",
    "default_address": null,
    "cards": [{
        "id": "1490022319978",
        "expiration_month": 12,
        "expiration_year": 2020,
        "first_six_digits": "415231",
        "last_four_digits": "0001",
        ...
    }],
    "addresses": [],
    "live_mode": false
}
```
> WARNING
>
> Atención
>
> Si la respuesta de la solicitud devuelve un error del tipo `invalid parameter` con el código HTTP 400, verifica los parámetros `payment_method_id` y `issuer_id` y asegúrate de que los valores se hayan introducido correctamente. Además, cuando estés utilizando usuarios de prueba, recuerda respetar el siguiente formato para el email del cliente: test_payer_[0-9]{1,10}@testuser.com. Por ejemplo: test_payer_12345@testuser.com.