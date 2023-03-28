# Common initialization among Bricks

To set up the Bricks integration and have a responsive, optimized and configurable checkout you need to follow the steps below. These steps apply to the integration of all Bricks.

> CLIENT_SIDE
>
> h2
>
> Add the Mercado Pago library

Use our official libraries to access Mercado Pago's features safely from your frontend.

[[[
```html
//  The JS code can be included in a < script > tag or a separate JS file.
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

## Initialize Mercado Pago library

Then, initialize the Mercado Pago library to use Checkout Bricks.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

## Choose the Brick

With the MercadoPago library added and configured in your project, you are ready to add Bricks to your website. To do so, choose the Brick that best meets your needs and follow the steps detailed in the section corresponding to the chosen Brick.

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Offer different payment methods from which your customers can choose, with the ability to save card details for future purchases.
 - card_link: /developers/en/docs/checkout-bricks/payment-brick/introduction
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Link Mercado Pago Wallet and allow logged payments.
 - card_link: /developers/en/docs/checkout-bricks/wallet-brick/introduction
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
 - card_link: /developers/en/docs/checkout-bricks/status-screen-brick/introduction
 - card_linkDescription: Learn more
 - card_pillText: AVAILABLE
---