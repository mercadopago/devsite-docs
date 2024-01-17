# Create payment

You can create and add payment information using the SDK below. For details on the request parameters, check the [Create payment](/developers/en/reference/payments/_payments/post) API.

> NOTE
>
> Important
>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

[[[
```java

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

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

client.create(createRequest, requestOptions);

```
]]]

# Search payments

You can search for payments made in the last twelve months from the search date using the SDK below. For details of the request parameters, access the [Search Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_search/get) API.

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

# Get payment

It is possible to query all the information of a payment through the payment ID using the SDK below. For details of the request parameters, access the [Get Payment](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) API.

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.get(paymentId);
```
]]]

# Update payment

It is possible to change the data of a certain payment by sending the parameters with the information you want to update through the SDK below. For details of the request parameters, access the [Update payment](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/put) API.

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.capture(paymentId);
client.capture(paymentId);
```
]]]