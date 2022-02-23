## Crear cliente

Realiza la creación de un cliente con todos sus datos para poder guardar las tarjetas que utilice y simplificar el proceso de pago.

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

## Buscar clientes

Encuentra toda la información de los clientes a través de filtros específicos.

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

## Actualizar cliente

Renueva los datos de un cliente. Indica el ID del cliente y envía los parámetros con la información que quieras actualizar.

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

## Obtener cliente

Consulta toda la información de un cliente creado con el ID del cliente que quieras.

[[[
```java

CustomerClient customerClient = new CustomerClient();


String customerId = "247711297-jxOV430go9fx2e";
customerClient.get(customerId);
```
]]]