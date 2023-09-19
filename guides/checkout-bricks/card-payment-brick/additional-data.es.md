# Datos adicionales

Dentro del callback `onSubmit` hay un segundo parámetro, **de uso opcional**, llamado `additionalData`. Es un objeto y puede contener datos adicionales útiles para su integración, pero que **no son necesarios** para el compromiso de pago en el backend.

Consulte la siguiente tabla para ver los campos contenidos en el objeto `additionalData`.

| Campo | Tipo | Descripción |
|--- |--- | --- |
| bin | string | BIN de la tarjeta ingresada por el usuario. Solo se devuelve si el usuario ha elegido pagar con tarjeta. |

Vea a continuación un ejemplo de uso:

[[[
```Javascript
const settings = {
 ...,
 callbacks: {
   onSubmit: (cardFormData, additionalData) => {
     // callback llamado al usuario para hacer clic en el botón de envío de datos
     // el parámetro additionalData es opcional, puede eliminarlo si lo desea    
     console.log(additionalData);
     // ejemplo de envío de los datos recopilados por Brick a su servidor
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(cardFormData)
       })
       .then((response) => {
         // recibir el resultado del pago
         resolve();
       })
       .catch((error) => {
         // manejar la respuesta de error al intentar crear el pago
         reject();
       })
     });
   },
 },
}
```
```react-jsx
<Card
 initialization={initialization}
 customization={customization}
 onSubmit={async (cardFormData, additionalData) => {
   console.log(cardFormData, additionalData);
 }}
/>
```
]]]

Si no está utilizando el botón nativo [enviar formulario de Brick](/developers/es/docs/checkout-bricks/payment-brick/visual-customizations/hide-element), también puede acceder al objeto `additionalData` a través de `getAdditionalData`. Vea un ejemplo de uso a continuación.

```javascript
// variable donde se guarda el controller del Brick
cardPaymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```

> WARNING
>
> Atención
>
> Llame al método `getAdditionalData` solo después de que se haya enviado el formulario, es decir, después de llamar al [getFormData.](/developers/es/docs/checkout-bricks/payment-brick/visual-customizations/hide-element) Esto asegura que los datos devueltos sean válidos y fiables.