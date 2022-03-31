## Create order 

You can create an order to associate it with the payment preference and get the URL needed to start the payment flow by using the SDK below. For details of the request parameters, access the [Create order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders/post) API.

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

## Search orders

You can find all information for orders created through specific filters or by a specific date range through the SDK below. For details of the request parameters, access the [Search orders](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_search/get) API.


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

## Get order

You can get all payment information for a product or service with the order ID of your choice through the SDK below. For details of the request parameters, access the [Get Order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) API.

[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Long orderId = 123456789L;
client.get(orderId);
```
]]]

## Update order

You can update the details of a payment by indicating the order ID and submitting the information you update using the SDK below. For details of the request parameters, access the [Update Order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/put) API.

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
