# Modify customer

If there is any change in a customer's data, such as address, card or account email, it is possible to make this change through the Customer API or our SDKs.

In the table below we describe all the attributes that can be modified. To make the change, send a PUT with the `customer_id` and the attributes you want to modify to the endpoint [/v1/customers/{id}](/developers/en/reference/customers/_customers_id/put) and execute the request or, if you prefer, use one of the SDKs below.


> NOTE
>
> Important
>
> If you don't have the `customer_id`, follow the steps described in the section [Search customers](/developers/en/docs/checkout-api/cards-and-customers-management/search-customers) to get the information. Also, the `email` field can only be modified if the customer does not already have an associated email.


| Attribute | Description |
| --- | --- |
| `address` | Address |
| `default_address` | Default address |
| `default_card` | Default card |
| `description` | Description |
| `emai` | Account Email |
| `first_name` | Name |
| `last_name` | Last name |
| `phone` | Registered phone |
| `identification` | Document type and number |


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
$customer->default_address = "Home";
$customer->address = array("zip_code" => "[FAKER][ADDRESS][ZIP_CODE]", "street_name" => "[FAKER][ADDRESS][STREET_NAME]", "street_number" => "2" );
$customer->description = "Customer Information";
$customer->default_card = "None";
$customer->update();

?>

```
```node

var Mercadopago = require('mercadopago');
Mercadopago.configure({
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
"default_address": "House",
"address": {
"zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
"street_name": "[FAKER][ADDRESS][STREET_NAME]",
"street_number": "2"
},
"description": "Customer Information",
"default_card": "None
}

Mercadopago.customers.update(customer_data).then(function (customer) {
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
.defaultAddress("House")
.phone(PhoneRequest.builder()
.areaCode("11")
.number("001234567")
.build())
.identification(IdentificationRequest.builder()
.type("CPF")
.number("12341234")
.build())
.description("Customer Information")
.defaultCard("None")
.address(CustomerAddressRequest.builder()
.zipCode("52")
.streetName("United Nations Avenue")
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
default_address: 'Home',
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
description: 'Customer Information',
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
Description = "Customer Information",
DefaultCard = "None",
Phone = phoneRequest,
Identification = identificationRequest,
Address = addressRequest

};
var customerClient = new CustomerClient();
Customer customer = await customerClient.Update(customerRequest);

```
```python

import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
"email": 'user@user.com',
"first_name": 'john',
"last_name": 'wagner',
"default_address": 'Home',
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
"description": 'Customer Information',
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
"description": "Customer Information"
}'

```
]]]

Example response with sending `customer_id`:

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
"description": "Customer Information",
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
Example response without the `customer_id` parameter:

```json
{
"message": "missing customer id"
}
```


> PREV_STEP_CARD_EN
>
> Create customer and card
>
> Learn how to create a customer and card
>
> [Create customer and card](/developers/en/docs/checkout-api/cards-and-customers-management/create-customer-and-card)

> NEXT_STEP_CARD_EN
>
> Search customer
>
> Learn how to search for a customer based on specific information.
>
> [Search Customer](/developers/en/docs/checkout-api/cards-and-customers-management/search-customers)
