# Preferencia en onSubmit

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir Wallet Brick en su sitio web.

> CLIENT_SIDE
>
> h2
>
> Configurar la integración

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bricks</title>
  </head>
  <body>
    <div id="walletBrick_container"></div>
    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <script>
      const mp = new MercadoPago('YOUR_PUBLIC_KEY');
      const bricksBuilder = mp.bricks();
      const renderWalletBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
             preferenceId: '<PREFERENCE_ID>', // preferenciaId generado en backend
          },
          callbacks: {
            onReady: () => {
              /*
                Callback llamado cuando el Brick está listo.
                Aquí puedes ocultar loading de su sitio, por ejemplo.
              */
            },
            onSubmit: ({ selectedPaymentMethod, formData }) => {
              // callback llamado al hacer clic en Wallet Brick
              // esto es posible porque el Brick es un botón
            },
            onError: (error) => {
              // callback llamado para todos los casos de error de Brick
              console.error(error);
            },
          },
        };
        window.walletBrickController = await bricksBuilder.create(
          'wallet',
          'walletBrick_container',
          settings
        );
      };
      renderWalletBrick(bricksBuilder);
    </script>
  </body>
</html>
```

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

----[mla, mlb, mlm]----
Los ejemplos de código a continuación establecen el **purpose de la preferencia** en `wallet_purchase`, pero también es posible establecerlo en `onboarding_credits`. Entienda la diferencia entre los dos:

* **wallet_purchase**: el usuario debe iniciar sesión cuando es redirigido a su cuenta de Mercado Pago.
* **onboarding_credits**: luego de iniciar sesión, el usuario verá la opción de pago de crédito preseleccionada en su cuenta de Mercado Pago.

------------
----[mlu, mlc, mco, mpe]----
Los ejemplos de código a continuación establecen el **purpose de la preferencia** en `wallet_purchase`, donde el usuario debe iniciar sesión cuando es redirigido a su cuenta de Mercado Pago.

------------

[[[
```php
<?php
// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();
 
// Crear un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Mi producto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
 
// el $preference->purpose = 'wallet_purchase'; solo permite pagos registrados
// para permitir pagos de invitados, puedes omitir esta propiedad
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Crear un objeto de preferencia
let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de invitados, puedes omitir esta propiedad
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Mi producto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};
 
mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor es el ID de preferencia que se enviará a Brick al iniciar
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
       .title("Mi producto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);
 
PreferenceRequest request = PreferenceRequest.builder()
  // el .purpose('wallet_purchase') solo permite pagos registrados
  // para permitir pagos de invitados, puedes omitir esta propiedad
  .purpose('wallet_purchase')
  .items(items).build();
 
client.create(request);
```
```ruby
# Crear un objeto de preferencia
preference_data = {
  # el purpose: 'wallet_purchase' solo permite pagos registrados
  # para permitir pagos de invitados, puedes omitir esta propiedad
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Mi producto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
 
# Este valor es el ID de preferencia que usará en el HTML al iniciar en Brick
@preference_id = preference['id']
```
```csharp
// Crear el objeto de solicitud de preferencia
var request = new PreferenceRequest
{
  // el Purpose = 'wallet_purchase', solo permite pagos registrados
  // para permitir pagos de invitados, puedes omitir esta propiedad
    Purpose = "wallet_purchase",
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56,
        },
    },
};
 
// Crea la preferencia usando el cliente
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Crear un ítem en la preferencia
preference_data = {
  # el "purpose": "wallet_purchase", solo permite pagos registrados
  # para permitir pagos de invitados, puedes omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi ítem",
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
