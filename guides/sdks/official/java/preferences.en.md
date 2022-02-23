## Create preference

Create a preference with the information of a product or service and obtain the necessary URL to start the payment flow.

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

## Search preferences

Find all the information related to generated preferences using specific filters or a specific date range.

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

Check all the payment information for a product or service with the ID of the preference of your choice.

[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";
client.get(preferenceId);
```
]]]

## Update a preference

Renew the details of a payment preference. Indicate the ID of the preference and send the parameters with the information you want to update.


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