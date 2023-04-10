> CLIENT_SIDE
>
> h1
>
> Hide title and flags

| Brick  | Card Payment Form  |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.hideFormTitle  |
| Type  | Boolean  |
| Comments  | When **true**, hides the title line and accepted flags.  |

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
> h1
>
> Hide payment button

| Brick  | Card Payment Form  |
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

```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
```

```Javascript
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

> NOTE
>
> Important
> 
> In case you need to customize the Brick’s visual style beyond the available **themes and custom variables**, avoid using the CSS ids and classes values that are bundled with the Bricks as reference, because they are automatically generated during the application’s build process and their names change regularly. Instead, use HTML inheritance to access the elements you need to customize.