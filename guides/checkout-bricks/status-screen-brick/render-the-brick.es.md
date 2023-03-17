# Renderizar el Brick

Una vez creadas las configuraciones, se puede renderizar el Brick y compilar todas sus configuraciones para generar la estructura final.

Para renderizar el Brick, ingrese el código a continuación.

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

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

![status-screen-Brick](checkout-bricks/status-screen-brick-es.jpg)