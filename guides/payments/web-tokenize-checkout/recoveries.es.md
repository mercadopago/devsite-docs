---
  sites_supported:
      - mla
      - mco
---

# Web Tokenize Checkout - Recuperos

En el caso de que un pago fuese rechazado puedes ofrecerle al comprador la opción de reintentarlo y recuperar la venta. Para este caso de uso existe la posibilidad de invocar al *Web Tokenize Checkout* con el formulario ya abierto.

Dicha opción es controlada desde el atributo `data-opened` y sólo es cuestión de setear el atributo en **true**:

```html
<form action="/procesar-pago" method="POST">
  <script
  src="https://www.mercadopago.com.ar/integrations/v1/checkout.js"
  data-public-key="ENV_PUBLIC_KEY"
  data-transaction-amount="100.00"
  data-opened="true">
  </script>
</form>
```