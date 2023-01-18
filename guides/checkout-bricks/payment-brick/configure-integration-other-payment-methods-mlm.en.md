# Other payment methods

With Mercado Pago's Checkout Bricks, it is possible to offer, in addition to card, **payments with cash via ticket**. 

> NOTE
>
> Important
>
> To make it easier for the buyer to view the payments with cash via ticket, Brick shows the payment points (Example: **7 Eleven**, **Santander**, **OXXO**, etc.) to the user, instead of directly showing the payment methods (**Citibanamex**, **Paycash**, **BBVA** and **OXXO**). This allows the user to have a clearer selection of where they can pay the ticket and improves conversion.

1. [Render Brick](#bookmark_render_brick)
2. [Manage other payment methods](#bookmark_manage_other_payment_methods)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance. <br/></br>
> <br/></br>
> And to help, we've prepared a complete [code-example](/developers/en/docs/checkout-bricks/payment-brick/code-example/other-payment-methods/mexico) of the Payment Brick configuration **payments with cash via ticket** that you can use as a template.

> CLIENT_SIDE
>
> h2
>
> Render Brick

Once instantiated, the Brick can be rendered and have all its configurations compiled so that the final structure of the Brick is generated.

To render the Brick, insert the following code after the previous step and fill in the attributes according to the comments highlighted in this same code.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // total amount to be paid
   },
   customization: {
     paymentMethods: {
       ticket: 'all',
     },
   },
   callbacks: {
     onReady: () => {
        /*
          Callback called when Brick is ready
          Here you can hide loadings from your site, for example.
        */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback called when clicking on the data submission button
      
         return new Promise((resolve, reject) => {
           fetch("/processar-pago", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(formData)
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
     onError: (error) => {
       // callback called for all Brick error cases
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   'payment',
   'paymentBrick_container',
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```

The result of rendering the Brick should be like the image below:

![payment-Brick-other-payments-methods-mlm](checkout-bricks/payment-brick-other-payments-methods-mlm-en.jpg)

> WARNING
>
> Attention
>
> For an effective Brick control, the function submitted in `onSubmit` must always return a Promise. You should call `resolve()` only if your backend processes was successful. Call `reject()` if an error occurs. The `reject()` will make the Brick allow the fields to be filled in again and a new payment attempt possible. Also, when calling the `resolve()` method inside the `onSubmit` Promise, the Brick does not allow new payments. If you want to make a new payment, you must create a new Brick instance.

> CLIENT_SIDE 
>
> h2
>
> Manage other payment methods

> NOTE
>
> Important
>
> The payment methods described below require the buyer's address, name and document details to be filled in. For a better user experience, it is recommended that the integrator already initializes this data, so it will not be necessary to fill it manually. [Check here](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks) how to initialize the Brick with this data already filled in.

To include **payments with cash via ticket**, just use the following configuration:

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all',
      atm: 'all'
    }
  }
}
```

The properties `ticket` (for payment by printed ticket) and `atm`_*_ (for payment by ATM) accept 2 types of variable, `string` and `string[]`. In the example above, payments will be accepted with **all tickets available in Mexico**.

> _*Automatic Teller Machine_

If you don't want to allow both payment methods, instead of the string `all`, you can pass an array with just the desired IDs. As in the example below, where only payment via **OXXO** is accepted.

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'oxxo' ]
    }
  }
}
```

In this case, as **OXXO** is the only method available, the list for selecting where to pay will not be displayed.

Currently, these are the IDs that can be passed inside the array:

| Type of payment | IDs |
|---|---|
| Tickets | `oxxo` and `paycash` |
| ATM | `bancomer` and `banamex` |

> NOTE
>
> Important
>
> The API response contains IDs of several `payment_type_id`. IDs accepted by the `ticket` property are only those that contain `payment_type_id = 'ticket'` and the `atm` property accepts `payment_type_id = 'atm'`.