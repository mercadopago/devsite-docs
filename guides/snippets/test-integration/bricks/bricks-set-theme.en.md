> CLIENT_SIDE
>
> h1
>
> Set theme 

By default, the Checkout Bricks is instantiated/rendered with the default theme. However, it is possible to select another theme by setting the "theme" parameter when instantiating/rendering the Brick.

```javascript
const bricks = mp.bricks({ theme: 'dark' });
```

If you set the theme on the **instantiation of the Brick class**, the theme change will be applied to all Bricks that can be instantiated. On the other hand, if the theme is set on **render**, changes to the theme will only be reflected in the Brick being created as the Javascript shown below.

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