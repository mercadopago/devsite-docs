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
