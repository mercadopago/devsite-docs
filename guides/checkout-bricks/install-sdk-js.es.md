# Incluye y configura la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a las funcionalidades de Mercado Pago** desde tu frontend de forma segura.

Para esto deberás instalar la SDK agregando lo siguiente en tu código HTML:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Luego, inicializa la SDK y configura tu [clave pública]([FAKER][CREDENTIALS][URL]) mediante código JavaScript de la siguiente manera:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
