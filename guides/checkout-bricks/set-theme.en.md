## Set Theme

By default, the Card Payment Brick is instantiated/rendered with the default theme. However, it is possible to select another theme by setting the "theme" parameter when instantiating/rendering the brick.


[[[
```javascript
const bricks = mp.bricks({theme: 'dark'});
```
]]]

If you set the theme on the **instantiation of the brick class**, the theme change will be applied to all bricks that can be instantiated. On the other hand, if the theme is set on **render**, changes to the theme will only be reflected in the brick being created as the Javascript shown below.

[[[
```javascript
 
const settings = {
   initialization: {
       amount,
   },
   callbacks: {
       onSubmit: (data) => {
           // callback called when the user clicks on the submit data button
       },
       onReady: (error) => {
           // callback called when the brick is ready
       },
       onError: (error) => {
           // callback called to all error cases related to the Brick
       },
   },
   style: {
       theme: 'dark' | 'default' | 'bootstrap' | 'flat'
   }
}

const brick = await bricks.create('cardPayment', settings);
const cardPaymentBrick = await brick.render('cardPaymentBrick_container');
```
]]]



