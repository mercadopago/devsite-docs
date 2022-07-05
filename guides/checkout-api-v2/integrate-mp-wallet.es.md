# Billetera Mercado Pago

La Billetera Mercado Pago es una forma de pago que permite aceptar pagos únicamente de usuarios registrados. Al ofrecer esta opción, los usuarios pueden pagar con tarjeta, saldo disponible y Mercado Crédito.


> WARNING
>
> Importante
>
> Al añadir esta opción, no se podrán recibir pagos de usuarios que no estén registrados en Mercado Pago y no será posible recibir pagos con efectivo o transferencia.


Sigue las siguientes etapas para configurar la Billetera de Mercado Pago como medio de pago.


> SERVER_SIDE
>
> h2
>
> Crear preferencia


La primera etapa para configurar los pagos con la Billetera Mercado Pago es la creación de la preferencia. Para esto, envía un **POST** con el parámetro `purpose` y el valor `wallet_purchase` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de los SDKs indicados a continuación.



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
            Title = "Mi producto,
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
```curl
===
El modo billetera funciona añadiendo el atributo _purpose_ en la preferencia.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "wallet_purchase"
}'
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


Con la preferencia creada, se debe exhibir el botón de pago que permitirá al comprador utilizar la billetera de Mercado Pago para pagar. Para exhibir el botón de pago, utiliza uno de los SDKs disponibles a continuación.



[[[
```php
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

const preferenceId = "<?php echo $preference->id; ?>"

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica el nombre de la class donde se exhibirá el botón de pago
      label: 'Pagar com Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```node
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

// Inicializa el checkout
mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container', // Indica dónde el botón de pago se exhibirá
      label: 'Pagar com Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>

```
```java
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

const preferenceId = ${preference.id};

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica dónde el botón de pago se exhibirá
      label: 'Pagar com Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```ruby
# SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
# Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

const preferenceId = "<%= @preference_id %>";

# Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', # Indica dónde el botón de pago se exhibirá
      label: 'Pagar com Mercado Pago', # Cambia el texto del botón de pago (opcional)
      type: 'wallet', # Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```csharp
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

const preferenceId = @Html.DisplayFor(model => model.id);

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica dónde el botón de pago se exhibirá
      label: 'Pagar com Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```python
# SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
# Añade las credenciales del SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'pt-BR'
});

const preferenceId = {{ preference_id }}

# Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', # Indica dónde el botón de pago se exhibirá
      label: 'Pagar com Mercado Pago', # Cambia el texto del botón de pago (opcional)
      type: 'wallet', # Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
]]]

> WARNING
>
> Importante
>
> Al crear un pago es posible recibir 3 estados diferentes: "Pendiente", "Rechazado" y "Aprobado". Para mantenerse al día con las actualizaciones, debe configurar su sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulte [Notificaciones](/developers/es/docs/checkout-api/additional-content/notifications/introduction) para obtener más detalles.

> PREV_STEP_CARD_ES
>
> Requisitos previos
>
> Consulta los requisitos previos que se necesitan para integrar Checkout API.
>
> [Integrar Checkout API](/developers/es/docs/checkout-api/prerequisites)


> NEXT_STEP_CARD_ES
>
> Prueba de integración
>
> Aprende cómo probar la integración de Checkout API en tu tienda.
>
> [Prueba de integración](/developers/es/docs/checkout-api/integration-test/make-test-purchase)
