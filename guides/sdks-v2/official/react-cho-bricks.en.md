# Checkout Bricks

Checkout Bricks is a set of user interface modules that enable a modular client-side integration through configurable, secure, and simplified unified structures.

Below are the Bricks available in the SDK.

| Brick | Description |
|---|---|
| Payment | Enables payments with various payment methods. |
| Card | Enables payments with cards. |
| Wallet | Enables payments with Mercado Pago, including installment payments without a card. | 
| Status screen | Enables displaying the payment status. |

Below is an example of how to use them.

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

To integrate Checkout Bricks using the SDK, see the [Common initialization](/developers/en/docs/checkout-bricks/common-initialization) documentation.
