# Cómo sumar la billetera en tu sitio

Necesitas integrar [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/checkout-pro/introduction) configurado como [modo billetera](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/checkout-pro/configurations#bookmark_aceptar_pagos_%C3%BAnicamente_de_usuarios_registrados) para agregar la billetera de Mercado Pago en tu sitio.

Para integrarlo, tienes que [generar la preferencia de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/checkout-pro/integration#bookmark_pasos_para_integrarte) con la información del producto o servicio que quieras ofrecer y agregar la opción de pago en tu sitio. 

## Pasos para integrar la billetera

> SERVER_SIDE
>
> h3
>
> Genera tu preferencia

Para comenzar, tienes que generar tu preferencia de pago desde tu backend con la [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/checkout-api/previous-requirements#bookmark_utiliza_nuestras_librer%C3%ADas_siempre) que utilizaste en tu Checkout API. 

[[[
```php
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
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
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
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
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crea un ítem en la preferencia
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
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
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
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

# Este valor reemplazará el string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
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
```curl
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
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
> El valor de `unit_price` debe ser entero.

------------
<span></span>

> CLIENT_SIDE
>
> h3
>
> Suma el checkout a tu sitio

Luego, desde tu frontend, agrega el siguiente código para mostrar el botón de pago de Checkout Pro modo billetera en el lugar que quieras que aparezca.


[[[
```php
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

const preferenceId = "<?php echo $preference->id; ?>"

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```node
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

// Inicializa el checkout
mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container', // Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>

```
```java
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

const preferenceId = ${preference.id};

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```ruby
# SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
# Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

const preferenceId = "<%= @preference_id %>";

# Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', # Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', # Cambia el texto del botón de pago (opcional)
      type: 'wallet', # Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```csharp
// SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
// Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

const preferenceId = @Html.DisplayFor(model => model.id);

// Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', // Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', // Cambia el texto del botón de pago (opcional)
      type: 'wallet', // Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
```python
# SDK Client-Side Mercado Pago
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
# Agrega credenciales de SDK
const mp = new MercadoPago('PUBLIC_KEY', {
      locale: 'es-AR'
});

const preferenceId = {{ preference_id }}

# Inicializa el checkout
mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '.cho-container', # Indica dónde se mostrará el botón de pago
      label: 'Pagar con Mercado Pago', # Cambia el texto del botón de pago (opcional)
      type: 'wallet', # Aplica la marca de Mercado Pago al botón
    }
});
</script>
```
]]]

> Esta documentación utiliza la nueva versión de la librería. Para ver la versión anterior, ve a la [sección de Recibe pagos con la billetera de Mercado Pago con MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/wallet-integration).

Para más información sobre cada atributo, consulta la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

¡Y listo! Ya tienes integrada la billetera de Mercado Pago en tu sitio.

> WARNING
>
> Importante
>
> Para probarlo, no te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago ya que no puedes pagarte a ti mismo.<br/>