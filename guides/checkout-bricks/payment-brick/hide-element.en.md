> CLIENT_SIDE
>
> h1
>
> Hide title

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.hideFormTitle  |
| Type  | Boolean  |
| Comments  | When **true**, hides the title line.  |

```Javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideFormTitle: true
       }
   }
}
```

```react-jsx
const customization = {
 visual: {
   hideFormTitle: true
 }
};
```

> CLIENT_SIDE
>
> h1
>
> Hide payment button

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getFormData function to get the form data (see example below). |

```Javascript
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

```Javascript
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

```react-jsx
const customization = {
 visual: {
   hidePaymentButton: true
 }
};
```

> CLIENT_SIDE
>
> h1
>
> Hide Mercado Pago Wallet panel

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.hideRedirectionPanel  |
| Type  | Boolean  |
| Comments  | When **true**, hides within the payment option with the Mercado Pago Wallet, the redirection panel to the Mercado Pago website. |

```Javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideRedirectionPanel: true
       }
   }
}
```

```react-jsx
const customization = {
 visual: {
   hideRedirectionPanel: true
 }
};
```

> NOTE
>
> Important
> 
> In case you need to customize the Brick’s visual style beyond the available **themes and custom variables**, avoid using the CSS ids and classes values that are bundled with the Bricks as reference, because they are automatically generated during the application’s build process and their names change regularly. Instead, use HTML inheritance to access the elements you need to customize.