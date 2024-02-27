# Default rendering

> WARNING
>
> Important
>
> To perform Brand Brick rendering, first perform the [initialization steps](/developers/en/docs/checkout-bricks/common-initialization) shared among all Bricks. 

## Configure the Brick

Create Brick's startup configuration.

```javascript
bricksBuilder.create(
    "brand",
    "brandBrick_container"
  );
};
```

## Render the Brick

Once the configurations are created, enter the code below to render the Brick. 

> NOTE
>
> Important
>
> The id `brandBrick_container` of the html div below should correspond to the value used in the method create() of the last step.

[[[
```html
<div id="brandBrick_container"></div>
```
```react-jsx
import { Brand } from '@mercadopago/sdk-react';

<Brand />
```
]]]

The result of rendering the Brick should look like the image below.

<center>

![brand-brick-layout-pt](checkout-bricks/brand-brick-layout-en.gif)

</center>