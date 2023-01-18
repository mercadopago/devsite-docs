# Configure the integration with Pix

Pix is an instant electronic payment method offered by the Central Bank of Brazil to individuals and legal entities. Through Checkout Bricks, it is possible to offer this payment option from a **QR code** or a **payment code**.

> WARNING
>
> Important
>
> The Pix payment option will only be displayed if there is a Pix key registered] in Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps. <br/></br>
> <br/></br>
> To initialize the Pix form with the email field filled in, [click here](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks).<br/></br>
> <br/></br>
> And to help, we've prepared a complete [code-example](/developers/en/docs/checkout-bricks/payment-brick/code-example/pix) of the Payment Brick configuration with Pix that you can use as a template.

To configure Payment Brick integration to receive payments with Pix you need to follow the step below. 

1. [Render Brick](#bookmark_render_brick)

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
       bankTransfer: ['pix'],
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

The result of rendering the Brick should be like the image below:”

![payment-Brick-pix](checkout-bricks/payment-brick-pix-en.png)

> WARNING
>
> Attention
>
> For an effective Brick control, the function submitted in `onSubmit` must always return a Promise. You should call `resolve()` only if your backend processes was successful. Call `reject()` if an error occurs. The `reject()` will make the Brick allow the fields to be filled in again and a new payment attempt possible. Also, when calling the `resolve()` method inside the `onSubmit` Promise, the Brick does not allow new payments. If you want to make a new payment, you must create a new Brick instance.

To pay with Pix, the buyer must enter their email address. It is highly recommended that the integrator enter this email field at Brick startup, so the buyer does not have to manually type it. To initialize the email field, just follow the **example below**.

```Javascript
settings = {
  ...,
  initialization: {
 ...,
 payer: {
   email: 'jose@maria.com'
 }
}
```