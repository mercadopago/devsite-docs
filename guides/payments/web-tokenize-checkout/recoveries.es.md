---
  sites_supported:
      - mla
      - mco
---

# Web Tokenize Checkout - Recuperos

En el caso de que un pago fuese rechazado puedes ofrecerle al comprador la opción de volver a hacer el pago. Para eso existe una forma de redirigir al usuario e invocar al *Web Tokenize Checkout* con el formulario ya abierto.

Para hacer esto incluye un link con la URL de tu página de checkout, incluyendo `#checkout` al final.

## Por ejemplo:

Si `https://tusitio.com/carrito` es donde has incluido el checkout de **Mercado Pago**, entonces `https://tusitio.com/carrito#checkout` será la misma página con el modal de pago abierto por defecto.