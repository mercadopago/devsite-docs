# Checkout Bricks

Checkout Bricks es un conjunto de módulos de interfaz de usuario que permite una integración del lado del cliente de forma modular, a través de estructuras configurables, seguras y con integración simplificada y unificada.

A continuación se muestran los Bricks disponibles en nuestros SDKs.

| Brick | Descripción |
|---|---|
| Payment | Permite pagos con diversos medios de pago. |
| Card | Permite pagos con tarjetas. |
| Wallet | Permite pagos con Mercado Pago, incluyendo la posibilidad de financiación sin necesidad de usar una tarjeta de crédito. | 
| Status screen | Permite mostrar el estado del pago. |

A continuación, se muestra un ejemplo de cómo se pueden utilizar.


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

Para integrar el Checkout Bricks utilizando nuestros SDK, consulta la documentación [Inicio común](/developers/es/docs/checkout-bricks/common-initialization).
