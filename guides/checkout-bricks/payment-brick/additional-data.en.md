# Additional data

Inside the `onSubmit` callback there is a second parameter, **of optional use**, called `additionalData.` It is an object and can contain additional data useful for your integration, but which is **not necessary** for the commit of payment on the backend.

Check out the table below for the fields contained within the `additionalData` object, which will only be returned if the user has opted for payment with a card.

|Field | Type | Description |
|--- |--- | --- |
| bin | string | BIN of the card entered by the user. |
| lastFourDigits | string | The last four digits for card purchases.|
| cardholderName | string | Name of the cardholder.|

See an example of usage below:

[[[
```Javascript
const settings = {
 ...,
 callbacks: {
   onSubmit: ({ selectedPaymentMethod, formData }, additionalData) => {
     // callback called the user to click on the data submit button
     // the additionalData parameter is optional, you can remove it if you want
     console.log(additionalData);
     // example of sending the data collected by Brick to your server
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
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receive payment result
             resolve();
           })
           .catch((error) => {
             // handle error response when trying to create payment
             reject();
           })
       } else if (selectedPaymentMethod === 'wallet_purchase') {
         // wallet_purchase (Mercado Pago Wallet ) doesn`t need to be sent from the backend
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
<Payment
 initialization={initialization}
 customization={customization}
 onSubmit={async ({ selectedPaymentMethod, formData }, additionalData) => {
   console.log({ selectedPaymentMethod, formData }, additionalData);
 }}
/>
```
]]]

If you are not using the native [submit Brick form button](/developers/en/docs/checkout-bricks/payment-brick/visual-customizations/hide-element), you can also access the `additionalData` object via the ` getAdditionalData`. Check out an example usage below.

```javascript
// variable where the Brick controller is saved
paymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```

> WARNING
>
> Attention
>
> Call the `getAdditionalData` method only after the form has been submitted, i.e. after you call the [getFormData.](/developers/en/docs/checkout-bricks/payment-brick/visual-customizations/hide-element) This ensures that the data returned is valid and reliable.