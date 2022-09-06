# Ejemplo de código 

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir la Billetera Mercado Pago como medio de pago con Payment Brick. 

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

----[mla, mlb, mlu, mpe, mlm]----
[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Agregar credenciales
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>

// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crear un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agregar credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Crear un objeto de preferencia
let preference = {
 items: [
   {
     title: 'Mi producto',
     unit_price: 100,
     quantity: 1,
   }
 ]
};
 
mercadopago.preferences.create(preference)
 .then(function(response){
   // Este valor es el ID de preferencia que se enviará al brick al inicio
   const preferenceId = response.body.id;
 }).catch(function(error){
   console.log(error);
 });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agregar credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

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

PreferenceRequest request = PreferenceRequest.builder().items(items).build();

client.create(request);
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
// Agregar credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crear un objeto de preferencia
preference_data = {
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

# Este valor reemplazará la string "<%= @preference_id %>" en su HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agregar credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago
# Agregar credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crear un elemento en la preferencia
preference_data = {
    "items": [
        {
            "title": "My Item",
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
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

----[mlc, mco]----
[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Adicione as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>

// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crear un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Mi producto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agregar credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Crear un objeto de preferencia
let preference = {
 items: [
   {
     title: 'Mi producto',
     unit_price: 100,
     quantity: 1,
   }
 ]
};
 
mercadopago.preferences.create(preference)
 .then(function(response){
   // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
   const preferenceId = response.body.id;
 }).catch(function(error){
   console.log(error);
 });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agregar credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

// Crear un objeto de preferencia
Preference preference = new Preference();

// Crear un elemento en la preferencia
Item item = new Item();
item.setTitle("Meu produto")
    .setQuantity(1)
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.save();
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
# Agregar credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crear un objeto de preferencia
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor reemplazará la string "<%= @preference_id %>" en su HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agregar credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crear el objeto de solicitud de preferencia
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Crea la preferencia usando el client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago
# Agregar credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crear un objeto de preferencia
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
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
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

> CLIENT_SIDE
>
> h2
>
> Configurar la integración del Brick

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bricks</title>
</head>
<body>
<div id="paymentBrick_container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('YOUR_PUBLIC_KEY');
  const bricksBuilder = mp.bricks();
  const renderPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: 100, // cantidad de procesamiento a realizar
        preferenceId: 'abcd1234', // preferenceId generado en el backend
      },
      callbacks: {
        onReady: () => {
          // callback llamado cuando Brick está listo
        },
        onSubmit: ({ paymentType, formData }) => {
          // callback llamado al hacer clic en el botón de envío de datos
        
          if (paymentType === 'wallet_purchase') {
            // en este caso, el usuario fue redirigido a
            // la página de Mercado Pago para realizar el pago
          }
        },
        onError: (error) => {
          // callback llamado para todos los casos de error de Brick
        },
      },
    };
    window.paymentBrickController = await bricksBuilder.create(
      'payment',
      'paymentBrick_container',
      settings
    );
  };
  renderPaymentBrick(bricksBuilder);
</script>
</body>
</html>
```

> Los pagos con **Carteira Mercado Pago** no necesitan ser enviados a través del backend. Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)