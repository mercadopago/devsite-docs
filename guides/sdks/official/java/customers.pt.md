## Criar cliente

Crie um cliente com todos os seus detalhes para que você possa salvar os cartões que eles usam e simplificar o processo de pagamento.

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

Encontre todas as informações do cliente através de filtros específicos.

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

Atualize os dados de um cliente. Indique o ID do cliente e envie as informações que você deseja atualizar.

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

Veja todas as informações de um cliente a partir da sua identificação.

[[[
```java

CustomerClient customerClient = new CustomerClient();


String customerId = "247711297-jxOV430go9fx2e";
customerClient.get(customerId);
```
]]]