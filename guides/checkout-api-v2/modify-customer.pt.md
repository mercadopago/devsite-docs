# Modificar cliente

Caso ocorra alguma alteração nos dados de um cliente como por exemplo, endereço, cartão ou e-mail da conta, é possível realizar essa alteração através da API de clientes ou dos nossos SDKs.

Na tabela abaixo descrevemos todos os atributos que podem ser modificados, e para realizar a alteração, envie um **PUT** com o `customer_id`e os atributos que deseja modificar ao endpoint [/v1/customers/{id}](/developers/pt/reference/customers/_customers_id/put) e execute a requisição ou, se preferir, utilize um dos SDKs a seguir.

> NOTE
>
> Importante
>
> Caso você não tenha o `customer_id`, siga os passos descritos na seção [Buscar cliente](/developers/pt/docs/checkout-api/cards-and-customers-management/search-customers) para obter a informação. Além disso, o campo `email` só pode ser atualizado se o cliente ainda não tiver um e-mail associado.

| Atributo  | Descrição  |
| --- | --- |
| `address`  | Endereço  |
| `default_address`  | Endereço padrão  |
| `default_card`  | Cartão padrão  |
| `description`  | Descrição  |
| `emai`  | E-mail da conta  |
| `first_name`  | Nome  |
| `last_name`  | Sobrenome  |
| `phone`  | Telefone cadastrado  |
| `identification`  | Tipo e número do documento  |

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new CustomerClient();

  $customer = $client->update("user_id", [
    "email" => "my.user@example.com",
    "first_name" => "john",
    "last_name" => "wagner",
    "phone" => array(
      "area_code" => "11",
      "number" => "001234567"
    ),
    "identification" => array(
      "type" => "CPF",
      "number" => "12341234"
    ),
    "default_address" => "Casa",
    "address" => array(
      "zip_code" => "52",
      "street_name" => "Av. das Nações Unidas"
      "street_number" => "3033"
    )
  ]);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const customer = new Customer(client);

const body = {
  email: "my.user@example.com"
  first_name: "john",
  last_name: "wagner",
  phone: {
    area_code: "11",
    number: "001234567"
  }
  identification: {
    type: "CPF",
    number: "12341234"
  },
  default_address: "Casa",
  address: {
    zip_code: "52",
    street_name: "Av. das Nações Unidas"
    street_number: "3033"
  }
};

customer.update({ customerId: '<CUSTOMER_ID>', body: body,
}).then(console.log).catch(console.log);
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
   .description("Informações do cliente")
   .defaultCard("None")
   .address(CustomerAddressRequest.builder()
       .zipCode("52")
       .streetName("Av. das Nações Unidas")
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
  description: 'Informações do cliente',
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
    Description = "Informações do cliente",
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
  "description": 'Informações do cliente',
  "default_card": 'None'
}
customer_response = sdk.customer().update(customer_id, customer_data)
customer = customer_response["response"]

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

	request := customer.Request{
		Email: "user@user.com",
		FirstName: "John",
		LastName: "Wagner",
		DefaultAddress: "Casa",
		Phone: &customer.PhoneRequest{
			AreaCode: "11",
			Number: "001234567",
		},
		Identification: &customer.IdentificationRequest{
			Type: "CPF",
			Number: "12341234",
		},
		Address: &customer.AddressRequest{
			ZipCode: "52",
			StreetName: "Av. das Nações Unidas",
			StreetNumber: "2",
		},
		Description: "Updated Description",
		DefaultCard: "None",
	}

	resource, err := client.Update(context.Background(), "<CUSTOMER_ID>", request)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
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
  "description": "Informações do cliente" 
}'

```
]]]

Exemplo de resposta com o envio do `customer_id`:

```json
{
  "id": "xxxxxxxxxxxxxxxxxxxxx",
  "email": "user@user.com",
  "first_name": "john",
  "last_name": "wagner",
  "phone": {
    "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number": 001234567
  },
  "identification": {
    "type": "[FAKER][IDENTIFICATION][TYPE]",
    "number": 12341234
  },
  "address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "street_number": 2
  },
  "description": "Informações do cliente",
  "date_created": "2021-05-25T15:36:23.541Z",
  "metadata": {},
  "cards": [
    {}
  ],
  "addresses": [
    {}
  ]
}
```
Exemplo de resposta sem o parâmetro `customer_id`:

```json
{
  "message": "missing customer id"
}
```