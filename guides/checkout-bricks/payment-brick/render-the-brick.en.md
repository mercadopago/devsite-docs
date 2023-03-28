# Render the Brick

Once the configurations are created, the Brick can be rendered and have all its configurations compiled so that the final structure is generated.

To render the Brick, enter the code below.

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

The result of rendering the Brick should look like the image below.

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-en.gif)

</center>
------------

----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-en.gif)

</center>
------------
----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-en.gif)

</center>
----[mpe, mco, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

</center>
------------