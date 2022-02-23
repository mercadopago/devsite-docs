## Create customer

Create a customer with all its data and save the cards used to simplify the payment process.

[[[
```java

CustomerClient client = new CustomerClient();

CustomerRequest customerRequest =
   CustomerRequest.builder()
       .email("jhon@doe.com")
       .firstName("Jhon")
       .lastName("Doe")
       .phone(PhoneRequest.builder().areaCode("55").number("991234567").build())
       .identification(
           IdentificationRequest.builder().type("CPF").number("12345678900").build())
       .defaultAddress("Home")
       .address(
           CustomerAddressRequest.builder()
               .id("123123")
               .zipCode("01234567")
               .streetName("Rua Exemplo")
               .streetNumber(123)
               .build())
       .dateRegistred(OffsetDateTime.of(2000, 1, 18, 0, 0, 0, 0, ZoneOffset.UTC))
       .description("Description del user")
       .defaultCard("None")
       .build();

client.create(customerRequest);

```
]]]

## Search customers

Find all customer information using specific filters.

[[[
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
]]]

## Update customer

RRenew the data of a customer. Indicate the customer ID and send the parameters with the information you want to update.

[[[
```java

CustomerClient client = new CustomerClient();

String customerId = "247711297-jxOV430go9fx2e";

CustomerRequest customerRequest =
   CustomerRequest.builder()
       .email("jhon@doe.com")
       .firstName("Jhon")
       .lastName("Doe")
       .phone(PhoneRequest.builder().areaCode("55").number("991234567").build())
       .identification(
           IdentificationRequest.builder().type("CPF").number("12345678900").build())
       .defaultAddress("Home")
       .address(
           CustomerAddressRequest.builder()
               .id("123123")
               .zipCode("01234567")
               .streetName("Rua Exemplo")
               .streetNumber(123)
               .build())
       .dateRegistred(OffsetDateTime.of(2000, 1, 18, 0, 0, 0, 0, 

```
]]] 

## Get customer

Check all the information of a client created with the client ID of your choice.


[[[
```java

CustomerClient customerClient = new CustomerClient();


String customerId = "247711297-jxOV430go9fx2e";
customerClient.get(customerId);
```
]]]