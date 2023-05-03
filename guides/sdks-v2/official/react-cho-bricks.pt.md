# Checkout Bricks

Checkout Bricks é um conjunto de módulos de interface do usuário que viabiliza uma integração client-side de forma modular por meio de estruturas configuráveis, seguras e com integração simplificada e unificada.

Abaixo estão os Bricks disponibilizados pela SDK.

| Brick | Descrição |
|---|---|
| Payment | Permite pagamentos com diversos meios de pagamento. |
| Card | Permite pagamentos com cartões. |
| Wallet | Permite pagamentos com Mercado Pago, incluindo parcelamento sem cartão. | 
| Status screen | Permite exibir o status do pagamento |

A seguir, um exemplo de como é possível utilizá-los: 

[[[
```react-jsx
import React from 'react';
import { Payment, initMercadoPago } from '@mercadopago/sdk-react'


initMercadoPago('<YOUR_PUBLIC_KEY>');


const App = () => {
 const initialization = {
   amount: '<PAYMENT_AMOUT>'
 };
 const customization = {
   paymentMethods: {
     atm: 'all',
     ticket: 'all',
     bankTransfer: 'all',
     creditCard: 'all',
     debitCard: 'all',
     mercadoPago: 'all',
   },
 };


 return (
   <Payment
     initialization={initialization}
     customization={customization}
     onSubmit={async (param) => {
       console.log(param);
     }}
   />
 );
};


export default App;

```
]]]

Para integrar o Checkout Bricks utilizando a SDK, consulte a documentação [Inicialização comum](/developers/pt/docs/checkout-bricks/common-initialization). 