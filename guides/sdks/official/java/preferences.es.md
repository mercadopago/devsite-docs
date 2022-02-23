## Crear preferencia

Crea una preferencia con la información de un producto o servicio y obtén la URL necesaria para iniciar el flujo de pago.

[[[
```java

PreferenceClient client = new PreferenceClient();

List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Dummy Title")
       .description("Dummy description")
       .pictureUrl("http://www.myapp.com/myimage.jpg")
       .quantity(1)
       .currencyId("US")
       .unitPrice(new BigDecimal("10"))
       .build();
items.add(item);

List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest googleTrack = PreferenceTrackRequest.builder().type("google_ad").build();

tracks.add(googleTrack);

PreferenceRequest request = PreferenceRequest.builder().items(items).tracks(tracks).build();

client.create(request);

```
]]]

## Buscar preferencias

Encuentra toda la información de las preferencias generadas a través de filtros específicos o por un rango de fechas determinado.

[[[
```java

PreferenceClient client = new PreferenceClient();

Map<String, Object> filters = new HashMap<>();
filters.put("sponsor_id", "undefined");
filters.put("external_reference", "undefined");
filters.put("site_id", "undefined");
filters.put("marketplace", "undefined");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().limit(0).offset(0).filters(filters).build();

client.search(searchRequest);
```
]]]

## Obtener preferencia

Consulta toda la información de pago de un producto o servicio con el ID de la preferencia que quieras.

[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";
client.get(preferenceId);
```
]]]

## Actualizar preferencia

Renueva los datos de una preferencia de pago. Indica el ID de la preferencia y envía los parámetros con la información que quieras actualizar.


[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";

List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .id("202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d")
       .title("Dummy Title")
       .description("Dummy description")
       .pictureUrl("http://www.myapp.com/myimage.jpg")
       .quantity(1)
       .currencyId("US")
       .unitPrice(new BigDecimal("10"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();

client.update(preferenceId, request);
```
]]]