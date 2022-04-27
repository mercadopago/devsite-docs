## Crear orden

Puede crear un pedido para asociarlo con la preferencia de pago y obtener la URL necesaria para iniciar el flujo de pago a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Crear pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders/post)


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

Puede encontrar toda la información de los pedidos creados a través de filtros específicos o por un rango de fechas específico a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar pedidos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_search/get).


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

Puede obtener toda la información de pago de un producto o servicio con el ID de pedido de su elección a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get).

[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Long orderId = 123456789L;
client.get(orderId);
```
]]]

## Actualizar orden

Puede actualizar los detalles de un pago indicando el ID del pedido y enviando la información que actualiza utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar Pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/put).

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
