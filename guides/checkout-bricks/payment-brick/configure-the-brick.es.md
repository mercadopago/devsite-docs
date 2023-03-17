# Configurar el Brick

Creae la configuración de inicio de Brick

----[mlb]----

[[[
```Javascript
const settings = {
 initialization: {
   /*
     "amount" es el monto total a pagar por todos los medios de pago
     con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     ticket: "all",
     bankTransfer: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback llamado cuando el Brick está listo.
     Aquí puede ocultar cargamentos de su sitio, por ejemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón enviar datos
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // recibir el resultado del pago
           resolve();
         })
         .catch((error) => {
           // manejar la respuesta de error al intentar crear el pago
           reject();
         });
     });
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
   },
 },
};
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   bankTransfer: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // recibir el resultado del pago
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       reject();
     });
 });
};
const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando el Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

------------
----[mlm]----

[[[
```Javascript
const settings = {
 initialization: {
   /*
     "amount" es el monto total a pagar por todos los medios de pago
     con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     atm: "all",
     ticket: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback llamado cuando el Brick está listo.
     Aquí puede ocultar cargamentos de su sitio, por ejemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón enviar datos
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // recibir el resultado del pago
           resolve();
         })
         .catch((error) => {
           // manejar la respuesta de error al intentar crear el pago
           reject();
         });
     });
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
   },
 },
};
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   atm: "all",
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // recibir el resultado del pago
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       reject();
     });
 });
};
const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando el Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

------------
----[mpe]----

[[[
```Javascript
const settings = {
 initialization: {
   /*
     "amount" es el monto total a pagar por todos los medios de pago
     con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     creditCard: "all",
     debitCard: "all",
     mercadoPago: ["wallet_purchase"],
     atm: "all",
   },
 },
 callbacks: {
   onReady: () => {
    /*
     Callback llamado cuando el Brick está listo.
     Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón enviar datos
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // recibir el resultado del pago
           resolve();
         })
         .catch((error) => {
           // manejar la respuesta de error al intentar crear el pago
           reject();
         });
     });
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
   },
 },
};
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   creditCard: "all",
   debitCard: "all",
   mercadoPago: ["wallet_purchase"],
   atm: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // recibir el resultado del pago
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       reject();
     });
 });
};
const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.error(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando el Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

------------
----[mla, mlc, mco, mlu]----

[[[
```Javascript
const settings = {
 initialization: {
   /*
     "amount" es el monto total a pagar por todos los medios de pago
     con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     ticket: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback llamado cuando el Brick está listo.
     Aquí puede ocultar cargamentos de su sitio, por ejemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback llamado al hacer clic en el botón enviar datos
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // recibir el resultado del pago
           resolve();
         })
         .catch((error) => {
           // manejar la respuesta de error al intentar crear el pago
           reject();
         });
     });
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
     console.error(error);
   },
 },
};
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // recibir el resultado del pago
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       reject();
     });
 });
};
const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando el Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

------------

> WARNING
> 
> Atención
>
> Si es necesario desmontar y volver a montar un Brick, se recomienda destruir la instancia actual y generar una nueva. Para hacerlo, usa el método *unmount* disponible en el *controller* de Brick, en este caso: `window.paymentBrickController.unmount()`.

Para utilizar un método de pago (`paymentMethods`) del tipo "mercadoPago", se debe enviar una preferencia durante la inicialización del Brick, reemplazando el valor `<PREFERENCE_ID>` por el ID de la preferencia creada. Las instrucciones para crear una preferencia se encuentran en la sección [Crear preferencia](/developers/es/docs/checkout-bricks/payment-brick/default-rendering/create-preference).