# Default rendering

Before rendering the Brand Brick, first execute the [initialization steps](/developers/en/docs/checkout-bricks/common-initialization) shared among all Bricks. From there, see below the necessary information to configure and render the Brand Brick.

> NOTE
>
> Note
>
> To consult the types and specifications of the parameters and responses of the Brick functions, refer to the [technical documentation](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/brand.md).

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

> WARNING
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

![brand-brick-en](checkout-bricks/brand-brick-en.gif)