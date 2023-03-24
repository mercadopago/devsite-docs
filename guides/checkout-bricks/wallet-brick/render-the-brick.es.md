# Renderizar el Brick

Una vez creadas las configuraciones, se puede renderizar el Brick y compilar todas sus configuraciones para generar la estructura final.

Para renderizar el Brick, ingrese el código a continuación.

[[[
```html
<div id="walletBrick_container"></div>
```
```react-jsx
import { Wallet } from '@mercadopago/sdk-react';


<Wallet
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

<center>

![wallet-brick-render](checkout-bricks/wallet-brick-render-es.png)

</center>