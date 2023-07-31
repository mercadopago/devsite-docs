# Possible erros

Below you will find lists of errors that may occur during Brick integration. Whether they are related to **sending variables** or **communication with external services** (Mercado Pago APIs).

## Variables passed by the integrator

During the Brick integration process, it is possible that **when the Brick is instantiated**, different errors related to sending variables may be shown to the integrator. These errors will be shown through a log in the browser console (the buyer does not receive any message).

| Error  | Message  | Cause code  |
| --- | --- | --- |
| Empty configuration object  | [Initialization error] Settings object is empty, please pass required properties  | settings_empty  |
| Absence of the property amount (total amount of the purchase)  | [Initialization error] Amount property is required  | missing_amount_property  |
| Absence of the callbacks of onReady and onError  | [Initialization error] Callbacks onReady and onError are required  | missing_required_callbacks  |
| Absence of an ID of an HTML element that serves as the container of the Brick  | [Initialization error] You must provide an HTML element ID as a container to allow component rendering  | missing_container_id  |
| Absence of the property locale (preferred language)  | [Initialization error] Locale property is required  | missing_locale_property  |
| Generic error occurred during Brick initialization, usually some validation that failed due to a value sent by the integrator  | [Initialization error] Brick incorrectly initialized: {error}  | incorrect_initialization  |

## Communication with external services (Mercado Pago APIs)

| Error | Message for the user | Message for the integrator | Critical? | Cause code |
| --- | --- | --- | --- | --- |
| Inability to generate Secure Fields within the Card Payment Brick form  | An error occurred  | The integration with Secure Fields failed  | Yes  | fields_setup_failed  |
| It wasn’t possible to get the payment method information according to the integrator's public_key  | An error occurred. Please try again later.  | An error occurred while trying to search for payment methods  | No  | get_payment_methods_failed  |
| It wasn’t possible to create the token that represents the card information  | An error occurred and the payment could not be processed. Please try again later.  | Failed to create card token  | No  | card_token_creation_failed  |
| Error when searching for types of identification documents according to the country defined in the MercadoPago.js SDK  | An error occurred. Please try again later.  | Failed to get identification types  | No  | get_identification_types_failed  |
| Failed to get bin based card information  | An error occurred. Please try again later.  | Failed to get payment methods using card bin  | No  | get_card_bin_payment_methods_failed  |
| Error searching card issuing banks  | An error occurred. Please try again later.  | Failed to get card issuer(s)  | No  | get_card_issuers_failed  |
| Error when searching the amount and the values of the payment installments according to the _amount_ sent by the integrator  | An error occurred. Please try again later.  | Failed to get payment installments  | No  | get_payment_installments_failed  |
| Incomplete payment fields for some reason (fees, card issuer, _payment_method_id_)  | An error occurred. Please try again later.  | SOne of the following messages will be returned according to the type of error: * The payment method id is missing * The payment installments are missing * The card issuer is missing  |  No  | missing_payment_information  |

## How to update data sent during the initialization of a Brick

If it is necessary to update the values sent during the initialization of a Brick, it is necessary to explicitly specify the code's asynchronicity and use the `unmount` function provided in the Brick's _Controller_ before updating the data. Additionally, the configuration object must be sent in its entirety, as it is related to a rendering process.

It is important to remember that one should not simply call the rendering function with the new values. This would lead to a duplication of the Brick on the screen, and the second rendering would display an error.

The example of code below exemplifies the flow using the update of a preference in the [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/introduction), but the flow itself is valid for necessary updates in the initialization data of any brick.

```Javascript
//First render
const renderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100,
          preferenceId: "<YOUR_FIRST_PREFERENCE_ID>"
        },
...
window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );

    };

await renderPaymentBrick(bricksBuilder);

//Second render
window.paymentBrickController.unmount()

const secondRenderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100,
          preferenceId: "<YOUR_SECOND_PREFERENCE_ID>"
        },
...
window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );

    };

await secondRenderPaymentBrick(bricksBuilder);

...

// Brick Container
<div id="paymentBrick_container"></div>
```

## Error "Container Not Found"

For the rendering to occur correctly, it is necessary that the ID of the container in the `DOM` where the Brick will be rendered is provided identically to the Brick's creation function. Any string can be used as the name, and as long as the names are the same, this error will not occur. Note that classes are not accepted as a container for the Brick, it needs to be an ID.

Another important point is to ensure that when calling the Brick's rendering function, its container is already rendered on the screen. We emphasize this point due to the possibility of the brick's container being inside other containers. This rendering sequence is important to avoid the mentioned error.

Below is a code snippet exemplifying this point using the [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/introduction).

```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = { ... };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};

await renderPaymentBrick(bricksBuilder);

...

<div id="paymentBrick_container"></div>
```

## Using Bricks with Next.js

**Next.js** is a framework for creating interfaces with React components. Therefore, it is possible to use our [React SDK](/developers/en/docs/sdks-library/client-side/sdk-js-react-installation) to integrate Bricks, as well as other solutions provided through the React SDK.

However, our SDK was structured for client-side rendering while Next.js typically works with _Server-Side Rendering_ (SSR). Thus, when using our SDK, it is necessary to take this into consideration.

You can achieve this integration by dynamically importing the SDK, as indicated in the [Next.js documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic). Below you will find an example of dynamically importing a component provided in our SDK, the [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/introduction).

```react-jsx

//index.tsx

import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const CheckoutMercadoPago = dynamic(() => import("./checkoutMercadoPago"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout Brick + NextJS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <CheckoutMercadoPago />
      </main>
    </>
  );
}

```
```react-jsx
//checkoutMercadoPago.tsx

import { initMercadoPago, Payment } from "@mercadopago/sdk-react";

initMercadoPago("<YOUR_PUBLIC_KEY>");

const CheckoutMercadoPago = () => {
  const initialization = {
    amount: <YOUR_AMOUNT>,
    preferenceId: "<YOUR_PREFERENCE_ID>"
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
   
 // callback called when clicking the submit data button
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receive payment result
          resolve();
        })
        .catch((error) => {
          // handle error response when trying to create payment
          reject();
        });
    });
  };
  const onError = async (error) => {
    // callback called for all Brick error cases
    console.log(error);
  };
  const onReady = async () => {
    /*
     Callback called when Brick is ready.
     Here you can hide loadings from your site, for example.
    */
  };

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
};
export default CheckoutMercadoPago;
```