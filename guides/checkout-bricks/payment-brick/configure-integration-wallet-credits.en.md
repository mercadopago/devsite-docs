# Configure the integration with Mercado Pago Wallet and Installments without card

To configure Payment Brick integration to receive payments with **Mercado Pago Wallet and Installments without card** you need to follow the steps below. 

5. [Render Brick](#bookmark_render_brick)
6. [Manage payment options](#bookmark_manage_payment_options)

> WARNING
>
> Important
>
> Before performing the configuration below, you must have configured the steps listed in the [Configure the integration](/developers/en/docs/checkout-bricks/payment-brick/configure-integration) section. <br/></br>
> <br/></br>
> And, to help, we've prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet-credits) of the Payment Brick configuration with **Mercado Pago Wallet and Installments without card** that you can use as a template.

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
   preferenceId: '<PREFERENCE_ID>', // preferenceId generated in the backend
 },
 customization: {
   paymentMethods: {
     mercadoPago: 'all',
   },
 },
 callbacks: {
   onReady: () => {
      /*
       Callback llamado cuando Brick está listo
       Aquí puedes ocultar loadings de su sitio, por ejemplo.
      */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking on the data submission button
     // in this case, the user was redirected to
     // the Mercado Pago page to make the payment
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

----[mlb]---- 
![payment-Brick-wallet-credits-mlb](checkout-bricks/payment-brick-wallet-credits-mlb-en.jpg)

------------
----[mla]---- 
![payment-Brick-wallet-credits-mla](checkout-bricks/payment-brick-wallet-credits-mla-en.jpg)

------------
----[mlm]---- 
![payment-Brick-wallet-credits-mlm](checkout-bricks/payment-brick-wallet-credits-mlm-en.jpg)

------------

> CLIENT_SIDE
>
> h2
>
> Manage payment options

The code snippet responsible for including payments with Mercado Pago Wallet and Installment without credit card as payment method is the following:

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

The `mercadoPago` property accepts 2 types of variable, `string` and `string[]`. In the example above, payments with **Mercado Pago Wallet and Installment without card** will be accepted.

If you only want to select one of the two options, instead of the string `all`, you can pass an array with just the desired medium (`wallet_purchase` or `onboarding_credits`). As in the example below, where only payments with Mercado Pago Wallet will be accepted.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: ['wallet_purchase'], // ['onboarding_credits']
   }
 }
}
```