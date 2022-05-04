# Inclua e configure a biblioteca MercadoPago.js

**Utilize nossa biblioteca oficial para acessar as funcionalidades de Mercado Pago** desde seu frontend de forma segura.

Você precisará instalar o SDK adicionando o seguinte em seu código HTML:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Em seguida, inicialize o SDK definindo sua [chave pública]([FAKER][CREDENTIALS][URL]) usando código JavaScript:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
