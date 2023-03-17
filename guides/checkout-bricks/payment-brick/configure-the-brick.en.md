# Configure the Brick

Create Brick's startup configuration.

----[mlb]----

[[[
```Javascript
const settings = {
 initialization: {
   /*
     "amount" is the total amount to be paid by all means of payment
     with the exception of the Mercado Pago Account and Installment without a credit card, which have their processing value determined in the backend through the "preferenceId"
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
     Callback called when Brick is ready.
     Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking the submit data button
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         });
     });
   },
   onError: (error) => {
     // callback called for all Brick error cases
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
 // callback called when clicking the submit data button
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receive payment result
       resolve();
     })
     .catch((error) => {
       // handle error response when trying to create payment
       reject();
     });
 });
};
const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};
const onReady = async () => {
 /*
  Callback called when Brick is ready.
  Here you can hide loadings from your site, for example.
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
     "amount" is the total amount to be paid by all means of payment
     with the exception of the Mercado Pago Account and Installment without a credit card, which have their processing value determined in the backend through the "preferenceId"
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
     Callback called when Brick is ready.
     Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking the submit data button
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         });
     });
   },
   onError: (error) => {
     // callback called for all Brick error cases
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
 // callback called when clicking the submit data button
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receive payment result
       resolve();
     })
     .catch((error) => {
       // handle error response when trying to create payment
       reject();
     });
 });
};
const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};
const onReady = async () => {
 /*
  Callback called when Brick is ready.
  Here you can hide loadings from your site, for example.
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
     "amount" is the total amount to be paid by all means of payment
     with the exception of the Mercado Pago Account and Installment without a credit card, which have their processing value determined in the backend through the "preferenceId"
    */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback called when Brick is ready.
     Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking the submit data button
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         });
     });
   },
   onError: (error) => {
     // callback called for all Brick error cases
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
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback called when clicking the submit data button
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receive payment result
       resolve();
     })
     .catch((error) => {
       // handle error response when trying to create payment
       reject();
     });
 });
};
const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};
const onReady = async () => {
 /*
  Callback called when Brick is ready.
  Here you can hide loadings from your site, for example.
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
     "amount" is the total amount to be paid by all means of payment
     with the exception of the Mercado Pago Account and Installment without a credit card, which have their processing value determined in the backend through the "preferenceId"
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
     Callback called when Brick is ready.
     Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking the submit data button
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         });
     });
   },
   onError: (error) => {
     // callback called for all Brick error cases
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
 // callback called when clicking the submit data button
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receive payment result
       resolve();
     })
     .catch((error) => {
       // handle error response when trying to create payment
       reject();
     });
 });
};
const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};
const onReady = async () => {
 /*
  Callback called when Brick is ready.
  Here you can hide loadings from your site, for example.
 */
};
```
]]]

------------

> WARNING
> 
> Attention
>
> If it is necessary to dismantle and reassemble a Brick, it is recommended to destroy the current instance and generate a new one. To do so, use the *unmount* method available in Brick's *controller*, in this case: `window.paymentBrickController.unmount()`.

To use a payment method (`paymentMethods`) of the "mercadoPago" type, a preference must be sent during Brick initialization, replacing the value `<PREFERENCE_ID>` by the ID of the preference created. Instructions for creating the preference are in the [Create Preference](/developers/en/docs/checkout-bricks/payment-brick/default-rendering/create-preference) section.