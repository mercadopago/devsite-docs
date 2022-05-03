## Create preference

You can create a preference using the SDK below. For details of the request parameters, check the [Create preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) API.

[[[
```java

// Mercado Pago SDK
import com.mercadopago.MercadoPagoConfig;

// Configure credentials
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

// Create a client from the Preference API
PreferenceClient client = new PreferenceClient();

// Create an item to add to the preference
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

// Associate the item with the preference
PreferenceRequest request = PreferenceRequest.builder().items(items).build();

// Save the preference
client.create(request);

```
]]]

## Search preferences

You can find all the preferences information generated through specific filters or by a specific date range using the SDK below. For details of the request parameters, access the [Search Preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences_search/get) API.

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

## Get preference

You can get all payment information for a product or service with the desired preference ID using the SDK below. For details on the request parameters, access the [Get Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences_id/get) API.

[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";
client.get(preferenceId);
```
]]]

## Update preference

You can update the details of a payment preference using the preference ID. For details of the request parameters, access the [Update Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences_id/put) API.


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