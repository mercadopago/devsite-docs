# Configure the integration with Mercado Pago Wallet

To configure Payment Brick integration to receive payments with Mercado Pago Wallet you need to follow the steps below. 

> NOTE
>
> Important
>
> Consider that when a user chooses to make a payment using the Mercado Pago Wallet, he will be redirected to the Mercado Pago page to complete the payment. Therefore, it is necessary to configure the `back_url`s if you want to return to your site at the end of the payment. For more information, visit the [Redirect buyer to your website](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences) section.

1. [Create preference](#bookmark_create_preference)
2. [Create container](#bookmark_create_container)
3. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
4. [Instantiate brick](#bookmark_instantiate_brick)
5. [Render brick](#bookmark_render_brick)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance. <br/></br>
> <br/></br>
> And, to help, we have prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet) that you can use as a template.

> CLIENT_SIDE
>
> h2
>
> Create preference

The first step to give the user the possibility to pay using the Mercado Pago Wallet is to create a preference in your backend. Add the [Mercado Pago SDK](/developers/en/docs/sdks-library/landing) and the necessary [credentials](/developers/en/guides/additional-content/credentials/credentials) to your project to enable the preference usage:

```node
// SDK do Mercado Pago
const mercadopago = require('mercadopago');
// Add the credentials
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
``` 

Then configure the preference according to your product or service:

```node
// Create a preference object
let preference = {
 "items": [
   {
     "id": "item-ID-1234",
     "title": "My product",
     "quantity": 1,
     "unit_price": 75.76
   }
 ],
 "back_urls": {
     "success": "https://www.success.com",
     "failure": "http://www.failure.com",
     "pending": "http://www.pending.com"
 },
 "auto_return": "approved",
};
 
mercadopago.preferences.create(preference)
.then(function(response){
// This value is the preferenceId that will be sent to the brick at startup
 const preferenceId = response.body.id;
}).catch(function(error){
 console.log(error);
});
```

> For more details on how to configure it, access the [Preferences](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences) section.

> CLIENT_SIDE
>
> h2
>
> Create container

You will need to create a container to define where the brick will be placed on the screen. The creation of the container is done by inserting an element (for example, a div) in the HTML code of the page where the brick will be rendered (see the code below).

> NOTE
> 
> Attention
>
> The value shown in the `id` property below is just an example and can be altered, however, it should always match the `id` indicated in the render.

```html
  <div id="PaymentBrick_container"></div>
```

> CLIENT_SIDE
>
> h2
>
> Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago features** from your frontend securely.

> NOTE
>
> Attention
>
> JS code can be included in a `< script >` tag or a separate JS file.

You will need to install the SDK by adding the following in your HTML code:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Next, initialize the SDK by setting your [public key](/developers/en/guides/additional-content/credentials/credentials)using JavaScript code as follows:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

> CLIENT_SIDE
>
> h2
>
> Instantiate brick

With the container created and our SDK JS installed, the next step is to instantiate the brick builder, which will allow generating the brick. To create the brick instance, insert the code below after the previous step.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Attention
>
> During brick instantiation, different errors may appear. For more details on each of them, see the [Possible Errors](/developers/en/docs/checkout-bricks/additional-content/possible-errors) section.

> CLIENT_SIDE
>
> h2
>
> Render brick

Once instantiated, the brick can be rendered and have all its configurations compiled so that the final structure of the brick is generated.

To render the brick, insert the following code after the previous step and fill in the attributes according to the comments highlighted in this same code.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // amount of processing to be performed
   preferenceId: 'abcd1234', // preferenceId generated in the backend
 },
 callbacks: {
   onReady: () => {
     // callback called when Brick is ready
   },
   onSubmit: ({ paymentType, formData }) => {
     // callback called when clicking on the data submission button
  
     if (paymentType === 'wallet_purchase') {
       // in this case, the user was redirected to
        // the Mercado Pago page to make the payment
     }
   },
   onError: (error) => {
     // callback called for all Brick error cases
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

The result of rendering the brick should be like the image below:”

![payment-brick](checkout-bricks/card-form-en.png)

> WARNING
>
> Attention
>
> For an effective Brick control, the function submitted in `onSubmit` must always return a Promise. You should call `resolve()` only if your backend processes was successful. Call `reject()` if an error occurs. The `reject()` will make the brick allow the fields to be filled in again and a new payment attempt possible. Also, when calling the `resolve()` method inside the `onSubmit` Promise, the brick does not allow new payments. If you want to make a new payment, you must create a new Brick instance.

> CLIENT_SIDE 
>
> h2
>
> Manage Mercado Pago Wallet