> CLIENT_SIDE
>
> h1
>
> Ocultar título y banderas

| Brick  | Card Payment Form  |
| --- | --- |
| Momento de personalización  |  Al renderizar el Brick  |
| Propiedad  | customization.hideFormTitle  |
| Tipo  | Boolean  |
| Observaciones  | Cuando **true**, oculta la línea de título y las banderas aceptadas.  |

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
> Ocultar botón de pago

| Brick  | Card Payment Form  |
| --- | --- |
| Momento de personalización  |  Al renderizar el Brick  |
| Propiedad  | customization.visual.hidePaymentButton  |
| Tipo  | Boolean  |
| Observaciones  | Cuando true, el botón de envío del formulario no se muestra y pasa a ser necesario usar la función getFormData para obtener los datos del formulario (ver el ejemplo a continuación).  |

[[[
```javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback llamado cuando el ladrillo está listo
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
            // manejo de errores al llamar a getFormData()
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
]]]

> NOTE
>
> Importante
> 
> Si necesita personalizar el estilo visual de Brick además de personalizar **temas y variables personalizadas**, le recomendamos que no utilizar como referencia o selector el valor de las clases e ID de CSS que son enviados con los Bricks, ya que se generan automáticamente durante el proceso de build de la aplicación y cambian regularmente. Utilice la herencia de elementos HTML para acceder a lo que necesita personalizar.