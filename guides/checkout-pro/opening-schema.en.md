# Opening scheme
 
The opening scheme allows you to define how the checkout will open for the user. By default, Checkout Pro is opened in a **redirect** way, that is, with user redirection within the same page.

However, it is possible to customize the opening so that it opens on an external page, for example, or define the **modal** model, in which Checkout Pro opens in a window within the site itself, without redirection.

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

The code blocks below implement checkout in **redirect** mode to another page.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
       redirectMode: "blank"
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]


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