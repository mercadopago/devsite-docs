## Crear pago

Puede crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

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

## Buscar pagos

Puede buscar los pagos realizados en los últimos doce meses a partir de la fecha de búsqueda utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get).

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

## Obtener pago

Es posible consultar toda la información de un pago a través del ID de pago utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get).

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.get(paymentId);
```
]]]

## Actualizar pago

Es posible cambiar los datos de un determinado pago enviando los parámetros con la información que desea actualizar a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put)

[[[
```java

PaymentClient client = new PaymentClient();

Long paymentId = 123456789L;
client.capture(paymentId);
client.capture(paymentId);
```
]]]