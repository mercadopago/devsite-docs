# Ocultar elemento

Ve a continuación cómo ocultar elementos de Payment Brick.

> CLIENT_SIDE
>
> h2
>
> Ocultar título

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el Brick  |
| Propiedad  | customization.hideFormTitle  |
| Tipo  | Boolean  |
| Observaciones  | Cuando **true**, oculta la línea de título.  |

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
> Ocultar botón de pago

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el Brick  |
| Propiedad  | customization.visual.hidePaymentButton  |
| Tipo  | Boolean  |
| Observaciones  | Cuando true, el botón de envío del formulario no se muestra y pasa a ser necesario usar la función getFormData para obtener los datos del formulario (ver el ejemplo a continuación).  |

[[[
```Javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback llamado cuando el Brick está listo
        },
        onError: (error) => { 
            // callback llamado para todos los casos de error de Brick
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

Dado que el botón de pago predeterminado se ha ocultado, deberá agregar algún reemplazo. Los siguientes bloques de código ejemplifican cómo implementar su botón de pago personalizado.

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
            // manejo de errores al llamar getFormData()
        });
};

```