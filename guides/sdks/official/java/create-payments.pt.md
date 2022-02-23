## Criar pagamento

Crie um pagamento e acrescente todas as informações que você precisa. Certifique-se de acrescentar os detalhes do pagamento e os detalhes do cliente.

[[[
```java

PaymentClient client = new PaymentClient();

List<PaymentItemRequest> items = new ArrayList<>();

PaymentItemRequest item =
   PaymentItemRequest.builder()
       .id("PR0001")
       .title("Point Mini")
       .description("Producto Point para cobros con tarjetas mediante bluetooth")
       .pictureUrl(
           "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png")
       .categoryId("electronics")
       .quantity(1)
       .unitPrice(new BigDecimal("58.8"))
       .build();

items.add(item);

PaymentCreateRequest createRequest =
   PaymentCreateRequest.builder()
       .additionalInfo(
           PaymentAdditionalInfoRequest.builder()
               .items(items)
               .payer(
                   PaymentAdditionalInfoPayerRequest.builder()
                       .firstName("Test")
                       .lastName("Test")
                       .phone(
                           PhoneRequest.builder().areaCode("11").number("987654321").build())
                       .build())
               .shipments(
                   PaymentShipmentsRequest.builder()
                       .receiverAddress(
                           PaymentReceiverAddressRequest.builder()
                               .zipCode("12312-123")
                               .stateName("Rio de Janeiro")
                               .cityName("Buzios")
                               .streetName("Av das Nacoes Unidas")
                               .streetNumber("3003")
                               .build())
                       .build())
               .build())
       .description("Payment for product")
       .externalReference("MP0001")
       .installments(1)
       .order(PaymentOrderRequest.builder().type("mercadolibre").build())
       .payer(PaymentPayerRequest.builder().entityType("individual").type("customer").build())
       .paymentMethodId("visa")
       .transactionAmount(new BigDecimal("58.8"))
       .build();

client.create(createRequest);

```
]]]

## Pesquisar pagamentos

Pesquisa e retorna pagamentos efetuados nos últimos doze meses a partir da data de pesquisa.

[[[
```java

PaymentClient client = new PaymentClient();

Map<String, Object> filters = new HashMap<>();
filters.put("sort", "date_created");
filters.put("criteria", "desc");
filters.put("external_reference", "ID_REF");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);
```
]]]

## Obter pagamento

Consulte todas as informações de um pagamento através do ID de pagamento.

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.get(paymentId);
```
]]]

## Atualizar pagamento

Altera os dados de um pagamento quando necessário. Indique a identificação do pagamento e envie os parâmetros com as informações que você deseja atualizar.

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.capture(paymentId);
client.capture(paymentId);
```
]]]