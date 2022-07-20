> CLIENT_SIDE
>
> h1
>
> Hide payment button

| Brick  | Card Payment Form  |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.visual.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getCardFormData function to get the form data (see example below). |

```javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback chamado quando o Brick estiver pronto
        },
        onError: (error) => { 
            // callback chamado para todos os casos de erro do Brick
        },
    },
    customization: {
        visual: {
            hidePaymentButton: true
        }
    }
}
```

```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
```

```javascript
function createPayment(){
    window.cardPaymentBrickController.getFormData()
        .then((cardFormData) => {
            console.log('cardFormData received, creating payment...');
            fetch("/process_payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData),
            })
        })
        .catch((error) => {
            // error handling when calling getFormData()
        });
};
```

> PREV_STEP_CARD_EN
>
> Configure accepted payment methods
>
> Learn how to configure payments exclusively with credit or debit.
>
> [Configure accepted payment methods](/developers/en/docs/checkout-bricks/additional-customization/configure-payment-methods)


> NEXT_STEP_CARD_EN
>
> Hide title and flags
>
> Learn how you can hide the UI titles and the card brands in Card Payment Brick.
>
> [Hide title and flags](/developers/en/docs/checkout-bricks/additional-customization/hide-title-and-flags)
