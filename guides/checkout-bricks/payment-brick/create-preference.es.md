# Crear preferencia

Para crear una preferencia en su backend, agrega el [SDK de Mercado Pago](/developers/es/docs/sdks-library/landing) y las [credenciales](/developers/es/guides/additional-content/credentials/credentials) necesarias a tu proyecto para habilitar el uso de preferencias:

[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agrega credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
# Agrega credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agrega credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]

----[mla, mlb, mlm]----
Luego establezca la preferencia de acuerdo a su producto o servicio. 

Los ejemplos de código a continuación establecen el **purpose de la preferencia** en `wallet_purchase`, pero también es posible establecerlo en `onboarding_credits`. Entienda la diferencia entre los dos:

* **wallet_purchase**: el usuario debe iniciar sesión cuando es redirigido a su cuenta de Mercado Pago.
* **onboarding_credits**: luego de iniciar sesión, el usuario verá la opción de pago de crédito preseleccionada en su cuenta de Mercado Pago.

------------
----[mlu, mlc, mco, mpe]----

Luego establezca la preferencia de acuerdo a su producto o servicio. 

Los ejemplos de código a continuación establecen el **purpose de la preferencia** en `wallet_purchase`, donde el usuario debe iniciar sesión cuando es redirigido a su cuenta de Mercado Pago.

------------

[[[
```php
<?php

// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crear un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);

// el $preference->purpose = 'wallet_purchase'; solo permite pagos registrados
// para permitir pagos de guests, puede omitir esta propiedad
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Crear un objeto de preferencia
let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de guests puede omitir esta propiedad
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Meu produto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// Crear un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crear un elemento en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder()
  // el .purpose('wallet_purchase') solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta línea
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# Crear un objeto de preferencia
preference_data = {
  # el purpose: 'wallet_purchase', solo permite pagos registrados
  # para permitir pagos de guests, puede omitir esta propiedad
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor es el ID de preferencia que usará en el HTML en el inicio del Brick
@preference_id = preference['id']
```
```csharp
// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
  // el Purpose = 'wallet_purchase', solo permite pagos registrados
  // para permitir pagos de invitados, puede omitir esta propiedad
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el cliente
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Crea un elemento en la preferencia
preference_data = {
  # el "purpose": "wallet_purchase", solo permite pagos registrados
  # para permitir pagos de invitados, puede omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi elemento",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
-d '{
  "purpose": "wallet_purchase",
  "items": [
      {
          "title": "Mi producto",
          "quantity": 1,
          "unit_price": 75.76
      }
  ]
}'
```
]]]

> NOTE
>
> Importante
>
> Para más detalles sobre cómo configurarlo, acceda a la sección [Preferencias.](/developers/es/docs/checkout-bricks/wallet-brick/additional-customization/preferences)<br/></br>
> <br/></br>
> Considera que cuando un usuario elige realizar un pago a través de la Billetera de Mercado Pago, será redirigido a la página de Mercado Pago para completar el pago. Por lo tanto, es necesario configurar `back_urls` si desea volver a su sitio al finalizar el pago. Para obtener más información, visite la sección [Redirigir al comprador a su sitio web.](/developers/es/docs/checkout-bricks/wallet-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)