# Configura tu servidor

Para poder iniciar el flujo de pago, necesitas obtener la información sobre el producto o servicio a pagar.

Esta entidad es la preferencia de pago y contiene:

1. Descripción y monto.
2. Información de tu comprador (_Email_, nombre, dirección, etc).
3. Medios de pago que aceptas.
4. _ID_ de referencia de tu sistema.

[[[
```php
<?php  
  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')
```
```csharp
using MercadoPago.Config;
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
```
]]]

Luego, deberás agregar los atributos de tu preferencia de pago:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: 'Blue shirt',
  quantity: 10,
  currency_id: '[FAKER][CURRENCY][ACRONYM]',
  unit_price: [FAKER][COMMERCE][PRICE]
}

var payer = {
  email: "demo@mail.com"
}

preference.items = [item]
preference.payer = payer

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });
```
```ruby
preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  }
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Id = "1234",
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
```python
preference_data = {
    "title": "Blue shirt",
    "quantity": 1,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "unit_price": [FAKER][COMMERCE][PRICE],
    "payer": {
        "email": "john@yourdomain.com"
    }
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

## Contenido de la preferencia

Mientras más información nos envíes, mejor será la aprobación de los pagos y la experiencia de tus usuarios.

### Payer

Es requerido el envío del `email` de tu comprador.

```json
{
   ...,
  "payer": {
    "name": "[FAKER][NAME][FIRST_NAME]",
    "surname": "[FAKER][NAME][LAST_NAME]",
    "email": "john@yourdomain.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    "phone": {
      "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
      "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
      "type": "DNI",
      "number": "123456789"
    },
    ------------
    "address": {
      "street_name": "[FAKER][ADDRESS][STREET_NAME]",
      "street_number": 7304,
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```