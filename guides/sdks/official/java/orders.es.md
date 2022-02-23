## Crear orden

Genera una orden para asociarla a la preferencia de pago y obtén la URL necesaria para iniciar el flujo de pago.


[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

List<MerchantOrderItemRequest> items = new ArrayList<>();

MerchantOrderItemRequest item =
   MerchantOrderItemRequest.builder()
       .id("item id")
       .categoryId("item category")
       .currencyId("BRL")
       .description("item description")
       .pictureUrl("item picture")
       .quantity(1)
       .unitPrice(new BigDecimal("5"))
       .title("item title")
       .build();

items.add(item);

MerchantOrderCreateRequest createRequest =
   MerchantOrderCreateRequest.builder()
       .externalReference("default")
       .preferenceId("Preference identification")
       .payer(MerchantOrderPayerRequest.builder().id(123L).nickname("JOHN").build())
       .siteId("MLA")
       .items(items)
       .applicationId("10000000000000000")
       .build();

client.create(createRequest);
```
]]]

## Buscar órdenes

Encuentra toda la información de las órdenes generadas a través de filtros específicos o por un rango de fechas determinado.


[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Map<String, Object> filters = new HashMap<>();
filters.put("status", "closed");
filters.put("preference_id", "12123adfasdf123u4u");
filters.put("application_id", "10000000000000000");
filters.put("payer_id", "123");
filters.put("external_reference", "default");
filters.put("site_id", "MLA");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().limit(0).offset(0).filters(filters).build();

client.search(searchRequest);
```
]]]

## Obtener orden

Consulta toda la información de pago de un producto o servicio con el ID de la orden que quieras.

[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Long orderId = 123456789L;
client.get(orderId);
```
]]]

## Actualizar orden

Renueva los datos de un pago. Indica el ID de la orden y envía los parámetros con la información que quieras actualizar.

[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Long orderId = 123456789L;

List<MerchantOrderItemRequest> items = new ArrayList<>();

MerchantOrderItemRequest item =
   MerchantOrderItemRequest.builder()
       .id("item id")
       .categoryId("item category")
       .currencyId("BRL")
       .description("item description")
       .pictureUrl("item picture")
       .quantity(1)
       .unitPrice(new BigDecimal("5"))
       .title("item title")
       .build();

items.add(item);

MerchantOrderUpdateRequest updateRequest =
   MerchantOrderUpdateRequest.builder()
       .externalReference("default")
       .payer(MerchantOrderPayerRequest.builder().id(123L).nickname("JOHN").build())
       .siteId("MLA")
       .items(items)
       .build();

client.update(orderId, updateRequest);
```
]]]
