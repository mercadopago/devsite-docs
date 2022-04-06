## Set Theme

By default, the Card Payment Brick is instantiated/rendered with the default theme. However, it is possible to select another theme by setting the "theme" parameter when instantiating/rendering the brick.


[[[
```javascript
const bricks = mp.bricks({theme: 'dark'});
```
]]]

If you set the theme on brick **instantiation**, the theme change will be applied to all bricks that can be instantiated. On the other hand, if the theme is set on **render**, changes to the theme will only be reflected in the brick being created.


