# Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago features** from your frontend securely.

You will need to install the SDK by adding the following in your HTML code:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Next, initialize the SDK by setting your [public key]([FAKER][CREDENTIALS][URL]) using JavaScript code as follows:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
