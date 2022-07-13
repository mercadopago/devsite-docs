# Configure the integration

To configure brick integration you need to follow the steps below:

1. [Create container](#bookmark_create_container)
2. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
3. [Instantiate brick](#bookmark_instantiate_brick)
4. [Render brick](#bookmark_render_brick)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance.
> <br/>
> And, to help, we have prepared a complete [code example](/developers/en/docs/checkout-bricks/integration/code-example) that you can use as a template.

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
  <div id="cardPaymentBrick_container"></div>
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

Next, initialize the SDK by setting your [public key]([FAKER][CREDENTIALS][URL]) using JavaScript code as follows:

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
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //value to be charged
    },
    callbacks: {
      onReady: () => {
        // callback called when the brick is ready
      },
      onSubmit: (cardFormData) => {
        // callback called when the user clicks on the submit data button

        // example of sending the data collected by our Brick to your server
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
      onError: (error) => { 
        // callback called to all error cases related to the Brick
      },
    },
  };
  const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);     
```

The result of rendering the brick should be like the image below:”

![cardform](checkout-bricks/card-form-en.png)

> PREV_STEP_CARD_EN
>
> Prerequisites
>
> Learn about the prerequisites needed to integrate Checkout Bricks.
>
> [Prerequisites](/developers/en/docs/checkout-bricks/integration/prerequisites)
 
> NEXT_STEP_CARD_EN
>
> Send payments to Mercado Pago
>
> After you set up the integration, here's how to send payments to Mercado Pago.
>
> [Send payments to Mercado Pago](/developers/en/docs/checkout-bricks/integration/payment-submission) 