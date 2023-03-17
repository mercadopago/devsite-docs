# Renderizar o Brick

Uma vez criadas as configurações, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final seja gerada.

Para renderizar o Brick, insira o código abaixo.

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

O resultado de renderizar o Brick deve ser como na imagem abaixo.

![status-screen-Brick](checkout-bricks/status-screen-brick-pt.jpg)