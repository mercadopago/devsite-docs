# Configure the integration

## Create container

You will need to create a container to define where the brick will be placed on the screen. The creation of the container is done by inserting an element (for example, a div) in the HTML code of the page where the brick will be rendered (see the code below).

>NOTE
> 
> Attention
>
> The value shown in the `id` property below is just an example and can be altered, however, it should always match the `id` indicated in the render.

```html
  <div id="cardPaymentBrick_container"></div>
```

## Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago features** from your frontend securely.

You will need to install the SDK by adding the following in your HTML code:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Next, initialize the SDK by setting your [public key]([FAKER][CREDENTIALS][URL]) using JavaScript code as follows:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

## Instantiate brick

With the container created and our SDK JS installed, the next step is to instantiate the brick builder, which will allow generating the brick. To create the brick instance, insert the code below after the previous step.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Attention
>
> During brick instantiation, different errors may appear. For more details on each of them, see the [Possible Errors](/developers/en/docs/checkout-bricks-beta/additional-content/possible-errors) section.

## Render brick

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

  cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
  https://github.com/meliguicarvalho/sdk-js
};

renderCardPaymentBrick(bricksBuilder);
      
```

![cardform](checkout-bricks/card-form-en.png)
