# Render brick

Once instantiated, the brick can be rendered and have all its configurations compiled so that the final structure of the brick is generated.

To render the brick, insert the following code after the previous step and fill in the attributes according to the comments highlighted in this same code.

```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //value to be charged
    },
    callbacks: {
      onReady: () => {
        // callback called when the brick is ready
      },
      onSubmit: (cardFormData) => {
        // callback called when the user clicks on the submit data button

        // example of sending the data collected by our Brick to your server
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
            })
            .then((response) => {
                // receive payment result
                resolve();
            })
            .catch((error) => {
                // handle error response when trying to create payment
                reject();
            })
          });
      },
      onError: (error) => { 
        // callback called to all error cases related to the Brick
      },
    },
  };

  cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
  https://github.com/meliguicarvalho/sdk-js
};

renderCardPaymentBrick(bricksBuilder);
      
```

> WARNING
>
> Important
>
> It is necessary to send the information collected by the Card Payment Brick to Mercado Pago from your backend and complete the payment securely. To do this, see the [Payment submission to Mercado Pago](/developers/en/docs/checkout-api/payment-methods/receiving-payment-by-card#bookmark_payment_submission_to_mercado_pago) section of the Checkout API documentation for instructions.
