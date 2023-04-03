# Change color style

Checkout Pro allows you to customize the color style of your interface elements, customizing the way it will be displayed to the user.

Among the color customizations it is possible to customize the color of the header and checkout elements such as buttons, data fields, borders, transition elements and text.

> WARNING
>
> Important
>
> The customization of colors and elements is valid only for the modal opening scheme. In addition, the color attributes must be **in hexadecimal format**, for example, #ff0000.

To enable color style editing on the checkout and its elements, add the `theme` object and the `elementsColor` and `headerColor` attribute with the color you want to apply, launch options as shown below.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
       checkout: {
           theme: {
               elementsColor: "#4287F5",
               headerColor: "#4287F5",
           },
       },
   },
});
```
```react-jsx
const customization = {
 checkout: {
   theme: {
     elementsColor: '#4287F5',
     headerColor: '#4287F5'
   },
 },
};


<Wallet
  initialization={{ preferenceId: '<PREFERENCE_ID>'}}
  customization={customization}
/>
```
]]]