# Modificar cliente

Si se produce un cambio en los datos de un cliente, como por ejemplo la dirección, la tarjeta o el email de la cuenta, es posible realizar esta alteración a través de la API de clientes o de nuestros SDKs.

En la siguiente tabla se describen todos los atributos que se pueden modificar, y para realizar el cambio, envía un PUT con el `customer_id` y los atributos que deseas modificar al endpoint [/v1/customers/{id}](/developers/es/reference/customers/_customers_id/put) y ejecuta la solicitud o, si lo prefieres, utiliza uno de los siguientes SDKs.


> NOTE
>
> Importante
>
> Si no tienes el `customer_id`, sigue los pasos indicados en la sección Buscar clientes para obtener la información. Además, el campo `email` solo puede actualizarse si el cliente aún no tiene un email asociado.


| Atributo  | Descripción  |
| --- | --- |
| `address`  | Dirección  |
| `default_address`  | Dirección estándar  |
| `default_card`  | Tarjeta estándar  |
| `description`  | Descripción  |
| `emai`  | Email de la cuenta |
| `first_name`  | Nombre  |
| `last_name`  | Apellido  |
| `phone`  | Teléfono registrado  |
| `identification`  | Tipo y número del documento  |


[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "user@user.com";
  $customer->first_name = "john";
  $customer->last_name = "wagner";
  $customer->phone = array("area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]", "number" => "001234567");
  $customer->identification = array("type" => "[FAKER][IDENTIFICATION][TYPE]", "number" => "12341234");
  $customer->default_address = "Casa";
  $customer->address = array("zip_code" => "[FAKER][ADDRESS][ZIP_CODE]", "street_name" => "[FAKER][ADDRESS][STREET_NAME]", "street_number" => "2");
  $customer->description = "Información del cliente";
  $customer->default_card = "None";
  $customer->update();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { 
  "email": "test_payer_12345@testuser.com",
  "first_name": "john" ,
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  }, 
  "default_address": "Casa",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "description": "Información del cliente",
  "default_card": "None
 }

mercadopago.customers.update(customer_data).then(function (customer) {
 // code ...
});

```

```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient client = new CustomerClient();

CustomerRequest request = CustomerRequest.builder()
   .email("user@user.com")
   .firstName("John")
   .lastName("Wagner")
   .defaultAddress("Casa")
   .phone(PhoneRequest.builder()
       .areaCode("11")
       .number("001234567")
       .build())
   .identification(IdentificationRequest.builder()
       .type("CPF")
       .number("12341234")
       .build())
   .description("Información del cliente")
   .defaultCard("None")
   .address(CustomerAddressRequest.builder()
       .zipCode("52")
       .streetName("Av. Caseros")
       .streetNumber(2)
       .build())
   .build();

client.update("247711297-jxOV430go9fx2e", request);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'user@user.com',
  first_name: 'john',
  last_name: 'wagner',
  default_address: 'Casa',
  phone: {
    area_code: '[FAKER][PHONE_NUMBER][AREA_CODE]',
    number: '001234567'
  },
  identification: {
    type: '[FAKER][IDENTIFICATION][TYPE]',
    number: '12341234'
  },
  address: {
    zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
    street_name: '[FAKER][ADDRESS][STREET_NAME]',
    street_number: '2'
  },
  description: 'Información del cliente',
  default_card: 'None'
}
customer_response = sdk.customer.update(customer_id ,customer_request)
customer = customer_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var phoneRequest = new PhoneRequest
{
  AreaCode = "[FAKER][PHONE_NUMBER][AREA_CODE]",
  Number = "001234567"
};

var identificationRequest = new IdentificationRequest
{
  Type = "[FAKER][IDENTIFICATION][TYPE]",
  Number = "12341234"
};

var addressRequest = new AddressRequest
{
  ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
  StreetName = "[FAKER][ADDRESS][STREET_NAME]",
  StreetNumber = "2"
};

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
    FirstName = "john",
    LastName = "wagner",
    DefaultAddress = "home",
    Description = "Información del cliente",
    DefaultCard = "None",
    Phone = phoneRequest,
    Identification = identificationRequest,
    Address = addressRequest

};
var customerClient = new CustomerClient();
Customer customer = await customerClient.Update(customerRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": 'user@user.com',
  "first_name": 'john',
  "last_name": 'wagner',
  "default_address": 'Casa',
  "phone": {
    "area_code": '[FAKER][PHONE_NUMBER][AREA_CODE]',
    "number": '001234567'
  },
  "identification": {
    "type": '[FAKER][IDENTIFICATION][TYPE]',
    "number": '12341234'
  },
  "address": {
    "zip_code": '[FAKER][ADDRESS][ZIP_CODE]',
    "street_name": '[FAKER][ADDRESS][STREET_NAME]',
    "street_number": '2'
  },
  "description": 'Información del cliente',
  "default_card": 'None'
}
customer_response = sdk.customer().update(customer_id, customer_data)
customer = customer_response["response"]

```
```curl

curl -X PUT \
    'https://api.mercadopago.com/v1/customers/{id}' \
    -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
    -d '{
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": "2"
  },
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": "001234567"
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": "12341234"
  },
  "description": "Información del cliente" 
}'

```
]]]

> PREV_STEP_CARD_ES
>
> Crear cliente y tarjeta
>
> Consulta cómo crear un cliente y una tarjeta 
>
> [Crear cliente y tarjeta](/developers/es/docs/checkout-api/cards-and-customers-management/create-customer-and-card)

> NEXT_STEP_CARD_ES
>
> Buscar cliente
>
> Consulta cómo buscar un cliente a partir de información específica.
>
> [Buscar cliente](/developers/es/docs/checkout-api/cards-and-customers-management/search-customers)
