# Callbacks

To simplify integration and interaction with Brick, callbacks are provided that can be used at different moments in the lifecycle to execute functions on your website.

| Value prop | Time of use |
|---|---|
|`onReady` |When finishing loading the Brick.|

[[[
```javascript
const settings = {
   callbacks: {
      onReady: () => {
        /*
          Callback called when Brick is ready.
          Here you can hide loadings on your site, for example.
        */
      },
    },
};
```
```react-jsx
import { Brand } from '@mercadopago/sdk-react';
const onReady = async () => {
  /*
    Callback called when Brick is ready.
    Here you can hide loadings on your site, for example.
  */
};

<Brand
   onReady={onReady}
/>
```
]]]