## Ocultar botón de pago

| Brick  | Card Payment Form  |
| --- | --- |
| Momento de personalización  |  Al renderizar el brick  |
| Propiedad  | customization.hidePaymentButton  |
| Tipo  | Boolean  |
| Observaciones  | Cuando true, el botón de envío del formulario no se muestra y pasa a ser necesario usar la función getCardFormData para obtener los datos del formulario (ver el ejemplo a continuación).  |

```javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback llamado cuando Brick esté listo
        },
        onError: (error) => {
            // callback llamado para todos los casos de error de Brick
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
            // tratamiento de error al intentar llamar getFormData()
        });
};
```
