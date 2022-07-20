> CLIENT_SIDE
>
> h1
>
> Set theme

By default, the Card Payment Brick is instantiated/rendered with the default theme. However, it is possible to select another theme by setting the "theme" parameter when instantiating/rendering the brick.

```javascript
const bricks = mp.bricks({ theme: 'dark' });
```

If you set the theme on the **instantiation of the brick class**, the theme change will be applied to all bricks that can be instantiated. On the other hand, if the theme is set on **render**, changes to the theme will only be reflected in the brick being created as the Javascript shown below.

```javascript
const settings = {
    ...,
    customization: {
        visual: {
            style: {
                theme: 'dark' | 'default' | 'bootstrap' | 'flat'
           }
        }
    }    
}
```
> PREV_STEP_CARD_EN
>
> Code example
>
> To simplify and optimize the integration process, view an example of a Checkout Bricks integration.
>
> [Send payments to Mercado Pago](/developers/en/docs/checkout-bricks/integration/code-example)

> NEXT_STEP_CARD_EN
>
> Change CSS variables
>
> Learn how to change the Card Payment Brick CSS variables if you need.
>
> [Change CSS variables](/developers/en/docs/checkout-bricks/additional-customization/modify-css-variables)