> CLIENT_SIDE
>
> h1
>
> Add checkout

First, make sure you have **created the [preference in your backend](/developers/en/docs/checkout-pro/integrate-preferences)**.

Then, you will need to install the Mercado Pago frontend SDK in your project to add the payment button.

The installation is basically done in **two steps**:

1. [Add the Mercado Pago SDK to the project with your configured credentials](/developers/en/docs/checkout-pro/integrate-checkout-pro/web#bookmark_add_the_mercado_pago_sdk_to_the_project_with_your_configured_credentials)
2. [Start the checkout from the previously generated preference](/developers/en/docs/checkout-pro/integrate-checkout-pro/web#bookmark_iniciar_el_checkout_desde_la_preferencia)

> CLIENT_SIDE
>
> h2
>
> Add the Mercado Pago SDK to the project with your configured credentials

To include the Mercado Pago.js SDK, add the code below to the project's HTML or install the library for ReactJs.

[[[
```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

Then, initialize the integration by setting your [public key](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) using the following JavaScript code.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```
```react-jsx
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

For JavaScript/HTML integrations, via CDN, you will still need to create an identifier container to define the location where the button will be inserted on the screen. The creation of the container is done by inserting an element in the HTML code of the page in which the component will be rendered.

[[[
```html
 <div id="wallet_container"></div>
```
]]]

> NOTE
>
> Attention
>
> The value displayed in the ID property below is an example only and can be changed, but it must always match the ID indicated in the rendering step.

> CLIENT_SIDE
>
> h2
>
> Start the checkout from the preference

At the end of the previous step, **initialize your checkout using the ID of the previously created preference with the identifier of the element where the button should be displayed**, if you are using the `Javascript/HTML` integration, or by instantiating the component, in the case from the `React` library, as shown in the examples below.

----[mlm]----
[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
customization: {
 texts: {
  valueProp: 'smart_option',
 },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
```
]]]

------------
----[mla, mlb, mpe, mlu, mlc, mco]----
[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
```
]]]

------------

You will then be able to observe the payment button rendered on your page.

<center>

![wallet-render](cow/cow-render-wallet-en.png)

</center>

In the example above, a payment button will be rendered and will be responsible for opening Checkout Pro. If you want the experience with Checkout Pro to be done in an **external tab or in a modal way**, check the section [Opening Schema](/developers/en/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

## Setting up the back_urls

At the end of the payment process, it is possible to redirect the buyer to another environment of the site through the `back_urls` attribute that is configured when creating the preference. The `back_urls` will be responsible for guiding the flow back to your website when the payment is completed. It is possible to define three different return URLs that correspond to scenarios of pending payment, success, or error.

For more information, please refer to the [Return URL](/developers/en/docs/checkout-pro/checkout-customization/user-interface/redirection) section.

> WARNING
>
> Important
>
> Do not use local domains in the `back_urls` value, such as 'localhost/' or '127.0.0.1' with or without a specified port. We recommend using a server with a named domain (DNS) or development IPs to be able to return to the site after payment. Otherwise, the "Something went wrong" message will appear when the purchase process is completed.

## Receiving payment statuses

When creating a payment it is possible to receive 3 different statuses: `Pending`, `Rejected` and `Approved`. To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/checkout-pro/additional-content/your-integrations/notifications) for more details.

## Implementation example

Check out the [full integration example](http://github.com/mercadopago/checkout-payment-sample) on GitHub for **PHP** or **NodeJS** to download a basic project for quick implementation from Checkout Pro.