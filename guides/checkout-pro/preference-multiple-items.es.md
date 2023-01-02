# Preferencia para múltiples ítems

Si necesitas crear una preferencia para más de un ítem, debes agregarlos como una lista y sus respectivos atributos.

Para crear una preferencia para varios ítems, utiliza uno de los SDKs disponibles a continuación.

> Además de los SDKs, también es posible crear una preferencia para varios ítems desde la API de preferencias. Para esto, envía un **POST** con toda la información del producto/servicio al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta el request.

[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  # Crea ítems en la preferencia
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  items: [
      { title: 'Mi producto',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56 }
    ]
};
// Crea un botón de pago en tu sitio
mercadopago.preferences.create(preference)
.then(function(preference){
  // Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();
// Crea ítems en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
       .quantity(1)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();

items.add(item1);
items.add(item2);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();
// Guardar y postear la preferencia
client.create(request);
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create preference data with items
preference_data = {
  items: [
    {
      title: 'Mi producto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Mi producto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
// Crea el request con múltiples ítems
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "Mi producto 2",
            Quantity = 2,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 96.56m,
        },
        // ...
    },
};

// Crea un objeto client
var client = new PreferenceClient();

// Crea la preferencia
Preference preference = await client.CreateAsync(request);
```
```python
# Crea ítems en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Crea la preferencia
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]


> WARNING
>
> Importante
>
> El valor total de la preferencia será la suma del valor del precio de cada artículo listado.
