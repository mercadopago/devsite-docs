# Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

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

# Pesquisar preferências

É possível encontrar todas as informações das preferências geradas através de filtros específicos ou por uma faixa de datas específica utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar preferências](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences_search/get).

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

# Obter preferência

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação da preferência desejada utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences_id/get).

[[[
```java

PreferenceClient client = new PreferenceClient();

String preferenceId = "202809963-a2201f8d-11cb-443f-adf6-de5a42eed67d";
client.get(preferenceId);
```
]]]

## Atualizar preferência

É possível atualizar os detalhes de uma preferência de pagamento através do ID da preferência. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences_id/put).

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