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

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-pt.gif)

</center>
------------

----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-pt.gif)

</center>
------------

----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-pt.gif)

</center>
------------

----[mpe, mco, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-pt.gif)

</center>
------------