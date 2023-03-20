# Renderizar o Brick

Uma vez criadas as configurações, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final seja gerada.

Para renderizar o Brick, insira o código abaixo.

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

O resultado de renderizar o Brick deve ser como na imagem abaixo.

----[mpe]----
![render-brick-mpe](checkout-bricks/render-brick-mpe-pt.png)

------------