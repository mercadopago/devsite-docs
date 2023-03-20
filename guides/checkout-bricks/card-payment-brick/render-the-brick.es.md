# Renderizar el Brick

Una vez creadas las configuraciones, se puede renderizar el Brick y compilar todas sus configuraciones para generar la estructura final.

Para renderizar el Brick, ingrese el código a continuación.

[[[
```html
<div id="cardPaymentBrick_container"></div>
```
```react-jsx
import { CardPayment } from '@mercadopago/sdk-react';


<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

<center>

![cardform](checkout-bricks/card-form-es.png)

</center>