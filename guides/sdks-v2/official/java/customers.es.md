# Crear cliente

Es posible crear clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear Cliente](/developers/es/reference/customers/_customers/post).

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

# Buscar clientes

Es posible buscar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Buscar en Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get).

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

# Actualizar cliente

Es posible actualizar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Actualizar Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/put).

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

# Obtener cliente

Es posible obtener toda la información de un cliente a partir de su identificación utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/get)

[[[
```java

CustomerClient customerClient = new CustomerClient();


String customerId = "247711297-jxOV430go9fx2e";
customerClient.get(customerId);
```
]]]