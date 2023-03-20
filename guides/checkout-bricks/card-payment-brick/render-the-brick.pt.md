# Renderizar o Brick

Uma vez criadas as configurações, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final seja gerada.

Para renderizar o Brick, insira o código abaixo.

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

O resultado de renderizar o Brick deve ser como na imagem abaixo.

<center>

![cardform](checkout-bricks/card-form-pt.png)

</center>