# Render the Brick

Once the configurations are created, the Brick can be rendered and have all its configurations compiled so that the final structure is generated.

To render the Brick, enter the code below.

[[[
```html
<div id="statusScreenBrick_container"></div>
```
```react-jsx
import { StatusScreen } from '@mercadopago/sdk-react';


<StatusScreen
   initialization={initialization}
   onReady={onReady}
   onError={onError}
/>
```
]]]

The result of rendering the Brick should look like the image below.

![status-screen-Brick](checkout-bricks/status-screen-brick-en.jpg)