## Inicializar biblioteca Mercado Pago

Em seguida, inicialize a biblioteca Mercado Pago para utilizar Checkout Bricks.

```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```

```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY');
```