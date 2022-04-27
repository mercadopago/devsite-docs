## Criar pedido 

É possível criar um pedido para associá-lo à preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders/post).

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

## Pesquisar pedidos

É possível encontrar todas as informações dos pedidos criados através de filtros específicos ou por um intervalo de datas específico através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pedidos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_search/get).

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

## Obter pedido

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get).

[[[
```java

MerchantOrderClient client = new MerchantOrderClient();

Long orderId = 123456789L;
client.get(orderId);
```
]]]

## Atualizar pedido

É possível atualizar os dados de um pagamento indicando o ID do pedido e enviando as informações que atualizar utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/put).

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
