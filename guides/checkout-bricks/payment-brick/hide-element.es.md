> CLIENT_SIDE
>
> h1
>
> Ocultar título

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el brick  |
| Propiedad  | customization.hideFormTitle  |
| Tipo  | Boolean  |
| Observaciones  | Cuando **true**, oculta la línea de título.  |

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
> Ocultar botón de pago

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el brick  |
| Propiedad  | customization.visual.hidePaymentButton  |
| Tipo  | Boolean  |
| Observaciones  | Cuando true, el botón de envío del formulario no se muestra y pasa a ser necesario usar la función getFormData para obtener los datos del formulario (ver el ejemplo a continuación).  |

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
            // manejo de errores al llamargetFormData()
        });
};
```

> CLIENT_SIDE
>
> h1
>
> Ocultar panel de Cuenta de Mercado Pago

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el brick  |
| Propiedad  | customization.visual.hideRedirectionPanel |
| Tipo  | Boolean  |
| Observaciones  | Cuando **true**, oculta dentro de la opción de pago con la Billetera de Mercado Pago, el panel de redirección al sitio web de Mercado Pago. |

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