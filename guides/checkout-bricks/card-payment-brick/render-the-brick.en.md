# Render the Brick

Once the configurations are created, the Brick can be rendered and have all its configurations compiled so that the final structure is generated.

To render the Brick, enter the code below.

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

The result of rendering the Brick should look like the image below.

<center>

![cardform](checkout-bricks/card-form-en.png)

</center>