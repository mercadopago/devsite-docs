# Opening scheme
 
The opening scheme allows you to define how the checkout will open to the user. By default, checkout pro opens in  **Modal** format, that is, in a window within the website itself, without redirecting to an external page to complete the payment.
 
However, it is possible to customize the opening and define the **Redirect** model, in which Checkout Pro opens in a window within the site itself, without redirection.

> NOTE
> 
> Attention
>
> It is extremely important to pay attention, when creating the preference, to the configuration of the `back_urls` because they will be responsible for guiding the return flow to your website when the checkout is completed. For more information, see the [Return URLs](/developers/en/docs/checkout-pro/checkout-customization/user-interface/redirection) section.

## Redirection scheme to another page

Changing the redirection behavior is done by the `redirectMode` property, which can assume the values `self`, `blank` or `modal`.

| Value | Description |
| --- |--- |
| self | Keeps the redirect on the same page. |
| blank | Externalizes the redirect to a new page. |
| modal | Opens the checkout experience in modal mode. |

The code blocks below implement checkout in **redirect** mode to another page.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'blank'
   }
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent(bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

## Opening scheme in modal mode

To define the modal opening model, just change the `redirectMode: 'modal'` property during integration, as in the example below.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'modal'
   },
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent(bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'modal' }} />
```
]]]

The `redirectMode: 'modal'` property indicates that the checkout should open in **modal** mode and not **redirect**.

## Direct opening scheme

It is also possible to perform the integration through backend calls directly to the [Preferences API](/developers/en/reference/preferences/_checkout_preferences/post). In this model, you will get the Checkout Pro link in the `init_point` attribute in the response to the API request. From there, just use it to redirect the buyer to checkout.

To define the direct redirection model, insert the code below in your project informing the `1`init_point`, field which is returned when creating the previously generated preference.

```html
<!doctype html>
<html>
 <head>
   <title>Pagar</title>
 </head>
 <body>
   <a href="YOUR_INIT_POINT"> // Indicate the init_point returned when creating the preference
     <button>
       Pay with Mercado Pago
     </button>
   </a>
 </body>
</html>
```