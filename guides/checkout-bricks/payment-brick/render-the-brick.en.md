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

----[mpe]----
![render-brick-mpe](checkout-bricks/render-brick-mpe-en.png)

------------