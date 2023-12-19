# Opening mode 

The opening scheme allows you to define how the checkout will open for the user. By default, Checkout Bricks is opened in a **redirect** way, that is, with user redirection within the same page. However, it is possible to customize the opening so that the opening is on an external page, for example, or define the **modal** model, in which Checkout Bricks is opened in a window within the site itself, without redirection.

> WARNING
> 
> Attention
>
> It is **extremely important** to pay attention, when creating the preference, to the `back_urls` configuration, as they will be responsible for guiding the return flow to your website when the checkout is completed. For more information, see the [Callback URLs.](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web) section

# Redirection scheme to another page

Changing the redirection behavior is done by the `redirectMode` property, which can assume the values `self` or `blank`.

| Valor | Descrição | 
|--- |--- | 
| self | Keeps the redirect on the same page. | 
| blank | Externalizes the redirect to a new page. |
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
renderComponent (bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]