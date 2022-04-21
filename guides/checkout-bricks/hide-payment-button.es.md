## Ocultar botón de pago

| Brick  | Card Payment Form  |
| --- | --- |
| Momento de personalización  |  Al renderizar el brick  |
| Propiedad  | settings.customization.hidePaymentButton  |
| Tipo  | Boolean  |
| Observaciones  | Cuando true, el botón de envío del formulario no se muestra y pasa a ser necesario usar la función getCardFormData para obtener los datos del formulario (ver el ejemplo a continuación).  |

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
            // tratar el error al intentar obtener los datos del formulario
        });
};
```
