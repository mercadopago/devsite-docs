# SDK JS - React

Our React SDK is compatible with the most updated standard for web development, as well as providing functions and components that allow for simplified integration with Mercado Pago.

To use the React SDK, install it via npm using the code below.


[[[
```bash
npm install @mercadopago/sdk-react

```
]]]

Next, add the public key of the account being integrated so that it can be identified when connecting to Mercado Pago.

> NOTE
>
> Important
>
> See [Credentials](/developers/en/docs/credentials) for more details on the public key.

[[[
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

```
]]]


After completing the SDK installation, you can use the following modules to create the Checkout.

- [Checkout Bricks](/developers/en/docs/sdks-library/client-side/sdk-js-react/checkout-bricks-installation)
- [Métodos Core](/developers/en/docs/sdks-library/client-side/sdk-js-react/core-methods-installation)
- [Secure fields](/developers/en/docs/sdks-library/sdk-js-react/react/secure-fields-installation)
