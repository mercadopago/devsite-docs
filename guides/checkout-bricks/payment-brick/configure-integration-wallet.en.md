# Mercado Pago Wallet

To configure Payment Brick integration to receive payments with Mercado Pago Wallet you need to follow the step below. 

> WARNING
>
> Important
>
> Before performing the configuration below, you must have configured the steps listed in the [Configure the integration](/developers/en/docs/checkout-bricks/payment-brick/configure-integration) section. <br/></br>
> <br/></br>
> And, to help, we've prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet) of the Payment Brick configuration with Mercado Pago Wallet that you can use as a template.

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

----[mlc]---- 
![payment-Brick-wallet-mlc](checkout-bricks/payment-brick-wallet-mlc-en.png)

------------
----[mlu]---- 
![payment-Brick-wallet-mlu](checkout-bricks/payment-brick-wallet-mlu-en.png)

------------
----[mpe, mco]---- 
![payment-Brick-wallet-mco-mpe](checkout-bricks/payment-brick-wallet-mco-mpe-en.png)

------------