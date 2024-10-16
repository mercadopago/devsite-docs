# Hide element

See below how to hide Payment Brick elements.

> CLIENT_SIDE
>
> h2
>
> Hide title

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.hideFormTitle  |
| Type  | Boolean  |
| Comments  | When **true**, hides the title line.  |

[[[
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
]]]

> CLIENT_SIDE
>
> h2
>
> Hide payment button

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getFormData function to get the form data (see example below). |

[[[
```Javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback called when brick is ready
        },
        onError: (error) => { 
            // callback called for all Brick error cases
        },
    },
    customization: {
        visual: {
            hidePaymentButton: true
        }
    }
}
```
```react-jsx
const customization = {
 visual: {
   hidePaymentButton: true
 }
};
```
]]]

Since the default payment button has been hidden, you will need to add some replacement. The following code blocks exemplify how to implement your custom payment button.

```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
```

```Javascript
function createPayment(){
    window.paymentBrickController.getFormData()
        .then(({ formData }) => {
            console.log('formData received, creating payment...');
            fetch("/process_payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
        })
        .catch((error) => {
            // error handling when calling getFormData()
        });
};
```