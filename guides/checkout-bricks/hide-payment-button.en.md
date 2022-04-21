## Hide payment button

| Brick  | Card Payment Form  |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getCardFormData function to get the form data (see example below). |

```javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback called when the brick is ready
        },
        onError: (error) => { 
            // callback called to all error cases related to the Brick
        },
    },
    customization: {
        hidePaymentButton: true
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
