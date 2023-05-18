# SDK JS - React

Our React SDK is compatible with the most updated standard for web development, as well as providing functions and components that allow for simplified integration with Mercado Pago.

To use the React SDK, install it via npm using the code below.


[[[
```bash
npm install @mercadopago/sdk-react

```
]]]

Next, add the public key of the account being integrated so that it can be identified when connecting to Mercado Pago.

> NOTE
>
> Important
>
> See [Credentials](/developers/en/docs/credentials) for more details on the public key.

[[[
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

```
]]]


After completing the SDK installation, you can use the following modules to create the Checkout.

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Offer different payment methods from which your customers can choose, with the ability to save card details for future purchases.
 - card_link: /developers/en/docs/checkout-bricks/payment-brick/default-rendering
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Link Mercado Pago Wallet and allow logged payments.
 - card_link: /developers/en/docs/checkout-bricks/wallet-brick/default-rendering
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Offer credit and debit card payments.
 - card_link: /developers/en/docs/checkout-bricks/card-payment-brick/introduction
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Inform your customers of the results of the purchase process, after making the payment. 
 - card_link: /developers/en/docs/checkout-bricks/status-screen-brick/default-rendering
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
---

> NOTE
>
> Important
>
> If it is necessary to add or modify any logic in the flow of Core methods in React, please check the documentation [Core Methods](/developers/en/docs/sdks-library/client-side/sdk-js-react/core-methods-installation) in our SDK library.


