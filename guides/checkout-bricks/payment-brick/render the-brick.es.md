# Renderizar el Brick

Una vez creadas las configuraciones, se puede renderizar el Brick y compilar todas sus configuraciones para generar la estructura final.

Para renderizar el Brick, ingrese el código a continuación.

```html
<div id="paymentBrick_container"></div>
```

```react-jsx
import { Payment } from '@mercadopago/sdk-react';

<Payment
   initialization={initialization}
   customization={customization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

[IMAGEM]