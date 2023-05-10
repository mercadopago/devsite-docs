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

> CLIENT_SIDE
>
> h2
>
> Ocultar panel de Cuenta de Mercado Pago

| - | Brick |
| --- | --- |
| Momento de personalización  |  Al renderizar el Brick  |
| Propiedad  | customization.visual.hideRedirectionPanel |
| Tipo  | Boolean  |
| Observaciones  | Cuando **true**, oculta dentro de la opción de pago con la Billetera de Mercado Pago, el panel de redirección al sitio web de Mercado Pago. |

[[[
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
]]]

> NOTE
>
> Importante
> 
> Si necesita personalizar el estilo visual de Brick además de personalizar **temas y variables personalizadas**, le recomendamos que no utilizar como referencia o selector el valor de las clases e ID de CSS que son enviados con los Bricks, ya que se generan automáticamente durante el proceso de build de la aplicación y cambian regularmente. Utilice la herencia de elementos HTML para acceder a lo que necesita personalizar.