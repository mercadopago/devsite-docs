# Configure the integration with Mercado Pago Wallet

To configure Payment Brick integration to receive payments with Mercado Pago Wallet you need to follow the steps below. If you have already integrated card payments, you can start the integration from **step 5**.

1. [Create container](#bookmark_create_container)
2. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
3. [Instantiate brick](#bookmark_instantiate_brick)
4. [Render brick](#bookmark_render_brick)
5. [Manage Mercado Pago Wallet](#bookmark_manage_mercado_pago_wallet)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance. <br/></br>
> <br/></br>
> And, to help, we have prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet) that you can use as a template.

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
      amount: 100, //value to be charged
    },
    callbacks: {
      onReady: () => {
        // callback called when the brick is ready
      },
      onSubmit: (formData) => {
        // callback called when the user clicks on the submit data button

        // example of sending the data collected by our Brick to your server
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
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
        // callback called to all error cases related to the Brick
      },
    },
  };
  const PaymentBrickController = await bricksBuilder.create('Payment', 'PaymentBrick_container', settings);
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