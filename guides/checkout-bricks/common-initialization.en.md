# Common initialization

To set up Brick integrations and have a responsive, optimized, and configurable checkout, we provide the common initial configuration process for all Bricks in the steps below.

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

With the Mercado Pago library added and configured in your project, you are ready to add Bricks to your website. To do so, choose the Brick that best meets your needs and follow the steps detailed in the section corresponding to the chosen Brick.

----[mlb, mlu, mlc, mco, mpe]----

---
future_product_avaible:
 - title: Bricks
 - description: Know all Checkout Bricks modules and their availability.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Offer different payment methods that your customers can choose, with the ability to save card details for future purchases. Test the Brick demonstration before integrating it. 
 - card_button: /developers/en/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Link Mercado Pago Wallet and allow logged payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/wallet-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Offer credit and debit card payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/card-payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Inform your customers of the results of the purchase process, after making the payment. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/status-screen-brick
 - card_linkProofDescription: Access demo
---

------------
----[mla]----

---
future_product_avaible:
 - title: Bricks
 - description: Know all Checkout Bricks modules and their availability.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Offer different payment methods that your customers can choose, with the ability to save card details for future purchases. Test the Brick demonstration before integrating it. 
 - card_button: /developers/en/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Link Mercado Pago Wallet and allow logged payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/wallet-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Offer credit and debit card payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/card-payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Inform your customers of the results of the purchase process, after making the payment. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/status-screen-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: User
 - card_title: Brand Brick
 - card_description: Communicate different messages related to the available payment methods via Mercado Pago in your store.
 - card_button: /developers/en/docs/checkout-bricks/brand-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

------------
----[mlm]----

---
future_product_avaible:
 - title: Bricks
 - description: Know all Checkout Bricks modules and their availability.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Offer different payment methods that your customers can choose, with the ability to save card details for future purchases. Test the Brick demonstration before integrating it. 
 - card_button: /developers/en/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Link Mercado Pago Wallet and allow logged payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/wallet-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Offer credit and debit card payments. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/card-payment-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Inform your customers of the results of the purchase process, after making the payment. Test the Brick demonstration before integrating it.
 - card_button: /developers/en/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: true
 - card_linkProof: /developers/en/live-demo/status-screen-brick
 - card_linkProofDescription: Access demo
 - card_avaible: true
 - card_icon: Check
 - card_title: Review & Confirm
 - card_description: Shows a summary of the entire purchase process, with the most relevant information, so that your customers can review before confirming the purchase.
 - card_button: /developers/en/docs/checkout-bricks/payment-brick/advanced-features/add-confirmation-step
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

------------