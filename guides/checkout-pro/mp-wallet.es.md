# Billetera Mercado Pago

La opción de pagar con Billetera Mercado Pago, por defecto, se presenta en todos los Checkouts de Mercado Pago (Checkout Pro y Link de Pago) en combinación con los pagos de los usuarios invitados (sin login).

Esta opción permite a los usuarios registrados en Mercado Pago y/o Mercado Libre iniciar sesión y utilizar los métodos disponibles para realizar sus pagos, además de poder incluir nuevas opciones de pago, como tarjetas de crédito.

Es posible pagar con **tarjeta**, **saldo disponible** y **Mercado Crédito** en un entorno seguro y optimizado, aumentando las posibilidades de conversión de ventas, además de permitir al vendedor ofrecer únicamente pagos con billetera. Con esto, la opción de pagar sin iniciar sesión no existirá, sin embargo, contribuirá a un aumento en la conversión de pagos.

> WARNING
>
> Importante
>
> Al agregar esta opción, no será posible recibir pagos de usuarios no registrados en Mercado Pago, así como tampoco podrá recibir pagos vía efectivo o transferencia.

Siga los pasos a continuación para configurar el Monedero de Mercado Pago como método de pago.


> SERVER_SIDE
>
> h2
>
> Crear preferencia


Si es un usuario y desea que todos sus pagos se realicen a través de Wallet, puede determinarlo a través de un atributo en la llamada a la API de preferencias. Para crear una preferencia, use uno de los SDK disponibles a continuación.

> NOTE
>
> Importante
>
> Además de las SDKs, también es posible crear una preferencia a través de la API de preferencias.Para eso, envíe un **POST** con el parámetro `purpose` y el valor `wallet_purchase` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecute el request o, si lo prefiere, use uno de los SDK a continuación.



[[[
```php
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
<?php
// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Mi producto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ],
  purpose: 'wallet_purchase'
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a la string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crea un ítem en la preferencia
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Mi producto")
       .quantity(1)
       .unitPrice(new BigDecimal("75"))
       .build();

List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);

PreferenceRequest request =
   PreferenceRequest.builder().items(items).purpose("wallet_purchase").build();

client.create(request);
```
```ruby
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Crea un objeto de preferencia
preference_data = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1
    }
  ],
  purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a la string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
// Crea el objeto de request de la preferencia
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
    Purpose = "wallet_purchase",
};
// Crea la preferencia
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "unit_price": 100,
            "quantity": 1
        }
    ],
    "purpose": "wallet_purchase"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

----[mlc, mco]----

> WARNING
>
> Importante
>
> El valor `unit_price` debe ser un número entero.
------------


> CLIENT_SIDE
>
> h2
>
> Añadir checkout


Con la preferencia creada, se debe exhibir el botón de pago que permitirá al comprador utilizar la billetera de Mercado Pago para pagar. Para exhibir el botón de pago, utiliza el HTML disponible a continuación.



[[[
```html
<div class="cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('PUBLIC_KEY');

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Pagar com Mercado Pago',
      type: 'wallet',
    }
  });
</script>
```
]]]

> WARNING
>
> Importante
>
> Al crear un pago es posible recibir 3 estados diferentes: `Pendiente`, `Rechazado` y `Aprobado`. Para mantenerse al día con las actualizaciones, debe configurar su sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulte [Notificaciones](/developers/es/docs/checkout-pro/additional-content/notifications/Introduction) para obtener más detalles.
