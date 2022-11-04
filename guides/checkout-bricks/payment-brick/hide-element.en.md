> CLIENT_SIDE
>
> h1
>
> Hide title

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.hideFormTitle  |
| Type  | Boolean  |
| Comments  | When **true**, hides the title line.  |

```javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideFormTitle: true
       }
   }
}
```

> CLIENT_SIDE
>
> h1
>
> Hide payment button

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.visual.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getFormData function to get the form data (see example below). |

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
    window.paymentBrickController.getFormData()
        .then(({ paymentType, formData }) => {
            console.log('formData received, creating payment...');
            if (paymentType === 'credit_card' || paymentType === 'debit_card') {
                fetch("/process_payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
            }
        })
        .catch((error) => {
            // error handling when calling getFormData()
        });
};
```

> CLIENT_SIDE
>
> h1
>
> Hide Mercado Pago Wallet panel

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.visual.hideRedirectionPanel  |
| Type  | Boolean  |
| Comments  | When **true**, hides within the payment option with the Mercado Pago Wallet, the redirection panel to the Mercado Pago website. |

```javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideRedirectionPanel: true
       }
   }
}
```