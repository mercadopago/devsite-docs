# Esquema de apertura

El esquema de apertura le permite definir cómo se abrirá el checkout para el usuario. Por defecto, checkout pro se abre de forma **Modal**, es decir, en una ventana dentro del propio sitio web, sin redirigir a una página externa para completar el pago.

Sin embargo, es posible personalizar la apertura y definir el modelo **Redirect**, en el que Checkout Pro se abre en una nueva ventana redirigiendo al comprador a la pantalla de pago.

Para definir el modelo de apertura de **redirect**, agrega el siguiente código HTML directamente en su proyecto informando el `init_point` de la preferencia generada previamente.

[[[
```html
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="YOUR_INIT_POINT"> // Indica el ID de la preferencia
    <button>
      Pagar com Mercado Pago
    </button>
    
</a>
</body>
</html>
```
]]]

> PREV_STEP_CARD_ES
>
> Fecha de vencimiento
>
> Vea cómo cambiar la fecha de vencimiento predeterminada para los pagos de boletos.
>
> [Fecha de vencimiento](/developers/es/docs/checkout-pro/checkout-customization/preferences/expiration-date)

> NEXT_STEP_CARD_ES
>
> Botón de pago 
>
> Aprenda a definir y personalizar la interfaz que se muestra al usuario, incluido cómo ingresar a la pantalla de pago. 
>
> [Botón de pago](/developers/es/docs/checkout-pro/checkout-customization/user-interface/payment-button)