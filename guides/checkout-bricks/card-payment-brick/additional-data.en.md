# Additional data

Inside the `onSubmit` callback there is a second parameter, **of optional use**, called `additionalData.` It is an object and can contain additional data useful for your integration, but which is **not necessary** for the commit of payment on the backend.

See the following table for the fields contained within the `additionalData` object.

|Field | Type | Description |
|--- |--- | --- |
| bin | string | BIN of the card entered by the user. It is only returned if the user has chosen to pay by card.|

See an example of usage below:

```javascript
const settings = {
    ...,
    callbacks: {
     onSubmit: (cardFormData, additionalData) => {
        // callback called the user to click on the data submit button
        // the additionalData parameter is optional, you can remove it if you want
        console.log(additionalData);
        // example of sending the data collected by Brick to your server
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
            })
            .then((response) => {
                // receive payment result
                resolve();
            })
            .catch((error) => {
                // handle error response when trying to create payment
                reject();
            })
          });
      },
    },
}
```

If you are not using the native [submit brick form button](/development/en/docs/checkout-bricks/card-payment-brick/additional-customization/hide-element), you can also access the `additionalData` object via the ` getAdditionalData`. Check out an example usage below.

```javascript
// variable where the Brick controller is saved
cardPaymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```

> WARNING
>
> Attention
>
> Call the `getAdditionalData` method only after the form has been submitted, i.e. after you call the [`getFormData`](/development/en/docs/checkout-bricks/card-payment-brick/additional-customization/hide- element). This ensures that the data returned is valid and reliable.