## Render brick

Once instantiated, the brick can be rendered and have all its configurations compiled so that the final structure of the brick is generated.

To render the brick, insert the following code in the HTML of the project and fill in the attributes according to the comments highlighted in this same code.

> WARNING
>
> Important
>
> When you finish rendering the brick, it is necessary to send the payment to Mercado Pago to ensure that your backend can receive the information from the Card Payment Form. To do this, see the [Payment submission to Mercado Pago](/developers/en/docs/checkout-api/payment-methods/receiving-payment-by-card#bookmark_payment_submission_to_mercado_pago) section of the Checkout API documentation for instructions.

[[[
```javascript
const settings = {
  initialization: {
    amount: number, //valor del procesamiento a realizar
  },
  callbacks: {
    onReady: () => {
      // callback called when the brick is ready
    },
    onSubmit: (data) => {
      // callback called when the user clicks on the submit data button
    },
    onError: (error: string) => { 
      // callback called to all error cases related to the Brick
    },
  },
};

const brick = await bricks.create('cardPayment', settings);
const cardPaymentBrick = await brick.render('cardPaymentBrick_container');
```
]]]