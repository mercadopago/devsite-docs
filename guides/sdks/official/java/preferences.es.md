## Crear preferencia

Puede crear una preferencia usando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```java

// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;

// Configurar credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

// Crear un cliente de la API de preferencias
PreferenceClient client = new PreferenceClient();

// Crear un ítem para agregar a la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

// Asociar el ítem con la preferencia
PreferenceRequest request = PreferenceRequest.builder().items(items).build();

// Guardar la preferencia
client.create(request);

```
]]]

## Buscar preferencias

Puede encontrar toda la información de preferencias generada a través de filtros específicos o por un rango de fechas específico utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar preferencias](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences_search/get).

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

Puede obtener toda la información de pago de un producto o servicio con el ID de preferencia deseado utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, acceda a la API [Obtener preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences_id/get).

[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";
client.get(preferenceId);
```
]]]

## Actualizar preferencia

Puede actualizar los detalles de una preferencia de pago utilizando el ID de preferencia. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences_id/put).


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