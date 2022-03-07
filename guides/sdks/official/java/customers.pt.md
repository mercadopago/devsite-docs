## Criar cliente

É possível criar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers/post).

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

## Pesquisar clientes

É possível pesquisar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Pesquisar clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_search/get).

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

## Atualizar cliente

É possível atualizar clientes utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Atualizar cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_id/put).

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

## Obter cliente

É possível obter todas as informações de um cliente a partir da sua identificação utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/customers/_customers_id/get)

[[[
```java

CustomerClient customerClient = new CustomerClient();


String customerId = "247711297-jxOV430go9fx2e";
customerClient.get(customerId);
```
]]]