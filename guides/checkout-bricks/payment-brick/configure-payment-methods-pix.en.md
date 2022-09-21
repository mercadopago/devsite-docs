# Configure the integration with Pix

Pix is an instant electronic payment method offered by the Central Bank of Brazil to individuals and legal entities. Through Checkout Bricks, it is possible to offer this payment option from a **QR code** or a **payment code**.

> WARNING
>
> Important
>
> The Pix payment option will only be displayed if there is a Pix key registered] in Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps. <br/></br>
> <br/></br>
> To initialize the Pix form with the email field filled in, [click here](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks).

To configure Payment Brick integration to receive payments with Pix you need to follow the steps below. If you have already integrated card payments, you can start the integration from **step 4**.

1. [Create container](#bookmark_create_container)
2. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
3. [Instantiate brick](#bookmark_instantiate_brick)
4. [Render brick](#bookmark_render_brick)
5. [Manage payment with Pix](#bookmark_manage_payment_with_pix)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance.

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
  <div id="paymentBrick_container"></div>
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
   },
   customization: {
     paymentMethods: {
       bankTransfer: 'all',
     },
   },
   callbacks: {
     onReady: () => {
       // callback called when Brick is ready
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

![payment-brick-pix](checkout-bricks/payment-brick-pix-en.png)

> WARNING
>
> Attention
>
> For an effective Brick control, the function submitted in `onSubmit` must always return a Promise. You should call `resolve()` only if your backend processes was successful. Call `reject()` if an error occurs. The `reject()` will make the brick allow the fields to be filled in again and a new payment attempt possible. Also, when calling the `resolve()` method inside the `onSubmit` Promise, the brick does not allow new payments. If you want to make a new payment, you must create a new Brick instance.

> CLIENT_SIDE 
>
> h2
>
> Manage payment with Pix

To include Pix, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      bankTransfer: [ 'pix' ]
    }
  }
}
```
]]]

The `bankTransfer` property accepts 2 types of variables, `string` and `string[]`. For now, the only accepted medium for `bankTransfer` is **Pix**, so passing the array `['pix']` or the string `all` will yield the same result.

To pay with Pix, the buyer must enter their email address. It is highly recommended that the integrator enter this email field at brick startup, so the buyer does not have to manually type it. To initialize the email field, just follow the example below.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: 'jose@maria.com',
    }
  }
}
```
]]]