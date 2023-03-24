# Renderizar o Brick

Uma vez criadas as configurações, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final seja gerada.

Para renderizar o Brick, insira o código abaixo.

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

O resultado de renderizar o Brick deve ser como na imagem abaixo.

<center>

![wallet-brick-render](checkout-bricks/wallet-brick-render-pt.png)

</center>