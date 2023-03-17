# Datos adicionales

Dentro del callback `onSubmit` hay un segundo parámetro, **de uso opcional**, llamado `additionalData`. Es un objeto y puede contener datos adicionales útiles para su integración, pero que **no son necesarios** para el compromiso de pago en el backend.

Consulta la siguiente tabla para ver los campos contenidos en el objeto `additionalData`.

| Campo | Tipo | Descripción |
|--- |--- | --- |
| bin | string | BIN de la tarjeta ingresada por el usuario. Solo se devuelve si el usuario ha elegido pagar con tarjeta. |

Mira a continuación un ejemplo de uso:

[[[
```Javascript
const settings = {
 ...,
 callbacks: {
   onSubmit: ({ selectedPaymentMethod, formData }, additionalData) => {
     // callback llamado al usuario para hacer clic en el botón de envío de datos
     // el parámetro additionalData es opcional, puede eliminarlo si lo desea
     console.log(additionalData);
     // ejemplo de envío de los datos recopilados por Brick a su servidor
     return new Promise((resolve, reject) => {
       let url = undefined;
       if (selectedPaymentMethod === 'credit_card' || selectedPaymentMethod === 'debit_card') {
         url = 'process_payment_card';
       } else if (selectedPaymentMethod === 'bank_transfer') {
         url = 'process_payment_pix';
       } else if (selectedPaymentMethod === 'ticket') {
         url = 'process_payment_ticket';
       }


       if (url) {
         fetch(url, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData)
         })
           .then((response) => {
             // recibir el resultado del pago
             resolve();
           })
           .catch((error) => {
             // manejar la respuesta de error al intentar crear el pago
             reject();
           })
       } else if (selectedPaymentMethod === 'wallet_purchase') {
         // wallet_purchase (Conta Mercado Pago) no necesita ser enviada desde el backend
         resolve();
       } else {
         reject();
       }
     });
   },
 },
}
```
```react-jsx
// variable donde se guarda el controlador Brick
cardPaymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```
]]]

Si no estás utilizando el botón nativo [enviar formulario de Brick](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/hide-element), también puedes acceder al objeto `additionalData` a través de `getAdditionalData`. Ve un ejemplo de uso a continuación.

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
> Llama al método `getAdditionalData` solo después de que se haya enviado el formulario; es decir, después de llamar al [getFormData.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/hide-element) . Esto asegura que los datos devueltos sean válidos y fiables.