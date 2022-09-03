# Ejemplo de código 

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir la Billetera Mercado Pago como medio de pago con Payment Brick. 

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

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

> Luego de que el usuario es redirigido a la página de Mercado Pago para realizar el pago, puede ser notificado sobre el resultado de la transacción registrando las `back_urls`, como se explica en las [Preferências](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences).
>
> Los pagos con **Carteira Mercado Pago** no necesitan ser enviados a través del backend. Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)