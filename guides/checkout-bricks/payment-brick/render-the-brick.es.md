# Renderizar el Brick

Una vez creadas las configuraciones, se puede renderizar el Brick y compilar todas sus configuraciones para generar la estructura final.

Para renderizar el Brick, ingrese el código a continuación.

[[[
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
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-es.gif)

</center>

------------

----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-es.gif)

</center>

------------

----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-es.gif)

</center>

------------

----[mpe, mco, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

</center>

------------