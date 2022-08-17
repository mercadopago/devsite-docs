# Color style
 
Checkout Pro allows you to customize the color style of your interface elements, customizing the way it will be displayed to the user.
 
Among the color customizations, it is possible to customize the color of the header and checkout elements such as buttons, data fields, borders, transition elements and text.
 
> NOTE
>
> Important
>
> The customization of colors and elements is valid only for the modal opening scheme. In addition, the color attributes must be in hexadecimal format.
 
To enable color style editing on the checkout and its elements, add the `theme` object and the `elementsColor` attribute with the color you want to apply to the Checkout Pro launch options, as shown below.
 
[[[
```html
<script>
 mp.checkout({
   preference: {...},
   render: {...},
   theme: {
       elementsColor: ''.
   }
 });
</script>
```
]]]
